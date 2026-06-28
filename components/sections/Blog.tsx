"use client";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Eye } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { blogs } from "@/data/portfolio";
import { personalInfo } from "@/data/portfolio";

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Knowledge Sharing"
          title="Technical Blog"
          subtitle="Writing about AI, ML, and software engineering to share knowledge with the community"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogs.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass border border-line rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all group"
            >
              {/* Card header gradient */}
              <div className={`h-36 bg-gradient-to-br ${post.gradient} relative flex items-end p-3`}>
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-black/40 text-white font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-bold text-strong text-sm leading-snug mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-faint leading-relaxed mb-3 line-clamp-2 text-justify hyphens-auto">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-faint">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                    <span className="flex items-center gap-1"><Eye size={10} /> {post.views}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs text-cyan-400 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={12} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href={personalInfo.social.medium} target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-flex">
            View All Articles <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
