import { motion } from "framer-motion";

export default function Navbar(){

return(

<motion.nav

initial={{y:-80}}

animate={{y:0}}

transition={{duration:.8}}

className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1550px] glass rounded-full px-8 py-2 flex items-center justify-between">

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

<button className="px-6 py-2 rounded-full border border-white/20">

Login

</button>

<button className="px-7 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 transition">

Get Started

</button>

</div>

</motion.nav>

)

}