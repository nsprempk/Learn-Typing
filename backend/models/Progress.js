import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    dateKey: {
      type: String,
      required: true,
    },

    testsCompleted: {
      type: Number,
      default: 0,
    },

    lessonsCompleted: {
      type: Number,
      default: 0,
    },

    practiceMinutes: {
      type: Number,
      default: 0,
    },

    totalCharacters: {
      type: Number,
      default: 0,
    },

    correctCharacters: {
      type: Number,
      default: 0,
    },

    averageWpm: {
      type: Number,
      default: 0,
    },

    averageAccuracy: {
      type: Number,
      default: 0,
    },

    bestWpm: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

progressSchema.index(
  {
    user: 1,
    dateKey: 1,
  },
  {
    unique: true,
  },
);

const Progress = mongoose.model("Progress", progressSchema);

export default Progress;
