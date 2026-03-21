import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github, Stethoscope, Brain, Scan, ShoppingBag, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  stat: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  github: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Bone Fracture Classification",
    stat: "90%+ Accuracy",
    desc: "CNN-based X-ray fracture detection using PyTorch and transfer learning on medical imaging datasets.",
    tags: ["PyTorch", "CNN", "Transfer Learning", "Medical Imaging"],
    icon: <Scan className="w-7 h-7" />,
    github: "https://github.com/danishansari-dev/Bone-Fracture-Binary-Classification",
  },
  {
    title: "Disease Prediction System",
    stat: "85% Accuracy · 5+ Models",
    desc: "End-to-end ML pipeline for symptom-based disease prediction with scikit-learn.",
    tags: ["scikit-learn", "Feature Engineering", "Model Comparison"],
    icon: <Stethoscope className="w-7 h-7" />,
    github: "https://github.com/danishansari-dev/Disease-Prediction-Based-On-Symptoms",
  },
  {
    title: "Handwritten Digit Recognition",
    stat: "CNN with PyTorch",
    desc: "Convolutional neural network for MNIST classification with modular pipelines.",
    tags: ["PyTorch", "CNN", "MNIST"],
    icon: <Brain className="w-7 h-7" />,
    github: "https://github.com/danishansari-dev/Pytorch-Handwritten-Digit-Recognition",
  },
  {
    title: "ScrunchCreate",
    stat: "500+ Users · Sub-2s Load · Zero Backend Cost",
    desc: "Production e-commerce platform with automated CI/CD, 200+ product variants, and zero-cost architecture.",
    tags: ["React", "Vite", "GitHub Actions", "CI/CD"],
    icon: <ShoppingBag className="w-7 h-7" />,
    github: "https://github.com/danishansari-dev/scrunchcreate",
    live: "https://scrunchcreate.com",
    featured: true,
  },
  {
    title: "Neural Read",
    stat: "AI Reading Assistant",
    desc: "AI-powered reading and comprehension project focused on extracting insights and making long-form content easier to understand.",
    tags: ["AI", "NLP", "Reading Assistant", "Productivity"],
    icon: <Brain className="w-7 h-7" />,
    github: "https://github.com/danishansari-dev/neural-read",
  },
  {
    title: "AI GitHub Analyzer",
    stat: "Repo Intelligence Tool",
    desc: "Analyzes GitHub repositories with AI to surface structure, patterns, and actionable development insights.",
    tags: ["AI", "GitHub API", "Code Analysis", "Developer Tools"],
    icon: <Scan className="w-7 h-7" />,
    github: "https://github.com/danishansari-dev/ai-github-analyzer",
  },
];

const TiltCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`);
  };

  const handleMouseLeave = () => setTransform("");

  return (
    <motion.div
      ref={cardRef}
      className={`tilt-card interactive group ${project.featured ? "md:col-span-2 border-secondary/30" : ""}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-green-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Live Product
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
          {project.icon}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors interactive"
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      <h3 className="text-lg sm:text-xl font-display font-bold mb-1.5">{project.title}</h3>
      <p className="text-secondary text-xs sm:text-sm font-semibold mb-3">{project.stat}</p>
      <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">{project.desc}</p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[10px] sm:text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-3 border-t border-border/50">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary hover:underline interactive"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-secondary hover:underline interactive"
          >
            <ExternalLink className="w-4 h-4" /> Live Site
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="section-container">
    <ScrollReveal>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
        What I've <span className="text-primary">Built</span>
      </h2>
      <p className="text-muted-foreground text-center text-sm sm:text-base max-w-lg mx-auto mb-12 sm:mb-16">
        A mix of ML research and production applications
      </p>
    </ScrollReveal>

    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
      {projects.map((project, i) => (
        <ScrollReveal key={project.title} delay={i * 0.1}>
          <TiltCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
