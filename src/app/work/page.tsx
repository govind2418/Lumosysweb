import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { WorkGrid } from "@/components/sections/work-grid";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Lumosys Web — fintech, healthcare, e-commerce, and enterprise products we've designed and built.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Products we've designed, built, and shipped."
        description="A selection of engagements across fintech, healthcare, commerce, and enterprise software."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <WorkGrid />
      </section>

      <CTA />
    </>
  );
}
