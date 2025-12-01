import {
  Building,
  UtensilsCrossed,
  Dumbbell,
  Users,
  GlassWater,
  Baby,
  BookOpen,
  Trophy,
  Waves,
  TreePine,
  Car,
  ShieldCheck,
  Wifi,
  Sparkles,
  HeartPulse,
  Music,
} from 'lucide-react';

const AmenitiesSection = () => {
  const amenities = [
    { icon: Building, title: 'Double Heighted Clubhouse', description: '2.0 lakh sq. ft. Social Club' },
    { icon: UtensilsCrossed, title: 'All Day Dining', description: 'Alfresco Seating & Fine Dining' },
    { icon: Dumbbell, title: 'Premium Gym', description: 'State-of-the-art Equipment' },
    { icon: Users, title: 'Club Room', description: 'Exclusive Members Lounge' },
    { icon: GlassWater, title: 'Juice Bar', description: 'Fresh & Healthy Beverages' },
    { icon: Baby, title: 'Creche', description: 'With Play Equipment' },
    { icon: BookOpen, title: 'Reading Room', description: 'Quiet Study Space' },
    { icon: Trophy, title: 'Sports Area', description: 'Multi-sport Facilities' },
    { icon: Waves, title: 'All-Weather Pool', description: 'Temperature Controlled' },
    { icon: TreePine, title: 'Lush Green Area', description: '5.5 Acres of Greenery' },
    { icon: Car, title: 'Car-Free Landscape', description: 'Pedestrian-Friendly Zone' },
    { icon: ShieldCheck, title: '24/7 Security', description: 'Multi-tier Security System' },
    { icon: Wifi, title: 'Smart Home', description: 'IoT Enabled Homes' },
    { icon: Sparkles, title: 'Wellness Center', description: 'Spa & Relaxation' },
    { icon: HeartPulse, title: 'Healthcare', description: 'In-house Medical Facilities' },
    { icon: Music, title: 'Amphitheatre', description: 'Open-air Entertainment' },
  ];

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-charcoal text-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-copper font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            World-Class Living
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Exclusive <span className="text-copper">Amenities</span>
          </h2>
          <p className="text-cream/70 font-sans text-lg max-w-2xl mx-auto">
            Experience luxury living with 100+ world-class amenities designed for modern families
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-copper to-gold mx-auto mt-6" />
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="group bg-charcoal-light/50 backdrop-blur-sm rounded-xl p-6 border border-copper/10 hover:border-copper/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-copper/20 transition-colors">
                <amenity.icon className="w-6 h-6 text-copper" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-cream mb-1">{amenity.title}</h3>
              <p className="text-cream/60 font-sans text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Feature */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-copper/10 backdrop-blur-sm px-8 py-4 rounded-full border border-copper/20">
            <span className="text-copper font-serif text-2xl font-bold">100+</span>
            <span className="text-cream font-sans">Premium Amenities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
