"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../theme-provider";
import { useLanguage } from "../language-provider";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar({ onOpenWizard }: { onOpenWizard?: () => void }) {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.system, path: "/sistem" },
    { name: t.nav.approach, path: "/pendekatan" },
    { name: t.nav.caseStudies, path: "/studi-kasus" },
    { name: t.nav.pricing, path: "/harga" },
    { name: t.nav.demo, path: "/demo" },
    { name: t.nav.contact, path: "/kontak" },
  ];

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return pathname === "/" && window.location.hash === path.substring(1);
    }
    return pathname === path;
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 dark:border-white/5 bg-white/50 dark:bg-navy-900/50 backdrop-blur-xl transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/koonang-icon.png" alt="Koonang Logo" className="w-6 h-6 md:w-8 md:h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="text-lg md:text-xl font-medium tracking-tight text-navy-900 dark:text-white text-glow">
            Koonang
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "text-sm font-medium transition-all relative py-2",
                isActive(link.path) 
                  ? "text-navy-900 dark:text-white" 
                  : "text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
              )}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div 
                  layoutId="nav-active"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-firefly shadow-[0_0_8px_#EFD92F]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors"
          >
            <span className={cn(language === "id" ? "text-navy-900 dark:text-white font-bold" : "")}>ID</span>
            <span className="mx-1 opacity-50">|</span>
            <span className={cn(language === "en" ? "text-navy-900 dark:text-white font-bold" : "")}>EN</span>
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={onOpenWizard}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-900/5 dark:bg-white/5 hover:bg-navy-900/10 dark:hover:bg-white/10 border border-navy-900/10 dark:border-white/10 text-sm font-medium text-navy-900 dark:text-white transition-all hover:shadow-[0_0_20px_rgba(239,217,47,0.1)]"
          >
            {t.nav.startAnalysis}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors ml-1"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 h-screen bg-slate-900/40 dark:bg-navy-900/80 backdrop-blur-md z-40 md:hidden"
            />
            
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-white dark:bg-navy-900 border-l border-slate-200 dark:border-white/10 shadow-2xl z-50 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-white/10">
                <span className="text-lg font-bold text-navy-900 dark:text-white">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={cn(
                      "text-xl font-medium transition-colors",
                      isActive(link.path)
                        ? "text-tosca"
                        : "text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-navy-800/50">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenWizard) onOpenWizard();
                  }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-firefly to-tosca text-navy-900 text-sm font-bold flex justify-center items-center gap-2 hover:shadow-[0_0_20px_rgba(239,217,47,0.3)] transition-all"
                >
                  {t.nav.startAnalysis}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
