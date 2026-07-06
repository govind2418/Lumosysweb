import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <section
        className="relative pt-40 pb-20"
        style={{
          backgroundImage: `radial-gradient(80% 60% at 50% 0%, ${project.color} 0%, transparent 60%)`,
        }}
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All work
            </Link>

            <div className="mt-6 flex items-center gap-3">
              <Badge variant="secondary">{project.category}</Badge>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>

            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 border-y border-border/60 py-10 sm:grid-cols-3">
            {project.results.map((result) => (
              <div key={result.label}>
                <p className="text-3xl font-semibold tracking-tight">{result.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold">Services</h2>
              <ul className="mt-3 space-y-2">
                {project.services.map((service) => (
                  <li key={service} className="text-muted-foreground">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Technology</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-14">
            <Button render={<Link href="/contact" />} size="lg" className="group h-11 px-6 text-base">
              Start a similar project
              <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
