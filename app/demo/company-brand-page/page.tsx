"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Image as ImageIcon, Sparkles, Target, Code } from "lucide-react";
import Link from "next/link";

const projectBrief = {
  title: "Company Brand Page",
  client: "PT. Example Corporation",
  industry: "Technology & Software",
  projectDuration: "8 weeks",
  launchDate: "January 2025",
  description: "A modern corporate branding website showcasing the company's products, services, and corporate identity. The design emphasizes professionalism, trust, and innovation while maintaining excellent user experience across all devices.",
  objectives: [
    "Establish strong online brand presence",
    "Showcase products and services effectively",
    "Generate qualified leads through contact forms",
    "Provide comprehensive company information",
    "Optimize for search engines and performance"
  ],
  technologies: [
    "Next.js 14",
    "React 18",
    "Tailwind CSS",
    "TypeScript",
    "Framer Motion"
  ]
};

const demoProjects = [
  {
    id: 1,
    title: "Homepage Showcase",
    description: "Main landing page with hero section, featured products, and company overview",
    demoUrl: "https://example-demo1.com",
    imageUrl: "/images/demo-homepage.jpg"
  },
  {
    id: 2,
    title: "About Us Page",
    description: "Company history, team introduction, and corporate values presentation",
    demoUrl: "https://example-demo2.com",
    imageUrl: "/images/demo-about.jpg"
  },
  {
    id: 3,
    title: "Products Catalog",
    description: "Interactive product listing with filtering and detailed product views",
    demoUrl: "https://example-demo3.com",
    imageUrl: "/images/demo-products.jpg"
  },
  {
    id: 4,
    title: "Contact & Inquiry",
    description: "Contact form with validation and multiple communication channels",
    demoUrl: "https://example-demo4.com",
    imageUrl: "/images/demo-contact.jpg"
  }
];

export default function CompanyBrandPage() {
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
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {projectBrief.title}
              </h1>
              <p className="text-slate-400">{projectBrief.client}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-300">
                {projectBrief.industry}
              </span>
              <span className="px-4 py-2 rounded-lg bg-tosca/10 border border-tosca/20 text-sm font-medium text-tosca">
                {projectBrief.projectDuration}
              </span>
              <span className="px-4 py-2 rounded-lg bg-firefly/10 border border-firefly/20 text-sm font-medium text-firefly">
                {projectBrief.launchDate}
              </span>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-8 relative">
            {projectBrief.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 relative">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-tosca" />
                Project Objectives
              </h3>
              <ul className="space-y-2">
                {projectBrief.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-tosca mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,231,254,0.6)]" />
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-firefly" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectBrief.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-300 hover:border-tosca/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Demo Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-firefly" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Demo Pages
            </h2>
          </div>
          <p className="text-slate-400 mb-8">
            Click the links below to view live demos of each page (opens in new tab)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="glass-panel rounded-2xl overflow-hidden hover:border-tosca/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,231,254,0.15)] hover:-translate-y-1 relative">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-tosca/5 to-firefly/5" />
                    <ImageIcon className="w-16 h-16 text-slate-600 relative z-10" />
                  </div>

                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-tosca to-firefly text-navy-900 font-semibold rounded-lg hover:opacity-90 transition-opacity hover:shadow-[0_0_20px_rgba(0,231,254,0.3)]"
                    >
                      <ExternalLink size={16} />
                      View Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
