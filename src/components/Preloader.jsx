import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BALL_COLORS = ['#22c55e', '#ef4444', '#facc15'];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 4 + 1;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 400);
      }
      setProgress(Math.floor(current));
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Animated Cricket Ball */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -60, 0, -30, 0],
              rotate: [0, 180, 360, 540, 720],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="38" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
              <path d="M40 2 Q55 20 55 40 Q55 60 40 78" stroke="#f9fafb" strokeWidth="2.5" fill="none" strokeDasharray="4 3" />
              <path d="M40 2 Q25 20 25 40 Q25 60 40 78" stroke="#f9fafb" strokeWidth="2.5" fill="none" strokeDasharray="4 3" />
              <circle cx="40" cy="40" r="38" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </svg>
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: '0 0 30px #ef444488, 0 0 60px #ef444433' }}
            />
          </motion.div>

          {/* Logo */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1
              className="text-4xl md:text-6xl text-white tracking-widest"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.15em' }}
            >
              THE COLLECTIVE
            </h1>
            <h2
              className="text-3xl md:text-5xl tracking-widest"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                background: 'linear-gradient(90deg, #22c55e, #4ade80)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.15em',
              }}
            >
              ARENA
            </h2>
            <p className="text-gray-500 text-sm mt-2 tracking-[0.3em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              Play · Compete · Own The Turf
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 md:w-80">
            <div className="flex justify-between text-xs text-gray-600 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span>Loading arena...</span>
              <span className="text-green-400 font-mono">{progress}%</span>
            </div>
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #22c55e, #4ade80)',
                  boxShadow: '0 0 10px #22c55e',
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Floating dots */}
          {BALL_COLORS.map((color, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: color,
                left: `${20 + i * 30}%`,
                top: `${20 + i * 15}%`,
                boxShadow: `0 0 10px ${color}`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
