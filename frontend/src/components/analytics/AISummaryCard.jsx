export default function AISummaryCard({
  analytics,
  fingerprint,
}) {

  const attention =
    fingerprint?.avg_attention_score ??
    analytics.average_attention;

  const fatigue =
    fingerprint?.avg_fatigue_score ??
    analytics.average_fatigue;

  const risk =
    fingerprint?.avg_risk_score ??
    analytics.average_risk;

  const blink =
    fingerprint?.avg_blink_rate ?? 0;

  const summary = [];

  // Attention
  if (attention >= 90)
    summary.push({
      icon: "🟢",
      text: "Excellent driver attention maintained throughout monitoring.",
    });
  else if (attention >= 70)
    summary.push({
      icon: "🟡",
      text: "Driver attention remained satisfactory with minor fluctuations.",
    });
  else
    summary.push({
      icon: "🔴",
      text: "Attention dropped below acceptable levels.",
    });

  // Fatigue
  if (fatigue <= 20)
    summary.push({
      icon: "🟢",
      text: "Very low fatigue detected.",
    });
  else if (fatigue <= 50)
    summary.push({
      icon: "🟡",
      text: "Moderate fatigue detected.",
    });
  else
    summary.push({
      icon: "🔴",
      text: "High fatigue detected.",
    });

  // Blink
  if (blink > 0) {
    if (blink <= 20)
      summary.push({
        icon: "🟢",
        text: "Blink rate is within the normal range.",
      });
    else
      summary.push({
        icon: "🟡",
        text: "Elevated blink rate observed.",
      });
  }

  // Risk
  let classification = "LOW RISK";
  let color = "text-green-400";

  if (risk > 20) {
    classification = "MODERATE RISK";
    color = "text-yellow-400";
  }

  if (risk > 50) {
    classification = "HIGH RISK";
    color = "text-red-400";
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#08111E] p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        AI Driver Assessment
      </h2>

      <div className="space-y-4">

        {summary.map((item, index) => (

          <div
            key={index}
            className="flex items-start gap-3 rounded-xl bg-white/5 p-3"
          >

            <span className="text-xl">
              {item.icon}
            </span>

            <p className="text-slate-300 leading-relaxed">
              {item.text}
            </p>

          </div>

        ))}

      </div>

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <p className="text-sm uppercase tracking-wider text-slate-400">
          Overall Driver Classification
        </p>

        <h3 className={`mt-2 text-3xl font-bold ${color}`}>
          {classification}
        </h3>

        <p className="mt-3 text-slate-300">
          {classification === "LOW RISK"
            ? "Driver behaviour is stable and considered safe."
            : classification === "MODERATE RISK"
            ? "Continue monitoring. Some behavioural deviations were observed."
            : "Immediate intervention recommended due to elevated risk."}
        </p>

      </div>
    </div>
  );
}