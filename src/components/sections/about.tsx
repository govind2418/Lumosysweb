"use client";

import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";

import { globalPresence } from "@/lib/site-config";

const businessModel = ["Website", "Maintenance", "SEO", "Ads", "Software", "Long-Term Partner"];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/5 bg-background/50 py-32 backdrop-blur-sm">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >
              About the Studio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mb-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              Your Digital <br />
              <span className="text-gradient">Growth Partner.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-5 text-lg text-muted-foreground"
            >
              <p>
                Lumosys Web is a premium digital agency headquartered in
                Dubai, UAE — serving ambitious brands across the Middle East,
                South Asia, and North America.
              </p>
              <p>
                Founded by Govind Sharma, we combine the precision of
                enterprise engineering with the agility of a boutique studio.
                Every project we take on is treated as a long-term
                partnership, not a one-time transaction.
              </p>
              <p>
                From your first website to full-scale digital growth — we are
                with you at every step.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex items-center gap-3 text-muted-foreground"
            >
              <MapPin size={16} className="shrink-0 text-primary" />
              <span className="text-sm">Headquartered in Dubai, United Arab Emirates</span>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="glass-card rounded-3xl p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-2xl font-bold text-primary">
                  GS
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-white">Govind Sharma</h3>
                  <p className="mb-3 text-sm font-medium text-primary">Founder &amp; CEO</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Visionary entrepreneur driving digital transformation for
                    businesses across UAE, India, and Canada. Built Lumosys
                    Web to bridge the gap between great ideas and powerful
                    digital execution.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="glass-card rounded-3xl p-8"
            >
              <div className="mb-5 flex items-center gap-2">
                <Globe size={16} className="text-primary" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Global Presence
                </h4>
              </div>
              <div className="space-y-4">
                {globalPresence.map((office) => (
                  <div key={office.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{office.flag}</span>
                      <span className="text-sm font-medium text-white">{office.label}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{office.city}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="glass-card rounded-3xl p-8"
            >
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Business Model
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {businessModel.map((item, i) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-white">
                      {item}
                    </span>
                    {i < businessModel.length - 1 && (
                      <span className="text-xs text-muted-foreground">→</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
