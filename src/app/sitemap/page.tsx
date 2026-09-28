import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Compass,
  Home,
  UserCheck,
  Target,
  Briefcase,
  Calculator,
  BookOpen,
  Mail,
  ShieldCheck,
  FileText,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Layers
} from 'lucide-react';
import { ALL_CALCULATORS } from '@/data/calculatorsData';
import { BLOGS_DATA } from '@/data/blogs';
import { SERVICES_DATA } from '@/data/services';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Sitemap | ATTITUDE Financial Services Pvt. Ltd.',
  description: 'Complete sitemap and directory of all pages, calculators, financial services, and statutory disclosures for ATTITUDE Financial Services Pvt. Ltd.',
};

export default function SitemapPage() {
  const primaryPages = [
    { name: 'Home Page', href: '/', desc: 'AMFI-registered mutual fund distribution and folio transaction assistance portal.', icon: Home },
    { name: 'About Us', href: '/about', desc: 'Firm background, ARN-362861 credentials, leadership, and operational principles.', icon: UserCheck },
    { name: 'Mission, Vision & Values', href: '/mission-vision-values', desc: 'Our guiding philosophy, investor-centric dedication, and integrity standards.', icon: Target },
    { name: 'Financial Services', href: '/services', desc: 'Comprehensive mutual fund distribution and transaction assistance overview.', icon: Briefcase },
    { name: 'Calculators Hub', href: '/calculators', desc: 'All 14 interactive mutual fund and investment calculation tools.', icon: Calculator },
    { name: 'Market Insights & Blogs', href: '/blogs', desc: 'Educational articles on compounding, market caps, and long-term capital compounding.', icon: BookOpen },
    { name: 'Commission Disclosure', href: '/disclosure', desc: 'Full transparency regarding distributor brokerage earnings, trail commission rates, and regulatory compliance.', icon: ShieldCheck },
    { name: 'Contact Us', href: '/contact', desc: 'Direct contact details, office location in Sangli, Maharashtra, and enquiry form.', icon: Mail },
  ];

  const compliancePages = [
    { name: 'Privacy Policy', href: '/privacy-policy', desc: 'How we respect, safeguard, and process personal and financial information.' },
    { name: 'Terms of Service', href: '/disclaimer#terms', desc: 'Terms and regulatory conditions governing the use of this website.' },
    { name: 'Statutory Disclaimer', href: '/disclaimer', desc: 'AMFI distributor role limitations, market risk disclaimers, and non-advisory statutory boundaries.' },
    { name: 'Commission Disclosure', href: '/disclosure', desc: 'Full transparency regarding distributor brokerage earnings and direct vs regular plans.' },
    { name: 'SID / SAI / KIM Guide', href: '/sid', desc: 'Statutory Scheme Information Documents and Key Information Memorandums.' },
    { name: 'AMFI Code of Conduct', href: '/AMFI_Code-of-Conduct.pdf', isExternal: true, desc: 'Adherence to ethical standards mandated by SEBI and AMFI regulations.' },
    { name: 'AMFI Risk Factors', href: '/amfi-risk-factors', desc: 'Detailed statutory disclosures on volatility, liquidity, and scheme performance.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      {/* Page Hero Header */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <Compass size={14} className="text-emerald-700" />
          <span>SITE ARCHITECTURE & DIRECTORY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
          Website <span className="font-serif italic font-normal text-lime-700">Sitemap</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Navigate the entire portal of {COMPANY_INFO.legalName}. Access all distribution services, interactive calculators, financial education, and statutory compliance disclosures.
        </p>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section 1: Main Pages */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-lime-100 text-lime-800 flex items-center justify-center font-bold">
              <Layers size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">Primary Navigation</h2>
              <p className="text-xs text-slate-500">Core company and service portal endpoints</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {primaryPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex flex-col p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-lime-500/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5 text-slate-900 font-bold group-hover:text-lime-700 transition-colors">
                      <Icon size={18} className="text-slate-500 group-hover:text-lime-600" />
                      <span>{page.name}</span>
                    </div>
                    <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-1 group-hover:text-lime-600 transition-all" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    {page.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Section 2: Educational Services */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
              <Briefcase size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">Mutual Fund Services</h2>
              <p className="text-xs text-slate-500">Specialized category education and distribution workflows</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-400/40 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-200/70 text-slate-700">
                    {service.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {service.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3: All 14 Calculators */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Calculator size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">Interactive Financial Calculators</h2>
              <p className="text-xs text-slate-500">All 14 compounding, goal simulation, and calculation modules</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {ALL_CALCULATORS.map((calc) => (
              <Link
                key={calc.id}
                href={`/calculators/${calc.id}`}
                className="group p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-emerald-500/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    {calc.title}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">
                    {calc.category}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {calc.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 4: Blog Articles */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <BookOpen size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">Financial Insights & Educational Blogs</h2>
              <p className="text-xs text-slate-500">Curated investor education, compounding perspectives, and mutual fund guides</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BLOGS_DATA.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-amber-400/40 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold mb-1.5">
                    <span className="text-amber-700 font-bold">{blog.category}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="mt-3 text-[11px] text-slate-400 font-medium">
                  Published: {blog.publishDate}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 5: Statutory & Regulatory Compliance */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">Statutory Compliance & Regulatory Disclosures</h2>
              <p className="text-xs text-slate-500">Legal governance, SEBI/AMFI compliance notices, and investor protection documentation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {compliancePages.map((policy) => {
              if (policy.isExternal) {
                return (
                  <a
                    key={policy.href}
                    href={policy.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-purple-400/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-slate-900 text-sm group-hover:text-purple-700 transition-colors flex items-center gap-1.5">
                        {policy.name}
                        <ExternalLink size={13} className="text-slate-400" />
                      </span>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                        PDF
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {policy.desc}
                    </p>
                  </a>
                );
              }
              return (
                <Link
                  key={policy.href}
                  href={policy.href}
                  className="group flex flex-col p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-purple-400/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 text-sm group-hover:text-purple-700 transition-colors">
                      {policy.name}
                    </span>
                    <ChevronRight size={15} className="text-slate-400 group-hover:translate-x-1 group-hover:text-purple-600 transition-all" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {policy.desc}
                  </p>
                </Link>
              );
            })}

            {/* External SEBI circulars link */}
            <a
              href="https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1&ssid=7&smid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-purple-400/40 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-slate-900 text-sm group-hover:text-purple-700 transition-colors flex items-center gap-1.5">
                  SEBI Regulatory Circulars
                  <ExternalLink size={13} className="text-slate-400" />
                </span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                  External
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Official regulatory directives and master circulars issued by Securities and Exchange Board of India.
              </p>
            </a>
          </div>
        </section>

        {/* XML Sitemap Direct Link Box */}
        <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-slate-500" />
            <span>Looking for the search engine indexing file? View our standard XML Sitemap.</span>
          </div>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-slate-900 hover:text-lime-700 transition-colors"
          >
            <span>/sitemap.xml</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
