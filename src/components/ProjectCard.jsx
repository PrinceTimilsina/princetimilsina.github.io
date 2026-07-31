import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

const RING = {
  neon: "hover:border-neon/70",
  cyan: "hover:border-cyan/70",
  pink: "hover:border-pink/70",
  orange: "hover:border-orange/70",
};

export default function ProjectCard({ project, index, className = "" }) {
  const { setVariant } = useCursorVariant();
  const hoverIn = () => setVariant("view");
  const hoverOut = () => setVariant("default");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-3xl border border-content/10 bg-content/5 p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${RING[project.color]} ${className}`}
    >
      <Link
        to={`/projects/${project.slug}`}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
        className="block"
      >
        <div className="mb-8 flex items-start justify-between">
          {project.year ? (
            <span className="font-mono text-xs text-content/40">{project.year}</span>
          ) : (
            <span />
          )}
          <div className="flex flex-wrap justify-end gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-content/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-content/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.title ? (
          <>
            <h3 className="font-display text-3xl font-bold leading-none transition-transform duration-300 group-hover:-translate-y-1 sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-content/40">
              {project.name}
            </p>
          </>
        ) : (
          <h3 className="font-display text-3xl font-bold leading-none transition-transform duration-300 group-hover:-translate-y-1 sm:text-4xl">
            {project.name}
          </h3>
        )}

        <p className="mt-3 max-w-sm font-body text-sm text-content/60">
          {project.tagline}
        </p>
      </Link>

      <div className="mt-8 flex items-center gap-3">
        <Link
          to={`/projects/${project.slug}`}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-content/50 transition-colors hover:text-content"
        >
          <span>View project</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.name} on GitHub`}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-content/15 text-content/60 transition-colors hover:border-content/40 hover:text-content"
          >
            <FiGithub size={13} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.name} live`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-content/15 text-content/60 transition-colors hover:border-content/40 hover:text-content"
          >
            <FiArrowUpRight size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
