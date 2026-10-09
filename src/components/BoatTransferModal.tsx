import React from 'react';
import { X, Anchor, Phone, MapPin, Check, Info } from 'lucide-react';
import { BOAT_TRANSFER_INFO, HOTEL_DETAILS } from '../data/hotelData';

interface BoatTransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
}

export const BoatTransferModal: React.FC<BoatTransferModalProps> = ({
  isOpen,
  onClose,
  onBookClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-2xl border border-[#E5DAC6] shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with image banner */}
        <div className="relative h-48 bg-stone-900 overflow-hidden">
          <img
            src="/src/assets/images/brijrama_boat_ghat_arrival_1791545938114.jpg"
            alt="Royal Bajra boat arriving at Darbhanga Ghat"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E6C98A] font-semibold mb-1">
              <Anchor className="w-3.5 h-3.5" />
              <span>{BOAT_TRANSFER_INFO.subtitle}</span>
            </div>
            <h3 className="font-royal text-2xl font-bold">{BOAT_TRANSFER_INFO.title}</h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-12rem)] overflow-y-auto">
          <p className="text-sm text-stone-700 leading-relaxed">
            {BOAT_TRANSFER_INFO.overview}
          </p>

          {/* 4 Steps Journey */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-stone-500">
              The Arrival Sequence
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BOAT_TRANSFER_INFO.steps.map((step) => (
                <div
                  key={step.step}
                  className="p-4 bg-white rounded-xl border border-[#E9DFCE] shadow-2xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-royal text-sm font-bold text-[#8C6D3B] tabular-nums">
                      Step {step.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
                      Complimentary
                    </span>
                  </div>
                  <h5 className="font-royal text-sm font-bold text-stone-900">{step.title}</h5>
                  <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Guidelines */}
          <div className="p-4 bg-[#F5EDE0] rounded-xl border border-[#E6D8C2] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
              <Info className="w-4 h-4 text-[#8C6D3B]" />
              <span>Important Guest Information</span>
            </div>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {BOAT_TRANSFER_INFO.importantNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#8C6D3B] shrink-0 mt-0.5" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge Assistance */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-xl border border-stone-200">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#FAF4EA] text-[#8C6D3B] rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-900 block">
                  Need Immediate Navigation Help?
                </span>
                <span className="text-xs text-stone-500">
                  Our boat team monitors flight & train arrivals in real time.
                </span>
              </div>
            </div>

            <a
              href={`tel:${HOTEL_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call Boat Dispatch</span>
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-stone-100/70 border-t border-[#EAE2D3] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            Close Guide
          </button>
          <button
            onClick={() => {
              onClose();
              onBookClick();
            }}
            className="px-5 py-2.5 bg-[#8C6D3B] hover:bg-[#785c30] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Book With Transfer Included
          </button>
        </div>
      </div>
    </div>
  );
};
