"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles, Dumbbell, Moon, Utensils, Heart, Users, MapPin, Clock, Phone, Mail, Star, Calendar, Music, Award, Code2, Database, Globe, Smartphone } from "lucide-react";
import Link from "next/link";

const projectBrief = {
  title: "B3 Playground",
  version: "Digital Blueprint v1.0 — April 2026",
  client: "B3 Playground",
  description: "Lifestyle-focused fitness facility in Kerobokan, Bali — offering a holistic 360° approach to health and wellness with fitness, recovery, and community-driven experiences.",
  platformType: "Web App",
  targetUsers: "Fitness enthusiasts, Community members",
  location: "Kerobokan, Bali",
  rating: "4.5 (522 reviews)"
};

const pillars = [
  {
    id: 1,
    title: "Sleep",
    description: "Recovery and rest optimization for better performance",
    icon: Moon,
    color: "tosca"
  },
  {
    id: 2,
    title: "Perform",
    description: "Full gym & fitness center with functional training",
    icon: Dumbbell,
    color: "firefly"
  },
  {
    id: 3,
    title: "Nourish",
    description: "Nutrition guidance and wellness programs",
    icon: Utensils,
    color: "tosca"
  },
  {
    id: 4,
    title: "Restore",
    description: "Mobility, recovery, and holistic wellness",
    icon: Heart,
    color: "firefly"
  }
];

const offerings = [
  {
    id: 1,
    title: "Fitness & Facilities",
    description: "Full gym & fitness center with functional training environment",
    icon: Dumbbell
  },
  {
    id: 2,
    title: "Classes",
    description: "Yoga, Dance, Kids classes, Pilates & mobility sessions",
    icon: Users
  },
  {
    id: 3,
    title: "Sports",
    description: "3x3 basketball court, Table tennis",
    icon: Award
  },
  {
    id: 4,
    title: "Coaches",
    description: "Professional trainers specializing in various disciplines",
    icon: Star
  }
];

const coaches = [
  {
    name: "Ika",
    specialty: "Yoga & Mobility"
  },
  {
    name: "Gege",
    specialty: "Strength & Conditioning / HYROX"
  },
  {
    name: "Stella",
    specialty: "Pilates & Mobility"
  }
];

const events = [
  {
    title: "HYROX Competition Training",
    description: "Bangkok 2026 preparation",
    icon: Award
  },
  {
    title: "Sunday DJ Sessions",
    description: "Social fitness experiences",
    icon: Music
  },
  {
    title: "Ladies Day",
    description: "Special discount promotions",
    icon: Calendar
  }
];

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Kerobokan, Bali" },
  { icon: Clock, label: "Hours", value: "07:00 – 21:00" },
  { icon: Phone, label: "Phone", value: "+62 811-3810-255" },
  { icon: Mail, label: "Email", value: "info@b3playground.com" }
];

export default function B3PlaygroundPage() {
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
                <Dumbbell className="w-4 h-4 text-tosca" />
                <span className="text-xs font-medium text-slate-400 uppercase">Platform</span>
              </div>
              <p className="text-sm font-semibold text-white">{projectBrief.platformType}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-tosca" />
                <span className="text-xs font-medium text-slate-400 uppercase">Target</span>
              </div>
              <p className="text-sm font-semibold text-white">{projectBrief.targetUsers}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-tosca" />
                <span className="text-xs font-medium text-slate-400 uppercase">Location</span>
              </div>
              <p className="text-sm font-semibold text-white">{projectBrief.location}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-tosca" />
                <span className="text-xs font-medium text-slate-400 uppercase">Rating</span>
              </div>
              <p className="text-sm font-semibold text-white">{projectBrief.rating}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Demo Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="rounded-xl overflow-hidden bg-navy-800/50 mb-6">
            <img
              src="/demo/b3playground/Macbook-Air-b3playground.koonang.site.webp"
              alt="B3 Playground Website"
              className="w-full object-contain"
            />
          </div>
          <div className="flex justify-center">
            <a
              href="https://b3playground.koonang.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-tosca to-firefly text-navy-900 text-base font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              View Website <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* 4 Key Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            01 — 4 Key Pillars
          </h2>
          <p className="text-slate-400 mb-8">
            Holistic 360° approach to health and wellness
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-panel rounded-2xl p-6 hover:border-tosca/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tosca/20 to-firefly/20 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-tosca" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Key Offerings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-panel rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Dumbbell className="w-6 h-6 text-tosca" />
            <h3 className="text-xl font-bold text-white">Key Offerings</h3>
          </div>
          <p className="text-slate-400 mb-6">
            Comprehensive fitness and wellness programs for all levels
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <IconComponent className="w-6 h-6 text-tosca" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{offering.title}</h4>
                    <p className="text-xs text-slate-400">{offering.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Coaches */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-panel rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-firefly" />
            <h3 className="text-xl font-bold text-white">Professional Coaches</h3>
          </div>
          <p className="text-slate-400 mb-6">
            Expert trainers specializing in various fitness disciplines
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {coaches.map((coach, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-base font-semibold text-white mb-1">{coach.name}</h4>
                <p className="text-sm text-slate-400">{coach.specialty}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Events & Community */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass-panel rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-tosca" />
            <h3 className="text-xl font-bold text-white">Events & Community</h3>
          </div>
          <p className="text-slate-400 mb-6">
            Regular events and programs with strong community engagement
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {events.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <IconComponent className="w-6 h-6 text-tosca" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{event.title}</h4>
                    <p className="text-xs text-slate-400">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Technical Specifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-panel rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="w-6 h-6 text-tosca" />
            <h3 className="text-xl font-bold text-white">Technical Specifications</h3>
          </div>
          <p className="text-slate-400 mb-6">
            Modern web technologies optimized for performance and user experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Code2 className="w-6 h-6 text-tosca" />
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase">Frontend</p>
                <p className="text-sm font-semibold text-white">Next.js</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Smartphone className="w-6 h-6 text-tosca" />
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase">Responsive</p>
                <p className="text-sm font-semibold text-white">Mobile-First</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Globe className="w-6 h-6 text-tosca" />
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase">Hosting</p>
                <p className="text-sm font-semibold text-white">Vercel</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Database className="w-6 h-6 text-tosca" />
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase">CMS</p>
                <p className="text-sm font-semibold text-white">Custom</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-panel rounded-2xl p-8 border-tosca/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-tosca" />
            <h3 className="text-xl font-bold text-white">Location & Contact</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <IconComponent className="w-6 h-6 text-tosca" />
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase">{info.label}</p>
                    <p className="text-sm font-semibold text-white">{info.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
