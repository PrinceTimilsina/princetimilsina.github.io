import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

const HEX = { neon: "#c8ff3d", cyan: "#4df0ff", pink: "#ff4fd8" };

const RING = {
  neon: "hover:border-neon/50",
  cyan: "hover:border-cyan/50",
  pink: "hover:border-pink/50",
};

const GLOW = {
  neon: "0 30px 60px -28px rgba(200,255,61,0.35)",
  cyan: "0 30px 60px -28px rgba(77,240,255,0.35)",
  pink: "0 30px 60px -28px rgba(255,79,216,0.35)",
};

// A small abstract composition of overlapping shapes, tinted per service —
// the illustration-block idea from the reference, redone for a dark card.
function Illustration({ color, Icon }) {
  const hex = HEX[color];
  return (
    <div
      className="relative flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-content/10"
      style={{ background: `linear-gradient(155deg, ${hex}22, transparent 65%)` }}
    >
      <span
        className="absolute -left-6 -top-8 h-24 w-24 rounded-full opacity-30 blur-2xl"
        style={{ backgroundColor: hex }}
      />
      <span
        className="absolute -bottom-10 -right-4 h-28 w-28 rounded-full opacity-20 blur-2xl"
        style={{ backgroundColor: hex }}
      />
      <span
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-content/15 bg-surface/80 backdrop-blur-sm"
        style={{ color: hex }}
      >
        <Icon size={24} />
      </span>
    </div>
  );
}

export default function ServiceCard({ service, index = 0 }) {
  const { setVariant } = useCursorVariant();
  const Icon = service.icon;

  return (
    <Reveal delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -6, scale: 1.015, boxShadow: GLOW[service.color] }}
        transition={{ type: "spring", damping: 22, stiffness: 260 }}
        onMouseEnter={() => setVariant("view")}
        onMouseLeave={() => setVariant("default")}
        className={`flex h-full flex-col rounded-3xl border border-content/10 bg-content/[0.04] p-4 backdrop-blur-md transition-colors duration-300 ${RING[service.color]}`}
      >
        <Illustration color={service.color} Icon={Icon} />

        <div className="mt-5 flex flex-1 flex-col px-1">
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: HEX[service.color] }}
          >
            Service #{index + 1}
          </span>
          <h3 className="mt-1 font-display text-2xl font-bold leading-tight">
            {service.title}
          </h3>
          <p className="mt-2 font-body text-sm text-content/60">{service.blurb}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {service.points.map((p) => (
              <span
                key={p}
                className="rounded-full border border-content/10 bg-content/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-content/60"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <Link
              to="/contact"
              onMouseEnter={() => setVariant("view")}
              onMouseLeave={() => setVariant("default")}
              className="block w-full rounded-full bg-content px-5 py-3 text-center font-display text-xs font-bold uppercase tracking-wide text-surface transition-transform hover:scale-[1.02]"
            >
              {service.cta}
            </Link>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
