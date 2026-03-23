"use client";

import { useState, useEffect } from "react";
import { IntroLoader } from "./ui/IntroLoader";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { BackgroundGrid } from "./BackgroundGrid";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <IntroLoader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      <BackgroundGrid />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={showContent ? "relative z-10" : "pointer-events-none relative z-10"}
      >
        <Navigation />
        <main className="pt-16 min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </motion.div>
    </>
  );
};
