"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { timeline } from "@/data/portfolio";

export function ResearchTimeline() {
  return (
    <section id="timeline" className="py-24 bg-[#0D1117]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="My Story"
          title="Journey Timeline"
          subtitle="From first lines of code to AI research — the milestones that defined my path"
        />

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-violet-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`glass border border-[#1E2D3D] rounded-2xl p-5 hover:border-cyan-400/30 transition-all ${
                    i % 2 === 0 ? "md:mr-0" : "md:ml-0"
                  }`}>
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-mono text-sm font-bold" style={{ color: item.color }}>{item.year}</span>
                    </div>
                    <h3 className="font-display font-bold text-slate-100 mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 items-center justify-center top-6"
                  style={{ background: item.color, borderColor: item.color, boxShadow: `0 0 12px ${item.color}60` }} />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
