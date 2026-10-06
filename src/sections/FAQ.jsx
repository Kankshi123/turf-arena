import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/siteData';
import SectionHeading from '../components/SectionHeading';

export default function FAQ() {
  const [open, setOpen] = useState(0); // First FAQ open by default

  return (
    <section id="faq" className="section bg-[#0a0a0a]">
      <div className="container relative z-10">
        <SectionHeading 
          eyebrow="Got Questions?"
          title="FREQUENTLY ASKED"
          highlight="QUESTIONS"
          subtitle="Everything you need to know about booking, facilities, and rules at The Collective Arena. Can't find your answer? Reach out to our team."
        />

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-colors ${open === i ? 'bg-[#111827] border-green-500/30' : 'bg-transparent border-white/10 hover:border-white/20'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className={`font-bold text-lg pr-4 ${open === i ? 'text-green-400' : 'text-white'}`} style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.5px' }}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 ${open === i ? 'bg-green-500 text-black rotate-180' : 'bg-white/5 text-gray-400'}`}>
                  ↓
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button 
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white hover:bg-white/10 transition-colors flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.3 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Support
            <span className="text-green-500">→</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
