import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Lock, Eye } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy and data protection policy for ${COMPANY_INFO.legalName}.`
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      {/* Clean Page Header */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <span>DATA PROTECTION</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
          Privacy <span className="font-serif italic font-normal text-lime-700">Policy</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          How ATTITUDE FINANCIAL SERVICES PVT. LTD. collects, handles, and protects information submitted by visitors and investors.
        </p>
      </div>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="card" style={{ padding: '48px 48px', display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                1. Information We Collect
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                When you interact with our website or submit an enquiry form, we collect only basic contact information provided voluntarily by you, such as your name, email address, mobile number, and general enquiry message.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginTop: 10 }}>
                We do NOT collect detailed financial profiling information, confidential banking passwords, PIN numbers, or income profiles through public website forms.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                2. Use of Information
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Information collected is used strictly for:
              </p>
              <ul style={{ paddingLeft: 20, marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                <li>Responding to your mutual fund scheme or transaction support inquiries.</li>
                <li>Assisting with KYC verification documentation and RTA transaction routing.</li>
                <li>Complying with regulatory record-keeping standards prescribed by SEBI and AMFI.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                3. Confidentiality & Non-Disclosure
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                {COMPANY_INFO.legalName} maintains strict confidentiality. We do not sell, rent, trade, or distribute your personal contact information to third-party telemarketers or external commercial entities. Information is shared only with authorized statutory bodies, RTAs (CAMS/KFintech), or respective AMCs as required to process mutual fund applications.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                4. Data Security
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                We employ industry-standard digital and procedural safeguards to protect all submitted data from unauthorized access, modification, or disclosure.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--navy-950)', marginBottom: 12 }}>
                5. Contacting the Privacy Officer
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                If you have questions regarding our privacy practices or wish to update your contact preferences, please write to us at <strong>{COMPANY_INFO.email}</strong> or visit our office at {COMPANY_INFO.address.full}.
              </p>
            </div>

            <div className="compliance-box">
              <p>
                Last Updated: January 2026. All operations comply with applicable Indian IT and data privacy regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

