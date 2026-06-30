import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        scale: 1.01,
      }}
      className="
        relative
        overflow-hidden

        w-[380px]

        rounded-[28px]

        border
        border-white/10

        bg-white/[0.025]

        backdrop-blur-[42px]

        shadow-[0_35px_90px_rgba(0,0,0,.45)]

        px-8
        py-8
      "
    >
      {/* Glass Reflection */}

      <div
        className="
          absolute
          -left-14
          -top-24

          h-[280px]
          w-[70px]

          rotate-[24deg]

          bg-white/[0.035]

          blur-xl
        "
      />

      {/* Soft Glow */}

      <div
        className="
          absolute
          -right-24
          -bottom-24

          h-60
          w-60

          rounded-full

          bg-cyan-400/5

          blur-[100px]
        "
      />

      {/* Logo */}

      <div className="flex justify-center">

        <motion.div
          animate={{
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.8,
          }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-xl

            border
            border-cyan-400/20

            bg-cyan-500/10
          "
        >
          <ShieldCheck
            size={20}
            className="text-cyan-400"
          />
        </motion.div>

      </div>

      {/* Brand */}

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          fontFamily: "Space Grotesk",
        }}
        className="
          mt-5

          text-center

          text-[24px]

          font-semibold

          tracking-[8px]

          text-white
        "
      >
        KINETIQ
      </motion.h2>

      <p
        className="
          mt-1

          text-center

          text-[11px]

          uppercase

          tracking-[3px]

          text-cyan-400/80
        "
      >
        AI Driver Intelligence
      </p>

      {/* Welcome */}

      <h1
        className="
          mt-7

          text-center

          text-[28px]

          font-semibold

          text-white
        "
      >
        Welcome Back
      </h1>

      <p
        className="
          mt-2

          text-center

          text-sm

          text-slate-400
        "
      >
        Sign in to continue
      </p>

      {/* Login Form */}

      <LoginForm />

      {/* Footer */}

      <div
        className="
          mt-7

          flex

          justify-center
        "
      >
        <div
          className="
            rounded-full

            border

            border-cyan-400/15

            bg-cyan-500/5

            px-4

            py-1.5

            text-[11px]

            tracking-wide

            text-slate-400
          "
        >
          Secure Authentication
        </div>
      </div>

    </motion.div>
  );
}