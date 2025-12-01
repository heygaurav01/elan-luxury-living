import LeadForm from './LeadForm';

const SideLeadForm = () => {
  return (
    <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40 w-[340px]">
      <LeadForm />
    </div>
  );
};

export default SideLeadForm;
