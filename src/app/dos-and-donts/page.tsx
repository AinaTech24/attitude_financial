import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle, ShieldCheck, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: "Do's and Don'ts for Investors | Attitude Financial Services",
  description: `Essential guidelines, best practices, and precautionary measures for mutual fund investors by ${COMPANY_INFO.legalName} (ARN: ${COMPANY_INFO.arn}).`
};

export default function DosAndDontsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Do&apos;s and Don&apos;ts</span>
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-emerald-700" />
            <span>INVESTOR PROTECTION GUIDELINES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            Do&apos;s and <span className="font-serif italic font-normal text-amber-600">Don&apos;ts</span> for Investors
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Practical guidelines recommended by SEBI and AMFI to safeguard your mutual fund investments and promote disciplined wealth creation.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-10">

          {/* Do's Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-emerald-700 tracking-tight mb-4 flex items-center gap-2">
              <CheckCircle2 size={24} className="text-emerald-600" />
              <span>DO&apos;S (Recommended Practices)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 flex items-start gap-2.5 text-slate-800">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Verify AMFI registration (ARN number) of your distributor before investing.</span>
              </div>
              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 flex items-start gap-2.5 text-slate-800">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Read the Scheme Information Document (SID) and Key Information Memorandum (KIM) thoroughly.</span>
              </div>
              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 flex items-start gap-2.5 text-slate-800">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Ensure payments are made only through your own verified bank account (cheque / net banking / UPI).</span>
              </div>
              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 flex items-start gap-2.5 text-slate-800">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Check the scheme Riskometer to ensure the product matches your risk appetite.</span>
              </div>
              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 flex items-start gap-2.5 text-slate-800">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Keep your nomination details and contact information updated in all your folios.</span>
              </div>
              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 flex items-start gap-2.5 text-slate-800">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Monitor your portfolio periodically and rely on long-term SIP compounding.</span>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Don'ts Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-rose-700 tracking-tight mb-4 flex items-center gap-2">
              <XCircle size={24} className="text-rose-600" />
              <span>DON&apos;TS (Practices to Avoid)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/50 flex items-start gap-2.5 text-slate-800">
                <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                <span>Do NOT sign blank application forms or transaction slips under any circumstances.</span>
              </div>
              <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/50 flex items-start gap-2.5 text-slate-800">
                <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                <span>Do NOT make cash payments or transfer money to distributor personal accounts.</span>
              </div>
              <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/50 flex items-start gap-2.5 text-slate-800">
                <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                <span>Do NOT believe in promises of guaranteed returns; mutual funds carry market risk.</span>
              </div>
              <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/50 flex items-start gap-2.5 text-slate-800">
                <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                <span>Do NOT share internet banking passwords, MPINs, or OTPs with anyone.</span>
              </div>
              <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/50 flex items-start gap-2.5 text-slate-800">
                <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                <span>Do NOT invest based on unsolicited SMS, social media tips, or speculative rumors.</span>
              </div>
              <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/50 flex items-start gap-2.5 text-slate-800">
                <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                <span>Do NOT panic and stop your SIPs during normal market volatility.</span>
              </div>
            </div>
          </div>

          {/* Statutory Market Risk Notice */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 text-xs text-amber-950 flex items-start gap-3">
            <AlertCircle size={18} className="text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong>Statutory Market Risk Notice:</strong> Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. ARN-{COMPANY_INFO.arn} | {COMPANY_INFO.legalName}.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
