'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  ChevronRight,
  LayoutGrid,
  TrendingUp,
  Shield,
  HeartPulse,
  Coins,
  Building2,
  Calculator,
  Hourglass,
  ArrowUpRight,
  CalendarCheck,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { COMPANY_INFO } from '@/data/company';

const dropdownServices = [
  {
    title: 'All Services',
    desc: 'Explore complete financial solutions',
    href: '/services',
    icon: <LayoutGrid size={20} />,
    bg: '#eff6ff',
    color: '#2563eb'
  },
  {
    title: 'Mutual Funds',
    desc: 'Systematic SIP & long-term compounding',
    href: '/services/mutual-funds',
    icon: <TrendingUp size={20} />,
    bg: '#f0fdf4',
    color: '#16a34a'
  },
  {
    title: 'Life / Term Insurance',
    desc: 'Pure financial protection for family',
    href: '/services/life-insurance',
    icon: <Shield size={20} />,
    bg: '#eef2ff',
    color: '#4f46e5'
  },
  {
    title: 'Health Insurance',
    desc: 'Comprehensive medical emergency cover',
    href: '/services/health-insurance',
    icon: <HeartPulse size={20} />,
    bg: '#fef2f2',
    color: '#ef4444'
  },
  {
    title: 'Loan against MF',
    desc: 'Instant liquidity without selling funds',
    href: '/services/loan-against-mf',
    icon: <Coins size={20} />,
    bg: '#fffbeb',
    color: '#d97706'
  },
  {
    title: 'NPS',
    desc: 'National Pension System & tax saving',
    href: '/services/nps-pension',
    icon: <Building2 size={20} />,
    bg: '#ecfeff',
    color: '#0891b2'
  }
];

const dropdownCalculators = [
  {
    title: 'SIP Calculator',
    desc: 'Simulate compounding growth through monthly SIPs',
    href: '/calculators/sip',
    icon: <TrendingUp size={20} />,
    bg: '#f0fdf4',
    color: '#16a34a'
  },
  {
    title: 'Lumpsum Calculator',
    desc: 'Simulate one-time mutual fund compounding',
    href: '/calculators/lumpsum',
    icon: <ArrowUpRight size={20} />,
    bg: '#eff6ff',
    color: '#2563eb'
  },
  {
    title: 'SWP Monthly Cashflow',
    desc: 'Simulate monthly cash withdrawals from corpus',
    href: '/calculators/swp',
    icon: <CalendarCheck size={20} />,
    bg: '#fffbeb',
    color: '#d97706'
  },
  {
    title: 'Retirement Calculator',
    desc: 'Estimate inflation-adjusted retirement corpus',
    href: '/calculators/retirement',
    icon: <Sparkles size={20} />,
    bg: '#ecfeff',
    color: '#0891b2'
  },
  {
    title: 'Loan EMI Calculator',
    desc: 'Calculate monthly loan EMI and total interest',
    href: '/calculators/emi',
    icon: <Calculator size={20} />,
    bg: '#faf5ff',
    color: '#9333ea'
  },
  {
    title: 'All 14 Calculators',
    desc: 'Explore complete financial calculation suite',
    href: '/calculators',
    icon: <LayoutGrid size={20} />,
    bg: '#f8fafc',
    color: '#0f172a'
  }
];

export default function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCalcOpen, setIsMobileCalcOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      if (currentScrollY <= 40) {
        // At the very top
        setIsScrolled(false);
        setIsVisible(true);
      } else {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY + 8) {
          // Scrolling down to bottom -> Hide navigation
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY - 8) {
          // Scrolling up towards top -> Show navigation
          setIsVisible(true);
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileCalcOpen(false);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Pill Navigation Header with Smart Scroll Behavior */}
      <div
        className={`fixed left-0 right-0 z-50 px-4 w-full transition-all duration-300 pointer-events-none ${
          isScrolled ? 'top-3' : 'top-4 md:top-5'
        } ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-28 opacity-0'
        }`}
      >
        <header className="pointer-events-auto max-w-[1360px] mx-auto bg-white/95 backdrop-blur-md rounded-full px-6 py-2.5 min-h-[72px] flex items-center justify-between gap-4 shadow-[0_12px_36px_-4px_rgba(10,17,26,0.14),0_2px_8px_rgba(0,0,0,0.04)] border border-slate-200/90 transition-all duration-300">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <BrandLogo variant="header" showSubtitle={false} />
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
            <div className="relative flex items-center">
              <Link
                href="/"
                prefetch={true}
                onClick={(e) => handleNavClick(e, '/')}
                className={`px-3.5 py-2 rounded-full text-[0.8875rem] font-semibold transition-all duration-200 ${
                  pathname === '/'
                    ? 'text-amber-600 font-bold bg-amber-50/60'
                    : 'text-slate-800 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Home
              </Link>
            </div>

            {/* About Direct Link */}
            <div className="relative flex items-center">
              <Link
                href="/about"
                prefetch={true}
                onClick={(e) => handleNavClick(e, '/about')}
                className={`px-3.5 py-2 rounded-full text-[0.8875rem] font-semibold transition-all duration-200 ${
                  pathname === '/about'
                    ? 'text-amber-600 font-bold bg-amber-50/60'
                    : 'text-slate-800 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                About
              </Link>
            </div>

            {/* Services with Vertical Dropdown */}
            <div className="relative group flex items-center">
              <Link
                href="/services"
                prefetch={true}
                onClick={(e) => handleNavClick(e, '/services')}
                className={`px-3.5 py-2 rounded-full text-[0.8875rem] font-semibold inline-flex items-center gap-1 transition-all duration-200 ${
                  pathname.startsWith('/services')
                    ? 'text-amber-600 font-bold bg-amber-50/60'
                    : 'text-slate-800 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Services</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {/* Vertical Dropdown Card */}
              <div className="absolute top-full pt-2 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5">
                <div className="w-[340px] bg-white rounded-2xl shadow-[0_20px_45px_-8px_rgba(10,17,26,0.18),0_0_1px_rgba(0,0,0,0.08)] border border-slate-200 p-2.5 flex flex-col gap-1">
                  {dropdownServices.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      prefetch={true}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover/item:scale-105"
                        style={{ background: service.bg, color: service.color }}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1 flex flex-col min-w-0">
                        <span className="text-[0.88rem] font-bold text-slate-900 leading-tight">
                          {service.title}
                        </span>
                        <span className="text-[0.75rem] text-slate-500 leading-normal truncate">
                          {service.desc}
                        </span>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 group-hover/item:text-lime-600 group-hover/item:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculators with Dropdown */}
            <div className="relative group flex items-center">
              <Link
                href="/calculators"
                prefetch={true}
                onClick={(e) => handleNavClick(e, '/calculators')}
                className={`px-3.5 py-2 rounded-full text-[0.8875rem] font-semibold inline-flex items-center gap-1 transition-all duration-200 ${
                  pathname.startsWith('/calculators')
                    ? 'text-amber-600 font-bold bg-amber-50/60'
                    : 'text-slate-800 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Calculators</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {/* Calculators Dropdown Card */}
              <div className="absolute top-full pt-2 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5">
                <div className="w-[350px] bg-white rounded-2xl shadow-[0_20px_45px_-8px_rgba(10,17,26,0.18),0_0_1px_rgba(0,0,0,0.08)] border border-slate-200 p-2.5 flex flex-col gap-1">
                  {dropdownCalculators.map((calc) => (
                    <Link
                      key={calc.title}
                      href={calc.href}
                      prefetch={true}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover/item:scale-105"
                        style={{ background: calc.bg, color: calc.color }}
                      >
                        {calc.icon}
                      </div>
                      <div className="flex-1 flex flex-col min-w-0">
                        <span className="text-[0.88rem] font-bold text-slate-900 leading-tight">
                          {calc.title}
                        </span>
                        <span className="text-[0.75rem] text-slate-500 leading-normal truncate">
                          {calc.desc}
                        </span>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 group-hover/item:text-lime-600 group-hover/item:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex items-center">
              <Link
                href="/disclosure"
                prefetch={true}
                onClick={(e) => handleNavClick(e, '/disclosure')}
                className={`px-3.5 py-2 rounded-full text-[0.8875rem] font-semibold transition-all duration-200 ${
                  pathname === '/disclosure'
                    ? 'text-amber-600 font-bold bg-amber-50/60'
                    : 'text-slate-800 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Disclosure
              </Link>
            </div>

            <div className="relative flex items-center">
              <Link
                href="/blogs"
                prefetch={true}
                onClick={(e) => handleNavClick(e, '/blogs')}
                className={`px-3.5 py-2 rounded-full text-[0.8875rem] font-semibold transition-all duration-200 ${
                  pathname.startsWith('/blogs')
                    ? 'text-amber-600 font-bold bg-amber-50/60'
                    : 'text-slate-800 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Blog
              </Link>
            </div>

            <div className="relative flex items-center">
              <Link
                href="/contact"
                prefetch={true}
                onClick={(e) => handleNavClick(e, '/contact')}
                className={`px-3.5 py-2 rounded-full text-[0.8875rem] font-semibold transition-all duration-200 ${
                  pathname === '/contact'
                    ? 'text-amber-600 font-bold bg-amber-50/60'
                    : 'text-slate-800 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            <Link
              href="/contact"
              prefetch={true}
              className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-5 py-2.5 font-bold text-[0.84rem] transition-all whitespace-nowrap"
            >
              Get Started
            </Link>
            <Link
              href="/calculators"
              prefetch={true}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 hover:text-white rounded-full px-5 py-2.5 font-bold text-[0.84rem] transition-all shadow-[0_4px_12px_rgba(245,158,11,0.28)] whitespace-nowrap"
            >
              SIP Calculator
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="xl:hidden bg-transparent border-none cursor-pointer p-1.5 text-slate-900"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <Menu size={26} />
          </button>
        </header>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[86%] max-w-[380px] bg-white z-50 p-6 overflow-y-auto transition-transform duration-300 ease-out shadow-[-10px_0_30px_rgba(0,0,0,0.15)] flex flex-col ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
          <BrandLogo variant="header" showSubtitle={false} />
          <button
            type="button"
            className="bg-slate-100 rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer text-slate-800"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close Mobile Menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="list-none flex flex-col gap-1.5 flex-grow">
          <li>
            <Link
              href="/"
              prefetch={true}
              className="flex items-center justify-between p-3 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              prefetch={true}
              className="flex items-center justify-between p-3 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
            >
              About Us
            </Link>
          </li>
          <li>
            <div
              className="flex items-center justify-between p-3 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-100 cursor-pointer"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </div>
            {isMobileServicesOpen && (
              <ul className="list-none py-1 pl-4 flex flex-col gap-1">
                {dropdownServices.map((service) => (
                  <li key={service.title}>
                    <Link
                      href={service.href}
                      prefetch={true}
                      className="block p-2 text-sm text-slate-600 rounded-md hover:text-lime-700 hover:bg-lime-50"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex items-center justify-between p-3 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-100 cursor-pointer"
              onClick={() => setIsMobileCalcOpen(!isMobileCalcOpen)}
            >
              <span>Calculators</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isMobileCalcOpen ? 'rotate-180' : ''}`}
              />
            </div>
            {isMobileCalcOpen && (
              <ul className="list-none py-1 pl-4 flex flex-col gap-1">
                {dropdownCalculators.map((calc) => (
                  <li key={calc.title}>
                    <Link
                      href={calc.href}
                      prefetch={true}
                      className="block p-2 text-sm text-slate-600 rounded-md hover:text-lime-700 hover:bg-lime-50"
                    >
                      {calc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/disclosure"
              prefetch={true}
              className="flex items-center justify-between p-3 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
            >
              Disclosure
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              prefetch={true}
              className="flex items-center justify-between p-3 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              prefetch={true}
              className="flex items-center justify-between p-3 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="mt-8 pt-5 border-t border-slate-100">
          <div className="flex flex-col gap-2.5 mb-5">
            <Link
              href="/contact"
              prefetch={true}
              className="bg-slate-900 text-white text-center py-2.5 rounded-full font-bold text-sm"
            >
              Get Started
            </Link>
            <Link
              href="/calculators"
              prefetch={true}
              className="bg-amber-500 text-slate-950 text-center py-2.5 rounded-full font-bold text-sm shadow-md"
            >
              SIP Calculator
            </Link>
          </div>
          <div>
            <div className="text-xs text-slate-500 mb-1">Office Enquiry (Sangli)</div>
            <a
              href={`tel:${COMPANY_INFO.mobile}`}
              className="font-bold text-slate-900 text-base block"
            >
              {COMPANY_INFO.displayPhone}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
