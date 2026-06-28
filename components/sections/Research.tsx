"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { research } from "@/data/portfolio";

const statusColors: Record<string, string> = {
  Ongoing: "#10B981",
  Completed: "#00D9FF",
  Planned: "#F59E0B",
};

export function Research() {
  return (
    <section id="research" className="py-24 bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Academic Work"
          title="Research Interests"
          subtitle="Exploring the frontiers of AI through rigorous research and experimentation"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {research.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass border border-line rounded-2xl p-6 hover:border-cyan-400/30 transition-all group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                  {item.icon}
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full"
                  style={{
                    color: statusColors[item.status],
                    background: `${statusColors[item.status]}15`,
                    border: `1px solid ${statusColors[item.status]}30`,
                  }}>
                  {item.status}
                </span>
              </div>

              <h3 className="font-display font-bold text-strong text-base leading-snug mb-2">{item.title}</h3>
              <p className="text-xs font-mono mb-3" style={{ color: item.color }}>{item.area}</p>
              <p className="text-dim text-sm leading-relaxed mb-5 text-justify hyphens-auto">{item.description}</p>

              {/* Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-faint mb-1.5">
                  <span>Progress</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="h-1.5 bg-mutedbg rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    className="h-full rounded-full"
                    style={{ background: item.color }}
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-line flex items-center justify-between">
                <span className="text-xs text-faint">{item.papers} paper{item.papers !== 1 ? "s" : ""}</span>
                <div className="flex gap-1">
                  {[0, 1, 2].map((d) => (
                    <div key={d} className="w-1.5 h-1.5 rounded-full"
                      style={{ background: d < item.papers ? item.color : "var(--bg-muted)" }} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
