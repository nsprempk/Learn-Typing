import Card from "../common/Card";

export default function TypingStats({ stats, timeLeft }) {
  const items = [
    {
      label: "WPM",
      value: stats.wpm,
    },
    {
      label: "Accuracy",
      value: `${stats.accuracy}%`,
    },
    {
      label: "Errors",
      value: stats.errors,
    },
    {
      label: "Time",
      value: `${timeLeft}s`,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map((item) => (
        <Card key={item.label} className="p-4 text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {item.label}
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            {item.value}
          </p>
        </Card>
      ))}
    </div>
  );
}
