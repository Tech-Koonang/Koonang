import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function AuthorityBlock() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white dark:bg-navy-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {t.contactPage.authority.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-firefly/20 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4 group-hover:text-firefly transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
