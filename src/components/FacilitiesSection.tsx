import React from 'react';
import { Sparkles, Bell, Clock, ArrowRight, ShieldCheck, Waves, Award } from 'lucide-react';
import { FACILITIES_DATA, Facility } from '../data/hotelData';

interface FacilitiesSectionProps {
  onBookClick: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onBookClick }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'jiva-spa':
        return <Sparkles className="w-5 h-5 text-[#8C6D3B]" />;
      case 'palace-butler':
        return <Bell className="w-5 h-5 text-[#8C6D3B]" />;
      case 'pool-fitness':
        return <Waves className="w-5 h-5 text-[#8C6D3B]" />;
      case 'grand-ballroom':
        return <Award className="w-5 h-5 text-[#8C6D3B]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#8C6D3B]" />;
    }
  };

  return (
    <section id="facilities" className="py-24 bg-[#F8F4EC]/60 border-t border-[#E8DFC8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6D3B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Palace Facilities</span>
          </div>
          <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight text-balance">
            World-Class Amenities & Wellness
          </h2>
          <p className="font-sans-body text-stone-600 text-sm sm:text-base leading-relaxed">
            From the tranquil Ayurvedic sanctuaries of Jiva Spa to our legendary round-the-clock
            white-glove butler service, experience unparalleled refinement along the Mumbai waterfront.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES_DATA.map((facility: Facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl border border-[#E9DFCE] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="h-56 relative overflow-hidden bg-stone-100 group">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-stone-900 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                    {facility.badge}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 bg-white/20 backdrop-blur-xs rounded-md">
                        {getIcon(facility.id)}
                      </div>
                      <span className="text-xs uppercase tracking-wider text-[#E6C98A] font-semibold">
                        {facility.subtitle}
                      </span>
                    </div>
                    <h3 className="font-royal text-2xl font-bold leading-snug">{facility.title}</h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="font-sans-body text-sm text-stone-700 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-medium text-stone-500 py-1 border-y border-stone-100">
                    <Clock className="w-3.5 h-3.5 text-[#8C6D3B]" />
                    <span>{facility.timing}</span>
                  </div>

                  {/* Features bullet list */}
                  <ul className="space-y-2 pt-2">
                    {facility.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D3B] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action */}
              <div className="px-6 sm:px-8 pb-6 pt-2 bg-stone-50/50 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={onBookClick}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#8C6D3B] hover:text-stone-900 transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <span>Inquire / Reserve Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-stone-400">Exclusive Palace Facility</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
