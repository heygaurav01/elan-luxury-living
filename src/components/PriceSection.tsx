import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar } from 'lucide-react';

interface PriceSectionProps {
  onActionClick: (action: string) => void;
}

const PriceSection = ({ onActionClick }: PriceSectionProps) => {
  const floorPlans = [
    { type: '2 BHK + Staff', size: '2400 Sq. Ft.', price: 'On Request' },
    { type: '3 BHK + Staff', size: '3211 Sq. Ft.', price: 'On Request' },
    { type: '4 BHK + Staff', size: '4063 Sq. Ft.', price: 'On Request' },
    { type: 'Penthouse', size: '8000 - 9500 Sq. Ft.', price: 'On Request' },
  ];

  return (
    <section id="price" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-copper font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Investment Details
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Floor Plan & <span className="text-copper">Price List</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-copper to-gold mx-auto" />
        </div>

        {/* Price Table */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-2xl shadow-elegant overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-charcoal text-cream">
              <div className="p-4 lg:p-6 font-sans font-semibold text-sm lg:text-base">Unit Type</div>
              <div className="p-4 lg:p-6 font-sans font-semibold text-sm lg:text-base text-center">Unit Size</div>
              <div className="p-4 lg:p-6 font-sans font-semibold text-sm lg:text-base text-right">Price</div>
            </div>

            {/* Table Body */}
            {floorPlans.map((plan, index) => (
              <div
                key={plan.type}
                className={`grid grid-cols-3 border-b border-border last:border-0 ${
                  index % 2 === 0 ? 'bg-cream' : 'bg-card'
                }`}
              >
                <div className="p-4 lg:p-6">
                  <span className="font-serif font-semibold text-foreground text-sm lg:text-base">{plan.type}</span>
                </div>
                <div className="p-4 lg:p-6 text-center">
                  <span className="font-sans text-muted-foreground text-sm lg:text-base">{plan.size}</span>
                </div>
                <div className="p-4 lg:p-6 text-right">
                  <button
                    onClick={() => onActionClick('View Price List')}
                    className="text-copper hover:text-copper-dark font-sans font-medium text-sm lg:text-base underline underline-offset-2 transition-colors"
                  >
                    {plan.price}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="luxury"
            size="lg"
            onClick={() => onActionClick('Download Brochure')}
            className="min-w-[200px]"
          >
            <Download className="w-5 h-5" />
            Download Brochure
          </Button>
          <Button
            variant="luxuryOutline"
            size="lg"
            onClick={() => onActionClick('Price List')}
            className="min-w-[200px]"
          >
            <FileText className="w-5 h-5" />
            Price List
          </Button>
          <Button
            variant="dark"
            size="lg"
            onClick={() => onActionClick('Schedule Site Visit')}
            className="min-w-[200px]"
          >
            <Calendar className="w-5 h-5" />
            Schedule Site Visit
          </Button>
        </div>

        {/* Payment Plan Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-copper/10 px-6 py-3 rounded-full">
            <span className="text-copper font-sans font-medium">Flexible Payment Plans Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
