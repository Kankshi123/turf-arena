import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRICING } from '../data/siteData';
import SectionHeading from '../components/SectionHeading';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="section bg-[#0a0a0a]">
      <div className="container relative z-10" style={{ maxWidth: '1200px' }}>
        
        {/* HEADING (uses shared component) */}
        <SectionHeading 
          eyebrow="Transparent Rates"
          title="CHOOSE YOUR"
          highlight="TIME"
        />
        
        {/* PRICING TOGGLE */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-[56px] mt-[-16px]" // slight mt tweak to counteract SectionHeading default bottom margin if needed, but per prompt: margin-bottom 56px below heading. Actually, SectionHeading has mb clamp. I will just rely on the layout.
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.1 }}
        >
          <span className={`text-[16px] font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Pay Per Hour</span>
          <button 
            className="w-[56px] h-[30px] rounded-full bg-white/10 relative flex items-center px-1 transition-colors hover:bg-white/20"
            style={{ backgroundColor: isAnnual ? '#22c55e' : '' }}
            onClick={() => setIsAnnual(!isAnnual)}
            aria-label="Toggle pricing"
          >
            <motion.div 
              className="w-[24px] h-[24px] rounded-full bg-white shadow-sm"
              animate={{ x: isAnnual ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-[16px] font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly Pass</span>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(24px,3vw,40px)] items-stretch max-w-[1100px] mx-auto pt-6 max-lg:max-w-[420px]">
          {PRICING.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-[40px_32px_32px] rounded-[24px] bg-[#111827] border ${plan.isPopular ? 'border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.15)] z-10' : 'border-white/5'} transition-all`}
              style={{ transform: plan.isPopular ? 'scale(1.04)' : 'scale(1)' }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-green-500 text-black text-[12px] font-bold tracking-[0.1em] rounded-full whitespace-nowrap z-[2] uppercase">
                  Most Popular
                </div>
              )}

              {/* Card Header (Title + Time) */}
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-[6px]" style={{ fontFamily: "'Oswald', sans-serif", color: plan.color }}>
                  {plan.name}
                </h3>
                <div className="text-gray-400 text-sm font-medium tracking-wider mb-[24px] uppercase">
                  {plan.time}
                </div>
              </div>

              {/* Price Block */}
              <div className="flex items-baseline justify-center gap-[6px] mb-[28px]">
                <span className="text-gray-400 font-bold self-start mt-[0.35em]" style={{ fontSize: '0.45em' }}>₹</span>
                <span className="text-5xl md:text-6xl font-black text-white leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", fontVariantNumeric: 'tabular-nums' }}>
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm font-medium">/ hour</span>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 w-full mb-[24px]"></div>

              {/* Feature List */}
              <div className="flex-1 flex flex-col items-center">
                <ul className="list-none p-0 m-0 w-fit space-y-[14px]">
                  {plan.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-center gap-[12px] text-[15px] leading-[1.4] text-gray-300">
                      <svg className="w-[20px] h-[20px] shrink-0" style={{ color: plan.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button 
                className={`w-full mt-auto mt-[32px] px-[24px] py-[16px] rounded-[14px] font-bold text-[15px] tracking-[0.08em] uppercase text-center transition-all ${
                  plan.isPopular 
                    ? 'bg-green-500 text-black hover:bg-green-400 hover:-translate-y-[2px]' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-green-500 hover:text-black hover:border-green-500 hover:-translate-y-[2px]'
                }`}
              >
                Book This Slot
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
