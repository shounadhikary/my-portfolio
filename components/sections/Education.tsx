"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Academic Background" title="Education" />
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass border border-line rounded-2xl p-8 hover:border-cyan-400/30 transition-all"
          >
            <div className="flex items-start gap-5 mb-6">
              <span className="text-4xl">{edu.logo}</span>
              <div>
                <h3 className="font-display text-xl font-bold text-strong">{edu.degree}</h3>
                <p className="text-cyan-400 font-medium mt-1">{edu.institution}</p>
                <p className="text-faint text-sm">{edu.location} · {edu.period}</p>
                <span className="inline-block mt-2 text-xs font-mono px-3 py-1 rounded-full text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
                  CGPA: {edu.cgpa}
                </span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-mono text-faint uppercase tracking-wider mb-3">Key Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((c) => (
                    <span key={c} className="text-xs font-mono px-2.5 py-1 rounded-lg text-dim border border-line bg-mutedbg">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-mono text-faint uppercase tracking-wider mb-3">Achievements</p>
                <ul className="space-y-2">
                  {edu.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-dim">
                      <span className="text-cyan-400 mt-0.5">▸</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
