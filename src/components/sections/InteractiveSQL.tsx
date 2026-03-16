"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export const InteractiveSQL = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<{ command: string; result: string | null; error: boolean }[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const cmd = input.trim();
            if (!cmd) return;

            let result = null;
            let isError = false;

            const lowerCmd = cmd.toLowerCase();

            if (lowerCmd === "clear") {
                setOutput([]);
                setInput("");
                return;
            }

            if (lowerCmd === "select * from projects;") {
                result = `[
  { "id": "ardentdb", "lang": "C++", "type": "Database Engine" },
  { "id": "trackr", "lang": "TypeScript", "type": "Product Management" },
  { "id": "job_tracker", "lang": "JavaScript", "type": "Web Application" }
]
(3 rows returned)`;
            } else if (lowerCmd.startsWith("select")) {
                result = `Error: Relation not found or syntax error. Try 'SELECT * FROM projects;'`;
                isError = true;
            } else if (lowerCmd === "help") {
                result = `Available commands:
- SELECT * FROM projects;
- clear
- help`;
            } else {
                result = `Command not found: ${cmd}. Type 'help' for available commands.`;
                isError = true;
            }

            setOutput([...output, { command: cmd, result, error: isError }]);
            setInput("");
        }
    };

    useEffect(() => {
        // Scroll to bottom when output changes
        const terminal = document.getElementById("sql-terminal");
        if (terminal) {
            terminal.scrollTop = terminal.scrollHeight;
        }
    }, [output]);

    return (
        <section id="demo" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex items-center mb-12">
                <h2 className="font-space text-3xl font-bold text-foreground">
                    <span className="text-primary mr-2">06.</span>
                    Interactive Demo
                </h2>
                <div className="h-px bg-border flex-1 ml-6" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={focusInput}
                className="w-full max-w-3xl mx-auto bg-[#0a0f18] rounded-xl border border-border/50 overflow-hidden shadow-2xl cursor-text"
            >
                <div className="flex items-center px-4 py-3 border-b border-border/50 bg-[#0d131f]">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="mx-auto text-xs text-muted-foreground font-mono flex items-center">
                        <Terminal className="w-3 h-3 mr-2" />
                        sql_interface
                    </div>
                </div>

                <div id="sql-terminal" className="p-6 font-mono text-sm h-80 overflow-y-auto custom-scrollbar">
                    <div className="text-muted-foreground mb-4">
                        Type <span className="text-primary">'help'</span> for a list of commands.<br />
                        Try <span className="text-accent">'SELECT * FROM projects;'</span>
                    </div>

                    {output.map((entry, idx) => (
                        <div key={idx} className="mb-4">
                            <div className="flex items-center text-primary">
                                <span className="text-secondary mr-2">{">"}</span>
                                <span className="text-foreground">{entry.command}</span>
                            </div>
                            {entry.result && (
                                <div className={`mt-2 ml-4 whitespace-pre-wrap ${entry.error ? 'text-red-400' : 'text-green-400'}`}>
                                    {entry.result}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="flex items-center text-primary">
                        <span className="text-secondary mr-2">{">"}</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                            className="bg-transparent outline-none flex-1 text-foreground caret-primary"
                            spellCheck="false"
                            autoComplete="off"
                            autoFocus
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
