import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";

import TypingTest from "../models/TypingTest.js";
import Lesson from "../models/Lesson.js";

dotenv.config();

const typingTests = [
  {
    title: "Morning Practice",
    text: "The quick brown fox jumps over the lazy dog. Practice typing every day to improve your speed and accuracy.",
    category: "general",
    difficulty: "easy",
    duration: 60,
  },

  {
    title: "Technology",
    text: "Technology changes the way we communicate, work, learn, and solve problems. Good typing skills help you work faster.",
    category: "technology",
    difficulty: "easy",
    duration: 60,
  },

  {
    title: "Learning",
    text: "Learning to type without looking at the keyboard allows you to focus on your ideas instead of searching for individual keys.",
    category: "education",
    difficulty: "medium",
    duration: 60,
  },

  {
    title: "Programming",
    text: "Programming requires patience, logical thinking, and continuous practice. Fast and accurate typing can make coding more comfortable.",
    category: "programming",
    difficulty: "medium",
    duration: 60,
  },

  {
    title: "Business",
    text: "Successful businesses depend on communication, organization, teamwork, and the ability to make good decisions quickly.",
    category: "business",
    difficulty: "medium",
    duration: 60,
  },

  {
    title: "Advanced Practice",
    text: "Consistent deliberate practice helps develop muscle memory, improve accuracy, reduce unnecessary pauses, and increase overall typing speed.",
    category: "general",
    difficulty: "hard",
    duration: 120,
  },
];

const lessons = [
  {
    lessonNumber: 1,
    title: "Home Row Basics",
    description: "Learn the correct position of your fingers on the home row.",
    level: "beginner",
    focusKeys: ["A", "S", "D", "F", "J", "K", "L", ";"],
    instructions:
      "Place your left fingers on A, S, D and F. Place your right fingers on J, K, L and semicolon. Keep your thumbs on the space bar.",
    practiceTexts: ["asdf jkl;", "asdf asdf jkl; jkl;", "sad lad ask flask"],
    quizQuestions: [
      {
        question: "Which keys form the basic home row?",
        options: ["ASDF JKL;", "QWER UIOP", "ZXCV MNB", "1234 7890"],
        correctAnswer: "ASDF JKL;",
      },
    ],
    passingAccuracy: 80,
  },

  {
    lessonNumber: 2,
    title: "Top Row",
    description:
      "Practice reaching the top row while keeping your hands positioned correctly.",
    level: "beginner",
    focusKeys: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    instructions:
      "Keep your fingers anchored around the home row and reach upward with the correct finger.",
    practiceTexts: ["we were here", "type your words", "power to learn"],
    quizQuestions: [
      {
        question: "Which row contains Q W E R T?",
        options: ["Top row", "Home row", "Bottom row", "Number row"],
        correctAnswer: "Top row",
      },
    ],
    passingAccuracy: 80,
  },

  {
    lessonNumber: 3,
    title: "Bottom Row",
    description: "Practice the letters on the bottom row.",
    level: "beginner",
    focusKeys: ["Z", "X", "C", "V", "B", "N", "M"],
    instructions:
      "Reach downward from the home row without moving your entire hand.",
    practiceTexts: ["can mix", "many basic words", "maximum speed"],
    quizQuestions: [
      {
        question: "Which key is on the bottom letter row?",
        options: ["M", "Q", "P", "L"],
        correctAnswer: "M",
      },
    ],
    passingAccuracy: 80,
  },

  {
    lessonNumber: 4,
    title: "Common Words",
    description: "Build muscle memory by typing common English words.",
    level: "beginner",
    focusKeys: [],
    instructions: "Type the words naturally without looking at the keyboard.",
    practiceTexts: [
      "the and you are for that",
      "this with have from they",
      "your one about would there",
    ],
    quizQuestions: [
      {
        question: "What should you focus on first?",
        options: [
          "Accuracy",
          "Maximum speed",
          "Looking at the keyboard",
          "Pressing random keys",
        ],
        correctAnswer: "Accuracy",
      },
    ],
    passingAccuracy: 80,
  },

  {
    lessonNumber: 5,
    title: "Speed Building",
    description: "Start building typing speed while maintaining accuracy.",
    level: "intermediate",
    focusKeys: [],
    instructions:
      "Increase your speed gradually. Do not sacrifice accuracy just to type faster.",
    practiceTexts: [
      "Practice makes typing faster and easier.",
      "Focus on rhythm and consistent movement.",
      "Accuracy is more important than rushing.",
    ],
    quizQuestions: [
      {
        question: "What should you avoid while increasing speed?",
        options: [
          "Too many errors",
          "Practice",
          "Good posture",
          "Correct finger placement",
        ],
        correctAnswer: "Too many errors",
      },
    ],
    passingAccuracy: 85,
  },
];

const seedData = async () => {
  try {
    await connectDB();

    await TypingTest.deleteMany({});
    await Lesson.deleteMany({});

    await TypingTest.insertMany(typingTests);

    await Lesson.insertMany(lessons);

    console.log("Database seeded successfully");

    console.log(`Inserted ${typingTests.length} typing tests`);

    console.log(`Inserted ${lessons.length} lessons`);

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);

    process.exit(1);
  }
};

seedData();
