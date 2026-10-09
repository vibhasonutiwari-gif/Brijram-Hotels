import React from 'react';
import { Sparkles, Check, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { EXPERIENTIAL_PACKAGES, ExperientialPackage } from '../data/hotelData';

interface ExperientialPackagesProps {
  onBookPackage: (packageTitle: string) => void;
}

export const ExperientialPackages: React.FC<ExperientialPackagesProps> = ({ onBookPackage }) => {
  return (
    <section id="packages" className="py-24 bg-[#FAF8F5] border-t border-[#E8DFC8]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#7A5824]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Palace Journeys</span>
          </div>
          <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight text-balance">
            Experiential Heritage Packages
          </h2>
          <p className="font-sans-body text-stone-600 text-sm sm:text-base leading-relaxed">
            Thoughtfully woven itineraries blending private royal boat navigation, restorative Ayurvedic wellness,
            gourmet pure vegetarian feasts, and elevated Maha Aarti viewings.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENTIAL_PACKAGES.map((pkg: ExperientialPackage) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-[#E9DFCE] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header */}
                <div className="h-60 sm:h-72 relative overflow-hidden bg-stone-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-stone-900/90 backdrop-blur-xs text-[#E6C98A] text-xs font-semibold px-3 py-1 rounded-md tracking-wider uppercase">
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-xs text-[#E6C98A] font-semibold mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.duration}</span>
                      <span className="text-stone-400">·</span>
                      <span className="text-stone-200">{pkg.idealFor}</span>
                    </div>
                    <h3 className="font-royal text-2xl font-bold leading-tight">{pkg.title}</h3>
                  </div>
                </div>

                {/* Package Body */}
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="font-sans-body text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
                      Curated Package Inclusions
                    </h4>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                          <Check className="w-4 h-4 text-[#7A5824] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Package Footer */}
              <div className="p-6 sm:p-8 bg-stone-50/70 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
                    Complete Experiential Tariff
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-royal text-2xl font-bold text-stone-900 tabular-nums">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-stone-500">/ package + taxes</span>
                  </div>
                </div>

                <button
                  onClick={() => onBookPackage(pkg.title)}
                  className="px-6 py-3 bg-stone-900 hover:bg-[#7A5824] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5824]"
                >
                  <span>Reserve This Journey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Itinerary Notice */}
        <div className="mt-12 p-6 bg-[#F4EFE6] rounded-xl border border-[#E3D7C1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white rounded-lg shadow-xs text-[#7A5824]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-royal text-sm font-bold text-stone-900">
                Custom Tailored Pilgrimages & Royal Celebrations
              </h5>
              <p className="text-xs text-stone-600 mt-0.5">
                Our Head Concierge designs bespoke multi-day sacred rites, private Bajra flotillas, and anniversaries.
              </p>
            </div>
          </div>
          <button
            onClick={() => onBookPackage('Custom Tailored Royal Itinerary')}
            className="px-5 py-2.5 bg-stone-900 hover:bg-[#7A5824] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Request Bespoke Itinerary
          </button>
        </div>
      </div>
    </section>
  );
};
