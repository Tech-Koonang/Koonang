import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function AutomationHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-navy-900 transition-colors duration-500">
      {/* Deep Space Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-tosca/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-firefly/5 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-navy-900 dark:text-white mb-8 leading-tight tracking-tight">
            {t.automationPage.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            {t.automationPage.hero.subheadline}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-firefly text-navy-900 font-bold text-lg shadow-lg hover:shadow-firefly/20 transition-all"
          >
            {t.automationPage.hero.cta}
          </motion.button>
        </motion.div>

        {/* Node Diagram Visual */}
        <div className="mt-20 relative h-64 w-full max-w-2xl mx-auto">
          <svg className="w-full h-full opacity-30">
            <motion.path
              d="M 100,100 Q 200,50 300,100 T 500,100"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-tosca"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M 100,150 Q 250,200 400,150 T 700,150"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-firefly"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
            />
            {[
              { x: 100, y: 100 },
              { x: 300, y: 100 },
              { x: 500, y: 100 },
              { x: 100, y: 150 },
              { x: 400, y: 150 },
              { x: 700, y: 150 }
            ].map((node, i) => (
              <motion.circle
                key={i}
                cx={node.x}
                cy={node.y}
                r="4"
                className="fill-firefly"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
