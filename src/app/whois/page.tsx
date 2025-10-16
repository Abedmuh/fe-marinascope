'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/common/Layout';
import { AboutSection } from '@/components/common/AboutSection';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AboutPage = () => {
  const [selected, setSelected] = useState<"ip" | "dns">("ip");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const customAboutData = {
    title: "About Our Company",
    description: "Learn about our mission and values",
    content: 
      "We are a forward-thinking technology company dedicated to creating innovative solutions that empower businesses and individuals to achieve their goals."
  };

  const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  const dnsRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/;

  const handleSearch = () => {
    if (selected === "ip" && !ipRegex.test(query)) {
      setError("Masukkan IP address yang valid, contoh: 8.8.8.8");
      return;
    }
    if (selected === "dns" && !dnsRegex.test(query)) {
      setError("Masukkan domain yang valid, contoh: trip.ferizy.com");
      return;
    }

    setError("");
    alert(`Mencari ${selected.toUpperCase()}: ${query}`);
  };

  return (
    <Layout>
      <Card className="flex justify-center">
          <CardHeader>
            <CardTitle className="text-xl">About</CardTitle>
            <h3 className="mb-3">
              Cari website internal ASDP atau IP address internal ASDP
            </h3>

            <div className="flex items-center gap-2">

              <Input
                type="text"
                placeholder={selected === "ip" ? "Contoh : 8.8.8.8" : "Contoh : trip.ferizy.com"}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1"
              />

              <div className="flex rounded-full border border-gray-300 bg-gray-100 overflow-hidden">
                <button
                  onClick={() => {
                    setSelected("ip");
                    setQuery("");
                    setError("");
                  }}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selected === "ip"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                  } rounded-l-full`}
                  >
                  IP
                </button>

                <button
                  onClick={() => {
                    setSelected("dns");
                    setQuery("");
                    setError("");
                  }}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selected === "dns"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                  } rounded-r-full`}
                  >
                  DNS
                </button>
                  
              </div>

              <Button type="button" variant="outline" onClick={handleSearch}>
                Cari
              </Button>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </CardHeader>
          <CardHeader>
            <div className="p-6">
            <AboutSection aboutData={customAboutData} />
          </div>
          </CardHeader>
      </Card>
    </Layout>
  );
};

export default AboutPage;
