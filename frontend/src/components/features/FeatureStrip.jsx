import {
  Activity,
  Fingerprint,
  ShieldCheck,
  BarChart3,
  BellRing,
} from "lucide-react";

const features = [
  {
    title: "Real-Time Monitoring",
    desc: "Continuous AI monitoring.",
    icon: Activity,
  },
  {
    title: "Behaviour Fingerprinting",
    desc: "Adaptive driver DNA.",
    icon: Fingerprint,
  },
  {
    title: "Predictive Safety",
    desc: "Early risk prediction.",
    icon: ShieldCheck,
  },
  {
    title: "Analytics",
    desc: "Insightful reports.",
    icon: BarChart3,
  },
  {
    title: "Instant Alerts",
    desc: "Real-time notifications.",
    icon: BellRing,
  },
];

export default function FeatureStrip() {
  return (
    <section className="relative z-20 mt-10 pb-16">

      <div className="mx-auto max-w-[1450px] px-10">

        {/* Divider */}
        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="grid grid-cols-5 gap-5 xl:gap-6">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  glass
                  h-[88px]
                  rounded-xl
                  border
                  border-white/5

                  px-4
                  py-3

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:shadow-[0_0_20px_rgba(34,211,238,.15)]

                  cursor-pointer
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      mt-0.5
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-md
                      bg-cyan-500/10
                      text-cyan-400
                      flex-shrink-0
                    "
                  >
                    <Icon size={13} strokeWidth={2} />
                  </div>

                  <div>

                    <h3 className="text-[15px] font-semibold leading-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-5 text-slate-500">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}