"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar, Home } from "lucide-react";
import Image from "next/image";
import { Certificate } from "@/data/certificates";

interface CertificateCardProps {
    certificate: Certificate;
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="group relative h-full flex flex-col rounded-2xl border border-border bg-accent/20 overflow-hidden hover:border-primary/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500"
        >
            {/* Image Section */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-background group/frame border-b border-border">
                {certificate.verificationLink && certificate.verificationLink.includes('drive.google.com') ? (
                    <div className="w-full h-full relative">
                        <iframe
                            src={certificate.verificationLink.replace('/open?id=', '/file/d/') + '/preview'}
                            className="w-full h-[150%] -top-[25%] absolute border-0 pointer-events-none group-hover/frame:scale-105 transition-transform duration-500 opacity-60 group-hover/frame:opacity-100 transition-opacity"
                            allow="autoplay"
                            title={certificate.title}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 z-10 bg-transparent" />
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full h-full text-muted-foreground group-hover:text-primary transition-colors duration-500">
                        <Award size={48} strokeWidth={1.5} />
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-[0.6rem] font-bold uppercase tracking-widest text-primary">
                    {certificate.category}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 flex flex-col">
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors mb-4 line-clamp-2 tracking-tight">
                        {certificate.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary text-[0.65rem] font-bold mb-4 uppercase tracking-widest font-mono">
                        <Home size={12} strokeWidth={2.5} />
                        {certificate.issuer}
                    </div>
                    <p className="text-muted-foreground text-[0.9rem] leading-relaxed line-clamp-2 font-light italic mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                        {certificate.description}
                    </p>
                </div>

                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground/60 text-[0.65rem] font-bold uppercase tracking-widest font-mono">
                        <Calendar size={12} />
                        {certificate.date}
                    </div>

                    <a
                        href={certificate.verificationLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 text-[0.65rem] font-bold font-mono tracking-widest group/btn"
                    >
                        VIEW
                        <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
