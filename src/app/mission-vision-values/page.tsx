import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import MissionVisionValues from '@/components/about/MissionVisionValues';

export const metadata: Metadata = {
  title: 'Mission, Vision & Core Values',
  description: `Explore the foundational purpose, future vision, and ethical principles guiding ${COMPANY_INFO.legalName}, an AMFI-Registered Mutual Fund Distributor.`
};

export default function MissionVisionValuesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      {/* Top Banner */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
          <span>GUIDING PRINCIPLES</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          Our Mission, Vision &{' '}
          <span className="font-serif italic font-normal text-amber-500">
            Core Values
          </span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {COMPANY_INFO.legalName} assists investors with accessible mutual fund distribution, transparent transaction facilitation, and financial literacy.
        </p>
      </div>

      {/* Main 3 Cards Component */}
      <MissionVisionValues showHeader={false} className="!py-8" />

      {/* Pillars Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-xs font-black text-lime-700 uppercase tracking-wider bg-lime-100/80 px-3 py-1 rounded-full border border-lime-300 inline-block mb-3">
                REGULATORY FOUNDATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                How We Uphold Our Commitments
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                As an AMFI-Registered distributor (ARN-{COMPANY_INFO.arn}), every client interaction and transaction support service adheres strictly to AMFI code of conduct and statutory distribution standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-lime-100 text-lime-700 flex items-center justify-center font-bold mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Client-First Suitability
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  We provide objective scheme information and riskometer classifications to help you evaluate options suited to your investment horizon and liquidity preferences.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-4">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Full Fee Transparency
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Zero advisory charges or hidden fees. We deal exclusively in regular mutual fund plans and transparently disclose AMC commissions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                  <TrendingUp size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Long-Term Compounding
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  We advocate systematic, disciplined SIPs to counter volatility, avoiding short-term speculation or market timing illusions.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-slate-900 font-bold text-sm">
                  Ready to start disciplined mutual fund investments?
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                  Connect directly with our distribution team in Sangli, Maharashtra.
                </p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/calculators/sip"
                  className="flex-1 sm:flex-initial text-center px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                >
                  Explore Calculators
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  <span>Connect With Us</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

