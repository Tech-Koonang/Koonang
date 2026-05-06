import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function ProcessExpectations() {
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
            {t.contactPage.process.headline}
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-white/5 -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {t.contactPage.process.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-firefly transition-colors relative">
                  <span className="text-sm font-bold text-navy-900 dark:text-white">{i + 1}</span>
                  <div className="absolute inset-0 rounded-full bg-firefly/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2 group-hover:text-firefly transition-colors">
                  {step}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
