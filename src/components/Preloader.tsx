import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => setLoading(false), reduceMotion ? 200 : 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden"
          >
            <span className="font-display text-3xl md:text-4xl tracking-tight text-ink">
              DP<span className="text-accent">.</span>
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
