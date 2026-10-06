import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../data/siteData';
import { useCountUp } from '../hooks/useScrollProgress';

function StatItem({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const countRef = useCountUp(stat.value, 2000, stat.decimals || 0, inView);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-3xl mb-4" role="img" aria-label={stat.label}>{stat.icon}</div>
      <div
        className="font-black leading-none mb-2"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          background: 'linear-gradient(135deg, #22c55e, #4ade80)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        <span ref={countRef}>{stat.value}</span>
        <span>{stat.suffix}</span>
      </div>
      <div
        className="text-gray-400 text-sm tracking-widest uppercase"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden section" style={{ background: 'rgba(10,10,10,1)' }}>
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.5), transparent)' }} />
      
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/10">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>

      {/* Marquee ticker below stats */}
      <div
        className="overflow-hidden py-4 mt-16 border-y border-white/10"
        style={{ background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="marquee-track flex items-center">
          {[...Array(4)].map((_, i) =>
            ['⚡ BOOK YOUR SLOT NOW', '🏏 BOX CRICKET', '⚽ TURF FOOTBALL', '🏓 PICKLEBALL', '🏀 BASKETBALL', '🏸 BADMINTON', '🌿 PREMIUM TURFS', '💡 LED FLOODLIGHTS', '🏆 TOURNAMENTS EVERY WEEK'].map((item, j) => (
              <span
                key={`${i}-${j}`}
                className="mx-8 text-sm font-semibold tracking-[0.25em] uppercase whitespace-nowrap flex items-center gap-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: j % 3 === 0 ? '#22c55e' : j % 3 === 1 ? '#9ca3af' : '#ef4444',
                }}
              >
                {item}
              </span>
            ))
          )}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.3), transparent)' }} />
    </section>
  );
}
