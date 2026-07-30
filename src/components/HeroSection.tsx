"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "coffee",
    title: "Signature Locais Coffee",
    subtitle: "A smooth, rich blend crafted to perfection.",
    desc: "Experience perfectly crafted beverages and exquisite desserts in the heart of Al Aqiq.",
    image: "/images/real_internet_coffee.png",
    bgColor: "bg-[#051F20]",
    textColor: "text-white",
    accentText: "text-locais-400",
    bgText: "text-locais-600/30",
    scaleClass: "scale-75 md:scale-90 translate-y-8",
  },
  {
    id: "honey",
    title: "H O N E Y",
    subtitle: "Signature Honey Cake",
    desc: "Layers of caramelized honey sponge and velvety sour cream frosting.",
    image: "/images/honey_cake_1785415872758_transparent.png",
    bgColor: "bg-[#A95A42]", 
    textColor: "text-white",
    accentText: "text-white",
    bgText: "text-white/20",
    scaleClass: "scale-[1.2] md:scale-[1.3]",
  },
  {
    id: "medovik",
    title: "M E D O V I K",
    subtitle: "Classic Medovik",
    desc: "Traditional Russian recipe with a delicate crumb coating.",
    image: "/images/medovik_1785415886099_transparent.png",
    bgColor: "bg-[#D4C4A8]",
    textColor: "text-locais-900",
    accentText: "text-terracotta",
    bgText: "text-locais-900/10",
    scaleClass: "scale-[1.2] md:scale-[1.3]",
  },
  {
    id: "croissant",
    title: "F R E S H",
    subtitle: "Morning Croissant",
    desc: "Flaky, buttery perfection baked fresh every single morning.",
    image: "/images/croissant_1785415912494_transparent.png",
    bgColor: "bg-[#BFA054]",
    textColor: "text-locais-900",
    accentText: "text-white",
    bgText: "text-white/30",
    scaleClass: "scale-[1.2] md:scale-[1.3]",
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
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
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
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
          className={`absolute left-4 md:left-12 z-50 p-3 rounded-full border border-current opacity-50 hover:opacity-100 transition-opacity ${currentSlide.textColor}`}
        >
          <ChevronLeft size={32} />
        </button>

        <button 
          onClick={nextSlide}
          className={`absolute right-4 md:right-12 z-50 p-3 rounded-full border border-current opacity-50 hover:opacity-100 transition-opacity ${currentSlide.textColor}`}
        >
          <ChevronRight size={32} />
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
          >
            {/* 3D Floating Product Container */}
            <motion.div 
              className="relative w-[280px] h-[280px] md:w-[500px] md:h-[500px]"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Product Image */}
              <div className="absolute inset-0 z-30 drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)] flex items-center justify-center">
                 <Image 
                    src={currentSlide.image} 
                    alt={currentSlide.subtitle}
                    fill
                    className={`object-contain ${currentSlide.scaleClass}`}
                    priority
                 />
              </div>
              
              {/* Floating Accents (Bobbing at different speeds) */}
              <motion.div
                animate={{ y: [-20, 20, -20], rotate: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full blur-3xl opacity-60 z-20"
              />
              <motion.div
                 animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-10 left-0 w-32 h-32 md:w-48 md:h-48 bg-black/20 rounded-full blur-3xl opacity-40 z-20"
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
            Explore Menu
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-40">
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
