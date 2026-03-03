import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

/** Contact links — each with an icon, label, and hover color */
const LINKS = [
    {
        label: 'Email',
        href: 'mailto:danishansari.dev@gmail.com',
        display: 'danishansari.dev@gmail.com',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/danishansari-dev',
        display: 'danishansari-dev',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        href: 'https://github.com/danishansari-dev',
        display: 'danishansari-dev',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
];

/**
 * Contact section — full-width dark panel with heading
 * and 3 glowing icon links (Email, LinkedIn, GitHub).
 * Each link scales up + glow spreads on hover.
 */
export default function Contact() {
    return (
        <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <ScrollReveal>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 mb-6">
                        Let&apos;s Build{' '}
                        <span className="bg-gradient-to-r from-cyan to-saffron bg-clip-text text-transparent">
                            Something Together
                        </span>
                    </h2>
                    <p className="text-text-secondary text-lg mb-16 max-w-xl mx-auto">
                        Looking for an ML engineer who ships? Let&apos;s talk.
                    </p>
                </ScrollReveal>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                    {LINKS.map((link, i) => (
                        <ScrollReveal key={link.label} delay={i * 0.1}>
                            <motion.a
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-navy-card/50 border border-navy-lighter/50 transition-colors duration-300 hover:border-cyan/40 w-full sm:w-56"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 30px rgba(0, 245, 255, 0.15), 0 0 60px rgba(0, 245, 255, 0.05)',
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                {/* Icon with hover scale */}
                                <motion.div
                                    className="text-text-muted group-hover:text-cyan transition-colors duration-300"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    {link.icon}
                                </motion.div>
                                <div>
                                    <p className="text-sm font-600 text-text-primary mb-1">{link.label}</p>
                                    <p className="text-xs text-text-muted group-hover:text-text-secondary transition-colors">
                                        {link.display}
                                    </p>
                                </div>
                            </motion.a>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Footer */}
                <ScrollReveal delay={0.4}>
                    <p className="mt-20 text-text-muted text-sm">
                        © 2026 Mohammad Danish Ansari · Built with React, Framer Motion & a lot of ☕
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
