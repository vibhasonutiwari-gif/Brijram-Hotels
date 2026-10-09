import React from 'react';
import { MapPin, Phone, ExternalLink, Navigation, Compass, Star, Clock, Car } from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelData';

interface LocationSectionProps {
  onBookClick: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onBookClick }) => {
  return (
    <section id="location" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6D3B]">
            <Compass className="w-3.5 h-3.5" />
            <span>Colaba Waterfront Setting</span>
          </div>
          <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight text-balance">
            Apollo Bunder, Overlooking the Gateway of India
          </h2>
          <p className="font-sans-body text-stone-600 text-sm sm:text-base leading-relaxed">
            Magnificently positioned along South Mumbai’s historic waterfront promenade,
            with direct views of the Arabian Sea, Mumbai Harbor yachts, and the Gateway of India.
          </p>
        </div>

        {/* Location Content Block */}
        <div className="bg-white rounded-2xl border border-[#E8DFCF] shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Verified Details & Action Buttons */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-[#FCFAF6] border-b lg:border-b-0 lg:border-r border-[#EDE4D5]">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-1.5 text-[#C5A059] mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-stone-900">
                      {HOTEL_DETAILS.rating} / 5
                    </span>
                    <span className="text-xs text-stone-500">
                      ({HOTEL_DETAILS.totalReviews} Reviews)
                    </span>
                  </div>
                  <h3 className="font-royal text-2xl font-bold text-stone-900">
                    {HOTEL_DETAILS.name}
                  </h3>
                  <p className="font-sans-body text-xs text-[#8C6D3B] font-semibold mt-1">
                    {HOTEL_DETAILS.tagline}
                  </p>
                </div>

                {/* Verified Address */}
                <div className="p-4 bg-white rounded-xl border border-[#E9DFCE] space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8C6D3B] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                        Full Verified Address
                      </span>
                      <p className="text-sm font-medium text-stone-800 leading-snug">
                        {HOTEL_DETAILS.address}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span>GPS: 18.9217° N, 72.8332° E</span>
                    <span className="font-medium text-stone-700">Apollo Bunder Pier</span>
                  </div>
                </div>

                {/* Key Landmark Distances */}
                <div className="space-y-2.5 text-xs text-stone-700">
                  <h4 className="font-semibold uppercase tracking-wider text-stone-400 text-[10px]">
                    Proximity to Mumbai Landmarks
                  </h4>
                  <div className="flex items-center justify-between py-1 border-b border-stone-100">
                    <span>Gateway of India</span>
                    <span className="font-semibold text-stone-900">Adjacent (30 seconds walk)</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-stone-100">
                    <span>Colaba Causeway (Boutiques & Cafes)</span>
                    <span className="font-semibold text-stone-900">400 meters (5-min stroll)</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-stone-100">
                    <span>Chhatrapati Shivaji Maharaj Terminus (CSMT)</span>
                    <span className="font-semibold text-stone-900">2.8 km (10-min drive)</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span>Mumbai Chhatrapati Shivaji Airport (BOM)</span>
                    <span className="font-semibold text-stone-900">24 km (Chauffeur limousine service)</span>
                  </div>
                </div>

                {/* Operating timings notice */}
                <div className="flex items-center gap-2 p-3 bg-[#FAF4EA] rounded-lg border border-[#EADECA] text-xs text-stone-700">
                  <Clock className="w-4 h-4 text-[#8C6D3B] shrink-0" />
                  <span>
                    24/7 Front Desk, Valet Parking & Palace Concierge assistance
                  </span>
                </div>
              </div>

              {/* Action Buttons: Call Now & Get Directions */}
              <div className="pt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${HOTEL_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex-1 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call Now ({HOTEL_DETAILS.phone})</span>
                </a>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=The+Taj+Mahal+Palace,+Apollo+Bunder,+Colaba,+Mumbai`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 bg-[#C5A059] hover:bg-[#B38D45] text-stone-950 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right Column: Responsive Embedded Google Maps */}
            <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[500px] bg-stone-200">
              <iframe
                title="The Taj Mahal Palace Google Maps Location at Apollo Bunder Colaba Mumbai"
                src={HOTEL_DETAILS.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[420px] filter saturate-[0.85] contrast-[1.05]"
              />

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-stone-200 text-xs max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <Car className="w-4 h-4 text-[#8C6D3B]" />
                  <span className="font-royal font-bold text-stone-900">Apollo Bunder Valet Port</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-snug">
                  Complimentary valet parking and palace limousine pick-up available at the portico.
                </p>
                <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={onBookClick}
                    className="text-[11px] font-bold text-[#8C6D3B] hover:underline cursor-pointer"
                  >
                    Reserve Car Transfer &rarr;
                  </button>
                  <a
                    href="https://maps.google.com/?q=The+Taj+Mahal+Palace+Mumbai"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-stone-400 hover:text-stone-700 flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
