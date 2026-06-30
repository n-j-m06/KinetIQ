import { useEffect, useState } from "react";
import API_BASE from "../../api/api";

export default function SessionStats() {
  const [stats, setStats] = useState({
    alerts: 0,
    sessions: 0,
    status: "--",
  });

  useEffect(() => {
    async function load() {
      try {
        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [alertsRes, sessionsRes] = await Promise.all([
          fetch(`${API_BASE}/alerts`, { headers }),
          fetch(`${API_BASE}/session/history`, { headers }),
        ]);

        const alerts = await alertsRes.json();
        const sessions = await sessionsRes.json();

        let latestStatus = "--";

        if (Array.isArray(sessions) && sessions.length) {
          latestStatus = sessions[sessions.length - 1].status;
        }

        setStats({
          alerts: Array.isArray(alerts) ? alerts.length : 0,
          sessions: Array.isArray(sessions) ? sessions.length : 0,
          status: latestStatus,
        });
      } catch (err) {
        console.error(err);
      }
    }

    load();

    const interval = setInterval(load, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl border border-white/10 bg-[#08111E] p-8 h-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Session Statistics
          </h2>
          <p className="text-slate-400 mt-1">
            Live overview of the current monitoring session
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Stat
          title="Alerts"
          value={stats.alerts}
        />

        <Stat
          title="Sessions"
          value={stats.sessions}
        />

        <StatusCard
          status={stats.status}
        />
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-2xl bg-[#111C2B] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 p-5 h-36 flex flex-col justify-between">
      <p className="text-xs uppercase tracking-widest text-slate-400">
        {title}
      </p>

      <div className="flex items-center justify-center flex-1">
        <h3 className="text-4xl font-bold text-white">
          {value}
        </h3>
      </div>
    </div>
  );
}

function StatusCard({ status }) {
  const active = status === "ACTIVE";

  return (
    <div className="rounded-2xl bg-[#111C2B] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 p-5 h-36 flex flex-col justify-between">
      <p className="text-xs uppercase tracking-widest text-slate-400">
        Status
      </p>

      <div className="flex items-center justify-center flex-1">
        <span
          className={`rounded-full px-5 py-2 text-lg font-semibold ${
            active
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}