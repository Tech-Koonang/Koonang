import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { ParticleBackground } from "../layout/particle-background";
import { useLanguage } from "../language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-900">
      {/* Local Particle Background for Hero (Always Dark) */}
      <ParticleBackground isRelative className="opacity-80" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-firefly animate-pulse shadow-[0_0_8px_#EFD92F]" />
          <span className="text-xs font-medium text-firefly tracking-wide uppercase">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          {t.hero.headline.part1} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            {t.hero.headline.part2}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subheadline.part1} <span className="text-white font-medium">{t.hero.subheadline.revenue}</span>, <span className="text-white font-medium">{t.hero.subheadline.automation}</span>, {t.hero.subheadline.part1.includes("dan") ? "dan" : "and"} <span className="text-white font-medium">{t.hero.subheadline.scalability}</span>.
        </motion.p>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border border-slate-400/50 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="w-1.5 h-1.5 bg-tosca rounded-full shadow-[0_0_8px_rgba(0,231,254,0.6)]"
          />
        </div>
      </motion.div>

      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-800/80 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy-900 to-transparent z-10" />
    </section>
  );
}
