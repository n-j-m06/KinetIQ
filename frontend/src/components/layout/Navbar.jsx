import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Navbar(){
const navigate = useNavigate();
return(

<motion.nav

initial={{y:-80}}

animate={{y:0}}

transition={{duration:.8}}

className="
fixed
top-3
md:top-6
left-1/2
-translate-x-1/2
z-50
w-[95%]
max-w-[1550px]
glass
rounded-full
px-4
md:px-8
py-2
flex
items-center
justify-between
">

<div className="flex items-center gap-3">

<div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center font-bold">

K

</div>

<h1 className="text-lg tracking-widest font-bold">

KINETIQ

</h1>

</div>

<div className="hidden lg:flex gap-10 text-gray-300">

<a href="#">Features</a>

<a href="#">Technology</a>

<a href="#">How it Works</a>

<a href="#">Security</a>

<a href="#">About</a>

</div>

<div className="flex gap-4">

<button onClick={() => navigate("/login")} className="px-3 md:px-6 py-2 text-sm md:text-base rounded-full border border-white/20">

Login

</button>

<button onClick={() => navigate("/signup")} className="px-4 md:px-7 py-2 text-sm md:text-base rounded-full bg-cyan-500 hover:bg-cyan-400 transition">

Get Started

</button>

</div>

</motion.nav>

)

}