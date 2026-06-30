import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function AuthInput({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const isPassword = type === "password";

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`
        group
        relative
        flex
        items-center

        rounded-2xl

        border

        ${
          focused
            ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,.18)]"
            : "border-white/10"
        }

        bg-white/[0.03]

        transition-all
        duration-300
      `}
    >
      {/* Left Icon */}

      <div className="pl-5">

        <Icon
          size={20}
          className={`
            transition-colors

            ${
              focused
                ? "text-cyan-400"
                : "text-slate-500"
            }
          `}
        />

      </div>

      {/* Input */}

      <input
        type={
          isPassword
            ? showPassword
              ? "text"
              : "password"
            : type
        }
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="
          h-14
          w-full

          bg-transparent

          px-4

          text-white

          outline-none

          placeholder:text-slate-500
        "
      />

      {/* Password Eye */}

      {isPassword && (
        <button
          type="button"
          onClick={() =>
            setShowPassword(!showPassword)
          }
          className="
            mr-4

            text-slate-500

            transition

            hover:text-cyan-400
          "
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      )}

      {/* Bottom Glow */}

      <motion.div
        animate={{
          opacity: focused ? 1 : 0,
        }}
        className="
          absolute
          bottom-0
          left-0

          h-[2px]
          w-full

          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
        "
      />
    </motion.div>
  );
}