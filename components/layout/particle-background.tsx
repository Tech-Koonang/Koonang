"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

export function ParticleBackground({ className, isRelative = false }: { className?: string; isRelative?: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    rgba(239, 217, 47, 0.08),
    transparent 80%
  )`;

  // Generate stable particles to prevent re-render jitter and ensure consistent distribution
  const particles = useMemo(() => {
    return [...Array(30)].map(() => ({
      initialX: Math.random() * 100 + "%",
      initialY: Math.random() * 100 + "%",
      initialOpacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      scale: Math.random() * 0.5 + 1, // 1 to 1.5
    }));
  }, []);

  return (
    <div className={cn(
      "overflow-hidden pointer-events-none",
      isRelative ? "absolute inset-0 z-0" : "fixed inset-0 -z-10",
      className
    )}>
      {/* Deep Space Base */}
      <div className={cn(
        "absolute inset-0 transition-colors duration-500",
        isRelative ? "bg-navy-900" : "bg-slate-50 dark:bg-navy-900"
      )} />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Interactive Cursor Glow */}
      <motion.div
        className="absolute inset-0 opacity-100"
        style={{ background }}
      />

      {/* Floating Fireflies */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 md:w-1 md:h-1 bg-firefly rounded-full shadow-[0_0_10px_#EFD92F]"
          initial={{
            left: p.initialX,
            top: p.initialY,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            left: [
              p.initialX,
              `${parseFloat(p.initialX as string) + (Math.random() * 20 - 10)}%`,
              p.initialX,
            ],
            top: [
              p.initialY,
              `${parseFloat(p.initialY as string) + (Math.random() * 20 - 10)}%`,
              p.initialY,
            ],
            opacity: [p.initialOpacity, 1, p.initialOpacity],
            scale: [p.scale, p.scale * 1.5, p.scale],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
      
      {/* Constellation Lines (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
