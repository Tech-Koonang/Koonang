import { motion } from "framer-motion";
import { ClipboardList, FileText, MessageSquare, Rocket } from "lucide-react";
import { useLanguage } from "../language-provider";

const icons = [ClipboardList, FileText, MessageSquare, Rocket];

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-navy-900 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            {t.process.title.part1} <span className="text-firefly">{t.process.title.part2}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl">
            {t.process.desc}
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-white/10 md:hidden" />
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200 dark:bg-white/10" />

          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {t.process.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-20 md:pl-0 md:pt-20 group"
                >
                  {/* Number & Icon */}
                  <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-white dark:bg-navy-800 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-firefly/50 group-hover:shadow-[0_0_20px_rgba(239,217,47,0.2)] transition-all duration-500 z-20 shadow-sm">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-firefly transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="md:text-center">
                    <span className="text-xs font-mono text-firefly mb-2 block">STEP 0{i + 1}</span>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
