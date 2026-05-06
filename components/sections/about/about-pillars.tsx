import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { CheckCircle2 } from "lucide-react";

export function AboutPillars() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-slate-50 dark:bg-navy-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.aboutPage.pillars.headline}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
            {t.aboutPage.pillars.subheadline}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {t.aboutPage.pillars.members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              <div className="h-full p-10 rounded-[40px] bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/5 hover:border-firefly/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-firefly/5 flex flex-col">
                {/* Profile Image */}
                <div className="w-32 h-32 rounded-3xl bg-slate-100 dark:bg-white/5 mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={i === 0 ? "/team/david.jpeg" : i === 1 ? "/team/dikdik.jpeg" : "/team/sarah.jpeg"} 
                    alt={member.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-firefly font-medium text-sm tracking-wide uppercase">
                    {member.title}
                  </p>
                </div>

                {/* Divider Gradient */}
                <div className="h-px w-full bg-gradient-to-r from-tosca to-firefly mb-8 opacity-30" />

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  {member.description}
                </p>

                <div className="mt-auto space-y-4">
                  <p className="text-xs font-bold text-navy-900 dark:text-white uppercase tracking-widest opacity-60">
                    {member.focusTitle}
                  </p>
                  <ul className="space-y-3">
                    {member.focusItems.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-firefly shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-8 text-xs italic text-slate-500 dark:text-slate-500 leading-relaxed">
                  {member.closing}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
