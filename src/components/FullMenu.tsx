"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Star } from "lucide-react";

const menuCategories = ["All", "Coffee", "Desserts", "Pastries"];

const fullMenuItems = [
  {
    id: 1,
    title: "Signature Honey Cake",
    category: "Desserts",
    price: "SAR 35",
    rating: 5.0,
    reviews: 124,
    image: "/images/honey_cake_1785415872758_transparent.png",
  },
  {
    id: 2,
    title: "Classic Medovik",
    category: "Desserts",
    price: "SAR 38",
    rating: 4.8,
    reviews: 89,
    image: "/images/medovik_1785415886099_transparent.png",
  },
  {
    id: 3,
    title: "Specialty Coffee",
    category: "Coffee",
    price: "SAR 22",
    rating: 4.9,
    reviews: 210,
    image: "/images/specialty_coffee_1785415898575_transparent.png",
  },
  {
    id: 4,
    title: "Fresh Croissant",
    category: "Pastries",
    price: "SAR 18",
    rating: 4.7,
    reviews: 156,
    image: "/images/croissant_1785415912494_transparent.png",
  },
];

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? fullMenuItems 
    : fullMenuItems.filter(item => item.category === activeCategory);

  return (
    <section id="full-menu" className="w-full bg-[#031516] py-24 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header & Categories */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2 className="font-display text-4xl md:text-5xl text-locais-100">
            Full <span className="italic text-terracotta">Menu</span>
          </h2>
          
          <div className="flex gap-2 md:gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {menuCategories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full whitespace-nowrap font-medium text-sm transition-colors ${activeCategory === cat ? 'bg-terracotta text-white' : 'bg-[#0A2628] text-locais-300 hover:text-white'}`}
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
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                 <Image 
                   src={item.image} 
                   alt={item.title} 
                   fill
                   className="object-contain"
                 />
              </div>

              {/* Content */}
              <div className="mt-4 flex flex-col flex-1">
                <p className="text-locais-400 text-sm font-sans uppercase tracking-wider mb-1">{item.category}</p>
                <h3 className="font-display text-2xl text-white mb-2 leading-tight">{item.title}</h3>
                
                {/* Reviews */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={`${i < Math.floor(item.rating) ? 'fill-gold text-gold' : 'fill-white/10 text-white/10'}`} />
                  ))}
                  <span className="text-locais-300 text-xs ml-1">({item.reviews})</span>
                </div>
                
                {/* Footer (Price) */}
                <div className="mt-auto flex justify-between items-end">
                  <span className="font-sans font-bold text-xl text-white">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
