"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { ArrowRight, Hexagon, Code2, LineChart, Network, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function KarirPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-900 transition-colors duration-500 overflow-hidden relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 flex flex-col items-center text-center px-6 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-transparent to-transparent opacity-80 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Constellation visual abstract */}
          <div className="flex justify-center items-center gap-6 mb-10 opacity-70">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-tosca/50" />
            <div className="relative">
              <Hexagon className="w-8 h-8 text-firefly animate-pulse" />
              <div className="absolute inset-0 bg-firefly/20 blur-xl rounded-full" />
            </div>
            <div className="relative">
              <Code2 className="w-12 h-12 text-white" />
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
            </div>
            <div className="relative">
              <LineChart className="w-8 h-8 text-tosca animate-pulse" />
              <div className="absolute inset-0 bg-tosca/20 blur-xl rounded-full" />
            </div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-firefly/50" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white mb-6 tracking-tight leading-tight">
            {t.careersPage.hero.headline}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
            {t.careersPage.hero.subheadline}
          </p>
          <a
            href="#roles"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-navy-900 font-bold text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95 group relative"
          >
            {t.careersPage.hero.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-white blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
          </a>
        </motion.div>
      </section>

      {/* Section - Cara Kami Bekerja */}
      <section className="py-24 relative z-10 border-y border-slate-200/50 dark:border-white/5 bg-white/50 dark:bg-navy-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
              {t.careersPage.principles.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.careersPage.principles.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {t.careersPage.principles.items.map((item, i) => {
              const icons = [Network, Code2, LineChart, Hexagon];
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:border-firefly/50 group-hover:shadow-[0_0_20px_rgba(239,217,47,0.2)] transition-all">
                    <Icon className="w-6 h-6 text-slate-400 dark:text-slate-500 group-hover:text-firefly transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white">
                    {item}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section - Profil yang Kami Hargai */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
              {t.careersPage.profile.title}
            </h2>
          </div>

          <div className="bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-xl dark:shadow-[0_0_40px_rgba(0,0,0,0.3)]">
            <ul className="space-y-4 mb-10">
              {t.careersPage.profile.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-tosca shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700 dark:text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-slate-200 dark:border-white/10 text-center">
              <p className="text-navy-900 dark:text-white font-medium text-lg italic">
                "{t.careersPage.profile.closing}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Posisi yang Dibuka & Proses Seleksi */}
      <section id="roles" className="py-24 relative z-10 bg-slate-100/50 dark:bg-navy-900/50 border-y border-slate-200/50 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Roles */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-8">
              {t.careersPage.roles.title}
            </h2>
            <div className="space-y-4 mb-8">
              {t.careersPage.roles.items.map((role, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-tosca/40 transition-colors group">
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white group-hover:text-tosca transition-colors">
                    {role.title}
                  </h3>
                  {role.desc && (
                    <p className="text-sm text-slate-500 mt-1">{role.desc}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-firefly/10 border border-firefly/20">
              <p className="text-sm text-navy-900 dark:text-slate-300 leading-relaxed">
                {t.careersPage.roles.note}
              </p>
            </div>
          </div>

          {/* Selection Process */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-8">
              {t.careersPage.selection.title}
            </h2>
            <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-4 space-y-8 mb-10">
              {t.careersPage.selection.steps.map((step, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-200 dark:bg-navy-800 border-2 border-white dark:border-navy-900 shadow-[0_0_0_2px_rgba(203,213,225,1)] dark:shadow-[0_0_0_2px_rgba(255,255,255,0.1)]" />
                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 italic">
              {t.careersPage.selection.note}
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white dark:bg-navy-800 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tosca/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-firefly/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 mb-10">
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-3">
                {t.careersPage.form.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                {t.careersPage.form.desc}
              </p>
            </div>

            <form className="relative z-10 grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label={t.careersPage.form.fields.name} type="text" />
                <FormField label={t.careersPage.form.fields.email} type="email" />
              </div>
              <FormField label={t.careersPage.form.fields.link} type="text" />
              <FormField label={t.careersPage.form.fields.expertise} type="text" />
              <FormField label={t.careersPage.form.fields.experience} type="textarea" />
              <FormField label={t.careersPage.form.fields.motivation} type="textarea" />

              <div className="mt-4">
                <button
                  type="button"
                  className="w-full md:w-auto px-8 py-4 rounded-xl bg-navy-900 dark:bg-white text-white dark:text-navy-900 font-bold hover:shadow-[0_0_30px_rgba(239,217,47,0.3)] hover:-translate-y-1 transition-all"
                >
                  {t.careersPage.form.submit}
                </button>
                <p className="text-xs text-slate-500 mt-4 text-center md:text-left">
                  {t.careersPage.form.note}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 relative z-10 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
            {t.careersPage.closing.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10">
            {t.careersPage.closing.desc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#roles"
              className="px-8 py-3 rounded-full bg-firefly text-navy-900 font-bold hover:shadow-[0_0_20px_rgba(239,217,47,0.4)] transition-all"
            >
              {t.careersPage.closing.ctaPrimary}
            </a>
            <Link
              href="/"
              className="px-8 py-3 rounded-full border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              {t.careersPage.closing.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FormField({
  label,
  type,
}: {
  label: string;
  type: "text" | "email" | "textarea";
}) {
  const common =
    "w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-navy-900/50 px-4 py-3 text-sm text-navy-900 dark:text-white focus:outline-none focus:border-tosca focus:ring-1 focus:ring-tosca transition-colors";

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </span>
      {type === "textarea" ? (
        <textarea className={common} rows={4} />
      ) : (
        <input className={common} type={type} />
      )}
    </label>
  );
}
