import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";
import { experience, education } from "../data/content";
import { GraduationCap, Briefcase } from "lucide-react";

type Entry = {
  key: string;
  title: string;
  org: string;
  period: string;
  points?: string[];
  icon: "work" | "edu";
};

const entries: Entry[] = [
  ...experience.map((e) => ({
    key: `${e.role}-${e.org}`,
    title: e.role,
    org: e.org,
    period: e.period,
    points: e.points,
    icon: "work" as const,
  })),
  ...education.map((e) => ({
    key: `${e.degree}-${e.school}`,
    title: e.degree,
    org: e.school,
    period: e.period,
    icon: "edu" as const,
  })),
];

export function Timeline() {
  return (
    <section id="experience" className="relative py-28 md:py-36 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-accent-2 text-sm font-medium tracking-widest uppercase mb-3 text-center">Experience & Education</p>
        </Reveal>
        <div className="text-center mb-16">
          <SplitHeading
            as="h2"
            text="My path so far"
            accentWords={["path"]}
            className="font-display text-3xl md:text-4xl font-semibold justify-center flex flex-wrap"
          />
        </div>

        <ol className="relative border-l border-border ml-3 md:ml-6">
          {entries.map((entry, i) => (
            <Reveal as="li" key={entry.key} delay={i * 0.06} className="relative pl-8 md:pl-10 pb-12 last:pb-0">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-bg border-2 border-accent flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </span>

              <div className="glass rounded-2xl p-6 hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-center gap-2 text-xs text-accent-2 font-medium tracking-wide uppercase mb-2">
                  {entry.icon === "work" ? <Briefcase size={13} /> : <GraduationCap size={13} />}
                  {entry.period}
                </div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">{entry.title}</h3>
                <p className="text-sm text-muted mb-3">{entry.org}</p>
                {entry.points && (
                  <ul className="space-y-1.5 text-sm text-muted">
                    {entry.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-accent mt-1">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
