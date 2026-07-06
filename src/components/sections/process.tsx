import { processSteps } from "@/data/process";
import { Reveal } from "@/components/animations/reveal";

export function Process() {
  return (
    <section className="border-y border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium text-muted-foreground">How we work</p>
          <h2 className="mt-2 max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A disciplined process, built for momentum.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border/60 border-t border-border/60">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[80px_1fr_2fr] sm:items-center sm:gap-8">
                <span className="text-sm font-medium text-muted-foreground">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
