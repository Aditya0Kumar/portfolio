"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { Education } from "@/components/sections/Education";
import { Hackathons } from "@/components/sections/Hackathons";
import { CompetitiveCoding } from "@/components/sections/CompetitiveCoding";
import { Certifications } from "@/components/sections/Certifications";
import { Highlights } from "@/components/sections/Highlights";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/ui/Marquee";
import { StatsStrip } from "@/components/sections/StatsStrip";

export default function Home() {
  const [activeArch, setActiveArch] = useState<string | null>(null);

  useEffect(() => {
    // Fix: Ensure page loads at the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 md:gap-16 pb-20 overflow-x-hidden"
    >
      <Hero />
      <About />
      <Skills />
      <Projects onDeepDive={(id) => setActiveArch(id)} />
      <Highlights />
      <Certifications />
      <Hackathons />
      <CompetitiveCoding />
      <Education />
      <Contact />

      <AnimatePresence>
        {activeArch && (
          <Architecture
            projectId={activeArch}
            onClose={() => setActiveArch(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
