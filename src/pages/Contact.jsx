import React from "react";
import { useState } from "react";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import StickerTag from "../components/StickerTag.jsx";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

const LINKS = [
  { label: "Email",
     value: "timilsinaprince.js@gmail.com", 
    href: "mailto:timilsinaprince.js@gmail.com" 
  },

  { label: "GitHub", 
    value: "github.com/princetimilsina",
     href: "https://github.com/princetimilsina"
   },
  { label: "LinkedIn", value: "linkedin.com/in/princetimilsina", href: "https://linkedin.com/in/princetimilsina" },
];

export default function Contact() {
  const { setVariant } = useCursorVariant();
  const [focused, setFocused] = useState(null);

  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-6 pb-32 pt-6 sm:px-10">
        <Reveal>
          <StickerTag color="pink" rotate={-4} className="mb-6">
            Say hello
          </StickerTag>
          <h1 className="font-display text-6xl font-bold leading-[0.9] sm:text-8xl">
            Let's talk.
          </h1>
          <p className="mt-6 max-w-md font-body text-base text-content/60">
            Open to internships, collaborations, and anything that starts
            with "what if we built..."
          </p>
        </Reveal>

        <div className="mt-16 space-y-1">
          {LINKS.map((l) => (
            <Reveal key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                onMouseEnter={() => setVariant("view")}
                onMouseLeave={() => setVariant("default")}
                onFocus={() => setFocused(l.label)}
                onBlur={() => setFocused(null)}
                className="group flex items-center justify-between border-b border-content/10 py-6 transition-colors hover:border-content/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon"
              >
                <span className="font-mono text-xs uppercase tracking-wide text-content/40">
                  {l.label}
                </span>
                <span
                  className={`font-display text-2xl font-bold transition-transform duration-300 sm:text-4xl ${
                    focused === l.label ? "translate-x-2" : "group-hover:translate-x-2"
                  }`}
                >
                  {l.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <p className="font-mono text-xs text-content/40">
            Usually replies within a couple of days. Based in Kathmandu,
            working with people everywhere.
          </p>
        </Reveal>
      </section>
    </PageTransition>
  );
}
