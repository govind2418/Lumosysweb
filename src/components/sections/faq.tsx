"use client";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { scrollToSection } from "@/lib/scroll-to-section";

export function Faq() {
  return (
    <section id="faq" className="relative border-t border-white/5 bg-card/50 py-32 backdrop-blur-sm">
      <div className="container relative z-10 mx-auto max-w-3xl px-6">
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >
            Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
          >
            Frequently Asked Questions.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about working with Lumosys Web.
            Can&apos;t find your answer?{" "}
            <button
              onClick={() => scrollToSection("#contact")}
              className="interactive text-primary hover:underline"
            >
              Ask us directly.
            </button>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <Accordion defaultValue={[0]} className="gap-4 space-y-4">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={i}
                className="glass-card rounded-2xl border-none px-6"
              >
                <AccordionTrigger className="group/faq py-6 text-base font-semibold text-white hover:no-underline data-open:text-primary sm:text-lg **:data-[slot=accordion-trigger-icon]:hidden">
                  <span className="pr-4">{item.question}</span>
                  <span className="relative ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors group-aria-expanded/accordion-trigger:border-primary/40 group-aria-expanded/accordion-trigger:text-primary">
                    <Plus className="size-4 group-aria-expanded/accordion-trigger:hidden" />
                    <Minus className="hidden size-4 group-aria-expanded/accordion-trigger:block" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
