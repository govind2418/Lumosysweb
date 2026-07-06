"use client";

import { useEffect, useRef } from "react";

type Vec3 = [number, number, number];

export function NetworkGlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener("mousemove", onMouseMove);

    // Icosahedron vertices/edges, derived from the golden ratio
    const phi = (1 + Math.sqrt(5)) / 2;
    const vertices: Vec3[] = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ];
    const edges: [number, number][] = [
      [0, 1], [0, 5], [0, 7], [0, 10], [0, 11], [1, 5], [1, 7], [1, 8], [1, 9],
      [2, 3], [2, 4], [2, 10], [2, 11], [3, 4], [3, 6], [3, 8], [3, 9],
      [4, 5], [4, 9], [4, 11], [5, 9], [5, 11], [6, 7], [6, 8], [6, 10],
      [7, 8], [7, 10], [8, 9], [10, 11],
    ];
    const normalized = vertices.map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [x / len, y / len, z / len] as Vec3;
    });

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 3e-4,
      vy: (Math.random() - 0.5) * 3e-4,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    let pitch = 0;
    let yaw = 0;
    let autoRotation = 0;

    const project = (
      vertex: Vec3,
      cx: number,
      cy: number,
      radius: number,
      pitchAngle: number,
      yawAngle: number,
    ): Vec3 => {
      let [x, y, z] = vertex;
      const cosYaw = Math.cos(yawAngle);
      const sinYaw = Math.sin(yawAngle);
      [x, z] = [x * cosYaw - z * sinYaw, x * sinYaw + z * cosYaw];
      const cosPitch = Math.cos(pitchAngle);
      const sinPitch = Math.sin(pitchAngle);
      [y, z] = [y * cosPitch - z * sinPitch, y * sinPitch + z * cosPitch];
      const cameraDistance = 3;
      const scale = cameraDistance / (cameraDistance + z + 1.2);
      return [cx + x * radius * scale, cy + y * radius * scale, scale];
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 106, 245, ${p.opacity})`;
        ctx.fill();
      }

      const targetPitch = (mouseRef.current.y - 0.5) * 0.8;
      const targetYaw = (mouseRef.current.x - 0.5) * 0.8 + autoRotation * 0.3;
      pitch += (targetPitch - pitch) * 0.03;
      yaw += (targetYaw - yaw) * 0.03;

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.28;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.4);
      glow.addColorStop(0, "rgba(26, 106, 245, 0.14)");
      glow.addColorStop(0.5, "rgba(15, 70, 200, 0.07)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.beginPath();
      ctx.ellipse(cx, cy, radius * 1.4, radius * 1.4, 0, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      const projected = normalized.map((v) => project(v, cx, cy, radius, pitch, yaw));

      for (const [a, b] of edges) {
        const pa = projected[a];
        const pb = projected[b];
        const depth = (pa[2] + pb[2]) / 2;
        const alpha = Math.max(0.05, Math.min(0.75, depth * 0.9));
        ctx.beginPath();
        ctx.moveTo(pa[0], pa[1]);
        ctx.lineTo(pb[0], pb[1]);
        ctx.strokeStyle = `rgba(26, 106, 245, ${alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      for (const [x, y, scale] of projected) {
        const alpha = Math.max(0.1, Math.min(0.9, scale * 1.2));
        const size = Math.max(1.5, scale * 4);
        const grad = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
        grad.addColorStop(0, `rgba(96, 165, 250, ${alpha})`);
        grad.addColorStop(1, "rgba(26, 106, 245, 0)");
        ctx.beginPath();
        ctx.arc(x, y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${alpha})`;
        ctx.fill();
      }

      autoRotation += 0.005;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ display: "block" }} />
  );
}
