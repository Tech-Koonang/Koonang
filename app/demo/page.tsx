"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

const demoCompanies = [
  {
    id: "advokatku",
    name: "Advokatku",
    description: "AI-powered legal tech platform with consultation, case tracking, and document analysis",
    category: "Legal Tech",
    image: "https://cmdcnlhpphkeskmeyytw.supabase.co/storage/v1/object/public/cdn/kds/koonang/advokatku/Macbook-Air-advokatku-lp.vercel.app.webp"
  },
  {
    id: "balekaresort",
    name: "Baleka Resort & Spa",
    description: "Luxury resort guest experience platform with reservations, e-vouchers, and CRM",
    category: "Hospitality",
    image: "/demo/balekaresort/Macbook-Air-baleka-resort.vercel.app.webp"
  },
  {
    id: "kforyou",
    name: "K-For You",
    description: "Next.js 14 E-Commerce application with complete frontend store and admin dashboard",
    category: "E-Commerce",
    image: "/k-foryou/Macbook-Air-k-foryou.koonang.site.webp?v=20260514"
  }
];

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-navy-900 relative overflow-hidden pt-20">
      {/* Decorative Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tosca/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-firefly/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-navy-800/50 blur-[100px] rounded-full -z-10" />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/95 to-navy-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-3 h-3 text-firefly" />
              <span className="text-xs font-medium text-firefly tracking-wide uppercase">
                Portfolio Showcase
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Demo <span className="text-transparent bg-clip-text bg-gradient-to-r from-tosca to-firefly">Showcase</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Explore our portfolio of client projects and demo websites
            </p>
          </motion.div>
        </div>
      </div>

      {/* Demo Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoCompanies.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/demo/${demo.id}`}>
                <div className="group h-full glass-panel rounded-2xl p-6 hover:border-tosca/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,231,254,0.15)] hover:-translate-y-1 relative overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-tosca/0 via-transparent to-firefly/0 group-hover:from-tosca/5 group-hover:to-firefly/5 transition-all duration-500" />
                  
                  <div className="relative">
                    {demo.image && (
                      <div className="rounded-xl overflow-hidden bg-navy-800/50 mb-4">
                        <img
                          src={demo.image}
                          alt={demo.name}
                          className="w-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {demo.category}
                      </span>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-tosca transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tosca transition-colors">
                      {demo.name}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {demo.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-sm font-medium text-tosca flex items-center gap-2">
                        View Details <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
