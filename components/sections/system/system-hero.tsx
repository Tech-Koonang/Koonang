import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { ParticleBackground } from "@/components/layout/particle-background";
import { ChevronDown } from "lucide-react";

export function SystemHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-900">
      <ParticleBackground isRelative className="opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
        >
          {t.systemPage.hero.headline.split(". ").map((part, i) => (
            <span key={i} className="block">
              {part.includes("Sistem") || part.includes("System") ? (
                <span className="text-firefly relative">
                  {part}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="absolute -bottom-1 left-0 h-1 bg-firefly shadow-[0_0_15px_#EFD92F] z-0"
                  />
                </span>
              ) : (
                part
              )}
              {i === 0 && "."}
            </span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t.systemPage.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button 
            onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center gap-4 text-slate-400 hover:text-firefly transition-colors"
          >
            <span className="text-sm font-medium tracking-widest uppercase">{t.systemPage.hero.cta}</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Orbiting Layer System Visual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl opacity-20">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-tosca/30 rounded-full"
              style={{ margin: `${i * 15}%` }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-tosca rounded-full shadow-[0_0_10px_#00E7FE]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
