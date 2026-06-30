import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Camera,
  Server,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

import API_BASE from "../../api/api";

export default function AIHealthCard() {

  const [healthScore, setHealthScore] = useState(100);

  useEffect(() => {

    const fetchAnalytics = () => {

        fetch(`${API_BASE}/analytics`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {

                setHealthScore(
                    Math.max(
                        0,
                        Math.round(100 - data.average_risk)
                    )
                );

            })
            .catch(console.error);

    };

    fetchAnalytics();

    const interval = setInterval(fetchAnalytics, 2000);

    return () => clearInterval(interval);

}, []);

  const health = [
    {
      icon: Cpu,
      title: "AI Engine",
      status: "Running",
    },
    {
      icon: Camera,
      title: "Camera",
      status: "Connected",
    },
    {
      icon: BrainCircuit,
      title: "Detection Model",
      status: "Active",
    },
    {
      icon: Server,
      title: "Backend API",
      status: "Online",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="
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

            AI Health

          </h2>

          <p className="mt-1 text-slate-400">

            Live system status

          </p>

        </div>

        <div className="rounded-full bg-green-500/20 px-4 py-2">

         <motion.span

animate={{

scale:[1,.95,1]

}}

transition={{

duration:.5

}}

className="text-green-400"

>

{healthScore}%

</motion.span>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        {health.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3">

                  <Icon
                    size={22}
                    className="text-cyan-400"
                  />

                </div>

                <span>

                  {item.title}

                </span>

              </div>

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />

                <span className="text-green-400">

                  {item.status}

                </span>

              </div>

            </div>
          );

        })}

      </div>

    </motion.div>
  );
}