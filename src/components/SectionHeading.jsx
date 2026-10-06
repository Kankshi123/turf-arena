import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, highlight, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-[800px] mx-auto mb-[clamp(40px,6vw,72px)]">
      {eyebrow && (
        <motion.div
          className="text-green-500 font-bold uppercase text-sm mb-4 tracking-[0.3em]"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {eyebrow}
        </motion.div>
      )}
      
      <motion.h2
        className="text-5xl md:text-7xl font-black text-white m-0 mb-5 leading-[1.05] w-full text-center flex flex-wrap justify-center items-center gap-x-4"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.1 }}
      >
        <span>{title}</span>
        {highlight && (
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #22c55e' }}>
            {highlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-gray-400 text-sm md:text-base leading-[1.6] max-w-[640px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
