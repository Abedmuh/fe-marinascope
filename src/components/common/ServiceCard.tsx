// components/ServiceCard.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  content: string;
  buttonText: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  onButtonClick?: () => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  content,
  buttonText,
  buttonVariant = "default",
  onButtonClick,
  className = ''
}) => (
  <Card className={className}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-4">{content}</p>
      <Button 
        variant={buttonVariant} 
        className="w-full"
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

export default ServiceCard;