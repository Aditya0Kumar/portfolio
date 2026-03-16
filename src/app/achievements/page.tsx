"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Trophy, User, Search } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { certificates } from "@/data/certificates";
import { CertificateCard } from "@/components/ui/CertificateCard";

export default function AchievementsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const achievements = useMemo(() => {
        return certificates.filter((cert) => {
            const isAchievement = cert.category === "achievement" || cert.category === "participation";
            const matchesSearch =
                cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
            return isAchievement && matchesSearch;
        });
    }, [searchQuery]);

    return (
        <main className="min-h-screen bg-background relative overflow-x-hidden pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <Link
                            href="/"
                            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4 font-mono text-sm font-bold"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            [ BACK TO HOME ]
                        </Link>
                        <h1 className="font-space text-4xl md:text-5xl font-bold text-foreground">
                            Hackathons & <span className="text-secondary italic">Achievements</span>
                        </h1>
                        <p className="text-muted-foreground mt-2 max-w-xl font-medium">
                            Recognizing my competitive participation, problem-solving feats, and community engagement.
                        </p>
                    </div>

                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search achievements..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white/50 dark:bg-[#0d1117]/50 border border-border/50 rounded-xl outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium text-sm"
                        />
                    </div>
                </div>

                {/* Badges/Stats Bar (Optional but cool) */}
                <div className="flex flex-wrap gap-6 mb-12">
                    <div className="flex items-center gap-3 bg-secondary/10 px-4 py-3 rounded-2xl border border-secondary/20">
                        <Trophy className="text-secondary" size={24} />
                        <div>
                            <p className="text-[10px] font-mono font-bold uppercase text-secondary/70 leading-none">Global Ranks</p>
                            <p className="text-sm font-bold text-foreground">Top 25 NIT Trichy</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-primary/10 px-4 py-3 rounded-2xl border border-primary/20">
                        <User className="text-primary" size={24} />
                        <div>
                            <p className="text-[10px] font-mono font-bold uppercase text-primary/70 leading-none">Participation</p>
                            <p className="text-sm font-bold text-foreground">Adobe Hackathon Finalist</p>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                {achievements.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {achievements.map((item) => (
                                <CertificateCard key={item.id} certificate={item} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <Trophy size={64} className="text-muted-foreground/20 mb-4" />
                        <h3 className="text-xl font-bold text-foreground">No achievements found</h3>
                        <p className="text-muted-foreground">Try a different search term.</p>
                    </div>
                )}
            </div>

            {/* Background Glows */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
        </main>
    );
}
