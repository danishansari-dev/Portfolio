import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

/** Project data — each card renders from this config */
const PROJECTS = [
    {
        title: 'Bone Fracture Classification',
        description: 'Deep learning model for automated X-ray fracture detection using transfer learning and custom CNN architectures.',
        stat: '90%+ Accuracy',
        icon: '🦴',
        tags: ['PyTorch', 'CNN', 'Transfer Learning', 'Medical AI'],
        github: 'https://github.com/danishansari-dev',
        featured: false,
    },
    {
        title: 'Disease Prediction System',
        description: 'Multi-model comparison system for disease prediction — evaluated 5+ ML models to find the optimal approach.',
        stat: '85% Accuracy · 5+ Models',
        icon: '🩺',
        tags: ['scikit-learn', 'Python', 'ML', 'Healthcare'],
        github: 'https://github.com/danishansari-dev',
        featured: false,
    },
    {
        title: 'Handwritten Digit Recognition',
        description: 'CNN-based digit classifier trained on MNIST with real-time inference and visualization.',
        stat: 'CNN with PyTorch',
        icon: '✍️',
        tags: ['PyTorch', 'CNN', 'MNIST', 'Computer Vision'],
        github: 'https://github.com/danishansari-dev',
        featured: false,
    },
    {
        title: 'ScrunchCreate',
        description: 'Full-stack e-commerce platform built from scratch — React frontend, CI/CD pipeline, 200+ product variants.',
        stat: '500+ Users · Sub-2s Load · Zero Backend Cost',
        icon: '🛍️',
        tags: ['React', 'Vite', 'CI/CD', 'E-Commerce'],
        github: 'https://github.com/danishansari-dev',
        live: 'https://scrunchcreate.com',
        featured: true,
    },
];

/**
 * Single project card with 3D tilt effect on mouse movement.
 * Uses Framer Motion's useMotionValue + useSpring for smooth
 * perspective transforms that follow the cursor position.
 */
function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth tilt — high damping prevents jitter
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

    /**
     * Maps mouse position to normalized -0.5..0.5 range
     * relative to the card center for the tilt calculation
     */
    const handleMouseMove = (e: React.MouseEvent) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const normalX = (e.clientX - rect.left) / rect.width - 0.5;
        const normalY = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(normalX);
        y.set(normalY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <ScrollReveal delay={index * 0.1}>
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformPerspective: 800,
                }}
                whileHover={{
                    boxShadow: project.featured
                        ? '0 0 40px rgba(255, 184, 48, 0.15), 0 20px 60px rgba(0, 0, 0, 0.4)'
                        : '0 0 40px rgba(0, 245, 255, 0.1), 0 20px 60px rgba(0, 0, 0, 0.4)',
                }}
                className={`relative p-6 sm:p-8 rounded-2xl border transition-colors duration-300 h-full ${project.featured
                        ? 'bg-gradient-to-br from-navy-card to-navy-lighter border-saffron/30 lg:col-span-2'
                        : 'bg-navy-card/50 border-navy-lighter/50 hover:border-cyan/30'
                    }`}
            >
                {/* Featured badge */}
                {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-[pulse_2s_ease-in-out_infinite]" />
                        <span className="text-xs text-green-400 font-500">Live Product</span>
                    </div>
                )}

                {/* Icon and title */}
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="font-display text-xl sm:text-2xl font-700 mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm sm:text-base mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Key stat */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-600 mb-5 ${project.featured
                        ? 'bg-saffron/10 text-saffron border border-saffron/20'
                        : 'bg-cyan/10 text-cyan border border-cyan/20'
                    }`}>
                    {project.stat}
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-xs bg-navy-lighter/80 text-text-muted border border-navy-lighter"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-500 bg-navy-lighter border border-navy-lighter hover:border-cyan/40 text-text-primary transition-all duration-200 hover:text-cyan"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-500 bg-saffron/10 border border-saffron/30 text-saffron hover:bg-saffron/20 transition-all duration-200"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                            </svg>
                            Live Site
                        </a>
                    )}
                </div>
            </motion.div>
        </ScrollReveal>
    );
}

/**
 * Projects section — "What I've Built"
 * Grid layout with 3D tilt cards, featured project spanning full width on large screens
 */
export default function Projects() {
    return (
        <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <ScrollReveal>
                <h2 className="font-display text-3xl sm:text-4xl font-700 text-center mb-4">
                    What I&apos;ve{' '}
                    <span className="bg-gradient-to-r from-cyan to-saffron bg-clip-text text-transparent">
                        Built
                    </span>
                </h2>
                <p className="text-text-secondary text-center mb-16 max-w-xl mx-auto">
                    From ML research to production platforms — projects that solve real problems.
                </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {PROJECTS.map((project, i) => (
                    <div key={project.title} className={project.featured ? 'lg:col-span-2' : ''}>
                        <ProjectCard project={project} index={i} />
                    </div>
                ))}
            </div>
        </section>
    );
}
