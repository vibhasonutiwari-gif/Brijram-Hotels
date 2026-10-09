import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HeritageOverview } from './components/HeritageOverview';
import { SuitesShowcase } from './components/SuitesShowcase';
import { ExperientialPackages } from './components/ExperientialPackages';
import { FacilitiesSection } from './components/FacilitiesSection';
import { DiningSection } from './components/DiningSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { BookingFooter } from './components/BookingFooter';
import { BoatTransferModal } from './components/BoatTransferModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { VirtualTourModal } from './components/VirtualTourModal';
import { BookingAssistantModal } from './components/BookingAssistantModal';
import { Suite } from './data/hotelData';

export default function App() {
  const [selectedSuite, setSelectedSuite] = useState<string>('Mayur Mahal Room');
  const [isBoatModalOpen, setIsBoatModalOpen] = useState<boolean>(false);
  const [activeModalSuite, setActiveModalSuite] = useState<Suite | null>(null);
  const [activeTourSuite, setActiveTourSuite] = useState<Suite | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);

  const scrollToBooking = (suiteName?: string) => {
    if (suiteName) {
      setSelectedSuite(suiteName);
    }
    const bookingElement = document.getElementById('booking-section');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSuites = () => {
    const suitesElement = document.getElementById('suites');
    if (suitesElement) {
      suitesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 font-sans-body flex flex-col selection:bg-[#E4D5BC] selection:text-stone-900">
      {/* 1. Sticky Navigation Bar */}
      <Header
        onBookClick={() => scrollToBooking()}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Riverfront Hero Banner with Parallax Depth */}
        <Hero
          onBookClick={() => scrollToBooking()}
          onExploreSuites={scrollToSuites}
        />

        {/* 3. Heritage Architectural Overview */}
        <HeritageOverview />

        {/* 4. Heritage Suites Showcase */}
        <SuitesShowcase
          onReserveSuite={(suiteName) => scrollToBooking(suiteName)}
          onOpenRoomModal={(suite) => setActiveModalSuite(suite)}
          onOpenVirtualTour={(suite) => setActiveTourSuite(suite)}
        />

        {/* 5. Experiential Packages Module */}
        <ExperientialPackages
          onBookPackage={(packageTitle) => scrollToBooking(packageTitle)}
        />

        {/* 6. Hotel Facilities & Signature Amenities */}
        <FacilitiesSection
          onOpenBoatModal={() => setIsBoatModalOpen(true)}
          onBookClick={() => scrollToBooking()}
        />

        {/* 7. Signature Vegetarian Dining (Darbhanga) */}
        <DiningSection
          onReserveTable={() => scrollToBooking('Darbhanga Dining Reservation')}
        />

        {/* 8. 3x3 Floating Testimonials Grid Loop */}
        <TestimonialsSection />

        {/* 9. Verified Location & Ghat Directions */}
        <LocationSection onOpenBoatModal={() => setIsBoatModalOpen(true)} />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 11. Direct Reservation Footer Form & Property Legal */}
      <BookingFooter
        selectedSuite={selectedSuite}
        onSuiteChange={(suite) => setSelectedSuite(suite)}
        onOpenBoatModal={() => setIsBoatModalOpen(true)}
      />

      {/* Interactive Modals */}
      <BoatTransferModal
        isOpen={isBoatModalOpen}
        onClose={() => setIsBoatModalOpen(false)}
        onBookClick={() => scrollToBooking()}
      />

      <RoomDetailModal
        suite={activeModalSuite}
        isOpen={!!activeModalSuite}
        onClose={() => setActiveModalSuite(null)}
        onReserve={(suiteName) => {
          setActiveModalSuite(null);
          scrollToBooking(suiteName);
        }}
      />

      <VirtualTourModal
        suite={activeTourSuite}
        isOpen={!!activeTourSuite}
        onClose={() => setActiveTourSuite(null)}
        onReserve={(suiteName) => {
          setActiveTourSuite(null);
          scrollToBooking(suiteName);
        }}
      />

      <BookingAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        onApplyPlan={(plan) => {
          scrollToBooking(plan.suiteName);
        }}
      />
    </div>
  );
}

