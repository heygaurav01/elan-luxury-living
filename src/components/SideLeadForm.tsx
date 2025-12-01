import LeadForm from './LeadForm';

const SideLeadForm = () => {
  return (
    <div 
      className="hidden lg:block z-50 w-[380px]"
      style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      <LeadForm />
    </div>
  );
};

export default SideLeadForm;
