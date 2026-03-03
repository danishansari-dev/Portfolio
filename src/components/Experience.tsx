import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

/** Timeline entries — each represents a role/position */
const EXPERIENCES = [
    {
        title: 'Co-Founder & Engineer',
        company: 'ScrunchCreate',
        period: '2024 – Present',
        points: [
            { icon: '⚛️', text: 'Built React + Vite frontend serving 500+ active users' },
            { icon: '🔄', text: 'Engineered CI/CD pipeline with GitHub Actions — 60% faster deployments' },
            { icon: '📦', text: 'Managed 200+ product variants with zero-backend architecture' },
            { icon: '📊', text: 'Achieved sub-2s page load with performance-first design' },
        ],
    },
    {
        title: 'Creative Team Lead',
        company: 'OSCode Club, IIIT Dharwad',
        period: '2024 – 2025',
        points: [
            { icon: '👥', text: '500+ students impacted through tech events and workshops' },
            { icon: '🎯', text: 'Led event planning, ideation, and execution for club activities' },
            { icon: '📱', text: 'Drove social media campaigns boosting club engagement' },
        ],
    },
];

/**
 * Experience section with a vertical timeline.
 * The timeline line "draws" itself as the user scrolls,
 * using Framer Motion's scroll-linked animations.
 */
export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Link the timeline line height to scroll progress through this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 80%', 'end 50%'],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <ScrollReveal>
                <h2 className="font-display text-3xl sm:text-4xl font-700 text-center mb-4">
                    Where I&apos;ve{' '}
                    <span className="bg-gradient-to-r from-cyan to-saffron bg-clip-text text-transparent">
                        Worked
                    </span>
                </h2>
                <p className="text-text-secondary text-center mb-16 max-w-xl mx-auto">
                    Building real products and leading creative teams.
                </p>
            </ScrollReveal>

            <div ref={containerRef} className="relative">
                {/* Animated timeline line — draws on scroll */}
                <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-navy-lighter">
                    <motion.div
                        className="w-full bg-gradient-to-b from-cyan to-saffron origin-top"
                        style={{ height: lineHeight }}
                    />
                </div>

                {/* Timeline entries */}
                <div className="space-y-12">
                    {EXPERIENCES.map((exp, i) => (
                        <ScrollReveal key={exp.company} delay={i * 0.15}>
                            <div className="relative pl-12 sm:pl-20">
                                {/* Timeline dot */}
                                <motion.div
                                    className="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full border-2 border-cyan bg-navy"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', delay: i * 0.2 }}
                                />

                                {/* Card content */}
                                <div className="p-6 rounded-2xl bg-navy-card/50 border border-navy-lighter/50">
                                    <div className="flex flex-wrap items-center gap-3 mb-1">
                                        <h3 className="font-display text-lg sm:text-xl font-700">{exp.title}</h3>
                                        <span className="px-2.5 py-0.5 rounded-full text-xs font-500 bg-cyan/10 text-cyan border border-cyan/20">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-saffron font-500 text-sm mb-4">{exp.company}</p>

                                    <ul className="space-y-3">
                                        {exp.points.map((point) => (
                                            <li key={point.text} className="flex items-start gap-3 text-sm text-text-secondary">
                                                <span className="text-base mt-0.5 shrink-0">{point.icon}</span>
                                                <span className="leading-relaxed">{point.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
