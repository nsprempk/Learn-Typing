import Card from "../components/common/Card";
import Button from "../components/common/Button";

import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="page-container py-10">
      <div>
        <p className="text-sm font-semibold text-blue-600">SETTINGS</p>

        <h1 className="mt-1 text-3xl font-black text-slate-900 dark:text-white">
          Preferences
        </h1>
      </div>

      <div className="mt-8 max-w-2xl space-y-5">
        <Card className="p-6">
          <h2 className="font-bold text-slate-900 dark:text-white">
            Appearance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Choose how TypeMaster looks.
          </p>

          <div className="mt-5 flex gap-2">
            <Button
              variant={theme === "light" ? "primary" : "outline"}
              onClick={() => setTheme("light")}
            >
              Light
            </Button>

            <Button
              variant={theme === "dark" ? "primary" : "outline"}
              onClick={() => setTheme("dark")}
            >
              Dark
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="font-bold text-slate-900 dark:text-white">
            Typing Preferences
          </h2>

          <div className="mt-5 space-y-4">
            <Setting
              title="Sound effects"
              description="Play a sound when typing."
            />

            <Setting
              title="Show keyboard"
              description="Display the virtual keyboard during tests."
            />

            <Setting
              title="Auto-focus"
              description="Automatically focus the typing input."
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

function Setting({ title, description }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-slate-50 p-4 dark:bg-slate-950">
      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200">
          {title}
        </p>

        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>

      <input
        type="checkbox"
        defaultChecked
        className="h-5 w-5 accent-blue-600"
      />
    </label>
  );
}
