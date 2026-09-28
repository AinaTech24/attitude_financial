'use client';

import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import AOS from 'aos';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    let lenis: Lenis | null = null;
    let reqId: number | null = null;

    // Only use Lenis smooth scroll on desktop (breaks AOS + scroll tracking on mobile)
    if (!isMobile) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });
      lenisRef.current = lenis;

      function raf(time: number) {
        lenis!.raf(time);
        requestAnimationFrame(raf);
      }
      reqId = requestAnimationFrame(raf);
    }

    // Initialize AOS on all devices — use offset:0 on mobile so elements animate immediately
    AOS.init({
      duration: isMobile ? 250 : 350,
      easing: 'ease-out',
      once: true,
      offset: isMobile ? 0 : 20,
      delay: 0,
    });

    // 3. Scroll position watcher for back to top
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (reqId !== null) cancelAnimationFrame(reqId);
      if (lenis) {
        lenis.destroy();
      }
      lenisRef.current = null;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Always reset scroll to the very top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello Attitude Financial Services, I would like information regarding mutual fund distribution and investor support.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <>
      {children}

      {/* Floating Action Controls */}
      <div className="floating-widget" aria-label="Quick Actions">
        <button
          type="button"
          onClick={openWhatsApp}
          className="floating-btn whatsapp"
          aria-label="Connect on WhatsApp for mutual fund enquiries"
          title="Connect on WhatsApp"
        >
          <MessageCircle size={24} />
        </button>

        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="floating-btn scroll-top"
            aria-label="Scroll to top of page"
            title="Scroll to Top"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </>
  );
}
