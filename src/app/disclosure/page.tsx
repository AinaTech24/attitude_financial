import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Percent,
  FileText,
  Users2,
  Scale,
  Info,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Commission Disclosure & Regulatory Norms',
  description: `Distributor commission disclosure, compensation model, and regulatory compliance details for ${COMPANY_INFO.legalName} (ARN: ${COMPANY_INFO.arn}).`
};

const COMMISSION_RATES = [
  { type: 'Liquid/Ultra Short Term Schemes', trail: '0.05% – 0.70%' },
  { type: 'Short Term Income Funds', trail: '0.50% – 0.90%' },
  { type: 'Income Funds', trail: '0.40% – 1.00%' },
  { type: 'Gilt Funds', trail: '0.15% – 0.90%' },
  { type: 'Hybrid Debt/Monthly Income Plans', trail: '0.90% – 1.20%' },
  { type: 'Arbitrage Funds', trail: '0.55% – 0.70%' },
  { type: 'Fund of Funds', trail: '0.25% – 0.50%' },
  { type: 'ELSS', trail: '0.65% – 2.00%' },
  { type: 'Index Funds', trail: '0.30% – 1.00%' },
  { type: 'Equity/Hybrid Equity/Balance Funds', trail: '0.65% – 2.00%' },
  { type: 'Fixed Maturity Plans', trail: 'Variable' },
];

export default function DisclosurePage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Disclosure</span>
        </div>

        {/* Header matching Reference Image 3 */}
        <div className="mb-10 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-300 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-blue-700" />
            <span>TRANSPARENCY & STATUTORY COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            % Commission <span className="font-serif italic font-normal text-amber-600">Disclosure</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            In compliance with SEBI and AMFI regulations, below is the indicative range of trail commissions earned by {COMPANY_INFO.legalName} (ARN-{COMPANY_INFO.arn}) on mutual fund schemes.
          </p>
        </div>

        {/* Main Content Card matching Reference Image 3 */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-10">

          {/* Section: % Commission Disclosure Table */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <Percent size={22} className="text-blue-600 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight font-heading">
                % Commission Disclosure
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0f172a] text-white">
                    <th className="py-3.5 px-5 font-bold uppercase tracking-wider text-xs border-r border-slate-700">
                      Scheme Type
                    </th>
                    <th className="py-3.5 px-5 font-bold uppercase tracking-wider text-xs text-right sm:text-left">
                      Trail - 1st Year Onwards
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {COMMISSION_RATES.map((row, idx) => (
                    <tr
                      key={row.type}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50 transition-colors' : 'bg-slate-50/60 hover:bg-slate-50 transition-colors'}
                    >
                      <td className="py-3 px-5 font-medium text-slate-800 border-r border-slate-100">
                        {row.type}
                      </td>
                      <td className="py-3 px-5 font-bold text-slate-900 text-right sm:text-left">
                        {row.trail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Scheme Wise Commission Disclosure Button */}
            <div className="mt-5">
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Request%20for%20Scheme-Wise%20Commission%20Disclosure`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm group"
              >
                <FileText size={16} className="text-amber-700 group-hover:scale-110 transition-transform" />
                <span>Scheme Wise Commission Disclosure — Click Here</span>
              </a>
              <p className="text-[0.72rem] text-slate-500 mt-2">
                * Rates are indicative and subject to change per AMC guidelines and SEBI regulatory caps. Scheme-specific detailed disclosures are shared at the time of investment execution or upon request.
              </p>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Our Role & Compensation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xl" role="img" aria-label="handshake">🤝</span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
                Our Role & Compensation
              </h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              We are a NISM certified / AMFI registered mutual fund distributor and not an RIA. We get compensated / incentivised by AMCs. We don&apos;t charge any fees for our services.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Regular vs Direct Plans */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xl" role="img" aria-label="scale">⚖️</span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
                Regular vs Direct Plans
              </h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              We deal in Regular Plans only for Mutual Fund Schemes and earn a Trailing Commission on client investments. Disclosure for Commission earnings is made to clients at the time of investments. Option of Direct Plan for every Mutual Fund Scheme is available to investors offering advantage of lower expense ratio. We are not entitled to earn any commission on Direct plans. Hence we do not deal in Direct Plans.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Nature of Service */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xl" role="img" aria-label="info">ℹ️</span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
                Nature of Service
              </h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              {COMPANY_INFO.legalName} is an AMFI-Registered Mutual Fund Distributor (ARN-{COMPANY_INFO.arn}). We provide factual scheme information, category education, and transaction facilitation support. We are not a SEBI Registered Investment Advisor (RIA) and do not provide investment advisory services or fee-based financial planning.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Registration Details & Grievance Redressal */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
            <h4 className="text-base font-extrabold text-slate-950 flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-600" />
              <span>Distributor Registration & Redressal Details</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div><strong>Distributor Name:</strong> {COMPANY_INFO.legalName}</div>
              <div><strong>AMFI ARN:</strong> {COMPANY_INFO.arn}</div>
              <div><strong>Principal Contact:</strong> {COMPANY_INFO.owner}</div>
              <div><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 hover:underline">{COMPANY_INFO.email}</a></div>
              <div><strong>Phone:</strong> <a href={`tel:${COMPANY_INFO.mobile}`} className="text-blue-600 hover:underline">{COMPANY_INFO.displayPhone}</a></div>
              <div><strong>Registered Office:</strong> {COMPANY_INFO.address.full}</div>
            </div>

            <div className="border-t border-slate-200 pt-4 text-xs text-slate-500 leading-relaxed">
              Investors may escalate unresolved mutual fund service grievances to the SEBI SCORES portal at{' '}
              <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                scores.sebi.gov.in
              </a>{' '}
              or via SMART ODR platform at{' '}
              <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                smartodr.in
              </a>.
            </div>
          </div>

          {/* Statutory Market Risk Notice */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 flex items-start gap-3 text-xs sm:text-sm text-amber-950">
            <AlertCircle size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Statutory Notice:</strong> Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is no guarantee of future returns.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

