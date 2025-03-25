'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function EnersealVesselSealerDividerPage() {
  const t = useTranslations('energy.enersealVesselSealer');
  const [, setActiveSection] = useState(0);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  
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
          
          // Video kontrolü - aktif section'a göre videoları oynat/durdur
          if (index === 1 && videoRef1.current) {
            videoRef1.current.play();
          } else if (videoRef1.current) {
            videoRef1.current.pause();
          }
          
          if (index === 2 && videoRef2.current) {
            videoRef2.current.play();
          } else if (videoRef2.current) {
            videoRef2.current.pause();
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow relative">
        {/* Hero Section - Ürün Görseli */}
        <section className="h-screen flex flex-col items-center justify-center sticky top-0 z-10 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002b49] mb-4">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16">
              {t('subtitle')}
            </p>
            
            <div className="max-w-4xl mx-auto">
              <Image
                src="/images/divider.avif"
                alt="Enerseal Vessel Sealer/Divider"
                width={1000}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
            
            <div className="mt-12">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t('description')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Anti-sticking Technology Section - Video 1 */}
        <section className="h-screen flex items-center sticky top-0 z-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold text-[#002b49] mb-8">
                  {t('antiStickingTechnology.title')}
                </h2>
                
                <p className="text-lg text-gray-700">
                  {t('antiStickingTechnology.description')}
                </p>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="w-full h-auto rounded-lg overflow-hidden shadow-xl">
                  <video 
                    ref={videoRef1}
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  >
                    <source src="/videos/divider_video_1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Precision Sealing Section - Video 2 */}
        <section className="h-screen flex items-center sticky top-0 z-30 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="w-full md:w-1/2 md:pl-12 mb-12 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold text-[#002b49] mb-8">
                  {t('precisionSealing.title')}
                </h2>
                
                <p className="text-lg text-gray-700">
                  {t('precisionSealing.description')}
                </p>
                
                <div className="mt-12">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg mr-4"
                  >
                    {t('contactUs')}
                  </Link>
                  
                  <a 
                    href="/brochures/enerseal-vessel-sealer-divider.pdf" 
                    download
                    className="inline-block bg-[#002b49] hover:bg-[#001b29] text-white px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    {t('downloadBrochure')}
                  </a>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="w-full h-auto rounded-lg overflow-hidden shadow-xl">
                  <video 
                    ref={videoRef2}
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  >
                    <source src="/videos/divider_video_2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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