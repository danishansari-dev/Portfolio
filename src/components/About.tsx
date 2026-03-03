import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

/** Stats that animate from 0 to their final value on scroll */
const STATS = [
    { label: 'Platform Users', value: 500, suffix: '+' },
    { label: 'Model Accuracy', value: 90, suffix: '%+' },
    { label: 'Deployed Projects', value: 3, suffix: '+' },
];

/**
 * Animated counter that increments from 0 to target value.
 * Only triggers when the element scrolls into view.
 * @param target - The final number to count up to
 * @param suffix - Text appended after the number (e.g., "+" or "%")
 */
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        // Animate over ~1.5 seconds with easing
        const duration = 1500;
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic for a satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    }, [isInView, target]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

/**
 * About section with split layout:
 * - Left: stylized avatar placeholder with glowing ring
 * - Right: punchy bio text + animated stat counters
 */
export default function About() {
    return (
        <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Avatar with glowing ring */}
                <ScrollReveal direction="left">
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                            {/* Animated glowing ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, #00F5FF, #FFB830, #00F5FF)',
                                    padding: '3px',
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            >
                                <div className="w-full h-full rounded-full bg-navy" />
                            </motion.div>

                            {/* Avatar placeholder — silhouette with gradient */}
                            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-navy-lighter to-navy-card flex items-center justify-center overflow-hidden">
                                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 text-text-muted opacity-40">
                                    <circle cx="50" cy="35" r="18" fill="currentColor" />
                                    <ellipse cx="50" cy="80" rx="30" ry="22" fill="currentColor" />
                                </svg>
                            </div>

                            {/* Ambient glow behind the avatar */}
                            <div className="absolute -inset-4 rounded-full bg-cyan/5 blur-2xl -z-10" />
                        </div>
                    </div>
                </ScrollReveal>

                {/* Bio + Stats */}
                <div>
                    <ScrollReveal>
                        <h2 className="font-display text-3xl sm:text-4xl font-700 mb-6">
                            About{' '}
                            <span className="bg-gradient-to-r from-cyan to-saffron bg-clip-text text-transparent">
                                Me
                            </span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                            I build things that work. From CNNs that detect bone fractures to e-commerce
                            platforms with 500+ users — I bridge the gap between research and real-world
                            products.
                        </p>
                    </ScrollReveal>

                    {/* Stat counters */}
                    <ScrollReveal delay={0.2}>
                        <div className="grid grid-cols-3 gap-4">
                            {STATS.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="text-center p-4 rounded-xl bg-navy-card/50 border border-navy-lighter/50"
                                >
                                    <div className="text-2xl sm:text-3xl font-display font-700 text-cyan mb-1">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-xs sm:text-sm text-text-muted">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
