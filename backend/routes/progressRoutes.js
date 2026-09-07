import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getTodayProgress,
  getProgressHistory,
  getWeeklyProgress,
} from "../controllers/progressController.js";

const router = express.Router();

router.get("/today", protect, getTodayProgress);

router.get("/history", protect, getProgressHistory);

router.get("/weekly", protect, getWeeklyProgress);

export default router;
