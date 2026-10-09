import React, { useState } from 'react';
import { Utensils, Sparkles, Leaf, Award, CheckCircle2, Calendar } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/hotelData';

interface DiningSectionProps {
  onReserveTable: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onReserveTable }) => {
  const [activeTab, setActiveTab] = useState<'banarasi' | 'continental'>('banarasi');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'chef' | 'sattvic'>('all');

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (item.category !== activeTab) return false;
    if (dietaryFilter === 'chef') return !!item.isChefSpecial;
    if (dietaryFilter === 'sattvic') return !!item.isSattvic;
    return true;
  });

  return (
    <section id="dining" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6D3B]">
            <Utensils className="w-3.5 h-3.5" />
            <span>Fine-Dining Signature Restaurant</span>
          </div>
          <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight text-balance">
            Darbhanga: Royal Pure Vegetarian Dining
          </h2>
          <p className="font-sans-body text-stone-600 text-sm sm:text-base leading-relaxed">
            In reverence to the sacred ethos of Varanasi, BrijRama Palace is strictly 100% pure vegetarian.
            Darbhanga revives royal Banarasi court feasts and global continental classics under vaulted stone arches.
          </p>
        </div>

        {/* Restaurant Atmosphere Showcase Card */}
        <div className="rounded-2xl overflow-hidden border border-[#E8DFC8] bg-white shadow-md mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 h-72 sm:h-96 relative bg-stone-900">
              <img
                src="/src/assets/images/darbhanga_dining_hall_1791545820707.jpg"
                alt="Darbhanga signature dining hall at BrijRama Palace Varanasi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-widest text-[#E6C98A] font-semibold block mb-1">
                  Heritage Ambiance
                </span>
                <p className="font-royal text-xl sm:text-2xl font-bold">
                  Silver Thali Service, Live Classical Ragas & Ghat Lanterns
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#FCFAF6]">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span>100% Pure Vegetarian · Sattvic Curations Available</span>
                </div>
                <h3 className="font-royal text-2xl font-bold text-stone-900">
                  A Royal Culinary Pilgrimage
                </h3>
                <p className="font-sans-body text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Every dish is prepared using fresh ingredients sourced from nearby organic river
                  farms, churned dairy, and rare Himalayan herbs. Sattvic preparations (without onion
                  and garlic) are passionately crafted upon request for visiting pilgrims and discerning guests.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D3B]" />
                    <span>Breakfast: 7:00 AM – 10:30 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D3B]" />
                    <span>Lunch: 12:30 PM – 3:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D3B]" />
                    <span>Royal High Tea: 4:30 PM – 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D3B]" />
                    <span>Dinner: 7:00 PM – 11:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onReserveTable}
                  className="w-full py-3 px-4 bg-stone-900 hover:bg-[#8C6D3B] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table at Darbhanga</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Signature Dishes Spotlight with Images */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8C6D3B] font-semibold block mb-1">
                Culinary Highlights
              </span>
              <h3 className="font-royal text-2xl sm:text-3xl font-bold text-stone-900">
                Signature Palace Delicacies
              </h3>
            </div>
            <span className="text-xs text-stone-500 hidden sm:inline">
              100% Pure Vegetarian · Heritage Recipes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU_ITEMS.filter((item) => item.image).map((item) => (
              <div
                key={`spotlight-${item.id}`}
                className="bg-white rounded-xl border border-[#E9DFCE] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {item.isChefSpecial && (
                        <span className="bg-stone-900/85 backdrop-blur-xs text-[#E6C98A] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                          Chef's Special
                        </span>
                      )}
                      {item.isSattvic && (
                        <span className="bg-emerald-900/85 backdrop-blur-xs text-emerald-200 text-[10px] font-semibold px-2 py-0.5 rounded">
                          Sattvic
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-baseline justify-between text-white">
                      <span className="text-xs font-medium text-stone-200">{item.subcategory}</span>
                      <span className="font-royal text-lg font-bold text-[#E6C98A] tabular-nums">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h4 className="font-royal text-lg font-bold text-stone-900 leading-snug">
                        {item.name}
                      </h4>
                    </div>
                    {item.hindiName && (
                      <span className="text-xs text-stone-400 font-medium block mb-2">
                        {item.hindiName}
                      </span>
                    )}
                    <p className="font-sans-body text-xs text-stone-600 leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="truncate italic max-w-[80%]">{item.ingredients}</span>
                  <span className="font-medium text-[#8C6D3B] shrink-0">Pure Veg</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Navigation & Dietary Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-[#EAE1D1]">
          {/* Main Category Tabs */}
          <div className="inline-flex p-1 bg-[#EFE8DC] rounded-xl border border-[#DFD5C2]">
            <button
              onClick={() => setActiveTab('banarasi')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'banarasi'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Traditional Banarasi & Indian
            </button>
            <button
              onClick={() => setActiveTab('continental')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'continental'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Global & Continental Classics
            </button>
          </div>

          {/* Dietary Filter Segmented Controls */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-500 font-medium hidden sm:inline">Filter:</span>
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              All Items ({MENU_ITEMS.filter((m) => m.category === activeTab).length})
            </button>
            <button
              onClick={() => setDietaryFilter('chef')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                dietaryFilter === 'chef'
                  ? 'bg-[#8C6D3B] text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              <Award className="w-3 h-3 text-[#B8860B]" />
              <span>Chef’s Special</span>
            </button>
            <button
              onClick={() => setDietaryFilter('sattvic')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                dietaryFilter === 'sattvic'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              <Leaf className="w-3 h-3 text-emerald-600" />
              <span>Sattvic (No Onion/Garlic)</span>
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#EAE2D3] p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image if available */}
                {item.image && (
                  <div className="h-44 sm:h-52 w-full rounded-lg overflow-hidden mb-4 bg-stone-100 relative group">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold text-[#E6C98A]">{item.subcategory}</span>
                      <span className="font-royal font-bold text-white tabular-nums">{item.price}</span>
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-royal text-lg font-bold text-stone-900">{item.name}</h4>
                      {item.isChefSpecial && (
                        <span className="text-[10px] font-bold text-[#8C6D3B] bg-[#FAF3E3] border border-[#E6D4B5] px-1.5 py-0.5 rounded">
                          Chef's Recommendation
                        </span>
                      )}
                    </div>
                    {item.hindiName && (
                      <span className="text-xs text-stone-400 font-medium">{item.hindiName}</span>
                    )}
                  </div>
                  {!item.image && (
                    <span className="font-royal text-lg font-bold text-[#8C6D3B] tabular-nums shrink-0">
                      {item.price}
                    </span>
                  )}
                </div>

                <p className="font-sans-body text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="truncate max-w-[70%] italic text-[11px]">
                  {item.ingredients}
                </span>
                <span className="font-medium text-stone-400 shrink-0 uppercase tracking-wider text-[10px]">
                  {item.subcategory}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sattvic & Dietary Note */}
        <div className="mt-12 p-6 bg-[#F4EFE6] rounded-xl border border-[#E3D7C1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white rounded-lg shadow-xs text-[#8C6D3B]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-royal text-sm font-bold text-stone-900">
                Bespoke Dietary & Sattvic Curations
              </h5>
              <p className="text-xs text-stone-600 mt-0.5">
                Our Executive Chef gladly caters to Jain, vegan, gluten-free, or specific vrat requirements.
              </p>
            </div>
          </div>
          <button
            onClick={onReserveTable}
            className="px-5 py-2.5 bg-stone-900 hover:bg-[#8C6D3B] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Inquire for Group Dining
          </button>
        </div>
      </div>
    </section>
  );
};
