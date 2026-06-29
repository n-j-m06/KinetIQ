import { motion } from "framer-motion";

const PrimaryButton = ({ children }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="rounded-full bg-cyan-500 px-6 py-2.5 font-semibold text-white shadow-lg shadow-cyan-500/30 transition"
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;