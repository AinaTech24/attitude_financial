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
  ArrowUpRight,
  Scale,
  ExternalLink,
  Info,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'AMFI Risk Factors & Disclosures',
  description: `Official statutory risk disclosures and AMFI risk factors governing mutual fund investments distributed by ${COMPANY_INFO.legalName} (ARN: ${COMPANY_INFO.arn}).`
};

export default function AMFIRiskFactorsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">AMFI Risk Factors</span>
        </div>

        {/* Clean Page Header */}
        <div className="mb-10 text-center" data-aos="fade-up">
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

        {/* Main Content Container (Matching Reference Image 4) */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-8">
          
          {/* 1. Standard AMFI Risk Disclosure */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle size={22} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Standard AMFI Risk Disclosure
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing. The NAV of the schemes may go up or down depending upon the factors and forces affecting the securities markets. Past performance of the mutual fund schemes is not necessarily indicative of the future performance of the schemes.
            </p>
          </div>

          {/* 2. Market Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <TrendingDown size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Market Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Market risk refers to the possibility that the value of an investment may decline due to factors that affect the overall performance of the financial markets. Equity mutual fund schemes are particularly susceptible to market risk as the prices of underlying stocks may fluctuate due to economic conditions, political events, industry trends, and company-specific factors. Market risk cannot be entirely eliminated through diversification.
            </p>
          </div>

          {/* 3. Credit Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <CreditCard size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Credit Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Credit risk is the risk that an issuer of a fixed-income security (such as a bond or debenture) held by a mutual fund scheme may default on its payment obligations. This risk is particularly relevant for debt mutual fund schemes. The value of debt securities may decline if the credit rating of the issuer is downgraded or if the issuer fails to make timely payment of interest or principal.
            </p>
          </div>

          {/* 4. Liquidity Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <Waves size={20} className="text-cyan-600 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Liquidity Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Liquidity risk arises when the mutual fund scheme is unable to sell its holdings at a fair price due to lack of buyers in the market. This can result in the scheme receiving a lower price for its securities, which may negatively impact the NAV. Liquidity risk is higher for schemes that invest in small-cap stocks, lower-rated debt securities, or securities that are not frequently traded.
            </p>
          </div>

          {/* 5. Interest Rate Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <Percent size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Interest Rate Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Interest rate risk affects debt and hybrid mutual fund schemes. When interest rates rise, the prices of existing bonds and debt securities fall, and vice versa. Schemes with longer duration portfolios are more sensitive to interest rate changes. Investors in debt funds should be aware that the NAV may fluctuate due to changes in the prevailing interest rate environment.
            </p>
          </div>

          {/* 6. Sector / Concentration Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <Building size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Sector / Concentration Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Sector or concentration risk arises when a mutual fund scheme has a significant portion of its portfolio invested in a single sector, industry, or a limited number of securities. Sectoral and thematic funds carry higher concentration risk as their performance is heavily dependent on the performance of that specific sector. A downturn in the concentrated sector can significantly impact the scheme&apos;s returns.
            </p>
          </div>

          {/* 7. Currency Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <Globe size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Currency Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Currency risk is applicable to mutual fund schemes that invest in international securities or foreign assets. Fluctuations in exchange rates between the Indian Rupee and foreign currencies can affect the returns of such schemes. Even if the underlying international investments perform well, adverse currency movements can reduce returns when converted back to Indian Rupees.
            </p>
          </div>

          {/* 8. Inflation Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <ArrowUpRight size={20} className="text-rose-600 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Inflation Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Inflation risk is the risk that the returns generated by a mutual fund scheme may not keep pace with the rate of inflation, resulting in a decline in the real (inflation-adjusted) value of the investment. This risk is particularly relevant for conservative investors in liquid funds, overnight funds, and other low-return debt schemes where the real returns after inflation may be minimal or negative.
            </p>
          </div>

          {/* 9. Regulatory Risk */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <Scale size={20} className="text-slate-700 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Regulatory Risk
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Regulatory risk arises from changes in laws, regulations, or government policies that may affect mutual fund investments. Changes in tax laws, SEBI regulations, or other regulatory requirements can impact the returns, costs, or operational aspects of mutual fund schemes. Investors should stay updated with the latest regulatory changes that may affect their investments.
            </p>
          </div>

          {/* 10. AMFI Risk Factors Reference */}
          <div className="border-b border-slate-100 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <ExternalLink size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                AMFI Risk Factors Reference
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8 mb-4">
              For a comprehensive understanding of risk factors associated with mutual fund investments, investors are encouraged to visit the official AMFI resources:
            </p>
            <div className="pl-8 flex flex-col gap-2.5">
              <a
                href="https://www.amfiindia.com/investor-corner/knowledge-center/risk-factors.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold text-sm underline"
              >
                <span>AMFI Risk Factors - Knowledge Center</span>
                <ExternalLink size={13} />
              </a>
              <a
                href="https://www.amfiindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold text-sm underline"
              >
                <span>AMFI Official Website</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* 11. Important Disclaimer */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-2">
              <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <h3 className="text-base font-extrabold text-slate-950">
                Important Disclaimer
              </h3>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-8">
              Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing. Past performance is not indicative of future results. The information provided on this page is for educational and awareness purposes only. Investors should assess their own risk appetite and suitability before making investment decisions.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

