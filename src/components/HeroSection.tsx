"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { locale, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: "coffee",
      title: locale === "ar" ? "قهوة لوكايس" : "Signature Locais Coffee",
      subtitle: locale === "ar" ? "مزيج غني ومحضر بإتقان." : "A smooth, rich blend crafted to perfection.",
      desc: t.hero.subtitle,
      image: "/images/real_internet_coffee.png",
      bgColor: "bg-[#051F20]",
      textColor: "text-white",
      accentText: "text-locais-400",
      bgText: "text-locais-600/30",
      scaleClass: "scale-75 md:scale-90 translate-y-8",
    },
    {
      id: "honey",
      title: locale === "ar" ? "ع س ل" : "H O N E Y",
      subtitle: locale === "ar" ? "كيكة العسل المميزة" : "Signature Honey Cake",
      desc: locale === "ar" ? "طبقات من كيكة العسل المكرملة وتغطية الكريمة الحامضة المخملية." : "Layers of caramelized honey sponge and velvety sour cream frosting.",
      image: "/images/honey_cake_1785415872758_transparent.png",
      bgColor: "bg-[#A95A42]", 
      textColor: "text-white",
      accentText: "text-white",
      bgText: "text-white/20",
      scaleClass: "scale-[1.2] md:scale-[1.3]",
    },
    {
      id: "medovik",
      title: locale === "ar" ? "ميدوفيك" : "M E D O V I K",
      subtitle: locale === "ar" ? "ميدوفيك الكلاسيكية" : "Classic Medovik",
      desc: locale === "ar" ? "وصفة روسية تقليدية مع طبقة رقيقة من الفتات." : "Traditional Russian recipe with a delicate crumb coating.",
      image: "/images/medovik_1785415886099_transparent.png",
      bgColor: "bg-[#D4C4A8]",
      textColor: "text-locais-900",
      accentText: "text-terracotta",
      bgText: "text-locais-900/10",
      scaleClass: "scale-[1.2] md:scale-[1.3]",
    },
    {
      id: "croissant",
      title: locale === "ar" ? "ط ا ز ج" : "F R E S H",
      subtitle: locale === "ar" ? "كرواسون الصباح" : "Morning Croissant",
      desc: locale === "ar" ? "طبقات هشة ومقرمشة تُخبز طازجة كل صباح." : "Flaky, buttery perfection baked fresh every single morning.",
      image: "/images/croissant_1785415912494_transparent.png",
      bgColor: "bg-[#BFA054]",
      textColor: "text-locais-900",
      accentText: "text-white",
      bgText: "text-white/30",
      scaleClass: "scale-[1.2] md:scale-[1.3]",
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100vw" : "-100vw",
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100vw" : "-100vw",
      opacity: 0,
      rotateY: direction < 0 ? 15 : -15,
      scale: 0.8
    })
  };

  return (
    <section className={`relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000 ease-in-out pt-20 md:pt-28 ${currentSlide.bgColor} perspective-[1200px]`}>
      
      {/* Massive Typography Background */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`bgtext-${currentIndex}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
          className={`absolute z-10 w-full flex justify-center items-center pointer-events-none select-none ${currentSlide.bgText}`}
        >
          <h1 className="font-display text-[15vw] md:text-[20vw] leading-none tracking-tighter whitespace-nowrap overflow-hidden">
            {currentSlide.title}
          </h1>
        </motion.div>
      </AnimatePresence>

      {/* Interactive Carousel Area */}
      <div className="relative z-20 w-full h-[60vh] max-w-[1200px] flex items-center justify-center">
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className={`absolute start-4 md:start-12 z-50 p-3 rounded-full border border-current opacity-50 hover:opacity-100 transition-opacity ${currentSlide.textColor}`}
        >
          {locale === "ar" ? <ChevronRight size={32} /> : <ChevronLeft size={32} />}
        </button>

        <button 
          onClick={nextSlide}
          className={`absolute end-4 md:end-12 z-50 p-3 rounded-full border border-current opacity-50 hover:opacity-100 transition-opacity ${currentSlide.textColor}`}
        >
          {locale === "ar" ? <ChevronLeft size={32} /> : <ChevronRight size={32} />}
        </button>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              rotateY: { duration: 0.6 }
            }}
            className="absolute inset-0 flex flex-col items-center justify-center pt-10 md:pt-0"
            style={{ willChange: "transform, opacity" }}
          >
            {/* 3D Floating Product Container */}
            <motion.div 
              className="relative w-[280px] h-[280px] md:w-[500px] md:h-[500px]"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Product Image */}
              <div className="absolute inset-0 z-30 md:drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)] flex items-center justify-center">
                 {/* High-Performance Ground Cast Shadow */}
                 <div className="absolute top-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-[radial-gradient(circle,rgba(0,0,0,0.8)_0%,transparent_60%)] scale-y-[0.3] translate-y-[120px] sm:translate-y-[160px] z-0" />
                 
                 <Image 
                    src={currentSlide.image} 
                    alt={currentSlide.subtitle}
                    fill
                    className={`object-contain relative z-10 ${currentSlide.scaleClass}`}
                    priority
                 />
              </div>
              
              {/* Floating Accents (Bobbing at different speeds) */}
              <motion.div
                animate={{ y: [-20, 20, -20], rotate: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="hidden md:block absolute top-0 end-0 w-24 h-24 md:w-32 md:h-32 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_70%)] rounded-full z-20"
                style={{ willChange: "transform" }}
              />
              <motion.div
                 animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="hidden md:block absolute bottom-10 start-0 w-32 h-32 md:w-48 md:h-48 bg-[radial-gradient(circle,rgba(0,0,0,0.4)_0%,transparent_70%)] rounded-full z-20"
                 style={{ willChange: "transform" }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Foreground Content */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`text-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-30 text-center px-4 md:px-8 mt-auto mb-16 md:mb-24 flex flex-col items-center"
        >
          <h2 className={`font-display text-2xl md:text-5xl ${currentSlide.textColor} mb-3 md:mb-4 drop-shadow-md flex flex-wrap justify-center gap-x-2 gap-y-1`}>
            {currentSlide.subtitle.split(' ').map((word, i) => (
              i === 0 ? <span key={i} className={`font-normal`}>{word}</span> : 
              <span key={i} className={`italic font-light ${currentSlide.accentText}`}>{word}</span>
            ))}
          </h2>
          <p className={`font-sans text-sm md:text-base max-w-md mx-auto mb-6 md:mb-8 opacity-90 ${currentSlide.textColor} drop-shadow-sm`}>
            {currentSlide.desc}
          </p>
          
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} 
            className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-medium tracking-wide hover:scale-105 transition-transform duration-300 font-sans shadow-xl border ${currentSlide.textColor === 'text-white' ? 'bg-white text-black border-white/20' : 'bg-black text-white border-black/20'}`}
          >
            {t.hero.cta}
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex gap-3 z-40">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? `w-8 ${currentSlide.textColor}` : `bg-current opacity-30 ${currentSlide.textColor}`}`}
          />
        ))}
      </div>
    </section>
  );
}
