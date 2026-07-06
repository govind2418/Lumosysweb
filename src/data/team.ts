export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: "Elena Marsh",
    role: "Founder & CEO",
    bio: "Started Lumosys after a decade leading engineering teams at two Series C startups.",
    initials: "EM",
  },
  {
    name: "Theo Anand",
    role: "Head of Engineering",
    bio: "Leads technical architecture across every Lumosys engagement, from APIs to infrastructure.",
    initials: "TA",
  },
  {
    name: "Sofia Reyes",
    role: "Head of Design",
    bio: "Sets the design language and creative direction for the studio's product and brand work.",
    initials: "SR",
  },
  {
    name: "Marcus Lee",
    role: "Principal Engineer",
    bio: "Specializes in performance engineering and complex frontend systems.",
    initials: "ML",
  },
  {
    name: "Ines Dubois",
    role: "Senior Product Designer",
    bio: "Focuses on research-driven UX for fintech and healthcare products.",
    initials: "ID",
  },
  {
    name: "Kwame Osei",
    role: "Delivery Lead",
    bio: "Keeps every engagement scoped, on schedule, and transparent for clients.",
    initials: "KO",
  },
];

export const values = [
  {
    title: "Craft over shortcuts",
    description:
      "We'd rather ship a smaller feature set done well than a large one done carelessly.",
  },
  {
    title: "Engineering rigor",
    description:
      "Every product we ship is tested, typed, monitored, and built to be maintained by someone else.",
  },
  {
    title: "Radical transparency",
    description:
      "Clients see the same roadmap, budget, and risks we do — no surprises at the end of a sprint.",
  },
  {
    title: "Long-term thinking",
    description:
      "We design systems for the product's next three years, not just its launch day.",
  },
];
