import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How do guests reach BrijRama Palace from the Airport or Railway Station?',
    answer:
      'Because Varanasi’s historic riverfront ghats are free of vehicular traffic, cars and cabs drop guests off at Rajghat / Bhainsasur Ghat car port. From there, BrijRama Palace’s private royal wooden Bajra boat transfers you smoothly across the sacred Ganges right to Darbhanga Ghat, where palace attendants welcome you.',
  },
  {
    question: 'Is BrijRama Palace strictly pure vegetarian and alcohol-free?',
    answer:
      'Yes. In deep reverence to the sacred sanctity of Kashi and the holy Ganges, BrijRama Palace is strictly 100% pure vegetarian and completely alcohol-free. Smoking is prohibited on palace grounds. Our signature restaurant Darbhanga also crafts traditional Sattvic preparations (without onion and garlic) as well as vegan and Jain meals upon request.',
  },
  {
    question: 'How is luggage transported across the river ghats?',
    answer:
      'You do not have to carry your luggage. Our palace valets meet your vehicle at the Rajghat car port, handle all baggage tags, transport the luggage safely aboard our dedicated fleet, and deliver it directly to your room or suite.',
  },
  {
    question: 'Can we view the famous Ganga Aarti from the palace?',
    answer:
      'Yes. BrijRama Palace sits directly adjacent to Dashashwamedh Ghat. Guests enjoy uninterrupted, serene viewing of the sacred evening Maha Aarti from our private rooftop terrace, as well as from the balconies of the Royal Ganges Suite, completely away from the crowded street banks.',
  },
  {
    question: 'Is the property senior citizen and wheelchair friendly?',
    answer:
      'Yes. BrijRama Palace is equipped with an internal passenger elevator—one of India’s first, originally installed in 1918 and thoroughly modernised—which connects the ghat boat landing directly to upper guest levels, restaurant, and suites without requiring guests to climb long outdoor stone steps.',
  },
  {
    question: 'What are the check-in and check-out timings?',
    answer:
      'Standard check-in is at 2:00 PM and check-out is at 12:00 PM (noon). Early check-in and late departures can be accommodated based on suite availability. Our royal front desk and boat concierge operate 24 hours a day to assist with late train or flight schedules.',
  },
  {
    question: 'Can the palace organize guided Kashi Vishwanath temple visits and heritage walks?',
    answer:
      'Yes. Our 24/7 royal concierge arranges escorted early-morning gali heritage walks, temple blessings at the Kashi Vishwanath Corridor with private Vedic pandits, Banarasi silk-weaving tours, and private dawn bajra boat excursions along the 84 ghats.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-[#FAF8F5] border-t border-[#E8DFC8]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6D3B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Essential Guest Inquiries</span>
          </div>
          <h2 className="font-royal text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="font-sans-body text-stone-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Everything you need to know about your arrival by boat, pure vegetarian culinary norms,
            and heritage rituals at BrijRama Palace.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E9DFCE] overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-royal text-base sm:text-lg font-bold text-stone-900">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-[#FAF4EA] text-[#8C6D3B] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-stone-900 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 font-sans-body leading-relaxed border-t border-stone-100/80">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-5 bg-[#F5EDE0] rounded-xl border border-[#E5DAC6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg text-[#8C6D3B] shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-royal text-sm font-bold text-stone-900">Have a Special Ingestion or Request?</h4>
              <p className="text-xs text-stone-600">Our concierge is on standby 24/7 for tailored arrangements.</p>
            </div>
          </div>
          <a
            href="tel:+919115555000"
            className="px-4 py-2 bg-stone-900 hover:bg-[#8C6D3B] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap"
          >
            Call Front Desk (+91 91155 55000)
          </a>
        </div>
      </div>
    </section>
  );
};
