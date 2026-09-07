import Card from "../common/Card";

const activities = [
  {
    title: "Completed 60 second typing test",
    value: "67 WPM",
    time: "Today",
  },
  {
    title: "Completed Home Row lesson",
    value: "96%",
    time: "Today",
  },
  {
    title: "Speed Challenge",
    value: "92%",
    time: "Yesterday",
  },
  {
    title: "Completed Top Row lesson",
    value: "94%",
    time: "Yesterday",
  },
];

export default function RecentActivity() {
  return (
    <Card className="p-5">
      <h3 className="font-bold text-slate-900 dark:text-white">
        Recent Activity
      </h3>

      <div className="mt-5 divide-y divide-slate-100 dark:divide-slate-800">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 py-4"
          >
            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {activity.title}
              </p>

              <p className="mt-1 text-xs text-slate-500">{activity.time}</p>
            </div>

            <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600 dark:bg-blue-950/40">
              {activity.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
