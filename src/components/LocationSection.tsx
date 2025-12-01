import { MapPin, Clock, Building2, Plane, Train, Car } from 'lucide-react';

const LocationSection = () => {
  const advantages = [
    { icon: Car, text: 'Direct access to Dwarka Expressway' },
    { icon: MapPin, text: 'Central Peripheral Road (CPR) – Nearby' },
    { icon: Train, text: 'Upcoming Metro – Easy Access' },
    { icon: Building2, text: 'Upcoming ISBT - 1 minute' },
    { icon: Clock, text: 'Cyber City 2 and Vision City - Near' },
    { icon: Building2, text: 'IICC - 15 minutes' },
    { icon: Plane, text: 'Indira Gandhi International Airport - 25 Km' },
  ];

  return (
    <section id="location" className="py-20 lg:py-32 bg-charcoal text-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-copper font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Prime Connectivity
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Strategic <span className="text-copper">Location</span>
          </h2>
          <p className="text-cream/70 font-sans text-lg max-w-2xl mx-auto">
            Sector 36A, Gurugram - At the heart of Delhi NCR's growth corridor
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-copper to-gold mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-elegant">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.936150781363!2d76.96321999678953!3d28.421183400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d178a86b5ae6f%3A0x99f9b67e04618c25!2sEstate%20360%20by%20Max%20Estates!5e0!3m2!1sen!2sin!4v1764615999857!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Max Estate 361 Location Map"
              className="w-full h-[400px] lg:h-full min-h-[400px]"
            />
          </div>

          {/* Location Advantages */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-8 text-cream">
              Location Advantages
            </h3>
            <div className="space-y-4">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-charcoal-light/50 backdrop-blur-sm rounded-xl p-4 border border-copper/10 hover:border-copper/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-copper/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-copper" />
                  </div>
                  <span className="text-cream/90 font-sans">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="mt-8 p-6 bg-copper/10 rounded-xl border border-copper/20">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-copper flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-semibold text-cream mb-1">Project Address</h4>
                  <p className="text-cream/70 font-sans">
                    Sector 36A, Gurugram, Haryana<br />
                    Near Dwarka Expressway
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
