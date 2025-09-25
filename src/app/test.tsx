'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, User, Settings, Mail, Star, Zap, Shield, Smartphone } from 'lucide-react';
import { Header } from '@/components/common/Header';
import { Navigation, NavItem } from '@/components/common/Navigation';
import { FeatureCard } from '@/components/common/FeatureCard';
import { ServiceCard } from '@/components/common/ServiceCard';
import { ContactForm } from '@/components/common/ContactForm';
import { ContactInfo, ContactInfoData } from '@/components/common/ContactInfo';
import { FeatureGrid, Feature } from '@/components/common/FeatureGrid';
import { AboutSection } from '@/components/common/AboutSection';

const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const homeFeatures: Feature[] = [
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security for your data",
      color: "text-green-500"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Optimized for all devices and screens",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Fast",
      description: "Lightning-fast performance guaranteed",
      color: "text-yellow-500"
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Modern web applications",
      content: "Custom web applications built with React, Next.js, and the latest technologies to ensure optimal performance and user experience.",
      buttonText: "Get Quote"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform solutions",
      content: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
      buttonText: "Learn More",
      buttonVariant: "outline" as const
    },
    {
      title: "Cloud Solutions",
      description: "Scalable infrastructure",
      content: "Cloud-native applications and infrastructure solutions that scale with your business needs and ensure high availability.",
      buttonText: "Explore",
      buttonVariant: "outline" as const
    },
    {
      title: "Consulting",
      description: "Expert guidance",
      content: "Strategic technology consulting to help you make informed decisions and implement the right solutions for your business.",
      buttonText: "Contact Us"
    }
  ];

  const contactInfo: ContactInfoData = {
    email: "hello@company.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street<br />San Francisco, CA 94105"
  };

  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Message sent successfully!');
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={Star}
                title="Featured Product"
                description="Our most popular solution"
                content="Experience the future of digital solutions with our cutting-edge platform designed for modern businesses."
                buttonText="Get Started"
                gradient="from-blue-50 to-indigo-100 border-blue-200"
                onButtonClick={() => alert('Get Started clicked!')}
              />
              <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Optimized for performance"
                content="Built with Next.js and modern technologies to deliver exceptional speed and user experience."
                buttonText="Learn More"
                buttonVariant="outline"
                gradient="from-purple-50 to-pink-100 border-purple-200"
                onButtonClick={() => alert('Learn More clicked!')}
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Our Platform</CardTitle>
                <CardDescription>Discover what makes us different</CardDescription>
              </CardHeader>
              <CardContent>
                <FeatureGrid features={homeFeatures} />
              </CardContent>
            </Card>
          </div>
        );
        
      case 'about':
        return <AboutSection />;
        
      case 'services':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service}
                onButtonClick={() => alert(`${service.buttonText} clicked for ${service.title}!`)}
              />
            ))}
          </div>
        );
        
      case 'contact':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>We'd love to hear from you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactInfo contactInfo={contactInfo} />
                <ContactForm onSubmit={handleFormSubmit} />
              </div>
            </CardContent>
          </Card>
        );
        
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header title="TechCorp" />
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          <Navigation 
            navItems={navItems}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          
          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl capitalize">
                  {navItems.find(item => item.id === activeSection)?.label || 'Page'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {renderMainContent()}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;