export default function FingerprintCard({
  analytics,
  fingerprint,
}) {

  const metrics = [
    {
      name: "Attention Score",
      value:
        fingerprint?.avg_attention_score ??
        analytics.average_attention,
      color: "bg-cyan-400",
    },
    {
      name: "Fatigue Score",
      value:
        fingerprint?.avg_fatigue_score ??
        analytics.average_fatigue,
      color: "bg-yellow-400",
    },
    {
      name: "Risk Score",
      value:
        fingerprint?.avg_risk_score ??
        analytics.average_risk,
      color: "bg-red-400",
    },
    {
      name: "Blink Rate",
      value:
        fingerprint?.avg_blink_rate ?? 0,
      color: "bg-emerald-400",
      suffix: " bpm",
      max: 40,
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-[#08111E] p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Driver Behaviour Fingerprint
      </h2>

      <div className="space-y-6">

        {metrics.map((metric) => {

          const width = metric.max
            ? Math.min(
                (metric.value / metric.max) * 100,
                100
              )
            : Math.min(metric.value, 100);

          return (

            <div key={metric.name}>

              <div className="flex items-center justify-between mb-2">

                <span className="text-slate-300">

                  {metric.name}

                </span>

              <span className="font-semibold text-white">

  {Number(metric.value).toFixed(2)}
  {metric.suffix || "%"}

</span>

              </div>

              <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

                <div
                  className={`${metric.color} h-full rounded-full transition-all duration-700`}
                  style={{
                    width: `${width}%`,
                  }}
                />

              </div>

            </div>

          );

        })}

      </div>

      <div className="mt-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-4">

        <p className="text-cyan-300 font-semibold">
          AI Behaviour Classification
        </p>

        <p className="mt-2 text-slate-300">

          {analytics.average_risk <= 20
            ? "Low Risk Driver"
            : analytics.average_risk <= 50
            ? "Moderate Risk Driver"
            : "High Risk Driver"}

        </p>

      </div>

    </div>
  );
}