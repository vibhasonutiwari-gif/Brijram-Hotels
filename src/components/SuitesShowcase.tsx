import React, { useState } from 'react';
import { Eye, Check, Users, Maximize, Bed, Compass, Sparkles, ArrowRight, RotateCw } from 'lucide-react';
import { SUITES_DATA, Suite } from '../data/hotelData';

interface SuitesShowcaseProps {
  onReserveSuite: (suiteName: string) => void;
  onOpenRoomModal: (suite: Suite) => void;
  onOpenVirtualTour: (suite: Suite) => void;
}

export const SuitesShowcase: React.FC<SuitesShowcaseProps> = ({
  onReserveSuite,
  onOpenRoomModal,
  onOpenVirtualTour,
}) => {
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>(SUITES_DATA[0].id);

  const activeSuite = SUITES_DATA.find((s) => s.id === selectedSuiteId) || SUITES_DATA[0];

  return (
    <section id="suites" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6D3B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Royal Accommodations</span>
          </div>
          <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight text-balance">
            Sanctuaries of Quiet Majesty
          </h2>
          <p className="font-sans-body text-stone-600 text-sm sm:text-base leading-relaxed">
            Every room and suite at BrijRama Palace carries the legacy of 19th-century Maratha royals,
            fitted with handcrafted teak, silk weaves, and panoramic vantage points over the sacred Ganges.
          </p>
        </div>

        {/* Suite Category Navigation Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#EFE8DC]/80 rounded-xl border border-[#DFD5C2] max-w-full overflow-x-auto">
            {SUITES_DATA.map((suite) => {
              const isSelected = suite.id === selectedSuiteId;
              return (
                <button
                  key={suite.id}
                  onClick={() => setSelectedSuiteId(suite.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-[#FAF8F5]/60'
                  }`}
                >
                  {suite.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Suite Spotlight Card */}
        <div className="bg-white rounded-2xl border border-[#E8DFCF] shadow-lg overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: High-Res Visual Showcase */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] bg-stone-100 group overflow-hidden">
              <img
                src={activeSuite.image}
                alt={activeSuite.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent lg:hidden" />

              {/* Badges on image */}
              <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                <span className="bg-stone-900/85 backdrop-blur-xs text-[#E6C98A] text-xs font-semibold px-3 py-1 rounded-md tracking-wider uppercase">
                  {activeSuite.category}
                </span>
              </div>

              {/* Quick View & 360 Tour Buttons */}
              <div className="absolute bottom-5 right-5 flex items-center gap-2">
                <button
                  onClick={() => onOpenVirtualTour(activeSuite)}
                  className="px-3.5 py-2 bg-stone-900/90 hover:bg-stone-900 text-[#E6C98A] text-xs font-semibold rounded-lg shadow-md backdrop-blur-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="Explore 360° Virtual Tour"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>360° Tour</span>
                </button>

                <button
                  onClick={() => onOpenRoomModal(activeSuite)}
                  className="px-3.5 py-2 bg-white/90 hover:bg-white text-stone-900 text-xs font-semibold rounded-lg shadow-md backdrop-blur-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Specs & Details</span>
                </button>
              </div>
            </div>

            {/* Right: Specifications & Booking Conversion */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-[#FCFAF6] border-t lg:border-t-0 lg:border-l border-[#EDE4D5]">
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-royal text-2xl sm:text-3xl font-bold text-stone-900">
                      {activeSuite.name}
                    </h3>
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-royal text-2xl font-bold text-[#8C6D3B] tabular-nums">
                      {activeSuite.pricePerNight}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">/ night + taxes</span>
                  </div>
                </div>

                <p className="font-sans-body text-sm text-stone-700 leading-relaxed">
                  {activeSuite.description}
                </p>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#E9DFCE] text-xs text-stone-700">
                  <div className="flex items-center gap-2.5">
                    <Maximize className="w-4 h-4 text-[#8C6D3B] shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase">Room Area</span>
                      <span className="font-semibold text-stone-900">{activeSuite.size}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-[#8C6D3B] shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase">Capacity</span>
                      <span className="font-semibold text-stone-900">{activeSuite.capacity}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Bed className="w-4 h-4 text-[#8C6D3B] shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase">Bedding</span>
                      <span className="font-semibold text-stone-900">{activeSuite.bedType}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-[#8C6D3B] shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase">Vantage</span>
                      <span className="font-semibold text-stone-900 truncate">{activeSuite.view}</span>
                    </div>
                  </div>
                </div>

                {/* Highlighted Amenities List */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5">
                    Included Suite Amenities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeSuite.amenities.map((amenity, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#8C6D3B] shrink-0" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onReserveSuite(activeSuite.name)}
                  className="flex-1 py-3 px-5 bg-stone-900 hover:bg-[#8C6D3B] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-xs active:scale-95 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D3B]"
                >
                  <span>Reserve This Suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenRoomModal(activeSuite)}
                  className="py-3 px-5 bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Suite Grid Cards Overview */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUITES_DATA.map((suite) => (
            <div
              key={suite.id}
              className={`bg-white rounded-xl border p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                suite.id === selectedSuiteId
                  ? 'border-[#8C6D3B] shadow-md ring-1 ring-[#8C6D3B]/40'
                  : 'border-[#EAE2D3] hover:border-stone-400 shadow-xs'
              }`}
              onClick={() => setSelectedSuiteId(suite.id)}
            >
              <div>
                <div className="h-40 rounded-lg overflow-hidden mb-4 bg-stone-100 relative">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-stone-900/80 text-white text-[11px] px-2 py-0.5 rounded font-medium">
                    {suite.size}
                  </div>
                </div>

                <div className="text-[11px] uppercase tracking-wider text-[#8C6D3B] font-semibold mb-1">
                  {suite.category}
                </div>
                <h4 className="font-royal text-lg font-bold text-stone-900">{suite.name}</h4>
                <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-snug">
                  {suite.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="font-royal text-base font-bold text-stone-900 tabular-nums">
                    {suite.pricePerNight}
                  </span>
                  <span className="text-[10px] text-stone-400 block">/ night</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenVirtualTour(suite);
                    }}
                    className="px-2 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[11px] font-semibold transition-colors cursor-pointer flex items-center gap-1"
                    title="Explore 360° Tour"
                  >
                    <RotateCw className="w-3 h-3 text-[#7A5824]" />
                    <span>360°</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onReserveSuite(suite.name);
                    }}
                    className="px-3 py-1.5 bg-[#FAF4EA] hover:bg-stone-900 hover:text-white text-stone-900 border border-[#E3D4BC] rounded text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
