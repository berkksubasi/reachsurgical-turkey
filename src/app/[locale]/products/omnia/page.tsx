'use client';

import { useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function OmniaPage() {
  const t = useTranslations('products.omnia');
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const featureVideoRef = useRef<HTMLVideoElement | null>(null);
  
  useEffect(() => {
    // Intersection Observer için options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    // Hero video için observer
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && heroVideoRef.current) {
          heroVideoRef.current.play().catch(e => console.log("Video oynatma hatası:", e));
        } else if (heroVideoRef.current) {
          heroVideoRef.current.pause();
        }
      });
    }, options);
    
    // Feature video için observer
    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && featureVideoRef.current) {
          featureVideoRef.current.play().catch(e => console.log("Video oynatma hatası:", e));
        } else if (featureVideoRef.current) {
          featureVideoRef.current.pause();
        }
      });
    }, options);
    
    // Observer'ları başlat
    if (heroVideoRef.current) {
      heroObserver.observe(heroVideoRef.current);
    }
    
    if (featureVideoRef.current) {
      featureObserver.observe(featureVideoRef.current);
    }
    
    // Cleanup
    return () => {
      if (heroVideoRef.current) {
        heroObserver.unobserve(heroVideoRef.current);
      }
      if (featureVideoRef.current) {
        featureObserver.unobserve(featureVideoRef.current);
      }
    };
  }, []);

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            src="/videos/omnia_hero_video.mp4"
            className="object-cover w-full h-full"
            muted
            loop
            playsInline
            preload="none"
            poster="/images/omnia-hero.avif"
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
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement animation="slide-up" className="mb-8">
            <h2 className="text-5xl font-bold mb-8 text-[#b22234] drop-shadow-lg">
              <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#b22234]">
                {t('overview.title')}
              </span>
            </h2>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.3} className="mb-12">
            <p className="text-2xl max-w-4xl mx-auto mb-12 text-gray-700 drop-shadow">
              {t('overview.description')}
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="zoom-in" delay={0.5} className="relative">
            <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(10,59,92,0.4)]">
              <video 
                ref={featureVideoRef} 
                className="w-full h-auto"
                muted
                loop
                playsInline
                src="/videos/omnia_feature_video.mp4"
                preload="none"
                poster="/images/omnia-tools.avif"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#b22234]/60 to-transparent pointer-events-none"></div>
            </div>
          </AnimatedElement>
        </div>
      </section>
      
      {/* PRO Range Section */}
      <section className="bg-gray-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pl-[10%] pr-8 mb-6 md:mb-0 py-16 flex flex-col justify-center">
            <AnimatedElement animation="fade-in" delay={0.2}>
              <h2 className="text-4xl font-bold mb-8 text-[#b22234] relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#b22234]">
                {t('proRange.title')}
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="slide-right" delay={0.4}>
              <ul className="list-disc pl-6 space-y-4 text-lg text-black">
                <li>
                  {t('proRange.description')}
                </li>
              </ul>
            </AnimatedElement>
          </div>
          
          <div className="w-full md:w-1/2">
            <AnimatedElement animation="zoom-in" delay={0.3}>
              <div className="w-full h-screen">
                <Image
                  src="/images/pro-range.avif"
                  alt="PRO Range"
                  width={1200}
                  height={1200}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* PRO Performance Section */}
      <section className="bg-gray-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pl-[10%] pr-8 mb-6 md:mb-0 py-16 flex flex-col justify-center">
            <AnimatedElement animation="fade-in" delay={0.2}>
              <h2 className="text-4xl font-bold mb-8 text-[#b22234] relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#b22234]">
                {t('proPerformance.title')}
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="slide-right" delay={0.4}>
              <ul className="list-disc pl-6 space-y-4 text-lg text-black">
                <li>
                  {t('proPerformance.features.0')}
                </li>
                <li>
                  {t('proPerformance.features.1')}
                </li>
                <li>
                  {t('proPerformance.features.2')}
                </li>
                <li>
                  {t('proPerformance.features.3')}
                </li>
              </ul>
            </AnimatedElement>
          </div>
          
          <div className="w-full md:w-1/2">
            <AnimatedElement animation="zoom-in" delay={0.3}>
              <div className="w-full h-screen">
                <Image
                  src="/images/omnia-performance.avif"
                  alt="PRO Performance"
                  width={1200}
                  height={1200}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* PRO Intelligence Section */}
      <section className="bg-gray-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pl-[10%] pr-8 mb-6 md:mb-0 py-16 flex flex-col justify-center">
            <AnimatedElement animation="fade-in" delay={0.2}>
              <h2 className="text-4xl font-bold mb-8 text-[#b22234] relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#b22234]">
                {t('proIntelligence.title')}
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="slide-right" delay={0.4}>
              <ul className="list-disc pl-6 space-y-4 text-lg text-black">
                <li>
                  {t('proIntelligence.features.0')}
                </li>
                <li>
                  {t('proIntelligence.features.1')}
                </li>
                <li>
                  {t('proIntelligence.features.2')}
                </li>
              </ul>
            </AnimatedElement>
          </div>
          
          <div className="w-full md:w-1/2">
            <AnimatedElement animation="zoom-in" delay={0.3}>
              <div className="w-full h-screen">
                <Image
                  src="/images/omnia-intelligence.avif"
                  alt="PRO Intelligence"
                  width={1200}
                  height={1200}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Specifications Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement animation="slide-up" className="mb-12">
            <h2 className="text-4xl font-bold mb-8 text-[#b22234] relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-32 after:h-1 after:bg-[#b22234]">
              {t('specifications.title')}
            </h2>
          </AnimatedElement>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <AnimatedElement animation="fade-in" delay={0.3}>
              <a href="#" className="bg-[#b22234] text-white px-8 py-4 rounded-lg hover:bg-[#b22234]/80 transition-colors">
                {t('specifications.downloadBrochure')}
              </a>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={0.5}>
              <a href="#" className="bg-[#b22234] text-white px-8 py-4 rounded-lg hover:bg-[#b22234]/80 transition-colors">
                {t('specifications.contactSales')}
              </a>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/doctors.avif"
            alt="Medical Professionals"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#b22234]/90 to-[#b22234]/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16">
          <AnimatedElement animation="fade-in" delay={0.2} className="transform transition-all duration-700 hover:scale-105">
            <div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-sm p-12 rounded-xl border border-white/20 shadow-2xl">
              <AnimatedElement animation="slide-up" delay={0.3}>
                <h2 className="text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
              </AnimatedElement>
              
              <AnimatedElement animation="fade-in" delay={0.5}>
                <p className="text-xl mb-8 text-white">
                  {t('cta.subtitle')}
                </p>
              </AnimatedElement>
              
              <AnimatedElement animation="zoom-in" delay={0.7}>
                <Link 
                  href="/contact" 
                  className="bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-3 rounded-md inline-block text-lg shadow-lg transition-all duration-300 hover:scale-110"
                >
                  {t('cta.button')}
                </Link>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 