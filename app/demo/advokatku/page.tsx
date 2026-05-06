"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Image as ImageIcon, Sparkles, Shield, Bot, Globe, Smartphone, BarChart, Lock, CheckCircle, Zap, MessageCircle, Camera, Users, Search, Database, BookOpen, Settings, ShieldCheck } from "lucide-react";
import Link from "next/link";

const projectBrief = {
  title: "Advokatku",
  version: "Digital Blueprint v1.0 — April 2026",
  client: "Advokatku",
  description: "Arsitektur lengkap platform legal tech berbasis AI — mencakup sitemap, user flow, screen mockup, tech stack, dan API design untuk website & mobile app.",
  platformType: "Web App + Mobile App",
  targetUsers: "Klien, Pengacara, Korporasi",
  integrationChannels: "Web, WhatsApp, IG, FB",
  aiEngine: "RAG + LLM (Indonesia)"
};

const platforms = [
  {
    id: 1,
    title: "Landing Website",
    description: "Marketing site, SEO, onboarding klien & pengacara, konten edukasi hukum",
    tech: "Next.js",
    access: "Public",
    imageUrl: "https://cmdcnlhpphkeskmeyytw.supabase.co/storage/v1/object/public/cdn/kds/koonang/advokatku/Macbook-Air-advokatku-lp.vercel.app.webp",
    demoUrl: "https://advokatku.koonang.site/"
  },
  {
    id: 2,
    title: "Client Web App",
    description: "Portal konsultasi AI, matching pengacara, document analyzer, case tracking",
    tech: "React",
    access: "Auth",
    imageUrl: "https://cmdcnlhpphkeskmeyytw.supabase.co/storage/v1/object/public/cdn/kds/koonang/advokatku/Macbook-Air-client-advokatku.koonang.site.webp",
    demoUrl: "https://client-advokatku.koonang.site/"
  },
  {
    id: 3,
    title: "Lawyer Suite",
    description: "Dashboard pengacara: lead management, case brief AI, auto-drafting, earnings",
    tech: "React",
    access: "Verified",
    imageUrl: "https://cmdcnlhpphkeskmeyytw.supabase.co/storage/v1/object/public/cdn/kds/koonang/advokatku/Macbook-Air-advokatku-lawyer-suite.vercel.app.webp",
    demoUrl: "https://lawyer-advokatku.koonang.site/"
  },
  {
    id: 4,
    title: "Mobile App",
    description: "iOS & Android: konsultasi on-the-go, Emergency Button, notifikasi perkara",
    tech: "React Native",
    access: "Push Notif",
    imageUrl: "https://cmdcnlhpphkeskmeyytw.supabase.co/storage/v1/object/public/cdn/kds/koonang/advokatku/qr-expo.png",
    instruction: "Scan QR code with Expo Go app (iOS/Android)"
  }
];

const channels = [
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Instagram", icon: Camera },
  { name: "Facebook", icon: Users },
  { name: "Web", icon: Globe }
];

const aiFeatures = [
  { name: "RAG", icon: Search },
  { name: "Vector DB", icon: Database },
  { name: "JDIH API", icon: BookOpen }
];

const adminFeatures = [
  { name: "Admin", icon: Settings },
  { name: "Analytics", icon: BarChart },
  { name: "Compliance", icon: ShieldCheck }
];

const demoProjects = [
  {
    id: 1,
    title: "Landing Page",
    description: "Marketing website dengan SEO optimization dan onboarding flow",
    demoUrl: "https://advokatku-demo1.com",
    imageUrl: "/images/advokatku-landing.jpg"
  },
  {
    id: 2,
    title: "Client Dashboard",
    description: "Portal konsultasi AI dan case tracking untuk klien",
    demoUrl: "https://advokatku-demo2.com",
    imageUrl: "/images/advokatku-client.jpg"
  },
  {
    id: 3,
    title: "Lawyer Suite",
    description: "Dashboard pengacara dengan lead management dan AI tools",
    demoUrl: "https://advokatku-demo3.com",
    imageUrl: "/images/advokatku-lawyer.jpg"
  },
  {
    id: 4,
    title: "Mobile App",
    description: "iOS & Android app dengan Emergency Button feature",
    demoUrl: "https://advokatku-demo4.com",
    imageUrl: "/images/advokatku-mobile.jpg"
  }
];

export default function AdvokatkuPage() {
  return (
    <div className="min-h-screen bg-navy-900 relative overflow-hidden">
      {/* Decorative Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tosca/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-firefly/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-navy-800/50 blur-[100px] rounded-full -z-10" />

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <Link href="/demo">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-slate-400 hover:text-tosca transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Demo List</span>
          </motion.button>
        </Link>
      </div>

      {/* Project Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-8 mb-8 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-tosca/10 to-firefly/10 blur-[80px] rounded-full -z-10" />

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6 relative">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-6 h-6 text-firefly" />
                <span className="text-sm font-medium text-firefly tracking-wide uppercase">
                  {projectBrief.version}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {projectBrief.title}
              </h1>
              <p className="text-slate-400">{projectBrief.client}</p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-8 relative">
            {projectBrief.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-tosca" />
                <span className="text-xs font-medium text-slate-400 uppercase">Platform</span>
              </div>
              <p className="text-sm font-semibold text-white">{projectBrief.platformType}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="w-4 h-4 text-tosca" />
                <span className="text-xs font-medium text-slate-400 uppercase">Target</span>
              </div>
              <p className="text-sm font-semibold text-white">{projectBrief.targetUsers}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-tosca" />
                <span className="text-xs font-medium text-slate-400 uppercase">Channels</span>
              </div>
              <p className="text-sm font-semibold text-white">{projectBrief.integrationChannels}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-4 h-4 text-tosca" />
                <span className="text-xs font-medium text-slate-400 uppercase">AI Engine</span>
              </div>
              <p className="text-sm font-semibold text-white">{projectBrief.aiEngine}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Platform Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            01 — Platform Overview
          </h2>
          <p className="text-slate-400 mb-8">
            Arsitektur Ekosistem — 4 platform utama yang saling terintegrasi
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-panel rounded-2xl p-6 hover:border-tosca/50 transition-all duration-300 relative overflow-hidden"
              >
                {platform.imageUrl && (
                  <div className="mb-4 rounded-xl overflow-hidden bg-navy-800/50">
                    <img
                      src={platform.imageUrl}
                      alt={platform.title}
                      className="w-full object-contain"
                    />
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tosca/20 to-firefly/20 flex items-center justify-center text-2xl font-bold text-tosca">
                    {String(platform.id).padStart(2, '0')}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                    {platform.access}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{platform.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-firefly">{platform.tech}</span>
                  {platform.demoUrl ? (
                    <a
                      href={platform.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-tosca to-firefly text-navy-900 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      View Demo <ExternalLink size={14} />
                    </a>
                  ) : platform.instruction && (
                    <span className="text-xs font-medium text-tosca flex items-center gap-1">
                      {platform.instruction}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Omnichannel Intake */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-2">Omnichannel Intake</h3>
          <p className="text-slate-400 mb-6">
            Klien bisa mulai konsultasi dari mana saja: WhatsApp Business API, Instagram DM, Facebook Messenger, atau langsung di website/app. Semua terhubung ke dashboard terpusat pengacara.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {channels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <IconComponent className="w-6 h-6 text-tosca" />
                  <span className="text-sm font-medium text-white">{channel.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* AI Legal Engine */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-panel rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Bot className="w-6 h-6 text-tosca" />
            <h3 className="text-xl font-bold text-white">AI Legal Engine</h3>
          </div>
          <p className="text-slate-400 mb-6">
            Core RAG system dengan Legal Knowledge Graph 5 lapisan. Sinkronisasi otomatis dengan JDIH Nasional. Confidence scoring setiap jawaban AI dengan referensi pasal yang dikutip.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {aiFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <IconComponent className="w-6 h-6 text-tosca" />
                  <span className="text-sm font-medium text-white">{feature.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Admin & Analytics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-panel rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="w-6 h-6 text-firefly" />
            <h3 className="text-xl font-bold text-white">Admin & Analytics</h3>
          </div>
          <p className="text-slate-400 mb-6">
            Super admin panel untuk moderasi pengacara, monitoring kualitas AI, revenue analytics, compliance dashboard UU PDP, dan A/B testing fitur baru.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {adminFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <IconComponent className="w-6 h-6 text-tosca" />
                  <span className="text-sm font-medium text-white">{feature.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Security & Compliance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass-panel rounded-2xl p-8 border-tosca/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-tosca" />
            <h3 className="text-xl font-bold text-white">Prinsip Keamanan & Kepatuhan</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Semua data klien dienkripsi end-to-end. Server dan database berlokasi di Indonesia (compliance UU PDP No. 27/2022). Akses data menggunakan Zero Trust Architecture dengan audit log lengkap. AI hanya berfungsi sebagai asisten — keputusan hukum final tetap otoritas pengacara berlisensi.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
