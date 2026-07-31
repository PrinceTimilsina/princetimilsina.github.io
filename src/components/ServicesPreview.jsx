import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import StickerTag from "./StickerTag.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { services } from "../data/services.js";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

export default function ServicesPreview() {
  const { setVariant } = useCursorVariant();
  const preview = services.slice(0, 2);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 sm:px-10">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <StickerTag color="cyan" rotate={-3}>
              4+ Years of Experience
            </StickerTag>
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Work with me
          </h2>
          <p className="mt-3 max-w-md font-body text-sm text-content/50">
            Building, researching, teaching — a couple of ways to start.
          </p>
        </div>
        <Link
          to="/services"
          onMouseEnter={() => setVariant("view")}
          onMouseLeave={() => setVariant("default")}
          className="hidden font-mono text-xs uppercase tracking-wide text-content/50 hover:text-content sm:block"
        >
          All services →
        </Link>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {preview.map((s, i) => (
          <ServiceCard key={s.slug} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}
