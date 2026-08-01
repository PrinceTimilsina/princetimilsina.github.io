import React from "react";
import { motion } from "framer-motion";
import { FiImage } from "react-icons/fi";
import Reveal from "./Reveal.jsx";
import { galleryPlaceholders } from "../data/gallery.js";

const ACCENTS = ["#c8ff3d", "#4df0ff", "#ff4fd8", "#ff7a1a"];

function Frame({ item, index }) {
const hex = ACCENTS[index % ACCENTS.length];

return (
<motion.div
whileHover={{ scale: 1.05 }}
transition={{ type: "spring", damping: 18, stiffness: 220 }}
className="relative h-40 w-56 shrink-0 overflow-hidden rounded-[28px] border border-content/10 sm:h-48 sm:w-64"
>
{/* Image */} <img
     src={item.img}
     alt={item.label}
     className="absolute inset-0 h-full w-full object-cover"
   />

```
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Accent glow */}
  <span
    className="absolute -right-6 -top-8 h-24 w-24 rounded-full opacity-[0.15] blur-2xl"
    style={{ backgroundColor: hex }}
  />

  {/* Content */}

</motion.div>

);
}


export default function AchievementMarquee() {
  const loop = [...galleryPlaceholders, ...galleryPlaceholders];

  return (
    <section className="border-y border-content/10 bg-content/[0.03] py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-wide text-content/40">
            Moments along the way
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            A Few Snapshots
          </h2>
        </Reveal>
      </div>

      <div className="group relative overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="animate-marquee-slow flex w-max gap-5 px-6 sm:px-10">
          {loop.map((item, i) => (
            <Frame key={`${item.id}-${i}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
