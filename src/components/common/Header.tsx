// components/Header.tsx
import React from 'react';

interface HeaderProps {
  title: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, className = '' }) => (
  <header className={`bg-white shadow-sm border-b ${className}`}>
    <div className="container mx-auto px-6 py-4">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
    </div>
  </header>
);

export default Header;