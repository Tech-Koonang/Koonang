import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { ArrowRight } from "lucide-react";

export function SystemFlow() {
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
            {t.systemPage.flows.headline}
          </h2>
        </motion.div>

        <div className="space-y-20">
          {t.systemPage.flows.items.map((flow, i) => (
            <div key={i} className="relative">
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-10 text-center md:text-left">
                {flow.title}
              </h3>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
                {flow.steps.map((step, j) => (
                  <div key={j} className="flex items-center gap-4 md:gap-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 }}
                      className="px-6 py-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 shadow-sm text-sm font-bold text-navy-900 dark:text-white relative group"
                    >
                      <div className="absolute inset-0 rounded-xl bg-tosca/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {step}
                    </motion.div>
                    
                    {j < flow.steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "auto" }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 + 0.05 }}
                      >
                        <ArrowRight className="w-5 h-5 text-slate-300 dark:text-white/20" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Animated Flow Line */}
              <svg className="absolute top-1/2 left-0 w-full h-full opacity-10 pointer-events-none -z-10 hidden md:block">
                <motion.path
                  d={`M 0,${50 + i * 20} Q 200,${100 + i * 10} 400,${50 + i * 20} T 800,${50 + i * 20}`}
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-firefly"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
