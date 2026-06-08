"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block font-mono text-xs tracking-[0.25em] uppercase text-cyan-400 mb-4 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100 mt-3 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
