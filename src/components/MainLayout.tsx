"use client";

import { useState, useEffect } from "react";
import { IntroLoader } from "./ui/IntroLoader";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={showContent ? "" : "pointer-events-none"}
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
