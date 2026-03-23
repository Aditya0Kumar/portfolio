"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Server, Layout, Code2, Settings, 
  Terminal, Database, Zap, Cpu, 
  Network, Binary, Layers, Palette,
  Globe, Activity, Container, GitBranch,
  Send, Workflow, Users, Lightbulb, MessageSquare, Target
} from "lucide-react";

const CATEGORIES = ["All", "Backend", "Frontend", "Languages", "Professional", "Tools", "Core CS"];

const SKILL_GROUPS = [
  {
    cat: "Backend",
    title: "Backend Development",
    icon: Server,
    desc: "Architecting scalable server-side systems and APIs.",
    skills: [
      { name: "Node.js/Next.js", level: 90, icon: Server },
      { name: "Express.js", level: 85, icon: Zap },
      { name: "PostgreSQL/MySQL", level: 85, icon: Database },
      { name: "MongoDB", level: 90, icon: Database },
      { name: "Redis", level: 80, icon: Cpu },
      { name: "BullMQ/Workers", level: 75, icon: Workflow }
    ]
  },
  {
    cat: "Frontend",
    title: "Frontend Engineering",
    icon: Layout,
    desc: "Building highly interactive and responsive interfaces.",
    skills: [
      { name: "React.js", level: 95, icon: Layout },
      { name: "TypeScript", level: 90, icon: Code2 },
      { name: "Tailwind CSS", level: 95, icon: Palette },
      { name: "Framer Motion", level: 85, icon: Activity },
      { name: "Redux/Zustand", level: 80, icon: Layers }
    ]
  },
  {
    cat: "Languages",
    title: "Languages & Logic",
    icon: Code2,
    desc: "Core programming languages and computational logic.",
    skills: [
      { name: "C++ (DSA)", level: 95, icon: Code2 },
      { name: "JavaScript", level: 95, icon: Code2 },
      { name: "Java", level: 85, icon: Code2 },
      { name: "C", level: 80, icon: Code2 },
      { name: "Python", level: 80, icon: Code2 }
    ]
  },
  {
    cat: "Professional",
    title: "Professional Skills",
    icon: Users,
    desc: "Leadership and individual professional capabilities.",
    skills: [
      { name: "Problem Solving", level: 95, icon: Lightbulb },
      { name: "System Design", level: 80, icon: Layers },
      { name: "Agile/Scrum", level: 85, icon: Workflow },
      { name: "Technical Writing", level: 80, icon: MessageSquare }
    ]
  },
  {
    cat: "Tools",
    title: "DevOps & Tools",
    icon: Settings,
    desc: "Streamlining development and deployment workflows.",
    skills: [
      { name: "Git/GitHub", level: 95, icon: GitBranch },
      { name: "Docker", level: 80, icon: Container },
      { name: "Linux/Basics", level: 85, icon: Terminal },
      { name: "Postman/APIs", level: 90, icon: Send },
      { name: "Vite/PNPM", level: 90, icon: Zap }
    ]
  },
  {
    cat: "Core CS",
    title: "Computer Science Core",
    icon: Binary,
    desc: "Fundamental principles of software and systems.",
    skills: [
      { name: "Data Structures", level: 95, icon: Binary },
      { name: "Operating Systems", level: 85, icon: Terminal },
      { name: "Computer Networks", level: 85, icon: Network },
      { name: "Database Mgmt", level: 85, icon: Database }
    ]
  }
];

export const Skills = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredGroups = activeTab === "All" 
        ? SKILL_GROUPS 
        : SKILL_GROUPS.filter(g => g.cat === activeTab);

    return (
        <section id="skills" className="py-28 px-8 max-w-[1240px] mx-auto border-t border-border bg-background">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-4 block">02 · Capability</span>
                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-semibold tracking-tight leading-tight text-foreground mb-6">Expertise</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">A curated selection of industrial-grade technologies built into a robust technical arsenal.</p>
            </motion.div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 mb-20">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`text-[0.65rem] px-6 py-2.5 rounded-full border transition-all duration-300 uppercase tracking-widest font-bold ${
                            activeTab === cat 
                            ? "bg-primary border-primary text-white shadow-[0_12px_24px_rgba(224,82,82,0.2)]" 
                            : "bg-accent/30 border-border text-muted-foreground/60 hover:border-primary/50 hover:text-foreground"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                <AnimatePresence mode="popLayout">
                    {filteredGroups.map((group, i) => (
                        <motion.div
                            key={group.cat}
                            layout
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="bg-accent/20 border border-border p-10 rounded-2xl hover:border-primary/30 transition-all duration-500 group flex flex-col h-full shadow-lg"
                        >
                            <div className="flex items-start gap-4 mb-10 shrink-0">
                                <div className="p-3 bg-background rounded-xl text-primary border border-border group-hover:border-primary/50 transition-colors">
                                    <group.icon size={22} />
                                </div>
                                <div>
                                    <h3 className="font-display text-[1.5rem] tracking-[0.04em] text-foreground mb-1 uppercase leading-tight">{group.title}</h3>
                                    <p className="text-[0.75rem] text-muted-foreground/60 font-normal leading-relaxed line-clamp-2">{group.desc}</p>
                                </div>
                            </div>

                            <div className="space-y-6 mt-auto">
                                {group.skills.map((skill, j) => (
                                    <div key={j} className="space-y-2">
                                        <div className="flex justify-between items-center px-1">
                                            <div className="flex items-center gap-2.5">
                                                <skill.icon size={13} className="text-muted-foreground/40 group-hover:text-primary transition-colors" />
                                                <span className="font-mono text-[0.7rem] text-muted-foreground tracking-[0.02em] uppercase">{skill.name}</span>
                                            </div>
                                            <span className="font-mono text-[0.6rem] text-muted-foreground/50">{skill.level}%</span>
                                        </div>
                                        <div className="h-[2px] w-full bg-accent rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, ease: "circOut", delay: i * 0.1 + j * 0.05 }}
                                                className="h-full bg-primary"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};
