import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ALL_CALCULATORS,
  CalculatorSlug
} from '@/data/calculatorsData';
import { COMPANY_INFO } from '@/data/company';
import InteractiveCalculator from '@/components/calculators/InteractiveCalculator';
import CalculatorsGrid from '@/components/calculators/CalculatorsGrid';
import { AlertCircle, ArrowLeft, HelpCircle, ShieldCheck } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ALL_CALCULATORS.map((calc) => ({
    slug: calc.id
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const calc = ALL_CALCULATORS.find((c) => c.id === params.slug);
  if (!calc) {
    return {
      title: 'Calculator Not Found'
    };
  }

  return {
    title: `${calc.title} | Educational Financial Tools`,
    description: `${calc.desc} - Calculate and simulate with ${COMPANY_INFO.legalName} (ARN: ${COMPANY_INFO.arn}).`
  };
}

export default function DedicatedCalculatorPage({ params }: Props) {
  const calc = ALL_CALCULATORS.find((c) => c.id === params.slug);

  if (!calc) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/calculators" className="hover:text-amber-600 transition-colors">Calculators</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{calc.title}</span>
          </div>

          <Link
            href="/calculators"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-amber-600 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm transition-all"
          >
            <ArrowLeft size={13} />
            <span>All 14 Calculators</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-amber-700" />
            <span>{calc.category} TOOLKIT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4 uppercase">
            {calc.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {calc.desc} Customize your parameters below to see real-time projections and detailed breakdown.
          </p>
        </div>

        {/* Dedicated Interactive Calculator Workbench */}
        <div id="calculator-workbench" className="mb-16">
          <InteractiveCalculator initialSlug={calc.id as CalculatorSlug} isStandalonePage={true} />
        </div>

        {/* Educational Concept & Practical Insights Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-16">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <HelpCircle size={22} className="text-blue-600 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight font-heading">
              How to Interpret This Calculation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Mathematical Modeling</h3>
              <p>
                Calculations are derived using standard compound interest, amortization, and actuarial annuity formulations. These illustrative projections demonstrate the compounding potential of systematic capital deployment.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Inflation & Real Purchasing Power</h3>
              <p>
                For long-term goals like retirement, child education, and weddings, inflation is the most critical factor. Ensuring your assumed return exceeds prevailing inflation preserves real purchasing power.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Periodic Tracking</h3>
              <p>
                Periodic tracking allows investors to evaluate progress toward milestones, incorporate income enhancements (step-ups), and maintain alignment with asset allocation over changing market environments.
              </p>
            </div>
          </div>

          {/* Statutory Risk Notice */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 flex items-start gap-3 text-xs sm:text-sm text-amber-950 mt-6">
            <AlertCircle size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Statutory Market Risk Notice:</strong> Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing. These educational calculations are for awareness purposes only and do not constitute investment advice or a promise of returns.
            </div>
          </div>
        </div>

        {/* Explore Other Calculators Grid */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                COMPLETE TOOLKIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Explore All 14 Financial Calculators
              </h2>
            </div>
            <Link
              href="/calculators"
              className="text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-600 flex items-center gap-1"
            >
              <span>View Calculator Hub</span>
              <span>→</span>
            </Link>
          </div>

          <CalculatorsGrid activeSlug={calc.id as CalculatorSlug} excludeSlug={calc.id as CalculatorSlug} />
        </div>

      </div>
    </div>
  );
}
