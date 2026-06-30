import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AuthButton({
  loading = false,
  text = "Sign In",
}) {
  return (
    <motion.button
      type="submit"
      whileHover={{
        scale: 1.02,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      disabled={loading}
      className="
        relative
        mt-6

        flex
        h-12
        w-full
        items-center
        justify-center

        overflow-hidden

        rounded-2xl

        bg-gradient-to-r
        from-sky-500
        via-cyan-500
        to-sky-600

        font-semibold
        text-white

        shadow-[0_15px_35px_rgba(14,165,233,.35)]

        transition-all
        duration-300

        hover:shadow-[0_20px_45px_rgba(14,165,233,.45)]
      "
    >
      {/* Animated Shine */}

      <motion.div
        animate={{
          x: ["-150%", "250%"],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-0
          top-0

          h-full
          w-20

          -skew-x-12

          bg-white/20

          blur-md
        "
      />

      {loading ? (
        <div
          className="
            h-5
            w-5

            animate-spin

            rounded-full

            border-2
            border-white/30
            border-t-white
          "
        />
      ) : (
        <div className="flex items-center gap-2">

          <span>{text}</span>

          <motion.div
            whileHover={{
              x: 4,
            }}
          >
            <ArrowRight size={18} />
          </motion.div>

        </div>
      )}
    </motion.button>
  );
}