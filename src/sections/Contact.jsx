import { motion } from 'framer-motion';
import { BRAND } from '../data/siteData';

import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="section bg-[#111827]">
      <div className="container relative z-10">
        <SectionHeading 
          eyebrow="Get In Touch"
          title="FIND THE"
          highlight="ARENA"
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Info Side */}
          <div className="w-full lg:w-2/5 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[80px]" />
            
            <h3 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>Contact Information</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Address</div>
                  <div className="text-white">{BRAND.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0">
                  📞
                </div>
                <div>
                  <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Phone / WhatsApp</div>
                  <div className="text-white text-lg font-medium">{BRAND.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0">
                  ✉️
                </div>
                <div>
                  <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Email</div>
                  <div className="text-white">{BRAND.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0">
                  ⏰
                </div>
                <div>
                  <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Hours</div>
                  <div className="text-gray-300"><span className="text-white w-24 inline-block">Mon - Fri:</span> {BRAND.hours.weekday}</div>
                  <div className="text-gray-300"><span className="text-white w-24 inline-block">Sat - Sun:</span> {BRAND.hours.weekend}</div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
              <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">Follow Us</div>
              <div className="flex gap-4">
                {Object.entries(BRAND.social).map(([platform, url]) => (
                  <a key={platform} href={url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-500 hover:text-black flex items-center justify-center transition-all text-sm capitalize">
                    {platform[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="w-full lg:w-3/5 min-h-[400px] lg:min-h-full">
            <iframe 
              src={BRAND.mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%) contrast(120%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Arena Location"
              className="w-full h-full object-cover grayscale"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
