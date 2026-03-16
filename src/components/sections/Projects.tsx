"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FolderGit2, ExternalLink, Cpu } from "lucide-react";

const projects = [
    {
        id: "ardentdb",
        name: "ArdentDB.cpp",
        type: "Database Engine",
        description: "Implementing an in-memory B-Tree index with page-based pager layer, dirty page tracking, and sequential file I/O while exploring WAL for crash recovery semantics and storage correctness. Includes a RAG-style retrieval pipeline.",
        stack: ["C++20", "STL", "File I/O", "GTest"],
        github: "https://github.com/Aditya0Kumar/ardentDB",
        featured: true,
    },
    {
        id: "trackr",
        name: "Trackr.js",
        type: "Workforce Management",
        description: "Architected a multi-tenant SPA using React.js, Tailwind CSS, and Redux Toolkit, powered by a Node.js/Express backend with Redis read-through caching and explicit invalidation to reduce redundant MongoDB queries and improve API latency. Engineered full-stack Role-Based Access Control (RBAC) synchronizing dynamic frontend UI rendering with robust backend middleware; integrated BullMQ background workers, JWT authentication, and IP rate limiting. Enabled real-time collaboration via Socket.io room-based pub/sub for chat and live updates.",
        stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "Socket.io"],
        github: "https://github.com/Aditya0Kumar/trackr",
        featured: true,
    },
    {
        id: "finance-dashboard",
        name: "Finance_Analysis_and_Prediction.tsx",
        type: "AI-Powered Full-Stack Dashboard",
        description: "Developed a full-stack Finance Manager dashboard for tracking KPIs, products, and transactions using React (TypeScript), MUI, Redux Toolkit, Node.js, Express.js, and MongoDB. Built REST APIs with MongoDB aggregation pipelines for KPI and transaction analytics, powering dynamic charts with Recharts. Resolved data inconsistencies by normalizing schemas and centralizing aggregation logic.",
        stack: ["React(TS)", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Recharts"],
        github: "https://github.com/Aditya0Kumar/Finance-Analysis-and-Prediction",
        featured: false,
    },
    {
        id: "swifthealth",
        name: "SwiftHealth.php",
        type: "Healthcare Platform",
        description: "Built a responsive appointment booking platform with an integrated emergency alert feature for quick access to critical services. Designed core application flows including authentication and dashboards. Developed PHP-based backend services with a MySQL database.",
        stack: ["HTML", "JavaScript", "PHP", "MySQL", "Tailwind CSS"],
        github: "https://github.com/Aditya0Kumar/SwiftHealth",
        featured: false,
    }
];

interface ProjectsProps {
    onDeepDive: (id: string) => void;
}

export const Projects = ({ onDeepDive }: ProjectsProps) => {
    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex items-center mb-12">
                <h2 className="font-space text-3xl font-bold text-foreground">
                    <span className="text-primary mr-2">03.</span>
                    Projects Modules
                </h2>
                <div className="h-px bg-border flex-1 ml-6" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`group flex flex-col justify-between p-6 rounded-xl border dark:bg-black/95 bg-white/95 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${project.featured ? "border-primary/50 dark:border-primary/50 shadow-lg shadow-primary/10" : "dark:border-border/50 border-border"
                            }`}
                    >
                        {/* Window Header */}
                        <div className="flex items-center justify-between border-b dark:border-border/50 border-border/70 pb-4 mb-4">
                            <div className="flex space-x-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-colors" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-colors" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 group-hover:bg-green-500 transition-colors" />
                            </div>
                            <div className="font-mono text-xs text-muted-foreground flex items-center font-bold tracking-tight">
                                <FolderGit2 className="w-3 h-3 mr-2 text-primary" />
                                {project.name}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="text-secondary font-mono text-xs mb-2 font-bold tracking-widest text-primary/80">[{project.type}]</div>
                            <h3 className="text-xl font-bold text-foreground mb-3 font-space group-hover:text-primary transition-colors tracking-tight">
                                {project.name.split('.')[0]}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-inter font-medium opacity-90">
                                {project.description}
                            </p>
                        </div>

                        {/* Footer Stack & Links */}
                        <div className="mt-auto space-y-6">
                            <div className="flex flex-wrap gap-2 font-mono text-[10px] md:text-xs">
                                {project.stack.map(tech => (
                                    <span key={tech} className="px-2 py-0.5 dark:bg-border/40 bg-slate-200/50 rounded-sm font-bold text-foreground/80">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t dark:border-border/50 border-border/70 font-mono text-xs font-bold">
                                <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                    [ GitHub ]
                                </a>
                                <button
                                    onClick={() => onDeepDive(project.id)}
                                    className="flex items-center text-primary hover:text-secondary transition-colors group/btn cursor-pointer"
                                >
                                    <Cpu className="w-3 h-3 mr-1.5 group-hover/btn:rotate-12 transition-transform" />
                                    [ Architecture Deep Dive ]
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
