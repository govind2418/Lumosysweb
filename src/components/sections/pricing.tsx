"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { pricingPlans, pricingRegions, type PricingRegion } from "@/data/pricing";
import { scrollToSection } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [region, setRegion] = useState<PricingRegion["id"]>("uae");

  return (
    <section id="pricing" className="relative overflow-hidden border-t border-white/5 bg-card/50 py-32 backdrop-blur-sm">
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >
            Transparent Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
          >
            Simple, Honest Pricing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-xl text-xl text-muted-foreground"
          >
            World-class quality at regional prices. Select your country to see
            local rates.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-12 flex items-center justify-center gap-3"
        >
          {pricingRegions.map((r) => (
            <button
              key={r.id}
              onClick={() => setRegion(r.id)}
              className={cn(
                "interactive flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
                region === r.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:bg-white/10",
              )}
            >
              <span>{r.flag}</span>
              {r.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans[region].map((plan, i) => (
            <motion.div
              key={`${region}-${plan.name}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className={cn(
                "relative flex flex-col rounded-2xl p-7",
                plan.highlighted
                  ? "border-2 border-primary/50 bg-primary/10 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                  : "glass-card",
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="mb-5">
                <h3 className="mb-2 text-base font-semibold text-white">{plan.name}</h3>
                <div className="mb-2 flex items-end gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {plan.period}
                </p>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <ul className="mb-7 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToSection("#contact")}
                className={cn(
                  "interactive w-full rounded-xl py-3 text-sm font-semibold transition-all",
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
                )}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          Need a custom quote?{" "}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="interactive text-primary hover:underline"
          >
            Contact us directly
          </a>{" "}
          — we tailor every solution to your goals.
        </motion.p>
      </div>
    </section>
  );
}
