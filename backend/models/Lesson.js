import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    lessonNumber: {
      type: Number,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },

    focusKeys: {
      type: [String],
      default: [],
    },

    instructions: {
      type: String,
      default: "",
    },

    practiceTexts: {
      type: [String],
      default: [],
    },

    quizQuestions: [
      {
        question: {
          type: String,
          required: true,
        },

        options: {
          type: [String],
          required: true,
        },

        correctAnswer: {
          type: String,
          required: true,
        },
      },
    ],

    passingAccuracy: {
      type: Number,
      default: 80,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Lesson = mongoose.model("Lesson", lessonSchema);

export default Lesson;
