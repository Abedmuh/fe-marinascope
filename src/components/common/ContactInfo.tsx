// components/ContactInfo.tsx
import React from 'react';

export interface ContactInfoData {
  email: string;
  phone: string;
  address: string;
}

interface ContactInfoProps {
  contactInfo: ContactInfoData;
  title?: string;
  className?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ 
  contactInfo, 
  title = "Contact Information",
  className = ''
}) => (
  <div className={className}>
    <h3 className="font-semibold mb-4">{title}</h3>
    <div className="space-y-3">
      <div>
        <p className="font-medium">Email</p>
        <p className="text-gray-600">{contactInfo.email}</p>
      </div>
      <div>
        <p className="font-medium">Phone</p>
        <p className="text-gray-600">{contactInfo.phone}</p>
      </div>
      <div>
        <p className="font-medium">Address</p>
        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: contactInfo.address }}></p>
      </div>
    </div>
  </div>
);

export default ContactInfo;