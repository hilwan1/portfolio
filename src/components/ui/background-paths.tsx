"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    isAccent: i % 5 === 0,
    duration: 20 + ((i * 7) % 10),
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white"
        viewBox="0 0 696 316"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.isAccent ? "#ff5500" : "currentColor"}
            strokeWidth={path.width}
            strokeOpacity={
              path.isAccent
                ? Math.min(0.12 + path.id * 0.015, 0.55)
                : Math.min(0.06 + path.id * 0.018, 0.45)
            }
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{
              pathLength: 1,
              opacity: [0.25, 0.55, 0.25],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function AnimatedTitle({
  title,
  className = "text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]",
}: {
  title: string;
  className?: string;
}) {
  const words = title.split(" ");

  return (
    <h1 className={className}>
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block mr-3 sm:mr-4 last:mr-0"
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: wordIndex * 0.1 + letterIndex * 0.03,
                type: "spring",
                stiffness: 150,
                damping: 25,
              }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-400"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export function BackgroundPaths({
  title = "Background Paths",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
        {/* Radial & bottom scrim to guarantee WCAG AA contrast over vector lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.75) 70%, #0a0a0a 100%)",
          }}
        />
      </div>

      {children ? (
        <div className="relative z-10 w-full flex-1 flex flex-col justify-between">
          {children}
        </div>
      ) : (
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center my-auto py-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <AnimatedTitle title={title} className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter" />

            <div className="inline-block group relative bg-gradient-to-b from-white/15 to-white/5 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg transition-shadow duration-300">
              <Button
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-[#111111]/95 hover:bg-[#181818] text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/10"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  Lihat Karya Pilihan
                </span>
                <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                  →
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

