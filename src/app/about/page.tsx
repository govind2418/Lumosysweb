import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { CTA } from "@/components/sections/cta";
import { Stats } from "@/components/sections/stats";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/reveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { team, values } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lumosys Web is an independent software agency building high-performance digital products for ambitious brands.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Lumosys"
        title="A studio built by engineers who care about craft."
        description="We're a small, senior team of designers and engineers who partner closely with our clients — no account managers, no hand-offs, no surprises."
      />

      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <Reveal>
          <div className="max-w-3xl space-y-6 text-lg text-muted-foreground">
            <p>
              Lumosys Web started in 2017 with a simple frustration: too many
              agencies treated design and engineering as separate disciplines
              handed off in sequence. We build both together, from the first
              week of discovery through the day a product ships — and beyond.
            </p>
            <p>
              Today we work with fintech, healthcare, and consumer teams who
              need a partner that can move at startup speed without
              sacrificing the rigor of enterprise engineering.
            </p>
          </div>
        </Reveal>
      </section>

      <Stats />

      <section className="border-y border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium text-muted-foreground">Our values</p>
            <h2 className="mt-2 max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              The principles behind every engagement.
            </h2>
          </Reveal>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <RevealItem key={value.title}>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium text-muted-foreground">Leadership</p>
          <h2 className="mt-2 max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            The people behind the work.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <RevealItem key={member.name}>
              <div className="flex items-start gap-4">
                <Avatar className="size-12">
                  <AvatarFallback className="text-sm">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CTA />
    </>
  );
}
