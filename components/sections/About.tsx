"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Coffee, Code2, Brain, Trophy } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { personalInfo, education } from "@/data/portfolio";

export function About() {
  const facts = [
    { icon: Code2, label: "Years Coding", value: "5+", color: "#00D9FF" },
    { icon: Brain, label: "ML Projects", value: "5", color: "#7C3AED" },
    { icon: Trophy, label: "Competitions Won", value: "", color: "#F59E0B" },
    { icon: Coffee, label: "Coffee Cups", value: "∞", color: "#10B981" },
  ];

  return (
    <section id="about" className="py-24 bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Who I Am" title="About Me" subtitle="A passionate engineer at the intersection of AI research and practical engineering" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Avatar & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Avatar placeholder */}
            <div className="relative mb-10">
              <div className="w-64 h-64 rounded-3xl relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, var(--bg-card), var(--bg-muted))" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-9xl font-bold"
                    style={{ background: "linear-gradient(135deg, #00D9FF, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    SA
                  </span>
                </div>
                <div className="absolute inset-0 rounded-3xl border border-cyan-400/20" />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-4 -right-4 glass border border-line rounded-2xl px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400">Open to Work</span>
              </div>
            </div>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {facts.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="glass border border-line rounded-2xl p-4 text-center hover:border-cyan-400/30 transition-colors">
                  <Icon size={20} className="mx-auto mb-2" style={{ color }} />
                  <div className="font-display text-xl font-bold text-strong">{value}</div>
                  <div className="text-xs text-faint font-mono">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6 text-body text-base leading-relaxed text-justify hyphens-auto">
              {personalInfo.longBio.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Info chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-sm text-dim glass border border-line px-4 py-2 rounded-full">
                <MapPin size={14} className="text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-2 text-sm text-dim glass border border-line px-4 py-2 rounded-full">
                <Mail size={14} className="text-violet-400" />
                {personalInfo.email}
              </span>
            </div>

            {/* Education card */}
            {education.map((edu) => (
              <div key={edu.institution} className="mt-8 glass border border-line rounded-2xl p-6 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{edu.logo}</span>
                  <div>
                    <h3 className="font-display text-strong font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-cyan-400 text-sm font-medium mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-faint font-mono">{edu.period}</span>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
