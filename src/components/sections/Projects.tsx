"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu } from "lucide-react";

const PROJECTS = [
  {
    id: "ardentdb",
    num: "001",
    name: "ArdentDB.cpp",
    type: "Backend Engine",
    desc: "Custom in-memory B-Tree indexing engine with page-based storage, dirty page tracking, and RAG retrieval pipeline.",
    stack: ["C++20", "STL", "GTest", "File I/O"],
    github: "https://github.com/Aditya0Kumar/ardentDB"
  },
  {
    id: "trackr",
    num: "002",
    name: "Trackr.js",
    type: "Enterprise ERP",
    desc: "Multi-tenant workforce management platform with Redis caching, BullMQ background workers, and RBAC security.",
    stack: ["React", "Node.js", "Redis", "MongoDB", "BullMQ"],
    github: "https://github.com/Aditya0Kumar/trackr"
  },
  {
    id: "finance",
    num: "003",
    name: "Finance.tsx",
    type: "Predictive Analytics",
    desc: "AI-powered dashboard for financial KPI tracking and transaction forecasting with MongoDB aggregation.",
    stack: ["TypeScript", "Redux", "Node.js", "Recharts", "MUI"],
    github: "https://github.com/Aditya0Kumar/Finance-Analysis-and-Prediction"
  },
  {
    id: "swifthealth",
    num: "004",
    name: "SwiftHealth.php",
    type: "Healthcare App",
    desc: "Emergency response and appointment booking platform with real-time alerting systems and PHP backend.",
    stack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Aditya0Kumar/SwiftHealth"
  }
];

interface ProjectsProps {
  onDeepDive: (id: string) => void;
}

export const Projects = ({ onDeepDive }: ProjectsProps) => {
  return (
    <section id="projects" className="py-28 px-8 max-w-[1240px] mx-auto border-t border-border bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-4 block">03 · Engineering</span>
        <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-semibold tracking-tight leading-tight text-foreground mb-6">Featured Projects</h2>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">Building software that solves real-world engineering challenges through robust architecture.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-accent/20 border border-border p-10 rounded-2xl transition-all duration-500 hover:border-primary/30 flex flex-col group shadow-xl"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="text-primary text-[0.65rem] uppercase tracking-widest font-bold font-mono">
                [{project.num}] {project.type}
              </span>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground/60 hover:text-foreground transition-colors">
                  <Github size={20} />
                </a>
                <button onClick={() => onDeepDive(project.id)} className="text-muted-foreground/60 hover:text-primary transition-colors">
                  <Cpu size={20} />
                </button>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors tracking-tight">
              {project.name}
            </h3>

            <p className="text-muted-foreground text-[1.05rem] leading-relaxed font-light mb-10 flex-1">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-3 pt-8 border-t border-border">
              {project.stack.map(tech => (
                <span key={tech} className="text-muted-foreground/60 text-[0.7rem] uppercase tracking-widest font-bold font-mono group-hover:text-muted-foreground transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
