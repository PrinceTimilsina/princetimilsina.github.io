export const projects = [
  {
    slug: "viram",
    title: "Productivity App",
    name: "Viram",
    tagline: "A pause button for your attention.",
    description:
      "Viram is a productivity app built to reduce social media addiction and protect digital well-being. Rather than blocking apps outright, it studies usage patterns and nudges you toward intentional breaks — designed and iterated through repeated rounds of real-user testing.",
    tags: ["Web", "Product", "Ongoing"],
    year: "2025",
    color: "neon",
    role: "Product design & frontend build",
    github: "https://github.com/princetimilsina/viram",
    live: "",
    highlights: [
      "Usage-pattern nudges instead of blunt app blocking",
      "Shaped entirely through iteration and usability testing",
      "Exhibited live at the Sangam Club Exhibition",
    ],
  },
  {
    slug: "gitplanet",
    name: "GitPlanet",
    tagline: "Your GitHub, rendered as a solar system.",
    description:
      "GitPlanet turns a GitHub profile into an orbital map — each repository becomes a planet, sized by activity and colored by language. It's a small experiment in making engineering work feel tangible, built at the intersection of visualization and systems thinking.",
    tags: ["AI", "Web"],
    year: "2025",
    color: "cyan",
    role: "Concept, data visualization, frontend",
    github: "https://github.com/princetimilsina/gitplanet",
    live: "",
    highlights: [
      "Maps repo size and activity to orbital scale",
      "Language mix rendered as planetary color",
      "Built to make abstract commit history feel spatial",
    ],
  },
  {
    slug: "concern-raising-platform",
    name: "Concern Raising Platform",
    tagline: "A place to raise what needs to be raised.",
    description:
      "Built during a 2026 hackathon, focused on raising and addressing public concerns — a lightweight platform for surfacing community issues and tracking how they get resolved.",
    tags: ["Web", "Hackathon"],
    year: "2026",
    color: "orange",
    role: "Full build",
    github: "https://github.com/princetimilsina/concern-raising-platform",
    live: "",
    highlights: [
      "Built end-to-end during a 2026 hackathon",
      "Focused on surfacing and tracking public concerns",
      "Prioritized clarity and speed over polish under a hackathon clock",
    ],
  },
  {
    slug: "ai-tools",
    name: "AI Tools Suite",
    tagline: "Three small tools, one habit: automate the boring part.",
    description:
      "A set of lightweight AI utilities — a text summarizer powered by Hugging Face models, an image caption generator, and an email refinement tool that tightens tone and clarity before you hit send.",
    tags: ["AI"],
    year: "2024 — ongoing",
    color: "pink",
    role: "Full build, model integration",
    github: "https://github.com/princetimilsina/ai-tools",
    live: "",
    highlights: [
      "Text Summarizer — Hugging Face-backed condensation",
      "Caption Generator — image-to-text captioning",
      "Email Refinement Tool — tone and clarity pass",
    ],
  },
  {
    slug: "hardware",
    name: "Hardware Projects",
    tagline: "Where the code meets the breadboard.",
    description:
      "A running collection of Arduino and ESP32 automation systems — from sensor-driven triggers to small home-automation builds. The hardware side keeps the software side honest about how things actually behave in the real world.",
    tags: ["Hardware"],
    year: "",
    color: "orange",
    role: "Circuit design, firmware",
    github: "https://github.com/princetimilsina/hardware-projects",
    live: "",
    highlights: [
      "ESP32-based automation and sensor systems",
      "Arduino prototyping for real-world triggers",
      "Bridges software logic with physical output",
    ],
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
