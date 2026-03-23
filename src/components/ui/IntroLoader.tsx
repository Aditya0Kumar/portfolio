"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  { t: "Initializing development environment...", hi: false },
  { t: "Starting Node.js server...", hi: false },
  { t: "Connecting to MongoDB cluster...", hi: false },
  { t: "Mounting REST API endpoints...", hi: false },
  { t: "Loading React components...", hi: false },
  { t: "Verifying dependencies...", hi: false },
  { t: "✓  System compiled successfully", hi: true },
  { t: "✓  Profile loaded.", hi: true },
];

export const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < LINES.length) return prev + 1;
        clearInterval(lineInterval);
        return prev;
      });
    }, 150);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(progressInterval);
        return 100;
      });
    }, 15);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && visibleLines === LINES.length) {
      setTimeout(() => {
        setIsFinished(true);
        setTimeout(onComplete, 700);
      }, 500);
    }
  }, [progress, visibleLines, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65 }}
          className="fixed inset-0 z-[10000] bg-background flex items-center justify-center p-8"
        >
          <div className="w-full max-w-[480px]">
             <div className="font-mono text-[0.65rem] text-muted-foreground/40 leading-[2.2] tracking-[0.06em] mb-12 min-h-[10rem]">
              {LINES.slice(0, visibleLines).map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`block ${line.hi ? "text-foreground" : ""}`}
                >
                  {line.hi ? "" : "·  "}{line.t}
                </motion.span>
              ))}
            </div>
            
            <div className="h-[1px] bg-border w-full mb-3 overflow-hidden relative">
              <motion.div
                className="h-full bg-muted-foreground/60 absolute left-0 top-0"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="flex justify-between font-mono text-[0.58rem] text-muted-foreground/40 tracking-[0.1em]">
              <span className="uppercase">{LINES[Math.min(visibleLines, LINES.length - 1)].t.replace(/^[·✓]\s+/, "")}</span>
              <span className="text-muted-foreground/60">{progress}%</span>
            </div>

            <button 
              onClick={() => {
                setIsFinished(true);
                onComplete();
              }}
              className="absolute bottom-8 right-8 font-mono text-[0.56rem] text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors tracking-[0.12em]"
            >
              SKIP ↗
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
