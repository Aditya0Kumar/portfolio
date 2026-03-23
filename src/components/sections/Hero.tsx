"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SESSIONS = [
  { cls: 'info', t: 'ADITYA KUMAR' },
  { cls: 'hi', t: 'Software Engineer' },
  { cls: 'dim', t: '-----------------------------------------' },
  { cls: 'hi', t: 'I am a Software Engineer focused on building high-availability backend systems and scalable full-stack applications. I enjoy architecting robust distributed infrastructure and am currently exploring the intersection of AI/ML with system efficiency. Always learning and adapting to solve complex engineering challenges.' },
  { cls: 'dim', t: '-----------------------------------------' },
  { cls: 'hi', t: 'Skills: MERN Stack, System Design, DSA, AI/ML' },
  { cls: 'prompt', t: 'aditya@portfolio:~$ ' },
];

export const Hero = () => {
  const [terminalLines, setTerminalLines] = useState<{ cls: string, t: string, id: number }[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);

  useEffect(() => {
    if (currentLineIdx >= SESSIONS.length) return;

    const line = SESSIONS[currentLineIdx];

    // Instant prompt logic
    if (line.cls === 'prompt' && currentCharIdx < line.t.length) {
      setCurrentCharIdx(line.t.length);
      return;
    }

    const delay = 25;

    if (currentCharIdx < line.t.length) {
      const timer = setTimeout(() => {
        setCurrentCharIdx(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTerminalLines(prev => [...prev, { ...line, id: Date.now() }]);
        setCurrentLineIdx(prev => prev + 1);
        setCurrentCharIdx(0);
      }, line.cls === 'prompt' ? 0 : 300); // Faster transition after prompt
      return () => clearTimeout(timer);
    }
  }, [currentLineIdx, currentCharIdx]);

  return (
    <section className="min-h-screen flex items-center bg-background text-foreground px-6 pt-[72px]">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">

        {/* LEFT: Identity & Value Prop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary uppercase tracking-widest text-[0.7rem] font-bold">Available for high-impact roles</span>
          </div>

          <h1 className="text-[clamp(3rem,7vw,4.8rem)] font-semibold tracking-tight leading-[1.1] text-foreground">
            Aditya Kumar
          </h1>

          <p className="text-primary text-lg font-medium tracking-wide uppercase">
            Software Engineer
          </p>

          <p className="text-muted-foreground text-xl max-w-[540px] leading-relaxed font-light">
            I build <span className="text-foreground font-medium">scalable backend systems</span>, high-performance applications, and <span className="text-foreground font-medium">developer-first infrastructure</span> with a first-principles mindset.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-primary/90 transition-all duration-300 rounded-xl font-semibold tracking-wide shadow-[0_20px_40px_rgba(224,82,82,0.2)] text-white"
            >
              View my Works
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-border hover:bg-accent transition-all duration-300 rounded-xl font-semibold tracking-wide"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Classic Terminal Restore */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          {/* Main Terminal Window */}
          <div className="bg-accent/20 dark:bg-black/40 border border-border/80 rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_64px_rgba(0,0,0,0.4)] relative z-10 group-hover:border-primary/40 transition-colors duration-500">
            <div className="flex items-center px-6 py-4 bg-accent/40 border-b border-border/80">
              <div className="flex gap-2.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
              </div>
              <div className="mx-auto text-[0.6rem] text-muted-foreground font-mono font-bold uppercase tracking-[0.2em] flex items-center opacity-70">
                AK_TERMINAL_V2.1
              </div>
            </div>

            <div className="p-8 font-mono text-[0.8rem] md:text-[0.85rem] leading-relaxed min-h-[320px] h-auto overflow-y-auto scrollbar-hide bg-white/50 dark:bg-black/20 transition-all duration-500">
              <div className="space-y-2">
                {terminalLines.map((line) => (
                  <div key={line.id} className="animate-in fade-in slide-in-from-left-1 duration-300">
                    <span className={
                      line.cls === 'prompt' ? 'text-primary font-bold' :
                        line.cls === 'dim' ? 'text-muted-foreground/30' :
                          line.cls === 'hi' ? 'text-foreground/80 italic' : 'text-foreground/70'
                    }>
                      {line.t}
                    </span>
                  </div>
                ))}
                {currentLineIdx < SESSIONS.length && (
                  <div className="flex items-start flex-wrap">
                    <span className={
                      SESSIONS[currentLineIdx]?.cls === 'prompt' ? 'text-primary font-bold' :
                        SESSIONS[currentLineIdx]?.cls === 'dim' ? 'text-muted-foreground/30' :
                          SESSIONS[currentLineIdx]?.cls === 'hi' ? 'text-foreground/80 italic' : 'text-foreground/70'
                    }>
                      {SESSIONS[currentLineIdx]?.t.slice(0, currentCharIdx)}
                    </span>
                    <span className="w-1.5 h-3.5 bg-primary ml-1 mt-1 animate-pulse inline-block" />
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Background Decorative Glow (Maintained) */}
          <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full pointer-events-none opacity-50 dark:opacity-100" />
        </motion.div>

      </div>
    </section>
  );
};
