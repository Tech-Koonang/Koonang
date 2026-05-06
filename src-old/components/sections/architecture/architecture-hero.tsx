import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function ArchitectureHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-navy-900 transition-colors duration-500">
      {/* Deep Space Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-firefly/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tosca/5 blur-[120px] rounded-full animate-pulse delay-1000" />
        
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-navy-900 dark:text-white mb-8 leading-tight tracking-tight">
            {t.architecturePage.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            {t.architecturePage.hero.subheadline}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-firefly text-navy-900 font-bold text-lg shadow-lg hover:shadow-firefly/20 transition-all"
          >
            {t.architecturePage.hero.cta}
          </motion.button>
        </motion.div>

        {/* Constellation Blueprint Visual */}
        <div className="mt-20 relative h-64 w-full max-w-2xl mx-auto">
          <svg className="w-full h-full opacity-20">
            <motion.path
              d="M 50,100 L 200,50 L 400,150 L 600,50 L 750,100"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-firefly"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {[
              { x: 50, y: 100 },
              { x: 200, y: 50 },
              { x: 400, y: 150 },
              { x: 600, y: 50 },
              { x: 750, y: 100 }
            ].map((node, i) => (
              <motion.circle
                key={i}
                cx={node.x}
                cy={node.y}
                r="4"
                className="fill-firefly"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + i * 0.2 }}
              />
            ))}
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-firefly rounded-full blur-sm animate-ping" />
        </div>
      </div>
    </section>
  );
}
