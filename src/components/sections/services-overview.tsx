import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/services";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/reveal";

export function ServicesOverview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-muted-foreground">What we do</p>
            <h2 className="mt-2 max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              End-to-end product capability, under one roof.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground"
          >
            All services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <RevealItem key={service.slug}>
            <Link
              href={`/services#${service.slug}`}
              className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-muted/40"
            >
              <service.icon className="size-6 text-foreground" strokeWidth={1.5} />
              <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
