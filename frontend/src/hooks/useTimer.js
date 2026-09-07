import { useEffect, useRef, useState } from "react";

export default function useTimer(initialSeconds) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setSeconds((current) => {
        if (current <= 1) {
          clearInterval(intervalRef.current);
          setRunning(false);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [running]);

  function start() {
    setRunning(true);
  }

  function stop() {
    setRunning(false);
  }

  function reset(value = initialSeconds) {
    clearInterval(intervalRef.current);
    setRunning(false);
    setSeconds(value);
  }

  return {
    seconds,
    running,
    start,
    stop,
    reset,
  };
}
