import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Layout, Database, Settings, BarChart3, Cpu } from "lucide-react";

const icons = [Layout, Database, Settings, BarChart3, Cpu];

export function LayeredArchitecture() {
  const { t } = useLanguage();

  return (
    <section id="architecture" className="py-32 bg-slate-50 dark:bg-navy-800/50 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.systemPage.architecture.headline}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {t.systemPage.architecture.layers.map((layer, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative"
              >
                <div className="p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 hover:border-firefly/50 transition-all duration-500 shadow-sm hover:shadow-[0_0_30px_rgba(239,217,47,0.1)] flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-firefly/10 transition-colors">
                    <Icon className="w-8 h-8 text-firefly" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-bold text-tosca tracking-widest uppercase">Layer 0{i + 1}</span>
                      <h3 className="text-2xl font-bold text-navy-900 dark:text-white">{layer.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {layer.points.map((point, j) => (
                        <span 
                          key={j}
                          className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {i < t.systemPage.architecture.layers.length - 1 && (
                  <div className="absolute left-16 md:left-1/2 bottom-[-24px] w-0.5 h-6 bg-gradient-to-b from-firefly to-transparent hidden md:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Constellation Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
        <motion.path
          d="M 100,200 L 400,500 L 800,300 L 1100,600"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-tosca"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 3 }}
        />
      </svg>
    </section>
  );
}
