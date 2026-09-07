import { Clock3, Target, Trophy, Zap } from "lucide-react";

import { Link } from "react-router-dom";

import StatCard from "../components/dashboard/StatCard";
import StreakCard from "../components/dashboard/StreakCard";
import ProgressChart from "../components/dashboard/ProgressChart";
import ActivityChart from "../components/dashboard/ActivityChart";
import RecentActivity from "../components/dashboard/RecentActivity";

import Button from "../components/common/Button";

import { useAuth } from "../context/AuthContext";
import useProgress from "../hooks/useProgress";

export default function Dashboard() {
  const { user } = useAuth();
  const { weeklyData } = useProgress();

  return (
    <div className="page-container py-10">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-medium text-blue-600">YOUR DASHBOARD</p>

          <h1 className="mt-1 text-3xl font-black text-slate-900 dark:text-white">
            Welcome back, {user?.name}
          </h1>

          <p className="mt-2 text-slate-500">
            Keep your typing streak alive today.
          </p>
        </div>

        <Link to="/typing-test">
          <Button>Start Typing Test</Button>
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Average WPM"
          value={user?.averageWpm || 0}
          description="Words per minute"
          icon={Zap}
          trend={8}
        />

        <StatCard
          title="Best WPM"
          value={user?.bestWpm || 0}
          description="Personal record"
          icon={Trophy}
        />

        <StatCard
          title="Accuracy"
          value={`${user?.averageAccuracy || 0}%`}
          description="Average accuracy"
          icon={Target}
          trend={3}
        />

        <StatCard
          title="Practice Time"
          value="24m"
          description="Today's practice"
          icon={Clock3}
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <ProgressChart data={weeklyData} />

        <StreakCard
          streak={user?.currentStreak || 0}
          longest={user?.longestStreak || 0}
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ActivityChart data={weeklyData} />

        <RecentActivity />
      </div>
    </div>
  );
}
