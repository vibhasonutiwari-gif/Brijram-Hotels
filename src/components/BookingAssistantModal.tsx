import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Compass,
  CheckCircle2,
  Calendar,
  Utensils,
  ArrowRight,
  ShieldCheck,
  Building,
  Heart,
  ChevronRight,
} from 'lucide-react';
import { SUITES_DATA } from '../data/hotelData';

interface BookingAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPlan: (plan: {
    suiteName: string;
    specialRequests: string;
    adults: number;
  }) => void;
}

export const BookingAssistantModal: React.FC<BookingAssistantModalProps> = ({
  isOpen,
  onClose,
  onApplyPlan,
}) => {
  const [step, setStep] = useState<number>(1);
  const [journeyType, setJourneyType] = useState<string>('spiritual');
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>('varuna-palace');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [dietaryPref, setDietaryPref] = useState<string>('sattvic');
  const [wantsTempleEscort, setWantsTempleEscort] = useState<boolean>(true);
  const [wantsDawnCruise, setWantsDawnCruise] = useState<boolean>(true);

  if (!isOpen) return null;

  const journeyOptions = [
    {
      id: 'spiritual',
      title: 'Spiritual Pilgrimage & Darshan',
      desc: 'Focused on sacred Ganga Aarti, temple blessings, and morning peace',
      recommendedSuite: 'royal-ganges',
    },
    {
      id: 'heritage',
      title: 'Royal Heritage & Architecture',
      desc: 'Passionate about 19th-century Maratha stonecraft, history, and photography',
      recommendedSuite: 'maharaja-suite',
    },
    {
      id: 'couples',
      title: 'Romantic Riverfront Getaway',
      desc: 'Sunrise river views, private candlelight dining, and serene courtyard evenings',
      recommendedSuite: 'varuna-palace',
    },
    {
      id: 'cultural',
      title: 'Cultural Explorer / Solo',
      desc: 'Ancient gali explorations, classical sitar music, and heritage immersion',
      recommendedSuite: 'mayur-mahal',
    },
  ];

  const handleJourneySelect = (id: string, suiteId: string) => {
    setJourneyType(id);
    setSelectedSuiteId(suiteId);
    setStep(2);
  };

  const handleFinish = () => {
    const suite = SUITES_DATA.find((s) => s.id === selectedSuiteId) || SUITES_DATA[0];

    const notesParts = [
      `Travel Intent: ${journeyType.toUpperCase()}`,
      `Dietary Preference: ${dietaryPref.toUpperCase()}`,
      wantsTempleEscort ? 'Requires Escorted Kashi Vishwanath Darshan' : null,
      wantsDawnCruise ? 'Requires Private Dawn Bajra Boat Excursion' : null,
    ].filter(Boolean);

    onApplyPlan({
      suiteName: suite.name,
      specialRequests: notesParts.join(' · '),
      adults: guestCount,
    });
    onClose();
  };

  const currentSuite = SUITES_DATA.find((s) => s.id === selectedSuiteId) || SUITES_DATA[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="assistant-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-2xl border border-[#E5DAC6] shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="px-6 py-5 bg-[#26211C] text-white flex items-center justify-between border-b border-[#3E352B]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#8C6D3B]/40 text-[#E6C98A] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#E6C98A] font-bold block">
                Context-Aware Concierge
              </span>
              <h3 id="assistant-modal-title" className="font-royal text-lg sm:text-xl font-bold">
                Royal Palace Booking Assistant
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close booking assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-[#EBE2D3] h-1.5 w-full">
          <div
            className="bg-[#7A5824] h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-12rem)] overflow-y-auto">
          {/* STEP 1: Purpose of Journey */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#7A5824] font-bold block mb-1">
                  Step 01 of 03
                </span>
                <h4 className="font-royal text-2xl font-bold text-stone-900">
                  What is the primary intention of your Varanasi sojourn?
                </h4>
                <p className="text-xs text-stone-600 mt-1 font-sans-body">
                  Our concierge curates suite placement, boat timing, and rituals based on your focus.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {journeyOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleJourneySelect(opt.id, opt.recommendedSuite)}
                    className="p-4 rounded-xl border border-[#E8DFCE] bg-white hover:border-[#8C6D3B] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <h5 className="font-royal text-base font-bold text-stone-900 group-hover:text-[#7A5824] transition-colors">
                        {opt.title}
                      </h5>
                      <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-sans-body">
                        {opt.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-[#7A5824] font-semibold">
                      <span>Select Experience</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Recommended Suite & Party Size */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#7A5824] font-bold block mb-1">
                  Step 02 of 03
                </span>
                <h4 className="font-royal text-2xl font-bold text-stone-900">
                  Tailored Accommodation Match
                </h4>
                <p className="text-xs text-stone-600 mt-1 font-sans-body">
                  Based on your preference, we have matched you with an optimal heritage sanctuary.
                </p>
              </div>

              {/* Recommended Suite Card */}
              <div className="p-4 sm:p-5 bg-white rounded-xl border-2 border-[#7A5824] shadow-xs flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-full sm:w-36 h-28 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={currentSuite.image}
                    alt={currentSuite.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1 text-center sm:text-left">
                  <span className="text-[10px] uppercase tracking-wider text-[#7A5824] font-bold">
                    Curated Recommendation
                  </span>
                  <h5 className="font-royal text-xl font-bold text-stone-900">
                    {currentSuite.name}
                  </h5>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {currentSuite.description}
                  </p>
                  <div className="pt-1 flex items-center justify-center sm:justify-start gap-3 text-xs text-stone-500">
                    <span className="font-bold text-stone-900 tabular-nums">
                      {currentSuite.pricePerNight}
                    </span>
                    <span>·</span>
                    <span>{currentSuite.size}</span>
                    <span>·</span>
                    <span>{currentSuite.view}</span>
                  </div>
                </div>
              </div>

              {/* Suite Switcher */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Prefer an Alternative Suite?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SUITES_DATA.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSuiteId(s.id)}
                      className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-all cursor-pointer ${
                        s.id === selectedSuiteId
                          ? 'border-[#7A5824] bg-[#FAF4EA] text-stone-900'
                          : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <span className="block font-royal font-bold">{s.name}</span>
                      <span className="text-[10px] text-stone-500">{s.pricePerNight}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Number of Traveling Guests
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((count) => (
                    <button
                      key={count}
                      onClick={() => setGuestCount(count)}
                      className={`flex-1 py-2 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                        guestCount === count
                          ? 'bg-stone-900 text-white border-stone-900'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {count} {count === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  &larr; Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 bg-stone-900 hover:bg-[#7A5824] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Continue to Preferences &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Dietary & Sacred Experiences */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#7A5824] font-bold block mb-1">
                  Step 03 of 03
                </span>
                <h4 className="font-royal text-2xl font-bold text-stone-900">
                  Dining & Sacred Inclusions
                </h4>
                <p className="text-xs text-stone-600 mt-1 font-sans-body">
                  Fine-tune pure vegetarian dining styles and concierge escort services.
                </p>
              </div>

              {/* Dietary Choices */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Vegetarian Culinary Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'sattvic', label: 'Sattvic Pure (No Onion/Garlic)' },
                    { id: 'banarasi-classic', label: 'Royal Banarasi Court Thali' },
                    { id: 'jain-vegan', label: 'Jain / Vegan Preparation' },
                  ].map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setDietaryPref(d.id)}
                      className={`p-3 rounded-lg border text-xs font-semibold text-left transition-all cursor-pointer ${
                        dietaryPref === d.id
                          ? 'border-[#7A5824] bg-[#FAF4EA] text-stone-900'
                          : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experiential Add-ons */}
              <div className="space-y-2.5 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Complimentary Concierge Enhancements
                </label>

                <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-200 cursor-pointer hover:bg-stone-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={wantsTempleEscort}
                    onChange={(e) => setWantsTempleEscort(e.target.checked)}
                    className="w-4 h-4 text-[#7A5824] rounded accent-[#7A5824]"
                  />
                  <div>
                    <span className="font-royal text-xs font-bold text-stone-900 block">
                      Escorted Kashi Vishwanath VIP Darshan Pass
                    </span>
                    <span className="text-[11px] text-stone-500">
                      Coordinated with vetted Vedic palace pandit
                    </span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-200 cursor-pointer hover:bg-stone-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={wantsDawnCruise}
                    onChange={(e) => setWantsDawnCruise(e.target.checked)}
                    className="w-4 h-4 text-[#7A5824] rounded accent-[#7A5824]"
                  />
                  <div>
                    <span className="font-royal text-xs font-bold text-stone-900 block">
                      Private Dawn Bajra Boat River Excursion
                    </span>
                    <span className="text-[11px] text-stone-500">
                      Sunrise journey along the 84 ghats with floating diya blessing
                    </span>
                  </div>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex justify-between items-center">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  &larr; Back
                </button>
                <button
                  onClick={handleFinish}
                  className="px-6 py-3 bg-[#7A5824] hover:bg-[#684a1e] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Apply Plan & Open Booking Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
