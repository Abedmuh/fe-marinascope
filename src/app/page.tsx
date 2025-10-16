// app/page.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Zap, Shield, Smartphone } from 'lucide-react';
import { Layout } from '@/components/common/Layout';
import { FeatureCard } from '@/components/common/FeatureCard';
import { FeatureGrid, Feature } from '@/components/common/FeatureGrid';

const HomePage = () => {
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

  const handleGetStarted = () => {
    console.log('Get Started clicked!');
    // Add your logic here - maybe navigate to signup or pricing
  };

  const handleLearnMore = () => {
    console.log('Learn More clicked!');
    // Add your logic here - maybe navigate to about or features
  };

  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Home</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={Star}
                title="Featured Product"
                description="Our most popular solution"
                content="Experience the future of digital solutions with our cutting-edge platform designed for modern businesses."
                buttonText="Get Started"
                gradient="from-blue-50 to-indigo-100 border-blue-200"
                onButtonClick={handleGetStarted}
              />
              <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Optimized for performance"
                content="Built with Next.js and modern technologies to deliver exceptional speed and user experience."
                buttonText="Learn More"
                buttonVariant="outline"
                gradient="from-purple-50 to-pink-100 border-purple-200"
                onButtonClick={handleLearnMore}
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
        </CardContent>
      </Card>
    </Layout>
  );
};

export default HomePage;