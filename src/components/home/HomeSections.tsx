'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  Repeat,
  PieChart,
  ShieldCheck,
  FileCheck,
  Calendar,
  UserCheck,
  BookOpen,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Layers,
  HelpCircle,
  Landmark,
  Heart,
  Sparkles,
  Coins,
  Building2,
  ArrowUpRight,
  CalendarCheck
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { SERVICES_DATA } from '@/data/services';
import { BLOGS_DATA } from '@/data/blogs';
import CalculatorsGrid from '../calculators/CalculatorsGrid';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={24} />,
  Repeat: <Repeat size={24} />,
  PieChart: <PieChart size={24} />,
  ShieldCheck: <ShieldCheck size={20} />,
  FileCheck: <FileCheck size={24} />,
  Calendar: <Calendar size={24} />,
  UserCheck: <UserCheck size={24} />,
  Landmark: <Landmark size={20} />,
  Heart: <Heart size={20} />,
  Sparkles: <Sparkles size={20} />,
  Coins: <Coins size={20} />,
  Building2: <Building2 size={20} />
};

/* -------------------------------------------------------------
   1. INTRODUCTION SECTION
------------------------------------------------------------- */
export function IntroSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="section-badge">ABOUT OUR FIRM</div>
            <h2 className="section-title">
              Professional <span className="text-serif-accent text-lime-gradient">Mutual Fund</span> Distribution in <span className="text-serif-accent text-gold-accent">Sangli</span>
            </h2>
            <p style={{ marginBottom: 18 }}>
              <strong>ATTITUDE FINANCIAL SERVICES PVT. LTD.</strong> is an AMFI-Registered Mutual Fund Distributor holding registration number <strong>ARN-362861</strong>. Headquartered at Adityasai Landmark in Sangli, Maharashtra, our firm is dedicated to bridging the gap between mutual fund schemes and investors.
            </p>
            <p style={{ marginBottom: 24 }}>
              Under the leadership of <strong>Prashant Gurubasu Kempwad</strong>, alongside our dedicated operations team, we facilitate electronic onboarding, scheme information dissemination, systematic investment setups, and ongoing folio maintenance strictly within AMFI distributor norms.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-7">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} style={{ color: 'var(--primary-dark)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>AMFI ARN-362861</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} style={{ color: 'var(--primary-dark)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Digital e-KYC Support</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} style={{ color: 'var(--primary-dark)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Systematic SIP Setups</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} style={{ color: 'var(--primary-dark)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Local Physical Office</span>
              </div>
            </div>

            <Link href="/about" className="btn btn-outline">
              <span>Read About Our Approach</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div>
            <div style={{
              background: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: 36,
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 14, color: 'var(--navy-900)' }}>
                Our Core Distribution Principles
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 'var(--radius-full)',
                    background: 'var(--primary-light)', color: 'var(--primary-dark)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, flexShrink: 0
                  }}>1</div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 4 }}>Transparency First</h4>
                    <p style={{ fontSize: '0.84rem' }}>Clear disclosures on scheme regular plans, AMC commission structures, and statutory riskometers.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 'var(--radius-full)',
                    background: 'var(--primary-light)', color: 'var(--primary-dark)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, flexShrink: 0
                  }}>2</div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 4 }}>Process Rigor</h4>
                    <p style={{ fontSize: '0.84rem' }}>Adherence to AMFI guidelines, SEBI circulars, Central KYC protocols, and verified bank mandates.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 'var(--radius-full)',
                    background: 'var(--primary-light)', color: 'var(--primary-dark)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, flexShrink: 0
                  }}>3</div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 4 }}>Investor Awareness</h4>
                    <p style={{ fontSize: '0.84rem' }}>Empowering investors with educational knowledge regarding mutual fund categories and compounding mechanics.</p>
                  </div>
                </div>
              </div>

              <div className="compliance-box" style={{ marginTop: 24 }}>
                <p>
                  <strong>Compliance Note:</strong> Attitude Financial Services Pvt. Ltd. acts solely as an AMFI-Registered Mutual Fund Distributor (ARN-362861), providing scheme distribution, category education, and transaction facilitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------
   2. MUTUAL FUND INFORMATION SECTION
------------------------------------------------------------- */
export function MutualFundBasicsSection() {
  const concepts = [
    {
      icon: <Layers size={24} style={{ color: 'var(--primary-dark)' }} />,
      title: "What is a Mutual Fund?",
      desc: "A mutual fund is a professionally managed collective investment vehicle that pools money from numerous investors to purchase securities like stocks, bonds, and money market instruments."
    },
    {
      icon: <TrendingUp size={24} style={{ color: 'var(--primary-dark)' }} />,
      title: "Understanding NAV",
      desc: "Net Asset Value (NAV) represents the market value per unit of a mutual fund scheme. It is calculated by dividing total net scheme assets by the total number of outstanding units."
    },
    {
      icon: <ShieldCheck size={24} style={{ color: 'var(--primary-dark)' }} />,
      title: "Inherent Diversification",
      desc: "Mutual funds invest across dozens of securities within a single portfolio, mitigating the single-company risk associated with investing in individual stocks."
    },
    {
      icon: <Repeat size={24} style={{ color: 'var(--primary-dark)' }} />,
      title: "Rupee-Cost Averaging",
      desc: "Through Systematic Investment Plans (SIPs), investors purchase more units when prices dip and fewer when prices rise, averaging out acquisition costs over market cycles."
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">INVESTOR EDUCATION</div>
          <h2 className="section-title">
            Understanding <span className="text-serif-accent text-gold-accent">Mutual Funds</span>
          </h2>
          <p className="section-subtitle">
            Essential foundational concepts every investor should understand before participating in mutual fund schemes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {concepts.map((item) => (
            <div key={item.title} className="card">
              <div style={{
                width: 48, height: 48, borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--primary-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontSize: '0.875rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }} data-aos="fade-up">
          <Link href="/blogs" scroll={true} className="btn btn-outline">
            <BookOpen size={16} />
            <span>Explore Educational Articles</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------
   3. SERVICES OVERVIEW SECTION
------------------------------------------------------------- */
export function ServicesOverviewSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">OUR SERVICES</div>
          <h2 className="section-title">
            Comprehensive <span className="text-serif-accent text-gold-accent">Financial Solutions</span>
          </h2>
          <p className="section-subtitle">
            Structured services to assist investors with mutual funds, insurance protection, liquidity against folios, and retirement savings solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-[20px] overflow-hidden border border-slate-100 shadow-[0_6px_20px_-4px_rgba(10,17,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white"
            >
              {/* Top Photo Image with Floating Icon Badge & Gradient Overlay */}
              <div className="relative w-full overflow-hidden bg-[#0a111a]" style={{ height: 220 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Floating Colored Icon Badge */}
                <div style={{
                  position: 'absolute', top: 14, left: 14,
                  width: 38, height: 38, borderRadius: 10,
                  backgroundColor: service.badgeBg, color: '#ffffff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)', zIndex: 2
                }}>
                  {iconMap[service.iconName] || <TrendingUp size={20} />}
                </div>

                {/* Bottom Dark Gradient Overlay with Title and Subtitle */}
                <Link
                  href={`/services/${service.slug}`}
                  scroll={true}
                  style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '36px 18px 14px 18px',
                    background: 'linear-gradient(to top, rgba(7, 13, 20, 0.94) 0%, rgba(7, 13, 20, 0.6) 65%, transparent 100%)',
                    zIndex: 1, textDecoration: 'none'
                  }}
                >
                  <h3 style={{
                    color: '#ffffff', fontSize: '1.25rem', fontWeight: 800,
                    lineHeight: 1.2, marginBottom: 3, fontFamily: 'var(--font-heading)'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8rem', fontWeight: 500, margin: 0 }}>
                    {service.subtitle}
                  </p>
                </Link>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 justify-between p-5">
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.62, marginBottom: 20 }}>
                  {service.shortDesc}
                </p>
                <div style={{ paddingTop: 14, borderTop: '1px solid var(--border-subtle)' }}>
                  <Link
                    href={`/services/${service.slug}`}
                    scroll={true}
                    className="inline-flex items-center gap-1.5 font-bold text-[0.9125rem] text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    <span>Explore Solutions</span>
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------
   4. INVESTOR EDUCATION & DOCUMENTATION SECTION
------------------------------------------------------------- */
export function InvestorEducationSection() {
  const steps = [
    {
      num: "01",
      title: "PAN & Central KYC",
      desc: "Every investor must have a valid PAN and completed Central KYC (CKYC) verification with an approved KYC Registration Agency (KRA)."
    },
    {
      num: "02",
      title: "Bank Mandate (NACH / OTM)",
      desc: "Registration of an electronic One-Time Mandate (OTM) through your bank to enable automated SIP debits securely."
    },
    {
      num: "03",
      title: "Nomination Registration",
      desc: "Mandatory declaration of a registered nominee for your mutual fund folios ensuring smooth unit transmission in unforeseen events."
    },
    {
      num: "04",
      title: "Consolidated Statements (CAS)",
      desc: "Review your single consolidated statement generated monthly by depositories across all AMCs to track all holdings seamlessly."
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">TRANSACTION READINESS</div>
          <h2 className="section-title">Investor Awareness &amp; Documentation</h2>
          <p className="section-subtitle">
            The regulatory requirements and operational procedures necessary to participate in mutual fund schemes in India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="card">
              <div style={{
                fontFamily: 'var(--font-heading)', fontSize: '2rem',
                fontWeight: 800, color: 'var(--primary)', marginBottom: 12
              }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 10 }}>{step.title}</h3>
              <p style={{ fontSize: '0.875rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------
   4. CALCULATOR PREVIEW SECTION
------------------------------------------------------------- */
export function CalculatorPreviewSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">INTERACTIVE TOOLS</div>
          <h2 className="section-title">
            Interactive <span className="text-serif-accent text-gold-accent">Mutual Fund</span> Calculators
          </h2>
          <p className="section-subtitle">
            Accurate, interactive calculators to simulate compounding returns, analyze delay costs, and calculate life milestones.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <CalculatorsGrid limit={6} />
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }} data-aos="fade-up">
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2.5 bg-[#ea580c] hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base group"
          >
            <span>Explore All 14 Financial Calculators</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------
   6. UNDERSTANDING MUTUAL FUNDS (PART 2: SCHEME CATEGORIES)
------------------------------------------------------------- */
export function MutualFundCategoriesSection() {
  const categories = [
    {
      badge: "CAPITAL GROWTH",
      badgeBg: "rgba(37, 99, 235, 0.1)",
      badgeColor: "#2563eb",
      title: "Equity Schemes",
      horizon: "5 to 7+ Years",
      desc: "Mandated by SEBI to invest in listed equities. Categories span Large Cap, Mid Cap, Small Cap, and Flexi Cap schemes to drive long-term capital compounding.",
      points: ["Rupee-cost averaging via SIP", "Long-term growth potential"]
    },
    {
      badge: "CAPITAL PRESERVATION & ACCRUAL",
      badgeBg: "rgba(16, 185, 129, 0.1)",
      badgeColor: "#059669",
      title: "Debt & Money Market",
      horizon: "1 Day to 3 Years",
      desc: "Invests in fixed-income government treasury securities, commercial papers, and corporate debt aiming for accrual income and lower volatility compared to equities.",
      points: ["Liquid & Overnight options", "Treasury & contingency parking"]
    },
    {
      badge: "DYNAMIC BALANCE",
      badgeBg: "rgba(245, 158, 11, 0.1)",
      badgeColor: "#d97706",
      title: "Hybrid & Multi-Asset",
      horizon: "3 to 5 Years",
      desc: "Combines equities, debt securities, and gold in a unified portfolio. Balanced Advantage Funds dynamically rebalance equity exposure based on market valuations.",
      points: ["Automatic asset rebalancing", "Downside cushion during volatility"]
    },
    {
      badge: "GOAL DISCIPLINE",
      badgeBg: "rgba(225, 29, 72, 0.1)",
      badgeColor: "#e11d48",
      title: "Solution-Oriented",
      horizon: "5+ to 15+ Years",
      desc: "Structured around specific life goals including Retirement Funds and Children's Gift/Education Funds with statutory 5-year lock-in discipline.",
      points: ["Disciplined goal lock-in", "Education & Retirement orientation"]
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">SEBI SCHEME FRAMEWORK</div>
          <h2 className="section-title">
            Understanding <span className="text-serif-accent text-gold-accent">Mutual Funds</span>
          </h2>
          <p className="section-subtitle">
            Navigate standardized mutual fund categories to match your investment horizon, risk comfort, and life goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                  <span
                    className="text-[0.68rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block"
                    style={{ backgroundColor: cat.badgeBg, color: cat.badgeColor }}
                  >
                    {cat.badge}
                  </span>
                  <span className="text-[0.72rem] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {cat.horizon}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-950 mb-2 font-heading leading-tight">
                  {cat.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-700">
                {cat.points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#669610] flex-shrink-0" />
                    <span className="truncate">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }} data-aos="fade-up">
          <Link href="/blogs" scroll={true} className="btn btn-outline">
            <BookOpen size={16} />
            <span>Read Category Comparison Guides</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------
   8. LATEST FROM OUR FINANCIAL EDITORIAL WIRE
------------------------------------------------------------- */
export function LatestBlogsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Latest From Our Financial <span className="text-serif-accent text-gold-accent">Editorial Wire</span>
          </h2>
          <p className="section-subtitle">
            Educational guides, mutual fund concepts, and market insights to support your long-term investment journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BLOGS_DATA.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between bg-white rounded-[20px] border border-slate-100 shadow-[0_4px_20px_-2px_rgba(10,17,26,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                {/* Top Image with Pinned Dark Navy Category Badge */}
                <div className="relative w-full overflow-hidden bg-[#0a111a]" style={{ height: 220 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />

                  {/* Pinned Category Pill Badge */}
                  <div style={{
                    position: 'absolute', top: 14, left: 14,
                    backgroundColor: '#0a1728', color: '#ffffff',
                    padding: '5px 14px', borderRadius: '9999px',
                    fontSize: '0.72rem', fontWeight: 800,
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
                  }}>
                    {post.category}
                  </div>
                </div>

                {/* Body Content */}
                <div style={{ padding: '20px 20px 14px 20px' }}>
                  {/* Date & Read Time */}
                  <div className="flex items-center gap-1.5 text-[0.78rem] font-bold text-slate-500 uppercase tracking-wider mb-3">
                    <Calendar size={13} className="text-slate-400" />
                    <span>{post.publishDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.35,
                    marginBottom: 10, color: 'var(--navy-950)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    <Link href={`/blogs/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p style={{
                    fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0,
                    display: '-webkit-box', WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical', overflow: 'hidden'
                  }}>
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div style={{ padding: '14px 20px 20px 20px', borderTop: '1px solid var(--border-subtle)' }}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-[0.9rem] font-bold text-blue-700 hover:text-blue-800 transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }} data-aos="fade-up">
          <Link href="/blogs" className="btn btn-outline">
            <span>View All Knowledge Articles</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------
   7. CONTACT CTA SECTION
------------------------------------------------------------- */
export function ContactCTASection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div
          data-aos="fade-up"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, #0d2757 0%, #06142e 50%, #030a17 100%)',
            borderRadius: '24px',
            padding: 'clamp(36px, 6vw, 64px) clamp(20px, 5vw, 48px)',
            textAlign: 'center',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 60px -12px rgba(4, 11, 27, 0.45)',
            border: '1px solid rgba(59, 130, 246, 0.25)'
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div style={{
            position: 'absolute', top: '-20%', left: '50%',
            transform: 'translateX(-50%)', width: '600px', height: '300px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
            pointerEvents: 'none', zIndex: 0
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px', margin: '0 auto' }}>
            {/* Top Badge Pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(15,23,42,0.85)', border: '1px solid rgba(245,158,11,0.4)',
              padding: '6px 16px', borderRadius: '9999px',
              fontSize: '0.72rem', fontWeight: 800, color: '#fde047',
              letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '24px'
            }}>
              <Sparkles size={13} style={{ color: '#fbbf24' }} />
              <span>GET IN TOUCH WITH REGISTERED DISTRIBUTORS</span>
            </div>

            {/* Main Headline */}
            <h2 style={{
              fontSize: 'clamp(1.7rem, 4vw, 3.2rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.02em', lineHeight: 1.18, marginBottom: '18px',
              fontFamily: 'var(--font-heading)'
            }}>
              Ready to Start Your{' '}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#fbbf24', fontWeight: 400 }}>
                Investment
              </span>{' '}
              Journey?
            </h2>

            {/* Subtitle */}
            <p style={{
              color: '#cbd5e1', fontSize: 'clamp(0.9rem, 1.5vw, 1.125rem)',
              lineHeight: 1.65, maxWidth: '680px', margin: '0 auto 36px auto'
            }}>
              Connect with our AMFI-registered mutual fund distribution team today for mutual fund transaction support, SIP initiation, and scheme category information.
            </p>

            {/* Action Button */}
            <div className="flex items-center justify-center">
              <Link
                href="/contact"
                scroll={true}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  backgroundColor: '#f59e0b', color: '#030712', fontWeight: 800,
                  fontSize: '0.98rem', padding: '14px 32px', borderRadius: '9999px',
                  textDecoration: 'none', boxShadow: '0 4px 24px rgba(245,158,11,0.45)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <span>Contact Our Team</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
