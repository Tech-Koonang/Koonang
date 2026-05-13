"use client";

import { useLanguage } from "../language-provider";
import Link from "next/link";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const contactEmail = "koonang26@gmail.com";

  const platformLinks = [
    { name: t.footer.platform.links[0], path: "/arsitektur" },
    { name: t.footer.platform.links[1], path: "/otomasi" },
    { name: t.footer.platform.links[2], path: "/investasi" },
    { name: t.footer.platform.links[3], path: "/demo" },
  ];

  const companyLinks = [
    { name: t.footer.company.links[0], path: "/tentang" },
    { name: t.footer.company.links[1], path: "/karir" },
    { name: t.footer.company.links[2], path: "/kontak" },
  ];

  return (
    <footer id="contact" className="border-t border-white/5 bg-navy-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <img src="/koonang-icon.png" alt="Koonang Logo" className="w-6 h-6 opacity-80 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium tracking-tight text-white">
              Koonang
            </span>
          </Link>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed mb-6">
            {t.footer.desc}
          </p>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <a href={`tel:${t.footer.contact.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} className="text-tosca" />
              {t.footer.contact.phone}
            </a>
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} className="text-tosca" />
              {contactEmail}
            </a>
            <div className="flex gap-4 mt-2">
              <a href={t.footer.contact.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href={t.footer.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">{t.footer.platform.title}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {platformLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.path} className="hover:text-firefly transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">{t.footer.company.title}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {companyLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.path} className="hover:text-firefly transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>{t.footer.rights}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
          <Link href="/terms" className="hover:text-white transition-colors">{t.footer.terms}</Link>
        </div>
      </div>
    </footer>
  );
}
