"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, GitCommitHorizontal, Code } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { githubStats, personalInfo } from "@/data/portfolio";

interface ContribResponse {
  total: Record<string, number>;
}
interface GhUser {
  public_repos: number;
}
interface GhRepo {
  stargazers_count: number;
  forks_count: number;
}

export function GitHubStats() {
  const username = githubStats.username;

  // Initialised with the manual values from data/portfolio.ts; replaced by live data when available.
  const [stats, setStats] = useState({
    totalRepos: githubStats.totalRepos,
    totalStars: githubStats.totalStars,
    totalForks: githubStats.totalForks,
    contributions: githubStats.contributions2024,
  });

  useEffect(() => {
    let cancelled = false;
    const ac = new AbortController();

    (async () => {
      // 1) Real total contributions for the last 12 months (public, no token required).
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
          { signal: ac.signal },
        );
        if (res.ok) {
          const data: ContribResponse = await res.json();
          const total = data.total?.lastYear ?? Object.values(data.total ?? {})[0];
          if (!cancelled && typeof total === "number") {
            setStats((s) => ({ ...s, contributions: total }));
          }
        }
      } catch {
        /* keep the manual fallback */
      }

      // 2) Real repository / star / fork counts.
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`, { signal: ac.signal });
        if (userRes.ok) {
          const user: GhUser = await userRes.json();
          if (!cancelled && typeof user.public_repos === "number") {
            setStats((s) => ({ ...s, totalRepos: user.public_repos }));
          }
          const reposRes = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
            { signal: ac.signal },
          );
          if (reposRes.ok) {
            const repos: GhRepo[] = await reposRes.json();
            if (!cancelled && Array.isArray(repos)) {
              const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
              const totalForks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);
              setStats((s) => ({ ...s, totalStars, totalForks }));
            }
          }
        }
      } catch {
        /* keep the manual fallback */
      }
    })();

    return () => {
      cancelled = true;
      ac.abort();
    };
  }, [username]);

  const statCards = [
    { icon: GithubIcon, label: "Repositories", value: stats.totalRepos.toLocaleString(), color: "#00D9FF" },
    { icon: Star, label: "Total Stars", value: stats.totalStars.toLocaleString(), color: "#F59E0B" },
    { icon: GitFork, label: "Total Forks", value: stats.totalForks.toLocaleString(), color: "#7C3AED" },
    { icon: GitCommitHorizontal, label: "Contributions", value: stats.contributions.toLocaleString(), color: "#10B981" },
  ];

  return (
    <section id="github" className="py-24 bg-base">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Open Source"
          title="GitHub Dashboard"
          subtitle="Contributing to open source and building in public"
        />

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map(({ icon: Icon, label, value, color }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass border border-line rounded-2xl p-5 text-center hover:border-cyan-400/30 transition-all"
            >
              <Icon size={22} className="mx-auto mb-3" style={{ color }} />
              <div className="font-display text-2xl font-bold text-strong">{value}</div>
              <div className="text-xs text-faint font-mono mt-1">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Language breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-line rounded-2xl p-6"
        >
          <h3 className="font-display font-bold text-strong mb-5 flex items-center gap-2">
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
                <span className="text-sm text-dim font-mono">{lang.name}</span>
                <span className="text-sm text-faint">{lang.percentage}%</span>
              </div>
            ))}
          </div>

          {/* GitHub card embed */}
          <div className="mt-6 pt-5 border-t border-line">
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

      </div>
    </section>
  );
}
