import { techStack } from "@/data/process";
import { Marquee } from "@/components/animations/marquee";

export function TechMarquee() {
  return (
    <section className="overflow-hidden border-y border-border/60 py-10">
      <Marquee items={techStack} />
    </section>
  );
}
