import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";

import API_BASE from "../../api/api";

export default function RecentAlerts() {
  const [alerts, setAlerts] = useState([]);

 useEffect(() => {

    const fetchAlerts = () => {

        fetch(`${API_BASE}/alerts`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {

                setAlerts(
                    data.reverse().slice(0, 5)
                );

            })
            .catch(console.error);

    };

    fetchAlerts();

    const interval = setInterval(fetchAlerts, 2000);

    return () => clearInterval(interval);

}, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#08111E]
        p-6
      "
    >
      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Recent Alerts

        </h2>

        <AlertTriangle className="text-yellow-400" />

      </div>

      <div className="mt-6 space-y-4">

        {alerts.length === 0 ? (

          <div className="py-10 text-center text-slate-500">

            No alerts available

          </div>

        ) : (

          alerts.map((item, index) => (

            <div
              key={item.id ?? index}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-white/5
                p-4
              "
            >

              <div>

                <p className="font-medium">

                  {item.type}

                </p>

                <p className="mt-1 text-sm text-slate-500">

                  {item.message}

                </p>

              </div>

              <div className="flex items-center gap-2">

                {item.type === "INFO" ? (

                  <CheckCircle2
                    className="text-green-400"
                    size={18}
                  />

                ) : (

                  <Clock
                    className="text-yellow-400"
                    size={18}
                  />

                )}

                <span className="text-sm">

                  {item.type}

                </span>

              </div>

            </div>

          ))

        )}

      </div>

    </motion.div>
  );
}