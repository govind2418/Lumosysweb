"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap";

interface SplitHeadingProps {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: string;
  delay?: number;
}

export function SplitHeading({
  as = "h1",
  className,
  children,
  delay = 0,
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const Tag = as;

  useGSAP(
    () => {
      if (!ref.current) return;

      const split = SplitText.create(ref.current, {
        type: "words,lines",
        linesClass: "overflow-hidden",
      });

      gsap.from(split.words, {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        stagger: 0.045,
        ease: "power4.out",
        delay,
      });

      return () => split.revert();
    },
    { scope: ref, dependencies: [children] },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
