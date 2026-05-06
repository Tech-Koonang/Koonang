import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { ArrowRight } from "lucide-react";

export function SystemClosing() {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,217,47,0.15),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          {t.systemPage.closing.headline}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 mb-12 text-lg"
        >
          {t.systemPage.closing.subheadline}
        </motion.p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 rounded-full bg-firefly text-navy-900 font-bold text-lg transition-all hover:shadow-[0_0_50px_rgba(239,217,47,0.4)] flex items-center gap-3 mx-auto"
        >
          {t.systemPage.closing.cta}
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 rounded-full bg-firefly blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
        </motion.button>
      </div>
    </section>
  );
}
