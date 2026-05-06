"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutPillars } from "@/components/sections/about/about-pillars";
import { AboutSynergy } from "@/components/sections/about/about-synergy";
import { AboutPrinciples } from "@/components/sections/about/about-principles";
import { AboutClosing } from "@/components/sections/about/about-closing";
import { WizardModal } from "@/components/wizard/wizard-modal";

export default function TentangPage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutHero />
        {/* <AboutPillars /> */}
        <AboutSynergy />
        <AboutPrinciples />
        <AboutClosing onOpenWizard={() => setIsWizardOpen(true)} />
      </motion.div>
      <WizardModal 
        isOpen={isWizardOpen} 
        onClose={() => setIsWizardOpen(false)} 
      />
    </>
  );
}
