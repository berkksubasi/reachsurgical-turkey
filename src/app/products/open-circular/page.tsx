'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function OpenCircularPage() {
  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Sol Taraf - Ürün Görseli ve Başlık */}
              <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12 flex flex-col justify-center">
                <div className="flex justify-center mb-8">
                  <Image
                    src="/images/open-circular.avif"
                    alt="REACH ACS-D Series Circular Staplers"
                    width={600}
                    height={300}
                    className="object-contain"
                  />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-[#002b49] text-center">
                  REACH ACS-D Series Circular Staplers
                </h1>
              </div>
              
              {/* Sağ Taraf - Özellik Kartları */}
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Kart 1 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">Precise Staple Height Control</h3>
                    <p className="text-gray-200">With Staple Height Indicator window.</p>
                  </div>
                  
                  {/* Kart 2 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">Thinner Anvil Design</h3>
                    <p className="text-gray-200">Facilitates easy manoeuvring in tight spaces during procedures.</p>
                  </div>
                  
                  {/* Kart 3 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">More Staples in the Cartridge</h3>
                    <p className="text-gray-200">Providing better hemostasis with maintained compression.</p>
                  </div>
                  
                  {/* Kart 4 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">180° Arc Indicator Window</h3>
                    <p className="text-gray-200">Easily confirm compression status from multiple angles.</p>
                  </div>
                  
                  {/* Kart 5 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">Tactile and Audio Feedback</h3>
                    <p className="text-gray-200">Help physicians to confirm a successful firing.</p>
                  </div>
                  
                  {/* Kart 6 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">Single-Handle Design</h3>
                    <p className="text-gray-200">Easier to manoeuvre and fire.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 