import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getLessons,
  getLessonById,
  getLessonByNumber,
  completeLesson,
} from "../controllers/lessonController.js";

const router = express.Router();

router.get("/", protect, getLessons);

router.get("/number/:number", protect, getLessonByNumber);

router.get("/:id", protect, getLessonById);

router.post("/complete", protect, completeLesson);

export default router;
