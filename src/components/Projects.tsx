import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/content";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-accent-2 text-sm font-medium tracking-widest uppercase mb-3 text-center">Projects</p>
        </Reveal>
        <div className="text-center mb-16">
          <SplitHeading
            as="h2"
            text="Selected work"
            accentWords={["work"]}
            className="font-display text-3xl md:text-4xl font-semibold justify-center flex flex-wrap"
          />
        </div>

        <div className="flex flex-col gap-6">
          {featured && (
            <Reveal>
              <ProjectCard project={featured} />
            </Reveal>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
