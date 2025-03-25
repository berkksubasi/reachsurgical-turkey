'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function VisionMissionPage() {
  const t = useTranslations('visionMission');

  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Vision Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#002b49] mb-4 text-center">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-600 mb-16 text-center">
                {t('subtitle')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002b49] mb-8 text-center">
                {t('vision.title')}
              </h2>
              <div className="prose prose-lg mx-auto">
                <p className="text-gray-600 text-center mb-8">
                  {t('vision.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002b49] mb-8 text-center">
                {t('mission.title')}
              </h2>
              <div className="prose prose-lg mx-auto">
                <p className="text-gray-600 text-left whitespace-pre-line mb-8">
                  {t('mission.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002b49] mb-12 text-center">
              {t('values.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Innovation */}
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="w-16 h-16 mx-auto mb-4 text-[#b22234]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#002b49] mb-2">{t('values.innovation.title')}</h3>
                <p className="text-gray-600">{t('values.innovation.description')}</p>
              </div>

              {/* Quality */}
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="w-16 h-16 mx-auto mb-4 text-[#b22234]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#002b49] mb-2">{t('values.quality.title')}</h3>
                <p className="text-gray-600">{t('values.quality.description')}</p>
              </div>

              {/* Integrity */}
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="w-16 h-16 mx-auto mb-4 text-[#b22234]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#002b49] mb-2">{t('values.integrity.title')}</h3>
                <p className="text-gray-600">{t('values.integrity.description')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 