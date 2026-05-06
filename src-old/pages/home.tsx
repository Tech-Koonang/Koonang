import { useState } from "react";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Process } from "@/components/sections/process";
import { BlueprintPreview } from "@/components/sections/blueprint-preview";
import { Comparison } from "@/components/sections/comparison";
import { FinalCTA } from "@/components/sections/final-cta";
import { WizardModal } from "@/components/wizard/wizard-modal";

export function HomePage({ onOpenWizard }: { onOpenWizard: () => void }) {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <BlueprintPreview />
        <Comparison />
        <FinalCTA onOpenWizard={onOpenWizard} />
      </main>
    </>
  );
}
