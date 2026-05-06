import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { CheckCircle2 } from "lucide-react";

export function AIRole() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white dark:bg-navy-900 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-8 leading-tight">
              {t.approachPage.aiRole.headline}
            </h2>
            
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-firefly uppercase tracking-wider">
                {t.approachPage.aiRole.left.title}
              </h3>
              <ul className="space-y-4">
                {t.approachPage.aiRole.left.items.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-tosca" />
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square"
          >
            {/* Abstract AI Constellation Visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-tosca/20 blur-[100px] animate-pulse" />
              <div className="w-48 h-48 rounded-full bg-firefly/10 blur-[80px] absolute" />
            </div>
            
            <svg className="w-full h-full relative z-10 text-tosca/30">
              {[...Array(8)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={`${20 + Math.random() * 60}%`}
                  cy={`${20 + Math.random() * 60}%`}
                  r="2"
                  fill="currentColor"
                  animate={{ 
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2, 
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
              <motion.path
                d="M 150,150 L 250,100 L 350,200 L 200,300 Z"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
