import dynamic from "next/dynamic";

import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Pricing } from "@/components/sections/pricing";
import { About } from "@/components/sections/about";
import { AiSolutions } from "@/components/sections/ai-solutions";
import { Contact } from "@/components/sections/contact";

// Code-split below-the-fold sections so GSAP/embla/accordion don't bloat the first-paint bundle.
const StatsBand = dynamic(() =>
  import("@/components/sections/stats-band").then((m) => m.StatsBand),
);
const Testimonials = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => m.Testimonials),
);
const Faq = dynamic(() => import("@/components/sections/faq").then((m) => m.Faq));

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <About />
      <AiSolutions />
      <StatsBand />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
