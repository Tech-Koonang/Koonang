"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { generatePDF } from "@/lib/pdf-generator";
import { CheckCircle2, ChevronRight, Calendar, Video, MessageSquare, AlertCircle, Download } from "lucide-react";

export default function ResultPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { t } = useLanguage();
  const [inquiry, setInquiry] = useState<any>(null);
  const [aiResult, setAiResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [bookingForm, setBookingForm] = useState({ date: "", platform: "Google Meet", notes: "" });
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Fallback translations in case language provider isn't ready
  const fallbackT = {
    resultPage: {
      title: "Your Architecture Blueprint",
      sections: {
        summary: "Executive Summary",
        architecture: "Architecture Recommendation", 
        automation: "Automation Strategy",
        roadmap: "Implementation Roadmap"
      },
      survey: {
        question: "How accurate is this analysis?",
        submitted: "Thank you for your feedback!",
        options: [
          { value: "very_accurate", label: "Very Accurate" },
          { value: "somewhat_accurate", label: "Somewhat Accurate" },
          { value: "not_accurate", label: "Not Accurate" }
        ]
      },
      booking: {
        title: "Schedule Your Consultation",
        date: "Preferred Date & Time",
        platform: "Meeting Platform",
        notes: "Additional Notes",
        submit: "Schedule Consultation",
        success: "Consultation scheduled successfully!",
        downloadPDF: "Download PDF"
      },
      inquiryInfo: {
        title: "Inquiry Information",
        fullName: "Full Name",
        email: "Email",
        phone: "Phone",
        businessName: "Business Name",
        industry: "Industry",
        website: "Website",
        purposes: "Purposes",
        challenges: "Challenges",
        growthTarget: "Growth Target",
        integrations: "Integrations"
      }
    }
  };

  const safeT = t || fallbackT;

  useEffect(() => {
    async function loadData() {
      if (!id) {
        setError("Invalid result ID");
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        
        const { data: inq, error: inqError } = await supabase
          .from("inquiries")
          .select("*")
          .eq("id", id)
          .single();
          
        if (inqError) {
          console.error("Inquiry fetch error:", inqError);
          setError("Inquiry not found");
          setLoading(false);
          return;
        }
        
        const { data: res, error: resError } = await supabase
          .from("ai_results")
          .select("*")
          .eq("inquiry_id", id)
          .single();
          
        if (resError) {
          console.error("AI result fetch error:", resError);
          setError("Analysis results not found");
          setLoading(false);
          return;
        }
        
        setInquiry(inq);
        setAiResult(res);
      } catch (err) {
        console.error("Load error:", err);
        setError("Failed to load results");
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, [id]);

  const submitFeedback = async (rating: string) => {
    if (feedbackSubmitted || !id) return;
    try {
      await supabase.from("ai_feedback").insert({ inquiry_id: id, accuracy_rating: rating });
      setFeedbackSubmitted(true);
    } catch (err) {
      console.error("Feedback submission error:", err);
    }
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      await generatePDF('pdf-content', `koonang-blueprint-${id}.pdf`);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const submitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !bookingForm.date) return;
    
    try {
      setBookingStatus("submitting");
      await supabase.from("consultation_bookings").insert({
        inquiry_id: id,
        scheduled_at: new Date(bookingForm.date).toISOString(),
        meeting_platform: bookingForm.platform,
        notes: bookingForm.notes
      });
      
      await supabase.from("inquiries").update({ status: "consultation_scheduled" }).eq("id", id);
      setBookingStatus("success");
    } catch (err) {
      console.error("Booking submission error:", err);
      setBookingStatus("idle");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-tosca border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (error || !inquiry || !aiResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-navy-900 text-slate-800 dark:text-white px-6">
        <div className="text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Results Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {error || "The analysis results you're looking for couldn't be found or may have expired."}
          </p>
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 dark:bg-white text-white dark:text-navy-900 rounded-lg hover:opacity-90 transition-opacity"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-900 transition-colors duration-500 overflow-hidden relative pb-32">
      <div className="pt-32 max-w-4xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tosca/10 border border-tosca/20 text-tosca text-sm font-medium mb-6">
            <CheckCircle2 size={16} /> Analysis Complete
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            {safeT.resultPage.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <span className="px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">Complexity: {inquiry.ai_complexity_score}</span>
            <span className="px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">Est: {inquiry.ai_estimation_range}</span>
          </div>
          <button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 dark:bg-white text-white dark:text-navy-900 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Download size={18} />
            {isGeneratingPDF ? 'Generating PDF...' : (safeT.resultPage.booking as any).downloadPDF}
          </button>
        </motion.div>

        {/* PDF Content Wrapper */}
        <div id="pdf-content" className="space-y-8 mb-16">
          {/* Inquiry Information */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-white dark:bg-navy-800 border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-6">{(safeT.resultPage as any).inquiryInfo?.title || 'Inquiry Information'}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-slate-200 dark:border-white/10">
                  <td className="py-3 pr-4 font-medium text-slate-700 dark:text-slate-300 w-1/3">{(safeT.resultPage as any).inquiryInfo?.fullName || 'Full Name'}</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">{inquiry.full_name}</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-white/10">
                  <td className="py-3 pr-4 font-medium text-slate-700 dark:text-slate-300">{(safeT.resultPage as any).inquiryInfo?.email || 'Email'}</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">{inquiry.email}</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-white/10">
                  <td className="py-3 pr-4 font-medium text-slate-700 dark:text-slate-300">{(safeT.resultPage as any).inquiryInfo?.phone || 'Phone'}</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">{inquiry.phone}</td>
                </tr>
                {inquiry.business_name && (
                  <tr className="border-b border-slate-200 dark:border-white/10">
                    <td className="py-3 pr-4 font-medium text-slate-700 dark:text-slate-300">{(safeT.resultPage as any).inquiryInfo?.businessName || 'Business Name'}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-400">{inquiry.business_name}</td>
                  </tr>
                )}
                {inquiry.industry && (
                  <tr className="border-b border-slate-200 dark:border-white/10">
                    <td className="py-3 pr-4 font-medium text-slate-700 dark:text-slate-300">{(safeT.resultPage as any).inquiryInfo?.industry || 'Industry'}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-400">{inquiry.industry}</td>
                  </tr>
                )}
                {inquiry.website && (
                  <tr className="border-b border-slate-200 dark:border-white/10">
                    <td className="py-3 pr-4 font-medium text-slate-700 dark:text-slate-300">{(safeT.resultPage as any).inquiryInfo?.website || 'Website'}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-400">
                      <a href={inquiry.website} target="_blank" rel="noopener noreferrer" className="text-tosca hover:underline">
                        {inquiry.website}
                      </a>
                    </td>
                  </tr>
                )}
                {inquiry.purposes && inquiry.purposes.length > 0 && (
                  <tr className="border-b border-slate-200 dark:border-white/10">
                    <td className="py-3 pr-4 font-medium text-slate-700 dark:text-slate-300">{(safeT.resultPage as any).inquiryInfo?.purposes || 'Purposes'}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-400">{inquiry.purposes.join(', ')}</td>
                  </tr>
                )}
                {inquiry.challenges && (
                  <tr className="border-b border-slate-200 dark:border-white/10">
                    <td className="py-3 pr-4 font-medium text-slate-700 dark:text-slate-300 align-top">{(safeT.resultPage as any).inquiryInfo?.challenges || 'Challenges'}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-400 whitespace-pre-wrap">{inquiry.challenges}</td>
                  </tr>
                )}
                {inquiry.growth_target && (
                  <tr className="border-b border-slate-200 dark:border-white/10">
                    <td className="py-3 pr-4 font-medium text-slate-700 dark:text-slate-300 align-top">{(safeT.resultPage as any).inquiryInfo?.growthTarget || 'Growth Target'}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-400 whitespace-pre-wrap">{inquiry.growth_target}</td>
                  </tr>
                )}
                {inquiry.integrations && inquiry.integrations.length > 0 && (
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700 dark:text-slate-300">{(safeT.resultPage as any).inquiryInfo?.integrations || 'Integrations'}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-400">{inquiry.integrations.join(', ')}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

          {/* Blueprint Content */}
          <div className="bg-white dark:bg-navy-800 p-8 md:p-12 rounded-2xl space-y-8">
            <Section title={safeT.resultPage.sections.summary} content={aiResult.executive_summary} delay={0.1} />
            <Section title={safeT.resultPage.sections.architecture} content={aiResult.architecture_recommendation} delay={0.2} />
            <Section title={safeT.resultPage.sections.automation} content={aiResult.automation_strategy} delay={0.3} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-6">{safeT.resultPage.sections.roadmap}</h2>
            <div className="space-y-6">
              {aiResult.roadmap_phases?.map((phase: any, i: number) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-slate-100 dark:bg-navy-900 flex items-center justify-center text-firefly font-bold border border-slate-200 dark:border-white/5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 dark:text-white">{phase.phase} <span className="text-sm font-normal text-slate-500">({phase.duration})</span></h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          </div>
        </div>

        {/* Mini Survey */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-firefly/5 border border-firefly/20 rounded-2xl p-6 text-center mb-16">
          {feedbackSubmitted ? (
            <p className="text-firefly font-medium">{safeT.resultPage.survey.submitted}</p>
          ) : (
            <>
              <p className="text-navy-900 dark:text-white font-medium mb-4">{safeT.resultPage.survey.question}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {safeT.resultPage.survey.options.map((opt: any) => (
                  <button key={opt.value} onClick={() => submitFeedback(opt.value)} className="px-4 py-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 text-sm hover:border-firefly transition-colors text-slate-700 dark:text-slate-300">
                    {opt.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* Live Consultation Booking */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-white dark:bg-navy-800 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tosca/5 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-3">{safeT.resultPage.booking.title}</h2>
          </div>

          {bookingStatus === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">{safeT.resultPage.booking.success}</p>
            </div>
          ) : (
            <form onSubmit={submitBooking} className="relative z-10 grid gap-6 max-w-lg mx-auto">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"><Calendar size={16} className="inline mr-2" />{safeT.resultPage.booking.date}</label>
                <input required type="datetime-local" className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-tosca" value={bookingForm.date} onChange={e => setBookingForm({...bookingForm, date: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"><Video size={16} className="inline mr-2" />{safeT.resultPage.booking.platform}</label>
                <select className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-tosca" value={bookingForm.platform} onChange={e => setBookingForm({...bookingForm, platform: e.target.value})}>
                  <option>Google Meet</option>
                  <option>Zoom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"><MessageSquare size={16} className="inline mr-2" />{safeT.resultPage.booking.notes}</label>
                <textarea className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-tosca min-h-[100px]" value={bookingForm.notes} onChange={e => setBookingForm({...bookingForm, notes: e.target.value})} />
              </div>
              <button disabled={bookingStatus === "submitting"} type="submit" className="w-full py-4 bg-gradient-to-r from-firefly to-tosca text-navy-900 font-bold rounded-xl hover:shadow-[0_0_20px_rgba(239,217,47,0.3)] transition-all flex items-center justify-center gap-2">
                {bookingStatus === "submitting" ? "Processing..." : safeT.resultPage.booking.submit} <ChevronRight size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}

function Section({ title, content, delay }: { title: string, content: string, delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} className="border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
      <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">{title}</h2>
      <div className="prose dark:prose-invert prose-slate max-w-none text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        {content.split('\n').map((para, i) => (
          <p key={i} className="mb-4 last:mb-0">{para}</p>
        ))}
      </div>
    </motion.div>
  );
}
