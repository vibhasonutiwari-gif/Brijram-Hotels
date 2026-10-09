import React from 'react';
import { Compass, Sparkles, Feather, Anchor } from 'lucide-react';

export const HeritageOverview: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5EFE6]/50 border-y border-[#E8DFC8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6D3B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Living Architectural Legend</span>
            </div>

            <h2 className="font-royal text-3xl sm:text-4xl text-stone-900 font-bold leading-tight text-balance">
              The Grand Jewel of Bombay, Built for the World
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                Inaugurated on 16 December 1903 by visionary industrialist Jamsetji Nusserwanji Tata,
                The Taj Mahal Palace opened its doors as India’s first grand luxury hotel—standing on
                Apollo Bunder twenty-one years before the Gateway of India was even constructed.
              </p>
              <p>
                A breathtaking synthesis of Moorish, Oriental, and Florentine architectural disciplines,
                the palace features soaring 240-foot central red domes, a cantilevered staircase atrium,
                and over 4,000 museum-grade artworks from legendary masters. It was the first establishment
                in India with electricity, German hydraulic elevators, and world-class butler service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#E2D5BE]">
                <Compass className="w-5 h-5 text-[#8C6D3B] mb-2" />
                <h4 className="font-royal text-sm font-bold text-stone-900">Indo-Saracenic Art</h4>
                <p className="text-xs text-stone-600 mt-1">
                  Red Moorish domes, arched stone gallerias, and Belgian crystal chandeliers.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#E2D5BE]">
                <Feather className="w-5 h-5 text-[#8C6D3B] mb-2" />
                <h4 className="font-royal text-sm font-bold text-stone-900">Taj Art Heritage</h4>
                <p className="text-xs text-stone-600 mt-1">
                  Home to original masterworks by Husain, Sabavala, Ara, and Jamini Roy.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#E2D5BE]">
                <Anchor className="w-5 h-5 text-[#8C6D3B] mb-2" />
                <h4 className="font-royal text-sm font-bold text-stone-900">Harbor Frontline</h4>
                <p className="text-xs text-stone-600 mt-1">
                  Perched on Apollo Bunder with immediate Gateway of India harbor access.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-stone-100">
                <img
                  src="/src/assets/images/taj_presidential_suite_1791547489154.jpg"
                  alt="Historic interiors and grand salons of The Taj Mahal Palace Mumbai"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E6C98A] font-semibold block mb-1">
                    The Grand Palace Salons
                  </span>
                  <p className="font-royal text-lg font-bold">
                    Where kings, presidents, artists, and luminaries have gathered since 1903
                  </p>
                </div>
              </div>

              {/* Decorative accent card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-[#E6DBCE] max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF4EA] flex items-center justify-center text-[#8C6D3B] font-royal font-bold text-lg">
                    120+
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Years of Hospitality
                    </div>
                    <div className="text-xs text-stone-500">Unbroken legacy of Tata service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
