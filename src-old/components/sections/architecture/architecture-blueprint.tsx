import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function ArchitectureBlueprint() {
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
            {t.architecturePage.blueprint.headline}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/5 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {t.architecturePage.blueprint.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-firefly transition-all duration-500 relative">
                  <span className="text-xl font-bold text-navy-900 dark:text-white group-hover:text-firefly transition-colors">
                    {i + 1}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-firefly/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 dark:text-white leading-tight group-hover:text-firefly transition-colors">
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
