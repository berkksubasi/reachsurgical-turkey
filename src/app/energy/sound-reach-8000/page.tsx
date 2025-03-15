'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function SoundReach8000Page() {
  const [activeSection, setActiveSection] = useState(0);
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
    const createObserver = (videoRef: any) => {
      return new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && videoRef.current) {
            console.log("Video görünür, oynatmaya çalışılıyor...");
            videoRef.current.play()
              .then(() => console.log("Video başarıyla oynatılıyor"))
              .catch((e: any) => {
                console.error("Video oynatma hatası:", e);
                // Hata mesajını detaylı görüntüle
                console.error("Hata detayları:", JSON.stringify(e));
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
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (videoRef1.current) video1Observer.unobserve(videoRef1.current);
      if (videoRef2.current) video2Observer.unobserve(videoRef2.current);
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
              Sound Reach 8000
            </h1>
            <p className="text-xl md:text-2xl text-white mb-16">
              Forwarding Energy
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
              Brand New Platform
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Sound Reach 8000
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
                The Sound Reach ultrasonic platform takes a giant leap forward.
              </p>
              <p className="text-lg text-gray-700">
                The 8000 generator feature a brand new <span className="font-semibold">distinctive design</span> and <span className="font-semibold">unique features</span> that transforms the way of surgery.
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
                Compact Design
              </h2>
              
              <p className="text-xl text-white">
                With <span className="font-semibold">touch interface</span> and <span className="font-semibold">multilingual</span>.
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
                  Tissue Sense Technology
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  A breakthrough technology that changes the way to perform.
                </p>
                
                <p className="text-lg text-gray-700 mb-6">
                  Tissue Sense is the combination of both hardware and software allowing the 8000 Generator to simultaneously <span className="font-semibold">monitor signals</span> from the shears and <span className="font-semibold">adjust energy</span> output according to tissue resistance.
                </p>
                
                <p className="text-lg text-gray-700">
                  This allows a <span className="font-semibold">smooth and consistent cutting</span> experience regardless of tissue thickness and default settings, eliminating the need to constantly adjust output settings, so surgeons can now focus on the surgery.
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
                  PD Series Shears
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  The PD Series Shears offers new utilisation with key technology breakthrough and multi-purpose design, making it an ideal choice to deliver <span className="font-semibold">consistent performance</span> in surgeries.
                </p>
                
                <div className="mt-12">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg mr-4"
                  >
                    Contact Us
                  </Link>
                  
                  <a 
                    href="/brochures/sound-reach-8000.pdf" 
                    download
                    className="inline-block bg-[#002b49] hover:bg-[#001b29] text-white px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    Download Brochure
                  </a>
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