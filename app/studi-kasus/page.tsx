"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CaseStudiesHero } from "@/components/sections/case-studies/case-studies-hero";
import { CaseStudySimulations } from "@/components/sections/case-studies/case-study-simulations";
import { CaseStudyInsight } from "@/components/sections/case-studies/case-study-insight";
import { FinalCTA } from "@/components/sections/final-cta";
import { WizardModal } from "@/components/wizard/wizard-modal";

export default function CaseStudiesPage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CaseStudiesHero />
        <CaseStudySimulations />
        <CaseStudyInsight />
        <FinalCTA onOpenWizard={() => setIsWizardOpen(true)} />
      </motion.div>
      <WizardModal 
        isOpen={isWizardOpen} 
        onClose={() => setIsWizardOpen(false)} 
      />
    </>
  );
}
