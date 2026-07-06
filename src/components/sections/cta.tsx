import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-20 text-center text-background sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,color-mix(in_oklch,var(--primary),transparent_60%),transparent)]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a product that needs to ship? Let&apos;s talk.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-background/70">
              Tell us about your project and timeline. We reply within one
              business day with next steps.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="group h-11 bg-background px-6 text-base text-foreground hover:bg-background/90"
              >
                Start a project
                <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
