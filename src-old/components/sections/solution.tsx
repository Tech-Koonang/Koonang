import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, LineChart, RefreshCw, Zap } from "lucide-react";
import { useLanguage } from "../language-provider";

const icons = [Code, Cpu, Zap, LineChart, RefreshCw];

export function Solution() {
  const { t } = useLanguage();

  return (
    <section id="system" className="py-24 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.solution.title.part1} <br />
            <span className="text-tosca">{t.solution.title.part2}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {t.solution.desc}
          </p>
        </motion.div>

        {/* Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-tosca/30 to-transparent -translate-y-1/2 z-0" />

          {t.solution.steps.map((label, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center gap-4 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-lg dark:shadow-[0_0_20px_rgba(0,231,254,0.1)] group-hover:border-tosca/50 group-hover:shadow-[0_0_30px_rgba(0,231,254,0.3)] transition-all duration-500">
                  <Icon className="w-8 h-8 text-slate-400 group-hover:text-tosca transition-colors" />
                </div>
                
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-navy-900 dark:group-hover:text-white transition-colors uppercase tracking-wider">
                  {label}
                </span>

                {i < t.solution.steps.length - 1 && (
                  <ArrowRight className="md:hidden w-6 h-6 text-slate-300 dark:text-white/20 rotate-90 my-2" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
