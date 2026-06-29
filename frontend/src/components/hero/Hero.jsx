import Navbar from "../layout/Navbar";
import HeroContent from "./HeroContent";
import DashboardCard from "./DashboardCard";

import heroBg from "../../assets/images/hero-bg.webp";

export default function Hero() {
  return (
    <section
  className="relative min-h-screen overflow-hidden bg-cover"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: "center bottom",
  }}
>
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-[#020617]/30"></div>

      {/* Blue cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/55 via-transparent to-[#020817]/40"></div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 h-56 w-full bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent"></div>

      <Navbar />

      <div className="relative z-20 mx-auto max-w-[1450px] px-10 pt-44">

        <div className="grid grid-cols-12 gap-12 items-start">

          <div className="col-span-12 lg:col-span-7">
            <HeroContent />
          </div>

         <div className="hidden lg:flex lg:col-span-5 justify-end pt-0">
            <DashboardCard />
        </div>

        </div>

      </div>
    <div
className="
absolute
bottom-[18%]
left-1/2
-translate-x-1/2
w-[320px]
h-16
rounded-full
bg-red-500/15
blur-[55px]
animate-pulse
"
/>
    </section>
  );
}