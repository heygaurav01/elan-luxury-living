import { Building2, Trees, Users, Award } from 'lucide-react';

const OverviewSection = () => {
  const highlights = [
    {
      icon: Building2,
      title: '2, 3 & 4 BHK',
      subtitle: 'Configurations',
    },
    {
      icon: Trees,
      title: '2400 - 4063 Sq. Ft.',
      subtitle: 'Area Range',
    },
    {
      icon: Users,
      title: '₹ 5.20 Cr*',
      subtitle: 'Starting Price',
    },
    {
      icon: Award,
      title: 'New Launch',
      subtitle: 'Premium Project',
    },
  ];

  const features = [
    'Signature Offerings - Only 2 Towers (approx. 350 units only)',
    'Now Launching: 4-Side open apartment with wrap around Deck',
    'Each Tower: G+46 floors with 6+1 high-speed elevators',
    '2.0 lakh sq. ft. Double heighted Social Club',
    'All-weather pool and sports dedicated block',
    'In-house Healthcare & Longevity-focused Wellness',
  ];

  return (
    <section id="overview" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-copper font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Project Overview
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            MAX ESTATE <span className="text-copper">361</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-copper to-gold mx-auto" />
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-6 text-center shadow-card hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-copper/20 transition-colors">
                <item.icon className="w-7 h-7 text-copper" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground font-sans text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-cream rounded-2xl p-8 lg:p-12 shadow-card">
            <p className="text-foreground font-sans text-lg leading-relaxed mb-8">
              Max Estate 361 brings thoughtfully designed luxury 3 & 4 BHK residences to the emerging urban hub of Dwarka Expressway, crafted to blend modern comfort with mindful senior living. Located in Sector 36A, Gurugram, within the prestigious Max Estate development, this first-of-its-kind intergenerational community spans 18.5 Acres and features six premium towers—including two dedicated senior-living residences managed by Antara.
            </p>
            <p className="text-foreground font-sans text-lg leading-relaxed mb-8">
              With 5.5 acres lush green area, and 100+ world-class amenities, all within a serene, car-free landscape. With IGBC Platinum pre-certification and seamless connectivity to Cyber City, IGI Airport, and upcoming Global City, Max Estate 361 is set to become one of the most anticipated landmark developments by Max Estates in Delhi NCR.
            </p>

            {/* Features List */}
            <div className="border-t border-border pt-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">Key Highlights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground font-sans text-base">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
