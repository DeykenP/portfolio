import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";
import { skills } from "../data/content";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-accent-2 text-sm font-medium tracking-widest uppercase mb-3 text-center">Skills</p>
        </Reveal>
        <div className="text-center mb-16">
          <SplitHeading
            as="h2"
            text="Tools I build with"
            accentWords={["build"]}
            className="font-display text-3xl md:text-4xl font-semibold justify-center flex flex-wrap"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.08}>
              <div className="glass rounded-2xl p-6 h-full hover:border-accent/40 transition-colors duration-300">
                <h3 className="font-display text-lg font-medium mb-4 text-ink">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-border text-muted hover:text-ink hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
