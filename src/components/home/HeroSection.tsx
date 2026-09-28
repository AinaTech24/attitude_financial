'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen lg:h-screen lg:max-h-[980px] w-full flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#050b12] via-[#071510] to-[#0a1e17] text-white pt-24 pb-8 lg:py-0">
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#8ec61f]/15 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#16a34a]/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-[30%] right-[35%] w-[320px] h-[320px] rounded-full bg-[#f59e0b]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand & Hero Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* AMFI Registered Badge */}
            <div className="inline-flex items-center gap-2 bg-[#8ec61f]/15 border border-[#8ec61f]/35 text-[#8ec61f] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold w-fit mb-4 backdrop-blur-sm">
              <ShieldCheck size={16} />
              <span>AMFI-REGISTERED MUTUAL FUND DISTRIBUTOR • ARN-362861</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold text-white tracking-tight leading-[1.12] mb-4">
              Disciplined{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] via-[#8ec61f] to-[#4ade80]">
                Mutual Fund
              </span>{' '}
              Distribution with{' '}
              <span className="font-serif italic font-normal text-[#fbbf24]">
                Attitude
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-6 font-normal">
              Facilitating mutual fund scheme access, systematic investing, and comprehensive investor awareness for individuals and families across Maharashtra.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-[#8ec61f] hover:bg-[#7cb31b] text-slate-950 font-bold px-6 py-3.5 rounded-full text-sm sm:text-base transition-all shadow-[0_4px_20px_rgba(142,198,31,0.35)] hover:scale-[1.02]"
              >
                <span>Explore Mutual Funds</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full text-sm sm:text-base border border-white/20 transition-all backdrop-blur-sm"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Badges / Verified Attributes Row */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold text-white font-mono">ARN-362861</span>
                <span className="text-xs text-slate-400 font-medium">Official AMFI Registration</span>
              </div>
              <div className="hidden sm:block w-px h-7 bg-white/15" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold text-white">100% Digital</span>
                <span className="text-xs text-slate-400 font-medium">Paperless KYC & Folios</span>
              </div>
              <div className="hidden sm:block w-px h-7 bg-white/15" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold text-white">Sangli, MH</span>
                <span className="text-xs text-slate-400 font-medium">Local Physical Office</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] group">
              {/* Subtle Glowing Backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8ec61f]/30 to-[#f59e0b]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Main Card Container */}
              <div className="relative bg-[#0b171e]/80 backdrop-blur-md rounded-3xl border border-white/15 p-3.5 shadow-2xl overflow-hidden">
                {/* Image Holder */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/landing_page.png"
                    alt="Compounding & Asset Allocation Illustration with Indian Rupee"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Overlay Floating Badge at Bottom */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl p-3 text-white flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#8ec61f] text-slate-950 flex items-center justify-center flex-shrink-0 font-bold">
                        ₹
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">Disciplined Systematic Compounding</div>
                        <div className="text-[0.7rem] text-slate-300">Systematic SIP & Asset Diversification</div>
                      </div>
                    </div>
                    <span className="text-[0.7rem] font-semibold text-[#a3e635] bg-[#8ec61f]/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                      Long-Term
                    </span>
                  </div>
                </div>

                {/* Statutory Quick Note */}
                <div className="mt-2.5 px-2 py-1 flex items-center justify-between text-[0.72rem] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#8ec61f]" />
                    <span>AMFI ARN-362861 Registered</span>
                  </span>
                  <span>Sangli • Maharashtra</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
  