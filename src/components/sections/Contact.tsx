"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-28 px-8 max-w-[1240px] mx-auto border-t border-border bg-background">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-4 block">06 · Connection</span>
                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-semibold tracking-tight leading-tight text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">Let's build something scalable together. I'm always open to new opportunities.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">Have an idea?</h3>
                    <p className="text-[1.1rem] text-muted-foreground leading-[1.8] font-light mb-12">
                        I'm currently looking for new opportunities and interesting projects. Whether you have a question or just want to say hi, my inbox is always open.
                    </p>

                    <div className="space-y-4">
                      {[
                        { label: "Email", val: "2005aditya.k@gmail.com", href: "mailto:2005aditya.k@gmail.com", icon: Mail },
                        { label: "LinkedIn", val: "Aditya Kumar", href: "https://www.linkedin.com/in/aditya-kumar-8b141516a/", icon: Linkedin },
                        { label: "GitHub", val: "@Aditya0Kumar", href: "https://github.com/Aditya0Kumar", icon: Github }
                      ].map((item, i) => (
                        <a 
                          key={i}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-4 p-5 bg-accent/30 border border-border rounded-xl group hover:border-primary/30 transition-all duration-300 shadow-lg"
                        >
                          <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground/60 group-hover:text-primary transition-colors">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <div className="text-[0.65rem] text-muted-foreground/60 tracking-widest font-bold font-mono uppercase mb-0.5">{item.label}</div>
                            <div className="text-[0.95rem] text-foreground font-medium">{item.val}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <form className="space-y-6 bg-accent/30 border border-border p-10 rounded-2xl shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="font-mono text-[0.65rem] text-muted-foreground/60 tracking-[0.1em] uppercase ml-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Doe"
                                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3.5 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 font-normal"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="font-mono text-[0.65rem] text-muted-foreground/60 tracking-[0.1em] uppercase ml-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="jane@example.com"
                                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3.5 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 font-normal"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="font-mono text-[0.65rem] text-muted-foreground/60 tracking-[0.1em] uppercase ml-1">Message</label>
                            <textarea
                                rows={6}
                                placeholder="Tell me about your project..."
                                className="w-full bg-background/50 border border-border rounded-lg px-4 py-4 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 font-normal resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="w-full py-4.5 bg-foreground text-background font-bold text-[1rem] rounded-lg hover:bg-transparent hover:text-foreground border border-foreground transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
