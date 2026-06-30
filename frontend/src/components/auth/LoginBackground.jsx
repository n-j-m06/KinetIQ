import { motion } from "framer-motion";
import bg from "../../assets/images/login-bg.jpg";

export default function LoginBackground() {
  return (
   <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Background */}

      <motion.img
        src={bg}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"

        animate={{
          scale: [1, 1.04, 1],
          x: [0, -20, 0],
        }}

        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#050A16]/35" />

      {/* Blue Gradient */}

      <div
  className="
    absolute
    inset-0
    bg-gradient-to-r
    from-[#06101D]/55
    via-[#08111F]/20
    to-[#040812]/45
  "
/>

      {/* Neon Glow */}

      <motion.div

        animate={{
          opacity: [.15,.28,.15],
          scale:[1,1.2,1]
        }}

        transition={{
          duration:6,
          repeat:Infinity
        }}

        className="
        absolute
        left-1/2
        top-1/2
        h-[700px]
        w-[700px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#0B1F38]
        blur-[220px]
        "
      />

      {/* Floating Lights */}

      {[...Array(18)].map((_, i) => (

        <motion.div

          key={i}

          className="absolute rounded-full bg-cyan-400"

          style={{
            width: 3,
            height: 3,
            left: `${Math.random()*100}%`,
            top: `${Math.random()*100}%`,
          }}

          animate={{
            opacity:[0,.8,0],
            y:[0,-60]
          }}

          transition={{
            duration:4+Math.random()*3,
            repeat:Infinity,
            delay:i*.2
          }}

        />

      ))}

    </div>
  );
}