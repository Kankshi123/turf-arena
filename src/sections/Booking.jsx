import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPORTS, TURFS, TIME_SLOTS } from '../data/siteData';
import SectionHeading from '../components/SectionHeading';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedTurf, setSelectedTurf] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const nextStep = () => {
    if (step === 1 && selectedSport) setStep(2);
    if (step === 2 && selectedTurf) setStep(3);
    if (step === 3 && selectedDate && selectedTime) setStep(4);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section id="booking" className="section bg-[#0a0a0a] relative">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading 
          eyebrow="Secure Your Slot"
          title="BOOK YOUR"
          highlight="GAME"
          subtitle="Reserve your premium turf slot in under 2 minutes. Instant confirmation and seamless payment."
        />

        {/* Booking Card */}
        <div className="max-w-[1000px] mx-auto bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />
          
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-10 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/5 z-0 rounded-full" />
            <motion.div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-green-500 z-0 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${((step - 1) / 3) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
            
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-all duration-300 shadow-lg ${
                  step >= num 
                    ? 'bg-green-500 text-black border-2 border-green-400 scale-110' 
                    : 'bg-[#1a1a2e] text-gray-500 border-2 border-white/10'
                }`}
              >
                {step > num ? '✓' : num}
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="min-h-[250px]">
            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>1. Select Your Sport</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {SPORTS.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSport(s)}
                        className={`p-6 rounded-2xl border text-center flex flex-col items-center justify-center transition-all ${selectedSport?.id === s.id ? 'bg-green-500/20 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]' : 'bg-white/5 border-white/10 hover:border-green-500/50 hover:bg-white/10'}`}
                      >
                        <div className="text-5xl mb-4">{s.icon}</div>
                        <div className="font-bold text-white">{s.name}</div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>2. Choose a Turf</h3>
                  <div className="space-y-4">
                    {TURFS.filter(t => t.sport.toLowerCase().includes(selectedSport?.name.toLowerCase().split(' ')[1] || 'all') || selectedSport?.name === 'Pickleball' || selectedSport?.name === 'Basketball' || selectedSport?.name === 'Badminton').length > 0 ? (
                      TURFS.map(t => (
                        <button
                          key={t.id}
                          onClick={() => setSelectedTurf(t)}
                          className={`w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 p-5 rounded-2xl border text-center sm:text-left transition-all ${selectedTurf?.id === t.id ? 'bg-green-500/20 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]' : 'bg-white/5 border-white/10 hover:border-green-500/50 hover:bg-white/10'}`}
                        >
                          <img src={t.image} alt={t.name} className="w-24 h-24 rounded-xl object-cover hidden sm:block shadow-md" />
                          <div>
                            <div className="font-bold text-white text-xl mb-1">{t.name}</div>
                            <div className="text-sm text-gray-400 font-medium">{t.size} • Capacity: {t.capacity}</div>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="text-center py-10 text-gray-400">
                        <p>No specific turf listed for this sport yet.</p>
                        <button 
                          onClick={() => setSelectedTurf(TURFS[0])}
                          className="mt-4 px-6 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20"
                        >
                          Select Any Available Turf
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>3. Date & Time</h3>
                  
                  <div className="mb-8 max-w-sm mx-auto">
                    <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Select Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-[#1a1a2e] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>

                  <div className="mb-4 text-sm font-semibold text-gray-400 uppercase tracking-wide text-center">Available Slots</div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {TIME_SLOTS.map((slot, i) => (
                      <button
                        key={i}
                        disabled={!slot.available}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`py-2 rounded-lg text-sm font-medium transition-all ${
                          !slot.available 
                            ? 'bg-red-500/10 text-red-500/50 border border-red-500/20 cursor-not-allowed'
                            : selectedTime === slot.time
                              ? 'bg-green-500 text-black border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]'
                              : 'bg-white/5 text-white border border-white/10 hover:border-green-500/50'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 border-2 border-green-500">
                    ✓
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>Booking Initialized!</h3>
                  <p className="text-gray-400 mb-8 max-w-md mx-auto">This is a prototype. In a real app, this would proceed to a payment gateway.</p>
                  
                  <div className="bg-[#1a1a2e] rounded-2xl p-6 text-left max-w-sm mx-auto border border-white/5 shadow-inner">
                    <h4 className="font-bold text-white mb-4 border-b border-white/10 pb-2">Booking Summary</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex justify-between"><span className="text-gray-500">Sport:</span> <span>{selectedSport?.name}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Turf:</span> <span>{selectedTurf?.name}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Date:</span> <span>{selectedDate}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Time:</span> <span>{selectedTime}</span></div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => { setStep(1); setSelectedSport(null); setSelectedTurf(null); setSelectedDate(''); setSelectedTime(''); }}
                    className="mt-8 text-green-500 hover:text-green-400 underline underline-offset-4"
                  >
                    Book another slot
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          {step < 4 && (
            <div className="flex justify-between mt-10 pt-6 border-t border-white/10">
              <button
                onClick={prevStep}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                Back
              </button>
              
              <button
                onClick={nextStep}
                disabled={
                  (step === 1 && !selectedSport) || 
                  (step === 2 && !selectedTurf) || 
                  (step === 3 && (!selectedDate || !selectedTime))
                }
                className={`px-8 py-2.5 rounded-xl font-bold transition-all ${
                  (step === 1 && selectedSport) || (step === 2 && selectedTurf) || (step === 3 && selectedDate && selectedTime)
                    ? 'bg-green-500 text-black hover:bg-green-400 hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                    : 'bg-white/5 text-gray-500 cursor-not-allowed'
                }`}
              >
                {step === 3 ? 'Confirm' : 'Continue'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
