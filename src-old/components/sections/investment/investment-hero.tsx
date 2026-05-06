import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function InvestmentHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-navy-900 transition-colors duration-500">
      {/* Deep Space Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-firefly/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tosca/5 blur-[120px] rounded-full animate-pulse delay-1000" />
        
        {/* Subtle Layered Digital Grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-navy-900 dark:text-white mb-8 leading-tight tracking-tight">
            {t.investmentPage.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            {t.investmentPage.hero.subheadline}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-firefly text-navy-900 font-bold text-lg shadow-lg hover:shadow-firefly/20 transition-all"
          >
            {t.investmentPage.hero.cta}
          </motion.button>
        </motion.div>

        {/* Constellation Node Forming Layered Stack Visual */}
        <div className="mt-20 relative h-64 w-full max-w-lg mx-auto">
          <svg className="w-full h-full opacity-20 dark:opacity-30">
            {[0, 1, 2].map((layer) => (
              <motion.g key={layer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: layer * 0.3 }}>
                <path
                  d={`M 50,${180 - layer * 40} L 450,${180 - layer * 40} L 400,${220 - layer * 40} L 0,${220 - layer * 40} Z`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className={layer === 2 ? "text-firefly" : "text-tosca"}
                />
                {[
                  { x: 50, y: 180 - layer * 40 },
                  { x: 450, y: 180 - layer * 40 },
                  { x: 400, y: 220 - layer * 40 },
                  { x: 0, y: 220 - layer * 40 }
                ].map((node, i) => (
                  <circle key={i} cx={node.x} cy={node.y} r="2" className="fill-current" />
                ))}
              </motion.g>
            ))}
            {/* Connecting Lines */}
            <line x1="50" y1="180" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-slate-300" />
            <line x1="450" y1="180" x2="450" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-slate-300" />
          </svg>
        </div>
      </div>
    </section>
  );
}
