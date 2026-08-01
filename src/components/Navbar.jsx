import React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import useTheme from "../hooks/useTheme.js";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/achievements", label: "Achievements" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function ThemeToggle({ theme, toggleTheme, onEnter, onLeave }) {
  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      aria-label="Toggle color theme"
      className="relative flex h-7 w-12 shrink-0 items-center rounded-full border border-content/20 px-0.5"
    >
      <motion.span
        layout
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="flex h-5 w-5 items-center justify-center rounded-full bg-content text-[10px]"
        style={{ marginLeft: theme === "dark" ? 0 : "auto" }}
      >
        {theme === "dark" ? "🌙" : "☀"}
      </motion.span>
    </button>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { setVariant } = useCursorVariant();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const hoverIn = () => setVariant("nav");
  const hoverOut = () => setVariant("default");

  const goHome = (e) => {
    // clicking Home while already on "/" won't trigger a route change,
    // so ScrollToTop never fires — force it here instead.
    if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8 sm:pt-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-content/10 bg-surface/70 px-4 py-2.5 backdrop-blur-md">
        <ul className="hidden gap-1 sm:flex">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                onClick={l.to === "/" ? goHome : undefined}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
                className={({ isActive }) =>
                  `group relative rounded-full px-4 py-2 font-body text-sm transition-colors ${
                    isActive ? "text-ink" : "text-content/70 hover:text-content"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-neon"
                        transition={{ type: "spring", damping: 22, stiffness: 260 }}
                      />
                    )}
                    {l.label}
                    {!isActive && (
                      <span className="pointer-events-none absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* mobile: hamburger toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-content/20 sm:hidden"
        >
          {open ? <FiX size={16} /> : <FiMenu size={16} />}
        </button>

        <ThemeToggle
          theme={theme}
          toggleTheme={toggleTheme}
          onEnter={hoverIn}
          onLeave={hoverOut}
        />
      </nav>

      {/* mobile: dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-content/10 bg-surface/95 backdrop-blur-md sm:hidden"
          >
            <ul className="flex flex-col p-2">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={l.to === "/" ? goHome : () => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 font-body text-sm ${
                        isActive ? "bg-neon text-ink" : "text-content/70"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
