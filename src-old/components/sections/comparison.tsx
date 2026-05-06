import { Check, X } from "lucide-react";
import { useLanguage } from "../language-provider";

export function Comparison() {
  const { t } = useLanguage();

  return (
    <section id="case-studies" className="py-24 bg-slate-50 dark:bg-navy-900 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Traditional Agency */}
          <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 opacity-80 hover:opacity-100 transition-opacity shadow-sm">
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-6">{t.comparison.traditional.title}</h3>
            <ul className="space-y-4">
              {t.comparison.traditional.points.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                  <X className="w-5 h-5 text-red-500 dark:text-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* koonang.io */}
          <div className="p-8 rounded-2xl bg-navy-900 dark:bg-gradient-to-br dark:from-navy-800 dark:to-navy-900 border border-tosca/30 relative overflow-hidden shadow-[0_0_40px_rgba(0,231,254,0.1)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tosca/10 blur-[50px] rounded-full" />
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              koonang.io
              <span className="px-2 py-0.5 rounded text-[10px] bg-tosca/20 text-tosca border border-tosca/20 uppercase tracking-wider">
                AI-Powered
              </span>
            </h3>
            
            <ul className="space-y-4">
              {t.comparison.koonang.points.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white text-sm">
                  <Check className="w-5 h-5 text-tosca shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
