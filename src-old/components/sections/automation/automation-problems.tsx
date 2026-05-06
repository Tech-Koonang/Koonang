import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { UserCheck, Database, Calendar, FileText } from "lucide-react";

const icons = [UserCheck, Database, Calendar, FileText];

export function AutomationProblems() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-slate-50 dark:bg-navy-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.automationPage.problems.headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {t.automationPage.problems.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/5 hover:border-firefly/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-firefly/10 transition-colors">
                  <Icon className="w-6 h-6 text-firefly" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white italic">
            {t.automationPage.problems.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
