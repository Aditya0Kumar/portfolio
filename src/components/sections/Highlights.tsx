"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

const HIGHLIGHTS = [
    {
        title: "Specialized in Backend Architecture",
        desc: "Expertise in C++20, Node.js, and high-performance system design with a focus on scalable and distributed infrastructure."
    },
    {
        title: "Top 25 Global Ranking",
        desc: "Ranked in the Top 25 at the TimeWrap International Hackathon (NIT Trichy) among hundreds of national and international teams."
    },
    {
        title: "Algorithmic Proficiency",
        desc: "Solved 500+ complex problems across various platforms."
    },
    {
        title: "Algorithmic Peak",
        desc: "Achieved peak Leetcode Contest Rating of 1702."
    },
    {
        title: "Full-Stack System Engineering",
        desc: "Proficient in the MERN stack with deep knowledge of Redis caching, message queues (BullMQ), and RBAC security models."
    },
    {
        title: "MongoDB Certified Proficiency",
        desc: "Awarded 10+ MongoDB Skill Badges, demonstrating verified expertise in complex NoSQL schema design, advanced aggregation, and distributed indexing."
    }
];

export const Highlights = () => {
    return (
        <section id="highlights" className="py-28 px-8 max-w-[1240px] mx-auto border-t border-border bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold">04 · Core Highlights</span>
                </div>
                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-semibold tracking-tight leading-tight text-foreground mb-6 underline decoration-primary/20 underline-offset-8">Career Milestones</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">Key performance indicators and technical breakthroughs from my professional journey.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {HIGHLIGHTS.map((point, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex gap-6"
                    >
                        <div className="pt-1.5">
                            <div className="w-10 h-10 rounded-xl bg-accent/30 border border-border flex items-center justify-center group-hover:border-primary/50 transition-all duration-500">
                                <ChevronRight className="text-primary w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{point.title}</h3>
                            <p className="text-muted-foreground leading-relaxed font-light text-[1.05rem] italic opacity-80 group-hover:opacity-100 transition-opacity">
                                "{point.desc}"
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
