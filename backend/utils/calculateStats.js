const calculateWPM = (correctCharacters, timeInSeconds) => {
  if (!timeInSeconds || timeInSeconds <= 0) {
    return 0;
  }

  const words = correctCharacters / 5;

  const minutes = timeInSeconds / 60;

  return Math.round(words / minutes);
};

const calculateAccuracy = (correctCharacters, totalCharacters) => {
  if (!totalCharacters) {
    return 0;
  }

  return Number(((correctCharacters / totalCharacters) * 100).toFixed(2));
};

export { calculateWPM, calculateAccuracy };
