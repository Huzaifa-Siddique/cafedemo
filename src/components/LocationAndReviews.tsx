"use client";

import { motion } from "framer-motion";

export default function LocationAndReviews() {
  return (
    <section className="relative w-full bg-locais-900 py-24 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight drop-shadow-md">
            A New Spot in <br/>
            <span className="italic text-sage">Downtown</span>
          </h2>
          
          <p className="font-sans text-locais-300 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Loving our new spot, cozier and quieter than ever. We believe in exceptional service, delicious bakery items, and a chill atmosphere perfect for relaxing or enjoying a good conversation.
          </p>

          <p className="font-sans text-locais-400 text-base md:text-lg mb-12 max-w-lg leading-relaxed">
            Our baristas are dedicated to serving the finest coffee, while our bakers ensure every dessert is absolutely mouthwatering. Whether you choose our outdoor seating or our cozy interior, you'll feel right at home.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://maps.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-locais-100 text-locais-900 rounded-full font-medium hover:bg-white transition-colors border border-transparent"
            >
              Get Directions
            </a>
            <a 
              href="https://www.instagram.com/locais.sa?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-locais-800 text-locais-100 flex items-center justify-center rounded-full hover:bg-locais-700 transition-colors border border-locais-700/50"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Map / Location Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full bg-[#051F20] rounded-[2rem] min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden border border-white/5 relative shadow-2xl"
        >
           <iframe 
             src="https://maps.google.com/maps?q=LOCAIS,+Abdullah+Al+Kharji,+Al+Aqiq,+Riyadh+13515,+Saudi+Arabia&t=&z=15&ie=UTF8&iwloc=&output=embed" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen={false} 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="absolute inset-0"
           ></iframe>
           <div className="absolute inset-0 pointer-events-none bg-locais-900/20" />
        </motion.div>
      </div>
    </section>
  );
}
