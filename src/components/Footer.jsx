import React from "react";
import { useLocation } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/princetimilsina", icon: FiGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/princetimilsina", icon: FiLinkedin },
  { label: "Email", href: "mailto:hello@princetimilsina.dev", icon: FiMail },
];

function BackToTop({ onEnter, onLeave }) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      aria-label="Back to top"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-content/15 text-content/60 transition-colors hover:border-content/40 hover:text-content"
    >
      <FiArrowUp size={15} />
    </button>
  );
}

export default function Footer() {
  const { setVariant } = useCursorVariant();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const hoverIn = () => setVariant("nav");
  const hoverOut = () => setVariant("default");

  if (!isHome) {
    return (
      <footer className="border-t border-content/10 px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="font-mono text-xs text-content/50">
            © {new Date().getFullYear()} Prince Timilsina. Built &amp; iterated by hand.
          </p>
          <BackToTop onEnter={hoverIn} onLeave={hoverOut} />
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-content/10">
      <div className="border-y border-content/10 bg-content/[0.03] px-6 py-16 text-center sm:px-10">
        <p className="mx-auto max-w-3xl font-display text-2xl leading-snug sm:text-3xl">
          I build, I experiment, and I keep pushing forward. Every project
          is a step toward better thinking, better design, and stronger
          execution — no shortcuts, just real progress.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-content/50">
            © {new Date().getFullYear()} Prince Timilsina. Built &amp; iterated by hand.
          </p>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-content/15 text-content/60 transition-colors hover:border-content/40 hover:text-content"
              >
                <Icon size={15} />
              </a>
            ))}
            <BackToTop onEnter={hoverIn} onLeave={hoverOut} />
          </div>
        </div>
      </div>
    </footer>
  );
}
