import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Check, X, ArrowRight, Briefcase, Users, Zap, Search, Database, Settings, BarChart3, Cpu, Layout, Globe } from "lucide-react";

const layerIcons = [Layout, Globe, Database, Settings, BarChart3, Cpu];

export function CaseStudySimulations() {
  const { t } = useLanguage();

  return (
    <section id="simulations" className="py-32 bg-slate-50 dark:bg-navy-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-40">
          {t.caseStudiesPage.simulations.map((sim, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div>
                  <span className="text-xs font-bold text-tosca tracking-[0.3em] uppercase mb-4 block">
                    Simulation 0{i + 1}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
                    {sim.title}
                  </h2>
                </div>
                <div className="h-px flex-1 bg-slate-200 dark:bg-white/10 mx-8 hidden md:block mb-4" />
              </div>

              <div className="grid lg:grid-cols-12 gap-12">
                {/* Left Column: Context & Diagnosis */}
                <div className="lg:col-span-4 space-y-8">
                  <div className="p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 shadow-sm">
                    <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-6 flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-firefly" />
                      {sim.context.title}
                    </h3>
                    <ul className="space-y-4">
                      {sim.context.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <Check className="w-4 h-4 text-tosca mt-0.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/10 shadow-sm">
                    <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-6 flex items-center gap-3">
                      <Search className="w-5 h-5" />
                      {sim.diagnosis.title}
                    </h3>
                    <ul className="space-y-4">
                      {sim.diagnosis.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Architecture & Flow */}
                <div className="lg:col-span-8 space-y-8">
                  <div className="p-8 md:p-10 rounded-3xl bg-navy-900 border border-firefly/20 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-firefly/5 blur-[80px] rounded-full" />
                    
                    <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-3 relative z-10">
                      <Zap className="w-6 h-6 text-firefly" />
                      {sim.architecture.title}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 relative z-10">
                      {sim.architecture.layers.map((layer, j) => {
                        const Icon = layerIcons[j % layerIcons.length];
                        return (
                          <div key={j} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-firefly/30 transition-colors group">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-firefly/10 transition-colors">
                                <Icon className="w-5 h-5 text-firefly" />
                              </div>
                              <h4 className="font-bold text-white group-hover:text-firefly transition-colors">{layer.title}</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {layer.points.map((p, k) => (
                                <span key={k} className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Flow Simulation */}
                    <div className="mt-12 pt-12 border-t border-white/10 relative z-10">
                      <h4 className="text-sm font-bold text-tosca tracking-widest uppercase mb-8 text-center">
                        {sim.flow.title}
                      </h4>
                      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                        {sim.flow.steps.map((step, j) => (
                          <div key={j} className="flex items-center gap-3 md:gap-4">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: j * 0.1 }}
                              className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-[11px] font-bold text-white whitespace-nowrap"
                            >
                              {step}
                            </motion.div>
                            {j < sim.flow.steps.length - 1 && (
                              <ArrowRight className="w-4 h-4 text-white/20" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
