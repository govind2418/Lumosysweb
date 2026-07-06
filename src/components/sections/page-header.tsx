import { Reveal } from "@/components/animations/reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-40 pb-16 lg:px-8">
      <Reveal>
        <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-2 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        ) : null}
      </Reveal>
    </section>
  );
}
