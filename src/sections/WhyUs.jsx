import { motion } from 'framer-motion';
import { WHY_US } from '../data/siteData';
import SectionHeading from '../components/SectionHeading';

export default function WhyUs() {
  return (
    <section id="features" className="section bg-[#111827] relative">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="container relative z-10">
        <SectionHeading 
          eyebrow="The Arena Advantage"
          title="WHY THE COLLECTIVE"
          highlight="ARENA?"
          subtitle="We don't just provide a ground; we provide an experience. From FIFA-approved turfs to stadium-style floodlights, every detail is crafted for athletes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center items-stretch max-w-7xl mx-auto">
          {WHY_US.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group flex flex-col items-center bg-[#0a0a0a]/50 border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]"
              style={{
                padding: '40px 24px 32px',
                borderRadius: '24px',
                gap: '12px'
              }}
            >
              <div className="w-[72px] h-[72px] rounded-2xl bg-[#111827] border border-white/10 flex items-center justify-center text-4xl mb-2 group-hover:scale-110 group-hover:bg-green-500/20 group-hover:border-green-500 transition-all duration-300 shadow-lg shrink-0">
                {item.icon}
              </div>
              <h3 className="font-bold text-white m-0 px-2 leading-tight" style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(20px, 2vw, 24px)' }}>
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-[1.6] max-w-[90%] mx-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
