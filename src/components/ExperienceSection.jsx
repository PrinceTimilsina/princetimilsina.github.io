import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import StickerTag from "./StickerTag.jsx";
import { experiences, techExhibitions, longRunning } from "../data/experience.js";

function Card({ children, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <motion.div
        whileHover={{ y: -3 }}
        className="h-full rounded-2xl border border-content/10 bg-surface p-6 transition-colors duration-300 hover:border-content/25"
      >
        {children}
      </motion.div>
    </Reveal>
  );
}

export default function ExperienceSection() {
  return (
    <section className="border-y border-content/10 bg-content/[0.03] py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="mb-10">
          <StickerTag color="pink" rotate={-3} className="mb-4">
            4+ Years of Experience
          </StickerTag>
          <span className="block font-mono text-xs uppercase tracking-wide text-content/40">
            Where the work happened
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Experience
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {experiences.map((e, i) => (
            <Card key={e.org} delay={i * 0.05}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-bold">{e.org}</h3>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-content/40">
                    {e.role}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-content/40">{e.year}</span>
              </div>
              <p className="mt-3 font-body text-sm leading-relaxed text-content/70">
                {e.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-content/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-content/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          ))}

          {/* Tech Exhibitions — grouped */}
          <Card delay={experiences.length * 0.05}>
            <h3 className="font-display text-lg font-bold">{techExhibitions.org}</h3>
            <ul className="mt-3 space-y-2">
              {techExhibitions.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-content/10 px-3 py-2"
                >
                  <span className="font-body text-sm text-content/80">{item.name}</span>
                  {item.note && (
                    <span className="font-mono text-[10px] uppercase tracking-wide text-content/40">
                      {item.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Card>

          {/* Website Development & Research — long-running */}
          <Card delay={(experiences.length + 1) * 0.05}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-bold">{longRunning.org}</h3>
              <span className="shrink-0 font-mono text-xs text-content/40">
                {longRunning.year}
              </span>
            </div>
            <p className="mt-3 font-body text-sm leading-relaxed text-content/70">
              {longRunning.description}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
