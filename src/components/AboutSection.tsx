"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-32 bg-locais-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-locais-800/30 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-locais-100">
            A New Spot in <br />
            <span className="text-locais-400 italic">Downtown</span>
          </h2>
          <p className="text-locais-100/80 font-sans leading-relaxed text-lg">
            Loving our new spot, cozier and quieter than ever. We believe in exceptional service, delicious bakery items, and a chill atmosphere perfect for relaxing or enjoying a good conversation.
          </p>
          <p className="text-locais-100/60 font-sans leading-relaxed">
            Our baristas are dedicated to serving the finest coffee, while our bakers ensure every dessert is absolutely mouthwatering. Whether you choose our outdoor seating or our cozy interior, you'll feel right at home.
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
            <div className="absolute inset-0 bg-gradient-to-tr from-locais-900/40 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 z-10">
              <p className="font-sans text-white/90 text-sm uppercase tracking-widest font-semibold">The Ambience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
