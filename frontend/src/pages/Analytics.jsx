import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import API_BASE from "../api/api";

import AnalyticsChart from "../components/analytics/AnalyticsChart";
import AlertPieChart from "../components/analytics/AlertPieChart";
import FingerprintCard from "../components/analytics/FingerprintCard";
import AISummaryCard from "../components/analytics/AISummaryCard";

export default function Analytics() {
  const [analytics, setAnalytics] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [fingerprint, setFingerprint] = useState(null);

  useEffect(() => {

    const loadAnalytics = async () => {

      try {

        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [
          analyticsRes,
          alertsRes,
          fingerprintRes,
        ] = await Promise.all([
          fetch(`${API_BASE}/analytics`, { headers }),
          fetch(`${API_BASE}/alerts`, { headers }),
          fetch(`${API_BASE}/fingerprint`, { headers }),
        ]);

        const analyticsData = await analyticsRes.json();

        const alertsData = await alertsRes.json();

        let fingerprintData = null;

        if (fingerprintRes.ok) {

          fingerprintData = await fingerprintRes.json();

        } else {

          const build = await fetch(
            `${API_BASE}/fingerprint/build`,
            {
              method: "POST",
              headers,
            }
          );

          if (build.ok) {

            const retry = await fetch(
              `${API_BASE}/fingerprint`,
              { headers }
            );

            if (retry.ok)
              fingerprintData = await retry.json();
          }
        }

        setAnalytics(analyticsData);

        setAlerts(
          Array.isArray(alertsData)
            ? alertsData
            : []
        );

        setFingerprint(fingerprintData);

      } catch (err) {

        console.error(err);

      }

    };

    loadAnalytics();

    const interval = setInterval(
      loadAnalytics,
      3000
    );

    return () => clearInterval(interval);

  }, []);

  if (!analytics) {

    return (
      <AppLayout>

        <div className="flex h-[80vh] items-center justify-center">

          <h2 className="text-3xl font-semibold text-white animate-pulse">

            Loading Analytics...

          </h2>

        </div>

      </AppLayout>
    );

  }

  return (

    <AppLayout>

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-white">

          Analytics

        </h1>

        <p className="mt-2 text-slate-400">

          AI powered behaviour analytics and driving insights.

        </p>

      </div>

      {/* SUMMARY */}

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
          title="Attention"
          value={`${analytics.average_attention}%`}
        />

        <Card
          title="Fatigue"
          value={`${analytics.average_fatigue}%`}
        />

        <Card
          title="Risk"
          value={`${analytics.average_risk}%`}
        />

      </div>

      {/* CHARTS */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <AnalyticsChart
          analytics={analytics}
        />

        <AlertPieChart
          alerts={alerts}
        />

      </div>

      {/* AI */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <FingerprintCard

          analytics={analytics}

          fingerprint={fingerprint}

        />

        <AISummaryCard

          analytics={analytics}

          fingerprint={fingerprint}

        />

      </div>

    </AppLayout>

  );

}

function Card({ title, value }) {

  return (

    <div className="rounded-3xl border border-white/10 bg-[#08111E] p-6 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">

      <p className="text-sm uppercase tracking-widest text-slate-400">

        {title}

      </p>

      <div className="mt-6 text-4xl font-bold text-white">

        {value}

      </div>

    </div>

  );

}