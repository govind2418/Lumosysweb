"use client";

import { motion } from "framer-motion";

import { ParticleFieldCanvas } from "@/components/effects/particle-field-canvas";
import { scrollToSection } from "@/lib/scroll-to-section";

export function AiSolutions() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-background/50 py-32 backdrop-blur-sm">
      <div className="absolute inset-0 z-0">
        <ParticleFieldCanvas />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(16,185,129,0.1),transparent)]" />

      <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Intelligence Built-In
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          Automate the impossible.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Deploy custom AI agents, autonomous workflows, and predictive
          models that transform your operational overhead into a strategic
          advantage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <button
            onClick={() => scrollToSection("#services")}
            className="interactive rounded-full bg-emerald-500 px-8 py-4 font-medium text-black transition-all hover:scale-[1.02] hover:bg-emerald-400"
          >
            Explore AI Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
