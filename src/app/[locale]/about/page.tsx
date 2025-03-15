'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');
  const [, setActiveSection] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [, setSliderPosition] = useState(0);
  
  // Gallery images
  const galleryImages = Array.from({ length: 37 }, (_, i) => {
    const index = i + 1;
    const extension = index <= 10 ? 'avif' : 'jpg';
    return `/gallery/${index}.${extension}`;
  });
  
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
    
    // Gallery slider animation
    const animateSlider = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.scrollWidth;
        const viewportWidth = sliderRef.current.offsetWidth;
        
        if (sliderWidth > viewportWidth) {
          setSliderPosition((prev) => {
            const newPosition = prev - 0.3;
            // Reset position when all images have scrolled past
            return newPosition < -(sliderWidth - viewportWidth) ? 0 : newPosition;
          });
        }
      }
    };
    
    const animationFrame = setInterval(animateSlider, 20);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(animationFrame);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - About */}
        <section className="relative min-h-screen flex flex-col items-center justify-center sticky top-0 z-10">
          <div className="absolute inset-0">
            <Image
              src="/images/about1.avif"
              alt="Reach Surgical"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <div className="mt-8">
              <Link 
                href="#" 
                className="inline-block bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                {t('hero.watchVideo')}
              </Link>
            </div>
          </div>
        </section>
        
        {/* Boşluk */}
        <div className="h-screen"></div>
        
        {/* Gallery Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#002b49] sticky top-0 z-20">
          <div className="w-full max-w-[1920px] mx-auto px-4 py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
              {t('gallery.title')}
            </h2>
            
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg mb-6 text-white">
                {t('gallery.description1')}
              </p>
              <p className="text-lg mb-6 text-white">
                {t('gallery.description2')}
              </p>
            </div>
            
            {/* Scroll edilebilir galeri konteyner */}
            <div className="relative h-[60vh] md:h-[70vh] overflow-y-auto custom-scrollbar pb-8">
              {/* Masonry grid yapısı */}
              <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
                {galleryImages.map((src, index) => (
                  <div 
                    key={index} 
                    className="relative break-inside-avoid rounded-lg overflow-hidden group"
                  >
                    <div className="relative aspect-[3/2] md:aspect-[4/3]">
                      <Image 
                        src={src} 
                        alt={`Gallery image ${index + 1}`} 
                        fill 
                        loading="lazy"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Boşluk */}
        <div className="h-screen"></div>
        
        {/* Hospitals Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#002b49] sticky top-0 z-30">
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  {t('hospitals.title')}
                </h2>
                
                <p className="text-xl mb-6">
                  {t('hospitals.description')}
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative flex justify-center">
                  <Image
                    src="/images/about2.avif"
                    alt="Reach Surgical Medical Device"
                    width={1200}
                    height={1000}
                    className="object-contain max-h-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Boşluk */}
        <div className="h-screen"></div>
        
        {/* Enterprise Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#002b49]">
              {t('enterprise.title')}
            </h2>
            
            <p className="text-xl italic mb-12 text-gray-600 max-w-3xl mx-auto text-center">
              {t('enterprise.quote')}
            </p>
            
            <div className="flex flex-col md:flex-row items-center mt-10">
              <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
                <p className="text-lg mb-6 text-gray-700">
                  {t('enterprise.description1')}
                </p>
                
                <p className="text-lg mb-6 text-gray-700">
                  {t('enterprise.description2')}
                </p>
                
                <p className="text-lg mb-6 text-gray-700">
                  {t('enterprise.description3')}
                </p>
                
                <p className="text-lg mb-6 text-gray-700">
                  {t('enterprise.description4')}
                </p>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <Image
                    src="/gallery/15.jpg"
                    alt="Reach Surgical Building"
                    width={600}
                    height={400}
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/contact" 
                className="inline-block bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                {t('enterprise.contactUs')}
              </Link>
            </div>
          </div>
        </section>
        
        {/* Boşluk */}
        <div className="h-screen"></div>
        
        {/* Social Responsibility Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#002b49] sticky top-0 z-60">
          <div className="container mx-auto px-4 text-center py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
              {t('socialResponsibility.title')}
            </h2>
            
            <div className="max-w-4xl mx-auto text-white">
              <p className="text-lg mb-6">
                {t('socialResponsibility.description1')}
              </p>
              
              <p className="text-lg mb-6">
                {t('socialResponsibility.description2')}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <style jsx global>{`
        .gallery-slider {
          transition: transform 0.1s linear;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
} 