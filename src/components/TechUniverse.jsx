import { useState } from "react";
import { motion } from "framer-motion";
import { orbitRings } from "../data/skills.js";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

export default function TechUniverse() {
  const [active, setActive] = useState(null);
  const { setVariant } = useCursorVariant();

  return (
    <div className="relative mx-auto flex h-[380px] w-full max-w-lg items-center justify-center overflow-hidden sm:h-[500px] sm:overflow-visible">
      {/* static rings — pure structure, no glow */}
      {orbitRings.map((ring) => (
        <div
          key={ring.radius}
          className="absolute rounded-full border border-content/[0.08]"
          style={{ width: ring.radius * 2, height: ring.radius * 2 }}
        />
      ))}

      {/* center */}
      <div className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-content/20 bg-surface text-center sm:h-24 sm:w-24">
        <span className="font-display text-[11px] font-bold uppercase tracking-wide">
          Tech
        </span>
        <span className="font-display text-[11px] font-bold uppercase tracking-wide">
          Stack
        </span>
      </div>

      {orbitRings.map((ring) => (
        <motion.div
          key={ring.radius}
          className="absolute left-1/2 top-1/2"
          style={{ width: 0, height: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
        >
          {ring.items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="absolute left-0 top-0"
                style={{
                  transform: `rotate(${item.angle}deg) translate(${ring.radius}px) rotate(${-item.angle}deg) translate(-50%, -50%)`,
                }}
              >
                <motion.button
                  type="button"
                  animate={{ rotate: -360 }}
                  transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                  onMouseEnter={() => {
                    setActive(item.label);
                    setVariant("nav");
                  }}
                  onMouseLeave={() => {
                    setActive(null);
                    setVariant("default");
                  }}
                  onFocus={() => setActive(item.label)}
                  onBlur={() => setActive(null)}
                >
                  <motion.span
                    whileHover={{ scale: 1.15 }}
                    className="relative flex h-12 w-12 items-center justify-center rounded-full border border-content/15 bg-surface shadow-sm transition-colors hover:border-content/40 sm:h-14 sm:w-14"
                    style={{ color: item.hex || "rgb(var(--content) / 0.8)" }}
                  >
                    <Icon size={23} />
                  </motion.span>

                  {active === item.label && (
                    <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-36 -translate-x-1/2">
                      <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="block rounded-lg border border-content/10 bg-surface px-2.5 py-2 text-center font-body text-[10.5px] leading-snug text-content/70 shadow-lg"
                      >
                        <span className="mb-0.5 block font-semibold text-content">
                          {item.label}
                        </span>
                        {item.note}
                      </motion.span>
                    </div>
                  )}
                </motion.button>
              </div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
}
