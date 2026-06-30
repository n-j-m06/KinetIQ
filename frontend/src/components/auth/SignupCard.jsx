import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import SignupForm from "./SignupForm";

export default function SignupCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
      relative
      overflow-hidden

      w-[390px]

      rounded-[32px]

      border
      border-white/10

      bg-white/[0.025]

      backdrop-blur-[42px]

      shadow-[0_35px_120px_rgba(0,0,0,.55)]

      px-8
      py-7
      "
    >

      <div className="flex justify-center">

        <div
          className="
          flex
          h-14
          w-16
          items-center
          justify-center

          rounded-2xl

          border
          border-cyan-400/20

          bg-cyan-500/10
          "
        >
          <UserPlus
            size={28}
            className="text-cyan-400"
          />
        </div>

      </div>

      <h2
        className="
        mt-6
        text-center
        text-[32px]
        font-bold
        tracking-[5px]
        text-white
       [font-family:'Sora',sans-serif]
        "
      >
        KINETIQ
      </h2>

      <h1
        className="
        mt-6
        text-center
        text-[34px]
        font-bold
        text-white
        [font-family:'Orbitron',sans-serif]
        "
      >
        Create Account
      </h1>

      <p
        className="
        mt-2
        text-center
        text-slate-400
        "
      >
        Join the AI Driver Platform
      </p>

      <SignupForm />

    </motion.div>
  );
}