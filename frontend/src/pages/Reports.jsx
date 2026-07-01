import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import API_BASE from "../api/api";

export default function Reports() {

  const [analytics, setAnalytics] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadReport();

    const interval = setInterval(
      loadReport,
      5000
    );

    return () => clearInterval(interval);

  }, []);

  async function loadReport() {

    try {

      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [
        analyticsRes,
        sessionsRes,
        alertsRes,
      ] = await Promise.all([

        fetch(`${API_BASE}/analytics`, {
          headers,
        }),

        fetch(`${API_BASE}/session/history`, {
          headers,
        }),

        fetch(`${API_BASE}/alerts`, {
          headers,
        }),

      ]);

      const analyticsData =
        await analyticsRes.json();

      const sessionsData =
        await sessionsRes.json();

      const alertsData =
        await alertsRes.json();

      setAnalytics(analyticsData);

      setSessions(
        Array.isArray(sessionsData)
          ? sessionsData
          : []
      );

      setAlerts(
        Array.isArray(alertsData)
          ? alertsData
          : []
      );

    } catch (err) {

      console.error(err);

    }

    setLoading(false);

  }

  function formatDate(date) {

    if (!date) return "--";

    return new Date(date).toLocaleString(
      "en-IN",
      {
        dateStyle: "medium",
        timeStyle: "short",
      }
    );

  }

  function sessionDuration(session) {

    if (!session?.ended_at)
      return "Active";

    const start =
      new Date(session.started_at);

    const end =
      new Date(session.ended_at);

    const seconds =
      Math.floor(
        (end - start) / 1000
      );

    const mins =
      Math.floor(seconds / 60);

    const secs =
      seconds % 60;

    return `${mins}m ${secs}s`;

  }

  function driverRating() {

    if (!analytics)
      return 0;

    return Math.round(

      (
        analytics.average_attention +

        (100 -
          analytics.average_fatigue) +

        (100 -
          analytics.average_risk)

      ) / 3

    );

  }

  if (loading) {

    return (

      <AppLayout>

        <div className="flex h-[80vh] items-center justify-center">

          <h1 className="text-3xl text-white">

            Loading Reports...

          </h1>

        </div>

      </AppLayout>

    );

  }

  const latestSession =
    sessions.length
      ? sessions[0]
      : null;

  return (

    <AppLayout>

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-white">

          Reports

        </h1>

        <p className="mt-2 text-slate-400">

          Driver monitoring summary generated from backend analytics.

        </p>

      </div>
            {/* SUMMARY CARDS */}

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

      {/* LATEST SESSION */}

      <div className="mt-10 rounded-3xl border border-white/10 bg-[#08111E] p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">

          Latest Monitoring Session

        </h2>

        {

          latestSession ? (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

              <Info
                title="Started"
                value={formatDate(
                  latestSession.started_at
                )}
              />

              <Info
                title="Ended"
                value={formatDate(
                  latestSession.ended_at
                )}
              />

              <Info
                title="Duration"
                value={sessionDuration(
                  latestSession
                )}
              />

              <Info
                title="Status"
                value={latestSession.status}
              />

            </div>

          ) : (

            <p className="text-slate-400">

              No monitoring sessions found.

            </p>

          )

        }

      </div>
            {/* RECENT ALERTS */}

      <div className="mt-10 rounded-3xl border border-white/10 bg-[#08111E] p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Recent Alerts
        </h2>

        {

          alerts.length ? (

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b border-white/10 text-slate-400">

                    <th className="py-3 text-left">
                      Alert Type
                    </th>

                    <th className="py-3 text-left">
                      Severity
                    </th>

                    <th className="py-3 text-left">
                      Time
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {

                    alerts.slice(0,8).map((alert,index)=>(

                      <tr
                        key={index}
                        className="border-b border-white/5 hover:bg-white/5 transition"
                      >

                        <td className="py-4 text-white">

                          {

                            alert.alert_type ||

                            alert.type ||

                            alert.category ||

                            "Unknown"

                          }

                        </td>

                        <td>

                          <span
                            className={`rounded-full px-3 py-1 text-sm font-semibold

                            ${

                              (alert.severity==="HIGH" ||

                               alert.severity==="High")

                              ?

                              "bg-red-500/20 text-red-400"

                              :

                              "bg-yellow-500/20 text-yellow-400"

                            }

                            `}
                          >

                            {

                              alert.severity ||

                              "Normal"

                            }

                          </span>

                        </td>

                        <td className="text-slate-300">

                          {

                            formatDate(

                              alert.created_at ||

                              alert.timestamp ||

                              alert.time

                            )

                          }

                        </td>

                      </tr>

                    ))

                  }

                </tbody>

              </table>

            </div>

          )

          :

          (

            <div className="py-10 text-center text-slate-400">

              No alerts generated.

            </div>

          )

        }

      </div>
            {/* DRIVER RATING */}

      <div className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-[#08111E] p-8">

          <h2 className="text-2xl font-bold text-white mb-6">
            AI Driver Assessment
          </h2>

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-6xl font-bold text-cyan-400">

                {driverRating()}%

              </h1>

              <p className="mt-3 text-slate-400">

                Overall Driver Rating

              </p>

            </div>

            <div className="text-6xl">

              {

                driverRating() >= 90

                ? "⭐⭐⭐⭐⭐"

                : driverRating() >= 75

                ? "⭐⭐⭐⭐"

                : driverRating() >= 60

                ? "⭐⭐⭐"

                : "⭐⭐"

              }

            </div>

          </div>

          <div className="mt-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5">

            <p className="text-lg text-slate-300">

              {

                driverRating() >= 90

                ? "Excellent driving behaviour detected. The driver maintained high attention with minimal fatigue and low overall risk."

                : driverRating() >= 75

                ? "Driver behaviour remained stable. Minor improvements can further reduce fatigue and risk."

                : "Driver behaviour indicates increased fatigue or risk. Additional monitoring is recommended."

              }

            </p>

          </div>

        </div>

        {/* EXPORT */}

        <div className="rounded-3xl border border-white/10 bg-[#08111E] p-8">

          <h2 className="text-2xl font-bold text-white mb-6">

            Report Actions

          </h2>

          <div className="space-y-5">

            <button

              onClick={() => window.print()}

              className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-semibold text-white transition hover:bg-cyan-600"

            >

              📄 Download Report

            </button>

            <div className="rounded-xl bg-white/5 p-5">

              <h3 className="text-lg font-semibold text-white">

                Report Summary

              </h3>

              <ul className="mt-4 space-y-3 text-slate-300">

                <li>

                  ✅ Sessions Recorded :
                  {" "}
                  {analytics.total_sessions}

                </li>

                <li>

                  🚨 Alerts Generated :
                  {" "}
                  {analytics.total_alerts}

                </li>

                <li>

                  🎯 Average Attention :
                  {" "}
                  {analytics.average_attention}%

                </li>

                <li>

                  😴 Average Fatigue :
                  {" "}
                  {analytics.average_fatigue}%

                </li>

                <li>

                  ⚠ Average Risk :
                  {" "}
                  {analytics.average_risk}%

                </li>

              </ul>

            </div>

          </div>

        </div>

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

      <div className="mt-5 text-4xl font-bold text-white">

        {value}

      </div>

    </div>

  );

}

function Info({ title, value }) {

  return (

    <div className="rounded-2xl bg-white/5 p-5">

      <p className="text-sm uppercase tracking-wider text-slate-400">

        {title}

      </p>

      <h3 className="mt-3 text-lg font-semibold text-white break-words">

        {value}

      </h3>

    </div>

  );

}