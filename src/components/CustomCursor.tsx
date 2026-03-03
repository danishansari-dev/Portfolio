import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Custom dot cursor that follows the mouse and scales up
 * on hover over interactive elements (links, buttons).
 * Replaces the default browser cursor for a premium feel.
 */
export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Track hover state on interactive elements for the scale-up effect
        const handleElementHover = () => {
            const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        // Re-attach hover listeners when DOM changes (e.g., after animation)
        handleElementHover();
        const observer = new MutationObserver(handleElementHover);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            observer.disconnect();
        };
    }, []);

    // Don't render on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

    return (
        <>
            {/* Main dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
                animate={{
                    x: position.x - (isHovering ? 20 : 6),
                    y: position.y - (isHovering ? 20 : 6),
                    width: isHovering ? 40 : 12,
                    height: isHovering ? 40 : 12,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
                style={{
                    background: isHovering
                        ? 'rgba(0, 245, 255, 0.15)'
                        : 'rgba(0, 245, 255, 0.9)',
                    border: isHovering ? '1.5px solid rgba(0, 245, 255, 0.5)' : 'none',
                    mixBlendMode: 'difference',
                }}
            />
            {/* Outer ring (appears on hover) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
                animate={{
                    x: position.x - 24,
                    y: position.y - 24,
                    width: 48,
                    height: 48,
                    opacity: isHovering && isVisible ? 0.3 : 0,
                    scale: isHovering ? 1 : 0.5,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                    border: '1px solid rgba(0, 245, 255, 0.3)',
                }}
            />
        </>
    );
}
