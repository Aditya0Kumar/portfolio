"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface DesktopIconProps {
    icon: LucideIcon;
    label: string;
    onClick: () => void;
}

export const DesktopIcon = ({ icon: Icon, label, onClick }: DesktopIconProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="flex flex-col items-center gap-1.5 p-3 rounded-xl transition-colors group w-24"
        >
            <div className="p-3 bg-white/5 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 dark:border-white/5 shadow-lg group-hover:shadow-primary/20 transition-all">
                <Icon className="w-8 h-8 text-primary group-hover:text-primary/80" />
            </div>
            <span className="text-[10px] font-mono font-bold text-foreground/70 dark:text-foreground/50 tracking-tight text-center truncate w-full">
                {label}
            </span>
        </motion.button>
    );
};
