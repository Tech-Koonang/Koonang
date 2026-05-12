"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { ParticleBackground } from "@/components/layout/particle-background";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";

export default function PricingPage() {
  const { t, language } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(false);

  const prices = {
    foundation: { setup: 25000, monthly: 2500, annual: 2125 },
    elevation: { setup: 60000, monthly: 5000, annual: 4250 },
  };
  const formatPrice = (price: number) => price.toLocaleString("id-ID");

  const plans = [
    {
      id: "foundation",
      name: language === "id" ? "Foundation" : "Foundation",
      tagline: language === "id" ? "Fondasi digital yang kokoh" : "Solid digital foundation",
      price: prices.foundation,
      features: [
        { included: true, text: language === "id" ? "10 Halaman Web" : "10 Web Pages" },
        { included: true, text: language === "id" ? "Free Domain + 2 Bahasa" : "Free Domain + 2 Languages" },
        { included: true, text: language === "id" ? "Hosting Unlimited Small" : "Small Unlimited Hosting" },
        { included: true, text: language === "id" ? "10 Akun Email" : "10 Email Accounts" },
        { included: true, text: language === "id" ? "SSL Gratis" : "Free SSL" },
        { included: true, text: language === "id" ? "Full SEO 10 Halaman" : "Full SEO 10 Pages" },
        { included: true, text: language === "id" ? "Reporting & Maintenance" : "Reporting & Maintenance" },
        { included: true, text: language === "id" ? "API Access" : "API Access" },
      ],
      featured: false,
      ctaLabel: language === "id" ? "Mulai Sekarang" : "Get Started",
    },
    {
      id: "elevation",
      name: language === "id" ? "Elevation" : "Elevation",
      tagline: language === "id" ? "Tingkatkan performa brand Anda" : "Elevate your brand performance",
      price: prices.elevation,
      features: [
        { included: true, text: language === "id" ? "20 Halaman Web" : "20 Web Pages" },
        { included: true, text: language === "id" ? "Free Domain + 5 Bahasa" : "Free Domain + 5 Languages" },
        { included: true, text: language === "id" ? "Hosting Unlimited Medium" : "Medium Unlimited Hosting" },
        { included: true, text: language === "id" ? "Unlimited Email" : "Unlimited Email" },
        { included: true, text: language === "id" ? "SSL Gratis" : "Free SSL" },
        { included: true, text: language === "id" ? "Full SEO 20 Halaman" : "Full SEO 20 Pages" },
        { included: true, text: language === "id" ? "Reporting & Maintenance" : "Reporting & Maintenance" },
        { included: true, text: language === "id" ? "API + CRM + Payment Gateway" : "API + CRM + Payment Gateway" },
        { included: true, text: language === "id" ? "Security" : "Security" },
      ],
      featured: true,
      ctaLabel: language === "id" ? "Mulai Sekarang" : "Get Started",
    },
    {
      id: "enterprise",
      name: language === "id" ? "Enterprise" : "Enterprise",
      tagline: language === "id" ? "Solusi khusus untuk kebutuhan skala besar" : "Custom solution for large-scale needs",
      price: null,
      features: [
        { included: true, text: language === "id" ? "Scope dan fitur disesuaikan" : "Custom scope and features" },
        { included: true, text: language === "id" ? "Arsitektur sistem enterprise" : "Enterprise system architecture" },
        { included: true, text: language === "id" ? "Integrasi khusus bisnis" : "Custom business integrations" },
        { included: true, text: language === "id" ? "Security & compliance review" : "Security & compliance review" },
        { included: true, text: language === "id" ? "Prioritas support" : "Priority support" },
      ],
      featured: false,
      ctaLabel: language === "id" ? "Contact Sales" : "Contact Sales",
    },
  ];

  const subscriptions = [
    {
      name: language === "id" ? "Prime Access" : "Prime Access",
      duration: language === "id" ? "3 Bulan" : "3 Months",
      description: language === "id" 
        ? "Ideal untuk bisnis yang ingin mulai dengan fondasi digital terstruktur, tanpa komitmen jangka panjang."
        : "Ideal for businesses starting with a structured digital foundation, without long-term commitment.",
      perk: language === "id" ? "Fleksibel & bebas risiko" : "Flexible & risk-free",
      color: "teal",
    },
    {
      name: language === "id" ? "Prime Advantage" : "Prime Advantage",
      duration: language === "id" ? "6 Bulan" : "6 Months",
      description: language === "id"
        ? "Lebih dari sekadar website aktif — dapatkan dukungan operasional konsisten dan penguatan brand presence Anda."
        : "More than just an active website — get consistent operational support and strengthen your brand presence.",
      perk: language === "id" ? "Performa & konsistensi optimal" : "Optimal performance & consistency",
      color: "green",
    },
    {
      name: language === "id" ? "Prime Legacy" : "Prime Legacy",
      duration: language === "id" ? "12 Bulan" : "12 Months",
      description: language === "id"
        ? "Komitmen satu tahun untuk bisnis yang serius membangun kehadiran digital yang kuat dan berkelanjutan."
        : "One-year commitment for businesses serious about building a strong and sustainable digital presence.",
      perk: language === "id" ? "Hemat maksimal · Prioritas support" : "Maximum savings · Priority support",
      color: "gold",
    },
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white relative">
      <ParticleBackground isRelative className="opacity-40" />
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-green-500/5" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[400px] bg-radial-gradient from-teal-500/12 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 mb-8"
            >
              <span className="text-xs font-medium text-teal-400 tracking-wider uppercase">
                Koonang · {language === "id" ? "Investasi Digital" : "Digital Investment"}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            >
              {language === "id" ? "Pilih Paket" : "Choose Your"} <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent inline-block"
              >
                {language === "id" ? "Pertumbuhan Digital" : "Digital Growth"}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              {language === "id" 
                ? "Solusi website profesional berbasis AI — mulai dari fondasi hingga ekosistem digital penuh. Upgrade kapan saja, sesuai kebutuhan bisnis Anda."
                : "AI-powered professional website solutions — from foundation to complete digital ecosystem. Upgrade anytime according to your business needs."
              }
            </motion.p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: !isAnnual ? 1 : 0.5 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-medium transition-colors text-white"
            >
              {language === "id" ? "Bulanan" : "Monthly"}
            </motion.span>
            
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${isAnnual ? 'bg-teal-600' : 'bg-slate-600'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: isAnnual ? 1 : 0.5 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-medium transition-colors text-white"
            >
              {language === "id" ? "Tahunan" : "Annual"}
            </motion.span>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isAnnual ? 1 : 0, scale: isAnnual ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
              className="px-2 py-1 bg-green-500 text-navy-900 text-xs font-bold rounded-full"
            >
              {language === "id" ? "Hemat 15%" : "Save 15%"}
            </motion.div>
          </motion.div>

          {/* Pricing Plans */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">
                {language === "id" ? "— Paket Layanan —" : "— Service Plans —"}
              </span>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.4 + index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative p-8 rounded-2xl border transition-all cursor-pointer ${
                    plan.featured
                      ? 'border-teal-500 bg-gradient-to-br from-navy-800/50 to-teal-900/20'
                      : 'border-slate-700 bg-navy-800/30 hover:border-teal-500/50'
                  }`}
                >
                  {plan.featured && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 + index * 0.15 }}
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-teal-500 to-green-500 text-navy-900 text-xs font-bold rounded-full"
                    >
                      ⭐ {language === "id" ? "Best Seller" : "Best Seller"}
                    </motion.div>
                  )}
                  
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.15 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {plan.name}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2.0 + index * 0.15 }}
                    className="text-sm text-slate-400 mb-6"
                  >
                    {plan.tagline}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.2 + index * 0.15 }}
                    className="mb-6"
                  >
                    {plan.price ? (
                      <>
                        <span className="text-3xl font-bold text-teal-400">
                          IDR {formatPrice(isAnnual ? plan.price.annual : plan.price.monthly)}K
                        </span>
                        <span className="text-sm text-slate-400 ml-2">
                          /{language === "id" ? "bulan" : "month"}
                        </span>
                        <p className="mt-2 text-xs text-slate-400">
                          {language === "id" ? "Setup Fee" : "Setup Fee"}: IDR {formatPrice(plan.price.setup)}K
                        </p>
                      </>
                    ) : (
                      <>
                        <span className="text-3xl font-bold text-teal-400">
                          Ask Our Team
                        </span>
                        <p className="mt-2 text-xs text-slate-400">
                          {language === "id" ? "Diskusikan kebutuhan enterprise Anda" : "Discuss your enterprise needs"}
                        </p>
                      </>
                    )}
                  </motion.div>
                  
                  <div className="h-px bg-slate-700 mb-6" />
                  
                  <motion.ul 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2.4 + index * 0.15 }}
                    className="space-y-3 mb-8"
                  >
                    {plan.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 2.6 + index * 0.15 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 2.6 + index * 0.15 + idx * 0.05 }}
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feature.included ? 'bg-teal-500/20' : 'bg-slate-700'
                          }`}
                        >
                          {feature.included ? (
                            <Check className="w-2.5 h-2.5 text-teal-400" />
                          ) : (
                            <X className="w-2.5 h-2.5 text-slate-500" />
                          )}
                        </motion.div>
                        <span className={`text-sm ${feature.included ? 'text-white' : 'text-slate-500'}`}>
                          {feature.text}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.0 + index * 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-xl font-medium transition-all ${
                      plan.featured
                        ? 'bg-gradient-to-r from-teal-500 to-green-500 text-navy-900 hover:shadow-lg hover:shadow-teal-500/25'
                        : 'border border-teal-500/50 text-teal-400 hover:bg-teal-500/10'
                    }`}
                  >
                    {plan.ctaLabel} ↗
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Subscription Tiers */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="mb-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.7 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">
                {language === "id" ? "— Pilih Durasi Berlangganan —" : "— Choose Subscription Duration —"}
              </span>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subscriptions.map((sub, index) => (
                <motion.div
                  key={sub.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 3.9 + index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className={`p-6 rounded-xl border transition-all cursor-pointer ${
                    sub.color === 'gold' 
                      ? 'border-yellow-500/30 bg-gradient-to-br from-navy-800/30 to-yellow-900/10 hover:border-yellow-500/50'
                      : 'border-slate-700 bg-navy-800/20 hover:border-teal-500/30'
                  }`}
                >
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 4.1 + index * 0.15 }}
                    className="flex items-center justify-between mb-4"
                  >
                    <h4 className="text-lg font-bold text-white">{sub.name}</h4>
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 4.3 + index * 0.15 }}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        sub.color === 'teal' ? 'bg-teal-500/20 text-teal-400' :
                        sub.color === 'green' ? 'bg-green-500/20 text-green-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {sub.duration}
                    </motion.span>
                  </motion.div>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 4.5 + index * 0.15 }}
                    className="text-sm text-slate-400 mb-4 leading-relaxed"
                  >
                    {sub.description}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 4.7 + index * 0.15 }}
                    className={`flex items-center gap-2 text-sm font-medium ${
                      sub.color === 'gold' ? 'text-yellow-400' : 'text-teal-400'
                    }`}
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 4.7 + index * 0.15 }}
                      className={`w-1.5 h-1.5 rounded-full ${
                        sub.color === 'gold' ? 'bg-yellow-400' : 'bg-teal-400'
                      }`} 
                    />
                    {sub.perk}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5.0 }}
            className="p-8 md:p-12 rounded-2xl border border-teal-500/30 bg-gradient-to-br from-navy-800/50 to-teal-900/20 text-center"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 5.2 }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              {language === "id" ? "Tidak yakin harus mulai dari mana?" : "Not sure where to start?"}
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 5.4 }}
              className="text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              {language === "id"
                ? "Tim Koonang siap membantu Anda menemukan paket yang paling sesuai dengan kebutuhan dan anggaran bisnis Anda."
                : "The Koonang team is ready to help you find the package that best suits your business needs and budget."
              }
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 5.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-navy-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all"
              >
                {language === "id" ? "Konsultasi Gratis" : "Free Consultation"} ↗
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
              >
                {language === "id" ? "Bandingkan Paket" : "Compare Plans"}
              </motion.button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 5.8 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-slate-400"
            >
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 6.0 }}
                className="flex items-center gap-2"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 6.0 }}
                  className="w-1.5 h-1.5 bg-teal-400 rounded-full" 
                />
                {language === "id" ? "Setup Cepat" : "Quick Setup"}
              </motion.div>
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 6.1 }}
                className="flex items-center gap-2"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 6.1 }}
                  className="w-1.5 h-1.5 bg-teal-400 rounded-full" 
                />
                {language === "id" ? "Tanpa Biaya Tersembunyi" : "No Hidden Fees"}
              </motion.div>
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 6.2 }}
                className="flex items-center gap-2"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 6.2 }}
                  className="w-1.5 h-1.5 bg-teal-400 rounded-full" 
                />
                {language === "id" ? "Support Bahasa Indonesia" : "Indonesian Support"}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
