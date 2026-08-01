import React from "react";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import PageTransition from "../components/PageTransition.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import StickerTag from "../components/StickerTag.jsx";
import { projects } from "../data/projects.js";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

const FILTERS = ["All", "AI", "Web", "Hardware", "Product"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const { setVariant } = useCursorVariant();
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 pb-32 pt-6 sm:px-10">
        <Reveal>
          <StickerTag color="pink" rotate={-3} className="mb-6">
            Built, not just talked about
          </StickerTag>
          <h1 className="font-display text-6xl font-bold leading-[0.9] sm:text-8xl">
            Projects.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-content/70">
            Each project here represents more than just code — it's a
            reflection of how I think, experiment, and solve problems. I
            focus on building clean, purposeful experiences by combining
            design, logic, and curiosity. Whether it's crafting intuitive
            interfaces or exploring new tech ideas, I approach every project
            with a mindset of learning, iteration, and impact. I'm not just
            showcasing what I've built — I'm showing how I build, and how
            I'm evolving with every step.
          </p>

          <a
            href="https://github.com/princetimilsina"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setVariant("view")}
            onMouseLeave={() => setVariant("default")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-neon px-5 py-3 font-display text-sm font-bold text-ink transition-transform hover:scale-105"
          >
            <FiGithub size={16} />
            Check my Code Garage
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                filter === f
                  ? "border-neon bg-neon text-ink"
                  : "border-content/15 text-content/60 hover:border-content/40"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {shown.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              className={
                i === shown.length - 1 && shown.length % 2 !== 0
                  ? "sm:col-span-2 sm:mx-auto sm:max-w-[calc(50%-0.625rem)]"
                  : ""
              }
            />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
