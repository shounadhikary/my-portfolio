"use client";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, FileText, GraduationCap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { publications } from "@/data/portfolio";

const typeIcons: Record<string, React.ElementType> = {
  "Workshop Paper": FileText,
  "Journal Article": BookOpen,
  "Thesis": GraduationCap,
};

const statusColors: Record<string, string> = {
  Published: "#10B981",
  "Under Review": "#F59E0B",
  "In Progress": "#7C3AED",
};

export function Publications() {
  return (
    <section id="publications" className="py-24 bg-[#0D1117]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Academic Output"
          title="Publications"
          subtitle="Peer-reviewed research contributions to the AI/ML community"
        />

        <div className="space-y-6">
          {publications.map((pub, i) => {
            const Icon = typeIcons[pub.type] ?? FileText;
            return (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass border border-[#1E2D3D] rounded-2xl p-6 hover:border-cyan-400/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display font-bold text-slate-100 text-base leading-snug group-hover:text-cyan-400 transition-colors">
                        {pub.title}
                      </h3>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{
                          color: statusColors[pub.status],
                          background: `${statusColors[pub.status]}15`,
                          border: `1px solid ${statusColors[pub.status]}30`,
                        }}>
                        {pub.status}
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 mb-1">{pub.authors}</p>
                    <p className="text-sm text-cyan-400/80 font-medium mb-2">{pub.venue}</p>
                    <p className="text-xs text-slate-500 mb-4">{pub.abstract}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {pub.tags.map((tag) => (
                          <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded-md text-slate-500 border border-[#1E2D3D] bg-[#1A2332]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="font-mono">{pub.year}</span>
                        {pub.link && (
                          <a href={pub.link} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                            <ExternalLink size={12} /> View
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
