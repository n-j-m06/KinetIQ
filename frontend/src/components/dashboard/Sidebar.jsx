import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Camera,
  BarChart3,
  FileText,
  User,
  LogOut,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Monitoring",
    icon: Camera,
    path: "/monitoring",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "Reports",
    icon: FileText,
    path: "/reports",
  },
  {
    title: "Profile",
    icon: User,
    path: "/profile",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
hidden
lg:block
fixed
left-0
top-[82px]
        h-[calc(100vh-82px)]
        w-[240px]
        border-r
        border-white/10
        bg-[#06111C]/70
        backdrop-blur-2xl
      "
    >
      <div className="flex h-full flex-col">
        {/* Navigation */}
        <div className="flex-1 px-5 pt-8">
          {menus.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(item.path)}
                className={`
                  mb-3
                  flex
                  cursor-pointer
                  items-center
                  gap-4
                  rounded-2xl
                  px-5
                  py-4
                  transition-all
                  ${
                    location.pathname === item.path
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/20"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon size={21} />
                <span className="font-medium">{item.title}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Buttons */}
        <div className="p-5">
        

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="
              flex
              w-full
              cursor-pointer
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-red-500/20
              bg-red-500/10
              py-3
              text-red-400
              transition-all
              hover:bg-red-500/20
              hover:text-red-300
            "
          >
            <LogOut size={18} />
            <span>Logout</span>
          </motion.button>
        </div>
      </div>
    </motion.aside>
  );
}