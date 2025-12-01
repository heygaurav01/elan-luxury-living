import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import GallerySection from '@/components/GallerySection';
import PriceSection from '@/components/PriceSection';
import MasterPlanSection from '@/components/MasterPlanSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import SideLeadForm from '@/components/SideLeadForm';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  const [showPopupForm, setShowPopupForm] = useState(false);
  const [popupTitle, setPopupTitle] = useState('Register for Exclusive Offers');

  const handleEnquireClick = () => {
    setPopupTitle('Register for Exclusive Offers');
    setShowPopupForm(true);
  };

  const handleActionClick = (action: string) => {
    setPopupTitle(action);
    setShowPopupForm(true);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* SEO-optimized content */}
      <h1 className="sr-only">
        Max Estate 361 - Luxury 3 & 4 BHK Apartments in Sector 36A, Gurgaon | Starting ₹5.20 Cr
      </h1>

      <Header />
      
      {/* Side Lead Form - Desktop Only */}
      <SideLeadForm />

      {/* Main Content - Adjusted for side form */}
      <div className="lg:pr-[360px]">
        <HeroSection onEnquireClick={handleEnquireClick} />
        <OverviewSection />
        <AmenitiesSection />
        <GallerySection />
        <PriceSection onActionClick={handleActionClick} />
        <MasterPlanSection />
        <LocationSection />
      </div>

      <Footer />

      {/* Floating CTA Buttons */}
      <FloatingCTA onEnquireClick={handleEnquireClick} />

      {/* Popup Form */}
      {showPopupForm && (
        <LeadForm
          isPopup
          onClose={() => setShowPopupForm(false)}
          title={popupTitle}
        />
      )}

      {/* Mobile Bottom Padding */}
      <div className="lg:hidden h-20" />
    </main>
  );
};

export default Index;
