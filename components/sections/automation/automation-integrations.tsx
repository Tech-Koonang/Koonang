import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Users, CreditCard, Mail, MessageSquare, BarChart3, LayoutDashboard } from "lucide-react";

const icons = [Users, CreditCard, Mail, MessageSquare, BarChart3, LayoutDashboard];

export function AutomationIntegrations() {
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
            {t.automationPage.integrations.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {t.automationPage.integrations.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4 group-hover:border-firefly group-hover:shadow-lg group-hover:shadow-firefly/10 transition-all duration-500">
                  <Icon className="w-8 h-8 text-slate-400 group-hover:text-firefly transition-colors" />
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-navy-900 dark:group-hover:text-white transition-colors">
                  {item}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
