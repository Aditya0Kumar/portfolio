"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    if (!isReady) return null;

    return (
        <div className="hidden md:block">
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 2.5 : 1,
                    opacity: isHovering ? 0.6 : 1,
                    boxShadow: "0 0 10px 2px rgba(0, 245, 212, 0.4)",
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.8 : 1,
                    borderColor: isHovering ? "rgba(0, 245, 212, 0.8)" : "rgba(0, 245, 212, 0.5)"
                }}
                transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
            />
            {isHovering && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed top-0 left-0 pointer-events-none z-[9999] font-mono text-[8px] font-bold text-primary uppercase tracking-tighter"

                    style={{
                        x: mousePosition.x + 15,
                        y: mousePosition.y + 15,
                    }}
                >
                    [ INTERACT ]
                </motion.div>
            )}
        </div>
    );
};
