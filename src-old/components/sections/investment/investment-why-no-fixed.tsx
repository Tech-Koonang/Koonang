import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { FileText, Layers, Share2 } from "lucide-react";

const icons = [FileText, Share2, Layers];

export function InvestmentWhyNoFixed() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-slate-50 dark:bg-navy-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-8 leading-tight">
              {t.investmentPage.whyNoFixed.headline}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light mb-12 leading-relaxed">
              {t.investmentPage.whyNoFixed.narration}
            </p>
            
            <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/5 shadow-sm">
              <p className="text-2xl font-bold text-navy-900 dark:text-white italic leading-tight">
                "{t.investmentPage.whyNoFixed.closing}"
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {t.investmentPage.whyNoFixed.points.map((point, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-firefly transition-colors">
                    <Icon className="w-6 h-6 text-firefly" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2 group-hover:text-firefly transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
