"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="w-full py-32 bg-locais-900 relative overflow-hidden">
      <div className="absolute top-0 end-0 w-1/2 h-full bg-gradient-to-l rtl:bg-gradient-to-r from-locais-800/30 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: locale === "ar" ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-locais-100">
            {t.about.title} <br />
            <span className="text-locais-400 italic">{t.about.subtitle}</span>
          </h2>
          <p className="text-locais-100/80 font-sans leading-relaxed text-lg">
            {t.about.p1}
          </p>
          <p className="text-locais-100/60 font-sans leading-relaxed">
            {t.about.p2}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="aspect-[4/5] rounded-3xl bg-locais-800 border border-locais-700/50 relative overflow-hidden flex items-center justify-center shadow-2xl">
            <img 
              src="/images/locais_about.jpg"
              alt="Locais Cafe Vibe"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr rtl:bg-gradient-to-tl from-locais-900/40 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 start-6 z-10">
              <p className="font-sans text-white/90 text-sm uppercase tracking-widest font-semibold">{locale === "ar" ? "الأجواء" : "The Ambience"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
