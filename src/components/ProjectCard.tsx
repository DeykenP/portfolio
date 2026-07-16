import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { useRef } from "react";
import { Github, ExternalLink, ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "../data/content";

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const isPlaceholder = (v: string | null) => !v || v.startsWith("[PLACEHOLDER");
  const isPrivate = project.github === "PRIVATE";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative glass rounded-3xl p-7 md:p-9 h-full flex flex-col hover:border-accent/40 transition-colors duration-300 ${
        project.featured ? "lg:p-10" : ""
      }`}
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(168,85,247,0.08), transparent 60%)" }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className={`font-display font-semibold text-ink ${project.featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
            {project.name}
          </h3>
          {project.featured && (
            <span className="text-[10px] uppercase tracking-widest text-accent-2 border border-accent-2/30 rounded-full px-2.5 py-1 shrink-0 ml-3">
              Featured
            </span>
          )}
        </div>

        <p className="text-muted text-sm md:text-base mb-5">{project.description}</p>

        <div className="space-y-3 mb-6 text-sm">
          <p><span className="text-accent-2 font-medium">Problem — </span><span className="text-muted">{project.problem}</span></p>
          <p><span className="text-accent-2 font-medium">Solution — </span><span className="text-muted">{project.solution}</span></p>
        </div>

        <ul className="space-y-1.5 mb-6 text-sm text-muted">
          {project.result.map((r) => (
            <li key={r} className="flex gap-2">
              <span className="text-accent mt-1">▹</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted border border-border">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-5 pt-2">
          {isPrivate ? (
            <span
              data-cursor-hover
              title="Closed-source — proprietary client/commercial code"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted"
            >
              <Lock size={14} /> Private repo
            </span>
          ) : (
            <a
              href={isPlaceholder(project.github) ? undefined : project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              aria-label={`${project.name} GitHub repository`}
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isPlaceholder(project.github) ? "text-muted/50 cursor-not-allowed" : "text-ink hover:text-accent"
              }`}
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.demo !== null && (
            <a
              href={isPlaceholder(project.demo) ? undefined : project.demo}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              aria-label={`${project.name} live demo`}
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isPlaceholder(project.demo) ? "text-muted/50 cursor-not-allowed" : "text-ink hover:text-accent"
              }`}
            >
              <ExternalLink size={16} /> Live demo
            </a>
          )}
          <ArrowUpRight size={16} className="ml-auto text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </div>
    </motion.div>
  );
}
