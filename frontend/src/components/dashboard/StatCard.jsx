import { ArrowDown, ArrowUp } from "lucide-react";

import Card from "../common/Card";

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
}) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {value}
          </p>

          {description && (
            <p className="mt-1 text-xs text-slate-500">{description}</p>
          )}
        </div>

        {Icon && (
          <div className="rounded-xl bg-blue-50 p-3 text-blue-600 dark:bg-blue-950/40">
            <Icon size={21} />
          </div>
        )}
      </div>

      {trend !== undefined && (
        <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-600">
          {trend >= 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
          {Math.abs(trend)}% from last week
        </div>
      )}
    </Card>
  );
}
