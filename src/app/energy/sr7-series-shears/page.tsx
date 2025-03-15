'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function SR7SeriesShearsPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVideo1Playing, setIsVideo1Playing] = useState(false);
  const [isVideo2Playing, setIsVideo2Playing] = useState(false);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const backgroundVideoRef1 = useRef<HTMLVideoElement>(null);
  const backgroundVideoRef2 = useRef<HTMLVideoElement>(null);
  
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
    
    // Arka plan videoları için observer'lar
    const createObserver = (videoRef: any) => {
      return new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && videoRef.current) {
            console.log("Video görünür, oynatmaya çalışılıyor...");
            videoRef.current.play()
              .then(() => console.log("Video başarıyla oynatılıyor"))
              .catch((e: any) => {
                console.error("Video oynatma hatası:", e);
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
    const bgVideo1Observer = createObserver(backgroundVideoRef1);
    const bgVideo2Observer = createObserver(backgroundVideoRef2);
    
    // Observer'ları başlat
    if (backgroundVideoRef1.current) {
      bgVideo1Observer.observe(backgroundVideoRef1.current);
      console.log("Arka plan Video 1 Observer başlatıldı");
    }
    if (backgroundVideoRef2.current) {
      bgVideo2Observer.observe(backgroundVideoRef2.current);
      console.log("Arka plan Video 2 Observer başlatıldı");
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (backgroundVideoRef1.current) bgVideo1Observer.unobserve(backgroundVideoRef1.current);
      if (backgroundVideoRef2.current) bgVideo2Observer.unobserve(backgroundVideoRef2.current);
    };
  }, []);

  // Video oynatma fonksiyonları
  const playVideo1 = () => {
    if (videoRef1.current) {
      if (isVideo1Playing) {
        videoRef1.current.pause();
        setIsVideo1Playing(false);
      } else {
        videoRef1.current.play();
        setIsVideo1Playing(true);
      }
    }
  };

  const playVideo2 = () => {
    if (videoRef2.current) {
      if (isVideo2Playing) {
        videoRef2.current.pause();
        setIsVideo2Playing(false);
      } else {
        videoRef2.current.play();
        setIsVideo2Playing(true);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow relative">
        {/* Hero Section - SR7 Series Shears */}
        <section className="relative min-h-screen flex flex-col items-center justify-center py-16 sticky top-0 z-10">
          <div className="absolute inset-0 bg-white"></div>
          <div className="container mx-auto px-4 text-center mb-16 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#002b49] mb-4">
              SR7 Series Shears
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              7mm Vessel Sealing with two ergonomic options
            </p>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video 1 */}
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                <video 
                  ref={videoRef1}
                  muted
                  playsInline
                  preload="auto"
                  poster="/images/sr71.avif"
                  className="w-full h-full object-cover"
                  src="/videos/sr71.mp4"
                  onLoadedData={() => console.log("Video 1 yüklendi")}
                  onError={(e) => console.error("Video 1 yükleme hatası:", e)}
                  onEnded={() => setIsVideo1Playing(false)}
                >
                  Your browser does not support the video tag.
                </video>
                
                <button 
                  onClick={playVideo1}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white/80 ${isVideo1Playing ? 'opacity-0' : 'opacity-100'}`}>
                    {isVideo1Playing ? (
                      <svg className="w-6 h-6 text-[#002b49]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 01-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-[#002b49]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
              
              {/* Video 2 */}
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                <video 
                  ref={videoRef2}
                  muted
                  playsInline
                  preload="auto"
                  poster="/images/sr72.avif"
                  className="w-full h-full object-cover"
                  src="/videos/sr72.mp4"
                  onLoadedData={() => console.log("Video 2 yüklendi")}
                  onError={(e) => console.error("Video 2 yükleme hatası:", e)}
                  onEnded={() => setIsVideo2Playing(false)}
                >
                  Your browser does not support the video tag.
                </video>
                
                <button 
                  onClick={playVideo2}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white/80 ${isVideo2Playing ? 'opacity-0' : 'opacity-100'}`}>
                    {isVideo2Playing ? (
                      <svg className="w-6 h-6 text-[#002b49]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 01-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-[#002b49]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Boş bölüm - Parallax etkisi için */}
        <div className="h-screen"></div>
        
        {/* Tissue Sense Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-20">
          <div className="absolute inset-0 z-0">
            <video 
              ref={backgroundVideoRef1}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/sr73.mp4"
              onLoadedData={() => console.log("Arka plan Video 1 yüklendi")}
              onError={(e) => console.error("Arka plan Video 1 yükleme hatası:", e)}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container mt-52 mx-auto px-4 relative z-10 text-center text-white">
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-6">
                The revolutionary Tissue Sense 2.0 technology represents a significant leap forward, empowering surgeons with unmatched precision.
              </p>
              <p className="text-xl mb-6">
                Seamlessly integrating hardware and software, this advanced system monitors signals from the shears, dynamically adjusting energy output based on tissue thickness between the jaws.
              </p>
              <p className="text-xl">
                This eliminates surgeon's need to constantly adjust power level to accommodate different tissue thickness.
              </p>
            </div>
          </div>
        </section>
        
        {/* Boş bölüm - Parallax etkisi için */}
        <div className="h-screen"></div>
        
        {/* Vessel Sealing Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-30">
          <div className="absolute inset-0 z-0">
            <video 
              ref={backgroundVideoRef2}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/sr74.mp4"
              onLoadedData={() => console.log("Arka plan Video 2 yüklendi")}
              onError={(e) => console.error("Arka plan Video 2 yükleme hatası:", e)}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Up to 7mm Vessel Sealing
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8">
                Safe sealing capability for vessels up to 7mm with Advanced Hemostasis button on the SR7 shears.
              </p>
              
              <div className="mt-12">
                <Link 
                  href="/contact" 
                  className="inline-block bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg mr-4"
                >
                  Contact Us
                </Link>
                
                <a 
                  href="/brochures/sr7-series-shears.pdf" 
                  download
                  className="inline-block bg-white hover:bg-gray-100 text-[#002b49] px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Boş bölüm - Parallax etkisi için */}
        <div className="h-screen md:h-[150vh]"></div>
      </main>
      
      <Footer />
    </div>
  );
} 