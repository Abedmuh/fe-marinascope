// components/Navigation.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface NavigationProps {
  navItems: NavItem[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  title?: string;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  navItems, 
  activeSection, 
  onSectionChange, 
  title = "Navigation",
  className = ''
}) => (
  <div className={`w-64 flex-shrink-0 ${className}`}>
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className="w-full justify-start gap-3"
                onClick={() => onSectionChange(item.id)}
              >
                <IconComponent className="h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </CardContent>
    </Card>
  </div>
);

export default Navigation;