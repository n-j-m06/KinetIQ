import { motion } from "framer-motion";
import {
  Eye,
  Smartphone,
  Smile,
  ShieldCheck,
  UserCheck,
  AlertTriangle,
} from "lucide-react";

const detections = [
  {
    title: "Eyes",
    value: "Focused",
    color: "text-green-400",
    icon: Eye,
  },
  {
    title: "Phone",
    value: "Not Detected",
    color: "text-green-400",
    icon: Smartphone,
  },
  {
    title: "Seatbelt",
    value: "Fastened",
    color: "text-green-400",
    icon: ShieldCheck,
  },
  {
    title: "Yawning",
    value: "No",
    color: "text-green-400",
    icon: Smile,
  },
  {
    title: "Head Pose",
    value: "Centered",
    color: "text-cyan-400",
    icon: UserCheck,
  },
  {
    title: "Risk",
    value: "LOW",
    color: "text-yellow-400",
    icon: AlertTriangle,
  },
];

export default function DetectionPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#08111E]
        p-6
      "
    >
      <h2 className="text-2xl font-bold">

        Driver Status

      </h2>

      <p className="mt-1 text-slate-400">

        Live AI Detection

      </p>

      <div className="mt-6 space-y-4">

        {detections.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                flex
                items-center
                justify-between

                rounded-2xl

                bg-white/5

                p-4
              "
            >

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-cyan-500/10 p-3">

                  <Icon
                    size={20}
                    className="text-cyan-400"
                  />

                </div>

                <span>

                  {item.title}

                </span>

              </div>

              <span className={`font-semibold ${item.color}`}>

                {item.value}

              </span>

            </div>

          );

        })}

      </div>
    </motion.div>
  );
}