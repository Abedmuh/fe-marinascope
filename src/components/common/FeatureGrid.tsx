// components/FeatureGrid.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ 
  features, 
  columns = 3,
  className = ''
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 ${className}`}>
      {features.map((feature, index) => (
        <div key={index} className="text-center p-4">
          <feature.icon className={`h-12 w-12 ${feature.color} mx-auto mb-2`} />
          <h3 className="font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;