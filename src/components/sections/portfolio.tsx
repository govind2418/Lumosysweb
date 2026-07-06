"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projectCategories, projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function TechCube() {
  return (
    <div className="tech-cube-scene">
      <motion.div
        className="tech-cube"
        style={{ translateZ: 50 }}
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <div className="tech-cube-face tech-cube-face--front" />
        <div className="tech-cube-face tech-cube-face--back" />
        <div className="tech-cube-face tech-cube-face--right" />
        <div className="tech-cube-face tech-cube-face--left" />
        <div className="tech-cube-face tech-cube-face--top" />
        <div className="tech-cube-face tech-cube-face--bottom" />
      </motion.div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="[perspective:1200px]"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="interactive group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-90 transition-transform duration-700 group-hover:scale-105",
            project.gradient,
          )}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) =>
                `radial-gradient(240px circle at ${gx} ${gy}, rgba(255,255,255,0.18), transparent 70%)`,
            ),
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/0" />

        <div
          className="absolute inset-0 flex items-center justify-center opacity-25 transition-opacity duration-500 group-hover:opacity-70"
          style={{ transformStyle: "preserve-3d" }}
        >
          <TechCube />
        </div>

        <ArrowUpRight
          style={{ transform: "translateZ(30px)" }}
          className="absolute top-6 right-6 size-5 text-white/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
        />

        <div
          style={{ transform: "translateZ(30px)" }}
          className="absolute inset-0 flex flex-col justify-end p-8"
        >
          <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/70">
            {project.category}
          </span>
          <h3 className="mb-1 text-2xl font-bold text-white">{project.name}</h3>
          <p
            className={cn(
              "max-h-0 text-sm text-white/80 opacity-0 transition-all duration-300",
              "group-hover:mt-2 group-hover:max-h-12 group-hover:opacity-100",
            )}
          >
            {project.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative border-t border-white/5 bg-background/50 py-32 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
            >
              Selected Work.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl text-xl text-muted-foreground"
            >
              A glimpse into the digital experiences we&apos;ve engineered.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-2 rounded-full border border-white/10 bg-white/5 p-1"
          >
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={cn(
                  "interactive rounded-full px-5 py-2 text-sm font-medium transition-all",
                  active === category
                    ? "bg-white text-black"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
