"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    id: "ardentdb",
    num: "001",
    name: "ArdentDB.cpp",
    type: "Backend Engine",
    desc: "Engineered a high-performance B-Tree indexing system from scratch in C++20. Implemented a custom buffer pool manager with Least Recently Used (LRU) replacement policy and write-ahead logging (WAL) for durability. Developed a vector-similarity search pipeline for RAG-based LLM applications, significantly optimizing retrieval speeds for large-scale datasets.",
    stack: ["C++20", "STL", "GTest", "File I/O"],
    github: "https://github.com/Aditya0Kumar/ardentDB",
    image: "/ardentdb.png"
  },
  {
    id: "trackr",
    num: "002",
    name: "Trackr.js",
    type: "Enterprise ERP",
    desc: "Architected a scalable multi-tenant ERP system using a microservices-inspired approach. Leveraged Redis as a high-speed caching layer and message broker for BullMQ worker queues, handling intensive background tasks like payroll processing and automated reporting. Implemented a robust RBAC system securing sensitive enterprise data across distributed nodes.",
    stack: ["React", "Node.js", "Redis", "MongoDB", "BullMQ"],
    github: "https://github.com/Aditya0Kumar/trackr",
    image: "/trackr.png"
  },
  {
    id: "finance",
    num: "003",
    name: "Finance.tsx",
    type: "Predictive Analytics",
    desc: "Developing a predictive fintech dashboard that integrates real-time market data with proprietary forecasting models. Utilized MongoDB's aggregation framework for complex time-series analysis and built a high-performance API layer to serve sub-second data visualizations. Employs advanced outlier detection to flag transactional anomalies and trends.",
    stack: ["TypeScript", "Redux", "Node.js", "Recharts", "MUI"],
    github: "https://github.com/Aditya0Kumar/Finance-Analysis-and-Prediction",
    image: "/finance.png"
  },
  {
    id: "swifthealth",
    num: "004",
    name: "SwiftHealth.php",
    type: "Healthcare App",
    desc: "A high-availability healthcare orchestration platform designed for critical emergency response. Built a real-time alerting system using WebSockets and a prioritized queuing mechanism to ensure sub-second notification delivery during medical crises. Scaled to handle concurrent appointment scheduling and patient record synchronization effectively.",
    stack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Aditya0Kumar/SwiftHealth",
    image: "/swifthealth.png"
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
            className="group relative bg-accent/20 border border-border rounded-2xl overflow-hidden shadow-xl hover:border-primary/30 transition-all duration-500 flex flex-col"
          >
            {/* Project Image Header */}
            <div className="relative h-64 overflow-hidden border-b border-border">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            <div className="p-10 flex flex-col flex-1">
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

              <div className="flex flex-wrap gap-3 pt-8 border-t border-border mt-auto">
                {project.stack.map(tech => (
                  <span key={tech} className="text-muted-foreground/60 text-[0.7rem] uppercase tracking-widest font-bold font-mono group-hover:text-muted-foreground transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
