import { ArrowRight, CheckCircle, Lock } from "lucide-react";

import { Link } from "react-router-dom";

import Card from "../common/Card";

export default function LessonCard({
  lesson,
  completed = false,
  locked = false,
}) {
  return (
    <Card className="p-5 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600 dark:bg-blue-950/40">
          {lesson.level}
        </div>

        {completed && <CheckCircle className="text-emerald-500" size={22} />}

        {locked && <Lock className="text-slate-400" size={20} />}
      </div>

      <h3 className="mt-5 font-bold text-slate-900 dark:text-white">
        {lesson.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {lesson.description}
      </p>

      <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
        <span>Target: {lesson.targetWpm} WPM</span>

        <span>{lesson.targetAccuracy}% accuracy</span>
      </div>

      {!locked && (
        <Link
          to={`/learn/${lesson.id}`}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {completed ? "Practice Again" : "Start Lesson"}
          <ArrowRight size={17} />
        </Link>
      )}
    </Card>
  );
}
