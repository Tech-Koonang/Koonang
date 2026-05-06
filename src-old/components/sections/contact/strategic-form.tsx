import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function StrategicForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <section className="py-32 bg-slate-50 dark:bg-navy-800/50 transition-colors duration-500">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 rounded-3xl bg-white dark:bg-navy-900 border border-firefly/30 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-firefly/5 animate-pulse" />
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-firefly/20 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-firefly" />
              </div>
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-6">
                {t.contactPage.form.success.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {t.contactPage.form.success.message}
              </p>
              
              {/* Constellation Node Forming Animation */}
              <div className="relative h-32 w-full flex items-center justify-center">
                <svg className="w-full h-full">
                  <motion.circle
                    cx="50%" cy="50%" r="4" className="fill-firefly"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.path
                    d="M 100,60 Q 150,20 200,60 T 300,60"
                    className="stroke-firefly/30 fill-none"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-slate-50 dark:bg-navy-800/50 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {t.contactPage.form.headline}
          </h2>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FormField label={t.contactPage.form.fields.name} type="text" required />
            <FormField label={t.contactPage.form.fields.email} type="email" required />
            <FormField label={t.contactPage.form.fields.whatsapp} type="tel" required />
            <FormField label={t.contactPage.form.fields.business} type="text" required />
            <FormField label={t.contactPage.form.fields.industry} type="text" required />
            <FormField label={t.contactPage.form.fields.goal} type="text" required />
          </div>
          
          <div className="space-y-8">
            <FormTextArea label={t.contactPage.form.fields.challenge} required />
            <FormTextArea label={t.contactPage.form.fields.target} required />
          </div>

          <div className="pt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "submitting"}
              className="w-full py-5 rounded-2xl bg-firefly text-navy-900 font-bold text-lg flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_40px_rgba(239,217,47,0.3)] disabled:opacity-70"
            >
              {status === "submitting" ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  {t.contactPage.form.submit}
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
            <p className="text-center text-slate-500 dark:text-slate-400 text-xs mt-6 italic">
              {t.contactPage.form.note}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, type, required }: { label: string; type: string; required?: boolean }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative group">
      <label 
        className={cn(
          "absolute left-4 transition-all pointer-events-none",
          focused || value 
            ? "-top-2.5 text-xs font-bold text-firefly bg-white dark:bg-navy-900 px-2 rounded" 
            : "top-4 text-slate-500 dark:text-slate-400"
        )}
      >
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 text-navy-900 dark:text-white focus:outline-none focus:border-firefly focus:ring-1 focus:ring-tosca/30 transition-all"
      />
    </div>
  );
}

function FormTextArea({ label, required }: { label: string; required?: boolean }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative group">
      <label 
        className={cn(
          "absolute left-4 transition-all pointer-events-none",
          focused || value 
            ? "-top-2.5 text-xs font-bold text-firefly bg-white dark:bg-navy-900 px-2 rounded" 
            : "top-4 text-slate-500 dark:text-slate-400"
        )}
      >
        {label}
      </label>
      <textarea
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        className="w-full px-4 py-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 text-navy-900 dark:text-white focus:outline-none focus:border-firefly focus:ring-1 focus:ring-tosca/30 transition-all resize-none"
      />
    </div>
  );
}
