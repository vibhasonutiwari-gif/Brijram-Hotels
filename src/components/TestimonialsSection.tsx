import React, { useState } from 'react';
import { Star, Sparkles, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA, HOTEL_DETAILS, Testimonial } from '../data/hotelData';

export const TestimonialsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Divide the 9 testimonials into 3 columns for 3x3 layout
  const col1 = [TESTIMONIALS_DATA[0], TESTIMONIALS_DATA[1], TESTIMONIALS_DATA[2]];
  const col2 = [TESTIMONIALS_DATA[3], TESTIMONIALS_DATA[4], TESTIMONIALS_DATA[5]];
  const col3 = [TESTIMONIALS_DATA[6], TESTIMONIALS_DATA[7], TESTIMONIALS_DATA[8]];

  const renderCard = (t: Testimonial, keySuffix = '') => (
    <div
      key={`${t.id}${keySuffix}`}
      className="bg-white rounded-xl border border-[#E8DFCF] p-6 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between mb-5"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex text-[#C5A059]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(t.rating) ? 'fill-current' : 'fill-stone-200 text-stone-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-stone-400 font-medium">{t.date}</span>
        </div>

        <Quote className="w-5 h-5 text-[#E5D7BF] mb-2" />

        <p className="font-sans-body text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-4">
          "{t.comment}"
        </p>
      </div>

      <div className="pt-3 border-t border-stone-100">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-royal text-sm font-bold text-stone-900 leading-snug">{t.name}</h5>
            <span className="text-[11px] text-stone-500 block">{t.location}</span>
          </div>
          {t.verified && (
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
              <CheckCircle className="w-3 h-3 text-emerald-700" />
              <span>Verified Stay</span>
            </div>
          )}
        </div>
        <div className="mt-2 text-[11px] font-medium text-[#8C6D3B]">
          Stayed in {t.roomStayed} · {t.stayType}
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 bg-[#F8F4EC]/70 border-t border-[#E8DFC8]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 4.8/5 Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6D3B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Guest Chronicles · 3,300+ Verified Reviews</span>
            </div>
            <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight text-balance">
              Echoes of Royal Hospitality
            </h2>
            <p className="font-sans-body text-stone-600 text-sm sm:text-base leading-relaxed">
              Read authentic experiences penned by global travelers, dignitaries, and pilgrims who have
              experienced the spiritual calm of BrijRama Palace by the Ganges.
            </p>
          </div>

          {/* Social Proof Score Box */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="bg-white p-4 rounded-xl border border-[#E5DAC6] shadow-xs flex items-center gap-4">
              <div className="font-royal text-3xl font-bold text-stone-900 tabular-nums">
                {HOTEL_DETAILS.rating}
                <span className="text-sm text-stone-400 font-normal"> / 5.0</span>
              </div>
              <div className="border-l border-stone-200 pl-3">
                <div className="flex text-[#C5A059] mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-stone-500 font-medium block">
                  3,300+ Verified Traveler Reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3x3 Continuous Floating Marquee Loop */}
        <div
          className="relative h-[680px] overflow-hidden rounded-2xl p-2 bg-gradient-to-b from-transparent via-[#F4EDE0]/30 to-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D3B]"
          role="region"
          aria-label="Guest Reviews 3x3 Marquee Loop"
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <span className="sr-only">
            {isPaused ? 'Marquee scrolling is paused.' : 'Marquee is scrolling. Focus to pause and read.'}
          </span>

          {/* Top & Bottom gradient mask for cinematic fade */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F8F4EC] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8F4EC] to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {/* Column 1 */}
            <div
              className={`flex flex-col animate-marquee-vertical ${
                isPaused ? 'pause-hover' : ''
              }`}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
              aria-live="off"
            >
              {col1.map((t) => renderCard(t, '-1'))}
              {col1.map((t) => renderCard(t, '-dup1'))}
            </div>

            {/* Column 2 (slower speed) */}
            <div
              className={`flex flex-col animate-marquee-vertical-slow hidden md:flex ${
                isPaused ? 'pause-hover' : ''
              }`}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
              aria-live="off"
            >
              {col2.map((t) => renderCard(t, '-2'))}
              {col2.map((t) => renderCard(t, '-dup2'))}
            </div>

            {/* Column 3 (faster speed) */}
            <div
              className={`flex flex-col animate-marquee-vertical-fast hidden lg:flex ${
                isPaused ? 'pause-hover' : ''
              }`}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
              aria-live="off"
            >
              {col3.map((t) => renderCard(t, '-3'))}
              {col3.map((t) => renderCard(t, '-dup3'))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-stone-500">
          <span>Reviews verified via TripAdvisor and Google Maps Traveler Profiles</span>
          <span className="mx-2">·</span>
          <span>Average Guest Rating 4.8 / 5 based on 3,300+ stays</span>
        </div>
      </div>
    </section>
  );
};
