import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function AutomationFramework() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white dark:bg-navy-900 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.automationPage.framework.headline}
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            {t.automationPage.framework.layers.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-tosca/40 transition-all duration-500 shadow-sm hover:shadow-tosca/5">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-tosca/10 flex items-center justify-center text-tosca font-bold text-xl">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2 group-hover:text-tosca transition-colors">
                        {layer.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                        {layer.desc}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Connecting Nodes Visual */}
                {i < t.automationPage.framework.layers.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-tosca/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
