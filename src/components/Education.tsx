import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

/** Relevant coursework displayed as animated tags */
const COURSEWORK = [
    'Machine Learning',
    'Deep Learning',
    'Data Structures & Algorithms',
    'Database Systems',
    'Natural Language Processing',
    'Computer Vision',
    'Statistical Methods',
    'Linear Algebra',
    'Probability & Statistics',
    'Data Mining',
];

/**
 * Education section with a clean card for IIIT Dharwad.
 * Coursework rendered as small animated tags that stagger in.
 */
export default function Education() {
    return (
        <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <ScrollReveal>
                <h2 className="font-display text-3xl sm:text-4xl font-700 text-center mb-16">
                    <span className="bg-gradient-to-r from-cyan to-saffron bg-clip-text text-transparent">
                        Education
                    </span>
                </h2>
            </ScrollReveal>

            <ScrollReveal>
                <div className="relative p-8 sm:p-10 rounded-2xl bg-navy-card/50 border border-navy-lighter/50 max-w-2xl mx-auto">
                    {/* Ambient glow */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan/10 via-transparent to-saffron/10 -z-10 blur-sm" />

                    <div className="flex items-start gap-4 mb-6">
                        {/* University icon */}
                        <div className="w-14 h-14 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center text-2xl shrink-0">
                            🎓
                        </div>
                        <div>
                            <h3 className="font-display text-xl sm:text-2xl font-700">IIIT Dharwad</h3>
                            <p className="text-saffron font-500 text-sm sm:text-base">
                                B.Tech — Data Science & Artificial Intelligence
                            </p>
                            <p className="text-text-muted text-sm mt-1">2022 – 2026</p>
                        </div>
                    </div>

                    {/* Coursework tags */}
                    <div>
                        <p className="text-text-muted text-xs uppercase tracking-widest mb-3 font-500">
                            Relevant Coursework
                        </p>
                        <motion.div
                            className="flex flex-wrap gap-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.04 } },
                            }}
                        >
                            {COURSEWORK.map((course) => (
                                <motion.span
                                    key={course}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            y: 0,
                                            transition: { type: 'spring', stiffness: 400, damping: 25 },
                                        },
                                    }}
                                    className="px-3 py-1.5 rounded-lg text-xs font-500 bg-navy-lighter/70 border border-navy-lighter text-text-secondary"
                                >
                                    {course}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
