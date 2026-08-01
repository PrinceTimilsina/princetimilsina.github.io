import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { techStack } from "../data/skills.js";

const ACCENT = ["neon", "cyan", "pink", "orange"];
const DOT = { neon: "bg-neon", cyan: "bg-cyan", pink: "bg-pink", orange: "bg-orange" };

export default function TechStack() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 sm:px-10">
      <Reveal className="mb-10">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          What I build with
        </h2>
        <p className="mt-3 max-w-md font-body text-sm text-content/50">
          Not a mastery list — this is what's currently in rotation while I
          learn.
        </p>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-4">
        {techStack.map((group, i) => {
          const accent = ACCENT[i % ACCENT.length];
          const isOpen = openIndex === i;
          return (
            <Reveal key={group.category} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className={`w-full rounded-2xl border p-5 text-left transition-colors ${
                  isOpen ? "border-content/25" : "border-content/10 hover:border-content/20"
                }`}
              >
                <div className="mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-content/60">
                    <span className={`h-1.5 w-1.5 rounded-full ${DOT[accent]}`} />
                    {group.category}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="font-display text-content/40"
                  >
                    +
                  </motion.span>
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 flex flex-wrap gap-1.5 pb-1">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-content/10 bg-content/5 px-2.5 py-1 font-body text-[11px] text-content/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
