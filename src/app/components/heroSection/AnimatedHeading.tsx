"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 12,
      mass: 0.7,
    },
  },
};

export default function HeroTitle() {
  const title = "Together we ship alone";
  const subtitle =
    "Organize your feedback. Understand your customers. Close the loop.";

  return (
    <div className="p-2">
      <motion.h1
        className="text-[40px] md:text-[52px] font-bold max-w-3xl leading-tight tracking-tight  text-gray-900"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letter}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="text-lg md:text-[15px] mt-4 text-gray-500 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: title.length * 0.03 + 0.3,
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
