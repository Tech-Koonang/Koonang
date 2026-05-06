import { motion } from "framer-motion";
import { SystemHero } from "@/components/sections/system/system-hero";
import { SystemDefinition } from "@/components/sections/system/system-definition";
import { LayeredArchitecture } from "@/components/sections/system/layered-architecture";
import { ModularEngine } from "@/components/sections/system/modular-engine";
import { SystemFlow } from "@/components/sections/system/system-flow";
import { SystemAdvantage } from "@/components/sections/system/system-advantage";
import { SystemClosing } from "@/components/sections/system/system-closing";

export function SistemPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SystemHero />
      <SystemDefinition />
      <LayeredArchitecture />
      <ModularEngine />
      <SystemFlow />
      <SystemAdvantage />
      <SystemClosing />
    </motion.div>
  );
}
