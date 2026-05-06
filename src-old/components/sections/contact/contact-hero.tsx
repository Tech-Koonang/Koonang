import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function ContactHero() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-navy-900 transition-colors duration-500"
    >
      {/* Deep Space Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-firefly/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-tosca/5 blur-[100px] rounded-full animate-pulse delay-700" />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-navy-900 dark:text-white mb-8 leading-tight tracking-tight"
        >
          {language === "id" ? (
            <>
              Mulai Percakapan <span className="text-firefly text-glow">Strategis</span> Anda
            </>
          ) : (
            <>
              Start Your <span className="text-firefly text-glow">Strategic</span> Conversation
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-light"
        >
          {t.contactPage.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-xs font-bold text-tosca tracking-[0.3em] uppercase">
            {t.contactPage.hero.cta}
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-firefly" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Constellation Lines forming on scroll */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <motion.path
          d="M 100,200 L 400,500 L 800,300 L 1100,600"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-tosca"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </section>
  );
}
