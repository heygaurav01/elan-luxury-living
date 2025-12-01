import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingCTAProps {
  onEnquireClick: () => void;
}

const FloatingCTA = ({ onEnquireClick }: FloatingCTAProps) => {
  return (
    <>
      {/* Mobile Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-t border-copper/20 p-3 safe-area-pb">
        <div className="flex gap-2">
          <a href="tel:+918200801802" className="flex-1">
            <Button variant="luxuryOutline" className="w-full text-cream border-cream/50">
              <Phone className="w-4 h-4" />
              Call
            </Button>
          </a>
          <a href="https://wa.me/918200801802" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="whatsapp" className="w-full">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </a>
          <Button variant="luxury" className="flex-1" onClick={onEnquireClick}>
            Enquire
          </Button>
        </div>
      </div>

      {/* Desktop Floating Buttons */}
      <div className="hidden lg:flex fixed right-6 bottom-6 z-50 flex-col gap-3">
        <a
          href="https://wa.me/918200801802"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-elegant hover:scale-110 transition-transform animate-pulse-glow"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
        <a
          href="tel:+918200801802"
          className="w-14 h-14 bg-copper rounded-full flex items-center justify-center shadow-elegant hover:scale-110 transition-transform"
        >
          <Phone className="w-7 h-7 text-cream" />
        </a>
      </div>
    </>
  );
};

export default FloatingCTA;
