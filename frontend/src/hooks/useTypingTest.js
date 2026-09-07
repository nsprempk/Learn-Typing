import { useEffect, useState } from "react";

import { calculateTypingStats } from "../utils/typingCalculator";

import { getRandomTypingText } from "../data/typingTexts";

export default function useTypingTest({ duration, difficulty }) {
  const [targetText, setTargetText] = useState(() =>
    getRandomTypingText(difficulty),
  );

  const [typedText, setTypedText] = useState("");

  const [timeLeft, setTimeLeft] = useState(duration);

  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    setTargetText(getRandomTypingText(difficulty));
    setTypedText("");
    setTimeLeft(duration);
    setStarted(false);
    setFinished(false);
    setStartTime(null);
  }, [duration, difficulty]);

  useEffect(() => {
    if (!started || finished) {
      return;
    }

    if (timeLeft <= 0) {
      finish();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((current) => current - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [started, finished, timeLeft]);

  function start() {
    if (started || finished) return;

    setStarted(true);
    setStartTime(Date.now());
  }

  function handleChange(value) {
    if (finished) return;

    if (!started) {
      start();
    }

    setTypedText(value);

    if (value.length >= targetText.length) {
      finish(value);
    }
  }

  function finish(finalText = typedText) {
    if (finished) return;

    const elapsed = startTime
      ? Math.min(
          duration,
          Math.max(1, Math.floor((Date.now() - startTime) / 1000)),
        )
      : duration - timeLeft;

    const stats = calculateTypingStats(
      finalText,
      targetText,
      elapsed || duration,
    );

    setFinished(true);
    setStarted(false);

    return stats;
  }

  function reset() {
    setTargetText(getRandomTypingText(difficulty));
    setTypedText("");
    setTimeLeft(duration);
    setStarted(false);
    setFinished(false);
    setStartTime(null);
  }

  const elapsedSeconds = Math.max(1, duration - timeLeft);

  const stats = calculateTypingStats(typedText, targetText, elapsedSeconds);

  return {
    targetText,
    typedText,
    timeLeft,
    started,
    finished,
    stats,
    handleChange,
    reset,
    start,
  };
}
