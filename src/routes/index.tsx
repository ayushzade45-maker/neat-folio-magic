import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { SkillsMarquee } from "@/components/Marquee";
import ayushAsset from "@/assets/ayush.jpeg.asset.json";

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
          <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-24">
            <p className="animate-rise font-mono text-xs text-sky">( 01 / index — hello, world )</p>
            <div
              className="animate-rise mx-auto mt-6 w-fit -rotate-2"
              style={{ animationDelay: "60ms" }}
            >
              <div className="animate-float rounded-2xl border border-line bg-card p-2.5 shadow-xl" style={{ ["--float-rotate" as string]: "-2deg" }}>
                <img
                  src={ayushAsset.url}
                  alt="Ayush Zade"
                  width={240}
                  height={300}
                  className="mx-auto aspect-[4/5] w-40 rounded-xl object-cover sm:w-44"
                />
                <p className="mt-2 text-center font-mono text-[11px] text-muted-foreground">
                  fig. 00 — ayush
                </p>
              </div>
            </div>
            <h1
              className="animate-rise mt-8 font-display text-[clamp(3.2rem,10vw,6.5rem)] leading-[0.92] font-extrabold tracking-tight text-balance"
              style={{ animationDelay: "80ms" }}
            >

              Ayush <span className="underline-wavy">Zade</span>
            </h1>
            <div className="animate-rise mt-6 flex flex-wrap justify-center gap-3" style={{ animationDelay: "160ms" }}>
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
              className="animate-rise mx-auto mt-7 max-w-[46ch] font-body text-lg text-pretty"
              style={{ animationDelay: "240ms" }}
            >
              I build ML systems that hold up under real data — from feature pipelines to reproducible, deployable
              models with <span className="font-semibold text-sky">MLOps at the core</span>.
            </p>
            <div
              className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-2.5"
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
            <div className="animate-rise mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4" style={{ animationDelay: "400ms" }}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl border border-line p-4 transition-transform duration-300 hover:rotate-0 hover:scale-105 ${stat.bg} ${stat.rotate}`}
                >
                  <p className="font-display text-3xl font-extrabold">{stat.value}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
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
