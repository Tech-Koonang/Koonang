"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { InvestmentHero } from "@/components/sections/investment/investment-hero";
import { InvestmentWhyNoFixed } from "@/components/sections/investment/investment-why-no-fixed";
import { InvestmentAIModel } from "@/components/sections/investment/investment-ai-model";
import { InvestmentFactors } from "@/components/sections/investment/investment-factors";
import { InvestmentSubscription } from "@/components/sections/investment/investment-subscription";
import { InvestmentQualification } from "@/components/sections/investment/investment-qualification";
import { InvestmentClosing } from "@/components/sections/investment/investment-closing";
import { WizardModal } from "@/components/wizard/wizard-modal";

export default function InvestasiPage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <InvestmentHero />
        <InvestmentWhyNoFixed />
        <InvestmentAIModel />
        <InvestmentFactors />
        <InvestmentSubscription />
        <InvestmentQualification />
        <InvestmentClosing onOpenWizard={() => setIsWizardOpen(true)} />
      </motion.div>
      <WizardModal 
        isOpen={isWizardOpen} 
        onClose={() => setIsWizardOpen(false)} 
      />
    </>
  );
}
