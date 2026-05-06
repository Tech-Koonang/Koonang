import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Network, Share2, Zap, Database, Code2, Clock } from "lucide-react";

const icons = [Network, Share2, Zap, Database, Code2, Clock];

export function InvestmentFactors() {
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
            {t.investmentPage.factors.headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.investmentPage.factors.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/5 hover:border-firefly/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-8 group-hover:bg-firefly/10 transition-colors">
                  <Icon className="w-7 h-7 text-firefly" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
