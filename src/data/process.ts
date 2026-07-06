export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with structured discovery — stakeholder interviews, technical audits, and a clear definition of what success looks like.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and prototypes are tested against real users before a single line of production code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Engineers work in short, reviewable cycles with continuous deployment, so you see progress every week, not every quarter.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We handle infrastructure, monitoring, and rollout, then stay hands-on through the first weeks of real traffic.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Post-launch, we track performance and usage data to guide an ongoing roadmap of iteration and optimization.",
  },
];

export const stats = [
  { label: "Products shipped", value: "120+" },
  { label: "Years in business", value: "9" },
  { label: "Client retention", value: "94%" },
  { label: "Avg. Lighthouse score", value: "97" },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Three.js",
  "Framer Motion",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "Vercel",
];
