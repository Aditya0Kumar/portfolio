"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Database, HardDrive, Cpu, FileJson, ArrowDown,
    LayoutList, Server, ShieldCheck, Zap, Layers,
    Activity, Bell, Calendar, X, Globe, BarChart3,
    CheckCircle2, Code2, Info, Workflow
} from "lucide-react";

interface ArchitectureStep {
    icon: any;
    title: string;
    desc: string;
}

interface ProjectArchitecture {
    title: string;
    overview: string;
    problem: string;
    features: string[];
    stack: string[];
    decisions: string[];
    tradeoffs: string[];
    hld: ArchitectureStep[];
    flowDetail: string;
}

const projectArchitectures: Record<string, ProjectArchitecture> = {
    ardentdb: {
        title: "ArdentDB Engine Architecture",
        overview: "A high-performance, disk-based SQL database engine built from scratch in C++.",
        problem: "Traditional high-level APIs often abstract away the complexities of storage and concurrency. ArdentDB was built to deeply understand and implement the core mechanics of how data is reliably stored, indexed, and recovered on disk.",
        features: [
            "B+ Tree Indexing for O(log n) lookups",
            "Page-based buffer replacement (LRU)",
            "Write-Ahead Logging (WAL) for crash recovery",
            "ACID Compliance (Atomicity, Durability focus)"
        ],
        stack: ["C++17", "Standard Library", "POSIX threads", "GTest"],
        decisions: [
            "B+ Trees: Chosen over Hash Maps to support range queries efficiently while maintaining shallow tree heights for disk-optimized access.",
            "Write-Ahead Logging: Implemented to ensure 'Durability' by logging changes to an append-only file before updating the data pages.",
            "Pager abstraction: Separates logical page access from physical file I/O, enabling efficient buffer management."
        ],
        tradeoffs: [
            "Write Latency vs Durability: Synchronous WAL writes improve durability but introduce IO wait; mitigatable through group commits.",
            "Disk-based vs In-memory: Slower than Redis but handles datasets larger than available RAM with predictable performance."
        ],
        hld: [
            { icon: FileJson, title: "SQL Parser", desc: "Lex/Parse to AST" },
            { icon: LayoutList, title: "Query Plan", desc: "Tree-based execution logic" },
            { icon: Database, title: "B+ Tree", desc: "Disk-optimized indexing" },
            { icon: HardDrive, title: "Buffer Pool", desc: "LRU Page management" },
            { icon: ShieldCheck, title: "WAL Module", desc: "Crash recovery semantics" },
        ],
        flowDetail: "The engine utilizes a Buffer Pool Manager to minimize disk I/O. When a query is executed, it traverses the B+ Tree index. If a page isn't in memory, the Pager fetches it from disk using an LRU policy. All modifications are first captured in the WAL to guarantee recovery after a system failure."
    },
    trackr: {
        title: "Trackr System Architecture",
        overview: "A multi-tenant workforce management platform designed for scale.",
        problem: "Managing consistent state across thousands of real-time multi-tenant users while maintaining data isolation and low-latency reporting.",
        features: [
            "Multi-tenant data isolation",
            "Real-time Socket.io workspace syncing",
            "BullMQ background processing",
            "Redis read-through caching"
        ],
        stack: ["React.js", "Node.js", "Express", "MongoDB", "Redis", "BullMQ"],
        decisions: [
            "BullMQ: Offloaded report generation to prevent blocking the Node.js event loop.",
            "Redis Caching: Implemented for frequently accessed tenant settings to reduce MongoDB load."
        ],
        tradeoffs: [
            "Real-time vs Consistency: Socket.io provides 'eventual consistency' for UI updates to maintain high throughput.",
            "Multi-tenancy: Shared database approach chosen for cost-efficiency, with strict query-level tenant filters."
        ],
        hld: [
            { icon: Globe, title: "Gateway", desc: "Tenant identification" },
            { icon: Zap, title: "Cache", desc: "Redis read-through" },
            { icon: Activity, title: "Workers", desc: "BullMQ job processing" },
            { icon: Layers, title: "Sync", desc: "Socket.io isolation" },
        ],
        flowDetail: "Tenant requests are categorized by subdomain. The system prioritizes Redis for configuration lookups. Heavy computational metrics are generated asynchronously via workers, ensuring a snappy user experience."
    },
    "finance-dashboard": {
        title: "Finance Analytics Pipeline",
        overview: "A secure financial tracker that normalizes transaction data.",
        problem: "Processing disparate financial data streams and providing real-time aggregation without complex database-side overhead.",
        features: [
            "Automated transaction categorization",
            "Predictive spending analytics",
            "Multi-currency support"
        ],
        stack: ["Next.js", "TailwindCSS", "MongoDB", "Recharts"],
        decisions: [
            "Aggregation Pipeline: Used MongoDB's native framework for high-performance rollups.",
            "Next.js API Routes: Leveraged for secure server-side transaction normalization."
        ],
        tradeoffs: [
            "Aggregation Speed: Pre-calculating daily totals (bucketing) saves compute time but adds storage overhead."
        ],
        hld: [
            { icon: Server, title: "Ingestion", desc: "Data normalization" },
            { icon: Layers, title: "Aggregator", desc: "MongoDB Pipeline" },
            { icon: BarChart3, title: "Analytics", desc: "Visualization engine" },
        ],
        flowDetail: "Data flows from the ingestion layer into a normalized MongoDB collection. Real-time aggregations provide the frontend with scoped spending data, optimized through specialized index coverage."
    },
    swifthealth: {
        title: "SwiftHealth Service Flow",
        overview: "A healthcare management system focusing on scheduling efficiency.",
        problem: "Coordinating hospital resource availability with patient appointments in a highly concurrent environment.",
        features: [
            "Dynamic appointment slot allocation",
            "Emergency alert dispatch system",
            "Patient record encryption"
        ],
        stack: ["PHP", "MySQL", "JavaScript", "JWT"],
        decisions: [
            "MySQL Transactions: Used for atomic slot booking to prevent double-booking.",
            "JWT: Stateless auth for scalable patient/doctor portal access."
        ],
        tradeoffs: [
            "Relational vs NoSQL: MySQL chosen for its strong consistency (ACID) which is critical for medical records."
        ],
        hld: [
            { icon: Calendar, title: "Engine", desc: "Atomic scheduling" },
            { icon: Bell, title: "Alerts", desc: "Priority dispatch" },
            { icon: ShieldCheck, title: "Security", desc: "JWT/Stateful auth" },
        ],
        flowDetail: "The system ensures high availability for emergency alerts. Appointment booking utilizes database-level locking to maintain schedule integrity during peak traffic."
    }
};

interface ArchitectureProps {
    projectId: string;
    onClose: () => void;
}

export const Architecture = ({ projectId, onClose }: ArchitectureProps) => {
    const arch = projectArchitectures[projectId] || projectArchitectures.ardentdb;

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 dark:bg-black/90 backdrop-blur-sm"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0D1117] border dark:border-[#30363d] border-border rounded-2xl shadow-2xl font-mono no-scrollbar"
            >
                {/* Modal Header */}
                <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-white/80 dark:bg-[#0D1117]/80 backdrop-blur-md border-b dark:border-[#30363d] border-border">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center">
                        <span className="text-primary mr-3 text-2xl">{"//"}</span>
                        {arch.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-primary/10 rounded-full text-muted-foreground hover:text-primary transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 md:p-10 space-y-12">
                    {/* Project Overview & Tech Stack */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                            <div className="flex items-center text-primary mb-2">
                                <Info className="w-4 h-4 mr-2" />
                                <span className="text-xs font-bold uppercase tracking-widest">Project Overview</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                {arch.overview}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center text-secondary mb-2">
                                <Code2 className="w-4 h-4 mr-2" />
                                <span className="text-xs font-bold uppercase tracking-widest">Tech Stack</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {arch.stack.map(tech => (
                                    <span key={tech} className="px-3 py-1 dark:bg-[#161b22] bg-slate-100 border dark:border-[#30363d] border-border rounded-md text-[10px] md:text-xs font-bold text-foreground">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Problem Statement */}
                    <div className="space-y-4">
                        <div className="flex items-center text-primary mb-2">
                            <Info className="w-4 h-4 mr-2" />
                            <span className="text-xs font-bold uppercase tracking-widest">The Problem</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base border-l-2 border-primary/20 pl-6 italic">
                            {arch.problem}
                        </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                        <div className="flex items-center text-accent mb-2">
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            <span className="text-xs font-bold uppercase tracking-widest">Engineering Features</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {arch.features.map((feature, i) => (
                                <div key={i} className="flex items-start p-3 dark:bg-[#161b22]/50 bg-slate-50 border dark:border-[#30363d]/50 border-border/50 rounded-lg group hover:border-accent/30 transition-colors">
                                    <span className="text-accent mr-3 mt-0.5">•</span>
                                    <span className="text-sm text-foreground/80 font-medium group-hover:text-foreground transition-colors">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* HLD Diagram Section */}
                    <div className="space-y-6">
                        <div className="flex items-center text-primary mb-2">
                            <Workflow className="w-4 h-4 mr-2" />
                            <span className="text-xs font-bold uppercase tracking-widest">High-Level Design (HLD)</span>
                        </div>

                        <div className="relative py-10 px-4 dark:bg-black/20 bg-slate-50/50 rounded-3xl border dark:border-[#30363d] border-border border-dashed">
                            {/* Animated Connecting Line */}
                            <div className="absolute left-[2.25rem] md:left-1/2 top-10 bottom-10 w-px bg-border/50 -translate-x-1/2" />

                            <div className="space-y-8 relative">
                                {arch.hld.map((step, idx) => {
                                    const isEven = idx % 2 === 0;
                                    const Icon = step.icon;

                                    return (
                                        <motion.div
                                            key={step.title}
                                            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className={`flex items-center w-full md:justify-center ${isEven ? "md:justify-start" : "md:justify-end"
                                                }`}
                                        >
                                            <div className={`flex flex-col md:flex-row items-center w-full md:w-1/2 ${isEven ? "md:flex-row-reverse" : "md:flex-row"
                                                }`}>
                                                {/* Content Box */}
                                                <div className={`p-4 rounded-xl border dark:border-[#30363d] border-border dark:bg-[#161b22] bg-white shadow-sm w-[calc(100%-4rem)] md:w-full ml-16 md:ml-0 z-10 transition-colors hover:border-primary/40`}>
                                                    <div className="flex items-center space-x-4">
                                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                            <Icon className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-foreground text-xs md:text-sm font-bold">[{step.title}]</h3>
                                                            <p className="text-muted-foreground text-[10px] md:text-xs">{step.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Node Connector Dot */}
                                                <div className={`absolute left-[2.25rem] md:static w-3 h-3 rounded-full border-2 border-primary bg-background shadow-[0_0_10px_rgba(0,245,212,0.5)] z-20 md:mx-6 flex-shrink-0 ${isEven ? "md:-mr-1.5" : "md:-ml-1.5"
                                                    }`} />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Design Decisions & Tradeoffs */}
                    <div className="grid md:grid-cols-2 gap-8 pt-6 border-t dark:border-[#30363d] border-border">
                        <div className="space-y-4">
                            <div className="flex items-center text-secondary mb-2">
                                <Cpu className="w-4 h-4 mr-2" />
                                <span className="text-xs font-bold uppercase tracking-widest">Design Decisions</span>
                            </div>
                            <div className="space-y-3">
                                {arch.decisions.map((decision, i) => (
                                    <div key={i} className="text-[11px] md:text-xs text-muted-foreground leading-relaxed flex items-start">
                                        <span className="text-secondary mr-2 font-bold">[*]</span>
                                        {decision}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center text-accent mb-2">
                                <Activity className="w-4 h-4 mr-2" />
                                <span className="text-xs font-bold uppercase tracking-widest">Tradeoffs</span>
                            </div>
                            <div className="space-y-3">
                                {arch.tradeoffs.map((tradeoff, i) => (
                                    <div key={i} className="text-[11px] md:text-xs text-muted-foreground leading-relaxed flex items-start">
                                        <span className="text-accent mr-2 font-bold">[!]</span>
                                        {tradeoff}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Flow Description */}
                    <div className="space-y-4 pt-6 border-t dark:border-[#30363d] border-border opacity-70">
                        <div className="flex items-center text-primary mb-2">
                            <Workflow className="w-4 h-4 mr-2" />
                            <span className="text-xs font-bold uppercase tracking-widest">System Flow</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm italic">
                            {arch.flowDetail}
                        </p>
                    </div>
                </div>

                <div className="p-8 text-center bg-slate-50 dark:bg-black/20 border-t dark:border-[#30363d] border-border">
                    <p className="text-[10px] text-muted-foreground flex items-center justify-center opacity-50">
                        <Workflow className="w-3 h-3 mr-2 text-accent" />
                        System Analysis Report v2.0.1 | Generated for Aditya Kumar
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
