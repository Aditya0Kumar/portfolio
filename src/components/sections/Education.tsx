"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, Book } from "lucide-react";

const educationData = [
    {
        type: "Degree",
        icon: GraduationCap,
        title: "B.Tech - Computer Science and Engineering",
        organization: "Lovely Professional University",
        date: "August 2023 - Present",
        location: "Punjab, India",
        details: [
            "CGPA: 8.61",
            "Focus on core CS concepts, Data Structures, Algorithms, and Full-Stack Development.",
            "Relevant Coursework: DBMS, Operating Systems, Computer Networks, Software Engineering."
        ]
    },
    {
        type: "Intermediate (12th Grade)",
        icon: School,
        title: "Senior Secondary Education",
        organization: "Geetanjali Olympiad School",
        date: "2021 - 2023",
        location: "Bangalore, Karnataka",
        details: [
            "Percentage: 76%",
            "Focus on Physics, Chemistry, and Mathematics (PCM).",
            "Participated in regional mathematics olympiads."
        ]
    },
    {
        type: "Matriculation (10th Grade)",
        icon: Book,
        title: "Secondary Education",
        organization: "Mount Litera Zee School",
        date: "2020 - 2021",
        location: "Bangalore, Karnataka",
        details: [
            "Percentage: 91.2%",
            "Awarded for excellence in Science and Computer Applications.",
            "Active member of the school's technology club."
        ]
    }
];

export const Education = () => {
    return (
        <section id="education" className="py-28 px-8 max-w-[1240px] mx-auto border-t border-border bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-4 block">08 · Foundation</span>
                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-semibold tracking-tight leading-tight text-foreground mb-6">Education</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">My formal academic journey and technical foundation.</p>
            </motion.div>

            <div className="space-y-16 max-w-4xl">
                {educationData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="relative pl-12 border-l border-border group"
                    >
                        {/* Dot */}
                        <div className="absolute -left-[6px] top-2.5 w-3 h-3 rounded-full bg-border group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(224,82,82,0.4)] transition-all duration-500" />

                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-4">
                            <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors tracking-tight">
                                {item.title}
                            </h3>
                            <span className="text-muted-foreground/60 text-[0.65rem] uppercase tracking-widest font-bold font-mono">
                                {item.date} · {item.location}
                            </span>
                        </div>

                        <div className="text-primary text-sm font-bold uppercase tracking-widest font-mono mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                            {item.organization}
                        </div>

                        <ul className="space-y-4">
                            {item.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-start text-[1.05rem] text-muted-foreground leading-relaxed font-light">
                                    <span className="text-primary mr-4 opacity-40 font-bold">/</span>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
