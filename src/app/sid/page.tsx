import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ExternalLink, AlertCircle, BookOpen, Layers } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Scheme Information Documents (SID & KIM)',
  description: 'Learn how to access and review official Scheme Information Documents (SID) and Key Information Memorandums (KIM) before investing.'
};

export default function SIDPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      {/* Clean Page Header */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 bg-indigo-100/80 border border-indigo-300 text-indigo-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <span>STATUTORY SCHEME DOCUMENTS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
          Scheme Information Documents <span className="font-serif italic font-normal text-amber-600">(SID & KIM)</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          A guide to understanding and accessing official Scheme Information Documents (SID), Key Information Memorandums (KIM), and Statements of Additional Information (SAI).
        </p>
      </div>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="card" style={{ padding: '48px 48px', display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div style={{
              padding: '16px 20px',
              background: '#fffbeb',
              border: '1px solid #fef3c7',
              borderRadius: 'var(--radius-sm)',
              color: '#92400e',
              fontSize: '0.95rem',
              fontWeight: 600
            }}>
              &ldquo;{COMPANY_INFO.disclosures.marketRiskNotice}&rdquo;
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                1. What is an SID?
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                The <strong>Scheme Information Document (SID)</strong> is the primary statutory disclosure document prepared by an Asset Management Company (AMC) for every mutual fund scheme. It outlines all fundamental attributes of the fund, including:
              </p>
              <ul style={{ paddingLeft: 20, marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                <li>Investment Objective and asset allocation pattern (e.g. % in equity shares, debt papers, money market).</li>
                <li>Benchmark Index against which scheme performance is evaluated.</li>
                <li>Applicable fees, expenses, and Total Expense Ratio (TER) limits.</li>
                <li>Risk Factors, including market risk, credit risk, liquidity risk, and derivative exposure limits.</li>
                <li>Fund managers' qualifications, experience, and historical tenure.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                2. Key Information Memorandum (KIM)
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                The <strong>Key Information Memorandum (KIM)</strong> is an official summary of the SID. Every application form issued by an AMC is accompanied by the KIM. It provides concise details on minimum investment thresholds, benchmark details, exit loads, and the scheme riskometer so that investors can quickly review essential operational parameters before transacting.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                3. Statement of Additional Information (SAI)
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                The <strong>Statement of Additional Information (SAI)</strong> contains statutory information about the Mutual Fund and AMC setup, its sponsors, trustees, custody arrangements, and legal policies that apply uniformly across all schemes managed by that fund house.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 16 }}>
                4. Where to Access Official Scheme Documents
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 16 }}>
                Investors can download current SIDs, KIMs, and monthly factsheets directly from official regulatory and AMC platforms:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.amfiindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--navy-950)' }}>AMFI India Official Portal</strong>
                    <div style={{ fontSize: '0.78125rem', color: 'var(--text-muted)' }}>amfiindia.com</div>
                  </div>
                  <ExternalLink size={18} style={{ color: 'var(--primary-dark)' }} />
                </a>

                <a
                  href="https://www.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--navy-950)' }}>SEBI Mutual Fund Section</strong>
                    <div style={{ fontSize: '0.78125rem', color: 'var(--text-muted)' }}>sebi.gov.in</div>
                  </div>
                  <ExternalLink size={18} style={{ color: 'var(--primary-dark)' }} />
                </a>
              </div>
            </div>

            <div className="compliance-box">
              <p>
                <strong>Transaction Support Note:</strong> ATTITUDE FINANCIAL SERVICES PVT. LTD. provides physical or digital copies of SIDs and KIMs upon request for any scheme in which an investor desires to transact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

