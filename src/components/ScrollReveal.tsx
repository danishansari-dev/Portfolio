import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: ReactNode;
    /** Delay before animation starts (in seconds) */
    delay?: number;
    /** Direction the element slides in from */
    direction?: 'up' | 'down' | 'left' | 'right';
    /** Custom className for the wrapper */
    className?: string;
    /** Width behavior — 'fit' prevents full-width stretch */
    width?: 'full' | 'fit';
}

/**
 * Reusable scroll-triggered reveal wrapper.
 * Elements fade in + slide from the given direction when
 * they enter the viewport. Uses Framer Motion's whileInView
 * for performant intersection-based triggering.
 */
export default function ScrollReveal({
    children,
    delay = 0,
    direction = 'up',
    className = '',
    width = 'full',
}: ScrollRevealProps) {
    // Map direction to initial offset values
    const directionOffset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    const offset = directionOffset[direction];

    return (
        <motion.div
            className={`${width === 'full' ? 'w-full' : 'w-fit'} ${className}`}
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
}
