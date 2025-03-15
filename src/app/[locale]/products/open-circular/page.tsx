'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function OpenCircularPage() {
  const t = useTranslations('products.openCircular');
  
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
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Kart 1 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">{t('features.stapleHeight')}</h3>
                    <p className="text-gray-200">{t('features.stapleHeightDesc')}</p>
                  </div>
                  
                  {/* Kart 2 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">{t('features.anvilDesign')}</h3>
                    <p className="text-gray-200">{t('features.anvilDesignDesc')}</p>
                  </div>
                  
                  {/* Kart 3 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">{t('features.moreStaples')}</h3>
                    <p className="text-gray-200">{t('features.moreStaplesDesc')}</p>
                  </div>
                  
                  {/* Kart 4 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">{t('features.arcIndicator')}</h3>
                    <p className="text-gray-200">{t('features.arcIndicatorDesc')}</p>
                  </div>
                  
                  {/* Kart 5 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">{t('features.feedback')}</h3>
                    <p className="text-gray-200">{t('features.feedbackDesc')}</p>
                  </div>
                  
                  {/* Kart 6 */}
                  <div className="bg-[#3a4a5a] text-white p-10 min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-4">{t('features.singleHandle')}</h3>
                    <p className="text-gray-200">{t('features.singleHandleDesc')}</p>
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