'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function OmnibotPage() {
  const t = useTranslations('robotics.omnibot');
  const [activeSection, setActiveSection] = useState(0);
  
  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll
    window.scrollTo(0, 0);
    
    // Scroll event listener
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - OMNIBOT */}
        <section className="relative min-h-screen flex flex-col items-start justify-start sticky top-0 z-10">
          <div className="absolute inset-0">
            <Image
              src="/images/omnibot1.avif"
              alt="OMNIBOT Surgical Robotic Platform"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10 text-white pt-24">
            <h1 className="text-7xl md:text-8xl font-bold mb-8">
              {t('title')}
            </h1>
            <h2 className="text-3xl md:text-4xl font-light mb-16">
              {t('subtitle')}
            </h2>
          </div>
        </section>
        
        {/* Boşluk */}
        <div className="h-screen"></div>
        
        {/* Innovation Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 sticky top-0 z-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">{t('innovation.title')}</h2>
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-lg mb-4 text-gray-700">
                {t('innovation.description1')}
              </p>
              <p className="text-lg mb-4 text-gray-700">
                {t('innovation.description2')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Boşluk */}
        <div className="h-screen"></div>
        
        {/* Multi-port System Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 sticky top-0 z-30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
                <h2 className="text-5xl font-bold mb-6 text-[#002b49]">{t('multiport.title')}</h2>
                <h3 className="text-3xl font-bold mb-8 text-[#002b49]">{t('multiport.subtitle')}</h3>
                
                <p className="text-lg mb-6 text-gray-700">
                  {t('multiport.description')}
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-cyan-100 p-8 md:p-12 rounded-3xl">
                  <Image
                    src="/images/omnibot2.avif"
                    alt="OMNIBOT Multi-port System"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Boşluk */}
        <div className="h-screen"></div>
        
        {/* Product Features Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-white sticky top-0 z-40">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-20 text-gray-800">{t('features.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 text-[#002b49]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.28 10.32a2.4 2.4 0 1 0-3.39-3.39 2.4 2.4 0 0 0 3.39 3.39Z" />
                    <path d="M6.72 10.32a2.4 2.4 0 1 0 3.39-3.39 2.4 2.4 0 0 0-3.39 3.39Z" />
                    <path d="M10.32 17.28a2.4 2.4 0 1 0 3.39-3.39 2.4 2.4 0 0 0-3.39 3.39Z" />
                    <path d="m12 12 5.5-5.5" />
                    <path d="m12 12-5.5-5.5" />
                    <path d="M12 12v7.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t('features.diverseEcosystem.title')}</h3>
                <p className="text-gray-600">
                  {t('features.diverseEcosystem.description')}
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 text-[#002b49]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t('features.precisionControl.title')}</h3>
                <p className="text-gray-600">
                  {t('features.precisionControl.description')}
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 text-[#002b49]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t('features.telesurgery.title')}</h3>
                <p className="text-gray-600">
                  {t('features.telesurgery.description')}
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 text-[#002b49]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t('features.advancedImaging.title')}</h3>
                <p className="text-gray-600">
                  {t('features.advancedImaging.description')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 