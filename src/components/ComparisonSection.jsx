import React from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import Reveal from "./Reveal.jsx";
import StickerTag from "./StickerTag.jsx";
import { comparison } from "../data/comparison.js";

export default function ComparisonSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <Reveal className="text-center">
        <StickerTag color="orange" rotate={-3} className="mb-6">
          Comparison
        </StickerTag>
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
          What Working With Me Actually Looks Like
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-14 grid gap-4 rounded-3xl border border-content/10 p-3 sm:grid-cols-2 sm:gap-0 sm:p-4">
        <div className="rounded-2xl border border-neon/40 p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold">{comparison.mine.label}</h3>
          <ul className="mt-5 space-y-4">
            {comparison.mine.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <FiCheckCircle className="mt-0.5 shrink-0 text-neon" size={18} />
                <span className="font-body text-sm leading-relaxed text-content/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold text-content/60">
            {comparison.others.label}
          </h3>
          <ul className="mt-5 space-y-4">
            {comparison.others.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <FiXCircle className="mt-0.5 shrink-0 text-content/30" size={18} />
                <span className="font-body text-sm leading-relaxed text-content/50">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
