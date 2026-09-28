import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import {
  IntroSection,
  MutualFundBasicsSection,
  ServicesOverviewSection,
  InvestorEducationSection,
  CalculatorPreviewSection,
  MutualFundCategoriesSection,
  LatestBlogsSection,
  ContactCTASection
} from '@/components/home/HomeSections';

export default function HomePage() {
  return (
    <>
      {/* 1. Landing page */}
      <HeroSection />

      {/* 2. Comprehensive Financial Solutions */}
      <ServicesOverviewSection />

      {/* 3. Understanding Mutual Funds (Core Fundamentals) */}
      <MutualFundBasicsSection />

      {/* 4. Calculator Suite (6 Reference Cards + Interactive Workbench) */}
      <CalculatorPreviewSection />

      {/* 5. ABOUT OUR FIRM */}
      <IntroSection />

      {/* 6. Understanding Mutual Funds (SEBI Scheme Framework & Categories) */}
      <MutualFundCategoriesSection />

      {/* 7. Investor Awareness & Documentation */}
      <InvestorEducationSection />

      {/* 8. Blogs (Latest From Our Financial Editorial Wire) */}
      <LatestBlogsSection />

      {/* 9. CTA */}
      <ContactCTASection />
    </>
  );
}

