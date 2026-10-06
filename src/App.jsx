import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import ReactLenis from 'lenis/react'
import { useCustomCursor } from './hooks/useCustomCursor'
import { useScrollProgress } from './hooks/useScrollProgress'

import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import StatsStrip from './sections/StatsStrip'
import Sports from './sections/Sports'
import Turfs from './sections/Turfs'
import Booking from './sections/Booking'
import Pricing from './sections/Pricing'
import Tournaments from './sections/Tournaments'
import WhyUs from './sections/WhyUs'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTABanner from './sections/CTABanner'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function AppContent() {
  const { dotRef, ringRef } = useCustomCursor()
  const scrollRef = useScrollProgress()

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
      <div ref={scrollRef} className="scroll-progress" />
      <div className="grain-overlay" />
      <Toaster position="top-center" toastOptions={{ style: { background: '#1a1a2e', color: '#fff', border: '1px solid #22c55e' } }} />

      <Navbar />
      
      <main>
        <Hero />
        <StatsStrip />
        <Sports />
        <Turfs />
        <Booking />
        <Pricing />
        <Tournaments />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>

      <Footer />
      
      {/* Mobile Sticky Book Now */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <button 
          onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full py-4 bg-green-500 text-black font-black text-lg rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.5)] border-2 border-green-400 flex items-center justify-center gap-2"
        >
          ⚡ BOOK YOUR SLOT
        </button>
      </div>
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <AppContent />
      )}
    </ReactLenis>
  )
}
