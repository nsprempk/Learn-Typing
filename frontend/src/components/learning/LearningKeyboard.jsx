const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export default function LearningKeyboard({ activeKey }) {
  return (
    <div className="space-y-2 rounded-2xl bg-slate-100 p-4 dark:bg-slate-950">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="mx-auto flex max-w-3xl gap-1.5 sm:gap-2">
          {row.map((key) => {
            const active = activeKey?.toUpperCase() === key;

            return (
              <div
                key={key}
                className={`flex h-10 flex-1 items-center justify-center rounded-lg border text-xs font-bold transition sm:h-12 sm:text-sm ${
                  active
                    ? "border-blue-500 bg-blue-600 text-white shadow-lg"
                    : "border-slate-300 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {key}
              </div>
            );
          })}
        </div>
      ))}

      <div className="mx-auto h-10 max-w-md rounded-lg border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900 sm:h-12" />
    </div>
  );
}
