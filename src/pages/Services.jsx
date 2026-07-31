import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import StickerTag from "../components/StickerTag.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ComparisonSection from "../components/ComparisonSection.jsx";
import SkillMarquee from "../components/SkillMarquee.jsx";
import { services } from "../data/services.js";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

export default function Services() {
  const { setVariant } = useCursorVariant();

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-6 sm:px-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <StickerTag color="neon" rotate={-4}>
              Work with me
            </StickerTag>
            <StickerTag color="cyan" rotate={3}>
              4+ Years of Experience
            </StickerTag>
          </div>
          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.9] sm:text-8xl">
            Services.
          </h1>
          <p className="mt-6 max-w-lg font-body text-base text-content/60">
            A few ways I can help — building, researching, or teaching.
            Straightforward work, no corporate wrapper around it.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16 flex flex-wrap items-center gap-4 border-t border-content/10 pt-10">
          <Link
            to="/contact"
            onMouseEnter={() => setVariant("view")}
            onMouseLeave={() => setVariant("default")}
            className="rounded-full bg-neon px-6 py-3 font-display text-sm font-bold text-ink transition-transform hover:scale-105"
          >
            Book a call
          </Link>
          <Link
            to="/contact"
            onMouseEnter={() => setVariant("view")}
            onMouseLeave={() => setVariant("default")}
            className="rounded-full border border-content/20 px-6 py-3 font-display text-sm font-bold transition-colors hover:border-content/50"
          >
            Let's talk
          </Link>
        </Reveal>

        <SkillMarquee />
      </section>

      <ComparisonSection />
    </PageTransition>
  );
}
