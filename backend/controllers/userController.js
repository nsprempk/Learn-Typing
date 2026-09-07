import User from "../models/User.js";
import TestResult from "../models/TestResult.js";

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get profile",
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, avatar } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (name !== undefined) {
      user.name = name.trim();
    }

    if (avatar !== undefined) {
      user.avatar = avatar;
    }

    await user.save();

    res.json({
      success: true,
      message: "Profile updated",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};

const getDashboardStats = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    const recentTests = await TestResult.find({
      user: req.user._id,
    })
      .populate("test", "title difficulty category")
      .sort({
        createdAt: -1,
      })
      .limit(10);

    res.json({
      success: true,
      stats: {
        totalTests: user.totalTests,
        totalPracticeTime: user.totalPracticeTime,
        bestWpm: user.bestWpm,
        averageWpm: user.averageWpm,
        bestAccuracy: user.bestAccuracy,
        currentStreak: user.currentStreak,
        longestStreak: user.longestStreak,
        currentLesson: user.currentLesson,
        typingLevel: user.typingLevel,
      },
      recentTests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load dashboard",
    });
  }
};

export { getProfile, updateProfile, getDashboardStats };
