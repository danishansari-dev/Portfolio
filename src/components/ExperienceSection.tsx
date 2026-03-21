import ScrollReveal from "./ScrollReveal";
import { Briefcase, Users } from "lucide-react";

const entries = [
  {
    title: "Co-Founder & Engineer",
    org: "ScrunchCreate",
    period: "2024 – Present",
    icon: <Briefcase className="w-5 h-5" />,
    points: [
      "Co-founded a production e-commerce platform serving 500+ monthly users",
      "Built React + Vite frontend with sub-2s load time",
      "Engineered file-system–driven product system managing 200+ variants with zero backend cost",
      "Implemented CI/CD with GitHub Actions reducing deployment time by 60%",
    ],
  },
  {
    title: "Creative Team Lead",
    org: "OSCode Club, IIIT Dharwad",
    period: "2024 – 2025",
    icon: <Users className="w-5 h-5" />,
    points: [
      "Led planning and execution of technical events impacting 500+ students",
      "Managed social media campaigns and publicity initiatives",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-container">
    <ScrollReveal>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 sm:mb-16">
        Experience
      </h2>
    </ScrollReveal>

    <div className="relative max-w-3xl mx-auto pl-8 sm:pl-10 md:pl-16">
      <div className="timeline-line" />

      {entries.map((entry, i) => (
        <ScrollReveal key={entry.title} delay={i * 0.15}>
          <div className="relative mb-10 sm:mb-12 last:mb-0">
            <div className="absolute left-[-20px] sm:left-[-24px] md:left-[-32px] top-1 w-8 h-8 rounded-full bg-surface border border-primary/40 flex items-center justify-center text-primary">
              {entry.icon}
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-border/50 bg-card/30">
              <span className="text-xs sm:text-sm text-muted-foreground">{entry.period}</span>
              <h3 className="text-lg sm:text-xl font-display font-bold mt-1">{entry.title}</h3>
              <p className="text-primary text-xs sm:text-sm mb-3">{entry.org}</p>
              <ul className="space-y-2">
                {entry.points.map((point, j) => (
                  <li key={j} className="text-muted-foreground text-xs sm:text-sm flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
