import React from 'react';
import { X, Check, Bed, Users, Maximize, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { Suite } from '../data/hotelData';

interface RoomDetailModalProps {
  suite: Suite | null;
  isOpen: boolean;
  onClose: () => void;
  onReserve: (suiteName: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  suite,
  isOpen,
  onClose,
  onReserve,
}) => {
  if (!isOpen || !suite) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-2xl border border-[#E5DAC6] shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Banner */}
        <div className="relative h-64 sm:h-80 bg-stone-900 overflow-hidden">
          <img
            src={suite.image}
            alt={suite.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider text-[#E6C98A] font-semibold block mb-1">
              {suite.category}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="font-royal text-2xl sm:text-3xl font-bold">{suite.name}</h3>
              <div className="font-royal text-xl sm:text-2xl font-bold text-[#E6C98A] tabular-nums">
                {suite.pricePerNight} <span className="text-xs text-stone-300 font-sans font-normal">/ night</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-16rem)] overflow-y-auto">
          {/* Key Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white rounded-xl border border-[#EAE0D0] text-xs">
            <div className="flex items-center gap-2">
              <Maximize className="w-4 h-4 text-[#8C6D3B]" />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Area</span>
                <span className="font-semibold text-stone-900">{suite.size}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#8C6D3B]" />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Capacity</span>
                <span className="font-semibold text-stone-900">{suite.capacity}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-[#8C6D3B]" />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Bedding</span>
                <span className="font-semibold text-stone-900 truncate">{suite.bedType}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#8C6D3B]" />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">View</span>
                <span className="font-semibold text-stone-900 truncate">{suite.view}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-stone-500 mb-2">
              The Sanctuary
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">{suite.description}</p>
          </div>

          {/* Architectural Notes */}
          <div className="p-4 bg-[#F5EDE0] rounded-xl border border-[#E6D8C2] space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#8C6D3B]" />
              <span>Architectural Heritage Note</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed italic">
              "{suite.architecturalDetails}"
            </p>
          </div>

          {/* Full Amenities */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-stone-500 mb-3">
              Included Suite Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {suite.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-3.5 h-3.5 text-[#8C6D3B] shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-6 bg-stone-100/70 border-t border-[#EAE2D3] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            Close Details
          </button>
          <button
            onClick={() => {
              onClose();
              onReserve(suite.name);
            }}
            className="px-6 py-2.5 bg-stone-900 hover:bg-[#8C6D3B] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Reserve {suite.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
