import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";
import { MagneticButton } from "./MagneticButton";
import { Marquee } from "./Marquee";
import { profile, skills } from "../data/content";

const tickerItems = skills.flatMap((g) => g.skills).slice(0, 14);

const nameWords = profile.name.split(" ");

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="top" className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-2/20 blur-[100px] animate-blob" style={{ animationDelay: "-6s" }} />
        <HeroCanvas />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full pl-3 pr-4 py-1.5 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
          </span>
          <span className="text-xs md:text-sm text-muted tracking-wide">Open to full-stack & freelance work</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm md:text-base text-accent-2 font-medium tracking-wide mb-4"
        >
          {profile.location}
        </motion.p>

        <h1 className="font-display font-semibold text-[13vw] leading-[0.95] sm:text-7xl md:text-8xl tracking-tight mb-6">
          {nameWords.map((word, wi) => (
            <span key={wi} className="inline-block overflow-hidden align-top mr-4 last:mr-0">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.3 + wi * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="h-9 md:h-11 flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl font-display text-gradient font-medium"
            >
              {profile.roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-xl mx-auto text-muted text-base md:text-lg mb-10"
        >
          Building clean, scalable web applications that turn real business problems into{" "}
          <span className="font-accent italic text-ink text-lg md:text-xl">working software.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            as="button"
            onClick={() => scrollTo("projects")}
            className="px-7 py-3.5 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            View my work
          </MagneticButton>
          <MagneticButton
            as="button"
            onClick={() => scrollTo("contact")}
            className="px-7 py-3.5 rounded-full glass text-ink font-medium text-sm hover:border-accent/50 transition-colors"
          >
            Contact me
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="relative z-10 w-full mt-16 md:mt-20"
      >
        <Marquee items={tickerItems} />
      </motion.div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-muted hover:text-ink transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
