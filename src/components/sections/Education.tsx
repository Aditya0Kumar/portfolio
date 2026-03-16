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
        <section id="education" className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 z-0 bg-grid-blueprint" />
            <div className="flex items-center mb-12">
                <h2 className="font-space text-3xl font-bold text-foreground">
                    <span className="text-primary mr-2">04.</span>
                    Education
                </h2>
                <div className="h-px bg-border flex-1 ml-6" />
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
                {educationData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="relative pl-8 md:pl-0"
                    >
                        <div className="md:grid md:grid-cols-4 md:gap-8 items-start border-l-2 md:border-l-0 border-border/50 md:border-transparent pb-8 last:pb-0">
                            {/* Date / Type */}
                            <div className="mb-2 md:mb-0 md:text-right md:border-r-2 md:border-border/50 md:pr-8 pt-1 group">
                                <span className="text-secondary font-mono text-sm block font-bold group-hover:text-primary transition-colors">[{item.type}]</span>
                                <span className="text-muted-foreground font-mono text-xs">{item.date}</span>
                                <span className="text-muted-foreground font-mono text-xs block mt-1 opacity-70 italic">{item.location}</span>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-3 relative">
                                <span className="absolute -left-[45px] md:-left-[41px] top-1 flex items-center justify-center w-8 h-8 rounded-full dark:bg-[#0d1117] bg-white border dark:border-border/50 border-border text-primary shadow-sm z-10">
                                    <item.icon className="w-4 h-4" />
                                </span>

                                <div className="dark:bg-[#0d1117]/60 bg-white/70 border dark:border-border/50 border-border p-6 rounded-xl backdrop-blur-md shadow-xl hover:shadow-primary/5 transition-all group border-l-4 border-l-primary/10 hover:border-l-primary/40">
                                    <h3 className="text-xl font-bold font-space text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                                    <h4 className="text-primary/80 font-mono text-sm font-bold mb-4 mt-1">{`@ ${item.organization}`}</h4>

                                    <ul className="space-y-3 text-muted-foreground font-inter text-sm list-none">
                                        {item.details.map((detail, dIdx) => (
                                            <li key={dIdx} className="flex items-start">
                                                <span className="text-secondary mr-3 font-bold mt-0.5 opacity-60">{"//"}</span>
                                                <span className="leading-relaxed font-medium">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
