import { useEffect, useRef } from "react";

import Card from "../common/Card";

export default function TypingBox({
  targetText,
  typedText,
  onChange,
  disabled,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  return (
    <Card className="p-5 sm:p-7">
      <div className="mb-6 rounded-xl bg-slate-50 p-5 font-mono text-lg leading-9 dark:bg-slate-950 sm:text-xl">
        {targetText.split("").map((character, index) => {
          const typed = typedText[index];

          let className = "text-slate-400 dark:text-slate-600";

          if (typed !== undefined) {
            className =
              typed === character
                ? "text-emerald-500"
                : "rounded bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400";
          }

          if (index === typedText.length) {
            className =
              "border-b-2 border-blue-500 text-slate-900 dark:text-white";
          }

          return (
            <span key={index} className={`typing-character ${className}`}>
              {character}
            </span>
          );
        })}
      </div>

      <textarea
        ref={inputRef}
        value={typedText}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        rows={4}
        spellCheck="false"
        autoCapitalize="off"
        autoCorrect="off"
        className="w-full resize-none rounded-xl border-2 border-slate-200 bg-white p-4 font-mono text-base outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        placeholder={disabled ? "Test completed" : "Start typing here..."}
      />
    </Card>
  );
}
