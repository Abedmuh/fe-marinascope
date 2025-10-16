// components/Navigation.tsx
'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

interface NavigationProps {
  navItems: NavItem[];
  title?: string;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  navItems, 
  title = "Navigation",
  className = ''
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href;
  };

  return (
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
                  variant={isActive(item.href) ? "default" : "ghost"}
                  className="w-full justify-start gap-3"
                  onClick={() => handleNavigation(item.href)}
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
};

export default Navigation;