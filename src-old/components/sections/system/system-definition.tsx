import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function SystemDefinition() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white dark:bg-navy-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white mb-8 leading-tight">
              {t.systemPage.definition.headline}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {t.systemPage.definition.content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
