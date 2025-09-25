// components/ContactForm.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  title?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  onSubmit,
  title = "Send us a Message",
  className = ''
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Form submitted:', formData);
    }
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={className}>
      <h3 className="font-semibold mb-4">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Textarea 
          name="message"
          placeholder="Your Message" 
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactForm;