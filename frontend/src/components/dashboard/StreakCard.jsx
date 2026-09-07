import Card from "../common/Card";

export default function StreakCard({ streak = 7, longest = 18 }) {
  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 text-white">
        <div className="text-4xl">🔥</div>

        <p className="mt-3 text-sm font-medium text-orange-100">
          CURRENT STREAK
        </p>

        <p className="mt-1 text-4xl font-bold">{streak} days</p>

        <p className="mt-2 text-sm text-orange-100">
          Keep practicing every day!
        </p>
      </div>

      <div className="p-5">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Longest streak</span>

          <span className="font-semibold text-slate-900 dark:text-white">
            {longest} days
          </span>
        </div>
      </div>
    </Card>
  );
}
