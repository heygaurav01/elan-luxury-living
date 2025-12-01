import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-towers.png';

interface HeroSectionProps {
  onEnquireClick: () => void;
}

const HeroSection = ({ onEnquireClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Max Estate 361 - Luxury Residences in Sector 36A, Gurgaon"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-cream">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <div
            className="inline-block mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="bg-copper/20 backdrop-blur-sm border border-copper/30 text-cream px-6 py-2 rounded-full text-sm font-sans font-medium tracking-wider">
              Sector 36A, Gurgaon
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            MAX ESTATE <span className="text-copper">361</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-sans font-light mb-4 animate-fade-up text-cream/90"
            style={{ animationDelay: '0.3s' }}
          >
            3 BHK + Staff & 4 BHK + Staff Apartments
          </p>

          {/* Price */}
          <div
            className="mb-8 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="text-3xl md:text-4xl font-serif font-semibold">
              Starting at{' '}
              <span className="text-gradient bg-gradient-to-r from-copper to-gold bg-clip-text text-transparent">
                ₹ 5.20 Cr*
              </span>
            </span>
          </div>

          {/* Features */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {['18.5 Acres Estate', '6 Premium Towers', '100+ Amenities', 'IGBC Platinum'].map((feature) => (
              <span
                key={feature}
                className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-sans border border-cream/20"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={onEnquireClick}
              className="min-w-[200px]"
            >
              Enquire Now
            </Button>
            <Button
              variant="glass"
              size="xl"
              className="min-w-[200px] text-cream border-cream/30"
              onClick={onEnquireClick}
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#overview" className="text-cream/70 hover:text-copper transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>

      {/* Max Estates Logo Watermark */}
      <div className="absolute bottom-8 right-8 hidden lg:block opacity-50">
        <div className="flex items-center">
          <svg viewBox="0 0 50 50" className="w-16 h-16 text-cream">
            <path
              fill="currentColor"
              d="M25 5c-1.5 0-3 .5-4.2 1.5L10 15.5v24l10.8 9c2.4 2 6 2 8.4 0l10.8-9v-24l-10.8-9C28 5.5 26.5 5 25 5zm0 4c.7 0 1.4.2 2 .7l8 6.7v18.2l-8 6.7c-1.2 1-2.8 1-4 0l-8-6.7V16.4l8-6.7c.6-.5 1.3-.7 2-.7z"
            />
          </svg>
          <div className="ml-2">
            <span className="text-cream font-serif text-2xl font-semibold tracking-wide">MAX</span>
            <span className="text-cream/70 font-sans text-xs block -mt-1 tracking-[0.3em]">ESTATES</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
