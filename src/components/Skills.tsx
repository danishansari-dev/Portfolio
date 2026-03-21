import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

/** Skill categories with their items — grouped for visual organization */
const SKILL_CATEGORIES = [
    {
        title: 'ML / AI',
        skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'CNN', 'NLP', 'Transfer Learning'],
    },
    {
        title: 'Development',
        skills: ['Python', 'React', 'Vite', 'Docker', 'GitHub Actions', 'CI/CD', 'REST APIs'],
    },
    {
        title: 'Data',
        skills: ['SQL', 'Power BI', 'Tableau', 'Matplotlib'],
    },
    {
        title: 'Cloud',
        skills: ['AWS', 'Vercel'],
    },
];

/** Stagger animation for chips flying in from bottom */
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
} as const;

const chipVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
        },
    },
} as const;

/**
 * Skills section with glowing pill/badge chips grouped by category.
 * Each chip flies in with staggered animation on scroll entry
 * and has a cyan hover glow effect.
 */
export default function Skills() {
    return (
        <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <ScrollReveal>
                <h2 className="font-display text-3xl sm:text-4xl font-700 text-center mb-4">
                    My{' '}
                    <span className="bg-gradient-to-r from-cyan to-saffron bg-clip-text text-transparent">
                        Toolkit
                    </span>
                </h2>
                <p className="text-text-secondary text-center mb-16 max-w-xl mx-auto">
                    Technologies and tools I use to turn ideas into production-ready products.
                </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {SKILL_CATEGORIES.map((category, catIndex) => (
                    <ScrollReveal key={category.title} delay={catIndex * 0.1}>
                        <div className="p-6 rounded-2xl bg-navy-card/30 border border-navy-lighter/30">
                            <h3 className="font-display text-lg font-600 text-saffron mb-4">
                                {category.title}
                            </h3>

                            <motion.div
                                className="flex flex-wrap gap-2.5"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-30px' }}
                            >
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={chipVariants}
                                        whileHover={{
                                            boxShadow: '0 0 20px rgba(0, 245, 255, 0.3), 0 0 40px rgba(0, 245, 255, 0.1)',
                                            borderColor: 'rgba(0, 245, 255, 0.5)',
                                            scale: 1.05,
                                        }}
                                        className="px-4 py-2 rounded-full text-sm font-500 bg-navy-lighter/50 border border-navy-lighter text-text-primary transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
