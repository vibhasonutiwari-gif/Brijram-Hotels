import React, { useState, useEffect } from 'react';
import {
  Calendar,
  User,
  Phone,
  Mail,
  Users,
  Building,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  X,
  Printer,
} from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelData';

interface BookingFooterProps {
  selectedSuite: string;
  onSuiteChange: (suite: string) => void;
  onOpenBoatModal: () => void;
}

interface ReservationData {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  suitePreference: string;
  specialRequests: string;
  bookingRef?: string;
  submittedAt?: string;
}

export const BookingFooter: React.FC<BookingFooterProps> = ({
  selectedSuite,
  onSuiteChange,
  onOpenBoatModal,
}) => {
  // Today's date in YYYY-MM-DD format
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  const defaultCheckOutStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationData>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: todayStr,
    checkOut: defaultCheckOutStr,
    adults: 2,
    children: 0,
    suitePreference: selectedSuite || 'Mayur Mahal Room',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationData, setConfirmationData] = useState<ReservationData | null>(null);

  // Sync when parent changes suite selection (e.g. from "Reserve This Suite" button)
  useEffect(() => {
    if (selectedSuite) {
      setFormData((prev) => ({ ...prev, suitePreference: selectedSuite }));
    }
  }, [selectedSuite]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for boat pickup coordination';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required for confirmation voucher';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.checkIn) {
      newErrors.checkIn = 'Check-in date is required';
    }

    if (!formData.checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    } else if (formData.checkIn && formData.checkOut <= formData.checkIn) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `BR-${Math.floor(100000 + Math.random() * 900000)}`;
      const submission: ReservationData = {
        ...formData,
        bookingRef: generatedRef,
        submittedAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      setConfirmationData(submission);
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <footer id="booking-section" className="bg-[#1C1814] text-stone-200 pt-20 pb-12 relative">
      {/* Decorative top border in royal antique brass */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8C6D3B] via-[#C5A059] to-[#8C6D3B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reservation Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Palace Reservations</span>
          </div>
          <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Begin Your Sacred Ganges Sojourn
          </h2>
          <p className="font-sans-body text-stone-400 text-sm sm:text-base leading-relaxed">
            Reserve directly with our palace front desk to guarantee private royal boat arrival,
            best guaranteed tariff, and priority darshan arrangements.
          </p>
        </div>

        {/* Interactive Booking Form Card */}
        <div className="bg-[#26211C] rounded-2xl border border-[#3E352B] p-6 sm:p-10 shadow-2xl mb-20 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Field 1: Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Full Name</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maharaja Vikramaditya / Jane Doe"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1C1814] border ${
                    errors.fullName ? 'border-red-500' : 'border-[#4A3F33]'
                  } text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#C5A059] transition-colors`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Field 2A: Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Phone Number</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1C1814] border ${
                    errors.phone ? 'border-red-500' : 'border-[#4A3F33]'
                  } text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#C5A059] transition-colors`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Field 2B: Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Email Address</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="reservations@yourdomain.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1C1814] border ${
                    errors.email ? 'border-red-500' : 'border-[#4A3F33]'
                  } text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#C5A059] transition-colors`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Field 5: Suite Preference Dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Suite Preference</span>
                  <span className="text-red-400">*</span>
                </label>
                <select
                  value={formData.suitePreference}
                  onChange={(e) => {
                    setFormData({ ...formData, suitePreference: e.target.value });
                    onSuiteChange(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-[#1C1814] border border-[#4A3F33] text-white text-sm focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
                >
                  <option value="Mayur Mahal Room">Mayur Mahal Room (Heritage Courtyard)</option>
                  <option value="Varuna Palace Room">Varuna Palace Room (River Ganges View)</option>
                  <option value="Maharaja Suite">Maharaja Suite (Living Salon & Butler)</option>
                  <option value="Royal Ganges Suite">Royal Ganges Suite (Balcony & Aarti View)</option>
                  <option value="Darbhanga Dining Reservation">Darbhanga Royal Table Reservation Only</option>
                </select>
              </div>

              {/* Field 3A: Check-in Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Check-In Date</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  min={todayStr}
                  value={formData.checkIn}
                  onChange={(e) => {
                    setFormData({ ...formData, checkIn: e.target.value });
                    if (errors.checkIn) setErrors({ ...errors, checkIn: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1C1814] border ${
                    errors.checkIn ? 'border-red-500' : 'border-[#4A3F33]'
                  } text-white text-sm focus:outline-none focus:border-[#C5A059] transition-colors`}
                />
                {errors.checkIn && (
                  <p className="text-xs text-red-400 mt-1">{errors.checkIn}</p>
                )}
              </div>

              {/* Field 3B: Check-out Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Check-Out Date</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  min={formData.checkIn || todayStr}
                  value={formData.checkOut}
                  onChange={(e) => {
                    setFormData({ ...formData, checkOut: e.target.value });
                    if (errors.checkOut) setErrors({ ...errors, checkOut: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1C1814] border ${
                    errors.checkOut ? 'border-red-500' : 'border-[#4A3F33]'
                  } text-white text-sm focus:outline-none focus:border-[#C5A059] transition-colors`}
                />
                {errors.checkOut && (
                  <p className="text-xs text-red-400 mt-1">{errors.checkOut}</p>
                )}
              </div>

              {/* Field 4: Guests (Adults & Children) */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Number of Guests</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] text-stone-400 block mb-1">Adults (Age 12+)</label>
                    <select
                      value={formData.adults}
                      onChange={(e) =>
                        setFormData({ ...formData, adults: parseInt(e.target.value, 10) })
                      }
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1C1814] border border-[#4A3F33] text-white text-sm focus:outline-none focus:border-[#C5A059]"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Adult' : 'Adults'}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-stone-400 block mb-1">Children (Under 12)</label>
                    <select
                      value={formData.children}
                      onChange={(e) =>
                        setFormData({ ...formData, children: parseInt(e.target.value, 10) })
                      }
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1C1814] border border-[#4A3F33] text-white text-sm focus:outline-none focus:border-[#C5A059]"
                    >
                      {[0, 1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Child' : 'Children'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Field 6: Special Requests / Message */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Special Requests or Concierge Notes</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Flight arrival timing for Rajghat boat pickup, Sattvic meals (no onion/garlic), Kashi Vishwanath escorted darshan, or anniversary setup..."
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData({ ...formData, specialRequests: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#1C1814] border border-[#4A3F33] text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>
            </div>

            {/* Direct Booking Guarantees */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400 border-t border-[#3A3127]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Complimentary Private Royal Bajra Boat Transfer Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Zero Booking Fees · Flexible Rescheduling</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-[#C5A059] hover:bg-[#B38D45] text-stone-950 text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Securing Palace Availability...</span>
                ) : (
                  <>
                    <span>Confirm Reservation Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Our Brands Floating Loop */}
        <div className="py-8 border-y border-[#352C23] mb-16 overflow-hidden">
          <div className="text-center mb-5">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
              Our Brands & Hospitality Portfolio
            </span>
          </div>
          <div className="relative overflow-hidden whitespace-nowrap">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#1C1814] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#1C1814] to-transparent z-10 pointer-events-none" />

            <div className="inline-flex animate-marquee-horizontal items-center gap-12 sm:gap-16">
              {[
                'Taj',
                'Claridges',
                'Atmantan',
                'Brij',
                'SeleQtions',
                'Clarks',
                'Gateway',
                'Vivanta',
                'Ginger',
                'Tree of Life',
                'Ama',
                'Qmin',
                'Soulinaire',
                'Taj Sats',
              ].map((brand, idx) => (
                <div key={idx} className="flex items-center gap-12 sm:gap-16">
                  <span className="font-royal text-base sm:text-lg font-bold tracking-widest text-stone-300 hover:text-[#C5A059] transition-colors cursor-default">
                    {brand}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D3B]/60" />
                </div>
              ))}
              {/* Duplicate set for seamless continuous horizontal loop */}
              {[
                'Taj',
                'Claridges',
                'Atmantan',
                'Brij',
                'SeleQtions',
                'Clarks',
                'Gateway',
                'Vivanta',
                'Ginger',
                'Tree of Life',
                'Ama',
                'Qmin',
                'Soulinaire',
                'Taj Sats',
              ].map((brand, idx) => (
                <div key={`dup-${idx}`} className="flex items-center gap-12 sm:gap-16">
                  <span className="font-royal text-base sm:text-lg font-bold tracking-widest text-stone-300 hover:text-[#C5A059] transition-colors cursor-default">
                    {brand}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D3B]/60" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Navigation & Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-[#352C23]">
          {/* Col 1: Property Branding */}
          <div className="space-y-4">
            <span className="font-royal text-xl font-bold tracking-widest text-white block">
              BRIJRAMA PALACE
            </span>
            <p className="text-xs text-stone-400 leading-relaxed">
              Varanasi’s premier 210-year-old Maratha heritage fortress on Darbhanga Ghat,
              celebrating regal hospitality, sacred tranquility, and authentic vegetarian culinary artistry.
            </p>
            <div className="text-xs text-[#C5A059] font-medium">
              4.8 / 5 Rating · 3,300+ Traveler Reviews
            </div>
            <div className="pt-2 text-xs text-stone-400">
              <span className="text-stone-500 block text-[10px] uppercase font-bold">Property Location:</span>
              <p>{HOTEL_DETAILS.address}</p>
              <p className="mt-1 font-semibold text-white">Direct: {HOTEL_DETAILS.phone}</p>
            </div>
          </div>

          {/* Col 2: CONTACT (Brij Hotels Corporate) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              CONTACT
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <p className="font-royal text-base font-bold text-white">Brij Hotels</p>
              <p className="text-stone-400 leading-relaxed">
                Plot No. 55, 5th Floor, Shree Vihar Colony,<br />
                Durgapura, Jaipur – 302 018
              </p>
              <div className="pt-2 space-y-1.5">
                <div>
                  <span className="text-stone-500">Email: </span>
                  <a
                    href="mailto:reservations@brijhotels.com"
                    className="text-white hover:text-[#C5A059] transition-colors"
                  >
                    reservations@brijhotels.com
                  </a>
                </div>
                <div>
                  <span className="text-stone-500">Phone: </span>
                  <a
                    href="tel:+918069057704"
                    className="text-white hover:text-[#C5A059] font-semibold tabular-nums transition-colors"
                  >
                    +91 80690 57704
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#dining" className="hover:text-white transition-colors">
                  Culinary Offerings
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Celebrations at Brij
                </a>
              </li>
              <li>
                <a href="#booking-section" className="hover:text-white transition-colors">
                  Meetings & Conferences
                </a>
              </li>
              <li>
                <a href="#suites" className="hover:text-white transition-colors">
                  Suites & Heritage Rooms
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#booking-section" className="hover:text-white transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Sacred Heritage Norms */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Sacred Heritage Norms
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              In accordance with local reverence, BrijRama Palace strictly serves 100% vegetarian cuisine
              and maintains an alcohol-free environment. Smoking is strictly prohibited within heritage quarters.
            </p>
            <div className="pt-2 border-t border-[#352C23]">
              <button
                onClick={onOpenBoatModal}
                className="text-xs text-[#C5A059] hover:underline cursor-pointer"
              >
                Ghat Boat Transfer Protocol &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} BrijRama Palace, Varanasi - By the Ganges. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#suites" className="hover:text-stone-400 transition-colors">
              Heritage Suites
            </a>
            <a href="#dining" className="hover:text-stone-400 transition-colors">
              Darbhanga Dining
            </a>
            <a href="#location" className="hover:text-stone-400 transition-colors">
              Directions & Map
            </a>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmationData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs overflow-y-auto">
          <div
            className="relative w-full max-w-lg bg-[#FAF8F5] text-stone-900 rounded-2xl border border-[#E5DAC6] shadow-2xl overflow-hidden my-8"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="p-6 bg-[#26211C] text-white flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold block">
                    Reservation Confirmed
                  </span>
                  <h3 className="font-royal text-xl font-bold">Dhanyavaad, Royal Guest</h3>
                </div>
              </div>
              <button
                onClick={() => setConfirmationData(null)}
                className="text-stone-400 hover:text-white p-1 rounded cursor-pointer"
                aria-label="Close confirmation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div className="p-4 bg-white rounded-xl border border-[#E8DFC8] space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <span className="text-xs text-stone-500">Booking Reference</span>
                  <span className="font-royal text-sm font-bold text-[#8C6D3B] tabular-nums">
                    {confirmationData.bookingRef}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Guest Name</span>
                    <span className="font-semibold text-stone-900">{confirmationData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Selected Suite</span>
                    <span className="font-semibold text-stone-900">{confirmationData.suitePreference}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Stay Dates</span>
                    <span className="font-semibold text-stone-900">
                      {confirmationData.checkIn} to {confirmationData.checkOut}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Guests</span>
                    <span className="font-semibold text-stone-900">
                      {confirmationData.adults} Adults
                      {confirmationData.children > 0 ? `, ${confirmationData.children} Children` : ''}
                    </span>
                  </div>
                </div>

                {confirmationData.specialRequests && (
                  <div className="pt-2 border-t border-stone-100 text-xs">
                    <span className="text-stone-400 block text-[10px] uppercase">Special Notes</span>
                    <span className="text-stone-700 italic">"{confirmationData.specialRequests}"</span>
                  </div>
                )}
              </div>

              {/* Next Steps Notification */}
              <div className="p-4 bg-[#F4EDE0] rounded-xl border border-[#E5D7BF] text-xs text-stone-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900 uppercase tracking-wider text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-[#8C6D3B]" />
                  <span>Our Concierge is Preparing Your Arrival</span>
                </div>
                <p className="leading-relaxed">
                  A formal reservation voucher has been logged for <strong>{confirmationData.email}</strong>.
                  Our senior palace reservation manager will connect with you via phone ({confirmationData.phone})
                  within 2 hours to confirm private bajra boat pickup timing at Rajghat.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                <span>Immediate inquiries: {HOTEL_DETAILS.phone}</span>
                <span className="text-[#8C6D3B] font-semibold">24/7 Front Desk</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-stone-100 border-t border-[#EAE2D3] flex items-center justify-between">
              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Summary</span>
              </button>

              <button
                onClick={() => setConfirmationData(null)}
                className="px-5 py-2 bg-stone-900 hover:bg-[#8C6D3B] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
