import { useState } from "react";

import { ArrowLeft, CheckCircle } from "lucide-react";

import { Link, useParams } from "react-router-dom";

import Button from "../components/common/Button";
import LessonPractice from "../components/learning/LessonPractice";

import { lessons } from "../data/lessons";

export default function Lesson() {
  const { lessonId } = useParams();

  const lesson = lessons.find((item) => item.id === lessonId);

  const [completed, setCompleted] = useState(false);

  if (!lesson) {
    return (
      <div className="page-container py-20 text-center">
        <h1 className="text-3xl font-black">Lesson not found</h1>

        <Link to="/learn" className="mt-5 inline-block">
          <Button>Back to Lessons</Button>
        </Link>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="page-container py-20">
        <div className="mx-auto max-w-lg text-center">
          <CheckCircle className="mx-auto text-emerald-500" size={70} />

          <h1 className="mt-6 text-4xl font-black text-slate-900 dark:text-white">
            Lesson Complete!
          </h1>

          <p className="mt-3 text-slate-500">
            Excellent work. Keep practicing to improve your typing skills.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Link to="/learn">
              <Button>Back to Lessons</Button>
            </Link>

            <button
              onClick={() => setCompleted(false)}
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              Practice Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container py-10">
      <Link
        to="/learn"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
      >
        <ArrowLeft size={17} />
        All Lessons
      </Link>

      <div className="mt-6">
        <p className="text-sm font-semibold text-blue-600">
          LESSON {lesson.level}
        </p>

        <h1 className="mt-1 text-3xl font-black text-slate-900 dark:text-white">
          {lesson.title}
        </h1>

        <p className="mt-2 text-slate-500">{lesson.description}</p>
      </div>

      <div className="mx-auto mt-8 max-w-5xl">
        <LessonPractice lesson={lesson} onComplete={() => setCompleted(true)} />
      </div>
    </div>
  );
}
