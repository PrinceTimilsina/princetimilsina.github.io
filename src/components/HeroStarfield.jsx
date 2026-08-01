import React from "react";
import { useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * A small, genuinely randomized starfield — confined to the hero section
 * only (absolute, not fixed). Random position, random size, random
 * opacity per dot, so it doesn't read as a repeating grid. Drifts a few
 * px with the cursor, slow and smooth.
 */
export default function HeroStarfield() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { damping: 60, stiffness: 30 });
  const smy = useSpring(my, { damping: 60, stiffness: 30 });
  const driftX = useTransform(smx, [-1, 1], [-14, 14]);
  const driftY = useTransform(smy, [-1, 1], [-10, 10]);

  const stars = useMemo(
    () =>
      Array.from({ length: 46 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 0.6 + Math.random() * 1.8,
        opacity: 0.08 + Math.random() * 0.22,
      })),
    []
  );

  useEffect(() => {
    const onMove = (e) => {
      const rect = document.documentElement;
      mx.set(e.clientX / rect.clientWidth - 0.5);
      my.set(e.clientY / rect.clientHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <motion.div
      aria-hidden
      style={{ x: driftX, y: driftY }}
      className="pointer-events-none absolute -inset-6"
    >
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-content"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
          }}
        />
      ))}
    </motion.div>
  );
}
