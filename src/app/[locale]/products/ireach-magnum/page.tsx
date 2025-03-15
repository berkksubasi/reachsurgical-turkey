'use client';

import { useRef, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function IReachMagnumPage() {
  const t = useTranslations('products.iReachMagnum');
  const locale = useLocale();
  const [, setActiveSection] = useState(0);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const ergonomicVideoRef = useRef<HTMLVideoElement>(null);
  const intelligentVideoRef = useRef<HTMLVideoElement>(null);
  
  // Bağlantı URL'lerini oluşturma
  const createHref = (path: string) => {
    return `/${locale}${path}`;
  };
  
  useEffect(() => {
    // Aktif bölümü belirle
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
            videoRef.current.play().catch((e: Error) => console.log("Video oynatma hatası:", e));
          } else if (videoRef.current) {
            videoRef.current.pause();
          }
        });
      }, options);
    };
    
    // Observer'ları oluştur
    const heroObserver = createObserver(heroVideoRef);
    const ergonomicObserver = createObserver(ergonomicVideoRef);
    const intelligentObserver = createObserver(intelligentVideoRef);
    
    // Observer'ları başlat
    if (heroVideoRef.current) heroObserver.observe(heroVideoRef.current);
    if (ergonomicVideoRef.current) ergonomicObserver.observe(ergonomicVideoRef.current);
    if (intelligentVideoRef.current) intelligentObserver.observe(intelligentVideoRef.current);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroVideoRef.current) heroObserver.unobserve(heroVideoRef.current);
      if (ergonomicVideoRef.current) ergonomicObserver.unobserve(ergonomicVideoRef.current);
      if (intelligentVideoRef.current) intelligentObserver.unobserve(intelligentVideoRef.current);
    };
  }, []);
  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden sticky top-0 z-10">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/iReachMagnum_Img_2021_18.avif"
              alt="iReach Magnum"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedElement animation="slide-left" className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                {t('hero.title')}
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={0.3} className="mb-12">
              <p className="text-xl md:text-2xl text-white drop-shadow-md">
                {t('hero.subtitle')}
              </p>
            </AnimatedElement>
          </div>
          
          <div className="scroll-indicator"></div>
        </section>
        
        {/* The Next Big Thing Section */}
        <section className="relative h-screen flex items-center bg-white sticky top-0 z-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              <p className="text-gray-600 mb-2">
                {t('nextBigThing.subtitle')}
              </p>
              
              <h2 className="text-5xl font-bold text-[#002b49] mb-16">
                {t('nextBigThing.title')}
              </h2>
            
              <div className="max-w-6xl mx-auto mb-12">
                <Image
                  src="/images/ireach_magnum1.avif"
                  alt="iReach Magnum"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg mb-6 text-gray-800">
                  {t('nextBigThing.description1')}
                </p>
                
                <p className="text-lg text-gray-800">
                  {t('nextBigThing.description2')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ergonomic Design Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-30" style={{ backgroundColor: 'rgb(232, 232, 232)' }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#002b49]">
                  {t('ergonomicDesign.title')}
                </h2>
                
                <p className="text-xl mb-6 text-gray-800">
                  {t('ergonomicDesign.description')}
                </p>
              </div>
              
              <div className="w-full md:w-1/2 flex items-end">
                <div className="w-full">
                  <video
                    ref={ergonomicVideoRef}
                    src="/videos/ireach_magnum.mp4"
                    className="w-full h-auto object-contain"
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/images/ireach-magnum-bg.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Optimised Compression Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-40" style={{ backgroundColor: '#002b49' }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                  {t('optimisedCompression.title')}
                </h2>
                
                <div className="text-xl text-white">
                  {t('optimisedCompression.description')}
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex items-center justify-end overflow-visible">
                <div className="w-full relative" style={{ right: "-20%" }}>
                  <Image
                    src="/images/iReachMagnum_Img_2021_01_edited.avif"
                    alt="Optimised Compression"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain transform scale-150"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Intelligent Firing Section */}
        <section className="relative h-screen flex items-center overflow-hidden sticky top-0 z-50">
          <div className="absolute inset-0 z-0">
            <video
              ref={intelligentVideoRef}
              src="/videos/intelligence.mp4"
              className="object-cover w-full h-full"
              muted
              loop
              playsInline
              preload="none"
              poster="/images/ireach-magnum-bg.jpg"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              <AnimatedElement animation="slide-up">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                  {t('intelligentFiring.title')}
                </h2>
              </AnimatedElement>
              
              <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg">
                <AnimatedElement animation="fade-in" delay={0.3}>
                  <p className="text-xl mb-6 text-gray-200">
                    {t('intelligentFiring.description')}
                  </p>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cutting Edge Technology Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-60" style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#002b49]">
                  {t('cuttingEdge.title')}
                </h2>
                
                <p className="text-xl mb-6 text-gray-800">
                  {t('cuttingEdge.description')}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-800">
                  <li className="font-medium">
                    {t('cuttingEdge.features.0')}
                  </li>
                  <li className="font-medium">
                    {t('cuttingEdge.features.1')}
                  </li>
                  <li className="font-medium">
                    {t('cuttingEdge.features.2')}
                  </li>
                </ul>
              </div>
              
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="w-full h-96 relative">
                  <Image
                    src="/images/iReachMagnum_Img_2021_18.avif"
                    alt="Cutting Edge Technology"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-20 bg-[#002b49]">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">
                {t('cta.title')}
              </h2>
              
              <p className="text-xl mb-8 text-gray-300">
                {t('cta.subtitle')}
              </p>
              
              <Link 
                href={createHref('/contact')}
                className="bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-3 rounded-md inline-block text-lg shadow-lg transition-all duration-300 hover:scale-110"
              >
                {t('cta.button')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 