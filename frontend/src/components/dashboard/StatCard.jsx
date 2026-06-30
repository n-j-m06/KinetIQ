import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
export default function StatCard({

    title,

    value,

    suffix,

    color,

    subtitle,

    icon: Icon,

}) {
    return (

        <motion.div

           whileHover={{

    y:-8,

    scale:1.03,

    boxShadow:"0px 20px 60px rgba(6,182,212,.18)"

}}

            className="
            relative
            overflow-hidden

            rounded-3xl

            border
            border-white/10

            bg-[#08111E]

            p-6
            "

        >

            <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20"
                style={{ background: color }}
            />

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-slate-400 text-sm">

                        {title}

                    </p>

                    <h2
                        className="mt-3 text-4xl font-bold"
                        style={{ color }}
                    >

                        {typeof value === "number" ? (
    <AnimatedCounter
        end={value}
        suffix={suffix}
    />
) : (
    value
)}

                    </h2>

                    <p className="mt-2 text-sm text-slate-500">

                        {subtitle}

                    </p>

                </div>

                <div
                    className="rounded-2xl p-4"
                    style={{
                        background: `${color}20`,
                    }}
                >

                    <Icon
                        size={30}
                        color={color}
                    />

                </div>

            </div>

        </motion.div>

    );

}