import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function InvestmentAIModel() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white dark:bg-navy-900 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.investmentPage.aiModel.headline}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
            {t.investmentPage.aiModel.explanation}
          </p>
        </motion.div>

        {/* 4 Step Flow */}
        <div className="relative mb-32">
          {/* Animated Flow Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 dark:bg-white/5 -translate-y-1/2 hidden lg:block overflow-hidden">
            <motion.div
              className="w-full h-full bg-gradient-to-r from-transparent via-firefly to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {t.investmentPage.aiModel.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-firefly transition-all duration-500 relative">
                  <span className="text-xl font-bold text-navy-900 dark:text-white group-hover:text-firefly transition-colors">
                    {i + 1}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-firefly/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 dark:text-white leading-tight group-hover:text-firefly transition-colors">
                  {step}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="max-w-3xl mx-auto p-12 rounded-[40px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tosca/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-8 relative z-10">
            {t.investmentPage.aiModel.resultsTitle}
          </h3>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {t.investmentPage.aiModel.results.map((result, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-firefly/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-firefly" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
