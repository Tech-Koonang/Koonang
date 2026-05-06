import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-navy-900 transition-colors duration-500">
      {/* Deep Space Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-firefly/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tosca/5 blur-[120px] rounded-full animate-pulse delay-1000" />
        
        {/* Subtle Firefly Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-firefly rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0 
              }}
              animate={{ 
                y: [null, "-20%"],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-navy-900 dark:text-white mb-8 leading-tight tracking-tight">
            {t.aboutPage.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light max-w-3xl mx-auto">
            {t.aboutPage.hero.subheadline}
          </p>
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-slate-50/50 dark:bg-white/5 border border-slate-100 dark:border-white/10 backdrop-blur-sm">
            <p className="text-lg text-slate-600 dark:text-slate-400 italic leading-relaxed">
              {t.aboutPage.hero.narration}
            </p>
          </div>
        </motion.div>

        {/* Constellation Triangle Visual */}
        <div className="mt-20 relative h-48 w-48 mx-auto">
          <svg className="w-full h-full">
            <motion.path
              d="M 96,20 L 172,152 L 20,152 Z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-firefly/30"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {[
              { x: 96, y: 20 },
              { x: 172, y: 152 },
              { x: 20, y: 152 }
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-firefly rounded-full blur-md animate-pulse" />
        </div>
      </div>
    </section>
  );
}
