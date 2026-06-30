import { useEffect, useState } from "react";
import API_BASE from "../../api/api";

export default function SessionCard() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = () => {
      fetch(`${API_BASE}/session/history`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          if (Array.isArray(data) && data.length) {
            setSession(data[data.length - 1]);
          }
        })
        .catch(console.error);
    };

    fetchSession();

    const interval = setInterval(fetchSession, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!session) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#08111E] p-6">
        No Session Available
      </div>
    );
  }

  const started = new Date(session.started_at);

  const formatDuration = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) return `${hrs}h ${mins}m ${secs}s`;
    if (mins > 0) return `${mins}m ${secs}s`;
    return `${secs}s`;
  };

  const formatDate = (date) => {
    if (!date) return "--";

    return new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "medium",
      timeZone: "Asia/Kolkata",
    });
  };

  let duration = "--";

  if (
    session.status &&
    session.status.toUpperCase() === "ENDED"
  ) {
    if (session.ended_at) {
      const ended = new Date(session.ended_at);

      const diff = Math.floor(
        (ended.getTime() - started.getTime()) / 1000
      );

      duration = formatDuration(diff);
    } else {
      duration = "Completed";
    }
  } else {
    const diff = Math.floor(
      (Date.now() - started.getTime()) / 1000
    );

    duration = formatDuration(diff);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#08111E] p-6 h-full">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Current Session
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Session ID</span>
          <span className="font-semibold text-white">
            #{session.id}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Status</span>

          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold ${
              session.status?.toUpperCase() === "ACTIVE"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {session.status}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Started</span>

          <span className="font-medium text-right text-white">
            {formatDate(session.started_at)}
          </span>
        </div>

        {session.ended_at && (
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Ended</span>

            <span className="font-medium text-right text-white">
              {formatDate(session.ended_at)}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Duration</span>

          <span className="font-semibold text-cyan-400">
            {duration}
          </span>
        </div>

      </div>
    </div>
  );
}