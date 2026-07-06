"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { projectCategories, projects } from "@/data/projects";

export function WorkGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active === category
                ? "border-foreground bg-foreground text-background"
                : "border-border/60 text-muted-foreground hover:border-foreground/30 hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group relative flex h-80 flex-col justify-between overflow-hidden rounded-2xl p-8 ring-1 ring-foreground/10 transition-transform duration-500 hover:-translate-y-1"
                style={{
                  backgroundImage: `radial-gradient(120% 100% at 100% 0%, ${project.color} 0%, transparent 55%)`,
                  backgroundColor: "var(--muted)",
                }}
              >
                <div className="flex items-start justify-between">
                  <Badge variant="secondary">{project.category}</Badge>
                  <ArrowUpRight className="size-5 text-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    {project.client} &middot; {project.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
