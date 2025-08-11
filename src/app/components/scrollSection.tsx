"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollSection() {
  const text = `You don’t need more feedback.
You need a feedback loop.
Because without the loop, feedback is noise.
With it, it becomes alignment, clarity, and trust.`;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0..1

  const scrollRange = 1200;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const p = Math.min(Math.max(-rect.top / scrollRange, 0), 1);
      setProgress(p);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollRange]);

  const minOpacity = 0.08;
  const characters = text.split("");

  const maxDelay = 0.95;
  const delayStep = maxDelay / characters.length;

  return (
    <div ref={containerRef} className="h-[400vh] bg-white">
      <div className="h-screen sticky top-0 flex items-center justify-start px-24">
        <div className="text-[44px] font-bold whitespace-pre-wrap leading-tight max-w-5xl">
          {characters.map((char, i) => {
            if (char === "\n") {
              return <br key={i} />;
            }

            const delay = i * delayStep;
            const localProgress = Math.min(
              Math.max((progress - delay) / (1 - maxDelay), 0),
              1
            );
            const opacity = minOpacity + localProgress * (1 - minOpacity);

            return (
              <motion.span
                key={i}
                style={{
                  color: "#000",
                  opacity,
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
