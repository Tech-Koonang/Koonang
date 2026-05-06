import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function InvestmentClosing({ onOpenWizard }: { onOpenWizard: () => void }) {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white dark:bg-navy-900 transition-colors duration-500 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-firefly/15 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white mb-6 leading-tight">
            {t.investmentPage.closing.headline}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 font-light">
            {t.investmentPage.closing.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenWizard}
              className="px-8 py-4 rounded-full bg-firefly text-navy-900 font-bold text-lg shadow-lg hover:shadow-firefly/20 transition-all w-full sm:w-auto"
            >
              {t.investmentPage.closing.ctaPrimary}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white dark:bg-white/5 text-navy-900 dark:text-white border border-slate-200 dark:border-white/10 font-bold text-lg transition-all w-full sm:w-auto"
            >
              {t.investmentPage.closing.ctaSecondary}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
