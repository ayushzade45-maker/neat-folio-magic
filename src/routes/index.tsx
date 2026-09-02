import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { SkillsMarquee } from "@/components/Marquee";


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
  { value: "7.94", label: "CGPA / 10", bg: "bg-mint-soft", rotate: "-rotate-2", delay: "400ms" },
  { value: "01", label: "Research paper", bg: "bg-sky-soft", rotate: "rotate-1", delay: "460ms" },
  { value: "02", label: "Certifications", bg: "bg-peach-soft", rotate: "-rotate-1", delay: "520ms" },
  { value: "02", label: "ML projects", bg: "bg-butter-soft", rotate: "rotate-2", delay: "580ms" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-ink antialiased">
      <SiteNav />
      <main>
        <section className="bg-grid-paper">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
            <div>
              <p className="animate-rise font-mono text-xs text-sky">( 01 / index — hello, world )</p>
              <h1
                className="animate-rise mt-6 font-display text-[clamp(3.2rem,10vw,6.5rem)] leading-[0.92] font-extrabold tracking-tight text-balance"
                style={{ animationDelay: "80ms" }}
              >
                Ayush <span className="underline-wavy">Zade</span>
              </h1>
              <div className="animate-rise mt-6 flex flex-wrap gap-3" style={{ animationDelay: "160ms" }}>
                <span className="animate-wiggle rounded-full bg-ink px-3 py-1.5 font-mono text-xs text-primary-foreground">
                  AI / ML Engineer
                </span>
                <span className="-rotate-2 rounded-full border border-line bg-mint-soft px-3 py-1.5 font-mono text-xs text-ink">
                  Data Science
                </span>
                <span className="rotate-2 rounded-full border border-line bg-butter-soft px-3 py-1.5 font-mono text-xs text-ink">
                  SIPNA COLLEGE '27
                </span>
              </div>
              <p
                className="animate-rise mt-7 max-w-[46ch] font-body text-lg text-pretty"
                style={{ animationDelay: "240ms" }}
              >
                I build ML systems that hold up under real data — from feature pipelines to reproducible, deployable
                models with <span className="font-semibold text-sky">MLOps at the core</span>.
              </p>
              <div
                className="animate-rise mt-10 flex flex-wrap items-center gap-2.5"
                style={{ animationDelay: "320ms" }}
              >
                <Link
                  to="/about"
                  hash="contact"
                  className="rounded-full bg-sky px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_6px_0_0_var(--color-ink)] transition-all duration-200 hover:translate-y-0.5 hover:bg-ink hover:shadow-none"
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
              <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`animate-rise rounded-2xl border border-line p-4 transition-transform duration-300 hover:rotate-0 hover:scale-105 ${stat.bg} ${stat.rotate}`}
                    style={{ animationDelay: stat.delay }}
                  >
                    <p className="font-display text-3xl font-extrabold">{stat.value}</p>
                    <p className="mt-1 font-mono text-[11px] text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-rise relative mx-auto w-full max-w-sm" style={{ animationDelay: "240ms" }}>
              <div className="absolute -top-4 -left-4 z-10 -rotate-6 rounded-full bg-ink px-4 py-2 font-mono text-[11px] text-primary-foreground shadow-md">
                open to internships ✦
              </div>
              <div
                className="absolute -right-3 -bottom-3 z-10 rotate-3 rounded-xl border border-line bg-peach-soft px-3 py-2 font-mono text-[11px] text-ink shadow-sm"
              >
                model.fit(data)
              </div>
              <div className="animate-float rotate-2 rounded-3xl border border-line bg-card p-3 shadow-xl" style={{ ["--float-rotate" as string]: "2deg" }}>
                <img
                  src={sculpture}
                  alt="Pastel 3D sculpture of a neural network — Ayush's ML world"
                  width={1024}
                  height={1024}
                  className="w-full rounded-2xl"
                />
                <div className="flex items-center justify-between px-2 pt-3 pb-1 font-mono text-[11px] text-muted-foreground">
                  <span>fig. 01 — the network</span>
                  <span className="text-sky">epoch ∞</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SkillsMarquee />

        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-sky">next up</p>
              <p className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Two systems, trained & shipped.
              </p>
            </div>
            <Link
              to="/projects"
              className="group rounded-full border border-line px-4 py-2.5 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:border-sky hover:text-sky"
            >
              ( 02 / projects ) <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
