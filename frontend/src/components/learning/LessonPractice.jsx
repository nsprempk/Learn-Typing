import { useEffect, useRef, useState } from "react";

import Card from "../common/Card";
import LearningKeyboard from "./LearningKeyboard";

export default function LessonPractice({ lesson, onComplete }) {
  const [exerciseIndex, setExerciseIndex] = useState(0);

  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const exercise = lesson.exercises[exerciseIndex];

  useEffect(() => {
    inputRef.current?.focus();
  }, [exerciseIndex]);

  const completed = value.length >= exercise.length;

  function handleChange(event) {
    const next = event.target.value;

    setValue(next);

    if (next === exercise) {
      setTimeout(() => {
        if (exerciseIndex < lesson.exercises.length - 1) {
          setExerciseIndex((current) => current + 1);
          setValue("");
        } else {
          onComplete();
        }
      }, 300);
    }
  }

  const activeKey = exercise[value.length] || "";

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <p className="text-sm font-medium text-slate-500">
          Exercise {exerciseIndex + 1} of {lesson.exercises.length}
        </p>

        <div className="mt-6 rounded-xl bg-slate-50 p-6 text-center font-mono text-2xl font-bold tracking-wide dark:bg-slate-950 dark:text-white">
          {exercise}
        </div>

        <textarea
          ref={inputRef}
          value={value}
          onChange={handleChange}
          disabled={completed}
          rows={2}
          spellCheck="false"
          autoCapitalize="off"
          autoCorrect="off"
          className="mt-5 w-full resize-none rounded-xl border-2 border-slate-200 p-4 text-center font-mono text-xl outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          placeholder="Type the text above..."
        />
      </Card>

      <LearningKeyboard activeKey={activeKey} />
    </div>
  );
}
