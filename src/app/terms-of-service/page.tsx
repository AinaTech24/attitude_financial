import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FileCheck, AlertCircle, Scale, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Attitude Financial Services',
  description: `Terms and conditions governing the use of the website and services offered by ${COMPANY_INFO.legalName} (ARN: ${COMPANY_INFO.arn}).`
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Terms &amp; Conditions</span>
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-300 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Scale size={14} className="text-blue-700" />
            <span>LEGAL AGREEMENT &amp; PLATFORM NORMS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            Terms &amp; <span className="font-serif italic font-normal text-amber-600">Conditions</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before accessing or using the services of {COMPANY_INFO.legalName}.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-8 text-slate-700 leading-relaxed text-sm sm:text-base">

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3 flex items-center gap-2">
              <FileCheck size={20} className="text-[#8ec61f]" />
              <span>1. Agreement to Terms</span>
            </h2>
            <p>
              By accessing and using this website, you agree to be bound by these Terms &amp; Conditions and all applicable laws and regulations in India. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3 flex items-center gap-2">
              <ShieldCheck size={20} className="text-blue-600" />
              <span>2. Capacity of Operations</span>
            </h2>
            <p>
              <strong>{COMPANY_INFO.legalName}</strong> is registered with the Association of Mutual Funds in India (AMFI) as an official Mutual Fund Distributor holding <strong>ARN: {COMPANY_INFO.arn}</strong>. The company operates strictly in a distribution capacity and facilitates transactions in regular plans of mutual fund schemes. We are not a SEBI-registered Investment Advisor (RIA) and do not provide fee-based investment advisory services.
            </p>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3 flex items-center gap-2">
              <AlertCircle size={20} className="text-amber-600" />
              <span>3. No Guarantees or Outcome Representation</span>
            </h2>
            <p>
              Mutual fund investments are subject to market risks. Past performance is no guarantee of future returns. The company makes no warranty or representation regarding the accuracy, completeness, or suitability of information or calculator projections displayed on this platform. Investors must exercise their independent judgment and review scheme information documents (SID/KIM) prior to making investment decisions.
            </p>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              4. Commission and Compensation
            </h2>
            <p>
              We receive trailing commissions from Asset Management Companies (AMCs) for facilitating investments in regular schemes. A transparent commission schedule is published on our Commission Disclosure page. Investors have the option of investing in direct plans of mutual fund schemes through AMC websites or RTAs.
            </p>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising out of or related to this website or services shall be subject to the exclusive jurisdiction of the competent courts in Sangli, Maharashtra, India.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
