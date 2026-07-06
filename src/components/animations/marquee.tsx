"use client";

import { motion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="scrollbar-hide flex overflow-hidden">
      <motion.div
        className="flex shrink-0 items-center gap-12 pr-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap text-lg font-medium text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
