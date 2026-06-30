import { useEffect, useState } from "react";
import {
  Brain,
  Activity,
  ShieldAlert,
  Car,
} from "lucide-react";

import API_BASE from "../../api/api";
import StatCard from "./StatCard";

export default function QuickStats() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {

    const fetchAnalytics = () => {

        fetch(`${API_BASE}/analytics`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then(setAnalytics)
            .catch(console.error);

    };

    fetchAnalytics();

    const interval = setInterval(fetchAnalytics, 2000);

    return () => clearInterval(interval);

}, []);

 if (!analytics) {
  return (
    <div className="mt-8 grid grid-cols-4 gap-6">

      <StatCard
        title="Attention"
        value="--"
        suffix="%"
        subtitle="Loading..."
        color="#06B6D4"
        icon={Brain}
      />

      <StatCard
        title="Fatigue"
        value="--"
        suffix="%"
        subtitle="Loading..."
        color="#10B981"
        icon={Activity}
      />

      <StatCard
        title="Risk"
        value="--"
        suffix="%"
        subtitle="Loading..."
        color="#F59E0B"
        icon={ShieldAlert}
      />

      <StatCard
        title="Sessions"
        value="--"
        subtitle="Loading..."
        color="#3B82F6"
        icon={Car}
      />

    </div>
  );
}

  return (
    <div className="mt-8 grid grid-cols-4 gap-6">

      <StatCard
        title="Attention"
        value={analytics.average_attention}
        suffix="%"
        subtitle={
          analytics.average_attention >= 80
            ? "Excellent"
            : analytics.average_attention >= 60
            ? "Good"
            : "Needs Improvement"
        }
        color="#06B6D4"
        icon={Brain}
      />

      <StatCard
        title="Fatigue"
        value={analytics.average_fatigue}
        suffix="%"
        subtitle={
          analytics.average_fatigue <= 30
            ? "Very Low"
            : analytics.average_fatigue <= 60
            ? "Moderate"
            : "High"
        }
        color="#10B981"
        icon={Activity}
      />

      <StatCard
        title="Risk"
        value={analytics.average_risk}
        suffix="%"
        subtitle={
          analytics.average_risk <= 30
            ? "Safe"
            : analytics.average_risk <= 60
            ? "Moderate"
            : "Danger"
        }
        color="#F59E0B"
        icon={ShieldAlert}
      />

      <StatCard
        title="Sessions"
        value={analytics.total_sessions}
        subtitle="Completed"
        color="#3B82F6"
        icon={Car}
      />

    </div>
  );
}