import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { ArrowRight } from "lucide-react";

export function AutomationScenarios() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-slate-50 dark:bg-navy-800/50 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.automationPage.scenarios.headline}
          </h2>
        </motion.div>

        <div className="space-y-16">
          {t.automationPage.scenarios.items.map((scenario, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-[40px] bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/5 shadow-sm overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-firefly/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-10 relative z-10">
                {scenario.title}
              </h3>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-4">
                  {scenario.steps.map((step, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <div className="px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-firefly transition-colors">
                        {step}
                      </div>
                      {j < scenario.steps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-firefly" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
