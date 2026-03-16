"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    Code2, Server, Layout, Database, Terminal, UserCheck,
    Cpu, Coffee, Binary, FileCode, Zap, Globe, Webhook,
    Lock, Layers, Atom, Component, RefreshCcw, Palette,
    Brush, Network, Search, GitBranch, Calculator,
    Box, Brain, Trophy, Target, MessageSquare,
    Filter, CpuIcon
} from "lucide-react";

interface SkillItem {
    name: string;
    value: number;
    icon: any;
    slug?: string;
}

interface SkillGroup {
    category: string;
    icon: any;
    color: string;
    items: SkillItem[];
    tags: string[];
    bg: string;
}

const skillsData: SkillGroup[] = [
    {
        category: "Languages",
        icon: Code2,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        tags: ["all", "backend"],
        items: [
            { name: "C++", value: 95, icon: Cpu, slug: "cpp" },
            { name: "Java", value: 90, icon: Coffee, slug: "java" },
            { name: "JavaScript", value: 92, icon: Code2, slug: "js" },
            { name: "C", value: 85, icon: Binary, slug: "c" },
            { name: "Python", value: 80, icon: FileCode, slug: "python" },
        ]
    },
    {
        category: "Backend",
        icon: Server,
        color: "text-green-500",
        bg: "bg-green-500/10",
        tags: ["all", "backend"],
        items: [
            { name: "Node.js", value: 90, icon: Terminal, slug: "nodejs" },
            { name: "Express.js", value: 88, icon: Zap, slug: "express" },
            { name: "REST API", value: 92, icon: Webhook, slug: "postman" },
            { name: "Redis", value: 82, icon: Zap, slug: "redis" },
            { name: "Architecture", value: 85, icon: Layers },
            { name: "BullMQ", value: 80, icon: Zap },
        ]
    },
    {
        category: "Frontend",
        icon: Layout,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        tags: ["all", "frontend"],
        items: [
            { name: "React.js", value: 90, icon: Atom, slug: "react" },
            { name: "Next.js", value: 85, icon: Component, slug: "nextjs" },
            { name: "Redux", value: 82, icon: RefreshCcw, slug: "redux" },
            { name: "Tailwind", value: 95, icon: Palette, slug: "tailwind" },
            { name: "CSS3", value: 92, icon: Brush, slug: "css" },
        ]
    },
    {
        category: "Databases",
        icon: Database,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        tags: ["all", "database"],
        items: [
            { name: "MongoDB", value: 90, icon: Database, slug: "mongodb" },
            { name: "PostgreSQL", value: 82, icon: Database, slug: "postgres" },
            { name: "MySQL", value: 85, icon: Database, slug: "mysql" },
            { name: "Schema", value: 88, icon: Network },
            { name: "Optimization", value: 80, icon: Search },
        ]
    },
    {
        category: "Tools & Core",
        icon: CpuIcon,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        tags: ["all", "tools"],
        items: [
            { name: "Git & GitHub", value: 95, icon: GitBranch, slug: "git" },
            { name: "DS & Algo", value: 92, icon: Calculator },
            { name: "OOPS", value: 95, icon: Box },
            { name: "OS & DBMS", value: 88, icon: Binary },
            { name: "System Design", value: 80, icon: Layers },
        ]
    },
    {
        category: "System DNA",
        icon: UserCheck,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        tags: ["all", "professional"],
        items: [
            { name: "Problem Solving", value: 98, icon: Brain },
            { name: "Leadership", value: 90, icon: Target },
            { name: "Collaboration", value: 95, icon: Trophy },
            { name: "Scalability Mindset", value: 92, icon: Zap },
            { name: "Architecture First", value: 90, icon: Layers },
        ]
    },
];

const categories = [
    { id: "all", label: "All Systems" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Engineering" },
];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skillsData.filter(group => group.tags.includes(activeCategory));

    return (
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
            {/* Background elements for depth */}
            <div className="absolute top-0 right-0 -z-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] opacity-20" />
            <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] opacity-20" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-16 relative z-10">
                <div className="space-y-4">
                    <div className="flex items-center">
                        <h2 className="font-space text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
                            <span className="text-primary mr-3 italic">02.</span>
                            Technical <span className="text-secondary">Arsenal</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground font-inter text-sm max-w-md">
                        A metrics-driven overview of my core competencies, from system architecture to frontend orchestration.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/40 dark:bg-white/5 rounded-2xl border border-border/50 backdrop-blur-md self-start">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${activeCategory === cat.id
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                                : "text-muted-foreground hover:text-foreground hover:bg-slate-200/80 dark:hover:bg-white/10"
                                }`}
                        >
                            {activeCategory === cat.id && <Filter className="w-3 h-3" />}
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10"
            >
                <AnimatePresence mode="popLayout">
                    {filteredSkills.map((group, groupIdx) => {
                        const CategoryIcon = group.icon;
                        return (
                            <motion.div
                                key={group.category}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
                                className="relative p-8 rounded-3xl border dark:border-border/10 border-slate-200/60 bg-white/80 dark:bg-[#0d1117]/60 backdrop-blur-xl shadow-lg shadow-slate-200/60 dark:shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-[0.08] dark:opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                                    <CategoryIcon size={120} />
                                </div>

                                <div className="flex items-center gap-4 mb-10">
                                    <div className={`p-4 rounded-2xl ${group.bg} ${group.color} ring-1 ring-inset ring-current/20 shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-primary/5`}>
                                        <CategoryIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-muted-foreground/60 dark:text-muted-foreground/40 mb-1 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-primary" />
                                            Stack
                                        </h3>
                                        <p className="text-foreground text-lg font-bold tracking-tighter leading-none">{group.category}</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {group.items.map((skill) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <div key={skill.name} className="flex flex-col gap-3 group/skill">
                                                <div className="flex justify-between items-end gap-4">
                                                    <div className="flex items-center gap-3 min-w-0">
                                                        {skill.slug ? (
                                                            <div className="w-7 h-7 flex items-center justify-center rounded-xl bg-slate-100/60 dark:bg-white/5 shadow-sm ring-1 ring-border/50 group-hover/skill:ring-primary/40 transition-all duration-300">
                                                                <img
                                                                    src={`https://skillicons.dev/icons?i=${skill.slug}`}
                                                                    className="w-5 h-5 flex-shrink-0 object-contain group-hover/skill:scale-125 transition-transform duration-500"
                                                                    alt={skill.name}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="w-7 h-7 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover/skill:bg-primary group-hover/skill:text-primary-foreground shadow-inner transition-all duration-500">
                                                                <SkillIcon className="w-4 h-4" />
                                                            </div>
                                                        )}
                                                        <span className="text-foreground/90 font-bold text-sm tracking-tight group-hover/skill:text-primary transition-colors duration-300 truncate">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-baseline gap-1 text-muted-foreground/80 dark:text-muted-foreground/60 font-mono text-[10px] font-bold">
                                                        <span>{skill.value}</span>
                                                        <span className="text-[8px]">%</span>
                                                    </div>
                                                </div>
                                                <div className="h-1.5 w-full bg-slate-200/40 dark:bg-white/5 rounded-full overflow-hidden shadow-inner ring-1 ring-black/5">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.value}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
                                                        className={`h-full bg-gradient-to-r ${group.color.replace('text', 'from')} to-secondary rounded-full relative`}
                                                    >
                                                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:0.75rem_0.75rem] opacity-30" />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};
