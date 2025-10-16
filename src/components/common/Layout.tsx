'use client';

import React from 'react';
import { Home, User, Settings, Mail } from 'lucide-react';
import { Header } from './Header';
import { Navigation, NavItem } from './Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "TechCorp" 
}) => {
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'reverse-lg', label: 'Reverse LookingGlass', icon: User, href: '/reverse-lg' },
    { id: 'who-is', label: 'WhoIs', icon: Settings, href: '/whois' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header title={title} />
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          <Navigation navItems={navItems} />
          
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;