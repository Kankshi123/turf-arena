import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const letters = "PLAY. COMPETE.\nOWN THE TURF.".split('');

export default function Hero() {
  const beamRef1 = useRef(null);
  const beamRef2 = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    // GSAP flying ball
    if (ballRef.current) {
      gsap.fromTo(
        ballRef.current,
        { x: '-10vw', y: '30vh', rotate: 0, opacity: 0 },
        {
          x: '110vw',
          y: '-10vh',
          rotate: 720,
          opacity: 1,
          duration: 3.5,
          delay: 1.5,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(ballRef.current, { opacity: 0 });
            // Repeat
            setTimeout(() => {
              if (ballRef.current) {
                gsap.fromTo(
                  ballRef.current,
                  { x: '-10vw', y: '50vh', rotate: 0, opacity: 0 },
                  { x: '110vw', y: '10vh', rotate: 720, opacity: 1, duration: 4, delay: 5, ease: 'power2.inOut', repeat: -1, repeatDelay: 8 }
                );
              }
            }, 8000);
          },
        }
      );
    }
  }, []);

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTurfs = () => {
    document.querySelector('#turfs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Background image with parallax overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&auto=format&fit=crop&q=80"
          alt="Floodlit sports arena at night"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay + vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.85) 80%, rgba(10,10,10,1) 100%)',
          }}
        />
        {/* Green tint overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)' }}
        />
      </div>

      {/* Floodlight Beams */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          ref={beamRef1}
          className="floodlight-beam absolute"
          style={{
            top: '-10%',
            left: '15%',
            width: '3px',
            height: '80vh',
            background: 'linear-gradient(to bottom, rgba(250,204,21,0.5) 0%, rgba(250,204,21,0.15) 50%, transparent 100%)',
            transformOrigin: 'top center',
            filter: 'blur(8px)',
          }}
        />
        <div
          ref={beamRef2}
          className="floodlight-beam-2 absolute"
          style={{
            top: '-10%',
            right: '15%',
            width: '3px',
            height: '80vh',
            background: 'linear-gradient(to bottom, rgba(250,204,21,0.5) 0%, rgba(250,204,21,0.15) 50%, transparent 100%)',
            transformOrigin: 'top center',
            filter: 'blur(8px)',
          }}
        />
        {/* Floodlight sources */}
        <div className="absolute top-0 left-[15%] w-8 h-8 rounded-full bg-yellow-300 blur-xl opacity-70" />
        <div className="absolute top-0 right-[15%] w-8 h-8 rounded-full bg-yellow-300 blur-xl opacity-70" />
      </div>

      {/* Floating Cricket Ball */}
      <div
        ref={ballRef}
        className="absolute z-10 pointer-events-none"
        style={{ width: 50, height: 50, opacity: 0 }}
      >
        <svg viewBox="0 0 50 50" width="50" height="50">
          <circle cx="25" cy="25" r="23" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
          <path d="M25 2 Q33 13 33 25 Q33 37 25 48" stroke="white" strokeWidth="2" fill="none" strokeDasharray="3 2.5" />
          <path d="M25 2 Q17 13 17 25 Q17 37 25 48" stroke="white" strokeWidth="2" fill="none" strokeDasharray="3 2.5" />
        </svg>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', boxShadow: '0 0 20px #ef4444, 0 0 40px #ef444466' }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-8 opacity-10 float-anim pointer-events-none select-none" style={{ fontSize: '4rem' }}>🏏</div>
      <div className="absolute bottom-1/3 right-8 opacity-10 float-anim-2 pointer-events-none select-none" style={{ fontSize: '3rem' }}>⚽</div>
      <div className="absolute top-1/3 right-1/4 opacity-8 float-anim pointer-events-none select-none" style={{ fontSize: '2rem', animationDelay: '1s' }}>🏀</div>

      {/* Main Content */}
      <div className="relative z-10 text-center container pt-24">
        {/* Pre-badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-[0.2em] uppercase"
          style={{
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.3)',
            color: '#4ade80',
            fontFamily: "'Inter', sans-serif",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Hyderabad's #1 Sports Venue
        </motion.div>

        {/* Main Headline with letter-by-letter reveal */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-black leading-none text-center"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3.5rem, 12vw, 10rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            {['PLAY.', 'COMPETE.', 'OWN THE TURF.'].map((line, lineIndex) => (
              <motion.div
                key={lineIndex}
                className="block"
                style={{
                  color: lineIndex === 2
                    ? 'transparent'
                    : lineIndex === 0
                    ? '#f9fafb'
                    : '#e5e7eb',
                  background: lineIndex === 2
                    ? 'linear-gradient(135deg, #22c55e, #4ade80, #86efac)'
                    : undefined,
                  WebkitBackgroundClip: lineIndex === 2 ? 'text' : undefined,
                  WebkitTextFillColor: lineIndex === 2 ? 'transparent' : undefined,
                  backgroundClip: lineIndex === 2 ? 'text' : undefined,
                }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 + lineIndex * 0.2, ease: [0.33, 1, 0.68, 1] }}
              >
                {line}
              </motion.div>
            ))}
          </motion.h1>
        </div>

        {/* Sub-text */}
        <motion.p
          className="text-gray-400 text-base md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Premium floodlit turfs for cricket, football, pickleball & more.
          Night matches, pro facilities, and tournament-grade experience.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <button
            onClick={scrollToBooking}
            className="ripple-effect group relative px-8 py-4 rounded-xl font-bold text-lg text-black w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              boxShadow: '0 0 30px rgba(34,197,94,0.5), 0 4px 20px rgba(0,0,0,0.3)',
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: '0.05em',
            }}
          >
            ⚡ Book a Slot
          </button>
          <button
            onClick={scrollToTurfs}
            className="group px-8 py-4 rounded-xl font-bold text-lg text-white w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: '0.05em',
            }}
          >
            🏟️ Explore Turfs
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          {[
            { val: '5000+', label: 'Matches' },
            { val: '3', label: 'Premium Turfs' },
            { val: '4.9★', label: 'Rating' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-black text-green-400"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {s.val}
              </div>
              <div className="text-xs text-gray-500 tracking-widest uppercase mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-green-500 to-transparent rounded-full"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
