import { useEffect, useState } from "react";

import { RotateCcw, Settings } from "lucide-react";

import { useNavigate } from "react-router-dom";

import Button from "../components/common/Button";
import Card from "../components/common/Card";

import Keyboard from "../components/typing/Keyboard";
import TypingBox from "../components/typing/TypingBox";
import TypingStats from "../components/typing/TypingStats";
import TestSettings from "../components/typing/TestSettings";
import SEO from "../components/SEO";

import useTypingTest from "../hooks/useTypingTest";

import { formatSeconds } from "../utils/formatTime";

export default function TypingTest() {
  const navigate = useNavigate();

  const [duration, setDuration] = useState(60);

  const [difficulty, setDifficulty] = useState("medium");

  const [showSettings, setShowSettings] = useState(false);

  const {
    targetText,
    typedText,
    timeLeft,
    started,
    finished,
    stats,
    handleChange,
    reset,
  } = useTypingTest({
    duration,
    difficulty,
  });

  useEffect(() => {
    if (finished) {
      const finalResult = {
        ...stats,
        targetText,
        difficulty,
        duration,
      };

      sessionStorage.setItem("lastTypingResult", JSON.stringify(finalResult));

      navigate("/typing-result");
    }
  }, [finished, stats, targetText, difficulty, duration, navigate]);

  const activeKey = targetText[typedText.length] || "";

  return (
    <>
      <SEO
        title="Typing Speed Test"
        description="Take a free online typing speed test and measure your WPM, accuracy, errors, and typing performance."
        path="/typing-test"
      />
      <div className="page-container py-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600">TYPING TEST</p>

            <h1 className="mt-1 text-3xl font-black text-slate-900 dark:text-white">
              Test your typing speed
            </h1>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowSettings(!showSettings)}
            >
              <Settings size={17} className="mr-2 inline" />
              Settings
            </Button>

            <Button variant="secondary" onClick={reset}>
              <RotateCcw size={17} className="mr-2 inline" />
              Restart
            </Button>
          </div>
        </div>

        {showSettings && (
          <Card className="mt-6 p-5">
            <TestSettings
              duration={duration}
              setDuration={setDuration}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          </Card>
        )}

        <div className="mt-6">
          <TypingStats stats={stats} timeLeft={timeLeft} />
        </div>

        <div className="mt-6 flex justify-center">
          <div className="rounded-full bg-slate-100 px-6 py-2 font-mono text-xl font-bold text-slate-800 dark:bg-slate-900 dark:text-white">
            {formatSeconds(timeLeft)}
          </div>
        </div>

        <div className="mt-6">
          <TypingBox
            targetText={targetText}
            typedText={typedText}
            onChange={handleChange}
            disabled={finished}
          />
        </div>

        <div className="mt-8">
          <Keyboard activeKey={activeKey} />
        </div>

        {!started && !finished && (
          <p className="mt-6 text-center text-sm text-slate-500">
            Start typing in the box above. The timer starts automatically.
          </p>
        )}
      </div>
    </>
  );
}
