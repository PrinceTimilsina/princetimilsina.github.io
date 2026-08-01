import React from "react";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import StickerTag from "../components/StickerTag.jsx";
import AchievementMarquee from "../components/AchievementMarquee.jsx";
import { mainAchievements, otherAchievements } from "../data/achievements.js";

const COLORS = ["neon", "cyan", "pink", "orange"];

export default function Achievements() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-6 sm:px-10">
        <Reveal>
          <StickerTag color="orange" rotate={4} className="mb-6">
            Track record
          </StickerTag>
          <h1 className="font-display text-6xl font-bold leading-[0.9] sm:text-8xl">
            Achievements.
          </h1>
        </Reveal>

        {/* alternating timeline */}
        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-content/15 sm:left-1/2" />
          <div className="space-y-16">
            {mainAchievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div
                  className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                    i % 2 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-4 h-3 w-3 -translate-x-1/2 rounded-full bg-neon sm:left-1/2" />
                  <div className="hidden sm:block sm:w-1/2" />
                  <div
                    className={`pl-10 sm:w-1/2 sm:pl-0 ${
                      i % 2 ? "sm:pl-12 sm:text-left" : "sm:pr-12 sm:text-right"
                    }`}
                  >
                    <span className="font-mono text-xs text-content/40">{a.year}</span>
                    <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                      {a.title}
                    </h3>
                    {a.detail && (
                      <p className="mt-1 font-body text-sm text-content/60">{a.detail}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* other honors — sticker grid */}
        <Reveal className="mt-20">
          <h2 className="font-display text-2xl font-bold text-content/80">
            More on record
          </h2>
          <div className="mt-6 flex flex-wrap gap-4">
            {otherAchievements.map((a, i) => (
              <StickerTag
                key={a.title}
                color={COLORS[i % COLORS.length]}
                rotate={(i % 2 ? 1 : -1) * (3 + i)}
                className="px-4 py-3 text-sm normal-case"
              >
                {a.title}
                {a.detail ? ` — ${a.detail}` : ""}
              </StickerTag>
            ))}
          </div>
        </Reveal>
      </section>

      <AchievementMarquee />
    </PageTransition>
  );
}
