import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import Card from "../common/Card";

export default function ActivityChart({ data }) {
  return (
    <Card className="p-5">
      <div className="mb-5">
        <h3 className="font-bold text-slate-900 dark:text-white">
          Practice Time
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Minutes practiced each day
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="minutes" fill="#7c3aed" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
