// components/AboutSection.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AboutData {
  title?: string;
  description?: string;
  content: string[];
  mission: string;
  vision: string;
}

interface AboutSectionProps {
  aboutData?: AboutData;
  className?: string;
}

const defaultAboutData: AboutData = {
  title: "About Our Company",
  description: "Learn about our mission and values",
  content: [
    "We are a forward-thinking technology company dedicated to creating innovative solutions that empower businesses and individuals to achieve their goals.",
    "Founded in 2020, we have grown to become a trusted partner for companies worldwide, delivering cutting-edge software solutions with a focus on user experience and reliability."
  ],
  mission: "To democratize technology and make powerful tools accessible to everyone.",
  vision: "To be the leading platform that bridges the gap between innovation and implementation."
};

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  aboutData = defaultAboutData,
  className = ''
}) => (
  <Card className={className}>
    <CardHeader>
      <CardTitle>{aboutData.title}</CardTitle>
      {aboutData.description && (
        <CardDescription>{aboutData.description}</CardDescription>
      )}
    </CardHeader>
    <CardContent>
      {aboutData.content.map((paragraph, index) => (
        <p key={index} className="text-gray-700 mb-4">
          {paragraph}
        </p>
      ))}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Our Mission</h3>
          <p className="text-blue-800 text-sm">{aboutData.mission}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">Our Vision</h3>
          <p className="text-green-800 text-sm">{aboutData.vision}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default AboutSection;