import { FiCode, FiSearch, FiBookOpen } from "react-icons/fi";

export const services = [
  {
    slug: "website-building",
    title: "Website Building",
    icon: FiCode,
    color: "neon",
    blurb: "Interfaces that feel considered, not templated.",
    cta: "Start a Website Project",
    points: [
      "UI/UX Design",
      "Creative Web Development",
      "Responsive modern interfaces",
    ],
  },
  {
    slug: "tech-research",
    title: "Tech Research",
    icon: FiSearch,
    color: "cyan",
    blurb: "The thinking that happens before anything gets built.",
    cta: "Start a Research Project",
    points: [
      "IT Research & Analysis",
      "Ideathon participation / wins",
      "Problem-solving focus",
    ],
  },
  {
    slug: "skill-training",
    title: "Skill Training",
    icon: FiBookOpen,
    color: "pink",
    blurb: "Structured, real-world skill training focused on building, not just learning.",
    cta: "Start Learning",
    points: [
      "Scratch (Game Development)",
      "C Programming",
      "OOP with C++",
      "Intro to Web (HTML, CSS, JS)",
    ],
  },
];
