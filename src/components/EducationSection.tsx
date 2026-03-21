import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap } from "lucide-react";

const coursework = [
  "Machine Learning", "Deep Learning", "Data Structures & Algorithms",
  "Operating Systems", "DBMS", "OOP", "Software Engineering",
];

const EducationSection = () => (
  <section id="education" className="section-container">
    <ScrollReveal>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 sm:mb-16">
        Education
      </h2>
    </ScrollReveal>

    <ScrollReveal>
      <div className="max-w-2xl mx-auto tilt-card">
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-display font-bold">
              Indian Institute of Information Technology, Dharwad
            </h3>
            <p className="text-primary text-xs sm:text-sm">B.Tech in Data Science & Artificial Intelligence</p>
            <p className="text-muted-foreground text-xs sm:text-sm">2022 – 2026</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mb-3">Relevant Coursework</p>
        <div className="flex flex-wrap gap-2">
          {coursework.map((c, i) => (
            <motion.span
              key={c}
              className="skill-chip text-[10px] sm:text-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default EducationSection;
