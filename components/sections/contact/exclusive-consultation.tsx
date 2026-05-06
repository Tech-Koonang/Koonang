import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Shield, Cpu, Database, Workflow, Check } from "lucide-react";

const icons = [Shield, Cpu, Database, Workflow];

export function ExclusiveConsultation() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-slate-50 dark:bg-navy-800/50 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-8 leading-tight">
              {t.contactPage.consultation.headline}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t.contactPage.consultation.description}
            </p>
            
            <ul className="space-y-4 mb-10">
              {t.contactPage.consultation.expertise.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-firefly/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-firefly" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-firefly/20 shadow-sm">
              <p className="text-navy-900 dark:text-white font-bold italic">
                {t.contactPage.consultation.affirmation}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {icons.map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 hover:border-firefly/50 transition-all duration-500 group shadow-sm hover:shadow-[0_0_30px_rgba(239,217,47,0.1)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-firefly/10 transition-colors">
                  <Icon className="w-7 h-7 text-firefly" />
                </div>
                <div className="h-1 w-8 bg-tosca/30 rounded-full group-hover:w-12 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
