import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHRASES = [
  "Compiling ideas...",
  "Learning in progress...",
  "Building something...",
  "Debugging a few thoughts...",
];

const PANELS = [0, 1, 2];

export default function Loader() {
  const [done, setDone] = useState(false);
  const [phrase] = useState(() => PHRASES[Math.floor(Math.random() * PHRASES.length)]);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1150);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <div className="fixed inset-0 z-[80] flex">
          {PANELS.map((p) => (
            <motion.div
              key={p}
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.7,
                delay: 0.6 + p * 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="relative flex-1 bg-surface"
            >
              {p === 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-xs tracking-wide text-content/50"
                >
                  {phrase}
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
