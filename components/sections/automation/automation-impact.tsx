import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { CheckCircle2 } from "lucide-react";

export function AutomationImpact() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white dark:bg-navy-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.automationPage.impact.headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.automationPage.impact.outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-tosca/30 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-tosca/10 flex items-center justify-center mt-1">
                <CheckCircle2 className="w-5 h-5 text-tosca" />
              </div>
              <p className="text-lg font-bold text-navy-900 dark:text-white leading-tight">
                {outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
