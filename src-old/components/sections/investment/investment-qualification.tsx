import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { UserCheck } from "lucide-react";

export function InvestmentQualification() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-slate-50 dark:bg-navy-800/50 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.investmentPage.qualification.headline}
          </h2>
        </motion.div>

        <div className="space-y-6 mb-16">
          {t.investmentPage.qualification.bullets.map((bullet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/5 flex items-center gap-6 group hover:border-firefly transition-all"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-firefly/10 flex items-center justify-center group-hover:bg-firefly transition-colors">
                <UserCheck className="w-5 h-5 text-firefly group-hover:text-navy-900 transition-colors" />
              </div>
              <p className="text-lg font-medium text-navy-900 dark:text-white">
                {bullet}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center p-10 rounded-[40px] bg-navy-900 dark:bg-white text-white dark:text-navy-900"
        >
          <p className="text-xl md:text-2xl font-light italic leading-relaxed">
            {t.investmentPage.qualification.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
