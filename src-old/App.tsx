import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ParticleBackground } from "@/components/layout/particle-background";
import { HomePage } from "@/pages/home";
import { ApproachPage } from "@/pages/approach";
import { SistemPage } from "@/pages/sistem";
import { CaseStudiesPage } from "@/pages/studi-kasus";
import { KontakPage } from "@/pages/kontak";
import { ArsitekturPage } from "@/pages/arsitektur";
import { OtomasiPage } from "@/pages/otomasi";
import { TentangPage } from "@/pages/tentang";
import { InvestasiPage } from "@/pages/investasi";
import { KarirPage } from "@/pages/karir";
import { PrivacyPage } from "@/pages/privacy";
import { TermsPage } from "@/pages/terms";
import { ResultPage } from "@/pages/result";
import { WizardModal } from "@/components/wizard/wizard-modal";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollManager />
      <LanguageProvider defaultLanguage="id" storageKey="koonang-language">
        <ThemeProvider defaultTheme="dark" storageKey="koonang-theme">
          <div className="min-h-screen text-slate-800 dark:text-slate-200 font-sans selection:bg-firefly/30 selection:text-firefly relative transition-colors duration-500">
            <ParticleBackground />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />
            
            <Routes>
              <Route path="/" element={<HomePage onOpenWizard={() => setIsWizardOpen(true)} />} />
              <Route path="/pendekatan" element={<ApproachPage />} />
              <Route path="/sistem" element={<SistemPage />} />
              <Route path="/studi-kasus" element={<CaseStudiesPage onOpenWizard={() => setIsWizardOpen(true)} />} />
              <Route path="/kontak" element={<KontakPage onOpenWizard={() => setIsWizardOpen(true)} />} />
              <Route path="/arsitektur" element={<ArsitekturPage onOpenWizard={() => setIsWizardOpen(true)} />} />
              <Route path="/otomasi" element={<OtomasiPage onOpenWizard={() => setIsWizardOpen(true)} />} />
              <Route path="/tentang" element={<TentangPage onOpenWizard={() => setIsWizardOpen(true)} />} />
              <Route path="/investasi" element={<InvestasiPage onOpenWizard={() => setIsWizardOpen(true)} />} />
              <Route path="/karir" element={<KarirPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/result/:id" element={<ResultPage />} />
            </Routes>

            <Footer />

            <WizardModal 
              isOpen={isWizardOpen} 
              onClose={() => setIsWizardOpen(false)} 
            />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
