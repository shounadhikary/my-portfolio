"use client";
import { motion } from "framer-motion";
import { Star, GitFork, GitCommitHorizontal, Code } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { githubStats, personalInfo } from "@/data/portfolio";

export function GitHubStats() {
  return (
    <section id="github" className="py-24 bg-[#050810]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Open Source"
          title="GitHub Dashboard"
          subtitle="Contributing to open source and building in public"
        />

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: GithubIcon, label: "Repositories", value: githubStats.totalRepos, color: "#00D9FF" },
            { icon: Star, label: "Total Stars", value: githubStats.totalStars.toLocaleString(), color: "#F59E0B" },
            { icon: GitFork, label: "Total Forks", value: githubStats.totalForks, color: "#7C3AED" },
            { icon: GitCommitHorizontal, label: "Commits '24", value: githubStats.contributions2024, color: "#10B981" },
          ].map(({ icon: Icon, label, value, color }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass border border-[#1E2D3D] rounded-2xl p-5 text-center hover:border-cyan-400/30 transition-all"
            >
              <Icon size={22} className="mx-auto mb-3" style={{ color }} />
              <div className="font-display text-2xl font-bold text-slate-100">{value}</div>
              <div className="text-xs text-slate-500 font-mono mt-1">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Language breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-[#1E2D3D] rounded-2xl p-6"
        >
          <h3 className="font-display font-bold text-slate-100 mb-5 flex items-center gap-2">
            <Code size={18} className="text-cyan-400" /> Language Distribution
          </h3>

          {/* Bar */}
          <div className="h-4 rounded-full overflow-hidden flex mb-5">
            {githubStats.languages.map((lang) => (
              <motion.div
                key={lang.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full"
                style={{ background: lang.color }}
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {githubStats.languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: lang.color }} />
                <span className="text-sm text-slate-400 font-mono">{lang.name}</span>
                <span className="text-sm text-slate-600">{lang.percentage}%</span>
              </div>
            ))}
          </div>

          {/* GitHub card embed */}
          <div className="mt-6 pt-5 border-t border-[#1E2D3D]">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex text-sm"
            >
              <GithubIcon size={15} />
              Visit GitHub Profile
            </a>
          </div>
        </motion.div>

        {/* Contribution graph placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 glass border border-[#1E2D3D] rounded-2xl p-6"
        >
          <p className="text-xs font-mono text-slate-500 mb-3">2024 Contribution Activity</p>
          <div className="grid grid-cols-[repeat(52,1fr)] gap-1">
            {Array.from({ length: 364 }).map((_, i) => {
              const intensity = Math.random();
              const color =
                intensity > 0.8 ? "#00D9FF"
                : intensity > 0.6 ? "#00D9FF99"
                : intensity > 0.4 ? "#00D9FF55"
                : intensity > 0.2 ? "#00D9FF22"
                : "#1A2332";
              return (
                <div
                  key={i}
                  className="aspect-square rounded-[2px] transition-colors"
                  style={{ background: color }}
                />
              );
            })}
          </div>
          <p className="text-xs text-slate-600 font-mono mt-2">{githubStats.contributions2024} contributions in 2024</p>
        </motion.div>
      </div>
    </section>
  );
}
