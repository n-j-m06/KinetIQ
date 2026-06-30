import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroTyping from "../ui/HeroTyping";
export default function HeroContent() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="max-w-2xl"
    >
      {/* Subtitle */}

      <motion.p
  className="
    text-cyan-400
    uppercase
    tracking-[7px]
    text-sm
    font-semibold
    mb-8
  "
>
  Intelligence In Motion
</motion.p>

      {/* Heading */}
<HeroTyping />
      {/* Paragraph */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="
          mt-10
          max-w-md
          text-[18px]
          leading-9
          text-slate-300
        "
      >
        Real-time monitoring, behaviour fingerprinting, and predictive
        safety analytics that adapt to you and keep every journey safer.
      </motion.p>

      {/* Buttons */}

      <div className="mt-6 flex items-center gap-4">

        <motion.button
        onClick={() => navigate("/signup")}
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
         className="
rounded-xl
bg-sky-500
px-7
py-2.5
text-base
font-semibold
transition-all
hover:bg-sky-400
hover:shadow-[0_0_40px_rgba(14,165,233,0.45)]
"
        >
          Get Started
        </motion.button>

        <motion.button
        onClick={() => navigate("/demo")}
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
rounded-xl
border
border-white/10
bg-white/5
px-7
py-2.5
text-base
font-semibold
backdrop-blur-xl
transition-all
hover:bg-white/10
hover:border-cyan-400/40
hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
flex
items-center
gap-2.5
"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>

          Watch Demo
        </motion.button>

      </div>
    </motion.div>
  );
}