import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";
import { profile, quickFacts } from "../data/content";
import photo from "../assets/deyken-photo.png";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20 items-center">
        <Reveal>
          <div className="relative mx-auto md:mx-0 w-64 h-64 md:w-80 md:h-80">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent to-accent-2 opacity-40 blur-xl" />
            <div className="relative w-full h-full rounded-3xl glass overflow-hidden">
              <img
                src={photo}
                alt={profile.name}
                className="w-full h-full object-cover"
                loading="lazy"
                width={320}
                height={320}
              />
              <div className="absolute inset-0 rounded-3xl border border-accent/30" />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-accent-2 text-sm font-medium tracking-widest uppercase mb-3">About</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text={`A little about ${profile.name.split(" ")[0]}`}
            accentWords={[profile.name.split(" ")[0]]}
            className="font-display text-3xl md:text-4xl font-semibold mb-6"
          />
          <Reveal delay={0.1}>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-10">{profile.bio}</p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {quickFacts.map((fact, i) => (
              <Reveal key={fact.label} delay={0.15 + i * 0.05}>
                <div className="glass rounded-2xl p-4">
                  <p className="text-xs text-muted uppercase tracking-wide mb-1">{fact.label}</p>
                  <p className="text-sm font-medium text-ink">{fact.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
