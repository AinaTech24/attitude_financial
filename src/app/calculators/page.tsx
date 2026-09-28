import React from 'react';
import type { Metadata } from 'next';
import CalculatorsGrid from '@/components/calculators/CalculatorsGrid';
import { AlertCircle, HelpCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Financial & Mutual Fund Calculators | Attitude Financial Services',
  description: 'Interactive educational tools demonstrating compounding mechanics, loan EMIs, retirement corpus projections, inflation illustrations, and disciplined capital compounding calculations.'
};

export default function CalculatorsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Clean Page Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-amber-700" />
            <span>EDUCATIONAL CALCULATION SUITE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            Financial & Mutual Fund <span className="font-serif italic font-normal text-amber-600">Calculators</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Interactive educational tools demonstrating compounding mechanics, loan EMIs, goal projections, inflation illustrations, and disciplined capital compounding calculations. Select any calculator to launch its dedicated interactive workbench.
          </p>
        </div>

        {/* 14 Calculators Grid matching Reference Image 1 */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Select a Calculator to Count & Simulate
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Click any tool below to launch its dedicated calculation workbench with live parameter sliders and projections.
            </p>
          </div>

          <CalculatorsGrid />
        </div>

        {/* Educational Concept / Interpretation Guide */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-12">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <HelpCircle size={22} className="text-blue-600 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight font-heading">
              How to Interpret These Illustrations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Compounding Mechanics</h3>
              <p>
                Hypothetical return rates illustrate the mathematical power of compound interest over time. Actual returns depend on market movements and scheme portfolio allocations.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Rupee-Cost Averaging</h3>
              <p>
                Regular SIP installments buy varying numbers of units across market highs and lows, averaging unit purchase costs without needing to time market entries.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Inflation Impact</h3>
              <p>
                Calculators for retirement, education, and weddings factor in inflation to ensure your target corpus reflects real purchasing power at the time of maturity.
              </p>
            </div>
          </div>

          {/* Statutory Market Risk Box */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 flex items-start gap-3 text-xs sm:text-sm text-amber-950 mt-6">
            <AlertCircle size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Statutory Market Risk & Educational Disclaimer:</strong> {COMPANY_INFO.disclosures.calculatorNotice} {COMPANY_INFO.disclosures.marketRiskNotice} These calculators are not designed to recommend any specific mutual fund scheme or Asset Management Company.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

