const items = [
  "Python",
  "MLflow",
  "DVC",
  "Docker",
  "NLP",
  "Scikit-learn",
  "Flask",
  "Streamlit",
  "AWS",
  "Pandas",
  "SQL",
  "Git",
];

const colors = ["text-sky", "text-mint", "text-peach", "text-butter"];

export function SkillsMarquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-background py-3">
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-xs tracking-wide whitespace-nowrap text-muted-foreground uppercase"
          >
            {item}
            <span className={`text-base leading-none ${colors[i % colors.length]}`}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
