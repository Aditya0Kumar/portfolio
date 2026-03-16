import { motion } from "framer-motion";
import { Award, Trophy, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { certificates } from "@/data/certificates";
import { CertificateCard } from "@/components/ui/CertificateCard";

const achievements = [
    "Solved 400+ DSA problems across LeetCode, CodeChef, and Codeforces.",
    "Earned 10+ MongoDB skill badges for hands-on database expertise.",
    "Reached a peak LeetCode contest rating: 170.",
    "Ranked Top 25 in TimeWrap International Hackathon, NIT Trichy.",
    "Finalist at Coding Ninjas Binary Bitz National Hackathon.",
    "...and many more"
];

const trainingData = {
    title: "Full Stack Web Development (MERN)",
    organization: "Cipher Schools (EdTech Company)",
    date: "June 2025 - July 2025",
    details: [
        "Completed intensive MERN stack program focused on production-oriented applications.",
        "Developed Job Tracking Application with CRUD, REST APIs, and JWT auth.",
        "Strengthened competencies in secure APIs, state management, and responsive UIs."
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Mongoose"]
};

export const Certifications = () => {
    // Show only featured certificates on home page
    const featuredCerts = certificates.filter(c => c.featured).slice(0, 6);

    return (
        <section id="certifications" className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 z-0 bg-grid-blueprint" />

            {/* Title */}
            <div className="flex items-center mb-12">
                <h2 className="font-space text-3xl font-bold text-foreground">
                    <span className="text-primary mr-2">05.</span>
                    Accolades & Training
                </h2>
                <div className="h-px bg-border flex-1 ml-6" />
            </div>

            {/* Training */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <div className="flex items-center mb-6">
                    <BookOpen className="w-5 h-5 text-primary mr-3" />
                    <h3 className="font-space text-xl font-bold text-foreground">Training</h3>
                </div>

                <div className="rounded-xl border dark:border-border/50 border-border/70 p-[1px] overflow-hidden">
                    <div className="dark:bg-[#0D1117] bg-white rounded-xl p-6 backdrop-blur-md shadow-lg">

                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                                <h4 className="text-lg font-bold text-foreground font-space">
                                    {trainingData.title}
                                </h4>
                                <p className="text-primary font-mono text-sm font-bold">
                                    {trainingData.organization}
                                </p>
                            </div>

                            <span className="text-muted-foreground font-mono text-xs mt-2 md:mt-0">
                                [{trainingData.date}]
                            </span>
                        </div>

                        <ul className="space-y-2 mb-6">
                            {trainingData.details.map((detail, idx) => (
                                <li key={idx} className="flex text-sm text-muted-foreground">
                                    <span className="text-secondary mr-2 font-bold">{">"}</span>
                                    <span className="leading-relaxed font-medium">{detail}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {trainingData.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 dark:bg-border/40 bg-slate-200/50 rounded-sm font-mono text-[10px] text-foreground/80 font-bold"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <div className="flex items-center mb-6">
                    <Trophy className="w-5 h-5 text-primary mr-3" />
                    <h3 className="font-space text-xl font-bold text-foreground">Achievements</h3>
                </div>

                <div className="rounded-xl border dark:border-border/50 border-border/70 p-[1px] overflow-hidden">
                    <div className="dark:bg-[#0D1117] bg-white rounded-xl p-6 backdrop-blur-md shadow-lg space-y-4 font-mono text-sm">

                        {achievements.map((item, idx) => (
                            <div key={idx} className="flex">
                                <span className="text-accent mr-3 font-bold">{">"}</span>
                                <span className="text-muted-foreground leading-relaxed font-semibold">
                                    {item}
                                </span>
                            </div>
                        ))}

                    </div>
                </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-between mb-8 relative z-20">
                    <div className="flex items-center">
                        <Award className="w-5 h-5 text-primary mr-3" />
                        <h3 className="font-space text-xl font-bold text-foreground">
                            Technical Certifications
                        </h3>
                    </div>

                    <Link
                        href="/certificates"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl font-mono text-xs font-bold transition-all border border-primary/20 hover:scale-105 active:scale-95 shadow-sm hover:shadow-primary/10"
                    >
                        VIEW ALL
                        <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    {featuredCerts.map((cert) => (
                        <CertificateCard key={cert.id} certificate={cert} />
                    ))}
                </div>
            </motion.div>

            {/* Hackathons & Events */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-20 relative"
            >
                <div className="flex items-center justify-between mb-8 relative z-20">
                    <div className="flex items-center">
                        <Trophy className="w-5 h-5 text-secondary mr-3" />
                        <h3 className="font-space text-xl font-bold text-foreground">
                            Hackathons & Competitive Coding
                        </h3>
                    </div>

                    <Link
                        href="/achievements"
                        className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-xl font-mono text-xs font-bold transition-all border border-secondary/20 hover:scale-105 active:scale-95 shadow-sm hover:shadow-secondary/10"
                    >
                        VIEW ALL
                        <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    {certificates.filter(c => c.category === "achievement" || c.category === "participation").slice(0, 3).map((cert) => (
                        <CertificateCard key={cert.id} certificate={cert} />
                    ))}
                </div>
            </motion.div>

        </section>
    );
};
