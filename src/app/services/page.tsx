import type { Metadata } from "next";
import { Check } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { CTA } from "@/components/sections/cta";
import { Reveal } from "@/components/animations/reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, product design, brand identity, mobile apps, SEO, and launch support from Lumosys Web.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Capability that spans the whole product lifecycle."
        description="Engage us for a single discipline or the full build — every service is delivered by the same senior team, end to end."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="divide-y divide-border/60 border-t border-border/60">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.04}>
              <div
                id={service.slug}
                className="grid scroll-mt-24 grid-cols-1 gap-8 py-14 lg:grid-cols-[1fr_1.4fr]"
              >
                <div>
                  <service.icon className="size-7" strokeWidth={1.5} />
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <ul className="grid grid-cols-1 gap-3 self-start sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
