"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Achievements", href: "/achievements" },
    { name: "Resume", href: "/AdityaKumar.pdf" },
    { name: "Contact", href: "/#contact" },
];

export const Navigation = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-space font-bold text-xl tracking-tighter text-foreground group flex items-center shadow-primary">
                    <span className="text-secondary mr-2">{">"}</span>
                    aditya_kumar
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="inline-block w-2.5 h-5 bg-primary ml-1 align-middle opacity-80"
                    />
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            target={item.name === "resume" ? "_blank" : undefined}
                            rel={item.name === "resume" ? "noopener noreferrer" : undefined}
                            className="font-mono text-sm group flex items-center text-muted-foreground hover:text-primary transition-colors"
                        >
                            <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                                {">"}
                            </span>
                            {item.name}
                        </Link>
                    ))}

                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};
