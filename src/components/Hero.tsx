import React from 'react';
import { Star, ShieldCheck, ArrowDown, Sparkles } from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelData';

interface HeroProps {
  onBookClick: () => void;
  onExploreSuites: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreSuites }) => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Hero Visual Container with Parallax & Scrim */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5DAC6]/80 bg-stone-900 group">
          {/* Riverfront Hero Photography */}
          <div className="relative h-[540px] sm:h-[620px] lg:h-[700px] w-full overflow-hidden">
            <img
              src="/assets/images/brijrama_palace_hero_1791545779534.jpg"
              alt="BrijRama Palace Varanasi on Darbhanga Ghat along the sacred Ganges river at sunrise"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Measured luxury scrim overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/45 to-stone-900/30" />
            <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-transparent to-stone-950/40" />
          </div>

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16 text-white">
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              {/* Clean unboxed metadata separator */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium tracking-widest text-[#E6C98A] uppercase">
                <span>Darbhanga Ghat</span>
                <span aria-hidden="true">·</span>
                <span>Dashashwamedh, Varanasi</span>
                <span aria-hidden="true">·</span>
                <span>Est. 1812</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-royal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-md text-balance">
                Where 210 Years of Royal Heritage Meets the Eternal Ganges
              </h1>

              {/* Subtitle */}
              <p className="font-sans-body text-base sm:text-lg text-stone-200/90 max-w-2xl font-normal leading-relaxed text-pretty">
                Perched directly atop Darbhanga Ghat, BrijRama Palace is one of Varanasi’s oldest and
                most majestic architectural wonders. Accessible solely by private royal boat, offering pure
                vegetarian royal dining and timeless luxury.
              </p>

              {/* Actions & Proof */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onBookClick}
                  className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#B38D45] text-stone-950 font-bold rounded-lg uppercase tracking-wider text-xs transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Sparkles className="w-4 h-4 text-stone-900" />
                  <span>Reserve Your Suite</span>
                </button>

                <button
                  onClick={onExploreSuites}
                  className="px-7 py-3.5 bg-stone-900/70 hover:bg-stone-900/90 border border-white/30 text-white font-semibold rounded-lg text-xs uppercase tracking-wider transition-all backdrop-blur-xs flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                >
                  <span>Explore 4 Heritage Suites</span>
                  <ArrowDown className="w-4 h-4 text-[#C5A059]" />
                </button>
              </div>

              {/* Social Proof Line */}
              <div className="pt-3 border-t border-white/15 flex items-center flex-wrap gap-4 text-xs text-stone-300">
                <div className="flex items-center gap-1.5 text-[#E6C98A]">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-white tabular-nums">{HOTEL_DETAILS.rating} / 5</span>
                </div>
                <span className="text-stone-400">·</span>
                <span className="text-stone-200 font-medium">
                  Based on {HOTEL_DETAILS.totalReviews} Traveler Reviews
                </span>
                <span className="text-stone-400">·</span>
                <span className="inline-flex items-center gap-1 text-emerald-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Heritage Luxury Hotel</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Strip below Hero */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-xl p-5 border border-[#E9DFCE] shadow-xs">
            <span className="text-xs uppercase tracking-wider text-[#8C6D3B] font-semibold block mb-1">
              Historic Bastion
            </span>
            <div className="font-royal text-2xl font-bold text-stone-900 tabular-nums">1812 AD</div>
            <p className="text-xs text-stone-600 mt-1 leading-snug">
              Built by the Maratha royal minister Munshi Daya Ram on Darbhanga Ghat.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#E9DFCE] shadow-xs">
            <span className="text-xs uppercase tracking-wider text-[#8C6D3B] font-semibold block mb-1">
              Sacred Arrival
            </span>
            <div className="font-royal text-2xl font-bold text-stone-900">Private Bajra</div>
            <p className="text-xs text-stone-600 mt-1 leading-snug">
              Complimentary wooden royal boat transfer across the Ganges River.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#E9DFCE] shadow-xs">
            <span className="text-xs uppercase tracking-wider text-[#8C6D3B] font-semibold block mb-1">
              Royal Dining
            </span>
            <div className="font-royal text-2xl font-bold text-stone-900">100% Pure Veg</div>
            <p className="text-xs text-stone-600 mt-1 leading-snug">
              Authentic Banarasi specialties & gourmet global cuisine at Darbhanga.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#E9DFCE] shadow-xs">
            <span className="text-xs uppercase tracking-wider text-[#8C6D3B] font-semibold block mb-1">
              Traveler Acclaim
            </span>
            <div className="font-royal text-2xl font-bold text-stone-900 tabular-nums">4.8 / 5.0</div>
            <p className="text-xs text-stone-600 mt-1 leading-snug">
              Ranked among India’s top riverside palace destinations on TripAdvisor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
