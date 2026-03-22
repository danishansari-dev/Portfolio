import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { User } from "lucide-react";

const stats = [
  { label: "Model Accuracy", value: 90, suffix: "%+" },
  { label: "Deployed Projects", value: 3, suffix: "+" },
];

/**
 * Animated counter component for stats
 * @param target - The number to count up to
 * @param suffix - Text to append to the number
 * @returns JSX Element
 */
const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-display font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => (
  <section id="about" className="section-container">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <ScrollReveal>
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 glow-border-cyan" />
          <div className="absolute inset-2 rounded-full bg-surface flex items-center justify-center">
            <User className="w-20 h-20 text-primary/60" />
          </div>
          <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
          I build things that work. From CNNs that detect bone fractures to
          intelligent production systems — I bridge the gap between
          research and real-world products. Final-year B.Tech student in
          Data Science & AI at IIIT Dharwad, shipping production code since day one.
        </p>

        <div className="grid grid-cols-2 gap-6 max-w-sm">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={0.3 + i * 0.1}>
              <div className="text-center">
                <Counter target={s.value} suffix={s.suffix} />
                <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
