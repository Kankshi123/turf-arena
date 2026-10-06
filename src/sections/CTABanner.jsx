import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="section relative overflow-hidden bg-green-500">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
      
      {/* Giant Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-black/5 whitespace-nowrap pointer-events-none select-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
        THE COLLECTIVE ARENA
      </div>

      <div className="container relative z-10 text-center">
        <motion.h2
          className="text-5xl md:text-8xl font-black text-black mb-6 leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          READY TO <span className="text-white">DOMINATE?</span>
        </motion.h2>
        <motion.p
          className="text-black/80 font-bold text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.1 }}
        >
          Stop waiting on the sidelines. Book your premium turf slot today and experience the game like never before.
        </motion.p>
        <motion.button
          onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-xl text-white bg-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.2 }}
        >
          <span className="relative z-10 tracking-widest uppercase">Book Your Slot Now ⚡</span>
          <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
        </motion.button>
      </div>
    </section>
  );
}
