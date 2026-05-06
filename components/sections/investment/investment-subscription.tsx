import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { CheckCircle2 } from "lucide-react";

export function InvestmentSubscription() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white dark:bg-navy-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-8">
              {t.investmentPage.subscription.headline}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light mb-8 leading-relaxed">
              {t.investmentPage.subscription.narration}
            </p>
            <p className="text-lg text-navy-900 dark:text-white font-bold italic border-l-2 border-firefly pl-6 mb-12">
              {t.investmentPage.subscription.closing}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {t.investmentPage.subscription.options.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center gap-4 group hover:border-tosca transition-colors"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-tosca/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-tosca" />
                </div>
                <span className="text-lg font-bold text-navy-900 dark:text-white">
                  {option}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
