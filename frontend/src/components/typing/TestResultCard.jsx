import { CheckCircle, Target, Zap } from "lucide-react";

import Card from "../common/Card";

export default function TestResultCard({ result }) {
  return (
    <Card className="p-6 sm:p-8">
      <div className="text-center">
        <CheckCircle className="mx-auto text-emerald-500" size={48} />

        <p className="mt-4 text-sm font-medium text-slate-500">
          Your typing speed
        </p>

        <p className="mt-1 text-6xl font-black text-slate-900 dark:text-white">
          {result?.wpm || 0}
          <span className="text-2xl font-bold text-slate-400"> WPM</span>
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Stat icon={Zap} label="WPM" value={result?.wpm || 0} />

        <Stat
          icon={Target}
          label="Accuracy"
          value={`${result?.accuracy || 0}%`}
        />

        <Stat label="Characters" value={result?.correctCharacters || 0} />

        <Stat label="Errors" value={result?.errors || 0} />
      </div>
    </Card>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-950">
      {Icon && <Icon size={18} className="mx-auto text-blue-600" />}

      <p className="mt-2 text-xs text-slate-500">{label}</p>

      <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}
