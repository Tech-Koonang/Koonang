import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nodes = [
  { id: "fe", label: "Frontend", x: 50, y: 20, color: "firefly", details: "User Interface, UX Logic, Client-side State" },
  { id: "be", label: "Backend", x: 50, y: 50, color: "tosca", details: "Business Logic, API Gateway, Security Layer" },
  { id: "db", label: "Database", x: 20, y: 50, color: "firefly", details: "Structured Data, Event Logs, User Profiles" },
  { id: "crm", label: "CRM", x: 80, y: 50, color: "tosca", details: "Customer Relations, Lead Management, Sales Pipeline" },
  { id: "pg", label: "Payment", x: 20, y: 80, color: "firefly", details: "Transaction Logic, Gateway Integration, Invoicing" },
  { id: "al", label: "Automation", x: 50, y: 80, color: "tosca", details: "Workflow Engines, Task Routing, Notifications" },
  { id: "an", label: "Analytics", x: 80, y: 80, color: "firefly", details: "Growth Metrics, Behavior Analysis, BI Layer" },
];

const connections = [
  ["fe", "be"],
  ["be", "db"],
  ["be", "crm"],
  ["be", "al"],
  ["al", "pg"],
  ["al", "an"],
  ["crm", "an"],
];

export function ArchitectureSystemDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="py-32 bg-white dark:bg-navy-900 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            Visual System Diagram
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Visualisasi konseptual bagaimana setiap komponen sistem saling terhubung dalam arsitektur yang kami bangun.
          </p>
        </motion.div>

        <div className="relative aspect-[16/9] max-w-4xl mx-auto bg-slate-50 dark:bg-white/5 rounded-[40px] border border-slate-200 dark:border-white/10 overflow-hidden shadow-inner">
          <svg className="absolute inset-0 w-full h-full">
            {/* Connections */}
            {connections.map(([fromId, toId], i) => {
              const from = nodes.find(n => n.id === fromId)!;
              const to = nodes.find(n => n.id === toId)!;
              return (
                <motion.line
                  key={i}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke="currentColor"
                  strokeWidth="1"
                  className={cn(
                    "transition-colors duration-500",
                    activeNode === fromId || activeNode === toId 
                      ? "text-firefly opacity-100" 
                      : "text-slate-300 dark:text-white/10 opacity-50"
                  )}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className={cn(
                "w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 border-2",
                activeNode === node.id 
                  ? "bg-firefly border-firefly shadow-[0_0_30px_rgba(239,217,47,0.4)] scale-110" 
                  : "bg-white dark:bg-navy-900 border-slate-200 dark:border-white/10"
              )}>
                <span className={cn(
                  "text-[10px] md:text-xs font-bold transition-colors duration-500",
                  activeNode === node.id ? "text-navy-900" : "text-navy-900 dark:text-white"
                )}>
                  {node.label}
                </span>
              </div>

              {/* Tooltip */}
              <AnimatePresence>
                {activeNode === node.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 p-4 rounded-xl bg-navy-900 dark:bg-white text-white dark:text-navy-900 text-xs shadow-2xl z-20 pointer-events-none"
                  >
                    <p className="font-bold mb-1">{node.label}</p>
                    <p className="opacity-80 leading-relaxed">{node.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { AnimatePresence } from "framer-motion";
