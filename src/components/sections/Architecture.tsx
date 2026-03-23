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
                className="absolute inset-0 bg-background/90 backdrop-blur-md"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-background border border-border rounded-3xl shadow-[0_32px_128px_rgba(0,0,0,0.8)] no-scrollbar"
            >
                {/* Modal Header */}
                <div className="sticky top-0 z-30 flex items-center justify-between p-8 bg-background/80 backdrop-blur-xl border-b border-border">
                    <div className="flex flex-col gap-1">
                        <span className="text-primary text-[0.6rem] font-bold uppercase tracking-[0.3em] font-mono">System Deep Dive</span>
                        <h2 className="text-2xl font-semibold text-foreground tracking-tight">
                            {arch.title}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 bg-accent/30 border border-border rounded-2xl text-muted-foreground/60 hover:text-foreground hover:border-primary/50 transition-all active:scale-95 shadow-lg group"
                    >
                        <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                <div className="p-8 md:p-12 space-y-20">
                    {/* Project Overview & Tech Stack */}
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-6">
                            <h4 className="text-primary text-[0.65rem] font-bold uppercase tracking-widest font-mono flex items-center gap-3">
                                <span className="w-6 h-[1px] bg-primary" />
                                Overview
                            </h4>
                            <p className="text-muted-foreground text-lg leading-relaxed font-light">
                                {arch.overview}
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-primary text-[0.65rem] font-bold uppercase tracking-widest font-mono flex items-center gap-3">
                                <span className="w-6 h-[1px] bg-primary" />
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {arch.stack.map(tech => (
                                    <span key={tech} className="px-3 py-1.5 bg-accent/30 border border-border rounded-lg text-[0.7rem] font-bold text-foreground font-mono tracking-tight">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Problem Statement */}
                    <div className="space-y-6 p-8 bg-accent/30 border border-border rounded-2xl relative overflow-hidden group shadow-lg">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-40" />
                        <h4 className="text-primary text-[0.65rem] font-bold uppercase tracking-widest font-mono">Problem Engineering</h4>
                        <p className="text-foreground text-lg leading-relaxed font-light italic">
                            "{arch.problem}"
                        </p>
                    </div>

                    {/* HLD Diagram Section */}
                    <div className="space-y-10">
                        <h4 className="text-primary text-[0.65rem] font-bold uppercase tracking-widest font-mono flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-primary" />
                            System Architecture (HLD)
                        </h4>

                        <div className="relative py-12 px-6 bg-background rounded-[2rem] border border-border shadow-inner overflow-hidden">
                            {/* Animated Background Pulse */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />
                            
                            <div className="absolute left-[3rem] md:left-1/2 top-16 bottom-16 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2 hidden md:block" />

                            <div className="space-y-12 relative z-10">
                                {arch.hld.map((step, idx) => {
                                    const isEven = idx % 2 === 0;
                                    const Icon = step.icon;

                                    return (
                                        <motion.div
                                            key={step.title}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className={`flex items-center w-full md:justify-center ${isEven ? "md:justify-start text-left" : "md:justify-end text-right"
                                                }`}
                                        >
                                            <div className={`flex flex-col md:flex-row items-center w-full md:w-[70%] gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                                }`}>
                                                {/* Content Box */}
                                                <div className={`p-8 bg-accent/30 border border-border rounded-2xl shadow-xl w-full z-10 transition-all hover:border-primary/40 group/node cursor-default h-full flex items-center`}>
                                                    <div className={`flex items-center gap-6 w-full ${!isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
                                                        <div className="p-4 bg-background border border-border rounded-[1.2rem] text-primary group-hover/node:shadow-[0_0_20px_rgba(224,82,82,0.15)] transition-all shrink-0">
                                                            <Icon size={24} />
                                                        </div>
                                                        <div className="flex flex-col gap-1.5">
                                                            <h3 className="text-foreground text-base font-semibold tracking-tight uppercase">[{step.title}]</h3>
                                                            <p className="text-muted-foreground text-xs font-light tracking-wide">{step.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Connector Arrow (Small screens) */}
                                                <div className="md:hidden flex justify-center w-full py-2">
                                                    <ArrowDown className="text-border" size={20} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Features, Decisions & Tradeoffs */}
                    <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-border">
                        <div className="space-y-8">
                            <h4 className="text-primary text-[0.65rem] font-bold uppercase tracking-widest font-mono flex items-center gap-3">
                                <span className="w-6 h-[1px] bg-primary" />
                                Design Decisions
                            </h4>
                            <div className="space-y-6">
                                {arch.decisions.map((decision, i) => (
                                    <div key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-4 font-light">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                                        {decision}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-primary text-[0.65rem] font-bold uppercase tracking-widest font-mono flex items-center gap-3">
                                <span className="w-6 h-[1px] bg-primary" />
                                Key Tradeoffs
                            </h4>
                            <div className="space-y-6">
                                {arch.tradeoffs.map((tradeoff, i) => (
                                    <div key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-4 font-light">
                                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                                        {tradeoff}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-10 text-center bg-accent/20 border-t border-border">
                    <p className="text-[0.65rem] text-muted-foreground/20 flex items-center justify-center uppercase tracking-[0.2em] font-bold font-mono">
                        <Workflow className="w-3.5 h-3.5 mr-3 text-primary opacity-60" />
                        System Analysis Phase Complete // ak_v2.0.1
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
