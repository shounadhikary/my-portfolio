"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { LeetCodeHeatmap } from "@/components/sections/LeetCodeHeatmap";
import { leetcodeStats, personalInfo } from "@/data/portfolio";
import { ExternalLink, Zap, Target, Flame } from "lucide-react";

export function LeetCode() {
  const solvedPercentage =
    (leetcodeStats.totalSolved / (leetcodeStats.totalEasy + leetcodeStats.totalMedium + leetcodeStats.totalHard)) * 100;

  return (
    <section id="leetcode" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Competitive Programming"
          title="Coding Profile"
          subtitle="Sharpening problem-solving skills through competitive programming"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Main stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass border border-line rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-strong text-lg">LeetCode Status</h3>
              <a href={personalInfo.social.leetcode} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                <ExternalLink size={12} /> Profile
              </a>
            </div>

            {/* Circle progress */}
            <div className="flex items-center gap-6 mb-6">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg-muted)" strokeWidth="8" />
                  <motion.circle
                    cx="50" cy="50" r="40" fill="none" stroke="url(#grad)" strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - solvedPercentage / 100) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00D9FF" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-2xl font-bold text-strong">{leetcodeStats.totalSolved}</span>
                  <span className="text-xs text-faint">solved</span>
                </div>
              </div>

              <div className="space-y-3 flex-1">
                {[
                  { label: "Easy", solved: leetcodeStats.easySolved, total: leetcodeStats.totalEasy, color: "#10B981" },
                  { label: "Medium", solved: leetcodeStats.mediumSolved, total: leetcodeStats.totalMedium, color: "#F59E0B" },
                  { label: "Hard", solved: leetcodeStats.hardSolved, total: leetcodeStats.totalHard, color: "#EF4444" },
                ].map(({ label, solved, total, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span style={{ color }}>{label}</span>
                      <span className="text-faint font-mono">{solved}/{total}</span>
                    </div>
                    <div className="h-1.5 bg-mutedbg rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(solved / total) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {leetcodeStats.badges.map((badge) => (
                <span key={badge} className="text-xs font-mono px-2.5 py-1 rounded-full text-yellow-400 border border-yellow-400/30 bg-yellow-400/10">
                  🏅 {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Contest stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { icon: Target, label: "Global Ranking", value: `#${leetcodeStats.ranking.toLocaleString()}`, color: "#00D9FF" },
              { icon: Zap, label: "Contest Rating", value: leetcodeStats.contestRating, color: "#7C3AED" },
              { icon: Zap, label: "Max Rating", value: leetcodeStats.maxRating, color: "#F59E0B" },
              { icon: Flame, label: "Current Streak", value: `${leetcodeStats.streak} days`, color: "#10B981" },
            ].map(({ icon: Icon, label, value, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass border border-line rounded-2xl p-5 flex items-center gap-4 hover:border-cyan-400/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs text-faint font-mono">{label}</div>
                  <div className="font-display text-xl font-bold text-strong">{value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Submission calendar (LeetCode-style heatmap) */}
        <LeetCodeHeatmap />
      </div>
    </section>
  );
}
