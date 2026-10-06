import { motion } from 'framer-motion';
import { TOURNAMENTS, LEADERBOARD } from '../data/siteData';

import SectionHeading from '../components/SectionHeading';

export default function Tournaments() {
  return (
    <section id="tournaments" className="section bg-[#0a0a0a]">
      <div className="container relative z-10">
        <SectionHeading 
          eyebrow="Competitive Play"
          title="TOURNAMENTS &"
          highlight="LEAGUES"
          subtitle="Test your skills against the best. Join our weekly tournaments, win massive prize pools, and climb the Arena Leaderboard."
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Upcoming Tournaments List - 65% */}
          <div className="w-full lg:w-[65%] space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6 pb-4 border-b border-white/10" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Upcoming Events
            </h3>
            {TOURNAMENTS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row gap-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group"
              >
                <div className="w-full sm:w-[240px] h-48 sm:h-auto shrink-0 overflow-hidden relative">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-md">
                    Registrations Open
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-red-400 tracking-widest uppercase">{t.sport}</span>
                    <span className="text-xs font-bold bg-white/10 text-white px-2.5 py-1 rounded-md border border-white/5">Prize: {t.prize}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>{t.name}</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-400 mb-6 bg-black/20 p-3 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">Starts:</span>
                      <span className="text-white font-medium">{t.date}</span>
                    </div>
                    <div className="hidden sm:block text-gray-600">•</div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">Closes:</span>
                      <span className="text-red-400 font-medium">{t.registrationDeadline}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-3">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-[10px] text-white font-bold shadow-md z-10">T{i+1}</div>
                        ))}
                        <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-black flex items-center justify-center text-[10px] text-white font-bold shadow-md z-20">+{t.teams - 3}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-xs text-gray-400 mb-1"><span className="text-green-400 font-bold">{t.registered}/{t.teams}</span> Teams</div>
                      <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${(t.registered / t.teams) * 100}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leaderboard - 35% */}
          <div className="w-full lg:w-[35%]">
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl sticky top-28">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
                🏆 Hall of Fame
              </h3>
              <div className="space-y-3">
                {LEADERBOARD.map((team, i) => (
                  <motion.div 
                    key={team.team}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/5"
                  >
                    <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${i === 0 ? 'bg-yellow-500 text-black' : i === 1 ? 'bg-gray-300 text-black' : i === 2 ? 'bg-orange-600 text-white' : 'bg-white/10 text-gray-400'}`}>
                      #{team.rank}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-sm truncate">{team.team}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider">{team.sport}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xl font-black text-green-400" style={{ fontFamily: "'Oswald', sans-serif" }}>{team.points}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">PTS</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                View Full Standings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
