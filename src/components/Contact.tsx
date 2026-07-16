import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";
import { MagneticButton } from "./MagneticButton";
import { profile } from "../data/content";

const isPlaceholder = (v: string) => v.startsWith("[PLACEHOLDER");

const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-accent-2 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
        </Reveal>
        <div className="mb-6 flex justify-center">
          <SplitHeading
            as="h2"
            text="Let's build something real."
            accentWords={["real"]}
            className="font-display text-4xl md:text-6xl font-semibold tracking-tight justify-center flex flex-wrap"
          />
        </div>
        <Reveal delay={0.1}>
          <p className="text-muted text-base md:text-lg mb-10 max-w-xl mx-auto">
            I'm open to full-stack roles and freelance work. Reach out and I'll get back to you as soon as I can.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <MagneticButton
            as="a"
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-medium text-base hover:bg-accent/90 transition-colors shadow-[0_0_30px_rgba(168,85,247,0.35)] mb-12"
          >
            <Mail size={18} /> {profile.email}
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-4">
            {socials.map((social) => {
              const disabled = isPlaceholder(social.href);
              return (
                <a
                  key={social.label}
                  href={disabled ? undefined : social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  aria-label={social.label}
                  className={`group relative flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium transition-colors ${
                    disabled ? "text-muted/50 cursor-not-allowed" : "text-ink hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  <social.icon size={16} />
                  {social.label}
                  {!disabled && (
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  )}
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
