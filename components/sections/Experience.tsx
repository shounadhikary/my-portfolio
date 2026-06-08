"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#050810]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="My Journey"
          title="Experience"
          subtitle="Internships, research roles, and leadership activities that shaped my skills"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-violet-500/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative sm:pl-24"
              >
                {/* Timeline icon */}
                <div className="hidden sm:flex absolute left-0 w-16 h-16 rounded-2xl items-center justify-center text-2xl border border-[#1E2D3D]"
                  style={{ background: `${exp.color}15`, borderColor: `${exp.color}30` }}>
                  {exp.icon}
                </div>

                {/* Card */}
                <div className="glass border border-[#1E2D3D] rounded-2xl p-6 hover:border-cyan-400/30 transition-all group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="sm:hidden text-xl">{exp.icon}</span>
                        <h3 className="font-display text-slate-100 font-bold text-lg">{exp.title}</h3>
                      </div>
                      <p className="font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{exp.location}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <span className="font-mono text-xs px-3 py-1 rounded-full text-slate-400 border border-[#1E2D3D]">
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{ color: exp.color, background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((r, ri) => (
                      <li key={ri} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-lg text-slate-400 border border-[#1E2D3D] bg-[#1A2332]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
