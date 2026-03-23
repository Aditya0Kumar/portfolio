"use client";

import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Rocket, Terminal, Trophy } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-28 px-8 max-w-[1240px] mx-auto border-t border-border bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-4 block">01 · Identity</span>
                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-semibold tracking-tight leading-tight text-foreground mb-6">About Me</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">Software Engineer focused on high-performance backend systems and scalable architecture.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                >
                    <div className="bg-accent/30 border border-border rounded-2xl p-10 shadow-xl overflow-hidden group transition-colors duration-500">
                        <div className="flex items-center gap-8 mb-10">
                            <div className="w-24 h-24 rounded-2xl bg-background border border-border overflow-hidden shrink-0 group-hover:border-primary/50 transition-colors duration-500">
                                <img
                                    src="/AdityaKumar.jpg"
                                    alt="Aditya Kumar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground mb-1">Aditya Kumar</h3>
                                <p className="text-primary text-sm font-mono tracking-widest uppercase font-bold">Software Engineer</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            {[
                                { label: "Location", val: "New Delhi, India", icon: MapPin },
                                { label: "Education", val: "B.Tech CSE @ LPU", icon: GraduationCap },
                                { label: "Status", val: "Open for SDE Roles", icon: Rocket },
                                { label: "Performance", val: "500+ DSA Problems Solved", icon: Terminal }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-1.5 pt-4 border-t border-border">
                                    <div className="flex items-center gap-2 text-muted-foreground/60">
                                        <item.icon size={14} />
                                        <span className="text-[0.65rem] uppercase tracking-widest font-bold font-mono">{item.label}</span>
                                    </div>
                                    <span className="text-muted-foreground text-sm font-medium">{item.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Subtle Side Accent */}
                    <div className="absolute top-10 -left-1 w-[2px] h-20 bg-primary rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-8"
                >
                    <p className="text-[1.1rem] text-muted-foreground leading-[1.8] font-light">
                        I'm <span className="text-foreground font-medium">Aditya Kumar</span> — a Software Engineering undergraduate dedicated to architecting high-availability infrastructure and scalable backend solutions. My approach is rooted in <span className="text-primary font-medium">first-principles thinking</span> and performance-first logic.
                    </p>
                    <p className="text-[1.1rem] text-muted-foreground leading-[1.8] font-light">
                        Currently spearheading technical initiatives at LPU, I specialized in the <span className="text-foreground font-medium">MERN stack</span> while maintaining a deep expertise in C++ and Core CS fundamentals. I focus on building systems that don't just solve problems, but scale effortlessly as they grow.
                    </p>
                    <div className="pt-6">
                        <h4 className="text-foreground text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-primary" />
                            Current Focus
                        </h4>
                        <p className="text-[1rem] text-muted-foreground leading-[1.8] font-light italic">
                            "Optimizing low-level storage engines and exploring high-concurrency patterns in distributed environments."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
