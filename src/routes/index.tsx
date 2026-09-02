import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayush Zade — AI / ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ayush Zade — B.Tech AI & Data Science student building reproducible ML pipelines and MLOps workflows with Python, MLflow, DVC and Docker.",
      },
      { property: "og:title", content: "Ayush Zade — AI / ML Engineer" },
      {
        property: "og:description",
        content:
          "ML systems that hold up under real data — feature pipelines, experiment tracking, and containerized deployment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "7.94", label: "CGPA / 10", bg: "bg-mint-soft", delay: "400ms" },
  { value: "01", label: "Research paper", bg: "bg-sky-soft", delay: "460ms" },
  { value: "02", label: "Certifications", bg: "bg-peach-soft", delay: "520ms" },
  { value: "02", label: "ML projects", bg: "bg-butter-soft", delay: "580ms" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-ink antialiased">
      <SiteNav />
      <main className="mx-auto max-w-5xl px-6">
        <section className="flex min-h-[calc(100vh-4rem)] items-center py-20">
          <div className="w-full">
            <p className="animate-rise mb-6 font-mono text-xs text-sky">( 01 / index — hello, world )</p>
            <h1
              className="animate-rise font-display text-[clamp(3.5rem,11vw,8rem)] leading-[0.92] font-extrabold tracking-tight text-balance"
              style={{ animationDelay: "80ms" }}
            >
              Ayush Zade
            </h1>
            <div className="animate-rise mt-5 flex flex-wrap gap-3" style={{ animationDelay: "160ms" }}>
              <span className="rounded-full bg-ink px-3 py-1.5 font-mono text-xs text-primary-foreground">
                AI / ML Engineer
              </span>
              <span className="rounded-full border border-line bg-mint-soft px-3 py-1.5 font-mono text-xs text-ink">
                Data Science
              </span>
              <span className="rounded-full border border-line bg-butter-soft px-3 py-1.5 font-mono text-xs text-ink">
                SIPNA COLLEGE '27
              </span>
            </div>
            <p
              className="animate-rise mt-7 max-w-[46ch] font-body text-lg text-pretty"
              style={{ animationDelay: "240ms" }}
            >
              I build ML systems that hold up under real data — from feature pipelines to reproducible, deployable
              models with MLOps at the core.
            </p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-2.5" style={{ animationDelay: "320ms" }}>
              <Link
                to="/about"
                hash="contact"
                className="rounded-full bg-sky px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-ink"
              >
                contact me
              </Link>
              <a
                href="https://github.com/ayushzade"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-sky hover:text-ink"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-zade-0326b2333"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-sky hover:text-ink"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-14 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`animate-rise rounded-2xl border border-line p-4 ${stat.bg}`}
                  style={{ animationDelay: stat.delay }}
                >
                  <p className="font-display text-3xl font-extrabold">{stat.value}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="animate-rise mt-14" style={{ animationDelay: "640ms" }}>
              <Link
                to="/projects"
                className="font-mono text-xs text-muted-foreground transition-colors duration-200 hover:text-sky"
              >
                ( 02 / projects — selected work ) →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
