"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles, Hotel, Utensils, Gift, User, MessageSquare, Calendar, Ticket, Settings, Shield, Globe, Zap, Database, Target, Users, Brain, Layout, TrendingUp, Lightbulb, DollarSign, Cake, Heart, Sun, RotateCcw, Send, Megaphone, FileText, Plug } from "lucide-react";
import Link from "next/link";

const projectBrief = {
  title: "Baleka Resort & Spa",
  version: "Demo — April 2026",
  client: "Baleka Resort & Spa",
  description: "Modern guest experience platform for luxury resort with seamless reservations, e-vouchers, and personalized guest engagement.",
  techStack: "React, React Router 7.14.1, Tailwind CSS, Framer Motion",
  platform: "Vercel"
};

const amenities = [
  {
    id: 1,
    title: "Accommodations",
    description: "Luxurious rooms and suites with premium amenities",
    icon: Hotel
  },
  {
    id: 2,
    title: "Spa & Wellness",
    description: "Rejuvenating treatments and wellness programs",
    icon: Gift
  },
  {
    id: 3,
    title: "Dining",
    description: "World-class restaurants and culinary experiences",
    icon: Utensils
  },
  {
    id: 4,
    title: "Experiences",
    description: "Curated activities and local excursions",
    icon: Globe
  }
];

const features = [
  {
    id: 1,
    title: "My Reservations",
    description: "Easy booking management with real-time availability and instant confirmation",
    icon: Calendar,
    color: "tosca"
  },
  {
    id: 2,
    title: "E-Voucher",
    description: "Digital vouchers for seamless redemption and gift purchasing",
    icon: Ticket,
    color: "firefly"
  },
  {
    id: 3,
    title: "Profile Settings",
    description: "Personalized guest preferences and account management",
    icon: Settings,
    color: "tosca"
  },
  {
    id: 4,
    title: "Communication",
    description: "Direct messaging with resort staff for seamless service",
    icon: MessageSquare,
    color: "firefly"
  }
];

const crmFeature = {
  title: "Guest Relationship Management",
  description: "Our intelligent CRM system identifies returning guests and tracks their special occasions. When valued guests return, we automatically recognize their loyalty and send personalized greetings for birthdays, anniversaries, or milestone celebrations—ensuring every visit feels special and memorable."
};

const techSpecs = [
  { category: "JavaScript Framework", items: ["React"] },
  { category: "Routing", items: ["React Router 7.14.1"] },
  { category: "Security", items: ["HSTS"] },
  { category: "JavaScript Libraries", items: ["Framer Motion"] },
  { category: "UI Framework", items: ["Tailwind CSS"] },
  { category: "Platform", items: ["Vercel"] }
];

export default function BalekaResortPage() {
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

          <div className="flex flex-col items-center text-center mb-6 relative">
            {/* Logo */}
            <img
              src="https://balekaresort.com/wp-content/uploads/baleka-logo-white.svg"
              alt="Baleka Resort & Spa"
              className="w-48 h-auto mb-6"
            />

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

          <p className="text-slate-300 leading-relaxed mb-8 relative text-center">
            {projectBrief.description}
          </p>

          {/* Demo Image */}
          <div className="mb-8 rounded-xl overflow-hidden bg-navy-800/50">
            <img
              src="https://cmdcnlhpphkeskmeyytw.supabase.co/storage/v1/object/public/cdn/kds/koonang/advokatku/Macbook-Air-balekaresort.koonang.site.webp"
              alt="Baleka Resort Demo"
              className="w-full object-contain"
            />
          </div>

          {/* Demo Cards */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-white mb-4 text-center">Demo Previews</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Guest App Card */}
              <div className="glass-panel rounded-2xl p-4 overflow-hidden hover:border-tosca/50 transition-all duration-300">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-tosca bg-tosca/10 rounded-full mb-3">Demo 1</span>
                <div className="rounded-xl overflow-hidden bg-navy-800/50 mb-4">
                  <img
                    src="https://cmdcnlhpphkeskmeyytw.supabase.co/storage/v1/object/public/cdn/kds/koonang/advokatku/Macbook-Air-balekaresort.koonang.site.webp"
                    alt="Guest App Demo"
                    className="w-full object-contain"
                  />
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://balekaresort.koonang.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-tosca to-firefly text-navy-900 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    View Guest App Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Landing Page Card */}
              <div className="glass-panel rounded-2xl p-4 overflow-hidden hover:border-tosca/50 transition-all duration-300">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-firefly bg-firefly/10 rounded-full mb-3">Demo 2</span>
                <div className="rounded-xl overflow-hidden bg-navy-800/50 mb-4">
                  <img
                    src="/demo/balekaresort/Macbook-Air-baleka-resort.vercel.app.webp"
                    alt="Landing Page Demo"
                    className="w-full object-contain"
                  />
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://balekaresort-lp.koonang.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-tosca to-firefly text-navy-900 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    View Landing Page <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Amenities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Amenities
          </h2>
          <p className="text-slate-400 mb-8">
            World-class facilities for an unforgettable stay
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <motion.div
                  key={amenity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-panel rounded-2xl p-6 hover:border-tosca/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-tosca/20 to-firefly/20 flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-tosca" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{amenity.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{amenity.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Platform Features
          </h2>
          <p className="text-slate-400 mb-8">
            Comprehensive guest management tools
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const colorClass = feature.color === "tosca" ? "text-tosca" : "text-firefly";
              const bgClass = feature.color === "tosca" ? "from-tosca/20 to-tosca/5" : "from-firefly/20 to-firefly/5";
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-panel rounded-2xl p-6 hover:border-tosca/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className={`w-6 h-6 ${colorClass}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* CRM System Brief */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-panel rounded-2xl p-8 border-tosca/30"
        >
          <div className="flex items-center gap-3 mb-6">
            <User className="w-6 h-6 text-tosca" />
            <h3 className="text-2xl font-bold text-white">CRM System Brief</h3>
          </div>

          {/* CRM Demo */}
          <div className="mb-8">
            <div className="rounded-xl overflow-hidden bg-navy-800/50 mb-4">
              <img
                src="/demo/balekaresort/Macbook-Air-balekaresort-crm.vercel.app.webp"
                alt="CRM Dashboard Demo"
                className="w-full object-contain"
              />
            </div>
            <div className="flex justify-center">
              <a
                href="https://balekaresort-crm.koonang.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-tosca to-firefly text-navy-900 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                View CRM Demo <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Objective */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-tosca mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Objective
            </h4>
            <p className="text-slate-300 mb-4">
              Building a CRM system to identify guest behavior, store personal data & preferences, detect returning guests, manage special occasions, and send personalized greetings/offers automatically.
            </p>
            <div className="p-4 rounded-xl bg-gradient-to-r from-tosca/10 to-firefly/10 border border-tosca/20">
              <p className="text-white font-semibold">Goal: Increase repeat booking & guest loyalty</p>
            </div>
          </div>

          {/* User Roles */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-tosca mb-3 flex items-center gap-2">
              <Users className="w-5 h-5" />
              User Roles
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-semibold text-white mb-2">Admin / Staff Hotel</h5>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Front Office</li>
                  <li>• Reservation Team</li>
                  <li>• Marketing</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-semibold text-white mb-2">System (Automation Engine)</h5>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Send automatic notifications</li>
                  <li>• Trigger campaigns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-tosca mb-3 flex items-center gap-2">
              <Database className="w-5 h-5" />
              Core Features
            </h4>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-semibold text-white mb-2">1. Guest Profile (Single View Customer)</h5>
                <p className="text-slate-400 text-sm mb-2">Every guest has 1 profile with mandatory data:</p>
                <p className="text-slate-300 text-sm">Full Name, Email, Phone/WhatsApp, Nationality, Passport/ID (optional)</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-semibold text-white mb-2">2. Behavior Tracking</h5>
                <p className="text-slate-400 text-sm mb-2">Track: Total stay count, Last stay date, Average spending, Room preference, Stay pattern (Couple/Family/Solo)</p>
                <p className="text-tosca text-sm font-medium">Output: "Frequent Guest", "High Value Guest", "Seasonal Guest"</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-semibold text-white mb-2">3. Special Dates Tracking (MOST IMPORTANT)</h5>
                <p className="text-slate-300 text-sm">Birthday, Anniversary, Honeymoon flag, First stay date (important!)</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-semibold text-white mb-2">4. Returning Guest Detection</h5>
                <p className="text-slate-300 text-sm">If guest has booked before → mark as Returning Guest / Loyal Guest (≥ 3 stays)</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-semibold text-white mb-2">5. Automation System (Core Value)</h5>
                <div className="text-slate-300 text-sm space-y-2">
                  <p><span className="text-firefly flex items-center gap-2"><Cake className="w-4 h-4" /> Birthday (H-3):</span> "Happy Birthday from Baleka Resort..."</p>
                  <p><span className="text-firefly flex items-center gap-2"><Heart className="w-4 h-4" /> Anniversary (H-5):</span> "Celebrate your special day in Bali with us"</p>
                  <p><span className="text-firefly flex items-center gap-2"><Sun className="w-4 h-4" /> After Stay (H+2):</span> Thank you message + review request</p>
                  <p><span className="text-firefly flex items-center gap-2"><RotateCcw className="w-4 h-4" /> Re-engagement (3-6 months):</span> "We miss you, special offer inside"</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-semibold text-white mb-2">6. Campaign & Broadcast</h5>
                <p className="text-slate-300 text-sm">WhatsApp blast, Email marketing with filters: Country, Room preference, Repeat guest, Last visit date</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-semibold text-white mb-2">7. Notes & Preferences</h5>
                <p className="text-slate-300 text-sm">Staff can input: "Prefers pool access", "Honeymoon couple", "Likes quiet room", "Allergic to seafood"</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-semibold text-white mb-2">8. Integration</h5>
                <p className="text-slate-300 text-sm">OTA import (Booking.com/Agoda CSV), Website booking form, WhatsApp API, Email SMTP</p>
              </div>
            </div>
          </div>

          {/* Smart Insight Dashboard */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-tosca mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Smart Insight Dashboard
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">Total guests</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">Returning guest %</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">Upcoming birthdays</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">Upcoming anniversaries</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">Guest segmentation</div>
            </div>
          </div>

          {/* UI Concept */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-tosca mb-3 flex items-center gap-2">
              <Layout className="w-5 h-5" />
              UI Concept
            </h4>
            <p className="text-slate-300 text-sm mb-2">Clean dashboard (Notion/CRM style), Dark or light mode</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">Dashboard</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">Guests</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">Campaigns</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">Automation</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">Reports</span>
            </div>
          </div>

          {/* Priority MVP */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-tosca mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Priority MVP
            </h4>
            <div className="p-4 rounded-xl bg-gradient-to-r from-firefly/10 to-tosca/10 border border-firefly/20">
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Guest database</li>
                <li>• Stay history</li>
                <li>• Birthday & anniversary tracking</li>
                <li>• Manual WhatsApp reminder</li>
                <li>• Returning guest tagging</li>
              </ul>
            </div>
          </div>

          {/* Future Development */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-tosca mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Future Development
            </h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• AI recommendation: "Offer lagoon upgrade to this guest"</li>
              <li>• Dynamic pricing for loyal guest</li>
              <li>• Loyalty program / point system</li>
            </ul>
          </div>

          {/* Business Impact */}
          <div>
            <h4 className="text-lg font-bold text-tosca mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Business Impact
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">Increase repeat booking</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">Reduce OTA dependency</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">Improve guest experience</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">Upsell room (Lagoon Room)</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass-panel rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSpecs.map((spec, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-medium text-slate-400 uppercase mb-2">{spec.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {spec.items.map((item, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
