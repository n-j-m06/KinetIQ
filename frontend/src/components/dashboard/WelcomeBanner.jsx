import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function WelcomeBanner() {

  const userName =
    localStorage.getItem("userName") || "Driver";
    const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-r
        from-cyan-500/10
        via-[#0A1628]
        to-[#08121F]
        p-8
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />

      <div className="relative z-10 flex items-center justify-between">

        <div>

          <div className="flex items-center gap-3">

            <Sparkles
              className="text-cyan-400"
              size={22}
            />

            <p className="font-medium text-cyan-400">
              AI Driver Intelligence
            </p>

          </div>

          <h1
            className="
              mt-4
              text-5xl
              font-bold
              leading-tight
              [font-family:'Space_Grotesk']
            "
          >
            Welcome back 👋

            <br />

          </h1>

          <p
            className="
              mt-5
              max-w-xl
              leading-7
              text-slate-400
            "
          >
            Your intelligent driving assistant is online.
            Monitor driver behaviour, analyse fatigue,
            receive AI-powered alerts and explore driving
            insights in real time.
          </p>

        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/monitoring")}
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-cyan-500
            px-6
            py-4
            font-semibold
            text-black
          "
        >
          Start Monitoring

          <ArrowUpRight size={18} />

        </motion.button>

      </div>

    </motion.div>
  );
}