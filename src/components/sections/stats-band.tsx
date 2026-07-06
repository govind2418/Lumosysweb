"use client";

import { motion } from "framer-motion";

import { siteStats } from "@/data/site-stats";
import { Counter } from "@/components/animations/counter";

export function StatsBand() {
  return (
    <section className="relative border-t border-white/5 bg-card/50 py-20 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {siteStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center"
            >
              <Counter
                value={stat.value}
                className="text-gradient block text-4xl font-bold tracking-tight sm:text-5xl"
              />
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
