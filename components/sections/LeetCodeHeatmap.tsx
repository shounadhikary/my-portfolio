"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { leetcodeStats } from "@/data/portfolio";

interface Day {
  date?: string;
  count?: number;
  level: number;
}

// LeetCode-style scale: gray empty cell + four shades of green.
const GREEN = ["var(--bg-muted)", "#1f6b3a", "#2a8f4d", "#36b35f", "#4ade80"];
const levelFor = (count: number) =>
  count <= 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 10 ? 3 : 4;

// Deterministic, dateless fallback for SSR / first paint (sparse, like a real calendar).
const FALLBACK: Day[] = Array.from({ length: 371 }, (_, i) => {
  const r = ((Math.sin(i * 91.7) * 6271.13) % 1 + 1) % 1;
  return { level: r > 0.96 ? 4 : r > 0.92 ? 3 : r > 0.88 ? 2 : r > 0.82 ? 1 : 0 };
});

const ymd = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

// Build the last ~53 weeks (Sun-aligned) of days from LeetCode's { unixSeconds: count } calendar.
function buildFromCalendar(cal: Record<string, number>): Day[] {
  const byDate = new Map<string, number>();
  for (const [ts, c] of Object.entries(cal)) {
    const key = ymd(new Date(Number(ts) * 1000));
    byDate.set(key, (byDate.get(key) ?? 0) + (c || 0));
  }
  const days: Day[] = [];
  const end = new Date();
  end.setHours(0, 0, 0, 0);
  const start = new Date(end);
  start.setDate(start.getDate() - 370);
  start.setDate(start.getDate() - start.getDay()); // back up to Sunday
  for (const d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const count = byDate.get(ymd(d)) ?? 0;
    days.push({ date: ymd(d), count, level: levelFor(count) });
  }
  return days;
}

export function LeetCodeHeatmap() {
  const [days, setDays] = useState<Day[]>(FALLBACK);
  const [live, setLive] = useState(false);
  const [meta, setMeta] = useState({
    submissions: leetcodeStats.submissionsLastYear,
    activeDays: leetcodeStats.activeDays,
    maxStreak: leetcodeStats.maxStreak,
  });

  useEffect(() => {
    let cancelled = false;
    const ac = new AbortController();
    (async () => {
      try {
        const res = await fetch(
          `https://leetcode-api-faisalshohag.vercel.app/${leetcodeStats.username}`,
          { signal: ac.signal },
        );
        if (!res.ok) return;
        const data = await res.json();
        if (cancelled || !data?.submissionCalendar) return;

        const built = buildFromCalendar(data.submissionCalendar);
        const submissions = built.reduce((s, d) => s + (d.count ?? 0), 0);
        const activeDays = built.filter((d) => (d.count ?? 0) > 0).length;
        let maxStreak = 0;
        let cur = 0;
        for (const d of built) {
          if ((d.count ?? 0) > 0) {
            cur += 1;
            maxStreak = Math.max(maxStreak, cur);
          } else {
            cur = 0;
          }
        }
        setDays(built);
        setMeta({ submissions, activeDays, maxStreak });
        setLive(true);
      } catch {
        /* keep the manual fallback */
      }
    })();
    return () => {
      cancelled = true;
      ac.abort();
    };
  }, []);

  // Build Sun→Sat week columns + centered month labels (only once we have dated data).
  const dated = days.length > 0 && !!days[0].date;
  const weeks: (Day | null)[][] = [];
  const monthSpans: { start: number; end: number; label: string }[] = [];
  if (dated) {
    const firstDow = new Date(days[0].date + "T00:00:00").getDay();
    const padded: (Day | null)[] = [...Array(firstDow).fill(null), ...days];
    for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));

    weeks.forEach((wk, col) => {
      const first = wk.find((d) => d?.date);
      if (!first?.date) return;
      const label = new Date(first.date + "T00:00:00").toLocaleString("en-US", { month: "short" });
      const last = monthSpans[monthSpans.length - 1];
      if (last && last.label === label) last.end = col;
      else monthSpans.push({ start: col, end: col, label });
    });
  }

  // Row-major flatten so a responsive `1fr` grid renders weeks as columns and fills the card width.
  const cells: (Day | null)[] = [];
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < weeks.length; col++) cells.push(weeks[col]?.[row] ?? null);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8 glass border border-line rounded-2xl p-6"
    >
      {/* Header - matches LeetCode's submission calendar header */}
      <div className="flex items-center justify-between flex-wrap gap-y-2 mb-4">
        <div className="flex items-center gap-1.5">
          <span className="font-display text-lg font-bold text-strong">{meta.submissions}</span>
          <span className="text-sm text-dim">submissions in the past one year</span>
          <Info size={13} className="text-faint" />
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-faint">
          <span>
            Total active days: <span className="text-dim">{meta.activeDays}</span>
          </span>
          <span>
            Max streak: <span className="text-dim">{meta.maxStreak}</span>
          </span>
          {live && (
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> live
            </span>
          )}
        </div>
      </div>

      {dated ? (
        <>
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}>
            {cells.map((d, i) =>
              d ? (
                <div
                  key={d.date ?? i}
                  className="aspect-square rounded-[2px] transition-colors"
                  style={{ background: GREEN[d.level] ?? GREEN[0] }}
                  title={`${d.count ?? 0} submissions on ${d.date}`}
                />
              ) : (
                <div key={`pad-${i}`} className="aspect-square" />
              ),
            )}
          </div>
          {/* Month labels below the grid, centered under each month's columns */}
          <div
            className="grid gap-1 mt-2 text-[10px] font-mono text-faint"
            style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}
          >
            {monthSpans.map((ms, idx) => (
              <span
                key={`${ms.label}-${idx}`}
                className="text-center whitespace-nowrap overflow-visible"
                style={{ gridColumnStart: ms.start + 1, gridColumnEnd: ms.end + 2 }}
              >
                {ms.label}
              </span>
            ))}
          </div>
        </>
      ) : (
        // Fallback (pre-load / offline): dateless grid, still fills width.
        <div className="grid grid-flow-col gap-1" style={{ gridTemplateRows: "repeat(7, 1fr)", gridAutoColumns: "1fr" }}>
          {days.map((d, i) => (
            <div
              key={i}
              className="aspect-square rounded-[2px] transition-colors"
              style={{ background: GREEN[d.level] ?? GREEN[0] }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
