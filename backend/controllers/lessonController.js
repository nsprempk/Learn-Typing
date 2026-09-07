import Lesson from "../models/Lesson.js";
import User from "../models/User.js";
import Progress from "../models/Progress.js";

const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find({
      isActive: true,
    })
      .select("-quizQuestions.correctAnswer")
      .sort({
        lessonNumber: 1,
      });

    res.json({
      success: true,
      lessons,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load lessons",
    });
  }
};

const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findOne({
      _id: req.params.id,
      isActive: true,
    });

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found",
      });
    }

    res.json({
      success: true,
      lesson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load lesson",
    });
  }
};

const getLessonByNumber = async (req, res) => {
  try {
    const lesson = await Lesson.findOne({
      lessonNumber: Number(req.params.number),
      isActive: true,
    });

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found",
      });
    }

    res.json({
      success: true,
      lesson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load lesson",
    });
  }
};

const completeLesson = async (req, res) => {
  try {
    const { lessonNumber, accuracy = 0 } = req.body;

    const lesson = await Lesson.findOne({
      lessonNumber: Number(lessonNumber),
    });

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found",
      });
    }

    if (Number(accuracy) < lesson.passingAccuracy) {
      return res.status(400).json({
        success: false,
        message: `You need at least ${lesson.passingAccuracy}% accuracy to pass this lesson`,
        passed: false,
      });
    }

    const user = await User.findById(req.user._id);

    if (Number(lessonNumber) >= user.currentLesson) {
      user.currentLesson = Number(lessonNumber) + 1;

      await user.save();
    }

    const dateKey = new Date().toISOString().slice(0, 10);

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

    progress.lessonsCompleted += 1;

    await progress.save();

    res.json({
      success: true,
      passed: true,
      message: "Lesson completed successfully",
      currentLesson: user.currentLesson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to complete lesson",
    });
  }
};

export { getLessons, getLessonById, getLessonByNumber, completeLesson };
