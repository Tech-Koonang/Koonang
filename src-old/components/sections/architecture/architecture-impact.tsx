import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { CheckCircle2 } from "lucide-react";

export function ArchitectureImpact() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-slate-50 dark:bg-navy-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.architecturePage.impact.headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.architecturePage.impact.outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/5 hover:border-firefly/30 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-firefly/10 flex items-center justify-center mt-1">
                <CheckCircle2 className="w-5 h-5 text-firefly" />
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
