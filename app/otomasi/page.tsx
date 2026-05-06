"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AutomationHero } from "@/components/sections/automation/automation-hero";
import { AutomationProblems } from "@/components/sections/automation/automation-problems";
import { AutomationFramework } from "@/components/sections/automation/automation-framework";
import { AutomationScenarios } from "@/components/sections/automation/automation-scenarios";
import { AutomationImpact } from "@/components/sections/automation/automation-impact";
import { AutomationIntegrations } from "@/components/sections/automation/automation-integrations";
import { AutomationClosing } from "@/components/sections/automation/automation-closing";
import { WizardModal } from "@/components/wizard/wizard-modal";

export default function OtomasiPage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AutomationHero />
        <AutomationProblems />
        <AutomationFramework />
        <AutomationScenarios />
        <AutomationImpact />
        <AutomationIntegrations />
        <AutomationClosing onOpenWizard={() => setIsWizardOpen(true)} />
      </motion.div>
      <WizardModal 
        isOpen={isWizardOpen} 
        onClose={() => setIsWizardOpen(false)} 
      />
    </>
  );
}
