import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES } from '../data/siteData';

import SectionHeading from '../components/SectionHeading';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);
  const containerRef = useRef(null);

  const categories = ['All', ...new Set(GALLERY_IMAGES.map(img => img.category))];
  const filtered = filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="gallery" className="section bg-[#0a0a0a] relative overflow-hidden" ref={containerRef}>
      <div className="container relative z-10">
        <SectionHeading 
          eyebrow="Inside The Arena"
          title="FEEL THE"
          highlight="ENERGY"
        />

        <div className="text-center mb-12 max-w-[700px] mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  filter === cat 
                    ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.4)]' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => {
              // Creating a staggered parallax effect for different columns
              const y = i % 4 === 0 ? y1 : i % 4 === 1 ? y2 : i % 4 === 2 ? y3 : y1;
              const isLarge = i === 0 || i === 7;

              return (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                    isLarge ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                  }`}
                  onClick={() => setSelectedImg(img)}
                >
                  <motion.div className="w-full h-full" style={{ y, height: '120%' }}>
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="font-bold tracking-widest uppercase text-sm text-green-400 mb-1">{img.category}</div>
                      <div className="text-xl" style={{ fontFamily: "'Oswald', sans-serif" }}>View Image</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors z-[101]"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              ×
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImg.src} alt={selectedImg.alt} className="w-full h-full object-contain" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="text-green-400 font-bold uppercase tracking-widest text-sm mb-1">{selectedImg.category}</div>
                <div className="text-white text-xl">{selectedImg.alt}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
