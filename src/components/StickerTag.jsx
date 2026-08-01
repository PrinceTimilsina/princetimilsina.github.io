import React from "react";
import { motion } from "framer-motion";

const COLORS = {
  neon: "bg-neon text-ink",
  cyan: "bg-cyan text-ink",
  pink: "bg-pink text-ink",
  orange: "bg-orange text-ink",
};

export default function StickerTag({
  children,
  color = "neon",
  rotate = -4,
  className = "",
  delay = 0,
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      whileHover={{ rotate: 0, scale: 1.06 }}
      viewport={{ once: true }}
      transition={{ type: "spring", damping: 14, stiffness: 160, delay }}
      className={`inline-block select-none rounded-xl px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_rgba(0,0,0,0.25)] ${COLORS[color]} ${className}`}
    >
      {children}
    </motion.span>
  );
}
