import { useLanguage } from "../language-provider";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();

  const platformLinks = [
    { name: t.footer.platform.links[0], path: "/arsitektur" },
    { name: t.footer.platform.links[1], path: "/otomasi" },
    { name: t.footer.platform.links[2], path: "/investasi" },
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
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <img src="/koonang-icon.png" alt="Koonang Logo" className="w-6 h-6 opacity-80 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium tracking-tight text-white">
              koonang.io
            </span>
          </Link>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            {t.footer.desc}
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">{t.footer.platform.title}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {platformLinks.map((link, i) => (
              <li key={i}>
                <Link to={link.path} className="hover:text-firefly transition-colors">
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
                <Link to={link.path} className="hover:text-firefly transition-colors">
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
          <Link to="/privacy" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
          <Link to="/terms" className="hover:text-white transition-colors">{t.footer.terms}</Link>
        </div>
      </div>
    </footer>
  );
}
