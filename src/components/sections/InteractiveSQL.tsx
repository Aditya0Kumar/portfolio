"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Database, Globe, Layers, Download } from "lucide-react";
import { useTheme } from "next-themes";

export const InteractiveSQL = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<{ command: string; result: React.ReactNode; error: boolean }[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const { theme } = useTheme();

    const focusInput = () => {
        inputRef.current?.focus();
    };

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const cmd = input.trim();
            if (!cmd) return;

            let result: React.ReactNode = null;
            let isError = false;

            const lowerCmd = cmd.toLowerCase();

            if (lowerCmd === "clear") {
                setOutput([]);
                setInput("");
                return;
            }

            if (lowerCmd === "select * from projects;") {
                result = (
                    <div className="font-mono text-[0.8rem] leading-relaxed">
                        <div className="text-primary mb-2 border-b border-border/50 pb-1">Executing: Querying Database...</div>
                        <pre className="text-foreground/80 whitespace-pre-wrap">
{`[
  { "id": "ardentdb", "engine": "C++20", "role": "Storage/Indexing" },
  { "id": "trackr", "engine": "Node.js", "role": "ERP/Microservices" },
  { "id": "finance", "engine": "TSX/AI", "role": "Analytics" },
  { "id": "swifthealth", "engine": "PHP", "role": "Real-time" }
]
(4 rows returned)`}
                        </pre>
                    </div>
                );
            } else if (lowerCmd === "whoami") {
                result = (
                    <div className="flex items-center gap-3">
                        <span className="text-primary font-bold tracking-widest">USER:</span>
                        <span className="text-foreground italic">Aditya Kumar // Software Development Engineer</span>
                    </div>
                );
            } else if (lowerCmd === "ls") {
                result = (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-primary font-mono text-[0.75rem]">
                        <span>/about</span>
                        <span>/skills</span>
                        <span>/projects</span>
                        <span>/certificates</span>
                        <span>/contact</span>
                        <span>/resume.pdf</span>
                    </div>
                );
            } else if (lowerCmd === "techstack" || lowerCmd === "stack") {
                result = (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2"><Cpu size={14} className="text-primary" /> <span className="text-foreground/80">C++, Java, TypeScript, SQL</span></div>
                        <div className="flex items-center gap-2"><Database size={14} className="text-primary" /> <span className="text-foreground/80">PostgreSQL, MongoDB, Redis, WAL</span></div>
                        <div className="flex items-center gap-2"><Globe size={14} className="text-primary" /> <span className="text-foreground/80">Next.js, Node.js, PHP, WebSockets</span></div>
                        <div className="flex items-center gap-2"><Layers size={14} className="text-primary" /> <span className="text-foreground/80">Docker, Git, CI/CD, AWS</span></div>
                    </div>
                );
            } else if (lowerCmd === "help") {
                result = (
                    <ul className="list-none space-y-1 text-foreground/60 text-[0.75rem]">
                        <li>• <span className="text-primary">SELECT * FROM projects;</span> - Show detailed project data</li>
                        <li>• <span className="text-primary">whoami</span> - Display user identity</li>
                        <li>• <span className="text-primary">ls</span> - List accessible system directories</li>
                        <li>• <span className="text-primary">stack</span> - Display detailed technical arsenal</li>
                        <li>• <span className="text-primary">clear</span> - Purge terminal buffer</li>
                    </ul>
                );
            } else {
                result = `Command not found: ${cmd}. Type 'help' for available commands.`;
                isError = true;
            }

            setOutput([...output, { command: cmd, result, error: isError }]);
            setInput("");
        }
    };

    useEffect(() => {
        const terminal = document.getElementById("sql-terminal");
        if (terminal) {
            terminal.scrollTop = terminal.scrollHeight;
        }
    }, [output]);

    return (
        <section id="demo" className="py-28 px-8 max-w-[1240px] mx-auto border-t border-border bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-4 block">08 · Interaction</span>
                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-semibold tracking-tight leading-tight text-foreground mb-6">System Terminal</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">Execute queries against the portfolio engine. A simulated environment showcasing real data schemas.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={focusInput}
                className="w-full max-w-4xl mx-auto bg-accent/20 rounded-2xl border border-border overflow-hidden shadow-2xl cursor-text group backdrop-blur-sm"
            >
                <div className="flex items-center px-6 py-4 border-b border-border/50 bg-accent/30">
                    <div className="flex space-x-2.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="mx-auto text-[0.65rem] text-muted-foreground/60 font-mono font-bold uppercase tracking-widest flex items-center">
                        <Terminal className="w-3.5 h-3.5 mr-2" />
                        ADITYA_SYSTEM_V3.0
                    </div>
                </div>

                <div id="sql-terminal" className="p-10 font-mono text-[0.85rem] h-[28rem] overflow-y-auto custom-scrollbar">
                    <div className="text-muted-foreground/40 mb-8 font-light italic leading-relaxed">
                        // System initialized. Available probes: <span className="text-primary/60 font-bold">'help'</span><br />
                        // Access restricted to authorized personnel.
                    </div>

                    <div className="space-y-6">
                        <AnimatePresence mode="popLayout">
                            {output.map((entry, idx) => (
                                <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-3"
                                >
                                    <div className="flex items-center text-primary">
                                        <span className="mr-3 font-bold opacity-70">aditya@portfolio:~$</span>
                                        <span className="text-foreground font-medium">{entry.command}</span>
                                    </div>
                                    {entry.result && (
                                        <div className={`ml-6 p-4 rounded-xl bg-accent/10 border border-border/30 ${entry.error ? 'text-red-400' : 'text-foreground/90'}`}>
                                            {entry.result}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        <div className="flex items-center text-primary">
                            <span className="mr-3 font-bold opacity-70">aditya@portfolio:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="bg-transparent outline-none flex-1 text-foreground caret-primary font-medium"
                                spellCheck="false"
                                autoComplete="off"
                                autoFocus
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
