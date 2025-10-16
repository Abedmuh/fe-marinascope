// components/AboutSection.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AboutData {
  title?: string;
  description?: string;
  content: string;
}

interface AboutSectionProps {
  aboutData?: AboutData;
  className?: string;
}

const defaultAboutData: AboutData = {
  title: "About Our Company",
  description: "Learn about our mission and values",
  content: 
    "We are a forward-thinking technology company dedicated to creating innovative solutions that empower businesses and individuals to achieve their goals."
  ,
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
      <p className="text-gray-700 mb-4">{aboutData.content}</p>
    </CardContent>
  </Card>
);

export default AboutSection;