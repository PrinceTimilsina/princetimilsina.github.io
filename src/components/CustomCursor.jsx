import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursorVariant } from "../hooks/useCursorVariant.js";

// The magnifier cursor: a single neon circle rendered with
// mixBlendMode "difference" so it always inverts whatever sits beneath
// it — text, buttons, cards alike — instead of painting a flat opaque
// fill on top. That's what makes it read as a magnifier rather than a
// plain colored blob, on every surface, consistently.
const VARIANTS = {
  default: { size: 22, label: "" },
  hero: { size: 46, label: "" },
  view: { size: 84, label: "VIEW" },
  drag: { size: 84, label: "OPEN" },
  nav: { size: 30, label: "" },
};

export default function CustomCursor() {
  const { variant } = useCursorVariant();
  const cfg = VARIANTS[variant] || VARIANTS.default;
  const [isTouch, setIsTouch] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 400, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(isCoarse);
    if (isCoarse) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] flex items-center justify-center rounded-full"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        width: cfg.size,
        height: cfg.size,
        backgroundColor: "#c8ff3d",
        mixBlendMode: "difference",
      }}
      animate={{ width: cfg.size, height: cfg.size }}
      transition={{ type: "spring", damping: 26, stiffness: 300 }}
    >
      {cfg.label && (
        <span className="font-display text-[11px] font-semibold tracking-widest text-ink">
          {cfg.label}
        </span>
      )}
    </motion.div>
  );
}
