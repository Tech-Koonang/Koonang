import { motion } from "framer-motion";
import { FileText, Layers, LineChart, Zap } from "lucide-react";
import { useLanguage } from "../language-provider";

export function BlueprintPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-navy-900 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            {t.blueprint.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.blueprint.desc}
          </p>
        </div>

        <div className="relative flex justify-center perspective-1000">
          {/* Floating PDF Mockup */}
          <motion.div
            initial={{ rotateX: 10, rotateY: -10, y: 50, opacity: 0 }}
            whileInView={{ rotateX: 0, rotateY: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-4xl bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-firefly/20 via-tosca/20 to-firefly/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {/* Left: Architecture Diagram */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-5 h-5 text-tosca" />
                  <h3 className="text-navy-900 dark:text-white font-semibold">{t.blueprint.diagram}</h3>
                </div>
                <div className="bg-slate-100 dark:bg-navy-900/50 rounded-lg p-4 border border-slate-200 dark:border-white/5 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                  <span className="text-slate-500 text-xs absolute">{t.blueprint.visualization}</span>
                </div>
              </div>

              {/* Right: Strategy Points */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <LineChart className="w-5 h-5 text-firefly" />
                  <h3 className="text-navy-900 dark:text-white font-semibold">{t.blueprint.strategy}</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  {t.blueprint.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-firefly" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-tosca" />
                    <h3 className="text-navy-900 dark:text-white font-semibold">{t.blueprint.automation}</h3>
                  </div>
                  <div className="flex gap-2">
                    {t.blueprint.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Roadmap */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/5">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                {t.blueprint.phases.map((phase, i) => (
                  <span key={i}>{phase}</span>
                ))}
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-navy-900 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-gradient-to-r from-firefly to-tosca" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
