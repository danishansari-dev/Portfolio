import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralCanvas from './NeuralCanvas';

/** Rotating subtitles that cycle to show breadth of skills */
const SUBTITLES = [
    'ML Engineer',
    'Full-Stack Builder',
    'AI & Data Science Student',
];

/**
 * Full-viewport hero section with:
 * - Letter-by-letter name reveal animation
 * - Cycling subtitle text with smooth transitions
 * - Neural network particle background
 * - Pulsing "Available for Internships" badge
 * - Bouncing scroll indicator
 */
export default function Hero() {
    const [subtitleIndex, setSubtitleIndex] = useState(0);
    const name = 'Mohammad Danish Ansari';

    // Cycle through subtitles every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setSubtitleIndex((prev) => (prev + 1) % SUBTITLES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
        >
            {/* Neural network animated background */}
            <NeuralCanvas />

            {/* Radial gradient overlay for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--color-navy)_70%)]" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Letter-by-letter name animation */}
                <motion.h1
                    className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-800 mb-6 tracking-tight"
                    aria-label={name}
                >
                    {name.split('').map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: i * 0.04,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className={
                                char === ' '
                                    ? 'inline-block w-3 sm:w-4'
                                    : 'inline-block bg-gradient-to-r from-text-primary via-cyan to-text-primary bg-clip-text text-transparent bg-[length:200%_100%]'
                            }
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Cycling subtitle with AnimatePresence for smooth swap */}
                <div className="h-10 sm:h-12 flex items-center justify-center mb-8">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={subtitleIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="text-lg sm:text-xl md:text-2xl text-text-secondary font-body font-300"
                        >
                            {SUBTITLES[subtitleIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Pulsing availability badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan/30 bg-cyan/5 animate-pulse-glow"
                >
                    <span className="w-2 h-2 rounded-full bg-cyan animate-[pulse_1.5s_ease-in-out_infinite]" />
                    <span className="text-sm sm:text-base text-cyan font-500 tracking-wide">
                        Available for Internships
                    </span>
                </motion.div>
            </div>

            {/* Bouncing scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow"
            >
                <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-cyan"
                >
                    <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
                </svg>
            </motion.div>
        </section>
    );
}
