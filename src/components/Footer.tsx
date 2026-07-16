import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          Built by <span className="text-ink">{profile.name}</span> · {new Date().getFullYear()}
        </p>
        <p>Designed & developed from scratch.</p>
      </div>
    </footer>
  );
}
