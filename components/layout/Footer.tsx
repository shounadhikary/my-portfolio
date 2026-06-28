"use client";
import { motion } from "framer-motion";
import { Mail, Heart, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-base border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold font-display text-white"
                style={{ background: "linear-gradient(135deg, #00D9FF, #7C3AED)" }}>
                SA
              </div>
              <span className="font-display font-semibold text-strong">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-faint leading-relaxed text-justify hyphens-auto">
              CSE Student · AI/ML Researcher<br />Building intelligent systems.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-mono text-faint uppercase tracking-wider mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-dim hover:text-cyan-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-mono text-faint uppercase tracking-wider mb-4">Connect</p>
            <div className="flex gap-3">
              {[
                { href: personalInfo.social.github, icon: GithubIcon, label: "GitHub" },
                { href: personalInfo.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl glass border border-line flex items-center justify-center text-dim hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <a href={personalInfo.resumeUrl} download
              className="mt-4 flex items-center gap-1.5 text-xs text-faint hover:text-cyan-400 transition-colors">
              <ExternalLink size={12} /> Download Resume
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-faint font-mono">
            © {new Date().getFullYear()} {personalInfo.name} · All rights reserved
          </p>
          <p className="text-xs text-faint flex items-center gap-1">
            Built with <Heart size={10} className="text-red-400" /> using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
