import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function AboutSynergy() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white dark:bg-navy-900 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-8">
              {t.aboutPage.synergy.headline}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light mb-8 leading-relaxed">
              {t.aboutPage.synergy.narration}
            </p>
            
            <div className="space-y-6 mb-10">
              {t.aboutPage.synergy.points.map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-firefly" />
                  <p className="text-lg text-navy-900 dark:text-white font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-2 border-firefly pl-6">
              {t.aboutPage.synergy.closing}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            {/* Triangle Node Network Visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full">
                <motion.path
                  d="M 200,50 L 350,300 L 50,300 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-firefly/20"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                />
                {[
                  { x: 200, y: 50, label: "Concept" },
                  { x: 350, y: 300, label: "Analysis" },
                  { x: 50, y: 300, label: "Technology" }
                ].map((node, i) => (
                  <g key={i}>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="8"
                      className="fill-firefly"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                    <text 
                      x={node.x} 
                      y={node.y + 30} 
                      textAnchor="middle" 
                      className="text-[10px] font-bold uppercase tracking-widest fill-slate-400 dark:fill-slate-500"
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-tosca/10 blur-[60px] rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
