"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skills } from "@/data/portfolio";

type SkillCategory = keyof typeof skills;

const categories: { key: SkillCategory; label: string; color: string }[] = [
  { key: "programming", label: "Programming", color: "#00D9FF" },
  { key: "aiml", label: "AI / ML", color: "#7C3AED" },
  { key: "frameworks", label: "Frameworks", color: "#10B981" },
  { key: "webDev", label: "Web Dev", color: "#F59E0B" },
  { key: "tools", label: "Tools", color: "#EF4444" },
  { key: "databases", label: "Databases", color: "#06B6D4" },
];

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("programming");

  const activeCategory = categories.find((c) => c.key === active)!;

  return (
    <section id="skills" className="py-24 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="What I Know"
          title="Technical Skills"
          subtitle="A comprehensive toolkit built through projects, research, and continuous learning"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(({ key, label, color }) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium font-mono transition-all duration-200 border ${
                active === key
                  ? "text-white border-transparent"
                  : "glass border-[#1E2D3D] text-slate-400 hover:text-slate-200"
              }`}
              style={active === key ? { background: color, boxShadow: `0 0 20px ${color}40` } : {}}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Skill cards */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills[active].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass border border-[#1E2D3D] rounded-2xl p-5 hover:border-cyan-400/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-display font-semibold text-slate-200">{skill.name}</span>
                </div>
                <span className="font-mono text-sm text-slate-500">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-[#1A2332] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.06 + 0.2, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${activeCategory.color}, ${activeCategory.color}80)`,
                    boxShadow: `0 0 8px ${activeCategory.color}60`,
                  }}
                />
              </div>

              {/* Level label */}
              <div className="mt-3 flex justify-between items-center">
                <span className="text-xs font-mono"
                  style={{ color: activeCategory.color }}>
                  {skill.level >= 90 ? "Expert" : skill.level >= 75 ? "Advanced" : skill.level >= 60 ? "Intermediate" : "Beginner"}
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div
                      key={dot}
                      className="w-1.5 h-1.5 rounded-full transition-all"
                      style={{
                        background: dot <= Math.ceil(skill.level / 20)
                          ? activeCategory.color
                          : "#1A2332",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
