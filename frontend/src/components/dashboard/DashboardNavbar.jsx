import { motion } from "framer-motion";
import {
  Search,
  Bell,
  ChevronDown,
  UserCircle2,
} from "lucide-react";

export default function DashboardNavbar() {
    const userName =
  localStorage.getItem("userName") || "Driver";
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50

        h-[82px]

        border-b
        border-white/10

        bg-[#07111D]/75

        backdrop-blur-2xl
      "
    >
      <div className="flex h-full items-center justify-between px-8">

        {/* Left */}

        <motion.h1
          whileHover={{ scale: 1.03 }}
          className="
            text-[30px]
            font-bold
            tracking-[7px]

            text-white

            [font-family:'Space_Grotesk']
          "
        >
          KINETIQ
        </motion.h1>

        {/* Search */}

        <div
          className="
            flex

            w-[420px]

            items-center

            gap-3

            rounded-2xl

            border

            border-white/10

            bg-white/5

            px-5

            py-3
          "
        >
          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            placeholder="Search..."
            className="
              w-full

              bg-transparent

              outline-none

              placeholder:text-slate-500
            "
          />
        </div>

        {/* Right */}

        <div className="flex items-center gap-6">

          <div
            className="
              flex

              cursor-pointer

              items-center

              gap-3
            "
          >

            {/* Avatar */}

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
              "
            >
              <UserCircle2
                size={26}
                className="text-cyan-400"
                strokeWidth={2}
              />
            </div>

            <div>

            <h3 className="font-semibold">
  {userName.charAt(0).toUpperCase() + userName.slice(1)}
</h3>

              <p className="text-xs text-green-400">

                Online

              </p>

            </div>

            <ChevronDown
              size={18}
              className="text-slate-400"
            />

          </div>

        </div>

      </div>

    </motion.header>
  );
}