import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { X } from 'lucide-react';

interface LeadFormProps {
  isPopup?: boolean;
  onClose?: () => void;
  title?: string;
}

const LeadForm = ({ isPopup = false, onClose, title = "Register for Exclusive Offers" }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for your interest!",
      description: "Our team will contact you shortly.",
    });

    setFormData({ name: '', phone: '', email: '' });
    setIsSubmitting(false);

    if (isPopup && onClose) {
      onClose();
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setFormData({ ...formData, phone: value });
    if (errors.phone) setErrors({ ...errors, phone: '' });
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Name *"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: '' });
          }}
          className={`h-12 bg-cream border-border/50 focus:border-copper ${errors.name ? 'border-destructive' : ''}`}
        />
        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="flex gap-2">
        <div className="flex items-center gap-1 px-3 h-12 bg-cream border border-border/50 rounded-md">
          <span className="text-sm">🇮🇳</span>
          <span className="text-sm text-muted-foreground">+91</span>
        </div>
        <div className="flex-1">
          <Input
            type="tel"
            placeholder="Mobile No *"
            value={formData.phone}
            onChange={handlePhoneChange}
            className={`h-12 bg-cream border-border/50 focus:border-copper ${errors.phone ? 'border-destructive' : ''}`}
          />
        </div>
      </div>
      {errors.phone && <p className="text-destructive text-xs -mt-2">{errors.phone}</p>}

      <div>
        <Input
          type="email"
          placeholder="E-Mail Address (Optional)"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
          className={`h-12 bg-cream border-border/50 focus:border-copper ${errors.email ? 'border-destructive' : ''}`}
        />
        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
      </div>

      <Button
        type="submit"
        variant="luxury"
        className="w-full h-12"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Register Now'}
      </Button>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        I authorize company representatives to call, SMS, email or WhatsApp me about its products and offers.
      </p>
    </form>
  );

  if (isPopup) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-fade-in">
        <div className="bg-card rounded-xl shadow-elegant max-w-md w-full p-6 relative animate-scale-in">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-xl font-serif font-semibold text-center mb-6 text-foreground">{title}</h3>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl shadow-elegant p-6">
      <h3 className="text-xl font-serif font-semibold text-center mb-6 text-foreground">{title}</h3>
      {formContent}
      <div className="mt-4 text-center">
        <span className="inline-block bg-copper/10 text-copper px-4 py-2 rounded-full text-sm font-medium">
          New Launch • Premium Residences
        </span>
      </div>
    </div>
  );
};

export default LeadForm;
