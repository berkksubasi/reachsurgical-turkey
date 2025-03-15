'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function OpenLinearPage() {
  const t = useTranslations('products.openLinear');
  
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
                    src="/images/linear_open.avif"
                    alt={t('title')}
                    width={600}
                    height={300}
                    className="object-contain"
                  />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-[#002b49] text-center">
                  {t('title')}
                </h1>
              </div>
              
              {/* Sağ Taraf - Özellik Kartları */}
              <div className="w-full lg:w-1/2 h-full">
                <div className="grid grid-cols-2 gap-6 h-full">
                  {/* Kart 1 */}
                  <div className="bg-[#3a4a5a] text-white p-10 h-[700px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-6">{t('features.flcCutter')}</h3>
                    <p className="text-gray-200 text-lg">
                      {t('features.flcCutterDesc')}
                    </p>
                  </div>
                  
                  {/* Kart 2 */}
                  <div className="bg-[#3a4a5a] text-white p-10 h-[700px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-6">{t('features.reloadSizes')}</h3>
                    <p className="text-gray-200 text-lg">
                      {t('features.reloadSizesDesc')}
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