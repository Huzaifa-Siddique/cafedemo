"use client";

import { useLanguage } from "../context/LanguageContext";
import { Instagram } from "lucide-react";

export default function Footer() {
  const { t, locale } = useLanguage();
  
  return (
    <footer className="w-full bg-[#051F20] border-t border-white/10 pt-16 pb-8 px-4 md:px-8 flex flex-col items-center justify-center text-center">
      
      {/* Demo Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-locais-800 border border-locais-600 mb-8">
        <span className="w-2 h-2 rounded-full bg-locais-400 animate-pulse"></span>
        <span className="text-sm font-medium text-locais-100 uppercase tracking-wider">{t.footer.demoTag}</span>
      </div>

      <h2 className="font-display text-4xl md:text-5xl text-white mb-6">OASIS</h2>
      
      <p className="font-sans text-locais-300 max-w-md mx-auto mb-10 leading-relaxed text-sm md:text-base">
        {t.footer.demoMsg}
      </p>

      {/* Socials / Contact */}
      <div className="flex items-center justify-center gap-6 mb-12">
        <div 
          className="text-locais-400 hover:text-white transition-colors cursor-default"
          aria-label="Instagram"
        >
          <Instagram size={24} strokeWidth={1.5} />
        </div>
        <a 
          href="https://maps.google.com/?q=LOCAIS,+Abdullah+Al+Kharji,+Al+Aqiq,+Riyadh+13515,+Saudi+Arabia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-locais-400 hover:text-white transition-colors"
          aria-label="Location"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </a>
      </div>
      
      {/* Copyright */}
      <div className="w-full max-w-4xl border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-locais-400">
        <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
      </div>
    </footer>
  );
}
