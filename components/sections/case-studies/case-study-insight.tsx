import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function CaseStudyInsight() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white dark:bg-navy-900 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-8 tracking-tight"
          >
            {t.caseStudiesPage.insight.headline}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-8 -top-8 text-8xl text-firefly/10 font-serif">“</div>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light italic">
              {t.caseStudiesPage.insight.content}
            </p>
            <div className="absolute -right-8 -bottom-8 text-8xl text-firefly/10 font-serif rotate-180">“</div>
          </motion.div>
        </div>
      </div>

      {/* Background Constellation */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
        <motion.path
          d="M 0,100 Q 200,50 400,150 T 800,100 T 1200,200"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-tosca"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 3 }}
        />
      </svg>
    </section>
  );
}
