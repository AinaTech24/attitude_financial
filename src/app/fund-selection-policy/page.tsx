import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, CheckCircle2, ShieldAlert, Award, FileSearch, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Fund Selection & Suitability Policy',
  description: `Distributor diligence principles, objective alignment criteria, and suitability framework followed by ${COMPANY_INFO.legalName} (ARN: ${COMPANY_INFO.arn}).`
};

export default function FundSelectionPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Fund Selection Policy</span>
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100/80 border border-indigo-300 text-indigo-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Target size={14} className="text-indigo-700" />
            <span>OPERATIONAL DILIGENCE &amp; METHODOLOGY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            Fund Selection &amp; <span className="font-serif italic font-normal text-amber-600">Suitability</span> Policy
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Principles guiding category awareness, fund parameters evaluation, and investor objective matching at {COMPANY_INFO.legalName}.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-8 text-slate-700 leading-relaxed text-sm sm:text-base">

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              1. Policy Objective
            </h2>
            <p>
              The objective of this policy is to lay down transparent and consistent parameters for shortlisting and distributing mutual fund schemes to investors, ensuring adherence to SEBI and AMFI circulars regarding product suitability and distributor obligations.
            </p>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              2. Core Evaluation Parameters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <Award size={16} className="text-amber-600" />
                  <span>Track Record &amp; Consistency</span>
                </h3>
                <p className="text-slate-600">Evaluation of long-term rolling returns, performance consistency across market cycles, and benchmark comparisons.</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <FileSearch size={16} className="text-blue-600" />
                  <span>Risk-Adjusted Metrics</span>
                </h3>
                <p className="text-slate-600">Assessment of Sharpe ratio, Sortino ratio, Standard Deviation, and Beta to determine downside protection capabilities.</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  <span>Fund House Governance</span>
                </h3>
                <p className="text-slate-600">Integrity, stability of fund management team, institutional parentage, AUM scale, and compliance track record of the AMC.</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <Target size={16} className="text-purple-600" />
                  <span>Expense Ratio &amp; Loads</span>
                </h3>
                <p className="text-slate-600">Scrutiny of Total Expense Ratio (TER), turnover ratio, exit load structures, and liquidity parameters.</p>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
              3. Investor Suitability &amp; Risk Profiling
            </h2>
            <p>
              As a distributor, we educate investors on category risk profiles (such as Equity, Debt, Hybrid, and Solution-oriented schemes). Investors are guided to consider their time horizon, financial goals, liquidity needs, and risk tolerance prior to selecting any scheme.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Non-advisory notice */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
            <ShieldAlert size={18} className="text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong>Non-Advisory Clarification:</strong> {COMPANY_INFO.legalName} is an AMFI-Registered Mutual Fund Distributor (ARN: {COMPANY_INFO.arn}). Category overviews and scheme information are educational and execution-oriented. The final investment choice rests entirely with the investor.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
