"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArchitectureHero } from "@/components/sections/architecture/architecture-hero";
import { ArchitectureProblems } from "@/components/sections/architecture/architecture-problems";
import { ArchitectureApproach } from "@/components/sections/architecture/architecture-approach";
import { ArchitectureBlueprint } from "@/components/sections/architecture/architecture-blueprint";
import { ArchitectureSystemDiagram } from "@/components/sections/architecture/architecture-system-diagram";
import { ArchitectureImpact } from "@/components/sections/architecture/architecture-impact";
import { ArchitectureClosing } from "@/components/sections/architecture/architecture-closing";
import { WizardModal } from "@/components/wizard/wizard-modal";

export default function ArsitekturPage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArchitectureHero />
        <ArchitectureProblems />
        <ArchitectureApproach />
        <ArchitectureBlueprint />
        <ArchitectureSystemDiagram />
        <ArchitectureImpact />
        <ArchitectureClosing onOpenWizard={() => setIsWizardOpen(true)} />
      </motion.div>
      <WizardModal 
        isOpen={isWizardOpen} 
        onClose={() => setIsWizardOpen(false)} 
      />
    </>
  );
}
