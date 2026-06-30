import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Square,
  RotateCcw,
  Cpu,
  Wifi,
  Camera,
  Activity,
} from "lucide-react";

const status = [
  {
    icon: Cpu,
    title: "AI Model",
    value: "Loaded",
    color: "text-green-400",
  },
  {
    icon: Wifi,
    title: "Backend",
    value: "Connected",
    color: "text-green-400",
  },
  {
    icon: Camera,
    title: "Camera",
    value: "Ready",
    color: "text-cyan-400",
  },
  {
    icon: Activity,
    title: "FPS",
    value: "30",
    color: "text-yellow-400",
  },
];

export default function ControlPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      mt-6

      rounded-3xl

      border

      border-white/10

      bg-[#08111E]

      p-6
      "
    >
      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Monitoring Console

        </h2>

        <div className="rounded-full bg-green-500/15 px-4 py-2">

          <span className="text-green-400">

            System Ready

          </span>

        </div>

      </div>

      {/* Status */}

      <div className="mt-6 grid grid-cols-4 gap-4">

        {status.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
              rounded-2xl

              bg-white/5

              p-4
              "
            >

              <Icon
                className={item.color}
                size={22}
              />

              <p className="mt-4 text-slate-500">

                {item.title}

              </p>

              <p className={`font-semibold ${item.color}`}>

                {item.value}

              </p>

            </div>

          );

        })}

      </div>

      {/* Buttons */}

      <div className="mt-8 flex flex-wrap gap-4">

        <Button
          icon={Play}
          title="Start"
          color="bg-cyan-500 text-black"
        />

        <Button
          icon={Pause}
          title="Pause"
          color="bg-yellow-500 text-black"
        />

        <Button
          icon={Square}
          title="Stop"
          color="bg-red-500 text-white"
        />

        <Button
          icon={RotateCcw}
          title="Reset"
          color="bg-slate-700 text-white"
        />

      </div>

    </motion.div>
  );
}

function Button({
  icon: Icon,
  title,
  color,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`
        flex
        items-center
        gap-2

        rounded-2xl

        px-6

        py-4

        font-semibold

        ${color}
      `}
    >
      <Icon size={20} />

      {title}
    </motion.button>
  );
}