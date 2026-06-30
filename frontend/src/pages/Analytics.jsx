import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import API_BASE from "../api/api";

export default function Analytics() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        const res = await fetch(`${API_BASE}/analytics`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();
        setAnalytics(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadAnalytics();

    const interval = setInterval(loadAnalytics, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!analytics) {
    return (
      <AppLayout>
        <div className="text-white text-2xl">
          Loading Analytics...
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          Historical driver monitoring insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        <Card
          title="Sessions"
          value={analytics.total_sessions}
        />

        <Card
          title="Alerts"
          value={analytics.total_alerts}
        />

        <Card
          title="Avg Attention"
          value={`${analytics.average_attention}%`}
        />

        <Card
          title="Avg Fatigue"
          value={`${analytics.average_fatigue}%`}
        />

        <Card
          title="Avg Risk"
          value={`${analytics.average_risk}%`}
        />

      </div>
    </AppLayout>
  );
}

function Card({ title, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#08111E] p-6 hover:border-cyan-500/30 transition-all duration-300">

      <p className="text-slate-400 text-sm uppercase tracking-wider">
        {title}
      </p>

      <div className="mt-6 text-4xl font-bold text-white">
        {value}
      </div>

    </div>
  );
}