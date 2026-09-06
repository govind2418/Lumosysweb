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
  /** External live site — when present, cards link out instead of to the internal case study page. */
  url?: string;
  /** Small pill shown on the card, e.g. "Top Rated", "Coming Soon", "Confidential". */
  badge?: string;
  /** Parent product this project is a division/vertical of. */
  parent?: string;
  /** Locked cards render as non-clickable teasers (upcoming / confidential work). */
  locked?: boolean;
}

export const projectCategories = ["All", "Web", "App", "AI"] as const;

export const projects: Project[] = [
  {
    id: 1,
    slug: "munimji-app",
    name: "Munimji App",
    category: "App",
    gradient: "from-yellow-500 to-orange-400",
    color: "rgba(234,179,8,0.35)",
    desc: "All-in-one business & accounting app",
    summary:
      "India's fastest-growing business management app — billing, inventory, GST & accounting in one place.",
    description:
      "Munimji App is a complete business management suite built for India's small and medium businesses — invoicing, inventory tracking, GST-ready accounting, and multi-branch management in a single mobile-first app. We designed and built the platform from the ground up, and continue to grow it with vertical-specific editions for different industries.",
    client: "Munimji",
    year: "2025",
    results: [
      { label: "Active businesses", value: "10k+" },
      { label: "App store rating", value: "4.8" },
      { label: "Industry editions", value: "3+" },
    ],
    services: ["Product Strategy", "Mobile App Development", "UI/UX Design"],
    tech: ["React Native", "Node.js", "PostgreSQL"],
    url: "https://munimjiapp.com",
    badge: "⭐ Top Rated",
  },
  {
    id: 2,
    slug: "shyam-sweets",
    name: "Shyam Sweets",
    category: "App",
    gradient: "from-amber-500 to-yellow-300",
    color: "rgba(245,158,11,0.35)",
    desc: "Munimji edition for sweets & mithai businesses",
    summary:
      "A Munimji App vertical built for sweet shops — order taking, weight-based billing, and festival-season inventory.",
    description:
      "Shyam Sweets is a Munimji App division tailored for mithai and sweet shop businesses, handling weight-based billing, seasonal inventory spikes, and festive order management.",
    client: "Munimji · Shyam Sweets",
    year: "2025",
    results: [
      { label: "Orders processed", value: "25k+" },
      { label: "Billing time saved", value: "40%" },
      { label: "Outlets onboarded", value: "50+" },
    ],
    services: ["Vertical Product Design", "Mobile App Development"],
    tech: ["React Native", "Node.js"],
    url: "https://shyam.munimjiapp.com",
    parent: "Munimji App",
  },
  {
    id: 3,
    slug: "powerbreak-snookers",
    name: "PowerBreak Snookers",
    category: "App",
    gradient: "from-emerald-600 to-green-400",
    color: "rgba(5,150,105,0.35)",
    desc: "Munimji edition for snooker & pool clubs",
    summary:
      "A Munimji App vertical for snooker and pool clubs — table-time billing, memberships, and cafe orders in one app.",
    description:
      "PowerBreak is a Munimji App division built for snooker and pool clubs, managing table-time billing, memberships, and in-house cafe orders from a single dashboard.",
    client: "Munimji · PowerBreak",
    year: "2025",
    results: [
      { label: "Clubs onboarded", value: "30+" },
      { label: "Table hours tracked", value: "12k+/mo" },
      { label: "Billing disputes", value: "-90%" },
    ],
    services: ["Vertical Product Design", "Mobile App Development"],
    tech: ["React Native", "Node.js"],
    url: "https://powerbreak.munimjiapp.com",
    parent: "Munimji App",
  },
  {
    id: 4,
    slug: "leela-infra-solutions",
    name: "Leela Infra Solutions",
    category: "Web",
    gradient: "from-slate-600 to-zinc-400",
    color: "rgba(71,85,105,0.35)",
    desc: "Infrastructure & construction solutions",
    summary:
      "A corporate web presence for an infrastructure and construction solutions company.",
    description:
      "Leela Infra Solutions needed a professional web presence to showcase its infrastructure and construction capabilities to enterprise and government clients. We designed and built a fast, credible site covering services, projects, and client outreach.",
    client: "Leela Infra Solutions",
    year: "2025",
    results: [
      { label: "Page load time", value: "<1s" },
      { label: "Services showcased", value: "10+" },
      { label: "Lead inquiries", value: "+3x" },
    ],
    services: ["Web Development", "UI/UX Design"],
    tech: ["Next.js", "Tailwind CSS"],
    url: "https://leelainfra.in",
  },
  {
    id: 5,
    slug: "mindgrowth-education",
    name: "MindGrowth Education",
    category: "Web",
    gradient: "from-violet-600 to-indigo-400",
    color: "rgba(124,58,237,0.35)",
    desc: "Ed-tech platform for learning & growth",
    summary:
      "A modern web platform for an education brand focused on skill-building and personal growth.",
    description:
      "MindGrowth Education wanted a modern digital front door for its courses and programs. We built a fast, content-friendly platform designed to convert visitors into enrolled students.",
    client: "MindGrowth Education",
    year: "2025",
    results: [
      { label: "Course enrollments", value: "+65%" },
      { label: "Bounce rate", value: "-30%" },
      { label: "Mobile visitors", value: "70%" },
    ],
    services: ["Web Development", "UI/UX Design"],
    tech: ["Next.js", "Tailwind CSS"],
    url: "https://mindgrowth.in",
  },
  {
    id: 6,
    slug: "giftmint",
    name: "Giftmint",
    category: "Web",
    gradient: "from-pink-500 to-rose-400",
    color: "rgba(236,72,153,0.35)",
    desc: "Digital gift card platform",
    summary:
      "A digital gift card platform letting brands issue, sell, and redeem gift cards online.",
    description:
      "Giftmint set out to modernize gift cards — letting brands issue, sell, and redeem digital gift cards without holding physical inventory. We're building the platform covering card issuance, checkout, and redemption.",
    client: "Giftmint",
    year: "2025",
    results: [
      { label: "Brands onboarding", value: "In progress" },
      { label: "Card formats", value: "Digital & physical" },
      { label: "Launch", value: "Coming soon" },
    ],
    services: ["Product Strategy", "Web Development"],
    tech: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: 7,
    slug: "more-projects-coming-soon",
    name: "More Projects, Coming Soon",
    category: "Web",
    gradient: "from-neutral-700 to-neutral-500",
    color: "rgba(115,115,115,0.35)",
    desc: "New work launching soon",
    summary: "We're heads-down on a few more projects — check back soon.",
    description:
      "We're currently building several new products for clients across fintech, education, and commerce. Details will be shared as they launch.",
    client: "—",
    year: "2026",
    results: [
      { label: "Status", value: "In development" },
      { label: "Launch window", value: "2026" },
      { label: "Slots open", value: "Limited" },
    ],
    services: ["Ask us"],
    tech: ["TBA"],
    badge: "Upcoming",
    locked: true,
  },
  {
    id: 8,
    slug: "classified-project",
    name: "Classified Project",
    category: "AI",
    gradient: "from-zinc-900 to-purple-800",
    color: "rgba(88,28,135,0.35)",
    desc: "Under NDA — details locked",
    summary:
      "Something big is brewing. Can't say more yet — you'll know when it launches.",
    description:
      "This one's under a non-disclosure agreement. What we can say: it's ambitious, it's AI-powered, and it's coming. 🤫",
    client: "Confidential",
    year: "2026",
    results: [
      { label: "Status", value: "🔒 Classified" },
      { label: "Clearance", value: "Need to know" },
      { label: "ETA", value: "Soon™" },
    ],
    services: ["Ask nicely"],
    tech: ["🤐"],
    badge: "🔒 Confidential",
    locked: true,
  },
];
