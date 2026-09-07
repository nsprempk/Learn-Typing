import { useMemo } from "react";

export default function useProgress() {
  const weeklyData = useMemo(
    () => [
      {
        day: "Mon",
        wpm: 48,
        accuracy: 94,
        minutes: 18,
      },
      {
        day: "Tue",
        wpm: 51,
        accuracy: 95,
        minutes: 22,
      },
      {
        day: "Wed",
        wpm: 54,
        accuracy: 96,
        minutes: 25,
      },
      {
        day: "Thu",
        wpm: 52,
        accuracy: 95,
        minutes: 20,
      },
      {
        day: "Fri",
        wpm: 58,
        accuracy: 97,
        minutes: 30,
      },
      {
        day: "Sat",
        wpm: 61,
        accuracy: 96,
        minutes: 27,
      },
      {
        day: "Sun",
        wpm: 67,
        accuracy: 98,
        minutes: 24,
      },
    ],
    [],
  );

  return {
    weeklyData,
  };
}
