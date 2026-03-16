"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Terminal, FileText, Database, Server, Cpu } from "lucide-react";

export default function ArdentDBPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-20">
            <Link href="/#projects" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors font-mono text-sm mb-12">
                <ArrowLeft className="w-4 h-4 mr-2" />
                cd .. / projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-between border-b border-border/50 pb-8 mb-12">
                    <div>
                        <div className="text-secondary font-mono text-sm mb-2">[{"Database Engine"}]</div>
                        <h1 className="text-4xl md:text-5xl font-space font-bold text-foreground">ArdentDB</h1>
                    </div>
                    <div className="hidden md:flex space-x-2">
                        <span className="px-3 py-1 bg-border/40 rounded-sm font-mono text-xs">C++</span>
                        <span className="px-3 py-1 bg-border/40 rounded-sm font-mono text-xs">B-Tree</span>
                        <span className="px-3 py-1 bg-border/40 rounded-sm font-mono text-xs">WAL</span>
                    </div>
                </div>

                <div className="space-y-16 font-inter leading-relaxed text-muted-foreground">

                    <section className="space-y-4">
                        <h2 className="flex items-center text-2xl font-space font-bold text-foreground">
                            <Terminal className="w-5 h-5 mr-3 text-primary" />
                            The Problem
                        </h2>
                        <p>
                            Most applications rely on robust, highly optimized database engines to manage persistence and ACID transactions. To gain a deeper understanding of systems engineering, I set out to build a database engine from scratch. <span className="text-foreground font-mono">ArdentDB</span> is an implementation of a B-Tree based storage engine completely written in C++ that replicates the core mechanics of popular systems like SQLite and PostgreSQL.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="flex items-center text-2xl font-space font-bold text-foreground">
                            <Server className="w-5 h-5 mr-3 text-primary" />
                            Architecture Overview
                        </h2>
                        <p>
                            The system is divided into layers, ensuring modularity and efficient hand-offs of data blocks:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong className="text-foreground font-mono">Compiler / Parser:</strong> Validates syntax and generates an Abstract Syntax Tree (AST).</li>
                            <li><strong className="text-foreground font-mono">Virtual Machine:</strong> Executes compiled bytecode instructions.</li>
                            <li><strong className="text-foreground font-mono">B-Tree Indexing:</strong> Manges logical data structuring and O(log N) lookups.</li>
                            <li><strong className="text-foreground font-mono">Pager Layer:</strong> Manages fetching disk pages into memory and handles caching.</li>
                            <li><strong className="text-foreground font-mono">OS Interface:</strong> Communicates with the kernel for raw file I/O operations.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="flex items-center text-2xl font-space font-bold text-foreground">
                            <Database className="w-5 h-5 mr-3 text-primary" />
                            Storage Engine & Pager
                        </h2>
                        <p>
                            The Pager subsystem is responsible for translating page numbers to memory blocks. It allocates memory for page cache, tracks dirty pages, and efficiently flushes them to disk to avoid Out-Of-Memory (OOM) scenarios.
                        </p>
                        <div className="bg-black/40 border border-border/50 rounded-xl p-4 font-mono text-xs md:text-sm my-6 text-foreground/80 overflow-x-auto">
                            <div className="text-secondary mb-2">\\ Pager logic representation</div>
                            <code>
                                void* get_page(uint32_t page_num) {"{"} <br />
                                &nbsp;&nbsp;if (pager{"\u003E"}pages[page_num] == NULL) {"{"} <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;// Cache miss. Allocate memory and load from file.<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;void* page = malloc(PAGE_SIZE);<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;lseek(pager{"\u003E"}file_descriptor, page_num * PAGE_SIZE, SEEK_SET);<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;read(pager{"\u003E"}file_descriptor, page, PAGE_SIZE);<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;pager{"\u003E"}pages[page_num] = page;<br />
                                &nbsp;&nbsp;{"}"}<br />
                                &nbsp;&nbsp;return pager{"\u003E"}pages[page_num];<br />
                                {"}"}
                            </code>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="flex items-center text-2xl font-space font-bold text-foreground">
                            <FileText className="w-5 h-5 mr-3 text-primary" />
                            Write-Ahead Logging (WAL)
                        </h2>
                        <p>
                            To ensure Atomicity and Durability (the &apos A &apos and &apos D &apos in ACID), ArdentDB implements a simple WAL mechanism. Before any modification is written directly to the B-Tree database file, it is appended to a log file. In the event of a crash, the system replays the log file to reconstruct the database&aposs consistent state.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="flex items-center text-2xl font-space font-bold text-foreground">
                            <Cpu className="w-5 h-5 mr-3 text-primary" />
                            Future Improvements
                        </h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Implementing a proper query planner for complex JOINS.</li>
                            <li>Adding multi-threading support with granular row-level locks instead of table locks.</li>
                            <li>Implementing an LRU (Least Recently Used) cache eviction policy in the Pager.</li>
                        </ul>
                    </section>

                </div>
            </motion.div>
        </div>
    );
}
