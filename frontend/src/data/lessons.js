export const lessons = [
  {
    id: "home-row",
    level: 1,
    title: "Home Row Basics",
    description: "Learn the foundation of touch typing.",
    keys: ["a", "s", "d", "f", "j", "k", "l", ";"],
    targetWpm: 15,
    targetAccuracy: 90,
    exercises: [
      "asdf jkl;",
      "asdf asdf jkl; jkl;",
      "fjfj dkdk slsl",
      "sad fad lad ask",
    ],
  },

  {
    id: "left-hand",
    level: 2,
    title: "Left Hand Practice",
    description: "Build confidence with the left side of the keyboard.",
    keys: ["q", "w", "e", "r", "t", "a", "s", "d", "f"],
    targetWpm: 20,
    targetAccuracy: 90,
    exercises: ["qwer", "wert", "qwer asdf", "read", "west", "fast"],
  },

  {
    id: "right-hand",
    level: 3,
    title: "Right Hand Practice",
    description: "Improve control of the right side of the keyboard.",
    keys: ["y", "u", "i", "o", "p", "j", "k", "l"],
    targetWpm: 20,
    targetAccuracy: 90,
    exercises: ["yuiop", "jkl;", "you", "look", "pull", "jolly"],
  },

  {
    id: "top-row",
    level: 4,
    title: "Top Row",
    description: "Learn the QWERTY top row.",
    keys: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    targetWpm: 25,
    targetAccuracy: 92,
    exercises: ["qwerty", "yuiop", "type", "write", "power", "quiet"],
  },

  {
    id: "bottom-row",
    level: 5,
    title: "Bottom Row",
    description: "Master letters on the bottom row.",
    keys: ["z", "x", "c", "v", "b", "n", "m"],
    targetWpm: 25,
    targetAccuracy: 92,
    exercises: ["zxcv", "bnm", "zoom", "mix", "van", "box"],
  },

  {
    id: "all-letters",
    level: 6,
    title: "All Letters",
    description: "Combine all alphabet keys.",
    keys: "abcdefghijklmnopqrstuvwxyz".split(""),
    targetWpm: 30,
    targetAccuracy: 94,
    exercises: [
      "keyboard",
      "computer",
      "practice",
      "learning",
      "excellent typing",
    ],
  },

  {
    id: "numbers",
    level: 7,
    title: "Numbers",
    description: "Practice typing numbers accurately.",
    keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    targetWpm: 30,
    targetAccuracy: 94,
    exercises: ["12345", "67890", "1234567890", "2026", "123 456 789"],
  },

  {
    id: "sentences",
    level: 8,
    title: "Sentence Practice",
    description: "Practice natural typing using complete sentences.",
    keys: "abcdefghijklmnopqrstuvwxyz".split(""),
    targetWpm: 35,
    targetAccuracy: 95,
    exercises: [
      "Practice typing every day to become faster.",
      "Accuracy should always come before speed.",
      "Touch typing makes computer work easier.",
    ],
  },
];
