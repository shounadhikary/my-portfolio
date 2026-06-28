"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, GitFork } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/portfolio";

const categories = ["All", "AI", "ML", "Research", "Web"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="What I've Built"
          title="Projects"
          subtitle="A curated selection of my best work spanning AI, ML, research, and web development"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium font-mono transition-all border ${
                activeFilter === cat
                  ? "text-white border-transparent"
                  : "glass border-line text-dim hover:text-strong"
              }`}
              style={activeFilter === cat
                ? { background: "linear-gradient(135deg, #00D9FF, #7C3AED)", boxShadow: "0 0 20px rgba(0,217,255,0.3)" }
                : {}}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group glass border border-line rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
              >
                {/* Image / gradient header */}
                <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="relative text-5xl font-display font-bold text-white/20">
                    {project.title[0]}
                  </span>
                  {project.featured && (
                    <div className="absolute top-3 left-3 text-xs font-mono px-2 py-1 rounded-full bg-black/40 text-yellow-300 border border-yellow-400/30">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="absolute top-3 right-3 text-xs font-mono px-2 py-1 rounded-full bg-black/40 text-white">
                    {project.category}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                      <GithubIcon size={16} />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-strong text-base leading-snug">{project.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-faint flex-shrink-0">
                      <span className="flex items-center gap-1"><Star size={12} className="text-yellow-400" /> {project.stats.stars}</span>
                      <span className="flex items-center gap-1"><GitFork size={12} /> {project.stats.forks}</span>
                    </div>
                  </div>

                  <p className="text-dim text-sm leading-relaxed mb-4 line-clamp-3 text-justify hyphens-auto">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded-md text-faint border border-line bg-mutedbg">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded-md text-faint border border-line">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-3 border-t border-line">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-dim hover:text-cyan-400 transition-colors">
                      <GithubIcon size={13} /> GitHub
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-dim hover:text-cyan-400 transition-colors">
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shounadhikary"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <GithubIcon size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
