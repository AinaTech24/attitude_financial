import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { UserCheck, FileCheck, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Client Onboarding & KYC Policy',
  description: `KYC documentation checklist, SEBI KRA verification process, and Anti-Money Laundering (AML) standards followed by ${COMPANY_INFO.legalName} (ARN: ${COMPANY_INFO.arn}).`
};

export default function ClientOnboardingPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Client Onboarding &amp; KYC</span>
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <UserCheck size={14} className="text-emerald-700" />
            <span>SEBI &amp; PMLA REGULATORY COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            Client Onboarding &amp; <span className="font-serif italic font-normal text-amber-600">KYC Policy</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Standard operating procedure for investor verification, identity documentation, and Anti-Money Laundering compliance.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-8 text-slate-700 leading-relaxed text-sm sm:text-base">

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              1. Overview of KYC Norms
            </h2>
            <p>
              Know Your Customer (KYC) is a mandatory regulatory requirement established by the Securities and Exchange Board of India (SEBI) and the Prevention of Money Laundering Act, 2002 (PMLA). Every investor intending to invest in mutual funds must be KYC compliant through a SEBI-registered KYC Registration Agency (KRA).
            </p>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              2. Required Documentation Checklist
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Permanent Account Number (PAN):</strong> Valid PAN card or e-PAN verified with Income Tax database.
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Proof of Identity (POI):</strong> Aadhaar, Passport, Voter ID, or Driving License.
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Proof of Address (POA):</strong> Aadhaar, Utility bills (&lt; 3 months), or Bank statement.
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Bank Account Proof:</strong> Cancelled cheque leaf with printed name, or latest bank statement.
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              3. Verification Process (In-Person / Video KYC)
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>Submission of completed KYC registration form and self-attested documents.</li>
              <li>Verification through Aadhaar OTP or In-Person Verification (IPV) via geo-tagged live photo/video.</li>
              <li>Generation of KRA acknowledgment number and centralized CVL/NDML status updation.</li>
              <li>Linking of mutual fund folio to verified Bank Mandate (NACH/e-Mandate) for seamless SIPs.</li>
            </ol>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              4. Anti-Money Laundering (AML) Compliance
            </h2>
            <p className="text-xs sm:text-sm">
              {COMPANY_INFO.legalName} complies strictly with AML regulations: third-party payments are strictly prohibited, cash transactions are not entertained, and funds must originate from and be redeemed into the investor&apos;s verified bank account only.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
