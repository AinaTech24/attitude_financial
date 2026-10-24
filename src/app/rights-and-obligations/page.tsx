import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, CheckCircle2, ShieldCheck, AlertCircle, FileText } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Rights & Obligations Of Investors',
  description: `Rights and obligations of mutual fund investors per SEBI regulatory frameworks and AMFI code of conduct.`
};

export default function RightsAndObligationsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Rights &amp; Obligations</span>
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-300 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Scale size={14} className="text-blue-700" />
            <span>STATUTORY RIGHTS &amp; RESPONSIBILITIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            Rights &amp; Obligations <span className="font-serif italic font-normal text-amber-600">Of Investors</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Statutory framework setting forth legal rights, operational entitlements, and obligations of mutual fund investors.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-8 text-slate-700 leading-relaxed text-sm sm:text-base">

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              1. Rights of Mutual Fund Investors
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <strong>Allotment &amp; Statement of Accounts:</strong> Investors have the right to receive allotment confirmation and account statements within 5 business days from transaction closure.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <strong>Applicable NAV:</strong> Right to NAV allocation as per SEBI cut-off timing rules based on realization of funds in scheme bank accounts.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <strong>Redemption &amp; Repurchase:</strong> Right to receive redemption or dividend proceeds within the regulatory turnaround time (typically 3 business days).
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <strong>Scheme Governance &amp; Material Changes:</strong> Right to be notified at least 30 calendar days in advance of any fundamental attribute change with an exit option without load.
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              2. Obligations of Mutual Fund Investors
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <strong>Truthful Disclosures:</strong> Provide accurate identity, tax status (resident/NRI), and banking records during KYC and transaction requests.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <strong>Independent Evaluation:</strong> Carefully study Scheme Information Document (SID), Key Information Memorandum (KIM), and riskometer before transacting.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <strong>Safeguarding Credentials:</strong> Safeguard PINs, passwords, and digital signatures; verify all transaction confirmations received via SMS/email.
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Grievance Redressal statement */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-600">
            For any queries or grievances regarding investor rights, contact our compliance desk at <strong>{COMPANY_INFO.email}</strong> or AMFI ARN desk (ARN-{COMPANY_INFO.arn}).
          </div>

        </div>

      </div>
    </div>
  );
}
