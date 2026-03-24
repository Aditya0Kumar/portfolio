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

const CATEGORIES = ["All", "Languages", "Backend", "Frontend", "Database", "Tools", "Core CS", "Professional"];

const SKILL_GROUPS = [
  {
    cat: "Backend",
    title: "Backend",
    icon: Server,
    desc: "Architecting high-availability systems with robust mission-critical logic.",
    span: "lg:col-span-2 lg:row-span-2",
    skills: [
      { name: "Node.js", level: 90, icon: Server },
      { name: "Express.js", level: 85, icon: Zap },
      { name: "PHP", level: 85, icon: Globe },
      { name: "REST API Design", level: 90, icon: Send },
      { name: "JWT Authentication", level: 85, icon: Settings },
      { name: "MVC Architecture", level: 85, icon: Layers },
      { name: "Redis", level: 80, icon: Cpu },
      { name: "BullMQ/Workers", level: 75, icon: Workflow }
    ]
  },
  {
    cat: "Languages",
    title: "Languages",
    icon: Code2,
    desc: "Primary syntax and logic cores.",
    span: "lg:col-span-1 lg:row-span-1",
    skills: [
      { name: "C++", level: 95, icon: Code2 },
      { name: "Java", level: 85, icon: Code2 },
      { name: "JavaScript", level: 95, icon: Code2 },
      { name: "TypeScript", level: 90, icon: Code2 },
      { name: "Python", level: 80, icon: Code2 }
    ]
  },
  {
    cat: "Frontend",
    title: "Frontend",
    icon: Layout,
    desc: "Highly interactive and performance-optimized interfaces.",
    span: "lg:col-span-1 lg:row-span-2",
    skills: [
      { name: "HTML5/CSS3", level: 95, icon: Globe },
      { name: "Tailwind CSS", level: 95, icon: Palette },
      { name: "React.js", level: 95, icon: Layout },
      { name: "Next.js", level: 90, icon: Server },
      { name: "jQuery", level: 80, icon: Activity },
      { name: "Redux Toolkit", level: 85, icon: Layers },
      { name: "Framer Motion", level: 85, icon: Activity }
    ]
  },
  {
    cat: "Database",
    title: "Database",
    icon: Database,
    desc: "Efficient storage & indexing.",
    span: "lg:col-span-1 lg:row-span-1",
    skills: [
      { name: "MongoDB", level: 90, icon: Database },
      { name: "MySQL", level: 90, icon: Database },
      { name: "PostgreSQL", level: 85, icon: Database },
      { name: "Schema Design", level: 85, icon: Binary },
      { name: "Query Optimization", level: 80, icon: Activity }
    ]
  },
  {
    cat: "Tools",
    title: "Tools Hub",
    icon: Settings,
    desc: "Productivity & Deployment.",
    span: "lg:col-span-1 lg:row-span-1",
    skills: [
      { name: "Git/GitHub", level: 95, icon: GitBranch },
      { name: "Docker", level: 80, icon: Container },
      { name: "Postman", level: 90, icon: Send },
      { name: "VS Code", level: 95, icon: Terminal },
      { name: "XAMPP", level: 85, icon: Globe }
    ]
  },
  {
    cat: "Core CS",
    title: "Computer Science",
    icon: Binary,
    desc: "Fundamental principles and systems theory.",
    span: "lg:col-span-2 lg:row-span-1",
    skills: [
      { name: "Data Structures/DSA", level: 95, icon: Binary },
      { name: "System Design", level: 80, icon: Layers },
      { name: "OOPS", level: 90, icon: Target },
      { name: "Operating System", level: 85, icon: Terminal },
      { name: "DBMS", level: 90, icon: Database },
      { name: "Computer Networks", level: 85, icon: Network }
    ]
  },
  {
    cat: "Professional",
    title: "Leadership",
    icon: Users,
    desc: "Professional agility & collaborative skills.",
    span: "lg:col-span-1 lg:row-span-1",
    skills: [
      { name: "Adaptability", level: 95, icon: Workflow },
      { name: "Problem Solving", level: 95, icon: Lightbulb },
      { name: "Learning Agility", level: 90, icon: Zap },
      { name: "Collaboration", level: 90, icon: Users }
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
            className={`text-[0.65rem] px-6 py-2.5 rounded-full border transition-all duration-300 uppercase tracking-widest font-bold ${activeTab === cat
              ? "bg-primary border-primary text-white shadow-[0_12px_24px_rgba(224,82,82,0.2)]"
              : "bg-accent/30 border-border text-muted-foreground/60 hover:border-primary/50 hover:text-foreground"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredGroups.map((group, i) => (
            <motion.div
              key={group.cat}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative bg-accent/5 dark:bg-zinc-900/30 backdrop-blur-sm border border-border/40 p-8 rounded-2xl hover:border-primary/50 hover:bg-accent/10 transition-all duration-500 flex flex-col h-full shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-background rounded-2xl text-primary border border-border group-hover:border-primary/50 transition-all duration-500 shadow-md">
                  <group.icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground uppercase">{group.title}</h3>
                  <p className="text-[0.75rem] text-muted-foreground/60 font-mono uppercase tracking-[0.2em] font-bold">{group.cat}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                {group.skills.map((skill, j) => (
                  <div key={j} className="space-y-2 group/skill">
                    <div className="flex justify-between items-center px-0.5">
                      <div className="flex items-center gap-2.5">
                        <skill.icon size={13} className="text-primary/50 shrink-0 group-hover/skill:text-primary transition-colors" />
                        <span className="text-[0.85rem] font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors whitespace-nowrap">{skill.name}</span>
                      </div>
                      <span className="text-[0.65rem] font-mono text-muted-foreground/20 group-hover/skill:text-primary/60 transition-colors">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-accent/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 + j * 0.05 }}
                        className="h-full bg-primary/70 group-hover/skill:bg-primary transition-all"
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
