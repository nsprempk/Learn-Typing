export default function KeyboardKey({ value, wide = false, active = false }) {
  return (
    <div
      className={`
        keyboard-key
        flex h-10 items-center justify-center
        rounded-lg border text-xs font-semibold
        sm:h-12 sm:text-sm
        ${wide ? "min-w-[55px] px-3 sm:min-w-[75px]" : "flex-1"}
        ${
          active
            ? "active border-blue-500 bg-blue-600 text-white shadow-lg"
            : "border-slate-300 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
        }
      `}
    >
      {value}
    </div>
  );
}
