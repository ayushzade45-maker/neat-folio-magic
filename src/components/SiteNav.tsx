import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to="/" className="font-mono text-xs">
          <span className="text-sky">[</span>ayush.zade<span className="text-ink">]</span>
          <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-sky align-[-3px]" />
          <span className="text-muted-foreground"> ~/portfolio</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors duration-200 hover:bg-sky-soft hover:text-ink"
              activeProps={{ className: "bg-ink text-primary-foreground hover:bg-ink hover:text-primary-foreground" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/about"
            hash="contact"
            className="ml-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs transition-colors duration-200 hover:border-sky hover:text-sky"
          >
            contact ↗
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-8 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>ayush.zade — AI / ML</span>
        <span>built on a quiet lab desk</span>
      </div>
    </footer>
  );
}
