import TypingTest from "../models/TypingTest.js";
import TestResult from "../models/TestResult.js";
import Progress from "../models/Progress.js";
import User from "../models/User.js";

import { calculateWPM, calculateAccuracy } from "../utils/calculateStats.js";

const getTests = async (req, res) => {
  try {
    const { category, difficulty } = req.query;

    const filter = {
      isActive: true,
    };

    if (category) {
      filter.category = category;
    }

    if (difficulty) {
      filter.difficulty = difficulty;
    }

    const tests = await TypingTest.find(filter).select("-__v").sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: tests.length,
      tests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load tests",
    });
  }
};

const getRandomTest = async (req, res) => {
  try {
    const { difficulty } = req.query;

    const match = {
      isActive: true,
    };

    if (difficulty) {
      match.difficulty = difficulty;
    }

    const tests = await TypingTest.aggregate([
      {
        $match: match,
      },
      {
        $sample: {
          size: 1,
        },
      },
    ]);

    if (!tests.length) {
      return res.status(404).json({
        success: false,
        message: "No typing tests available",
      });
    }

    res.json({
      success: true,
      test: tests[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get random test",
    });
  }
};

const getTestById = async (req, res) => {
  try {
    const test = await TypingTest.findOne({
      _id: req.params.id,
      isActive: true,
    });

    if (!test) {
      return res.status(404).json({
        success: false,
        message: "Typing test not found",
      });
    }

    res.json({
      success: true,
      test,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get test",
    });
  }
};

const submitTest = async (req, res) => {
  try {
    const { testId, timeTaken, typedText } = req.body;

    if (!testId || !timeTaken || typedText === undefined) {
      return res.status(400).json({
        success: false,
        message: "testId, timeTaken and typedText are required",
      });
    }

    const test = await TypingTest.findById(testId);

    if (!test) {
      return res.status(404).json({
        success: false,
        message: "Test not found",
      });
    }

    const originalText = test.text;

    let correctCharacters = 0;
    let incorrectCharacters = 0;

    const maxLength = Math.max(originalText.length, typedText.length);

    for (let i = 0; i < maxLength; i++) {
      if (typedText[i] !== undefined && typedText[i] === originalText[i]) {
        correctCharacters++;
      } else {
        incorrectCharacters++;
      }
    }

    const totalCharacters = typedText.length;

    const accuracy = calculateAccuracy(correctCharacters, totalCharacters);

    const wpm = calculateWPM(correctCharacters, Number(timeTaken));

    const dateKey = new Date().toISOString().slice(0, 10);

    const result = await TestResult.create({
      user: req.user._id,
      test: test._id,
      wpm,
      accuracy,
      correctCharacters,
      incorrectCharacters,
      totalCharacters,
      timeTaken: Number(timeTaken),
      errors: incorrectCharacters,
      completed: true,
      dateKey,
    });

    const user = await User.findById(req.user._id);

    const previousTotal = user.totalTests;

    const previousAverage = user.averageWpm;

    user.totalTests += 1;

    user.bestWpm = Math.max(user.bestWpm, wpm);

    user.bestAccuracy = Math.max(user.bestAccuracy, accuracy);

    user.averageWpm = Math.round(
      (previousAverage * previousTotal + wpm) / user.totalTests,
    );

    user.totalPracticeTime += Math.round(Number(timeTaken) / 60);

    const lastDate = user.lastPracticeDate
      ? new Date(user.lastPracticeDate)
      : null;

    const today = new Date();

    if (lastDate) {
      const lastDay = new Date(lastDate);

      lastDay.setHours(0, 0, 0, 0);

      const currentDay = new Date(today);

      currentDay.setHours(0, 0, 0, 0);

      const difference = Math.floor((currentDay - lastDay) / 86400000);

      if (difference === 1) {
        user.currentStreak += 1;
      } else if (difference > 1) {
        user.currentStreak = 1;
      }
    } else {
      user.currentStreak = 1;
    }

    user.longestStreak = Math.max(user.longestStreak, user.currentStreak);

    user.lastPracticeDate = today;

    await user.save();

    let progress = await Progress.findOne({
      user: req.user._id,
      dateKey,
    });

    if (!progress) {
      progress = await Progress.create({
        user: req.user._id,
        dateKey,
      });
    }

    const previousTests = progress.testsCompleted;

    progress.testsCompleted += 1;

    progress.practiceMinutes += Number(timeTaken) / 60;

    progress.totalCharacters += totalCharacters;

    progress.correctCharacters += correctCharacters;

    progress.bestWpm = Math.max(progress.bestWpm, wpm);

    progress.averageWpm =
      (progress.averageWpm * previousTests + wpm) / progress.testsCompleted;

    progress.averageAccuracy = calculateAccuracy(
      progress.correctCharacters,
      progress.totalCharacters,
    );

    await progress.save();

    res.status(201).json({
      success: true,
      message: "Test submitted successfully",
      result,
      stats: {
        wpm,
        accuracy,
        correctCharacters,
        incorrectCharacters,
        totalCharacters,
        timeTaken,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to submit test",
      error: error.message,
    });
  }
};

const getMyTestHistory = async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    const results = await TestResult.find({
      user: req.user._id,
    })
      .populate("test", "title difficulty category")
      .sort({
        createdAt: -1,
      })
      .skip(skip)
      .limit(Number(limit));

    const total = await TestResult.countDocuments({
      user: req.user._id,
    });

    res.json({
      success: true,
      results,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load test history",
    });
  }
};

export { getTests, getRandomTest, getTestById, submitTest, getMyTestHistory };
