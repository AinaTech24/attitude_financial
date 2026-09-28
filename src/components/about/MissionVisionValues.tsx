'use client';

import React from 'react';
import Image from 'next/image';
import { Target, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface MissionVisionValuesProps {
  showHeader?: boolean;
  className?: string;
}

export default function MissionVisionValues({
  showHeader = true,
  className = ''
}: MissionVisionValuesProps) {
  return (
    <section className={`py-10 sm:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <span>GUIDING PRINCIPLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-5">
              Our Mission, Vision &{' '}
              <span className="font-serif italic font-normal text-amber-500">
                Core Values
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {COMPANY_INFO.legalName} assists investors with accessible mutual fund distribution, transparent transaction facilitation, and financial literacy.
            </p>
          </div>
        )}

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Mission Card */}
          <div 
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              {/* Image with Badge */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <Image
                  src="/images/about/mission_purpose.jpg"
                  alt="Our Mission - Purpose"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 shadow-lg">
                  <Target size={13} className="text-amber-400" />
                  <span className="uppercase tracking-wider text-[0.7rem]">OUR PURPOSE</span>
                </div>
              </div>

              {/* Title & Body */}
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                Mission
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                To empower individuals with financial education and systematic investment solutions that foster disciplined savings and long-term capital accumulation.
              </p>
            </div>

            {/* Bottom Bullets */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={15} className="text-slate-400 flex-shrink-0" />
                <span>Disciplined SIP Compounding</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={15} className="text-slate-400 flex-shrink-0" />
                <span>Long-Term Capital Accumulation</span>
              </div>
            </div>
          </div>

          {/* 2. Vision Card */}
          <div 
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              {/* Image with Badge */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <Image
                  src="/images/about/vision_future.jpg"
                  alt="Our Vision - Future Horizon"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 shadow-lg">
                  <TrendingUp size={13} className="text-amber-400" />
                  <span className="uppercase tracking-wider text-[0.7rem]">FUTURE HORIZON</span>
                </div>
              </div>

              {/* Title & Body */}
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                Vision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                To be a reliable and accessible mutual fund distribution partner, supporting investors across India with financial literacy and seamless digital transaction facilitation.
              </p>
            </div>

            {/* Bottom Bullets */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={15} className="text-amber-500 flex-shrink-0" />
                <span>Investor-First Transparency</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={15} className="text-amber-500 flex-shrink-0" />
                <span>Nationwide Financial Literacy</span>
              </div>
            </div>
          </div>

          {/* 3. Values Card */}
          <div 
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              {/* Image with Badge */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <Image
                  src="/images/about/values_ethics.jpg"
                  alt="Our Values - Core Ethics"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 shadow-lg">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span className="uppercase tracking-wider text-[0.7rem]">CORE ETHICS</span>
                </div>
              </div>

              {/* Title & Body */}
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                Values
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong className="text-slate-950 font-bold">Trust:</strong> Transparency &amp; AMFI adherence.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong className="text-slate-950 font-bold">Ethics:</strong> Integrity &amp; objective facts.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong className="text-slate-950 font-bold">Client-Centric:</strong> Dedicated transaction assistance.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong className="text-slate-950 font-bold">Excellence:</strong> Digital speed &amp; precision.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Footnote */}
            <div className="pt-4 border-t border-slate-100 text-center">
              <span className="text-[0.75rem] font-medium text-slate-400">
                AMFI Registered Guidelines Compliant
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
