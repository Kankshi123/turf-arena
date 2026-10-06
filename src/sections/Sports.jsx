import { useState } from 'react';
import { motion } from 'framer-motion';
import { SPORTS } from '../data/siteData';
import SectionHeading from '../components/SectionHeading';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Sports() {
  return (
    <section id="sports" className="section bg-[#0a0a0a]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500 rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500 rounded-full blur-[150px] opacity-[0.02] pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading 
          eyebrow="Sports We Offer"
          title="PLAY YOUR"
          highlight="GAME"
          subtitle="Experience your favorite sports on premium turfs. Fully equipped, floodlit, and meticulously maintained for peak performance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {SPORTS.map((sport, i) => (
            <SportCard key={sport.id} sport={sport} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SportCard({ sport, i }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative rounded-[20px] overflow-hidden tilt-card aspect-[3/4] cursor-pointer bg-[#111827] border border-white/5"
    >
      {/* Image background */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <img
            src={sport.image}
            alt={sport.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#1f2937]">
            <span className="text-6xl opacity-20">{sport.icon}</span>
          </div>
        )}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.2) 100%)',
          }}
        />
        {/* Colored overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
          style={{ background: sport.color, mixBlendMode: 'overlay' }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
        <div className="flex items-center gap-4 mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shrink-0">
            {sport.icon}
          </div>
          <h3
            className="text-3xl font-bold text-white tracking-wider leading-none"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {sport.name}
          </h3>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto overflow-hidden transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
          {sport.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          {sport.features.slice(0, 2).map((feat, idx) => (
            <span key={idx} className="text-xs px-2 py-1 rounded bg-white/10 text-white backdrop-blur-sm border border-white/5">
              {feat}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
