"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface CounterProps {
  value: string;
  className?: string;
}

export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/-?\d+(\.\d+)?/);
  const numeric = match ? parseFloat(match[0]) : 0;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : "";
  const decimals = match?.[1] ? match[1].length - 1 : 0;

  useGSAP(
    () => {
      if (!ref.current || !match) return;
      const counter = { val: 0 };

      gsap.to(counter, {
        val: numeric,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${counter.val.toFixed(decimals)}${suffix}`;
          }
        },
      });
    },
    { scope: ref, dependencies: [value] },
  );

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
