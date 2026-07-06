"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-background/50 py-32 backdrop-blur-sm">
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-4xl font-bold tracking-tight md:text-5xl"
        >
          Trusted by the best.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Carousel opts={{ align: "start", loop: true }} className="px-1">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <figure className="glass-card flex h-full flex-col rounded-2xl p-8">
                    <Quote className="mb-5 size-7 text-primary" fill="currentColor" strokeWidth={0} />
                    <blockquote className="flex-1 text-base leading-relaxed text-white/90">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="interactive -left-4 border-white/10 bg-white/5 text-white hover:bg-white/10 sm:-left-5" />
            <CarouselNext className="interactive -right-4 border-white/10 bg-white/5 text-white hover:bg-white/10 sm:-right-5" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
