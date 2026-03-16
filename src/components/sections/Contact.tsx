"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "2005aditya.k@gmail.com",
        href: "mailto:2005aditya.k@gmail.com",
        color: "text-blue-500"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 8851225478",
        href: "tel:+918851225478",
        color: "text-green-500"
    },  
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Aditya Kumar",
        href: "https://www.linkedin.com/in/aditya-kumar-8b141516a/",
        color: "text-blue-600"
    },
    {
        icon: Github,
        label: "GitHub",
        value: "Aditya0Kumar",
        href: "https://github.com/Aditya0Kumar",
        color: "text-slate-800 dark:text-slate-200"
    }
];

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex items-center mb-16">
                <h2 className="font-space text-3xl font-bold text-foreground">
                    <span className="text-primary mr-2">07.</span>
                    Get In Touch
                </h2>
                <div className="h-px bg-border flex-1 ml-6" />
            </div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                {/* Contact Intro */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-2 space-y-8"
                >
                    <div>
                        <h3 className="text-2xl font-space font-bold text-foreground mb-4">Let's build something together</h3>
                        <p className="text-muted-foreground font-inter text-lg leading-relaxed">
                            I'm currently looking for new opportunities and interesting projects.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-6">
                        {contactInfo.map((info, idx) => (
                            <motion.a
                                key={info.label}
                                href={info.href}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex items-center p-4 rounded-xl border dark:border-border/30 border-border bg-white dark:bg-[#0d1117]/50 hover:border-primary/50 transition-all group"
                            >
                                <div className={`p-3 rounded-lg bg-slate-100 dark:bg-white/5 mr-4 ${info.color}`}>
                                    <info.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60">{info.label}</p>
                                    <p className="text-foreground font-bold font-mono text-sm">{info.value}</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground/0 group-hover:text-muted-foreground/50 transition-all" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:col-span-3"
                >
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const email = formData.get('email') as string;
                            const phone = formData.get('phone') as string;

                            const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                            const isPhoneValid = /^\+?[\d\s-]{10,}$/.test(phone);

                            if (!isEmailValid && !isPhoneValid) {
                                alert("Please provide a valid Email Address or Phone Number to verify your identity.");
                                return;
                            }

                            alert("Message sent successfully! (Demo Node)");
                        }}
                        className="space-y-6 bg-white/50 dark:bg-[#0d1117]/50 p-8 rounded-2xl border border-border/50 shadow-xl shadow-primary/5 backdrop-blur-sm"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground ml-1">Full Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Aditya Kumar"
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-border/50 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all font-inter text-sm text-slate-900 dark:text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground ml-1">Subject</label>
                                <input
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder="Project Proposal / Inquiry"
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-border/50 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all font-inter text-sm text-slate-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-border/50 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all font-inter text-sm text-slate-900 dark:text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground ml-1">Phone Number</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 88512-XXXXX"
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-border/50 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all font-inter text-sm text-slate-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                placeholder="How can I help you today?"
                                className="w-full bg-slate-50 dark:bg-white/5 border border-border/50 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all font-inter text-sm resize-none text-slate-900 dark:text-white"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20 group"
                        >
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            [ SEND MESSAGE ]
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
