"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Ribbion() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.svg
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <motion.path
            d="M 0 200 Q 300 50, 600 200 T 1200 200"
            stroke="#C084FC"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              pathLength: { duration: 3, ease: "easeInOut" },
              opacity: { duration: 0.8, ease: "easeOut", delay: 2 },
            }}
          />
        </motion.svg>
      )}
    </AnimatePresence>
  );
}
