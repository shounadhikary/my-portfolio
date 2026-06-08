"use client";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#050810]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Industry certifications and professional credentials"
        />
        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass border border-[#1E2D3D] rounded-2xl p-5 hover:border-cyan-400/30 transition-all group flex items-start gap-4"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>
                {cert.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-slate-100 text-sm leading-snug mb-1">{cert.name}</h3>
                <p className="text-xs font-medium mb-0.5" style={{ color: cert.color }}>{cert.issuer}</p>
                <p className="text-xs text-slate-500 mb-3">by {cert.instructor} · {cert.date}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-600">ID: {cert.credentialId}</span>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink size={11} /> Verify
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
