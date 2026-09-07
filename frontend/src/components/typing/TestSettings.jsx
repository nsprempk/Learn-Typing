import { DIFFICULTIES, TEST_DURATIONS } from "../../utils/constants";

export default function TestSettings({
  duration,
  setDuration,
  difficulty,
  setDifficulty,
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
          Duration
        </label>

        <select
          className="input"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        >
          {TEST_DURATIONS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
          Difficulty
        </label>

        <select
          className="input"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          {DIFFICULTIES.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
