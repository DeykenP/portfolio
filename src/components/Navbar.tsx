import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between" aria-label="Primary">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("top");
          }}
          className="font-display text-lg font-semibold tracking-tight"
          data-cursor-hover
        >
          DP<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                data-cursor-hover
                className={`relative text-sm transition-colors py-1 ${
                  active === link.id ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-px bg-accent"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          data-cursor-hover
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`text-base ${active === link.id ? "text-accent" : "text-muted"}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
