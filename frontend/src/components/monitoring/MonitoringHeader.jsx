import { motion } from "framer-motion";
import { Activity, Clock3 } from "lucide-react";

export default function MonitoringHeader() {

    const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (

        <motion.div

            initial={{
                opacity:0,
                y:25
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

            p-7
            "

        >

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-cyan-400 font-medium">

                        AI Driver Monitoring

                    </p>

                    <h1
                        className="
                        mt-2

                        text-5xl

                        font-bold

                        tracking-wide
                        "
                    >

                        Monitoring

                    </h1>

                    <p className="mt-3 text-slate-400">

                        Live driver behaviour analysis

                    </p>

                </div>

                <div className="space-y-4">

                    <div
                        className="
                        flex

                        items-center

                        gap-3

                        rounded-full

                        bg-green-500/15

                        px-5

                        py-3
                        "
                    >

                        <Activity
                            size={18}
                            className="text-green-400 animate-pulse"
                        />

                        <span className="text-green-400">

                            Monitoring Active

                        </span>

                    </div>

                    <div
                        className="
                        flex

                        items-center

                        justify-center

                        gap-2

                        text-slate-400
                        "
                    >

                        <Clock3 size={18} />

                        {time}

                    </div>

                </div>

            </div>

        </motion.div>

    );

}