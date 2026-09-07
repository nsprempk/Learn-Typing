import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getTests,
  getRandomTest,
  getTestById,
  submitTest,
  getMyTestHistory,
} from "../controllers/testController.js";

const router = express.Router();

router.get("/", protect, getTests);

router.get("/random", protect, getRandomTest);

router.get("/history", protect, getMyTestHistory);

router.get("/:id", protect, getTestById);

router.post("/submit", protect, submitTest);

export default router;
