import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  TrendingDown,
  CreditCard,
  Waves,
  Percent,
  Building,
  Globe,
  Scale,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Statutory Risk Factors & Disclosures',
  description: `Official statutory risk disclosures and AMFI risk factors governing mutual fund investments distributed by ${COMPANY_INFO.legalName} (ARN: ${COMPANY_INFO.arn}).`
};

export default function RiskFactorsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Risk Factors</span>
        </div>

        {/* Clean Page Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-amber-700" />
            <span>STATUTORY RISK DISCLOSURES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            AMFI Risk <span className="font-serif italic font-normal text-amber-600">Factors</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Essential statutory risk factors and regulatory disclosures governing investments in Indian mutual funds.
          </p>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-8">

          {/* 1. Standard AMFI Risk Disclosure */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle size={22} className="text-amber-600 shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Standard AMFI Risk Disclosure
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. The NAV of the schemes may go up or down depending upon the factors and forces affecting the securities markets. Past performance of the mutual fund schemes is not necessarily indicative of future performance.
            </p>
          </div>

          {/* 2. Market Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <TrendingDown size={20} className="text-blue-600 shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Market Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Market risk refers to the possibility that the value of an investment may decline due to factors that affect the overall performance of the financial markets. Equity mutual fund schemes are particularly susceptible to market risk as the prices of underlying stocks may fluctuate due to economic conditions, domestic and international monetary policies, and industry trends.
            </p>
          </div>

          {/* 3. Credit Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <CreditCard size={20} className="text-purple-600 shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Credit Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Credit risk is the risk that an issuer of a fixed-income security (such as corporate bonds or debentures) held by a mutual fund scheme may default on its payment obligations. The NAV of debt schemes may fall if the credit rating of an underlying issuer is downgraded or if interest payments are delayed.
            </p>
          </div>

          {/* 4. Liquidity Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <Waves size={20} className="text-cyan-600 shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Liquidity Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Liquidity risk relates to the ease with which securities held in a scheme&apos;s portfolio can be sold without causing a significant impact on their market price. Illiquid securities may force fund managers to sell at unfavorable discounts during periods of high redemption volume.
            </p>
          </div>

          {/* 5. Interest Rate Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <Percent size={20} className="text-emerald-600 shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Interest Rate Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Interest rate risk is the risk that bond prices will decline when prevailing interest rates rise. Fixed-income securities with longer maturity horizons typically carry higher interest rate sensitivity compared to short-duration papers.
            </p>
          </div>

          {/* 6. Regulatory Note & Distributor Role */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-extrabold text-slate-950 mb-3 flex items-center gap-2">
              <Scale size={18} className="text-[#8ec61f]" />
              <span>Distributor Capacity &amp; Compliance Statement</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {COMPANY_INFO.legalName} is an AMFI-Registered Mutual Fund Distributor (ARN: {COMPANY_INFO.arn}). We facilitate distribution and execution in regular plans of mutual fund schemes and receive trailing commissions from AMCs. We do not provide fee-based investment advisory services (RIA). Investors are encouraged to review applicable Scheme Information Documents (SID) and Key Information Memorandums (KIM) before investing.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
