import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Smartphone,
  Smile,
  ShieldCheck,
  UserCheck,
  TriangleAlert,
} from "lucide-react";

import API_BASE from "../../api/api";

export default function DriverStatusCard() {
  const [metric, setMetric] = useState(null);

 useEffect(() => {

    const fetchMetrics = () => {

        fetch(`${API_BASE}/metrics`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.length) {

                    setMetric(data[data.length - 1]);

                }

            })
            .catch(console.error);

    };

    fetchMetrics();

    const interval = setInterval(fetchMetrics, 1000);

    return () => clearInterval(interval);

}, []);

  const data = [
    {
      title: "Eyes",
      value:

metric

? metric.attention_score > 90

? "Focused"

: metric.attention_score > 70

? "Attentive"

: "Distracted"

: "--",
      icon: Eye,
      color:

metric

? metric.attention_score > 90

? "text-green-400"

: metric.attention_score > 70

? "text-yellow-400"

: "text-red-400"

: "text-slate-400"
    },
    {
      title: "Phone",
      value: metric
        ? metric.phone_detected
          ? "Detected"
          : "Not Detected"
        : "--",
      icon: Smartphone,
      color:
        metric && metric.phone_detected
          ? "text-red-400"
          : "text-green-400",
    },
    {
      title: "Yawning",
      value: "No",
      icon: Smile,
      color: "text-green-400",
    },
    {
      title: "Seatbelt",
      value: "Fastened",
      icon: ShieldCheck,
      color: "text-green-400",
    },
    {
      title: "Head Pose",
      value: "Centered",
      icon: UserCheck,
      color: "text-green-400",
    },
    {
      title: "Risk Level",
      value: metric
        ? metric.risk_score > 70
          ? "High"
          : metric.risk_score > 40
          ? "Medium"
          : "Low"
        : "--",
      icon: TriangleAlert,
      color:
        metric && metric.risk_score > 70
          ? "text-red-400"
          : metric && metric.risk_score > 40
          ? "text-yellow-400"
          : "text-green-400",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        mt-8
        rounded-3xl
        border
        border-white/10
        bg-[#08111E]
        p-7
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Driver Status
          </h2>

          <p className="text-slate-400">
            Live AI Detection
          </p>
        </div>

        <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
          Active
        </span>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">

        {data.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                bg-white/5
                p-5
              "
            >
              <div className="rounded-xl bg-cyan-500/10 p-3">

                <Icon
                  size={22}
                  className="text-cyan-400"
                />

              </div>

              <div>

                <h3 className="font-medium text-white">

                  {item.title}

                </h3>

                <p className={`mt-1 text-sm font-semibold ${item.color}`}>

                  {item.value}

                </p>

              </div>

            </div>
          );

        })}

      </div>

    </motion.div>
  );
}