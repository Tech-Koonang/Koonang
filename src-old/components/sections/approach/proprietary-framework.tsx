import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Search, Activity, Layout, Settings, BarChart } from "lucide-react";

const icons = [Search, Activity, Layout, Settings, BarChart];

export function ProprietaryFramework() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-slate-50 dark:bg-navy-800/50 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.approachPage.framework.title}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/10 -translate-y-1/2 hidden md:block" />
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-firefly to-tosca -translate-y-1/2 hidden md:block z-10"
          />

          <div className="grid md:grid-cols-5 gap-8 relative z-20">
            {t.approachPage.framework.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:border-firefly/50 group-hover:shadow-[0_0_20px_rgba(239,217,47,0.2)] transition-all duration-500">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-firefly transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold tracking-widest text-navy-900 dark:text-white mb-2 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[150px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
