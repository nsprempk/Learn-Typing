import User from "../models/User.js";

const getLeaderboard = async (req, res) => {
  try {
    const { limit = 20 } = req.query;

    const users = await User.find({
      isActive: true,
    })
      .select(
        "name avatar bestWpm averageWpm bestAccuracy totalTests currentStreak",
      )
      .sort({
        bestWpm: -1,
        bestAccuracy: -1,
      })
      .limit(Number(limit));

    res.json({
      success: true,
      leaderboard: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load leaderboard",
    });
  }
};

export { getLeaderboard };
