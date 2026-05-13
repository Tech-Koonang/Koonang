"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles, ShoppingBag, LayoutDashboard, ShoppingCart, Package, Clock, BarChart, Settings, Users, Truck, CreditCard, Database, Code2, Globe, Smartphone, Shield, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";

const projectBrief = {
  title: "K-For You",
  version: "Digital Blueprint v1.0 — April 2026",
  client: "K-For You",
  description: "Next.js 14 E-Commerce Application with complete frontend store and admin dashboard — featuring product management, flash sales, and comprehensive order management.",
  platformType: "Web App",
  targetUsers: "Customers, Administrators, Vendors",
  techStack: "Next.js 14, React 18, Tailwind CSS"
};

const features = [
  {
    id: 1,
    title: "Product Browsing",
    description: "Category filtering, search functionality, product detail pages with ratings and related products",
    icon: Package,
    color: "tosca"
  },
  {
    id: 2,
    title: "Shopping Cart",
    description: "Quantity management, item selection, seamless checkout flow with shipping and payment options",
    icon: ShoppingCart,
    color: "firefly"
  },
  {
    id: 3,
    title: "Flash Sales",
    description: "Countdown timer with progress bars, daily discover sections, promotional campaigns",
    icon: Clock,
    color: "tosca"
  },
  {
    id: 4,
    title: "Responsive Design",
    description: "Mobile-first approach with optimized experience across all devices",
    icon: Smartphone,
    color: "firefly"
  }
];

const adminFeatures = [
  {
    id: 1,
    title: "Dashboard Statistics",
    description: "Real-time analytics for orders, revenue, products, and users",
    icon: BarChart
  },
  {
    id: 2,
    title: "Order Management",
    description: "Complete order lifecycle tracking and management",
    icon: ShoppingBag
  },
  {
    id: 3,
    title: "Product Management",
    description: "Full CRUD operations with inventory tracking",
    icon: Package
  },
  {
    id: 4,
    title: "Campaign Management",
    description: "Flash sale campaigns and marketing promotions",
    icon: Zap
  },
  {
    id: 5,
    title: "Vendor Management",
    description: "Delivery vendors and supplier coordination",
    icon: Truck
  },
  {
    id: 6,
    title: "User Management",
    description: "Customer and admin user role management",
    icon: Users
  }
];

const platforms = [
  {
    id: 1,
    title: "Frontend Store",
    description: "Customer-facing e-commerce store with shopping and checkout experience",
    icon: ShoppingBag,
    demoUrl: "https://kforyou.koonang.site/",
    imageUrl: "/k-foryou/Macbook-Air-k-foryou.koonang.site.webp"
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Comprehensive admin panel for managing products, orders, and campaigns",
    icon: LayoutDashboard,
    demoUrl: "https://kforyou.koonang.site/admin",
    imageUrl: "/k-foryou/Macbook-Air-k-foryou.koonang.site-admin.webp"
  }
];

const techStack = [
  {
    id: 1,
    title: "Next.js 14",
    description: "App Router with server components and optimized performance",
    icon: Code2
  },
  {
    id: 2,
    title: "React 18",
    description: "Modern React with hooks and concurrent features",
    icon: Zap
  },
  {
    id: 3,
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    icon: Globe
  },
  {
    id: 4,
    title: "CartContext",
    description: "Custom state management for shopping cart and user sessions",
    icon: Database
  }
];

export default function KForYouPage() {
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="w-4 h-4 text-tosca" />
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
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 md:col-span-1 col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-4 h-4 text-tosca" />
                <span className="text-xs font-medium text-slate-400 uppercase">Tech Stack</span>
              </div>
              <p className="text-sm font-semibold text-white">{projectBrief.techStack}</p>
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
              src="/k-foryou/Macbook-Air-k-foryou.koonang.site.webp"
              alt="K-For You E-Commerce Platform"
              className="w-full object-contain"
            />
          </div>
          <div className="flex justify-center">
            <a
              href="https://kforyou.koonang.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-tosca to-firefly text-navy-900 text-base font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              View Frontend <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Platform Access */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            01 — Platform Access
          </h2>
          <p className="text-slate-400 mb-8">
            Access the frontend store and admin dashboard
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tosca/20 to-firefly/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-tosca" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{platform.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{platform.description}</p>
                  <a
                    href={platform.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-tosca to-firefly text-navy-900 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Visit Platform <ExternalLink size={14} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Frontend Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="w-6 h-6 text-tosca" />
            <h3 className="text-xl font-bold text-white">Frontend Store Features</h3>
          </div>
          <p className="text-slate-400 mb-6">
            Customer-facing features for seamless shopping experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <IconComponent className="w-6 h-6 text-tosca flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-xs text-slate-400">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Admin Dashboard Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            02 — Admin Dashboard
          </h2>
          <p className="text-slate-400 mb-8">
            Comprehensive management tools for e-commerce operations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {adminFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-panel rounded-2xl p-6 hover:border-tosca/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tosca/20 to-firefly/20 flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5 text-tosca" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Technical Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass-panel rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="w-6 h-6 text-tosca" />
            <h3 className="text-xl font-bold text-white">Technical Stack</h3>
          </div>
          <p className="text-slate-400 mb-6">
            Modern technologies optimized for performance and scalability
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <IconComponent className="w-6 h-6 text-tosca" />
                  <div>
                    <p className="text-sm font-semibold text-white">{tech.title}</p>
                    <p className="text-xs text-slate-400">{tech.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Additional Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-panel rounded-2xl p-8 border-tosca/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-tosca" />
            <h3 className="text-xl font-bold text-white">Additional Capabilities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <CreditCard className="w-6 h-6 text-tosca" />
              <span className="text-sm font-medium text-white">Payment Gateway Configuration</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Database className="w-6 h-6 text-tosca" />
              <span className="text-sm font-medium text-white">Stock & Warehouse Management</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Shield className="w-6 h-6 text-tosca" />
              <span className="text-sm font-medium text-white">Report Generation & Analytics</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
