import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/siteData';

import SectionHeading from '../components/SectionHeading';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleManualChange = (idx) => {
    clearInterval(timerRef.current);
    setActive(idx);
    startTimer();
  };

  return (
    <section id="testimonials" className="section bg-[#111827] relative overflow-hidden" style={{ paddingBlock: 'clamp(80px, 10vw, 140px)' }}>
      <div className="container relative z-10" style={{ maxWidth: '1200px', width: '100%' }}>
        
        <SectionHeading 
          eyebrow="Word on the Pitch"
          title="PLAYER"
          highlight="STORIES"
        />

        <div className="w-full relative">
          <div className="relative min-h-[360px] flex items-center justify-center w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full flex justify-center"
              >
                <div className="relative flex flex-col items-center text-center max-w-[860px] mx-auto w-full">
                  
                  {/* Huge quote mark background */}
                  <div 
                    className="absolute text-[24rem] leading-none text-white font-black pointer-events-none font-serif select-none"
                    style={{ top: '-40px', left: '-20px', opacity: 0.04, zIndex: -1 }}
                  >
                    "
                  </div>

                  <div className="flex justify-center mb-[28px] gap-[6px]">
                    {[...Array(TESTIMONIALS[active].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                  
                  <h3 
                    className="font-medium text-white mb-[40px]" 
                    style={{ 
                      fontFamily: "'Inter', sans-serif", 
                      fontSize: 'clamp(20px, 2.6vw, 32px)',
                      lineHeight: 1.5,
                      maxWidth: '780px',
                      textWrap: 'balance'
                    }}
                  >
                    "{TESTIMONIALS[active].quote}"
                  </h3>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-2xl font-bold text-black mb-[16px] shadow-[0_0_20px_rgba(34,197,94,0.3)] shrink-0">
                      {TESTIMONIALS[active].avatar}
                    </div>
                    <div className="font-bold text-lg text-white mb-[6px]" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '1px' }}>
                      {TESTIMONIALS[active].name}
                    </div>
                    <div className="text-[15px] text-gray-400 m-0">
                      {TESTIMONIALS[active].role} • <span className="text-green-500">{TESTIMONIALS[active].sport}</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-[10px] mt-[40px]">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => handleManualChange(i)}
                className={`h-[8px] rounded-full transition-all duration-300 ${
                  active === i ? 'w-[40px] bg-green-500' : 'w-[8px] bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
