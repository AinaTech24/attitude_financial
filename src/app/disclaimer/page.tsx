import React from 'react';
import type { Metadata } from 'next';
import { AlertCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Statutory Disclaimer',
  description: `Official statutory disclaimers and regulatory notifications for ${COMPANY_INFO.legalName} (ARN: ${COMPANY_INFO.arn}).`
};

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      {/* Clean Page Header */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <span>LEGAL & REGULATORY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
          Statutory <span className="font-serif italic font-normal text-amber-600">Disclaimer</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Official regulatory disclosures governing the use of this website and mutual fund distribution services.
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
                1. Nature of Entity & Permitted Scope
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                <strong>{COMPANY_INFO.legalName}</strong> is registered with the Association of Mutual Funds in India (AMFI) as an official Mutual Fund Distributor holding <strong>ARN-362861</strong>. The company operates exclusively within the distribution capacity permitted by SEBI circulars and AMFI regulations.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginTop: 10 }}>
                The company operates solely under an AMFI Mutual Fund Distributor registration (ARN-362861). Content published on this website is for general investor education and category awareness, and should not be construed as individualized product selection or a solicitation to invest in any specific scheme.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                2. Market Risk & Performance Variability
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Mutual fund investments are subject to market risks, including the possible loss of principal amount invested. Net Asset Values (NAVs) fluctuate based on market movements, interest rate shifts, and issuer creditworthiness.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginTop: 10 }}>
                {COMPANY_INFO.legalName} makes no representations or assurances regarding future performance, capital appreciation, or dividend distributions from any mutual fund scheme. Net Asset Values (NAVs) fluctuate with underlying market valuations, and historical figures do not represent future outcomes.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                3. Illustrative Nature of Calculators
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                All calculators, compounding tools, inflation illustrations, and charts provided on this website are designed solely for investor educational understanding. Results are mathematical projections derived from user-entered assumptions and formulas. They do not constitute actual expected returns or recommendations.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                4. Independent Evaluation
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Investors must independently assess the suitability of any mutual fund scheme based on their individual investment horizon, risk appetite, and the applicable Scheme Information Document (SID), Key Information Memorandum (KIM), and Statement of Additional Information (SAI) issued by the respective Asset Management Company (AMC).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                5. Third-Party Data & External Links
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                While reasonable efforts are made to keep informational content up-to-date and factual, {COMPANY_INFO.legalName} assumes no responsibility for inadvertent inaccuracies or omissions in general market data. External links are provided for convenience only.
              </p>
            </div>

            <div className="compliance-box">
              <p>
                For official scheme details, investors should consult AMFI India (amfiindia.com), SEBI (sebi.gov.in), or the respective mutual fund portal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

