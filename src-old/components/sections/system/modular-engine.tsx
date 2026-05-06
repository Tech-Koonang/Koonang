import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { 
  UserCheck, 
  Calendar, 
  ShoppingCart, 
  Users, 
  LayoutDashboard, 
  Zap, 
  PieChart 
} from "lucide-react";

const icons = [
  UserCheck, 
  Calendar, 
  ShoppingCart, 
  Users, 
  LayoutDashboard, 
  Zap, 
  PieChart
];

export function ModularEngine() {
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
            {t.systemPage.modular.headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {t.systemPage.modular.engines.map((engine, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-tosca/50 transition-all duration-300 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-navy-900 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-[0_0_15px_rgba(0,231,254,0.2)] transition-all">
                  <Icon className="w-6 h-6 text-tosca" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-3 group-hover:text-tosca transition-colors">
                  {engine.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {engine.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
