import Progress from "../models/Progress.js";

const getTodayProgress = async (req, res) => {
  try {
    const dateKey = new Date().toISOString().slice(0, 10);

    let progress = await Progress.findOne({
      user: req.user._id,
      dateKey,
    });

    if (!progress) {
      progress = {
        user: req.user._id,
        dateKey,
        testsCompleted: 0,
        lessonsCompleted: 0,
        practiceMinutes: 0,
        totalCharacters: 0,
        correctCharacters: 0,
        averageWpm: 0,
        averageAccuracy: 0,
        bestWpm: 0,
      };
    }

    res.json({
      success: true,
      progress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load today's progress",
    });
  }
};

const getProgressHistory = async (req, res) => {
  try {
    const { days = 30 } = req.query;

    const startDate = new Date();

    startDate.setDate(startDate.getDate() - Number(days));

    const progress = await Progress.find({
      user: req.user._id,
      createdAt: {
        $gte: startDate,
      },
    }).sort({
      dateKey: 1,
    });

    res.json({
      success: true,
      progress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load progress history",
    });
  }
};

const getWeeklyProgress = async (req, res) => {
  try {
    const startDate = new Date();

    startDate.setDate(startDate.getDate() - 6);

    startDate.setHours(0, 0, 0, 0);

    const progress = await Progress.find({
      user: req.user._id,
      createdAt: {
        $gte: startDate,
      },
    }).sort({
      dateKey: 1,
    });

    res.json({
      success: true,
      progress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load weekly progress",
    });
  }
};

export { getTodayProgress, getProgressHistory, getWeeklyProgress };
