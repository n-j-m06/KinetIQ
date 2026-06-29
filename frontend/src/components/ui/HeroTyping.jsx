import { useEffect, useState } from "react";

const lines = [
  "AI-POWERED",
  "DRIVER",
  "INTELLIGENCE",
  "FOR A SAFER",
  "TOMORROW",
];

export default function HeroTyping() {
  const [display, setDisplay] = useState(["", "", "", "", ""]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    async function animate() {
      while (!cancelled) {
        // Reset
        setDisplay(["", "", "", "", ""]);
        setVisible(true);

        // Type each line
        for (let i = 0; i < lines.length; i++) {
          for (let j = 1; j <= lines[i].length; j++) {
            if (cancelled) return;

            setDisplay((prev) => {
              const next = [...prev];
              next[i] = lines[i].slice(0, j);
              return next;
            });

            await sleep(45);
          }

          await sleep(180);
        }

        // Hold
        await sleep(2500);

        // Fade out
        setVisible(false);

        await sleep(600);
      }
    }

    animate();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
  className={`
    min-h-[310px]
    transition-opacity
    duration-300
    ${visible ? "opacity-100" : "opacity-0"}
  `}
>
      {display.map((line, index) => (
       <h1
  key={index}
  className={`
  hero-title
  h-[1.15em]
  flex
  items-center

  font-black
  leading-[1.08]
  tracking-[-1px]

  text-[38px]
  md:text-[44px]
  lg:text-[50px]
  xl:text-[56px]
  2xl:text-[60px]

  ${
    index === 3
      ? "bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent"
      : "text-white"
  }
  `}

           
        >
          {line}
        </h1>
      ))}
    </div>
  );
}