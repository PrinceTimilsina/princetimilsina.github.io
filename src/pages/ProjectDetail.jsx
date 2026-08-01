import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import StickerTag from "../components/StickerTag.jsx";
import Reveal from "../components/Reveal.jsx";
import { getProjectBySlug, projects } from "../data/projects.js";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { setVariant } = useCursorVariant();

  if (!project) return <Navigate to="/projects" replace />;

  const next =
    projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];

  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-6 pb-32 pt-6 sm:px-10">
        <Link
          to="/projects"
          onMouseEnter={() => setVariant("view")}
          onMouseLeave={() => setVariant("default")}
          className="font-mono text-xs uppercase tracking-wide text-content/50 hover:text-content"
        >
          ← All projects
        </Link>

        <Reveal className="mt-6 flex flex-wrap items-center gap-2">
          {project.tags.map((t) => (
            <StickerTag key={t} color={project.color} rotate={-3}>
              {t}
            </StickerTag>
          ))}
          {project.year && (
            <span className="font-mono text-xs text-content/40">{project.year}</span>
          )}
        </Reveal>

        <Reveal delay={0.05}>
          {project.title ? (
            <>
              <h1 className="mt-6 font-display text-6xl font-bold leading-[0.9] sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-2 font-mono text-sm uppercase tracking-wide text-content/40">
                {project.name}
              </p>
            </>
          ) : (
            <h1 className="mt-6 font-display text-6xl font-bold leading-[0.9] sm:text-7xl">
              {project.name}
            </h1>
          )}
          <p className="mt-4 max-w-xl font-body text-lg text-content/70">
            {project.tagline}
          </p>

          {(project.github || project.live) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setVariant("view")}
                  onMouseLeave={() => setVariant("default")}
                  className="flex items-center gap-2 rounded-full border border-content/20 px-4 py-2 font-mono text-xs uppercase tracking-wide text-content/70 transition-colors hover:border-content/50 hover:text-content"
                >
                  GitHub repo
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setVariant("view")}
                  onMouseLeave={() => setVariant("default")}
                  className="flex items-center gap-2 rounded-full bg-neon px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink transition-transform hover:scale-105"
                >
                  View project
                </a>
              )}
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <h2 className="font-display text-sm uppercase tracking-wide text-content/40">
              Overview
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-content/80">
              {project.description}
            </p>
          </div>
          <div>
            <h2 className="font-display text-sm uppercase tracking-wide text-content/40">
              Role
            </h2>
            <p className="mt-3 font-body text-base text-content/80">{project.role}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <h2 className="font-display text-sm uppercase tracking-wide text-content/40">
            Highlights
          </h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 rounded-2xl border border-content/10 bg-content/[0.03] p-4 font-body text-sm text-content/80"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-16 border-t border-content/10 pt-8">
          <Link
            to={`/projects/${next.slug}`}
            onMouseEnter={() => setVariant("view")}
            onMouseLeave={() => setVariant("default")}
            className="group flex items-center justify-between"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-wide text-content/40">
                Next project
              </span>
              <h3 className="font-display text-3xl font-bold transition-transform group-hover:translate-x-2">
                {next.title || next.name}
              </h3>
            </div>
            <span className="font-display text-3xl">→</span>
          </Link>
        </Reveal>
      </section>
    </PageTransition>
  );
}
