"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowLeft, Award, Trophy, User } from "lucide-react";
import Link from "next/link";
import { certificates, Certificate } from "@/data/certificates";
import { CertificateCard } from "@/components/ui/CertificateCard";

type Category = "all" | "certificate" | "achievement" | "participation";

export default function CertificatesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<Category>("all");

    const filteredCertificates = useMemo(() => {
        return certificates.filter((cert) => {
            const matchesSearch = 
                cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "all" || cert.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    const categories: { label: string; value: Category; icon: any }[] = [
        { label: "All", value: "all", icon: Award },
        { label: "Courses", value: "certificate", icon: Award },
        { label: "Hackathons", value: "achievement", icon: Trophy },
        { label: "Events", value: "participation", icon: User },
    ];

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
                            Professional <span className="text-primary italic">Accolades</span>
                        </h1>
                        <p className="text-muted-foreground mt-2 max-w-xl font-medium">
                            A comprehensive collection of my technical certifications, hackathon achievements, and participation records.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search */}
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search certificates..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white/50 dark:bg-[#0d1117]/50 border border-border/50 rounded-xl outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border/50">
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setSelectedCategory(cat.value)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                                selectedCategory === cat.value
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "bg-white/50 dark:bg-[#0d1117]/50 text-muted-foreground border border-border/50 hover:border-primary/30"
                            }`}
                        >
                            <cat.icon size={16} />
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {filteredCertificates.length > 0 ? (
                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredCertificates.map((cert) => (
                                <CertificateCard key={cert.id} certificate={cert} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <Award size={64} className="text-muted-foreground/20 mb-4" />
                        <h3 className="text-xl font-bold text-foreground">No certificates found</h3>
                        <p className="text-muted-foreground">Try adjusting your search or filter settings.</p>
                        <button 
                            onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                            className="mt-6 text-primary font-mono text-sm font-bold hover:underline"
                        >
                            [ CLEAR ALL FILTERS ]
                        </button>
                    </motion.div>
                )}
            </div>
            
            {/* Background Glows */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
        </main>
    );
}
