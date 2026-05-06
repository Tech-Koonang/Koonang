"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ExclusiveConsultation } from "@/components/sections/contact/exclusive-consultation";
import { AuthorityBlock } from "@/components/sections/contact/authority-block";
import { AboutTeam } from "@/components/sections/about/about-team";
import { StrategicForm } from "@/components/sections/contact/strategic-form";
import { ProcessExpectations } from "@/components/sections/contact/process-expectations";
import { FinalCTA } from "@/components/sections/final-cta";
import { WizardModal } from "@/components/wizard/wizard-modal";

export default function KontakPage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContactHero />
        <ExclusiveConsultation />
        <AuthorityBlock />
        <AboutTeam />
        <StrategicForm />
        <ProcessExpectations />
        <FinalCTA onOpenWizard={() => setIsWizardOpen(true)} />
      </motion.div>
      <WizardModal 
        isOpen={isWizardOpen} 
        onClose={() => setIsWizardOpen(false)} 
      />
    </>
  );
}
