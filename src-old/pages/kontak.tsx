import { motion } from "framer-motion";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ExclusiveConsultation } from "@/components/sections/contact/exclusive-consultation";
import { AuthorityBlock } from "@/components/sections/contact/authority-block";
import { StrategicForm } from "@/components/sections/contact/strategic-form";
import { ProcessExpectations } from "@/components/sections/contact/process-expectations";
import { FinalCTA } from "@/components/sections/final-cta";

export function KontakPage({ onOpenWizard }: { onOpenWizard: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactHero />
      <ExclusiveConsultation />
      <AuthorityBlock />
      <StrategicForm />
      <ProcessExpectations />
      <FinalCTA onOpenWizard={onOpenWizard} />
    </motion.div>
  );
}
