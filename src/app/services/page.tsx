'use client';

import React from 'react';
import Link from 'next/link';
import {
  Landmark,
  Heart,
  ShieldCheck,
  Sparkles,
  Coins,
  Building2,
  ArrowUpRight,
  AlertCircle,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/data/services';
import { COMPANY_INFO } from '@/data/company';

const serviceIconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark size={20} />,
  Heart: <Heart size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  Sparkles: <Sparkles size={20} />,
  Coins: <Coins size={20} />,
  Building2: <Building2 size={20} />
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      {/* Clean Page Header */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 bg-lime-100/80 border border-lime-300 text-lime-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <span>AMFI-REGISTERED MUTUAL FUND DISTRIBUTOR • ARN-362861</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
          Comprehensive <span className="font-serif italic font-normal text-lime-700">Financial</span> Solutions & <span className="font-serif italic font-normal text-amber-600">Support</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Facilitating scheme access, electronic transaction execution, category awareness, and investor education within the authorized regulatory scope of an AMFI-Registered Mutual Fund Distributor.
        </p>
      </div>

      {/* Main Services Grid (Matching Reference Image 3 with Generated Photography) */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-[72px]">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                id={service.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: '0 6px 24px -4px rgba(10, 17, 26, 0.08), 0 2px 6px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                {/* Top Image Box with Floating Icon Badge & Gradient Overlay */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: 240,
                  overflow: 'hidden',
                  backgroundColor: '#0a111a'
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />

                  {/* Top-Left Floating Colored Icon Badge */}
                  <div style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    backgroundColor: service.badgeBg,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                    zIndex: 2
                  }}>
                    {serviceIconMap[service.iconName] || <TrendingUp size={20} />}
                  </div>

                  {/* Bottom Dark Gradient Overlay with Title and Subtitle */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '40px 20px 16px 20px',
                    background: 'linear-gradient(to top, rgba(7, 13, 20, 0.95) 0%, rgba(7, 13, 20, 0.6) 65%, transparent 100%)',
                    zIndex: 1
                  }}>
                    <Link
                      href={`/services/${service.slug}`}
                      scroll={true}
                      style={{ textDecoration: 'none' }}
                    >
                      <h3 style={{
                        color: '#ffffff',
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        lineHeight: 1.2,
                        marginBottom: 4,
                        fontFamily: 'var(--font-heading)'
                      }}>
                        {service.title}
                      </h3>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        margin: 0
                      }}>
                        {service.subtitle}
                      </p>
                    </Link>
                  </div>
                </div>

                {/* Card Body Description and Action */}
                <div style={{
                  padding: '24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <p style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: 24
                  }}>
                    {service.shortDesc}
                  </p>

                  <div style={{
                    paddingTop: 16,
                    borderTop: '1px solid var(--border-subtle)'
                  }}>
                    <Link
                      href={`/services/${service.slug}`}
                      scroll={true}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        fontWeight: 700,
                        fontSize: '0.925rem',
                        color: '#1d4ed8',
                        textDecoration: 'none',
                        transition: 'color var(--transition-fast)'
                      }}
                    >
                      <span>Explore Solutions</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Workflow Section */}
          <div style={{
            background: 'linear-gradient(145deg, #070d14 0%, #0d1726 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px 40px',
            color: '#ffffff',
            marginBottom: 64,
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 40px auto' }}>
              <span className="section-badge dark">OPERATIONAL WORKFLOW</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: 12 }}>
                How Our Mutual Fund Distribution Works
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem' }}>
                A transparent, step-by-step electronic process aligned with AMFI and SEBI regulatory standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 22px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  marginBottom: 10
                }}>
                  01
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
                  Digital KYC & Onboarding
                </h3>
                <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  Verification of PAN, Aadhaar, and Central KYC (CKYC) status to ensure statutory readiness across all mutual fund houses.
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 22px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  marginBottom: 10
                }}>
                  02
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
                  SID / KIM & Scheme Review
                </h3>
                <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  Detailed disclosure of Scheme Information Documents (SID), Key Information Memorandums (KIM), asset allocation, and riskometer indicators.
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 22px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  marginBottom: 10
                }}>
                  03
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
                  Paperless Mandate & Order
                </h3>
                <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  Execution of purchase orders or recurring e-NACH mandates through recognized industry transaction routing systems based on your instruction.
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 22px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  marginBottom: 10
                }}>
                  04
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
                  Consolidated Folio Care
                </h3>
                <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  Ongoing transaction reporting, statement retrieval, bank mandate modifications, nominee updates, and redemption assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance & Regulatory Disclaimer */}
          <div className="compliance-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <AlertCircle size={18} style={{ color: 'var(--primary-dark)' }} />
              <strong style={{ color: 'var(--navy-950)', fontSize: '0.95rem' }}>
                Important Mutual Fund Distribution Notice & Regulatory Disclosures
              </strong>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.65 }}>
              {COMPANY_INFO.disclosures.distributorRoleNotice} Attitude Financial Services Pvt. Ltd. acts exclusively as an AMFI-Registered Mutual Fund Distributor (ARN: 362861). We do not provide investment advisory services or charge fees for financial advice. All mutual fund transactions are executed solely on investor instructions. In accordance with SEBI regulations, distribution commissions are received from respective Asset Management Companies (AMCs) for regular plans of mutual fund schemes distributed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

