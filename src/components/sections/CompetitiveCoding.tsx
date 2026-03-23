"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Trophy, Flame, Target } from "lucide-react";

interface PlatformStats {
    label: string;
    username: string;
    metrics: {
        label: string;
        value: string;
        icon: any;
    }[];
    rank: string;
    color: string;
}

export const CompetitiveCoding = () => {
    const [stats] = useState<PlatformStats[]>([
        {
            label: "LeetCode",
            username: "kumaraditya15",
            metrics: [
                { label: "Solved", value: "400+", icon: Target },
                { label: "Rating", value: "1702", icon: Flame }
            ],
            rank: "Top 12%",
            color: "#FFA116"
        },
        {
            label: "CodeChef",
            username: "adityakumar05",
            metrics: [
                { label: "Rating", value: "1364", icon: Flame },
                { label: "Division", value: "Div 4", icon: Trophy }
            ],
            rank: "Rank 52613",
            color: "#5B4638"
        },
        {
            label: "CodeForces",
            username: "kumaraditya15",
            metrics: [
                { label: "Rating", value: "1149", icon: Flame },
                { label: "Level", value: "Newbie", icon: Trophy }
            ],
            rank: "Rank 1149",
            color: "#1F8ACB"
        }
    ]);

    return (
        <section id="cp" className="py-28 px-8 max-w-[1240px] mx-auto border-t border-border bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <Code2 className="text-primary w-5 h-5" />
                        <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold">07 · ALGORITHMIC RIGOR</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 bg-primary/5 border border-primary/20 px-4 py-1.5 rounded-full">
                        <Flame className="w-3.5 h-3.5 text-primary" />
                        <span className="text-primary text-[0.65rem] font-bold font-mono tracking-widest uppercase">500+ SOLVED ACROSS</span>
                    </div>
                </div>
                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-semibold tracking-tight leading-tight text-foreground mb-6">Competitive Coding</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">Validating problem-solving speed and algorithmic depth across leading competitive platforms.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((platform, i) => (
                    <motion.div
                        key={platform.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-accent/20 border border-border p-10 rounded-2xl group hover:border-primary/30 transition-all duration-500 relative overflow-hidden h-full flex flex-col"
                    >
                        {/* Platform Branding */}
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{platform.label}</h3>
                                <p className="text-muted-foreground/60 text-[0.65rem] font-mono tracking-widest font-bold">@{platform.username}</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center">
                                <Code2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 flex-1">
                            {platform.metrics.map((metric, mIdx) => (
                                <div key={mIdx} className="p-4 bg-background border border-border rounded-xl group-hover:bg-primary/5 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <metric.icon className="w-3.5 h-3.5 text-primary" />
                                        <span className="text-muted-foreground/50 text-[0.6rem] font-bold uppercase tracking-widest">{metric.label}</span>
                                    </div>
                                    <div className="text-lg font-bold text-foreground leading-tight">{metric.value}</div>
                                </div>
                            ))}
                        </div>

                        {/* Rank Info */}
                        <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
                            <span className="text-muted-foreground text-[0.65rem] font-light italic opacity-60">Status</span>
                            <span className="px-3 py-1 bg-accent rounded text-[0.6rem] font-bold uppercase tracking-[0.2em] text-primary">{platform.rank}</span>
                        </div>

                        {/* Accent Line */}
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/0 group-hover:bg-primary transition-all duration-700" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
