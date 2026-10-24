import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, AlertCircle, FileText, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Investor Charter | Attitude Financial Services',
  description: `Investor Charter for Mutual Funds per SEBI guidelines, outlining investor rights, responsibilities, and grievance redressal mechanisms.`
};

export default function InvestorCharterPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Investor Charter</span>
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-emerald-700" />
            <span>SEBI &amp; AMFI REGULATORY CHARTER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            Investor <span className="font-serif italic font-normal text-amber-600">Charter</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Prescribed charter detailing the rights and responsibilities of investors investing in Mutual Funds in India.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-8 text-slate-700 leading-relaxed text-sm sm:text-base">

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              A. Vision and Mission of Investor Charter
            </h2>
            <p className="mb-3">
              <strong>Vision:</strong> To facilitate a transparent, fair, and secure mutual fund investment ecosystem that empowers investors to achieve their financial aspirations through disciplined investing.
            </p>
            <p>
              <strong>Mission:</strong> To ensure investors receive true and fair disclosures of mutual fund schemes, risk factors, fee structures, and timely operational services adhering strictly to SEBI regulations.
            </p>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              B. Key Rights of Investors
            </h2>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Right to receive Scheme Information Document (SID), Key Information Memorandum (KIM), and Statement of Additional Information (SAI).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Right to transparent disclosure of Total Expense Ratio (TER), distributor commission rates, and exit load structures.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Right to receive account statements, Consolidated Account Statement (CAS), and transaction confirmation within prescribed timelines.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Right to receive redemption proceeds within 3 working days from date of valid redemption request.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Right to escalate unresolved grievances to SEBI SCORES portal and SMART ODR platform.</span>
              </li>
            </ul>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              C. Responsibilities of Investors
            </h2>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <AlertCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>Read all scheme-related offering documents carefully before investing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>Complete one-time KYC verification using valid PAN, Aadhaar, and bank account proofs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>Keep contact details (mobile, email, address, bank mandate) updated across mutual fund folios.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>Never share OTPs, passwords, or signed blank application forms with any intermediary.</span>
              </li>
            </ul>
          </div>

          <hr className="border-slate-100" />

          {/* Grievance Redressal Mechanism */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-extrabold text-slate-950 mb-3 flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-600" />
              <span>Grievance Redressal Mechanism</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              In case of any grievance, investors can reach our principal officer at <strong>{COMPANY_INFO.email}</strong> or <strong>{COMPANY_INFO.displayPhone}</strong>. If unsatisfied, investors may lodge a complaint on SEBI SCORES or SMART ODR:
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold">
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>SEBI SCORES Portal</span>
                <ExternalLink size={13} />
              </a>
              <a
                href="https://smartodr.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <span>SMART ODR Platform</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
