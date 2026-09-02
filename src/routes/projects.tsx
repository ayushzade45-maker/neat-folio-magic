import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ayush Zade" },
      {
        name: "description",
        content:
          "Selected ML work by Ayush Zade: an end-to-end ML & MLOps platform (MLflow, DVC, Docker, NLP) and a production-ready student performance prediction system.",
      },
      { property: "og:title", content: "Projects — Ayush Zade" },
      {
        property: "og:description",
        content: "Reproducible ML pipelines, MLOps workflows, and containerized model deployments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "End-to-End ML & MLOps Platform",
    badge: "flagship",
    bg: "bg-mint-soft",
    hoverBorder: "hover:border-mint",
    blurb:
      "A reproducible pipeline that trains, validates, version-controls and ships an NLP model — ready for production.",
    bullets: [
      {
        head: "Reproducible runs",
        body: "MLflow experiment tracking and DVC data versioning — 100% reproducibility across experiments.",
      },
      {
        head: "One-command deploy",
        body: "Streamlit/Flask interfaces containerized with Docker for standardized production monitoring.",
      },
    ],
    tags: ["Python", "MLflow", "DVC", "Docker", "NLP"],
    link: "https://github.com/ayushzade",
  },
  {
    title: "Student Performance Prediction System",
    badge: "model",
    bg: "bg-sky-soft",
    hoverBorder: "hover:border-sky",
    blurb:
      "A production-ready predictive system forecasting student outcomes from demographic and academic features.",
    bullets: [
      {
        head: "Modular pipelines",
        body: "Custom Python modules for automated data transformation, logging, and exception handling.",
      },
      {
        head: "Tuned & containerized",
        body: "Scikit-learn hyperparameter tuning improving evaluation metrics before Docker deployment.",
      },
    ],
    tags: ["Python", "Scikit-learn", "Docker", "Flask"],
    link: "https://github.com/ayushzade",
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-background font-body text-ink antialiased">
      <SiteNav />
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-24">
          <p className="animate-rise font-mono text-xs text-sky">( 02 / projects — selected work )</p>
          <h1
            className="animate-rise mt-4 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Things I've <span className="underline-wavy">trained</span>, tracked &{" "}
            <span className="text-stroke">shipped</span>.
          </h1>
          <div className="mt-14">
            {projects.map((project, i) => (
              <article
                key={project.title}
                className={`animate-rise rounded-3xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 sm:p-9 ${project.bg} ${project.hoverBorder} ${i > 0 ? "mt-5" : ""}`}
                style={{ animationDelay: `${160 + i * 80}ms` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h2 className="max-w-[24ch] font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {project.title}
                  </h2>
                  <span className="rounded-full border border-line bg-card/60 px-2.5 py-1 font-mono text-[11px]">
                    {project.badge}
                  </span>
                </div>
                <p className="mt-3 max-w-[52ch] text-pretty text-muted-foreground">{project.blurb}</p>
                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {project.bullets.map((bullet) => (
                    <div key={bullet.head} className="rounded-xl border border-line bg-card/60 p-3.5">
                      <p className="font-display text-sm font-bold">{bullet.head}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{bullet.body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-card/70 px-2.5 py-1 font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto font-mono text-xs text-muted-foreground transition-colors duration-200 hover:text-sky"
                  >
                    view code ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="animate-rise mt-14" style={{ animationDelay: "400ms" }}>
            <Link
              to="/about"
              className="font-mono text-xs text-muted-foreground transition-colors duration-200 hover:text-sky"
            >
              ( 03 / about — notes & index ) →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
