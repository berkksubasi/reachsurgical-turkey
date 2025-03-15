'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function SR7SeriesShearsPage() {
  const t = useTranslations('energy.sr7SeriesShears');
  const [, setActiveSection] = useState(0);
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
      const video1 = backgroundVideoRef1.current;
      const video2 = backgroundVideoRef2.current;
      if (video1) bgVideo1Observer.unobserve(video1);
      if (video2) bgVideo2Observer.unobserve(video2);
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
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {t('subtitle')}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t('tissueSense.title')}
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-6">
                {t('tissueSense.description1')}
              </p>
              <p className="text-xl mb-6">
                {t('tissueSense.description2')}
              </p>
              <p className="text-xl">
                {t('tissueSense.description3')}
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
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                {t('vesselSealing.title')}
              </h2>
              
              <p className="text-xl mb-6">
                {t('vesselSealing.description1')}
              </p>
              
              <p className="text-xl mb-6">
                {t('vesselSealing.description2')}
              </p>
              
              <p className="text-xl mb-12">
                {t('vesselSealing.description3')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-block bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  {t('contactUs')}
                </Link>
                
                <a 
                  href="/brochures/sr7-series-shears.pdf" 
                  download
                  className="inline-block bg-[#002b49] hover:bg-[#001b29] text-white px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  {t('downloadBrochure')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 