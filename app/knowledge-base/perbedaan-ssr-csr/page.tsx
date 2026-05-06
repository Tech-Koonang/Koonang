"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, Tag, Server, Monitor, Zap, Shield, Globe } from "lucide-react";
import Link from "next/link";

export default function PerbedaanSSRCSRPage() {
  return (
    <div className="min-h-screen bg-navy-900 relative overflow-hidden">
      {/* Decorative Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tosca/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-firefly/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-navy-800/50 blur-[100px] rounded-full -z-10" />

      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <Link href="/knowledge-base">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-slate-400 hover:text-tosca transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Knowledge Base</span>
          </motion.button>
        </Link>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-firefly" />
            <span className="text-sm font-medium text-firefly tracking-wide uppercase">
              Knowledge Base
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Perbedaan SSR & CSR
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
              <Tag className="w-3 h-3" />
              Frontend
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
            <span className="text-sm">April 2026</span>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel rounded-2xl p-8 mb-8"
        >
          <p className="text-slate-300 leading-relaxed mb-6">
            Dalam pengembangan web modern, memahami perbedaan antara <strong className="text-tosca">Server-Side Rendering (SSR)</strong> dan <strong className="text-firefly">Client-Side Rendering (CSR)</strong> sangat penting untuk memilih pendekatan yang tepat untuk proyek Anda. Kedua teknik ini memiliki kelebihan dan kekurangan masing-masing.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Server className="w-6 h-6 text-tosca" />
            Server-Side Rendering (SSR)
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            SSR adalah teknik rendering di mana halaman web dirender di server sebelum dikirim ke browser. Server menghasilkan HTML lengkap dan mengirimkannya ke klien.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-tosca/10 border border-tosca/20">
              <h3 className="font-semibold text-tosca mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Kelebihan
              </h3>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• SEO yang lebih baik</li>
                <li>• First Contentful Paint lebih cepat</li>
                <li>• Lebih friendly untuk social media</li>
                <li>• Cocok untuk content-heavy sites</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold text-slate-400 mb-2">Kekurangan</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Load server lebih tinggi</li>
                <li>• TTFB bisa lebih lambat</li>
                <li>• Interaksi UI mungkin delayed</li>
                <li>• Kompleksitas deployment</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Monitor className="w-6 h-6 text-firefly" />
            Client-Side Rendering (CSR)
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            CSR adalah teknik rendering di mana browser menerima HTML kosong atau minimal, kemudian JavaScript merender konten secara dinamis di sisi klien.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-firefly/10 border border-firefly/20">
              <h3 className="font-semibold text-firefly mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Kelebihan
              </h3>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Navigasi antar halaman sangat cepat</li>
                <li>• Pengalaman user seperti aplikasi native</li>
                <li>• Load server lebih ringan</li>
                <li>• Rich interactivity</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold text-slate-400 mb-2">Kekurangan</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• SEO lebih menantang</li>
                <li>• Initial load lebih lambat</li>
                <li>• Tergantung JavaScript</li>
                <li>• Tidak ideal untuk content sites</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-tosca" />
            Kapan Menggunakan SSR?
          </h2>
          <ul className="text-slate-300 space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tosca mt-2 flex-shrink-0" />
              <span>E-commerce atau website yang membutuhkan SEO tinggi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tosca mt-2 flex-shrink-0" />
              <span>Blog atau content-heavy websites</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tosca mt-2 flex-shrink-0" />
              <span>Marketing landing pages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tosca mt-2 flex-shrink-0" />
              <span>Website dengan audience global yang lambat internetnya</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-firefly" />
            Kapan Menggunakan CSR?
          </h2>
          <ul className="text-slate-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-firefly mt-2 flex-shrink-0" />
              <span>Dashboard admin atau SaaS applications</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-firefly mt-2 flex-shrink-0" />
              <span>Social media platforms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-firefly mt-2 flex-shrink-0" />
              <span>Real-time applications</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-firefly mt-2 flex-shrink-0" />
              <span>Applications yang membutuhkan rich interactivity</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
