import Reveal from "./Reveal.jsx";
import { skillLogos } from "../data/skillLogos.js";

function Logo({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="group/logo flex w-24 shrink-0 flex-col items-center gap-2 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
      
      {/* ✅ image for Canva */}
      {skill.img ? (
        <img
          src={skill.img}
          alt={skill.label}
          className="h-[30px] w-[30px] object-contain brightness-90 group-hover/logo:brightness-110"
          draggable={false}
        />
      ) : (
        <Icon size={30} style={{ color: skill.hex }} />
      )}

      <span className="font-mono text-[10px] uppercase tracking-wide text-content/50">
        {skill.label}
      </span>
    </div>
  );
}

export default function SkillMarquee() {
  const loop = [...skillLogos, ...skillLogos, ...skillLogos];

  return (
    <div className="mt-16">
      <Reveal className="mb-6 text-center">
        <span className="font-mono text-xs uppercase tracking-wide text-content/40">
          Tools behind the work
        </span>
      </Reveal>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-10 py-2">
          {loop.map((skill, i) => (
            <Logo key={`${skill.label}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}