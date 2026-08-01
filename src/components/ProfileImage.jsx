import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import profileImg from "../assets/profile.png";
const BLOB = "62% 38% 35% 65% / 58% 40% 60% 42%";

export default function ProfileImage({ size = 280, className = "" }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 30, stiffness: 180 });
  const sy = useSpring(my, { damping: 30, stiffness: 180 });
  const tx = useTransform(sx, [-1, 1], [-6, 6]);
  const ty = useTransform(sy, [-1, 1], [-6, 6]);

  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <motion.div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* offset outline behind — cutout layering, not glow */}
      <div
        className="absolute inset-0 border-2 border-neon"
        style={{
          clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
          borderRadius: BLOB,
          transform: "translate(10px, 12px) rotate(-4deg)",
          opacity: 0.6,
        }}
      />

      <motion.div
        style={{ x: tx, y: ty, borderRadius: BLOB }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex h-full w-full items-center justify-center overflow-hidden border border-content/20 bg-surface-soft"
      >
      
      <img
          src={profileImg}
          alt="Prince Timilsina"
          className="h-full w-full object-cover"
          draggable={false}
        />

      </motion.div>
    </motion.div>
  );
}
