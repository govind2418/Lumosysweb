export interface ProjectResult {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  category: "Web" | "App" | "AI";
  gradient: string;
  color: string;
  desc: string;
  summary: string;
  description: string;
  client: string;
  year: string;
  results: ProjectResult[];
  services: string[];
  tech: string[];
}

export const projectCategories = ["All", "Web", "App", "AI"] as const;

export const projects: Project[] = [
  {
    id: 1,
    slug: "aether-finance",
    name: "Aether Finance",
    category: "Web",
    gradient: "from-blue-600 to-cyan-400",
    color: "rgba(37,99,235,0.35)",
    desc: "Next-gen banking dashboard",
    summary: "A real-time banking dashboard for a fintech startup scaling across the UAE.",
    description:
      "Aether Finance needed a customer-facing dashboard that could handle real-time balances, multi-currency accounts, and transaction insights without feeling like a spreadsheet. We rebuilt the product from the ground up with a component system optimized for data-dense screens, then layered in performance work to keep it fast on lower-end devices across the region.",
    client: "Fintech Startup",
    year: "2024",
    results: [
      { label: "Faster load time", value: "62%" },
      { label: "Monthly active users", value: "40k+" },
      { label: "Support tickets", value: "-35%" },
    ],
    services: ["Web Development", "UI/UX Design", "Performance Optimization"],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 2,
    slug: "nexus-health",
    name: "Nexus Health",
    category: "App",
    gradient: "from-rose-500 to-orange-400",
    color: "rgba(244,63,94,0.35)",
    desc: "Telemedicine platform",
    summary: "A telemedicine platform connecting patients with clinicians across three time zones.",
    description:
      "Nexus Health approached us to replace a clunky third-party video system with a native telemedicine app covering scheduling, secure video consultations, and e-prescriptions. We designed the experience around clinician workflows first, then optimized the patient side for accessibility and low-bandwidth reliability.",
    client: "Healthcare Network",
    year: "2023",
    results: [
      { label: "Consultations booked", value: "18k+" },
      { label: "Patient satisfaction", value: "96%" },
      { label: "No-show rate", value: "-28%" },
    ],
    services: ["Mobile App Development", "UI/UX Design", "API Integration"],
    tech: ["React Native", "Node.js", "WebRTC", "AWS"],
  },
  {
    id: 3,
    slug: "orbital-ai",
    name: "Orbital AI",
    category: "AI",
    gradient: "from-emerald-500 to-teal-400",
    color: "rgba(16,185,129,0.35)",
    desc: "Generative workflow engine",
    summary: "A generative workflow engine that automates content pipelines for enterprise teams.",
    description:
      "Orbital AI's team had a working model but no product around it. We designed and built the interface layer — workflow builder, prompt management, and team collaboration tools — that turned their research into something non-technical teams could actually use day to day.",
    client: "AI Research Lab",
    year: "2024",
    results: [
      { label: "Workflows automated", value: "12k+" },
      { label: "Hours saved / month", value: "3,200" },
      { label: "Time to first workflow", value: "-70%" },
    ],
    services: ["Software Solutions", "AI Integration", "UI/UX Design"],
    tech: ["Python", "React", "GraphQL", "Vercel"],
  },
  {
    id: 4,
    slug: "lumina-os",
    name: "Lumina OS",
    category: "Web",
    gradient: "from-blue-600 to-blue-400",
    color: "rgba(37,99,235,0.35)",
    desc: "Enterprise operating system",
    summary: "An internal operating system that unifies HR, finance, and ops tooling for a 500-person company.",
    description:
      "Lumina was running on a patchwork of spreadsheets and disconnected tools. We consolidated their internal operations into a single web platform, with role-based access, custom reporting, and integrations into their existing finance and HR systems.",
    client: "Enterprise Operations",
    year: "2023",
    results: [
      { label: "Tools consolidated", value: "7" },
      { label: "Admin hours saved / week", value: "60+" },
      { label: "Employee adoption", value: "98%" },
    ],
    services: ["Software Solutions", "CRM Development", "Custom Dashboards"],
    tech: ["Next.js", "PostgreSQL", "GraphQL", "AWS"],
  },
  {
    id: 5,
    slug: "vanguard",
    name: "Vanguard",
    category: "App",
    gradient: "from-amber-500 to-red-500",
    color: "rgba(245,158,11,0.35)",
    desc: "Secure crypto wallet",
    summary: "A non-custodial crypto wallet built for security-conscious users and daily traders.",
    description:
      "Security and trust were the whole product for Vanguard. We built a wallet with hardware-key support, biometric approvals, and a transaction review flow designed to stop mistakes before they're signed on-chain, without slowing down power users.",
    client: "Crypto Exchange",
    year: "2022",
    results: [
      { label: "Wallets created", value: "85k+" },
      { label: "Security incidents", value: "0" },
      { label: "App store rating", value: "4.8" },
    ],
    services: ["Mobile App Development", "Security Audit", "UI/UX Design"],
    tech: ["React Native", "TypeScript", "Node.js"],
  },
  {
    id: 6,
    slug: "synthetica",
    name: "Synthetica",
    category: "AI",
    gradient: "from-fuchsia-600 to-pink-500",
    color: "rgba(217,70,239,0.35)",
    desc: "Neural network visualization",
    summary: "An interactive visualization tool for exploring and debugging neural network architectures.",
    description:
      "Synthetica's research team needed a way to explain model behavior to non-researchers — investors, product managers, and clients. We built a real-time 3D visualization layer on top of their training pipeline so anyone could see how a network was making decisions.",
    client: "AI Research Lab",
    year: "2022",
    results: [
      { label: "Models visualized", value: "300+" },
      { label: "Onboarding time", value: "-55%" },
      { label: "Render frame rate", value: "60fps" },
    ],
    services: ["Software Solutions", "AI Integration", "Data Visualization"],
    tech: ["Three.js", "React", "Python", "WebGL"],
  },
];
