import React, { useState } from 'react';
import { X, RotateCcw, RotateCw, Compass, Eye, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Suite } from '../data/hotelData';

interface VirtualTourModalProps {
  suite: Suite | null;
  isOpen: boolean;
  onClose: () => void;
  onReserve: (suiteName: string) => void;
}

interface TourViewPoint {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  suite,
  isOpen,
  onClose,
  onReserve,
}) => {
  const [rotationOffset, setRotationOffset] = useState<number>(0);
  const [isAutoSpin, setIsAutoSpin] = useState<boolean>(true);
  const [activeAngleIndex, setActiveAngleIndex] = useState<number>(0);

  if (!isOpen || !suite) return null;

  const viewAngles: TourViewPoint[] = [
    {
      id: 'bedroom',
      name: 'Master Bed & Carved Arches',
      image: suite.image,
      description:
        '360° perspective of the central bedchamber, hand-carved Maratha stone arches, silk drapery, and heritage bedside lamps.',
    },
    {
      id: 'river-jharokha',
      name: 'Ganges Riverfront Jharokha Seat',
      image: '/assets/images/varuna_river_suite_1791545789857.jpg',
      description:
        'Framed view over the sacred river Ganges and morning boat flotillas through original 19th-century carved sandstone lattice jaalis.',
    },
    {
      id: 'living-salon',
      name: 'Royal Butler & Living Salon',
      image: '/assets/images/maharaja_suite_palace_1791545804315.jpg',
      description:
        'The private entertaining salon with antique crystal chandeliers, teak ceilings, and woven heritage rugs.',
    },
    {
      id: 'heritage-corridor',
      name: 'Palace Bastion & Courtyard View',
      image: '/assets/images/brijrama_mayur_mahal_1791545926244.jpg',
      description:
        'Tranquil vantage looking into the serene sunlit inner courtyard where live sitar melodies resonate at dusk.',
    },
  ];

  const currentView = viewAngles[activeAngleIndex];

  const rotateLeft = () => setRotationOffset((prev) => prev - 25);
  const rotateRight = () => setRotationOffset((prev) => prev + 25);
  const resetAngle = () => setRotationOffset(0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-2xl border border-[#E5DAC6] shadow-2xl overflow-hidden my-6">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#26211C] text-white flex items-center justify-between border-b border-[#3E352B]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-[#8C6D3B]/40 rounded-lg text-[#E6C98A]">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#E6C98A] font-bold block">
                360° Interactive Suite Walkthrough
              </span>
              <h3 id="tour-modal-title" className="font-royal text-lg sm:text-xl font-bold">
                {suite.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close 360 virtual tour"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 360° Viewport Canvas with interactive Pan/Zoom */}
        <div className="relative h-80 sm:h-[420px] bg-stone-950 overflow-hidden select-none">
          <div
            className={`w-full h-full transform transition-transform duration-700 ease-out ${
              isAutoSpin ? 'scale-105' : 'scale-100'
            }`}
            style={{
              transform: `scale(1.08) rotate(${rotationOffset * 0.05}deg) translateX(${
                rotationOffset * 0.8
              }px)`,
            }}
          >
            <img
              src={currentView.image}
              alt={currentView.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter saturate-[1.05]"
            />
          </div>

          {/* Vignette Overlay & Pan Grid */}
          <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-stone-950/20 to-stone-950/70 pointer-events-none" />

          {/* Live Virtual Tour HUD Indicators */}
          <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-xs tracking-wider">360° VIRTUAL PAN</span>
            <span className="text-stone-400">·</span>
            <span className="text-[#E6C98A] font-medium">{currentView.name}</span>
          </div>

          {/* Interactive Navigation Compass HUD (Bottom-Center) */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-stone-900/90 backdrop-blur-md p-1.5 rounded-xl border border-white/20 shadow-xl">
            <button
              onClick={rotateLeft}
              className="p-2 hover:bg-white/15 text-white rounded-lg transition-colors cursor-pointer"
              title="Pan Left"
              aria-label="Pan Left"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={resetAngle}
              className="px-3 py-1 text-[11px] font-semibold text-stone-300 hover:text-white uppercase tracking-wider cursor-pointer"
            >
              Center View
            </button>

            <button
              onClick={rotateRight}
              className="p-2 hover:bg-white/15 text-white rounded-lg transition-colors cursor-pointer"
              title="Pan Right"
              aria-label="Pan Right"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            <div className="w-px h-4 bg-white/20 mx-1" />

            <button
              onClick={() => setIsAutoSpin(!isAutoSpin)}
              className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                isAutoSpin ? 'bg-[#8C6D3B] text-white' : 'text-stone-300 hover:bg-white/10'
              }`}
            >
              {isAutoSpin ? 'Auto-Pan On' : 'Auto-Pan Off'}
            </button>
          </div>
        </div>

        {/* View Angles Selector Bar */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#E9DFCE]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2.5">
            Switch Room Vantage Point
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {viewAngles.map((angle, idx) => {
              const isSelected = activeAngleIndex === idx;
              return (
                <button
                  key={angle.id}
                  onClick={() => {
                    setActiveAngleIndex(idx);
                    setRotationOffset(0);
                  }}
                  className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#8C6D3B] bg-[#FAF4EA] shadow-2xs'
                      : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-[#7A5824] block">
                    Vantage 0{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-stone-900 block truncate">
                    {angle.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Information & Details Footer */}
        <div className="p-6 bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs text-stone-600 font-sans-body leading-relaxed max-w-xl">
              {currentView.description}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-[11px] text-stone-500 pt-1">
              <span>{suite.size}</span>
              <span>·</span>
              <span>{suite.bedType}</span>
              <span>·</span>
              <span>{suite.capacity}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
            >
              Close Tour
            </button>
            <button
              onClick={() => {
                onClose();
                onReserve(suite.name);
              }}
              className="px-6 py-2.5 bg-stone-900 hover:bg-[#7A5824] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Reserve {suite.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
