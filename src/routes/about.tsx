import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ayush Zade" },
      {
        name: "description",
        content:
          "Education, research, certifications and skills of Ayush Zade — B.Tech AI & Data Science at Sipna College of Engineering, published researcher, ML/MLOps practitioner.",
      },
      { property: "og:title", content: "About — Ayush Zade" },
      {
        property: "og:description",
        content:
          "Education timeline, research publication, certifications, and the full ML toolkit of Ayush Zade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const education = [
  {
    title: "B.Tech — AI & Data Science",
    place: "Sipna College of Engineering & Technology, Amravati",
    meta: "2023 – 2027 · CGPA 7.94 / 10",
  },
  {
    title: "Class 12 (HSC Science)",
    place: "St. Paul's Junior College, Akot",
    meta: "2024 · 76.83%",
  },
  {
    title: "Class 10 (SSC)",
    place: "Aski Kids Public School, Akot",
    meta: "2022 · 92.80%",
  },
];

const certifications = [
  { name: "Machine Learning & Data Science", issuer: "EduSkills" },
  { name: "DS, ML, Deep Learning & NLP Bootcamp", issuer: "Udemy" },
];

const skills = [
  "Python",
  "SQL",
  "R",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "NLP",
  "Flask",
  "Streamlit",
  "MLflow",
  "DVC",
  "Docker",
  "Git",
  "AWS (S3, EC2)",
  "Matplotlib",
  "Seaborn",
];

const languages = ["English · professional", "Hindi · fluent", "Marathi · native"];

function About() {
  return (
    <div className="min-h-screen bg-background font-body text-ink antialiased">
      <SiteNav />
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-24">
          <p className="animate-rise font-mono text-xs text-sky">( 03 / about — notes & index )</p>
          <h1
            className="animate-rise mt-4 max-w-[20ch] font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            The record so far.
          </h1>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <div className="animate-rise rounded-3xl border border-line bg-peach-soft p-6" style={{ animationDelay: "160ms" }}>
              <h2 className="font-display text-lg font-bold tracking-tight">Education</h2>
              <ol className="mt-4 border-l border-line">
                {education.map((entry, i) => (
                  <li key={entry.title} className={`relative pl-5 ${i < education.length - 1 ? "pb-5" : ""}`}>
                    <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-peach" />
                    <p className="font-display text-sm font-bold">{entry.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{entry.place}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{entry.meta}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-5 rounded-xl border border-line bg-card/60 p-3.5">
                <p className="font-display text-sm font-bold">Research — "AI in Scientific Discovery"</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Published paper evaluating emerging AI methodologies, with data visualization and algorithmic
                  analysis.
                </p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">College Research Journal</p>
              </div>
            </div>

            <div className="animate-rise rounded-3xl border border-line bg-butter-soft p-6" style={{ animationDelay: "240ms" }}>
              <h2 className="font-display text-lg font-bold tracking-tight">Certifications</h2>
              <ul className="mt-4 space-y-2.5">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center justify-between gap-3 rounded-xl border border-line bg-card/60 p-3"
                  >
                    <span className="text-sm font-medium">{cert.name}</span>
                    <span className="shrink-0 font-mono text-[11px] text-muted-foreground">{cert.issuer}</span>
                  </li>
                ))}
              </ul>
              <h2 className="mt-6 font-display text-lg font-bold tracking-tight">Soft skills</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Problem-solving, analytical thinking, cross-functional teamwork, time management.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="animate-rise rounded-3xl border border-line bg-sky-soft p-6" style={{ animationDelay: "320ms" }}>
              <h2 className="font-display text-lg font-bold tracking-tight">Skills</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-line bg-card/70 px-2.5 py-1 font-mono text-xs">
                    {skill}
                  </span>
                ))}
              </div>
              <h2 className="mt-6 font-display text-lg font-bold tracking-tight">Languages</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span key={lang} className="rounded-full border border-line bg-card/70 px-2.5 py-1 font-mono text-xs">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div
              id="contact"
              className="animate-rise flex scroll-mt-24 flex-col justify-between rounded-3xl border border-line bg-mint-soft p-6"
              style={{ animationDelay: "400ms" }}
            >
              <div>
                <h2 className="font-display text-lg font-bold tracking-tight">Contact</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Open to internships & ML engineering roles — Amravati, MH, India.
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href="https://github.com/ayushzade"
                    target="_blank"
                    rel="noreferrer"
                    className="block font-mono text-sm text-ink transition-colors duration-200 hover:text-sky"
                  >
                    ↗ github.com/ayushzade
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ayush-zade-0326b2333"
                    target="_blank"
                    rel="noreferrer"
                    className="block font-mono text-sm text-ink transition-colors duration-200 hover:text-sky"
                  >
                    ↗ linkedin.com/in/ayush-zade-0326b2333
                  </a>
                  <a
                    href="mailto:ayushzade45@gmail.com"
                    className="block font-mono text-sm text-ink transition-colors duration-200 hover:text-sky"
                  >
                    ↗ ayushzade45@gmail.com
                  </a>
                  <a
                    href="tel:+917083748455"
                    className="block font-mono text-sm text-ink transition-colors duration-200 hover:text-sky"
                  >
                    ↗ +91 70837 48455
                  </a>
                </div>
              </div>
              <a
                href="mailto:ayushzade45@gmail.com"
                className="mt-6 rounded-full bg-sky px-5 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-ink"
              >
                get in touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
