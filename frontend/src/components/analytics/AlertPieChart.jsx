import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#06b6d4",
  "#22c55e",
  "#eab308",
  "#ef4444",
  "#8b5cf6",
  "#f97316",
];

export default function AlertPieChart({ alerts }) {

  // No alerts
  if (!alerts || alerts.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#08111E] p-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          Alert Distribution
        </h2>

        <div className="flex h-64 items-center justify-center text-slate-400">
          No alerts recorded
        </div>
      </div>
    );
  }

  // Count alerts by type
  const counts = {};

  alerts.forEach((alert) => {
    const type =
      alert.alert_type ||
      alert.type ||
      alert.category ||
      "Unknown";

    counts[type] = (counts[type] || 0) + 1;
  });

  const data = Object.keys(counts).map((key) => ({
    name: key,
    value: counts[key],
  }));

  return (
    <div className="rounded-3xl border border-white/10 bg-[#08111E] p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Alert Distribution
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}