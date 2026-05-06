import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Target, Cpu, TrendingUp } from "lucide-react";

const icons = [Target, Cpu, TrendingUp];

export function Philosophy() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-32 bg-white dark:bg-navy-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white mb-8">
            {t.approachPage.philosophy.headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {t.approachPage.philosophy.principles.map((principle, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex items-start gap-6 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-firefly/10 transition-colors">
                  <Icon className="w-6 h-6 text-firefly" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
