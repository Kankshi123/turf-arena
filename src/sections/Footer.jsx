import { BRAND } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Huge Brand Text Background */}
      <div className="absolute bottom-0 left-0 right-0 text-[18vw] font-black text-white/5 leading-none whitespace-nowrap text-center pointer-events-none select-none overflow-hidden" style={{ fontFamily: "'Bebas Neue', sans-serif", transform: 'translateY(25%)' }}>
        ARENA
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1 text-center md:text-left">
            <div className="text-3xl font-black text-white mb-2 tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>THE COLLECTIVE</div>
            <div className="text-xl font-bold text-green-500 tracking-[0.2em] mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>ARENA</div>
            <p className="text-gray-400 text-sm mb-6">{BRAND.tagline}</p>
            <div className="flex gap-4 justify-center md:justify-start">
              {Object.entries(BRAND.social).map(([platform, link]) => (
                <a key={platform} href={link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-500 hover:border-green-500 transition-all capitalize text-sm">
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Sports', 'Turfs', 'Pricing', 'Gallery', 'Events'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-green-500 transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Cancellation Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Rules & Regulations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for tournament updates and special offers.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-green-500" />
              <button className="bg-green-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-green-400 transition-colors text-sm">→</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors text-sm font-bold uppercase tracking-widest">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
