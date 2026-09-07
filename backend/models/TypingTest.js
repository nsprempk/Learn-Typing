import mongoose from "mongoose";

const typingTestSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    text: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "general",
        "technology",
        "education",
        "business",
        "quotes",
        "programming",
        "random",
      ],
      default: "general",
    },

    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },

    duration: {
      type: Number,
      default: 60,
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

const TypingTest = mongoose.model("TypingTest", typingTestSchema);

export default TypingTest;
