import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";

export function FeaturedWork() {
  const featured = projects.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Selected work</p>
            <h2 className="mt-2 max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Products we&apos;ve shipped for ambitious teams.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground"
          >
            View all work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
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
                <p className="text-sm text-muted-foreground">{project.client} &middot; {project.year}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">{project.summary}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
