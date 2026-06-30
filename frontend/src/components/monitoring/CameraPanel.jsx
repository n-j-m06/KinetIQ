import { motion } from "framer-motion";
import {
  Camera,
  Circle,
  Wifi,
  Cpu,
  Clock3,
} from "lucide-react";

export default function CameraPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#08111E]
        p-6
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">

            Live Camera

          </h2>

          <p className="mt-1 text-slate-400">

            AI Vision Feed

          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-red-500/15 px-4 py-2">

          <Circle
            size={10}
            fill="currentColor"
            className="text-red-500 animate-pulse"
          />

          <span className="text-red-400">

            LIVE

          </span>

        </div>

      </div>

      {/* Camera Area */}

     <div
    className="
    relative

    mt-6

    h-[450px]

    overflow-hidden

    rounded-2xl

    border

    border-cyan-500/20

    bg-[#030712]
    "
>

        {/* Placeholder */}

        {/* Camera Overlay */}

<div className="absolute inset-0">

    {/* Grid */}

    <div
        className="
        absolute

        inset-0

        opacity-20

        bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]

        bg-[size:45px_45px]
        "
    />

    {/* Center */}

    <div className="absolute inset-0 flex flex-col items-center justify-center">

        <Camera

            size={90}

            className="text-cyan-500/30"

        />

        <p className="mt-6 text-slate-500">

            Waiting for Backend Camera Stream...

        </p>

    </div>

</div>
{/* AI Scan Line */}

<motion.div
    animate={{
        y: [0, 360, 0],
    }}
    transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
    }}
    className="
        absolute
        left-0
        right-0

        h-[2px]

        bg-cyan-400

        shadow-[0_0_20px_#22d3ee]
    "
/>
<motion.div
    animate={{
        opacity: [0.5, 1, 0.5],
    }}
    transition={{
        duration: 1.5,
        repeat: Infinity,
    }}
    className="
        absolute

        left-1/2
        top-1/2

        h-44
        w-36

        -translate-x-1/2
        -translate-y-1/2

        rounded-xl

        border-2

        border-green-400
    "
/>
<motion.div
    animate={{
        opacity: [0.4, 1, 0.4],
    }}
    transition={{
        repeat: Infinity,
        duration: 2,
    }}
    className="
        absolute

        right-5
        top-16

        rounded-full

        bg-cyan-500/20

        px-4
        py-2

        text-sm

        text-cyan-400
    "
>

    AI Processing

</motion.div>

        {/* Corner Borders */}

        <div className="absolute left-4 top-4 h-10 w-10 border-l-2 border-t-2 border-cyan-400" />
        <div className="absolute right-4 top-4 h-10 w-10 border-r-2 border-t-2 border-cyan-400" />
        <div className="absolute left-4 bottom-4 h-10 w-10 border-l-2 border-b-2 border-cyan-400" />
        <div className="absolute right-4 bottom-4 h-10 w-10 border-r-2 border-b-2 border-cyan-400" />

        {/* Camera Footer */}

<div
    className="
    absolute

    bottom-0

    left-0

    right-0

    flex

    items-center

    justify-between

    border-t

    border-white/10

    bg-black/60

    px-6

    py-4

    backdrop-blur-md
    "
>

    <div className="flex gap-8">

        <Status title="Camera" value="Connected" color="text-green-400" />

        <Status title="Backend" value="Online" color="text-green-400" />

        <Status title="AI Model" value="Loaded" color="text-cyan-400" />

    </div>

    <div className="flex gap-8">

        <Status title="FPS" value="30" color="text-yellow-400" />

        <Status title="Latency" value="21 ms" color="text-yellow-400" />

    </div>

</div>

      </div>
      {/* Bottom Stats */}


    </motion.div>
  );
}

function Stat({
  icon: Icon,
  title,
  value,
  color,
}) {
  return (
    <div
      className="
        rounded-2xl

        bg-white/5

        p-4
      "
    >

      <Icon
        size={22}
        className={color}
      />

      <p className="mt-4 text-sm text-slate-500">

        {title}

      </p>

      <p className={`mt-1 font-semibold ${color}`}>

        {value}

      </p>

    </div>
  );
}
function Status({

    title,

    value,

    color,

}) {

    return (

        <div>

            <p className="text-xs text-slate-500">

                {title}

            </p>

            <p className={`font-semibold ${color}`}>

                {value}

            </p>

        </div>

    );

}