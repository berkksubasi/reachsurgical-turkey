'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function OpenPPHPage() {
  const t = useTranslations('products.openPPH');
  const locale = useLocale();
  
  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll
    window.scrollTo(0, 0);
  }, []);

  // Bağlantı URL'lerini oluşturma
  const createHref = (path: string) => {
    return `/${locale}${path}`;
  };

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
                    alt={t('title')}
                    width={600}
                    height={300}
                    className="object-contain"
                  />
                </div>
                
                <h1 className="text-5xl md:text-4xl font-bold text-[#002b49] text-center">
                  {t('title')}
                </h1>
              </div>
              
              {/* Sağ Taraf - Özellik Kartları */}
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Kart 1 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">{t('features.adjustableStaple')}</h3>
                    <p className="text-gray-200 text-lg">
                      {t('features.adjustableStapleDesc')}
                    </p>
                  </div>
                  
                  {/* Kart 2 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">{t('features.staplers')}</h3>
                    <p className="text-gray-200 text-lg">
                      {t('features.staplersDesc')}
                    </p>
                  </div>
                  
                  {/* Kart 3 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">{t('features.sutureThreads')}</h3>
                    <p className="text-gray-200 text-lg">
                      {t('features.sutureThreadsDesc')}
                    </p>
                  </div>
                  
                  {/* Kart 4 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">{t('features.fixedAnvil')}</h3>
                    <p className="text-gray-200 text-lg">
                      {t('features.fixedAnvilDesc')}
                    </p>
                  </div>
                  
                  {/* Kart 5 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">{t('features.largerHousing')}</h3>
                    <p className="text-gray-200 text-lg">
                      {t('features.largerHousingDesc')}
                    </p>
                  </div>
                  
                  {/* Kart 6 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">{t('features.centralRod')}</h3>
                    <p className="text-gray-200 text-lg">
                      {t('features.centralRodDesc')}
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