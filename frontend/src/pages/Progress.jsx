import { CalendarDays, Clock3, Target, Trophy, Zap } from "lucide-react";

import Card from "../components/common/Card";

import ProgressChart from "../components/dashboard/ProgressChart";
import ActivityChart from "../components/dashboard/ActivityChart";

import useProgress from "../hooks/useProgress";

import { achievements } from "../data/achievements";

export default function Progress() {
  const { weeklyData } = useProgress();

  const unlocked = [
    "first-test",
    "speed-30",
    "speed-50",
    "accuracy-95",
    "streak-7",
  ];

  return (
    <div className="page-container py-10">
      <div>
        <p className="text-sm font-semibold text-blue-600">YOUR PROGRESS</p>

        <h1 className="mt-1 text-3xl font-black text-slate-900 dark:text-white">
          Track your improvement
        </h1>

        <p className="mt-2 text-slate-500">
          See how your typing skills have changed over time.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ProgressStat icon={Zap} label="Best WPM" value="67" />

        <ProgressStat icon={Target} label="Best Accuracy" value="98%" />

        <ProgressStat icon={Clock3} label="Practice" value="2h 14m" />

        <ProgressStat icon={CalendarDays} label="Tests" value="34" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ProgressChart data={weeklyData} />

        <ActivityChart data={weeklyData} />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <Trophy className="text-yellow-500" />

          <div>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              Achievements
            </h2>

            <p className="text-sm text-slate-500">
              {unlocked.length} of {achievements.length} unlocked
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => {
            const isUnlocked = unlocked.includes(achievement.id);

            return (
              <Card
                key={achievement.id}
                className={`p-5 ${!isUnlocked ? "opacity-50" : ""}`}
              >
                <div className="text-3xl">{achievement.icon}</div>

                <h3 className="mt-4 font-bold text-slate-900 dark:text-white">
                  {achievement.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {achievement.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProgressStat({ icon: Icon, label, value }) {
  return (
    <>
      <SEO
        title="Typing Progress"
        description="Track your typing speed, accuracy, practice time, test history, and daily typing progress."
        path="/progress"
      />
      <Card className="p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-50 p-3 text-blue-600 dark:bg-blue-950/40">
            <Icon size={20} />
          </div>

          <div>
            <p className="text-xs text-slate-500">{label}</p>

            <p className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
              {value}
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}
