import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../language-provider";

export function FinalCTA({ onOpenWizard }: { onOpenWizard: () => void }) {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,217,47,0.1),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight"
        >
          {t.cta.title.part1} <br />
          <span className="text-firefly">{t.cta.title.part2}</span>
        </motion.h2>
        
        <motion.button
          onClick={onOpenWizard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 rounded-full bg-white text-navy-900 font-bold text-lg transition-all hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] flex items-center gap-3 mx-auto"
        >
          {t.cta.button}
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 rounded-full bg-white blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
        </motion.button>
      </div>

      {/* Floating Fireflies */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-firefly rounded-full blur-[1px]"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
}
