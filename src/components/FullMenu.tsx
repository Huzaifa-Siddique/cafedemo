"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Star, ShoppingCart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";

export default function FullMenu() {
  const { locale, t } = useLanguage();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState(locale === "ar" ? "الكل" : "All");

  const menuCategories = [
    locale === "ar" ? "الكل" : "All",
    t.fullMenu.coffee,
    t.fullMenu.dessert,
    locale === "ar" ? "معجنات" : "Pastries"
  ];

  const fullMenuItems = [
    {
      id: 1,
      title: locale === "ar" ? "في 60 المميزة" : "Signature V60",
      category: t.fullMenu.coffee,
      price: locale === "ar" ? "٣٥٠ روبية" : "PKR 350",
      numericPrice: 350,
      rating: 5.0,
      reviews: 124,
      image: "/images/specialty_coffee_1785415898575_transparent.png",
    },
    {
      id: 2,
      title: locale === "ar" ? "كورتادو كلاسيك" : "Classic Cortado",
      category: t.fullMenu.coffee,
      price: locale === "ar" ? "٣٨٠ روبية" : "PKR 380",
      numericPrice: 380,
      rating: 4.8,
      reviews: 89,
      image: "/images/real_internet_coffee.png",
    },
    {
      id: 3,
      title: locale === "ar" ? "براوني الشوكولاتة" : "Chocolate Brownie",
      category: t.fullMenu.dessert,
      price: locale === "ar" ? "٢٢٠ روبية" : "PKR 220",
      numericPrice: 220,
      rating: 4.9,
      reviews: 210,
      image: "/images/honey_cake_1785415872758_transparent.png",
    },
    {
      id: 4,
      title: locale === "ar" ? "كرواسون طازج" : "Fresh Croissant",
      category: locale === "ar" ? "معجنات" : "Pastries",
      price: locale === "ar" ? "١٨٠ روبية" : "PKR 180",
      numericPrice: 180,
      rating: 4.7,
      reviews: 156,
      image: "/images/croissant_1785415912494_transparent.png",
    },
  ];

  const filteredItems = (activeCategory === "All" || activeCategory === "الكل") 
    ? fullMenuItems 
    : fullMenuItems.filter(item => item.category === activeCategory);

  return (
    <section id="full-menu" className="w-full bg-[#031516] py-24 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header & Categories */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2 className="font-display text-4xl md:text-5xl text-espo-100">
            {t.fullMenu.title} <span className="italic text-terracotta">{t.fullMenu.subtitle}</span>
          </h2>
          
          <div className="flex gap-2 md:gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {menuCategories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full whitespace-nowrap font-medium text-sm transition-colors ${activeCategory === cat ? 'bg-terracotta text-white' : 'bg-[#0A2628] text-espo-300 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mt-20">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-[#0A2628] rounded-[2rem] p-6 relative flex flex-col pt-24 hover:-translate-y-2 transition-transform duration-300 border border-white/5 shadow-2xl">
              
              {/* Product Image popping out */}
              <div className="absolute -top-16 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-48 h-48 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                 <Image 
                   src={item.image} 
                   alt={item.title} 
                   fill
                   className="object-contain"
                 />
              </div>

              {/* Content */}
              <div className="mt-4 flex flex-col flex-1">
                <p className="text-espo-400 text-sm font-sans uppercase tracking-wider mb-1">{item.category}</p>
                <h3 className="font-display text-2xl text-white mb-2 leading-tight">{item.title}</h3>
                
                {/* Reviews */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={`${i < Math.floor(item.rating) ? 'fill-gold text-gold' : 'fill-white/10 text-white/10'}`} />
                  ))}
                  <span className="text-espo-300 text-xs ms-1">({item.reviews})</span>
                </div>
                
                {/* Footer (Price & Add to Cart) */}
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-sans font-bold text-xl text-white">{item.price}</span>
                  <button 
                    onClick={() => addToCart({ id: item.id.toString(), title: item.title, price: item.numericPrice, image: item.image })}
                    className="bg-terracotta hover:bg-[#8f4633] text-white p-2 rounded-full transition-transform hover:scale-110 active:scale-95 shadow-[0_4px_14px_rgba(169,90,66,0.4)]"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

