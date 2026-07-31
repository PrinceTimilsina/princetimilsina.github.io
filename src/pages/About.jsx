import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import StickerTag from "../components/StickerTag.jsx";
import ProfileImage from "../components/ProfileImage.jsx";

const PRINCIPLES = [
  {
    title: "Build",
    text: "I learn best by starting before I feel ready, and finding out where things break along the way.",
    color: "neon",
  },
  {
    title: "Experiment",
    text: "Software and hardware side by side — a sensor on a breadboard keeps an idea honest in a way a spec doc never does.",
    color: "cyan",
  },
  {
    title: "Research",
    text: "Before I build, I try to understand — reading around a problem, asking why something works, testing assumptions.",
    color: "pink",
  },
];

const INTERESTS = [
  "Web Development",
  "AI Systems",
  "Research & Problem Solving",
  "Tech Entrepreneurship",
];

export default function About() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-6 pb-32 pt-6 sm:px-10">
        <Reveal>
          <StickerTag color="cyan" rotate={-4} className="mb-6">
            Builder
          </StickerTag>
          <h1 className="font-display text-6xl font-bold leading-[0.9] sm:text-8xl">
            About.
          </h1>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-14 grid items-start gap-10 sm:grid-cols-[0.85fr_1.15fr]"
        >
          <ProfileImage size={260} className="mx-auto sm:mx-0" />

          <div className="space-y-5 font-body text-base leading-relaxed text-content/80">
            <p>
              I'm a Computer Science student — a learner and builder more
              than anything else. I'm drawn to software, AI systems, and the
              messier, curiosity-driven side of turning an idea into
              something real, including the entrepreneurial questions that
              come with it: is this worth building, and for whom?
            </p>
            <p>
              Most of what I know so far has come from making things and
              finding out where they broke, not from a finished course. I'm
              still early in that process, and I'm okay with that — every
              project teaches me something the last one didn't.
            </p>
            <p>
              I move between software and hardware on purpose, and I try to
              research before I build rather than after. Code that only
              exists in a browser can hide a lot of assumptions; a circuit
              on a breadboard — or a question I couldn't answer yet — keeps
              that thinking honest.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <h2 className="font-display text-sm uppercase tracking-wide text-content/40">
            What I'm interested in
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {INTERESTS.map((item, i) => (
              <StickerTag
                key={item}
                color={["neon", "cyan", "pink", "orange"][i % 4]}
                rotate={(i % 2 ? 1 : -1) * (2 + i)}
              >
                {item}
              </StickerTag>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-20">
          <h2 className="font-display text-2xl font-bold text-content/80">
            How I work
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div className="h-full rounded-3xl border border-content/10 bg-content/5 p-6">
                  <StickerTag color={p.color} rotate={-3} className="mb-4">
                    {p.title}
                  </StickerTag>
                  <p className="font-body text-sm leading-relaxed text-content/70">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
