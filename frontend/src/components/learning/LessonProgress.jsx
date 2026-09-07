export default function LessonProgress({ completed, total }) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-300">
          Course Progress
        </span>

        <span className="font-semibold text-blue-600">{percentage}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-blue-600 transition-all"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-2 text-xs text-slate-500">
        {completed} of {total} lessons completed
      </p>
    </div>
  );
}
