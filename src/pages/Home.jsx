import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition.jsx";
import StickerTag from "../components/StickerTag.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import ProfileImage from "../components/ProfileImage.jsx";
import HeroStarfield from "../components/HeroStarfield.jsx";
import TechUniverse from "../components/TechUniverse.jsx";
import TechStack from "../components/TechStack.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import ServicesPreview from "../components/ServicesPreview.jsx";
import { projects } from "../data/projects.js";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

export default function Home() {
  const { setVariant } = useCursorVariant();
  const featuredProjects = projects.filter((p) => p.slug !== "hardware").slice(0, 4);

  return (
    <PageTransition>
      {/* HERO — asymmetric, image offset and overlapping the type */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-24 pt-6 sm:px-10">
        <HeroStarfield />
        <div className="relative grid items-center gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:gap-6">
          <div className="order-2 sm:order-1">
            <StickerTag color="cyan" rotate={-6} className="mb-6">
              Ideas to impact
            </StickerTag>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setVariant("hero")}
              onMouseLeave={() => setVariant("default")}
              className="font-display text-[15vw] font-bold uppercase leading-[0.85] tracking-tight text-content sm:text-[5.5vw]"
            >
              Prince
              <br />
              Timilsina
            </motion.h1>

            <p className="mt-6 font-display text-2xl font-bold text-content/90 sm:text-3xl">
              Build. Experiment. Scale.
            </p>
            <p className="mt-3 max-w-md font-body text-base text-content/60">
              Curious builder exploring web, AI, and ideas.
            </p>
            <p className="mt-1 max-w-md font-mono text-xs text-content/40">
              CS student · learning by building, breaking, and rebuilding
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/projects"
                onMouseEnter={() => setVariant("view")}
                onMouseLeave={() => setVariant("default")}
                className="rounded-full bg-neon px-6 py-3 font-display text-sm font-bold text-ink transition-transform hover:scale-105"
              >
                See what I've built →
              </Link>
              <Link
                to="/contact"
                onMouseEnter={() => setVariant("view")}
                onMouseLeave={() => setVariant("default")}
                className="rounded-full border border-content/20 px-6 py-3 font-display text-sm font-bold transition-colors hover:border-content/50"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center sm:order-2 sm:justify-end">
            <ProfileImage size={300} />
          </div>
        </div>
      </section>

      {/* TECH UNIVERSE */}
      <section className="mx-auto max-w-6xl px-6 py-8 pb-32 sm:px-10 sm:py-12 sm:pb-36">
        <Reveal className="mb-6 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Tools I'm growing with
          </h2>
          <p className="mx-auto mt-2 max-w-md font-body text-sm text-content/50">
            Hover or tap anything orbiting — still adding to this list.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <TechUniverse />
        </Reveal>
      </section>

      <ExperienceSection />

      {/* KEY PROJECTS */}
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <StickerTag color="pink" rotate={-3} className="mb-4">
              Featured Work
            </StickerTag>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Key Projects
            </h2>
          </div>
          <Link
            to="/projects"
            onMouseEnter={() => setVariant("view")}
            onMouseLeave={() => setVariant("default")}
            className="hidden font-mono text-xs uppercase tracking-wide text-content/50 hover:text-content sm:block"
          >
            View all →
          </Link>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <TechStack />
      <ServicesPreview />
    </PageTransition>
  );
}
