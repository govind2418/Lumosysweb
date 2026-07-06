"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="size-full animate-pulse bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
    ),
  },
);

export function HeroCanvas({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <HeroScene />
    </div>
  );
}
