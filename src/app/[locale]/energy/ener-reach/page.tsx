'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function EnerReachPage() {
  const t = useTranslations('energy.enerReach');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [, setActiveSection] = useState(0);
  
  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll
    window.scrollTo(0, 0);
    
    // Modal açıkken scroll'u engelle
    if (videoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
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
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [videoModalOpen]);

  const openVideoModal = () => {
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow relative overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative bg-white px-4 py-16 md:py-0">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#002b49] mb-4">
              {t('title')}
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-8 md:mb-16">
              {t('subtitle')}
            </p>
            
            <div className="max-w-4xl mx-auto">
              <Image
                src="/images/ENERREACH_Img_OP9_Front.avif"
                alt="ENER REACH OP9"
                width={1000}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
            
            <button 
              onClick={openVideoModal}
              className="mt-8 md:mt-12 text-lg text-gray-600 hover:text-[#002b49] transition-colors duration-300 underline"
            >
              {t('watchVideo')}
            </button>
          </div>
        </section>
        
        {/* Tissue Sense Technology Section */}
        <section className="min-h-screen flex items-center relative bg-gray-50 px-4 py-16 md:py-0">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-[#002b49] mb-6 md:mb-8">
                  {t('tissueSenseTechnology.title')}
                </h2>
                
                <p className="text-base md:text-lg text-gray-700">
                  {t('tissueSenseTechnology.description')}
                </p>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="w-full h-auto">
                  <Image
                    src="/images/op9.avif"
                    alt="Tissue Sense Technology"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Features Section */}
        <section className="min-h-screen flex items-center relative bg-white px-4 py-16 md:py-0">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#002b49] mb-8 md:mb-16 text-center">
              {t('productFeatures.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center">
                <div className="mb-6 h-64 w-full overflow-hidden">
                  <Image
                    src="/images/pf1.avif"
                    alt="7mm Vessel Sealing"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-700">{t('productFeatures.feature1')}</h3>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col items-center">
                <div className="mb-6 h-64 w-full overflow-hidden">
                  <Image
                    src="/images/pf2.avif"
                    alt="RF & Ultrasonic"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-700">{t('productFeatures.feature2')}</h3>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-col items-center">
                <div className="mb-6 h-64 w-full overflow-hidden">
                  <Image
                    src="/images/pf3.avif"
                    alt="7 inch Touch Screen"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-700">{t('productFeatures.feature3')}</h3>
              </div>
              
              {/* Feature 4 */}
              <div className="flex flex-col items-center">
                <div className="mb-6 h-64 w-full overflow-hidden">
                  <Image
                    src="/images/pf4.avif"
                    alt="Multi-lingual Interface"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-700">{t('productFeatures.feature4')}</h3>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                href="/contact" 
                className="inline-block bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg mr-4"
              >
                {t('contactUs')}
              </Link>
              
              <a 
                href="/brochures/ener-reach-op9.pdf" 
                download
                className="inline-block bg-[#002b49] hover:bg-[#001b29] text-white px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                {t('downloadBrochure')}
              </a>
            </div>
          </div>
        </section>
        
        {/* Video Modal */}
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-full max-w-4xl mx-auto">
              <button 
                onClick={closeVideoModal}
                className="absolute -top-10 right-0 text-white text-2xl"
              >
                &times; Close
              </button>
              
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video 
                  controls 
                  autoPlay 
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <source src="/videos/ener-reach.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
} 