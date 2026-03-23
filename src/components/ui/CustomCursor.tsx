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
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-[9px] h-[9px] rounded-full bg-foreground pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    scale: isHovering ? 2.2 : 1,
                    backgroundColor: isHovering ? "var(--primary)" : "var(--foreground)",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            />
            {/* Outer Circle */}
            <motion.div
                className="fixed top-0 left-0 w-[34px] h-[34px] rounded-full border border-muted-foreground/30 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    width: isHovering ? 50 : 34,
                    height: isHovering ? 50 : 34,
                    borderColor: isHovering ? "var(--muted-foreground)" : "var(--border)",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
            />
        </div>
    );
};
