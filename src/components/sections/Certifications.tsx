"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CertificateCard } from "@/components/ui/CertificateCard";
import { certificates } from "@/data/certificates";
import { ArrowRight } from "lucide-react";

export const Certifications = () => {
    // Filter for professional certificates
    const allCerts = certificates.filter(cert => cert.category === "certificate");
    const displayedCerts = allCerts.slice(0, 3); // Showing fewer on home page for better flow

    return (
        <section id="certifications" className="py-28 px-8 max-w-[1240px] mx-auto border-t border-border bg-background">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-4 block">05 · Credentials</span>
                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-semibold tracking-tight leading-tight text-foreground mb-6">Certifications</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">Professional certifications and academic credentials validating technical expertise.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedCerts.map((item) => (
                    <CertificateCard key={item.id} certificate={item} />
                ))}
            </div>

            {allCerts.length > 3 && (
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/certificates"
                        className="group flex items-center gap-2 px-8 py-3 bg-accent/30 border border-border rounded-full text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    >
                        View All ({allCerts.length}) <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            )}
        </section>
    );
};
