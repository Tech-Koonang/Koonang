import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, X, Loader2, Save } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "../language-provider";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export function WizardModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  
  // Form State
  const [draftId, setDraftId] = useState("");
  const [dbId, setDbId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    industry: "",
    website: "",
    purposes: [] as string[],
    challenges: "",
    growthTarget: "",
    integrations: [] as string[]
  });

  // Init Draft ID from local storage
  useEffect(() => {
    if (isOpen) {
      const savedDraftId = localStorage.getItem("koonang_wizard_draft_id");
      if (savedDraftId) {
        setDraftId(savedDraftId);
        // We could load existing draft data here
      } else {
        const newDraftId = uuidv4();
        setDraftId(newDraftId);
        localStorage.setItem("koonang_wizard_draft_id", newDraftId);
      }
    }
  }, [isOpen]);

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: "purposes" | "integrations", value: string) => {
    setFormData(prev => {
      const current = prev[field];
      const updated = current.includes(value) 
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const saveToDb = useCallback(async () => {
    // Only save if step 1 is minimally filled
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setSaveStatus("saving");
    try {
      const payload = {
        draft_id: draftId,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        business_name: formData.businessName,
        industry: formData.industry,
        website: formData.website,
        purposes: formData.purposes,
        challenges: formData.challenges,
        growth_target: formData.growthTarget,
        integrations: formData.integrations,
        language: language,
        status: "draft"
      };

      if (dbId) {
        await supabase.from("inquiries").update(payload).eq("id", dbId);
      } else {
        const { data, error } = await supabase.from("inquiries").upsert([payload], { onConflict: "draft_id" }).select("id").single();
        if (error) throw error;
        if (data) setDbId(data.id);
      }
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
    } catch (error) {
      console.error("Save error:", error);
      setSaveStatus("idle");
    }
  }, [formData, draftId, dbId, language]);

  // Auto-save when moving steps
  const handleNext = async () => {
    setErrorMsg("");
    
    // Validation for Step 1
    if (currentStep === 0) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        setErrorMsg("Harap isi semua field identitas.");
        return;
      }
      await saveToDb();
    }

    if (currentStep < 6) {
      if (currentStep > 0) saveToDb();
      setCurrentStep(currentStep + 1);
    } else {
      submitToAi();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const submitToAi = async () => {
    setIsAnalyzing(true);
    try {
      // 1. Final save & update status to complete
      const { data, error } = await supabase.from("inquiries").upsert([{
        draft_id: draftId,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        business_name: formData.businessName,
        industry: formData.industry,
        website: formData.website,
        purposes: formData.purposes,
        challenges: formData.challenges,
        growth_target: formData.growthTarget,
        integrations: formData.integrations,
        language: language,
        status: "completed"
      }], { onConflict: "draft_id" }).select("id").single();

      if (error) throw error;
      const inquiryId = data.id;

      // 2. Trigger Edge Function
      const res = await supabase.functions.invoke('ai-analysis', {
        body: { inquiry_id: inquiryId }
      });

      if (res.error) throw res.error;

      // 3. Clear local storage & redirect
      localStorage.removeItem("koonang_wizard_draft_id");
      onClose();
      navigate(`/result/${inquiryId}`);

    } catch (error) {
      console.error("AI Error:", error);
      setErrorMsg(t.wizard.ui.error);
      setIsAnalyzing(false);
    }
  };

  const renderStep = () => {
    const fields = t.wizard.fields;
    const placeholders = t.wizard.placeholders;
    const options = t.wizard.options;
    
    const inputClass = "w-full bg-slate-50 dark:bg-navy-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-tosca focus:ring-1 focus:ring-tosca transition-colors placeholder:text-slate-400";
    const labelClass = "text-sm font-medium text-slate-700 dark:text-slate-300 block mb-2";

    switch (currentStep) {
      case 0: // Identity
        return (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>{fields.fullName} *</label>
              <input type="text" className={inputClass} placeholder={placeholders.fullName} value={formData.fullName} onChange={e => updateField("fullName", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>{fields.email} *</label>
              <input type="email" className={inputClass} placeholder={placeholders.email} value={formData.email} onChange={e => updateField("email", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>{fields.phone} *</label>
              <input type="tel" className={inputClass} placeholder={placeholders.phone} value={formData.phone} onChange={e => updateField("phone", e.target.value)} />
            </div>
          </div>
        );
      case 1: // Business Info
        return (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>{fields.businessName}</label>
              <input type="text" className={inputClass} placeholder={placeholders.businessName} value={formData.businessName} onChange={e => updateField("businessName", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>{fields.industry}</label>
              <input type="text" className={inputClass} placeholder={placeholders.industry} value={formData.industry} onChange={e => updateField("industry", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>{fields.website}</label>
              <input type="url" className={inputClass} placeholder={placeholders.website} value={formData.website} onChange={e => updateField("website", e.target.value)} />
            </div>
          </div>
        );
      case 2: // Purposes
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {options.purposes.map((p: any) => (
              <label key={p.value} onClick={(e) => { e.preventDefault(); toggleArrayItem("purposes", p.value); }} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.purposes.includes(p.value) ? 'border-tosca bg-tosca/5 dark:bg-tosca/10' : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'}`}>
                <div className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center shrink-0 ${formData.purposes.includes(p.value) ? 'border-tosca bg-tosca text-navy-900' : 'border-slate-300 dark:border-slate-600'}`}>
                  {formData.purposes.includes(p.value) && <Check size={14} strokeWidth={3} />}
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{p.label}</span>
              </label>
            ))}
          </div>
        );
      case 3: // Challenges
        return (
          <div>
            <label className={labelClass}>{fields.challenges}</label>
            <textarea className={`${inputClass} min-h-[150px]`} placeholder={placeholders.challenges} value={formData.challenges} onChange={e => updateField("challenges", e.target.value)} />
          </div>
        );
      case 4: // Target
        return (
          <div>
            <label className={labelClass}>{fields.growthTarget}</label>
            <select className={inputClass} value={formData.growthTarget} onChange={e => updateField("growthTarget", e.target.value)}>
              <option value="">-- Select --</option>
              {options.growthTargets.map((t: string) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        );
      case 5: // Integrations
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {options.integrations.map((i: any) => (
              <label key={i.value} onClick={(e) => { e.preventDefault(); toggleArrayItem("integrations", i.value); }} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.integrations.includes(i.value) ? 'border-firefly bg-firefly/5 dark:bg-firefly/10' : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'}`}>
                <div className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center shrink-0 ${formData.integrations.includes(i.value) ? 'border-firefly bg-firefly text-navy-900' : 'border-slate-300 dark:border-slate-600'}`}>
                  {formData.integrations.includes(i.value) && <Check size={14} strokeWidth={3} />}
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{i.label}</span>
              </label>
            ))}
          </div>
        );
      case 6: // Review
        return (
          <div className="space-y-6 text-slate-700 dark:text-slate-300 text-sm">
            <div className="p-4 bg-slate-50 dark:bg-navy-900/50 rounded-xl border border-slate-200 dark:border-white/10">
              <h4 className="font-bold text-navy-900 dark:text-white mb-2">{t.wizard.steps.identity}</h4>
              <p>{formData.fullName} • {formData.email} • {formData.phone}</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-navy-900/50 rounded-xl border border-slate-200 dark:border-white/10">
              <h4 className="font-bold text-navy-900 dark:text-white mb-2">{t.wizard.steps.business}</h4>
              <p>{formData.businessName || '-'} • {formData.industry || '-'} • {formData.website || '-'}</p>
            </div>
            <p className="text-xs text-slate-500 italic mt-4 text-center">
              Klik '{t.wizard.ui.submit}' untuk memproses data ini ke AI Strategy Engine.
            </p>
          </div>
        );
    }
  };

  const stepTitles = [
    t.wizard.steps.identity,
    t.wizard.steps.business,
    t.wizard.steps.purposes,
    t.wizard.steps.challenges,
    t.wizard.steps.targets,
    t.wizard.steps.integrations,
    t.wizard.steps.review
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={!isAnalyzing ? onClose : undefined}
            className="absolute inset-0 bg-slate-900/40 dark:bg-navy-900/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header & Close */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-firefly to-tosca flex items-center justify-center">
                  <span className="text-navy-900 font-bold text-xs">{currentStep + 1}/7</span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                  {!isAnalyzing ? stepTitles[currentStep] : "AI Engine"}
                </h3>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Auto Save Indicator */}
                {!isAnalyzing && saveStatus !== "idle" && (
                  <span className="text-xs flex items-center gap-1 text-slate-500">
                    {saveStatus === "saving" ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />}
                    {saveStatus === "saving" ? t.wizard.ui.saving : t.wizard.ui.saved}
                  </span>
                )}
                <button onClick={onClose} disabled={isAnalyzing} className="text-slate-400 hover:text-slate-700 dark:hover:text-white disabled:opacity-50 transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            {!isAnalyzing && (
              <div className="w-full h-1 bg-slate-100 dark:bg-navy-900 shrink-0">
                <motion.div
                  className="h-full bg-gradient-to-r from-firefly to-tosca"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentStep + 1) / 7) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            {/* Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
              {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-8">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div className="w-4 h-4 bg-tosca rounded-full shadow-[0_0_30px_rgba(0,231,254,0.8)]" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
                    </div>
                    {[...Array(3)].map((_, i) => (
                      <motion.div key={i} className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-firefly shadow-[0_0_10px_rgba(239,217,47,0.8)]" style={{ top: `${i * 15}%` }} />
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">{t.wizard.ui.generating}</h3>
                    <p className="text-slate-500 dark:text-slate-400">Processing strategic blueprint based on your inputs...</p>
                  </div>
                </div>
              ) : (
                <div className="min-h-[250px]">
                  {errorMsg && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm border border-red-200 dark:border-red-900/50">
                      {errorMsg}
                    </div>
                  )}
                  {renderStep()}
                </div>
              )}
            </div>

            {/* Footer / Actions */}
            {!isAnalyzing && (
              <div className="p-6 border-t border-slate-200 dark:border-white/10 shrink-0 flex items-center justify-between bg-slate-50 dark:bg-navy-900/30 rounded-b-2xl">
                <button
                  onClick={handlePrev}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/5'}`}
                >
                  <ChevronLeft size={16} /> {t.wizard.ui.prev}
                </button>
                
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-gradient-to-r from-firefly to-tosca text-navy-900 text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(239,217,47,0.3)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  {currentStep === 6 ? t.wizard.ui.submit : t.wizard.ui.next}
                  {currentStep < 6 && <ChevronRight size={16} />}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
