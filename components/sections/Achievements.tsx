"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#0D1117]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Recognition"
          title="Achievements"
          subtitle="Awards, hackathon wins, scholarships, and competitive programming milestones"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass border border-[#1E2D3D] rounded-2xl p-5 hover:border-cyan-400/30 transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{ach.icon}</span>
                <div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                    style={{ color: ach.color, background: `${ach.color}15`, border: `1px solid ${ach.color}30` }}>
                    {ach.type}
                  </span>
                </div>
              </div>
              <h3 className="font-display font-bold text-slate-100 text-sm leading-snug mb-2">{ach.title}</h3>
              <p className="text-xs text-slate-500 mb-2">{ach.organization} · {ach.date}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{ach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
