// app/about/page.tsx
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/common/Layout';
import { AboutSection } from '@/components/common/AboutSection';

const AboutPage = () => {
  const customAboutData = {
    title: "About Our Company",
    description: "Learn about our mission and values",
    content: 
      "We are a forward-thinking technology company dedicated to creating innovative solutions that empower businesses and individuals to achieve their goals."
  };

  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">About</CardTitle>
        </CardHeader>
        <div className="p-6">
          <AboutSection aboutData={customAboutData} />
        </div>
      </Card>
    </Layout>
  );
};

export default AboutPage;