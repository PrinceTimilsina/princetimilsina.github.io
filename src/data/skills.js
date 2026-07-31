import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGithub,
  SiGit,
  SiPython,
  SiArduino,
} from "react-icons/si";
import { FiSearch } from "react-icons/fi";

// Grouped into rings so each ring can spin at its own speed.
// `hex` is each tool's real brand color, used on the icon itself.
export const orbitRings = [
  {
    radius: 120,
    duration: 26,
    items: [
      { label: "JavaScript", note: "Where most of my logic starts", icon: SiJavascript, angle: 20, hex: "#F7DF1E" },
      { label: "React", note: "My go-to for building interfaces", icon: SiReact, angle: 200, hex: "#61DAFB" },
    ],
  },
  {
    radius: 175,
    duration: 34,
    items: [
      { label: "Node.js", note: "Still leveling up on the backend", icon: SiNodedotjs, angle: 80, hex: "#5FA04E" },
      { label: "Git", note: "Version control, every project", icon: SiGit, angle: 170, hex: "#F05032" },
      { label: "Tailwind CSS", note: "Fast styling, tidy markup", icon: SiTailwindcss, angle: 260, hex: "#38BDF8" },
      { label: "GitHub", note: "How I track my own learning", icon: SiGithub, angle: 320, hex: null },
    ],
  },
  {
    radius: 225,
    duration: 42,
    items: [
      { label: "Python", note: "For scripts, AI experiments, automation", icon: SiPython, angle: 140, hex: "#3776AB" },
      { label: "Arduino / ESP32", note: "Where code meets hardware", icon: SiArduino, angle: 40, hex: "#00979D" },
      { label: "Research", note: "Reading, testing, asking why", icon: FiSearch, angle: 250, hex: null },
    ],
  },
];

export const techStack = [
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "JavaScript", "HTML / CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "Basic databases"],
  },
  {
    category: "Tools",
    items: ["Git & GitHub", "Vite", "Figma (basics)", "Arduino / ESP32"],
  },
  {
    category: "Learning / Exploring",
    items: ["AI systems & APIs", "System design basics", "Research methods"],
  },
];
