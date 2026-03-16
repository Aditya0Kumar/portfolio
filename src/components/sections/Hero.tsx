import { motion, AnimatePresence, useDragControls, useMotionValue } from "framer-motion";
import { Terminal, Github, Linkedin, Mail, Phone, Download, Layout, Code } from "lucide-react";
import { useState, useRef } from "react";
import { TerminalPrompt } from "@/components/ui/TerminalPrompt";
import Image from "next/image";

export const Hero = () => {
    const [activeWindows, setActiveWindows] = useState<string[]>(["terminal"]);
    const dragControls = useDragControls();
    const desktopRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    return (
        <section
            id="hero"
            className="relative min-h-[85vh] pt-10 pb-12 px-6 overflow-hidden flex items-center justify-center bg-slate-50 dark:bg-[#020617] transition-colors duration-500"
        >
            {/* Desktop Background / Hero Container */}
            <div
                ref={desktopRef}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                {/* [10] Boosted Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.05] dark:opacity-[0.08] blur-[120px] scale-125" />

                {/* [1] Background Depth Elements */}
                <div className="absolute top-[20%] right-[10%] opacity-[0.02] dark:opacity-[0.04] blur-sm rotate-12 scale-150 hidden lg:block">
                    <Code size={400} />
                </div>
            </div>

            <div className="container mx-auto relative z-10 h-full w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 pt-0 lg:pt-6">
                {/* Profile Side/Top Layout */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start space-y-8 w-full lg:w-1/3 lg:mt-6"
                >
                    {/* Hero Profile Image */}
                    <div className="relative group w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex-shrink-0">
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl transition-transform duration-500 group-hover:rotate-[1deg] group-hover:scale-[1.02]">
                            <Image
                                src="/AdityaKumar.jpg"
                                alt="Aditya Kumar"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                                priority
                            />
                        </div>
                        {/* [8] Status Bit Overhaul */}
                        <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-primary/30 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xl backdrop-blur-md">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-[0.2em]">AVAILABLE FOR WORK</span>
                        </div>
                    </div>

                    <div className="text-center lg:text-left space-y-2">
                        {/* [11] Tighter Typography */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tighter leading-none text-foreground">
                            Aditya <span className="text-primary">Kumar</span>
                        </h1>
                        <p className="text-lg md:text-xl font-mono text-muted-foreground font-medium tracking-tight">
                            <span className="text-secondary font-bold">Software Development Engineer</span>
                        </p>
                    </div>
                </motion.div>

                {/* Main Terminal Window Container */}
                <div className="w-full lg:w-2/3 relative min-h-[400px]">
                    <AnimatePresence>
                        {activeWindows.includes("terminal") && (
                            <div className="flex flex-col space-y-8">
                                <motion.div
                                    drag
                                    style={{ x, y }}
                                    dragControls={dragControls}
                                    dragListener={false}
                                    dragConstraints={desktopRef}
                                    dragElastic={0.05}
                                    dragMomentum={false}
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "0.75rem",
                                        opacity: 1,
                                        scale: 1,
                                        position: "relative",
                                        zIndex: 10
                                    }}
                                    exit={{ opacity: 0, scale: 0.8, y: 100 }}
                                    className="border flex flex-col transition-all overflow-hidden dark:bg-[#0d1117]/95 bg-white/95 backdrop-blur-xl shadow-2xl dark:shadow-primary/5 shadow-primary/10 border-border dark:border-[#30363d]"
                                >
                                    {/* [2] macOS Window Header */}
                                    <div
                                        onPointerDown={(e) => dragControls.start(e)}
                                        className="dark:bg-[#161b22] bg-slate-100 px-4 py-3 border-b dark:border-[#30363d] border-border flex items-center justify-between cursor-grab active:cursor-grabbing touch-none"
                                    >
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 rounded-full mac-red border" />
                                            <div className="w-3 h-3 rounded-full mac-yellow border" />
                                            <div className="w-3 h-3 rounded-full mac-green border" />
                                        </div>
                                        <div className="flex items-center space-x-2 pointer-events-none select-none">
                                            <Terminal className="w-4 h-4 text-primary" />
                                            <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-[0.2em] opacity-80">aditya@portfolio:~</span>
                                        </div>
                                        <div className="w-12" />
                                    </div>

                                    {/* [7] Terminal Body with Noise */}
                                    <div className="relative p-6 md:p-10 font-mono text-sm md:text-base leading-relaxed overflow-y-auto flex-1 dark:text-slate-300">
                                        <div className="absolute inset-0 pointer-events-none opacity-[0.4] terminal-noise" />

                                        {/* [5] Tighter Body Spacing */}
                                        <div className="relative z-10 space-y-6">
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                                                <TerminalPrompt
                                                    label="Role"
                                                    staticText="Software Development Engineer"
                                                />
                                            </motion.div>

                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                                <TerminalPrompt
                                                    label="About_me"
                                                    staticText="Focused on solving complex problems with a fundamental building mindset."
                                                />
                                            </motion.div>

                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                                <TerminalPrompt
                                                    label="Skills"
                                                    staticText="C++, Java, MERN Stack, System Design & Backend."
                                                />
                                            </motion.div>

                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                                <TerminalPrompt
                                                    label="Status"
                                                    staticText="OPEN TO ROLES / INTERNSHIPS"
                                                />
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                className="pt-6 border-t border-border/30 dark:border-[#30363d]"
                                            >
                                                <div className="flex items-center text-primary mb-4 font-bold">
                                                    <span className="text-secondary mr-2">{">"}</span>
                                                    <span className="text-foreground tracking-tight">Contact --links</span>
                                                </div>
                                                {/* [3] Iconic Links */}
                                                <div className="ml-4 flex flex-wrap text-foreground/90 gap-4 md:gap-7 font-bold">
                                                    {[
                                                        { label: "GitHub", href: "https://github.com/Aditya0Kumar", icon: Github },
                                                        { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-kumar-8b141516a/", icon: Linkedin },
                                                        { label: "Email", href: "mailto:2005aditya.k@gmail.com", icon: Mail },
                                                        { label: "Phone", href: "tel:+918851225478", icon: Phone }
                                                    ].map((link, i) => (
                                                        <motion.a
                                                            key={link.label}
                                                            initial={{ opacity: 0, y: 5 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.6 + (i * 0.05) }}
                                                            href={link.href}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="flex items-center gap-2 hover:text-primary transition-all hover:translate-x-1 group"
                                                        >
                                                            <link.icon size={14} className="group-hover:scale-110 transition-transform" />
                                                            {link.label}
                                                        </motion.a>
                                                    ))}
                                                </div>

                                                {/* [6] Authentic Terminal Cursor */}
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.8 }}
                                                    className="flex items-center text-primary mt-6"
                                                >
                                                    <span className="text-secondary mr-2 font-bold">{">"}</span>
                                                    <span className="font-bold text-xl animate-terminal-cursor">█</span>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* [9] Clear CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="flex justify-center lg:justify-start"
                                >
                                    <a
                                        href="/Aditya_Kumar_Resume.pdf"
                                        target="_blank"
                                        className="flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-space font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 group"
                                    >
                                        <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                                        DOWNLOAD RESUME
                                    </a>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
