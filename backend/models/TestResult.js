import mongoose from "mongoose";

const testResultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    test: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TypingTest",
      required: true,
    },

    wpm: {
      type: Number,
      required: true,
      min: 0,
    },

    accuracy: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    correctCharacters: {
      type: Number,
      default: 0,
    },

    incorrectCharacters: {
      type: Number,
      default: 0,
    },

    totalCharacters: {
      type: Number,
      default: 0,
    },

    timeTaken: {
      type: Number,
      required: true,
    },

    errors: {
      type: Number,
      default: 0,
    },

    completed: {
      type: Boolean,
      default: true,
    },

    dateKey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

testResultSchema.index({
  user: 1,
  createdAt: -1,
});

const TestResult = mongoose.model("TestResult", testResultSchema);

export default TestResult;
