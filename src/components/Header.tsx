import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Price List', href: '#price' },
    { label: 'Master Plan', href: '#masterplan' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-elegant py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src={logo} 
            alt="Max Estate 361 Logo" 
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cream/90 hover:text-copper font-sans text-sm font-medium tracking-wide transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-copper after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+918200801802">
            <Button variant="luxuryOutline" size="sm" className="text-cream border-cream/50 hover:border-copper hover:text-copper">
              <Phone className="w-4 h-4" />
              +91 8200 801 802
            </Button>
          </a>
          <a href="https://wa.me/918200801802" target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="sm">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-charcoal/98 backdrop-blur-md border-t border-copper/20 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-cream/90 hover:text-copper font-sans text-base font-medium py-2 border-b border-copper/10"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a href="tel:+918200801802">
                <Button variant="luxuryOutline" className="w-full text-cream border-cream/50">
                  <Phone className="w-4 h-4" />
                  +91 8200 801 802
                </Button>
              </a>
              <a href="https://wa.me/918200801802" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="w-full">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
