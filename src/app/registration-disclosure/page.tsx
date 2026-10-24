import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Percent,
  FileText,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Registration & Commission Disclosure',
  description: `Distributor registration disclosure, indicative trail commission rates, and statutory norms for ${COMPANY_INFO.legalName} (ARN: ${COMPANY_INFO.arn}).`
};

const COMMISSION_CATEGORIES = [
  { category: 'ARBITRAGE FUNDS', firstYear: '0.05% to 0.60%', secondYear: '0.05% to 0.60%' },
  { category: 'ELSS FUNDS', firstYear: '0.50% to 1.25%', secondYear: '0.50% to 1.25%' },
  { category: 'EQUITY ORIENTED FUNDS', firstYear: '0.50% to 1.25%', secondYear: '0.50% to 1.25%' },
  { category: 'AGGRESSIVE HYBRID EQUITY FUNDS', firstYear: '0.50% to 1.25%', secondYear: '0.50% to 1.25%' },
  { category: 'FIXED MATURITY SOLUTIONS', firstYear: '0.05% to 0.50%', secondYear: '0.05% to 0.50%' },
  { category: 'FUND OF FUNDS', firstYear: '0.25% to 1.00%', secondYear: '0.25% to 1.00%' },
  { category: 'GILT FUNDS', firstYear: '0.25% to 1.00%', secondYear: '0.05% to 0.65%' },
  { category: 'HYBRID DEBT FUNDS', firstYear: '0.05% to 0.75%', secondYear: '0.05% to 0.75%' },
  { category: 'INCOME FUNDS', firstYear: '0.05% to 1.00%', secondYear: '0.05% to 1.00%' },
  { category: 'INDEX FUNDS', firstYear: '0.01% to 0.75%', secondYear: '0.01% to 0.75%' },
  { category: 'LIQUID / ULTRA SHORT-TERM FUNDS', firstYear: '0.05% to 0.50%', secondYear: '0.05% to 0.50%' },
  { category: 'SHORT-TERM INCOME FUNDS', firstYear: '0.05% to 0.65%', secondYear: '0.05% to 0.65%' },
  { category: 'THEMATIC / SECTOR FUNDS', firstYear: '0.50% to 1.25%', secondYear: '0.50% to 1.25%' },
];

export default function RegistrationDisclosurePage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Registration Disclosure</span>
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-300 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-blue-700" />
            <span>TRANSPARENCY & STATUTORY COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            Registration &amp; Commission <span className="font-serif italic font-normal text-amber-600">Disclosure</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Indicative trail commission ranges across scheme categories and regulatory disclosures for {COMPANY_INFO.legalName} (ARN-{COMPANY_INFO.arn}).
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-10">

          {/* Section: Indicative Commission Table */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
              <div className="flex items-center gap-2.5">
                <Percent size={22} className="text-blue-600 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                  Indicative Trail Commission Range Across Scheme Categories (p.a.)
                </h2>
              </div>
              <Link
                href="/scheme-wise-commission"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-[#8ec61f] hover:bg-[#7db317] rounded-lg transition-colors shrink-0 shadow-xs"
              >
                <FileText size={14} />
                <span>View Scheme-Wise Brokerage PDFs</span>
              </Link>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0f172a] text-white">
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs border-r border-slate-700">
                      SCHEME CATEGORY
                    </th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs text-right sm:text-left border-r border-slate-700">
                      TRAIL 1ST YEAR
                    </th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs text-right sm:text-left">
                      TRAIL 2ND YEAR ONWARDS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {COMMISSION_CATEGORIES.map((row, idx) => (
                    <tr
                      key={row.category}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50 transition-colors' : 'bg-slate-50/60 hover:bg-slate-50 transition-colors'}
                    >
                      <td className="py-3.5 px-6 font-bold text-slate-900 border-r border-slate-100">
                        {row.category}
                      </td>
                      <td className="py-3.5 px-6 font-semibold text-slate-700 border-r border-slate-100 text-right sm:text-left whitespace-nowrap">
                        {row.firstYear}
                      </td>
                      <td className="py-3.5 px-6 font-semibold text-slate-700 text-right sm:text-left whitespace-nowrap">
                        {row.secondYear}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              * Commission rates are indicative ranges received per annum from respective Asset Management Companies (AMCs) as per SEBI regulations and AMFI caps. Brokerage structures vary across schemes, AUM tiers, and individual AMCs.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Registration Details & Grievances */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <h3 className="text-base font-extrabold text-slate-950 flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-600" />
              <span>AMFI Registration &amp; Redressal Credentials</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div><strong>Distributor Name:</strong> {COMPANY_INFO.legalName}</div>
              <div><strong>AMFI ARN:</strong> <span className="font-bold text-[#3f6212]">{COMPANY_INFO.arn}</span></div>
              <div><strong>Registration Date:</strong> 20-Feb-2024</div>
              <div><strong>Valid Till:</strong> 20-Feb-2027</div>
              <div><strong>Principal Contact:</strong> {COMPANY_INFO.owner}</div>
              <div><strong>Grievance Phone:</strong> <a href={`tel:${COMPANY_INFO.mobile}`} className="text-blue-600 hover:underline">{COMPANY_INFO.displayPhone}</a></div>
              <div><strong>Grievance Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 hover:underline">{COMPANY_INFO.email}</a></div>
              <div><strong>Registered Office:</strong> {COMPANY_INFO.address.full}</div>
            </div>

            <div className="border-t border-slate-200 pt-4 text-xs text-slate-500 leading-relaxed">
              Investors may lodge mutual fund service complaints or grievances through the SEBI SCORES portal at{' '}
              <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                scores.sebi.gov.in
              </a>{' '}
              or via SMART ODR platform at{' '}
              <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                smartodr.in
              </a>.
            </div>
          </div>

          {/* Statutory Risk Notice */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 flex items-start gap-3 text-xs sm:text-sm text-amber-950">
            <AlertCircle size={18} className="text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong>Statutory Notice:</strong> Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is no guarantee of future returns.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
