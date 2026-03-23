"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CertificateCard } from "@/components/ui/CertificateCard";
import { certificates } from "@/data/certificates";
import { ChevronDown, ChevronUp, Trophy } from "lucide-react";

export const Hackathons = () => {
    const [showAll, setShowAll] = useState(false);

    // Filter for Hackathons
    const hackathons = certificates.filter(cert =>
        cert.title.match(/Hackathon|BlightBlitz|TIME WARP/i) ||
        cert.category === "participation" && cert.title.match(/Adobe|Pragyan/i)
    );
    const displayedItems = showAll ? hackathons : hackathons.slice(0, 5);

    return (
        <section id="hackathons" className="py-28 px-8 max-w-[1240px] mx-auto border-t border-border bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="flex items-center gap-3 mb-4">
                    <Trophy className="text-primary w-5 h-5" />
                    <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold">06 · COMPETITIVE INNOVATION</span>
                </div>
                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-semibold tracking-tight leading-tight text-foreground mb-6">Hackathons</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">National and international hackathons where I built production-ready prototypes under high-pressure constraints.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {displayedItems.map((item) => (
                        <CertificateCard key={item.id} certificate={item} />
                    ))}
                </AnimatePresence>
            </div>

            {hackathons.length > 5 && (
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 px-8 py-3 bg-accent/30 border border-border rounded-full text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    >
                        {showAll ? (
                            <>Collapse <ChevronUp size={14} /></>
                        ) : (
                            <>View All Hackathons ({hackathons.length}) <ChevronDown size={14} /></>
                        )}
                    </button>
                </div>
            )}
        </section>
    );
};
