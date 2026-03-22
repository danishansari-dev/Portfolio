import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ParticleCanvas from "./ParticleCanvas";
import ScrollReveal from "./ScrollReveal";
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const firstName = "Mohammad Danish";
const lastName = "Ansari";
const roles = ["AI & Data Science Student"];

const stats = [
  { label: "Model Accuracy", value: 90, suffix: "%+" },
  { label: "Deployed Projects", value: 3, suffix: "+" },
];

const socialLinks = [
  { icon: <Github className="w-4 h-4" />, href: "https://github.com/danishansari-dev", label: "GitHub" },
  { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/danishansari-dev", label: "LinkedIn" },
  { icon: <Mail className="w-4 h-4" />, href: "mailto:danishansari.dev@gmail.com", label: "Email" },
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
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-primary/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] rounded-full bg-secondary/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[150px] pointer-events-none" />

      {/* Main hero content - split layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-primary/20 bg-primary/[0.06] text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                ~/portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-800 tracking-tight mb-2 leading-[1.1]"
              aria-label={`${firstName} ${lastName}`}
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block text-foreground"
              >
                {firstName}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block gradient-text"
              >
                {lastName}
              </motion.span>
            </motion.h1>

            <div className="h-8 sm:h-9 mb-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-base sm:text-lg md:text-xl font-mono text-primary/80 font-medium"
                >
                  {">"} {roles[roleIndex]}<span className="animate-pulse">_</span>
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              Bridging the gap between ML research and production systems. 
              Building intelligent solutions that ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(183,100%,50%,0.3)] transition-all duration-300 interactive"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-border text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 interactive"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 interactive"
                >
                  {link.icon}
                </a>
              ))}
              <div className="h-4 w-px bg-border mx-1" />
              <span className="badge-glow border-green-500/40 text-green-400 bg-green-500/10 text-xs px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </span>
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[60px] scale-110" />
              
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  borderStyle: "dashed",
                  borderSpacing: "10px",
                }}
              />
              
              {/* Inner border + image */}
              <div className="absolute inset-3 rounded-full border-2 border-primary/40 glow-border-cyan overflow-hidden">
                <img
                  src={profileImg}
                  alt="Mohammad Danish Ansari"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges removed as per user request */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 mb-20">
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center p-4 sm:p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <Counter target={s.value} suffix={s.suffix} />
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <a href="#skills" className="interactive">
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce-arrow" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
