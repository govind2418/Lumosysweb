import { stats } from "@/data/process";
import { Reveal } from "@/components/animations/reveal";
import { Counter } from "@/components/animations/counter";

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06} className="text-center sm:text-left">
            <Counter
              value={stat.value}
              className="block text-4xl font-semibold tracking-tight sm:text-5xl"
            />
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
