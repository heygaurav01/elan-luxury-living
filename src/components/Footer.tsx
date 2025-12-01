import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <svg viewBox="0 0 50 50" className="w-12 h-12 text-copper">
                <path
                  fill="currentColor"
                  d="M25 5c-1.5 0-3 .5-4.2 1.5L10 15.5v24l10.8 9c2.4 2 6 2 8.4 0l10.8-9v-24l-10.8-9C28 5.5 26.5 5 25 5zm0 4c.7 0 1.4.2 2 .7l8 6.7v18.2l-8 6.7c-1.2 1-2.8 1-4 0l-8-6.7V16.4l8-6.7c.6-.5 1.3-.7 2-.7z"
                />
              </svg>
              <div className="ml-3">
                <span className="text-cream font-serif text-2xl font-semibold tracking-wide">MAX</span>
                <span className="text-cream/70 font-sans text-xs block -mt-1 tracking-[0.3em]">ESTATES</span>
              </div>
            </div>
            <p className="text-cream/70 font-sans leading-relaxed max-w-md">
              Max Estate 361 - Premium 3 & 4 BHK luxury residences in Sector 36A, Gurugram. 
              Experience world-class living with 100+ amenities in an 18.5-acre intergenerational community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {['Overview', 'Amenities', 'Gallery', 'Location', 'Price List', 'Master Plan'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="block text-cream/70 hover:text-copper font-sans transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+918200801802"
                className="flex items-center gap-3 text-cream/70 hover:text-copper font-sans transition-colors"
              >
                <Phone className="w-5 h-5 text-copper" />
                +91 8200 801 802
              </a>
              <a
                href="https://wa.me/918200801802"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/70 hover:text-copper font-sans transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-copper" />
                WhatsApp
              </a>
              <div className="flex items-start gap-3 text-cream/70">
                <MapPin className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                <span className="font-sans">Sector 36A, Gurugram, Haryana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-copper/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 font-sans text-sm text-center md:text-left">
              AUTHORIZED CHANNEL PARTNER RERA NUMBER: HARERA-PKL-REA-2735-2024
            </p>
            <p className="text-cream/50 font-sans text-sm">
              © {new Date().getFullYear()} Max Estates. All Rights Reserved.
            </p>
          </div>

          {/* Disclaimer */}
          <p className="text-cream/40 font-sans text-xs mt-6 leading-relaxed">
            Disclaimer: The content is for information purposes only and does not constitute an offer to avail of any service. 
            Prices mentioned are subject to change without notice and properties mentioned are subject to availability. 
            Images for representation purposes only. This is the official website of authorized marketing partner.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
