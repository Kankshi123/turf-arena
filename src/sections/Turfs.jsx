import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TURFS } from '../data/siteData';

export default function Turfs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="turfs" className="section relative bg-[#111827]" ref={containerRef}>
      {/* Decorative text */}
      <motion.div 
        className="absolute top-20 left-0 text-[15rem] font-black text-white/5 whitespace-nowrap pointer-events-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif", x: useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]) }}
      >
        OUR TURFS OUR TURFS
      </motion.div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between items-center text-center lg:text-left gap-6 mb-[clamp(40px,6vw,72px)] w-full">
          <div className="flex-1 flex flex-col items-center lg:items-start w-full">
            <motion.div
              className="text-green-500 font-bold uppercase text-sm mb-4 tracking-[0.3em]"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The Battlegrounds
            </motion.div>
            <motion.h2
              className="text-5xl md:text-7xl font-black text-white m-0 leading-[1.05]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
            >
              PREMIUM <span className="text-transparent inline" style={{ WebkitTextStroke: '2px #22c55e' }}>FACILITIES</span>
            </motion.h2>
          </div>
          <motion.div 
            className="text-gray-400 max-w-[640px] lg:max-w-md text-sm md:text-base leading-[1.6]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, delay: 0.2 }}
          >
            Experience world-class synthetic turf, stadium-grade LED floodlights, and professional dimensions designed for the ultimate competitive edge.
          </motion.div>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {TURFS.map((turf) => (
            <TurfCard key={turf.id} turf={turf} y={y} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TurfCard({ turf, y }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div 
      className="flex flex-col lg:flex-row gap-8 bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-10 hover:bg-white/[0.04] transition-colors"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Image */}
      <div className="w-full lg:w-[45%] shrink-0 overflow-hidden rounded-2xl relative group h-[300px] lg:h-[400px]">
        {!imgError ? (
          <motion.img 
            src={turf.image} 
            alt={turf.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ y }}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1f2937]">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Image Unavailable</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        
        {/* Floating tags */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          <div className="bg-black/40 backdrop-blur-md px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-white shadow-lg border border-white/20 flex items-center gap-2">
            <span>📏</span> {turf.size}
          </div>
          <div className="bg-black/40 backdrop-blur-md px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-white shadow-lg border border-white/20 flex items-center gap-2">
            <span>👥</span> {turf.capacity}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center">
        <div className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: turf.color }}>
          {turf.sport}
        </div>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {turf.name}
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
          {turf.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 shrink-0 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs border border-green-500/30">
                ✓
              </div>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 md:mt-auto pt-4 border-t border-white/5">
          <button 
            className="group flex items-center justify-center sm:justify-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Book This Turf</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
