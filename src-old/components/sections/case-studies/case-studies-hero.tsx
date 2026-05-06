import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { ArrowRight } from "lucide-react";

export function CaseStudiesHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-white dark:bg-navy-900 transition-colors duration-500">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-firefly/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tosca/10 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-navy-900 dark:text-white mb-8 leading-tight tracking-tight">
            {t.caseStudiesPage.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light">
            {t.caseStudiesPage.hero.subheadline}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("simulations")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 rounded-full bg-navy-900 dark:bg-white text-white dark:text-navy-900 font-bold flex items-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(239,217,47,0.3)]"
          >
            {t.caseStudiesPage.hero.cta}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* Constellation Visual */}
        <div className="relative h-[400px] md:h-[500px] hidden lg:block">
          <svg className="absolute inset-0 w-full h-full">
            {/* Core Node */}
            <motion.circle
              cx="50%"
              cy="50%"
              r="12"
              className="fill-firefly"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="24"
              className="stroke-firefly/30 fill-none"
              strokeWidth="1"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Nodes */}
            {[
              { x: "20%", y: "30%", label: "Travel" },
              { x: "80%", y: "40%", label: "Prof Service" },
              { x: "40%", y: "80%", label: "SaaS" },
            ].map((node, i) => (
              <g key={i}>
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={node.x}
                  y2={node.y}
                  className="stroke-firefly/20"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                />
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  className="fill-tosca"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
                />
                <motion.text
                  x={node.x}
                  y={node.y}
                  dy="-15"
                  textAnchor="middle"
                  className="text-[10px] uppercase tracking-widest fill-slate-400 font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 + i * 0.2 }}
                >
                  {node.label}
                </motion.text>
              </g>
            ))}

            {/* Orbiting Elements */}
            <motion.circle
              r="150"
              cx="50%"
              cy="50%"
              className="stroke-white/5 dark:stroke-white/5 fill-none"
              strokeWidth="1"
              strokeDasharray="5 5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
