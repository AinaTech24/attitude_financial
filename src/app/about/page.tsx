import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Building2,
  Users,
  FileCheck,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Image as ImageIcon,
  Globe,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import MissionVisionValues from '@/components/about/MissionVisionValues';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${COMPANY_INFO.legalName}, an AMFI-Registered Mutual Fund Distributor (ARN: ${COMPANY_INFO.arn}) based in Sangli, Maharashtra.`
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      {/* Clean Page Header */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <span>COMPANY PROFILE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
          About <span className="font-serif italic font-normal text-lime-700">ATTITUDE</span> Financial Services <span className="font-serif italic font-normal text-amber-600">Pvt. Ltd.</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          AMFI-Registered Mutual Fund Distributor (ARN-362861) operating from Sangli, Maharashtra. Facilitating mutual fund distribution, educational category awareness, and operational transaction support.
        </p>
      </div>

      {/* Main Content Sections */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
            <div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)', marginBottom: 18, color: 'var(--navy-900)' }}>
                Our Foundation &amp; Role
              </h2>
              <p style={{ marginBottom: 16 }}>
                <strong>ATTITUDE FINANCIAL SERVICES PVT. LTD.</strong> is established as a private limited entity in Maharashtra, operating within the regulatory framework established by the Securities and Exchange Board of India (SEBI) and the Association of Mutual Funds in India (AMFI).
              </p>
              <p style={{ marginBottom: 16 }}>
                Our objective is to streamline the mutual fund investment journey for retail and corporate investors. We assist with scheme documentation, KYC compliance, digital folio creation, systematic SIP registrations, and consolidated reporting.
              </p>
              <p>
                Our firm functions exclusively as an AMFI-Registered Mutual Fund Distributor. Our activities are focused entirely on mutual fund scheme distribution, investor education, and transaction facilitation in accordance with AMFI regulations.
              </p>
            </div>

            {/* Right Column: Visual Image Placeholder (Attitude Brand Theme) */}
            <div>
              <div
                id="about-visual-asset-frame"
                className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-xl transition-all duration-300 group flex flex-col items-center justify-center p-6 sm:p-8 text-center min-h-[320px] sm:min-h-[360px]"
                style={{
                  background: 'linear-gradient(135deg, #070d14 0%, #0a111a 50%, #111d2e 100%)',
                }}
              >
                {/* Subtle Dot Grid Overlay echoing financial data matrix */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-25"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #8ec61f 1.25px, transparent 1.25px)',
                    backgroundSize: '22px 22px',
                  }}
                />

                {/* Ambient Radial Glow Effect */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(142, 198, 31, 0.14) 0%, rgba(10, 17, 26, 0) 75%)',
                  }}
                />

                {/* Decorative Subtle Corner Accents */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-44 h-44 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full">
                  {/* Visual Status Pill */}
                  {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-lime-400/10 text-lime-300 border border-lime-400/25 mb-4 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                    <span>FUTURE VISUAL ASSET</span>
                  </div> */}

                  {/* Styled Center Icon Frame */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-lime-400/30 flex items-center justify-center text-lime-400 mb-4 shadow-lg shadow-lime-950/40 group-hover:scale-105 transition-transform duration-300">
                    <ImageIcon size={32} strokeWidth={1.75} className="text-lime-400" />
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Guiding Principles: Mission, Vision & Core Values */}
          <MissionVisionValues className="!py-4 mb-12 -mx-4 sm:-mx-6 lg:-mx-8" />

          {/* Pillars of our Approach */}
          <div style={{ marginBottom: 64 }}>
            <div className="section-header" data-aos="fade-up">
              <div className="section-badge">OPERATIONAL PILLARS</div>
              <h2 className="section-title">Our Operational Approach</h2>
              <p className="section-subtitle">
                Clear principles governing every interaction and transaction conducted through our firm.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card">
                <Building2 size={28} style={{ color: 'var(--primary-dark)', marginBottom: 16 }} />
                <h3 style={{ fontSize: '1.15rem', marginBottom: 10 }}>Mutual Fund Distribution</h3>
                <p style={{ fontSize: '0.875rem' }}>
                  Execution support across open-ended and closed-ended mutual fund schemes in regular plans of SEBI-registered fund houses.
                </p>
              </div>

              <div className="card">
                <FileCheck size={28} style={{ color: 'var(--primary-dark)', marginBottom: 16 }} />
                <h3 style={{ fontSize: '1.15rem', marginBottom: 10 }}>Investor Education</h3>
                <p style={{ fontSize: '0.875rem' }}>
                  Educational information on asset classes, market capitalizations, riskometers, and statutory scheme documents (SID & KIM).
                </p>
              </div>

              <div className="card">
                <Users size={28} style={{ color: 'var(--primary-dark)', marginBottom: 16 }} />
                <h3 style={{ fontSize: '1.15rem', marginBottom: 10 }}>Transaction Assistance</h3>
                <p style={{ fontSize: '0.875rem' }}>
                  Step-by-step assistance with purchase orders, redemption requests, switch operations, and systematic mandates.
                </p>
              </div>

              <div className="card">
                <ShieldCheck size={28} style={{ color: 'var(--primary-dark)', marginBottom: 16 }} />
                <h3 style={{ fontSize: '1.15rem', marginBottom: 10 }}>Investor Support</h3>
                <p style={{ fontSize: '0.875rem' }}>
                  Ongoing non-financial support including Central KYC validation, bank account change requests, and nominee updates.
                </p>
              </div>
            </div>
          </div>

          {/* Official Team Section */}
          <div style={{ marginBottom: 64 }}>
            <div className="section-header">
              <div className="section-badge">LEADERSHIP & STAFF</div>
              <h2 className="section-title">Our Professional Team</h2>
              <p className="section-subtitle">
                Dedicated professionals managing mutual fund distribution operations and investor assistance at our Sangli office.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {/* Owner */}
              <div className="card" style={{ textAlign: 'center', padding: '36px 24px' }}>
                <div style={{
                  width: 76,
                  height: 76,
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--navy-900)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 800
                }}>
                  PK
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 6 }}>
                  {COMPANY_INFO.owner}
                </h3>
                <div style={{ color: 'var(--primary-dark)', fontWeight: 700, fontSize: '0.85rem', marginBottom: 12 }}>
                  Owner & Principal Distributor
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Overseeing distribution operations, regulatory AMFI compliance, and strategic investor service delivery.
                </p>
              </div>

              {/* Team Member 1 */}
              <div className="card" style={{ textAlign: 'center', padding: '36px 24px' }}>
                <div style={{
                  width: 76,
                  height: 76,
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-alt)',
                  color: 'var(--navy-900)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 800
                }}>
                  FS
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 6 }}>
                  FIROJ SUTAR
                </h3>
                <div style={{ color: 'var(--navy-800)', fontWeight: 700, fontSize: '0.85rem', marginBottom: 12 }}>
                  Manager
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Managing day-to-day distribution workflow, scheme documentation processing, and investor communication.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="card" style={{ textAlign: 'center', padding: '36px 24px' }}>
                <div style={{
                  width: 76,
                  height: 76,
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-alt)',
                  color: 'var(--navy-900)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 800
                }}>
                  CS
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 6 }}>
                  CHIDANAND SHIRASHYAD
                </h3>
                <div style={{ color: 'var(--navy-800)', fontWeight: 700, fontSize: '0.85rem', marginBottom: 12 }}>
                  Assistant
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Assisting with investor queries, digital KYC verification steps, and transaction documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance Card */}
          <div className="compliance-box" data-aos="fade-up">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 6 }}>
              Statutory Disclosure & Role Limitation
            </h4>
            <p>
              {COMPANY_INFO.disclosures.distributorRoleNotice} Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Scheme performance depends on market conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

