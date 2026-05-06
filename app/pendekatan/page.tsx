"use client";

import { ApproachHero } from "@/components/sections/approach/approach-hero";
import { Philosophy } from "@/components/sections/approach/philosophy";
import { ProprietaryFramework } from "@/components/sections/approach/proprietary-framework";
import { AIRole } from "@/components/sections/approach/ai-role";
import { CorePrinciples } from "@/components/sections/approach/core-principles";
import { ApproachClosing } from "@/components/sections/approach/approach-closing";
import { motion } from "framer-motion";

export default function ApproachPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ApproachHero />
      <Philosophy />
      <ProprietaryFramework />
      <AIRole />
      <CorePrinciples />
      <ApproachClosing />
    </motion.div>
  );
}
