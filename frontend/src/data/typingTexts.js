export const typingTexts = {
  easy: [
    "The sun is bright and the sky is blue.",
    "I like to read books every day.",
    "Practice makes typing easier and faster.",
    "A good habit can make a big difference.",
    "Learning new skills takes time and practice.",
  ],

  medium: [
    "The quick brown fox jumps over the lazy dog.",
    "Typing accurately is more important than typing quickly.",
    "Small improvements every day can create amazing results.",
    "Technology helps people communicate across the world.",
    "Consistent practice is the secret to improving your typing speed.",
  ],

  hard: [
    "Successful people understand that patience, consistency, and focused practice are essential for long-term improvement.",
    "Modern technology allows us to communicate, work, learn, and collaborate from almost anywhere in the world.",
    "The ability to type quickly and accurately can significantly improve productivity when working with computers.",
    "Developing excellent typing skills requires attention to accuracy first, followed by gradual improvements in speed.",
  ],
};

export function getRandomTypingText(difficulty = "medium") {
  const texts = typingTexts[difficulty] || typingTexts.medium;

  return texts[Math.floor(Math.random() * texts.length)];
}
