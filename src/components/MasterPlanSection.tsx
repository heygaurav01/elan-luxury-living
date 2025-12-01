import masterPlan from '@/assets/master-plan.png';

const MasterPlanSection = () => {
  return (
    <section id="masterplan" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-copper font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Estate Layout
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Master <span className="text-copper">Plan</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Our estate comprises of six luxury residences, with two dedicated senior living residences
            situated on one side of the estate, allowing them access to the larger ecosystem.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-copper to-gold mx-auto mt-6" />
        </div>

        {/* Master Plan Image */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elegant overflow-hidden p-4 lg:p-8">
            <img
              src={masterPlan}
              alt="Max Estate 361 - Master Plan showing 6 Residences, Schools, The Hub, The Antara Club"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-12 max-w-4xl mx-auto">
          {[
            { label: 'Total Towers', value: '6' },
            { label: 'Land Area', value: '18.5 Acres' },
            { label: 'Green Area', value: '5.5 Acres' },
            { label: 'Senior Living', value: '2 Towers' },
          ].map((item) => (
            <div key={item.label} className="bg-card rounded-xl p-6 text-center shadow-card">
              <span className="text-3xl font-serif font-bold text-copper">{item.value}</span>
              <p className="text-muted-foreground font-sans text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterPlanSection;
