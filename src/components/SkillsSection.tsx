import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Brain, Code2, Database, Cloud } from "lucide-react";

const categories = [
  {
    title: "ML / AI",
    icon: <Brain className="w-5 h-5" />,
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "CNN", "NLP", "Transfer Learning", "Computer Vision"],
  },
  {
    title: "Development",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "Java", "React", "Vite", "Docker", "GitHub Actions", "CI/CD", "REST APIs"],
  },
  {
    title: "Data",
    icon: <Database className="w-5 h-5" />,
    skills: ["SQL", "Power BI", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    title: "Cloud",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["AWS", "Vercel", "Linux"],
  },
];

const chipVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <ScrollReveal>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
        My <span className="text-primary">Toolkit</span>
      </h2>
      <p className="text-muted-foreground text-center text-sm sm:text-base max-w-lg mx-auto mb-12 sm:mb-16">
        Technologies and tools I use to bring ideas to life
      </p>
    </ScrollReveal>

    <div className="grid sm:grid-cols-2 gap-6">
      {categories.map((cat) => (
        <ScrollReveal key={cat.title}>
          <div className="p-5 sm:p-6 rounded-xl border border-border bg-card/50 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {cat.icon}
              </div>
              <h3 className="text-base sm:text-lg font-display font-semibold">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skill-chip interactive text-xs sm:text-sm"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={chipVariants}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default SkillsSection;
