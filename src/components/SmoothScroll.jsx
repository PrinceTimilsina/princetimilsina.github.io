import React from "react";
import { useEffect, useRef } from "react";

export default function SmoothScroll() {
  const target = useRef(0);
  const current = useRef(0);
  const rafId = useRef(null);
  const running = useRef(false);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarse || prefersReduced) return;

    const scrollingElement = document.scrollingElement;

    const maxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const normalizeDelta = (e) => {
      if (e.deltaMode === 1) return e.deltaY * 16;
      if (e.deltaMode === 2) return e.deltaY * window.innerHeight;
      return e.deltaY;
    };

    const ease = 0.06; // 🔥 tweak this (0.06–0.09 sweet spot)

    const tick = (time) => {
      const dt = (time - lastTime.current) / 16;
      lastTime.current = time;

      const diff = target.current - current.current;

      // frame-independent easing (NO bounce)
      const t = 1 - Math.pow(1 - ease, dt);

      current.current += diff * t;

      // soft landing (premium feel)
      if (Math.abs(diff) < 100) {
        current.current += diff * 0.02;
      }

      // stop cleanly
      if (Math.abs(diff) < 0.2) {
        current.current = target.current;
        scrollingElement.scrollTop = current.current;
        running.current = false;
        return;
      }

      scrollingElement.scrollTop = current.current;
      rafId.current = requestAnimationFrame(tick);
    };

    const onWheel = (e) => {
      if (e.ctrlKey) return;
      e.preventDefault();

      const delta = normalizeDelta(e) * 0.85; // smoother input

      if (!running.current) {
        current.current = window.scrollY;
        target.current = window.scrollY;
      }

      target.current += delta;
      target.current = Math.max(0, Math.min(target.current, maxScroll()));

      if (!running.current) {
        running.current = true;
        lastTime.current = performance.now();
        rafId.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return null;
}