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
            className="group relative h-full flex flex-col rounded-2xl border border-border/50 bg-white/50 dark:bg-[#0d1117]/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
        >
            {/* Image Section */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted group/frame">
                {certificate.verificationLink ? (
                    <div className="w-full h-full relative">
                        <iframe
                            src={certificate.verificationLink.replace('/open?id=', '/file/d/') + '/preview'}
                            className="w-full h-[150%] -top-[25%] absolute border-0 pointer-events-none group-hover/frame:scale-105 transition-transform duration-500"
                            allow="autoplay"
                            title={certificate.title}
                            loading="lazy"
                        />
                        {/* Overlay to catch hover and prevent interaction with iframe inside card */}
                        <div className="absolute inset-0 z-10 bg-transparent" />
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full h-full text-muted-foreground/20">
                        <Award size={48} />
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-20 px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-md border border-border text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                    {certificate.category}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-5 flex flex-col">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {certificate.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-mono text-[10px] font-bold mb-2 uppercase tracking-tight">
                        <Home size={10} strokeWidth={3} />
                        {certificate.issuer}
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 italic mb-4">
                        {certificate.description}
                    </p>
                </div>

                <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground font-mono text-[10px] font-bold">
                        <Calendar size={12} />
                        {certificate.date}
                    </div>

                    <a
                        href={certificate.verificationLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-xs font-bold font-mono group/btn"
                    >
                        [ VIEW ]
                        <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
