import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { ParticleBackground } from "@/components/layout/particle-background";

export function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-900 transition-colors duration-500 relative">
      <ParticleBackground className="opacity-30" />
      
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 rounded-full bg-firefly/10 border border-firefly/20 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-firefly" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
            {t.privacyPage.title}
          </h1>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {t.privacyPage.lastUpdated}
          </p>
        </motion.div>

        <div className="bg-white/80 dark:bg-navy-800/80 border border-slate-200/80 dark:border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
          <div className="space-y-12">
            {t.privacyPage.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
