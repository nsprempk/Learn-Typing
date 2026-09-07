export function calculateTypingStats(typedText, targetText, elapsedSeconds) {
  const safeSeconds = Math.max(elapsedSeconds, 1);

  let correctCharacters = 0;
  let incorrectCharacters = 0;

  const length = Math.max(typedText.length, targetText.length);

  for (let i = 0; i < length; i++) {
    if (typedText[i] && typedText[i] === targetText[i]) {
      correctCharacters++;
    } else if (typedText[i]) {
      incorrectCharacters++;
    }
  }

  const totalTyped = typedText.length;

  const accuracy =
    totalTyped === 0 ? 100 : (correctCharacters / totalTyped) * 100;

  const minutes = safeSeconds / 60;

  const wpm = minutes > 0 ? correctCharacters / 5 / minutes : 0;

  const cpm = minutes > 0 ? correctCharacters / minutes : 0;

  return {
    wpm: Math.round(wpm),
    cpm: Math.round(cpm),
    accuracy: Number(accuracy.toFixed(1)),
    correctCharacters,
    incorrectCharacters,
    totalCharacters: totalTyped,
    errors: incorrectCharacters,
    elapsedSeconds,
  };
}
