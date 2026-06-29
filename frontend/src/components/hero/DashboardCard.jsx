import { motion } from "framer-motion";

const Metric = ({ title, value, color, sub }) => {
  const number = parseInt(value);

  const radius = 33;
  const size = 94;
  const center = size / 2;

  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (number / 100) * circumference;

  return (
    <div className="glass rounded-2xl px-5 py-6 flex flex-col items-center">

      <h4 className="text-xs uppercase tracking-wider text-gray-400">
        {title}
      </h4>

      <div className="relative mt-5 flex h-[94px] w-[94px] items-center justify-center">

        <svg
          width={size}
          height={size}
          className="overflow-visible"
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#1f2937"
            strokeWidth="5"
            fill="none"
          />

          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            stroke={color}
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference,
            }}
            animate={{
              strokeDashoffset: offset,
            }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
            transform={`rotate(-90 ${center} ${center})`}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-[24px] font-bold tracking-tight">
            {value}
          </h2>
        </div>

      </div>

      <p
        className="mt-4 text-sm font-medium"
        style={{ color }}
      >
        {sub}
      </p>

    </div>
  );
};

export default function DashboardCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="
        glass
        absolute
        top-44
        right-12
        w-[390px]
        rounded-3xl
        px-7
        py-6
        z-30
        hidden
        xl:block
      "
    >
      <div className="flex items-center justify-between">

        <h2 className="text-lg font-semibold">
          LIVE STATUS
        </h2>

        <span className="text-green-400">
          ● Online
        </span>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-5">

        <Metric
          title="Attention"
          value="94%"
          color="#3B82F6"
          sub="Excellent"
        />

        <Metric
          title="Fatigue"
          value="22%"
          color="#10B981"
          sub="Low"
        />

        <Metric
          title="Risk"
          value="8%"
          color="#14B8A6"
          sub="Minimal"
        />

        <Metric
          title="Blink"
          value="18"
          color="#22C55E"
          sub="/min"
        />

      </div>

      <div className="glass mt-6 rounded-2xl px-5 py-4 flex items-center justify-between">

        <span>Phone Usage</span>

        <span className="text-green-400 font-medium">
          Not Detected
        </span>

      </div>

    </motion.div>
  );
}