'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function SoundReach8000Page() {
  const t = useTranslations('energy.soundReach8000');
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
          console.log("Active section:", index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer için options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    // Video observer'ları
    const createObserver = (videoRef: React.RefObject<HTMLVideoElement | null>) => {
      return new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && videoRef.current) {
            console.log("Video görünür, oynatmaya çalışılıyor...");
            videoRef.current.play()
              .then(() => console.log("Video başarıyla oynatılıyor"))
              .catch((error: Error) => {
                console.error("Video oynatma hatası:", error);
                console.error("Hata detayları:", JSON.stringify(error));
              });
          } else if (videoRef.current) {
            videoRef.current.pause();
            console.log("Video durduruldu");
          }
        });
      }, options);
    };
    
    // Observer'ları oluştur
    const video1Observer = createObserver(videoRef1);
    const video2Observer = createObserver(videoRef2);
    
    // Observer'ları başlat
    if (videoRef1.current) {
      video1Observer.observe(videoRef1.current);
      console.log("Video 1 Observer başlatıldı");
    }
    if (videoRef2.current) {
      video2Observer.observe(videoRef2.current);
      console.log("Video 2 Observer başlatıldı");
    }
    
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;

    if (video1) {
      video1.playbackRate = 0.5;
    }
    if (video2) {
      video2.playbackRate = 0.5;
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (video1) video1Observer.unobserve(video1);
      if (video2) video2Observer.unobserve(video2);
      if (video1) {
        video1.playbackRate = 1;
      }
      if (video2) {
        video2.playbackRate = 1;
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow relative">
        {/* Hero Section - Video Arkaplan */}
        <section className="relative h-screen flex items-center justify-center sticky top-0 z-10">
          <div className="absolute inset-0 z-0">
            <video 
              ref={videoRef1}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/sound_reach_1.avif"
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/sound_reach_hero.mp4"
              onLoadedData={() => console.log("Video 1 yüklendi")}
              onError={(e) => console.error("Video 1 yükleme hatası:", e)}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-16">
              {t('subtitle')}
            </p>
            
            <div className="mt-12">
              <div className="flex justify-center">
                <svg className="w-12 h-12 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        
        {/* Brand New Platform Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002b49] mb-4">
              {t('brandNewPlatform.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {t('title')}
            </p>
            
            <div className="max-w-4xl mx-auto">
              <Image
                src="/images/sound_reach_1.avif"
                alt="Sound Reach 8000 Platform"
                width={1000}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                {t('brandNewPlatform.description1')}
              </p>
              <p className="text-lg text-gray-700">
                {t('brandNewPlatform.description2')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Compact Design Section - Video Arkaplan */}
        <section className="relative h-screen flex items-center sticky top-0 z-30">
          <div className="absolute inset-0 z-0">
            <video 
              ref={videoRef2}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/sound_reach_2.avif"
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/sound_reach_1.mp4"
              onLoadedData={() => console.log("Video 2 yüklendi")}
              onError={(e) => console.error("Video 2 yükleme hatası:", e)}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                {t('compactDesign.title')}
              </h2>
              
              <p className="text-xl text-white">
                {t('compactDesign.description')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Tissue Sense Technology Section */}
        <section className="h-screen flex items-center sticky top-0 z-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
                <Image
                  src="/images/sound_reach_2.avif"
                  alt="Tissue Sense Technology"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-[#002b49] mb-8">
                  {t('tissueSenseTechnology.title')}
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  {t('tissueSenseTechnology.description1')}
                </p>
                
                <p className="text-lg text-gray-700 mb-6">
                  {t('tissueSenseTechnology.description2')}
                </p>
                
                <p className="text-lg text-gray-700">
                  {t('tissueSenseTechnology.description3')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* PD Series Shears Section */}
        <section className="h-screen flex items-center sticky top-0 z-50 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="w-full md:w-1/2 md:pl-12 mb-12 md:mb-0">
                <Image
                  src="/images/sound_reach_3.avif"
                  alt="PD Series Shears"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-[#002b49] mb-8">
                  {t('pdSeriesShears.title')}
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  {t('pdSeriesShears.description')}
                </p>
                
                <div className="mt-12">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    {t('contactUs')}
                  </Link>
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