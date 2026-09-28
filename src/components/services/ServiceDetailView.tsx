'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { ServiceDetail } from '@/data/serviceDetails';

interface Props {
  service: ServiceDetail;
}

export default function ServiceDetailView({ service }: Props) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-28 md:pt-36 pb-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-amber-600 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate">{service.title}</span>
        </div>

        {/* 1. HERO OVERVIEW SECTION (Matching Reference Image 2) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details & Metrics */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-5">
                <TrendingUp size={14} className="text-blue-600" />
                <span>{service.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-5">
                {service.title}
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              {/* 4 Metrics Grid */}
              <div className="grid grid-cols-2 gap-3.5 w-full mb-8">
                {service.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex items-start gap-3 transition-colors hover:bg-slate-100/60"
                  >
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[0.68rem] font-extrabold text-slate-400 uppercase tracking-wider">
                        {metric.label}
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight mt-0.5">
                        {metric.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-slate-950 hover:bg-slate-800 text-white font-extrabold rounded-full px-7 py-3.5 text-sm inline-flex items-center gap-2.5 transition-all shadow-[0_4px_16px_rgba(10,17,26,0.18)]"
                >
                  <span>Start Online Onboarding</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-extrabold rounded-full px-7 py-3.5 text-sm inline-flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>Enquire With Team</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Photo Card with Overlay Badges */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_12px_32px_rgba(0,0,0,0.08)] bg-slate-900 aspect-[4/3] sm:aspect-square group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                  {service.imageBadgeTop}
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                  {service.imageBadgeBottom}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. STRATEGIC VALUE & HIGHLIGHTS SECTION (Matching Reference Image 2) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] mb-8">
          <div className="mb-8">
            <div className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-2">
              {service.strategicSubtitle}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              {service.strategicTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {service.strategicHighlights.map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/60 border border-slate-200/70 hover:bg-slate-50 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-950 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. EXECUTION WORKFLOW SECTION (Matching Reference Image 2) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] mb-8">
          <div className="mb-8">
            <div className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-2">
              {service.workflowSubtitle}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              {service.workflowTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.workflowSteps.map((step) => (
              <div
                key={step.num}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col items-start gap-4 transition-all hover:shadow-sm hover:border-slate-300"
              >
                <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-extrabold text-sm flex items-center justify-center shadow-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FREQUENTLY ASKED QUESTIONS (Matching Reference Image 3) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] mb-8">
          <div className="mb-8">
            <div className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-2">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-1.5">
              {service.faqTitle}
            </h2>
            <p className="text-slate-500 text-sm">
              {service.faqSubtitle}
            </p>
          </div>

          {/* Accordion list */}
          <div className="flex flex-col gap-3">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-blue-500/80 ring-1 ring-blue-500/20 bg-blue-50/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Compliance & Regulatory Notice */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 flex items-start gap-3 mt-8">
            <ShieldCheck size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-1">
                Compliance & Regulatory Notice
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {service.complianceNotice}
              </p>
            </div>
          </div>
        </section>

        {/* 5. DARK BOTTOM CTA BANNER (Matching Reference Image 3) */}
        <section className="bg-[#050c18] rounded-3xl p-8 sm:p-12 lg:p-14 text-center text-white border border-slate-800 shadow-[0_20px_50px_rgba(5,12,24,0.4)] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Top Circle Question Icon */}
            <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 flex items-center justify-center mb-5 shadow-inner">
              <HelpCircle size={22} />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
              {service.ctaTitle}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {service.ctaSubtitle}
            </p>

            {/* 2 CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-full px-8 py-3.5 text-sm transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)]"
              >
                Contact Our Team
              </Link>
              <Link
                href="/contact"
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-extrabold rounded-full px-8 py-3.5 text-sm transition-all"
              >
                Request Callback
              </Link>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
