"use client";

import { motion } from "framer-motion";
import { Bold } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 z-0 bg-grid-blueprint" />
            <div className="flex items-center mb-12">
                <h2 className="font-space text-3xl font-bold text-foreground">
                    <span className="text-primary mr-2">01.</span>
                    About Me
                </h2>
                <div className="h-px bg-border flex-1 ml-6" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 font-inter text-muted-foreground leading-relaxed text-base"
                >
                    <p>
                        I am a <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">Software Developer</span> driven by the challenge of architecting scalable systems and high-performance backends. Currently pursuing my B.Tech in CSE at LPU (CGPA 8.61), I dedicate myself to understanding the <span className="text-primary font-bold">first principles</span> of every technology I touch.
                    </p>
                    <p>
                        My engineering approach is rooted in <span className="text-foreground font-semibold">building from fundamentals</span>. Whether it's crafting a custom database engine or implementing complex multi-tenant architectures, I believe that true mastery comes from knowing how the "black boxes" operate beneath the surface.
                    </p>
                    <p>
                        I learn new technologies by <span className="text-foreground font-semibold italic">breaking things first</span>. I dive into documentation, build a functional prototype that solves a real pain point, and then refactor it for performance using strategies like Redis caching, BullMQ background processing, and REST API optimization.
                    </p>
                    <p>
                        With a peak LeetCode rating of <span className="font-bold text-primary">1702</span> and <span className="font-bold text-primary">400+</span> problems solved, I view every bug as a <span className="text-secondary font-bold italic">logical puzzle</span> waiting to be solved through elegant, scalable code.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    {/* Professional Profiling Output Card */}
                    <div className="relative border dark:border-border/30 border-border dark:bg-[#0d1117]/80 bg-white/70 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-2xl font-mono text-xs leading-snug overflow-hidden group">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 p-4 opacity-[0.03] dark:opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                            <svg className="w-32 h-32 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                            </svg>
                        </div>

                        <div className="text-secondary mb-6 font-bold text-[10px] uppercase tracking-[0.2em] flex items-center">
                            <div className="w-2 h-2 rounded-full bg-secondary mr-3 animate-pulse" />
                            System_Identity.profile
                        </div>

                        <div className="space-y-3">
                            {[
                                { label: "Core_Stack", value: "C++, Java, MERN, Redis" },
                                { label: "Methodology", value: "Fundamentals-First, Agile" },
                                { label: "Learning", value: "Architecture, System Design" },
                                { label: "Soft_Skills", value: "Problem-Solving, Leadership" },
                                { label: "Hobbies", value: "Competitive Programming, Open Source Contributing, PC Gaming, Traveling" }
                            ].map((row) => (
                                <div key={row.label} className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-6 border-b dark:border-border/10 border-border/20 pb-3 last:border-0 last:pb-0 group-hover:translate-x-1 transition-transform">
                                    <span className="font-bold text-foreground/40 text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pt-0.5">{row.label}</span>
                                    <span className="text-primary font-bold text-xs leading-relaxed text-right">{row.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-4 border-t dark:border-border/20 border-border/40 flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60">
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-green-500" />
                                Node: <span className="text-foreground/80 lowercase">operational</span>
                            </div>
                            <div className="font-mono opacity-40 italic">v5.0.0-stable</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
