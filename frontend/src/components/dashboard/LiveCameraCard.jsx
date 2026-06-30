import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import API_BASE from "../../api/api";
import {
    Camera,
    Play,
    Square,
    Circle,
    Wifi,
} from "lucide-react";

export default function LiveCameraCard() {
    const videoRef = useRef(null);

const streamRef = useRef(null);
const metricsInterval = useRef(null);
const [streaming, setStreaming] = useState(false);
const [fps, setFps] = useState(30);
const [latency, setLatency] = useState(20);
useEffect(() => {

    if (
        streaming &&
        videoRef.current &&
        streamRef.current
    ) {

        videoRef.current.srcObject =
            streamRef.current;

    }

}, [streaming]);
useEffect(() => {

    if (!streaming) return;

    const id = setInterval(() => {

        setFps(28 + Math.floor(Math.random() * 4));
        setLatency(18 + Math.floor(Math.random() * 7));

    },1000);

    return () => clearInterval(id);

},[streaming]);
const startCamera = async () => {
  try {

    // Start backend session

    await fetch(`${API_BASE}/session/start`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    // Open webcam

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    streamRef.current = stream;

    setStreaming(true);
    sendFakeMetrics();
    metricsInterval.current = setInterval(() => {
  sendFakeMetrics();
}, 1000);

  } catch (err) {
    console.error(err);
  }
};

const stopCamera = async () => {

  try {

    await fetch(`${API_BASE}/session/end`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

  } catch (err) {

    console.error(err);

  }

  if (streamRef.current) {

    streamRef.current.getTracks().forEach(track =>
      track.stop()
    );

  }

  setStreaming(false);
  if (metricsInterval.current) {
  clearInterval(metricsInterval.current);
}

};
const sendFakeMetrics = async () => {

    try {

        const attention = Math.floor(Math.random() * 12) + 89;
        const fatigue = Math.floor(Math.random() * 18) + 6;
        const risk = Math.floor(Math.random() * 20) + 4;
        const blink = Math.floor(Math.random() * 8) + 12;

        const body = {

            blink_rate: blink,

            attention_score: attention,

            fatigue_score: fatigue,

            risk_score: risk,

            phone_detected: Math.random() < 0.08

        };

        const res = await fetch(`${API_BASE}/metrics`, {

            method: "POST",

            headers: {

                "Content-Type": "application/json",

                Authorization:
                    `Bearer ${localStorage.getItem("token")}`

            },

            body: JSON.stringify(body)

        });

        if (!res.ok) {

            console.log(await res.text());

        }

    }

    catch(err){

        console.error(err);

    }

};
    return (

        <motion.div

            initial={{
                opacity:0,
                y:30
            }}

            animate={{
                opacity:1,
                y:0
            }}

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

                        Live Monitoring

                    </h2>

                    <p className="text-slate-400 mt-1">

                        Camera Preview

                    </p>

                </div>

                <div className="flex items-center gap-2 text-green-400">

                    <Circle
                        size={10}
                        fill="currentColor"
                    />

                    Live

                </div>

            </div>

            {/* Camera */}

           <div
    className="
    relative

    mt-6

    h-[340px]

    overflow-hidden

    rounded-2xl

    border

    border-cyan-500/20

    bg-[#050B14]
    "
>

    {/* Camera Overlay */}

    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

    {/* Center Icon */}

   {streaming ? (

    <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            rounded-2xl
        "
    />

) : (

    <div className="absolute inset-0 flex flex-col items-center justify-center">

        <Camera
            size={70}
            className="text-cyan-500/40"
        />

        <p className="mt-5 text-slate-500">
            Waiting for Camera Stream...
        </p>

    </div>

)}

    {/* LIVE */}

    <div
    className={`
        absolute
        left-5
        top-5
        flex
        items-center
        gap-2
        rounded-full
        px-3
        py-1
        ${
            streaming
                ? "bg-red-500/20"
                : "bg-slate-700/40"
        }
    `}
>

    <div
        className={`
            h-2
            w-2
            rounded-full
            ${
                streaming
                    ? "bg-red-500 animate-pulse"
                    : "bg-slate-500"
            }
        `}
    />

    <span
        className={
            streaming
                ? "text-red-400"
                : "text-slate-400"
        }
    >
        {streaming ? "LIVE" : "OFFLINE"}
    </span>

</div>
    {/* FPS */}

    <div
        className="
        absolute

        right-5

        top-5

        rounded-full

        bg-white/10

        px-3

        py-1

        text-sm
        "
    >

        {fps} FPS

    </div>

    {/* Bottom Stats */}

    <div
        className="
        absolute

        bottom-4

        left-4

        right-4

        flex

        justify-between

        rounded-xl

        bg-black/40

        p-3

        backdrop-blur-md
        "
    >

        <div>

            <p className="text-xs text-slate-500">

                Resolution

            </p>

            <p>1280 × 720</p>

        </div>

        <div>

            <p className="text-xs text-slate-500">

                Latency

            </p>

            <p>{latency} ms</p>

        </div>

        <div>

            <p className="text-xs text-slate-500">

                Detection

            </p>

            <p className="text-green-400">

                {streaming ? "ACTIVE" : "OFFLINE"}

            </p>

        </div>

    </div>

</div>
            {/* Footer */}

            <div className="mt-6 flex items-center justify-between">

                <div className="flex gap-3">

                    <motion.button

                        whileHover={{
                            scale:1.05
                        }}

                        whileTap={{
                            scale:.95
                        }}
                        onClick={startCamera}
                        className="
                        flex
                        
                        items-center

                        gap-2

                        rounded-xl

                        bg-cyan-500

                        px-5

                        py-3

                        font-semibold

                        text-black
                        "
                    >

                        <Play size={18}/>

                        Start

                    </motion.button>

                    <motion.button

                        whileHover={{
                            scale:1.05
                        }}

                        whileTap={{
                            scale:.95
                        }}
                         onClick={stopCamera}
                        className="
                        flex
                       
                        items-center

                        gap-2

                        rounded-xl

                        border

                        border-red-500/30

                        px-5

                        py-3

                        text-red-400
                        "
                    >

                        <Square size={18}/>

                        Stop

                    </motion.button>

                </div>

                <div className="flex items-center gap-2 text-slate-400">

                    <Wifi size={18}/>

                   {streaming ? "Streaming" : "Camera Ready"}

                </div>

            </div>

        </motion.div>

    );

}