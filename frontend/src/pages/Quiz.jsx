import { useState } from "react";

import { Trophy, CheckCircle, RotateCcw } from "lucide-react";

import { quizzes } from "../data/quizzes";

import Button from "../components/common/Button";
import Card from "../components/common/Card";

export default function Quiz() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const quiz = quizzes[quizIndex];

  function submit() {
    if (!answer.trim()) return;

    if (answer === quiz.text) {
      setScore((current) => current + 1);
    }

    if (quizIndex >= quizzes.length - 1) {
      setCompleted(true);
    } else {
      setQuizIndex((current) => current + 1);
      setAnswer("");
    }
  }

  function restart() {
    setQuizIndex(0);
    setAnswer("");
    setScore(0);
    setCompleted(false);
  }

  if (completed) {
    return (
      <div className="page-container py-20">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-50 text-yellow-500 dark:bg-yellow-950/30">
            <Trophy size={40} />
          </div>

          <h1 className="mt-6 text-4xl font-black text-slate-900 dark:text-white">
            Quiz Complete!
          </h1>

          <p className="mt-3 text-slate-500">You scored</p>

          <p className="mt-2 text-5xl font-black text-blue-600">
            {score}/{quizzes.length}
          </p>

          <div className="mt-8">
            <Button onClick={restart}>
              <RotateCcw size={17} className="mr-2 inline" />
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container py-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">TYPING QUIZ</p>

          <h1 className="mt-1 text-3xl font-black text-slate-900 dark:text-white">
            {quiz.title}
          </h1>

          <p className="mt-2 text-slate-500">
            Challenge {quizIndex + 1} of {quizzes.length}
          </p>
        </div>

        <Card className="mt-8 p-6 sm:p-10">
          <p className="text-center text-slate-500">{quiz.question}</p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-8 text-center font-mono text-2xl font-bold dark:bg-slate-950 dark:text-white">
            {quiz.text}
          </div>

          <input
            className="input mt-6 text-center font-mono text-lg"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submit();
              }
            }}
            placeholder="Type here..."
            autoFocus
            spellCheck="false"
          />

          <Button className="mt-5 w-full" onClick={submit}>
            Submit Answer
          </Button>
        </Card>

        <div className="mt-5 flex justify-center gap-2">
          {quizzes.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-10 rounded-full ${
                index < quizIndex
                  ? "bg-emerald-500"
                  : index === quizIndex
                    ? "bg-blue-600"
                    : "bg-slate-200 dark:bg-slate-800"
              }`}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
          <CheckCircle size={16} />
          Score: {score}
        </div>
      </div>
    </div>
  );
}
