import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Check, X } from "lucide-react";

export function SystemAdvantage() {
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
            {t.systemPage.advantage.headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 opacity-80"
          >
            <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-8">
              {t.systemPage.advantage.traditional.title}
            </h3>
            <ul className="space-y-6">
              {t.systemPage.advantage.traditional.points.map((point, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* System-Based */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-navy-900 border border-firefly/30 relative overflow-hidden shadow-[0_0_50px_rgba(239,217,47,0.1)]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-firefly/10 blur-[60px] rounded-full" />
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              {t.systemPage.advantage.system.title}
              <span className="px-2 py-0.5 rounded text-[10px] bg-firefly/20 text-firefly border border-firefly/20 uppercase tracking-widest">
                Architecture
              </span>
            </h3>
            <ul className="space-y-6">
              {t.systemPage.advantage.system.points.map((point, i) => (
                <li key={i} className="flex items-center gap-4 text-white">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-firefly/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-firefly" />
                  </div>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
