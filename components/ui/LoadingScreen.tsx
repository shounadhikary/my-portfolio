"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050810]"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Logo */}
            <div className="w-20 h-20 mx-auto mb-8 relative">
              <div className="absolute inset-0 rounded-2xl rotate-45 bg-gradient-to-br from-cyan-400 to-violet-600 animate-pulse" />
              <div className="absolute inset-[3px] rounded-xl rotate-45 bg-[#050810] flex items-center justify-center">
                <span className="font-display text-2xl font-bold gradient-text -rotate-45">SA</span>
              </div>
            </div>

            <p className="font-mono text-sm text-slate-500 mb-6 tracking-widest uppercase">
              Initializing portfolio...
            </p>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #00D9FF, #7C3AED)" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="font-mono text-xs text-slate-600 mt-2">{Math.min(Math.round(progress), 100)}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
