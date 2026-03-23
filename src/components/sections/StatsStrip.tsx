"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { val: 8.61, label: "CGPA @ LPU", dec: true },
  { val: 400, label: "LeetCode Solved", dec: false },
  { val: 500, label: "Total Solved (Across)", dec: false },
  { val: 10, label: "Skill Badges", dec: false },
  { val: 25, label: "Intl. Hackathon Rank", dec: false },
];

const Counter = ({ value, duration = 1.8, isDecimal = false }: { value: number, duration?: number, isDecimal?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = Math.round(duration * 60);
      const increment = end / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(2) : Math.floor(count)}
    </span>
  );
};

export const StatsStrip = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-border border-y border-border gap-[1px]">
      {STATS.map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="stat-cell bg-background py-12 px-8 flex flex-col items-center text-center group relative transition-colors duration-300 hover:bg-accent/30"
        >
          {/* Subtle Accent Mark */}
          <div className="w-1 h-3 bg-primary rounded-full mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
          
          <div className="text-[clamp(2.2rem,4vw,2.8rem)] font-semibold tracking-tight text-foreground leading-none mb-3">
            <Counter value={stat.val} isDecimal={stat.dec} />
          </div>
          <div className="text-muted-foreground/60 text-[0.65rem] uppercase tracking-widest font-bold font-mono group-hover:text-muted-foreground transition-colors">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
