import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { ParticleBackground } from "@/components/layout/particle-background";
import { ChevronDown } from "lucide-react";

export function ApproachHero() {
  const { t, language } = useLanguage();

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
          {t.approachPage.hero.headline.part1} <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="relative z-10">
              <span className="text-firefly relative">
                Sistem
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute -bottom-1 left-0 h-1 bg-firefly shadow-[0_0_15px_#EFD92F] z-0"
                />
              </span>
              {language === "id" ? ", Bukan Sekadar Website" : ", Not Just a Website"}
            </span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t.approachPage.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <button 
            onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center gap-4 text-slate-400 hover:text-firefly transition-colors"
          >
            <span className="text-sm font-medium tracking-widest uppercase">{t.approachPage.hero.cta}</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Decorative Constellation Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <motion.path
          d="M 100,100 L 300,200 L 200,400 L 500,300 L 700,500"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-tosca"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </section>
  );
}
