'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function OpenPPHPage() {
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
                    src="/images/open_pph.avif"
                    alt="REACH PPH-33D Procedure set for Hemorrhoid and Prolapse"
                    width={600}
                    height={300}
                    className="object-contain"
                  />
                </div>
                
                <h1 className="text-5xl md:text-4xl font-bold text-[#002b49] text-center">
                  REACH PPH-33D Procedure set<br />for Hemorrhoid and Prolapse
                </h1>
              </div>
              
              {/* Sağ Taraf - Özellik Kartları */}
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Kart 1 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">Adjustable Staple Height</h3>
                    <p className="text-gray-200 text-lg">
                      (0.8~1.5mm) precisely control stapled tissue thickness.
                    </p>
                  </div>
                  
                  {/* Kart 2 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">32 Staplers</h3>
                    <p className="text-gray-200 text-lg">
                      Provide better hemostasis and even pressure.
                    </p>
                  </div>
                  
                  {/* Kart 3 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">4 Suture Thread Holes</h3>
                    <p className="text-gray-200 text-lg">
                      Facilitates easy retrieving suture threads.
                    </p>
                  </div>
                  
                  {/* Kart 4 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">Fixed Anvil</h3>
                    <p className="text-gray-200 text-lg">
                      Reduces risk of accidental detachment.
                    </p>
                  </div>
                  
                  {/* Kart 5 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">Larger Housing Cavity</h3>
                    <p className="text-gray-200 text-lg">
                      Allows more tissue during stapling process.
                    </p>
                  </div>
                  
                  {/* Kart 6 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">63mm Length Central Rod</h3>
                    <p className="text-gray-200 text-lg">
                      Provides better view during procedure.
                    </p>
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