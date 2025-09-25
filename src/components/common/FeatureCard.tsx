// components/FeatureCard.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  content: string;
  buttonText?: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  gradient?: string;
  onButtonClick?: () => void;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  content,
  buttonText = "Learn More",
  buttonVariant = "default",
  gradient = "from-blue-50 to-indigo-100 border-blue-200",
  onButtonClick,
  className = ''
}) => (
  <Card className={`bg-gradient-to-br ${gradient} ${className}`}>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        {title}
      </CardTitle>
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

export default FeatureCard;