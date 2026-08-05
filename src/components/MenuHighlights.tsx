"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import WaveDivider from "./WaveDivider";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function MenuHighlights() {
  const { locale, t } = useLanguage();
  const { addToCart } = useCart();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const menuItems = [
    {
      id: "signature-v60",
      title: locale === "ar" ? "في 60 المميزة" : "Signature V60",
      price: locale === "ar" ? "٣٥٠ ريال" : "SAR 350",
      numericPrice: 350,
      desc: locale === "ar" ? "بن مختص محضر بعناية يدوياً لتعزيز النكهات الإيحائية." : "Premium specialty beans hand-poured to enhance tasting notes.",
      image: "/images/specialty_coffee_1785415898575_transparent.png",
      bgColor: "bg-gradient-to-b from-terracotta to-[#753c2b]",
      textColor: "text-white",
    },
    {
      id: "cortado",
      title: locale === "ar" ? "كورتادو كلاسيك" : "Classic Cortado",
      price: locale === "ar" ? "٣٨٠ ريال" : "SAR 380",
      numericPrice: 380,
      desc: locale === "ar" ? "إسبريسو غني مع كمية متساوية من الحليب المبخر بسلاسة." : "Rich espresso cut with an equal amount of silky steamed milk.",
      image: "/images/real_internet_coffee.png",
      bgColor: "bg-gradient-to-b from-sand to-[#b5a386]",
      textColor: "text-espo-900",
    },
    {
      id: "coffee",
      title: locale === "ar" ? "قهوة مختصة" : "Specialty Coffee",
      price: locale === "ar" ? "٢٢٠ ريال" : "SAR 220",
      numericPrice: 220,
      desc: locale === "ar" ? "حبوب بن محمصة بعناية ومحضرة بإتقان بواسطة خبراء القهوة لدينا." : "Premium roasted beans crafted to perfection by our master baristas.",
      image: "/images/hero_coffee_1785415845728_transparent.png",
      bgColor: "bg-gradient-to-b from-sage to-[#4a6353]",
      textColor: "text-white",
    },
    {
      id: "croissant",
      title: locale === "ar" ? "كرواسون طازج" : "Fresh Croissant",
      price: locale === "ar" ? "١٨٠ ريال" : "SAR 180",
      numericPrice: 180,
      desc: locale === "ar" ? "طبقات هشة ومقرمشة تُخبز طازجة كل صباح." : "Flaky, buttery perfection baked fresh every morning.",
      image: "/images/croissant_1785415912494_transparent.png",
      bgColor: "bg-gradient-to-b from-gold to-[#94783b]",
      textColor: "text-espo-900",
    },
  ];

  return (
    <div id="menu" className="relative w-full bg-espo-900 pt-32 pb-32 overflow-hidden">
      
      <div className="hidden md:block absolute inset-0 z-0 opacity-40 pointer-events-none">
         <motion.div 
           animate={{ rotate: 360, scale: [1, 1.1, 1] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute -top-1/4 -end-1/4 w-[800px] h-[800px] bg-terracotta rounded-full blur-[120px]" 
         />
         <motion.div 
           animate={{ rotate: -360, scale: [1, 1.2, 1] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/3 -start-1/4 w-[600px] h-[600px] bg-sage rounded-full blur-[100px]" 
         />
         <motion.div 
           animate={{ y: [0, -50, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -bottom-1/4 end-1/4 w-[700px] h-[700px] bg-gold rounded-[40%_60%_70%_30%] blur-[100px]" 
         />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 mb-12">
         <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espo-100 mb-4 text-center drop-shadow-lg">
           {t.menuHighlights.title} <span className="italic text-terracotta">{t.menuHighlights.subtitle}</span>
         </h2>
      </div>

      <section className="relative z-10 w-full min-h-[600px] md:h-[70vh] flex flex-col md:flex-row overflow-hidden max-w-[1600px] mx-auto md:rounded-3xl shadow-2xl border border-white/10">
        {menuItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <motion.div
              key={item.id}
              className={`relative flex-1 ${item.bgColor} cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-black/5 last:border-b-0 last:border-r-0 min-h-[100px] md:min-h-0`}
              onMouseEnter={() => setHoveredIndex(index)}
              layout
              animate={{
                flex: isHovered ? 4 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              style={{ willChange: "flex, transform" }}
            >
              {/* Title (when not hovered) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={`font-display text-xl md:text-2xl lg:text-3xl md:-rotate-90 origin-center ${item.textColor} tracking-wider opacity-90 drop-shadow-md`}>
                  {item.title}
                </h3>
              </motion.div>

              {/* Expanded Content */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end overflow-hidden"
                  >
                    {/* Floating Product Image */}
                    <motion.div
                      initial={{ y: 50, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.2 }}
                      className="absolute inset-0 top-0 bottom-32 md:bottom-40 flex items-center justify-center pointer-events-none"
                    >
                      <div className="relative w-[180px] h-[180px] md:w-full md:h-full max-w-[400px] max-h-[400px]">
                         {/* High-Performance Ground Cast Shadow */}
                         <div className="absolute top-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-32 h-32 md:w-48 md:h-48 bg-[radial-gradient(circle,rgba(0,0,0,0.6)_0%,transparent_60%)] scale-y-[0.3] translate-y-[80px] md:translate-y-[120px] z-0" />
                         
                         <Image 
                           src={item.image} 
                           alt={item.title} 
                           fill
                           className="object-contain relative z-10 md:drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] scale-[1.1] md:scale-[1.2]"
                         />
                      </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className={`relative z-10 ${item.textColor} bg-black/10 md:bg-black/5 md:backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/10 shadow-xl`}
                    >
                      <div className="flex justify-between items-end mb-2 md:mb-4">
                        <h3 className="font-display text-xl md:text-3xl lg:text-4xl leading-tight drop-shadow-md">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-4">
                          <span className="font-sans font-bold text-lg md:text-xl drop-shadow-md whitespace-nowrap">{item.price}</span>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart({ id: item.id, title: item.title, price: item.numericPrice, image: item.image });
                            }}
                            className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-transform hover:scale-110 border border-white/20 shadow-[0_4px_14px_rgba(0,0,0,0.2)]"
                            aria-label="Add to cart"
                          >
                            <ShoppingCart size={20} />
                          </button>
                        </div>
                      </div>
                      <p className="font-sans text-xs md:text-base opacity-90 max-w-sm mb-4 md:mb-6 drop-shadow-sm">
                        {item.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </section>

      {/* View Full Menu Button */}
      <div className="relative z-20 mt-12 flex justify-center">
         <button 
           onClick={() => document.getElementById('full-menu')?.scrollIntoView({ behavior: 'smooth' })}
           className="px-8 py-4 bg-terracotta text-white rounded-full font-sans font-medium shadow-[0_10px_30px_rgba(169,90,66,0.3)] hover:scale-105 transition-transform border border-white/10"
         >
           {t.menuHighlights.viewFull}
         </button>
      </div>
      
    </div>
  );
}

