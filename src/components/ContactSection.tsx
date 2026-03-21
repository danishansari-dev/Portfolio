import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7" />,
    label: "Email",
    href: "mailto:danishansari.dev@gmail.com",
    text: "danishansari.dev@gmail.com",
  },
  {
    icon: <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/danishansari-dev",
    text: "danishansari-dev",
  },
  {
    icon: <Github className="w-6 h-6 sm:w-7 sm:h-7" />,
    label: "GitHub",
    href: "https://github.com/danishansari-dev",
    text: "danishansari-dev",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-20 sm:py-24 md:py-32 bg-card">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
          Let's Build <span className="gradient-text">Something Together</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mb-10 sm:mb-12">
          Open to internships, collaborations, and interesting conversations.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {links.map((link, i) => (
          <ScrollReveal key={link.label} delay={i * 0.1}>
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex flex-row sm:flex-col items-center gap-3 sm:gap-3 p-4 sm:p-6 rounded-xl border border-border bg-background/50 hover:border-primary/40 transition-all duration-300 group"
              whileHover={{ scale: 1.03 }}
            >
              <span className="text-primary group-hover:drop-shadow-[0_0_12px_hsl(183,100%,50%,0.6)] transition-all shrink-0">
                {link.icon}
              </span>
              <div className="flex flex-col items-start sm:items-center min-w-0">
                <span className="text-sm font-medium">{link.label}</span>
                <span className="text-xs text-muted-foreground truncate max-w-full">{link.text}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto sm:hidden shrink-0" />
            </motion.a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-12 sm:mt-16 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mohammad Danish Ansari. Built with React & Tailwind.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ContactSection;
