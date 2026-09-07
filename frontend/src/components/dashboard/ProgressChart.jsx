import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import Card from "../common/Card";

export default function ProgressChart({ data }) {
  return (
    <Card className="p-5">
      <div className="mb-5">
        <h3 className="font-bold text-slate-900 dark:text-white">
          WPM Progress
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Your typing speed over the last 7 days
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="wpm"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
