import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AnalyticsChart({ analytics }) {
  const data = [
    {
      name: "Attention",
      value: analytics.average_attention,
    },
    {
      name: "Fatigue",
      value: analytics.average_fatigue,
    },
    {
      name: "Risk",
      value: analytics.average_risk,
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-[#08111E] p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Driver Performance Trend
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#1e293b" />

            <XAxis
              dataKey="name"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#06b6d4"
              strokeWidth={4}
              dot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}