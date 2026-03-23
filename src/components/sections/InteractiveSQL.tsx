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
        <section id="demo" className="py-28 px-8 max-w-[1240px] mx-auto border-t border-[#1f1f23] bg-[#0A0A0B]">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-[#e05252] uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-4 block">08 · Interaction</span>
                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-semibold tracking-tight leading-tight text-[#EDEDED] mb-6">System Terminal</h2>
                <p className="text-[#9CA3AF] text-lg max-w-2xl leading-relaxed font-light">Execute queries against the portfolio engine. Proof of technical implementation details.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={focusInput}
                className="w-full max-w-4xl mx-auto bg-[#0a111f] rounded-2xl border border-[#1f2937]/50 overflow-hidden shadow-2xl cursor-text group"
            >
                <div className="flex items-center px-6 py-4 border-b border-[#1f2937]/50 bg-[#0d131f]">
                    <div className="flex space-x-2.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                    </div>
                    <div className="mx-auto text-[0.65rem] text-[#4b5563] font-mono font-bold uppercase tracking-widest flex items-center">
                        <Terminal className="w-3.5 h-3.5 mr-2" />
                        SQL_ENGINE_V2
                    </div>
                </div>

                <div id="sql-terminal" className="p-10 font-mono text-[0.85rem] h-[28rem] overflow-y-auto custom-scrollbar">
                    <div className="text-[#4b5563] mb-8 font-light italic leading-relaxed">
                        // System initialized. Type <span className="text-[#e05252] font-bold">'help'</span> for probe commands.<br />
                        // Example: <span className="text-[#e05252] font-bold">'SELECT * FROM projects;'</span>
                    </div>

                    <div className="space-y-6">
                        {output.map((entry, idx) => (
                            <div key={idx} className="animate-in fade-in slide-in-from-left-2 duration-300">
                                <div className="flex items-center text-[#e05252]">
                                    <span className="text-secondary mr-3 font-bold">{">"}</span>
                                    <span className="text-[#EDEDED] font-medium">{entry.command}</span>
                                </div>
                                {entry.result && (
                                    <div className={`mt-3 ml-6 p-4 rounded-lg bg-[#0d131f]/50 border border-[#1f2937]/30 whitespace-pre-wrap ${entry.error ? 'text-red-400' : 'text-green-400 opacity-90'}`}>
                                        {entry.result}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="flex items-center text-[#e05252]">
                            <span className="text-secondary mr-3 font-bold">{">"}</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="bg-transparent outline-none flex-1 text-[#EDEDED] caret-[#e05252] font-medium"
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
