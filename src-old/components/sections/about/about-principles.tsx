import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Shield, Cpu, BarChart3 } from "lucide-react";

const icons = [Shield, Cpu, BarChart3];

export function AboutPrinciples() {
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
            {t.aboutPage.principles.headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {t.aboutPage.principles.items.map((principle, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-firefly group-hover:shadow-xl group-hover:shadow-firefly/10 transition-all duration-500">
                  <Icon className="w-10 h-10 text-firefly" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
