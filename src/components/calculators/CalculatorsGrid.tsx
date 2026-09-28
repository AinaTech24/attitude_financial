'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Clock,
  ArrowRight,
  GraduationCap,
  Calculator,
  FileText,
  Heart,
  Home,
  Car,
  Plane,
  Umbrella,
  Repeat,
  ShieldCheck,
  Coins,
  ArrowLeftRight
} from 'lucide-react';
import { ALL_CALCULATORS, CalculatorSlug } from '@/data/calculatorsData';

interface CalculatorsGridProps {
  onSelectCalculator?: (slug: CalculatorSlug) => void;
  activeSlug?: CalculatorSlug;
  limit?: number;
  excludeSlug?: CalculatorSlug;
}

export default function CalculatorsGrid({
  onSelectCalculator,
  activeSlug,
  limit,
  excludeSlug
}: CalculatorsGridProps) {
  const getIcon = (iconName: string) => {
    const iconProps = { size: 24, className: 'text-[#059669] stroke-[2.2]' };

    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp {...iconProps} />;
      case 'PiggyBank':
        return <Coins {...iconProps} />;
      case 'ArrowLeftRight':
        return <ArrowLeftRight {...iconProps} />;
      case 'Repeat':
        return <Repeat {...iconProps} />;
      case 'ShieldCheck':
        return <ShieldCheck {...iconProps} />;
      case 'Clock':
        return <Clock {...iconProps} />;
      case 'Umbrella':
        return <Umbrella {...iconProps} />;
      case 'Calculator':
        return <Calculator {...iconProps} />;
      case 'FileText':
        return <FileText {...iconProps} />;
      case 'Heart':
        return <Heart {...iconProps} />;
      case 'GraduationCap':
        return <GraduationCap {...iconProps} />;
      case 'Home':
        return <Home {...iconProps} />;
      case 'Car':
        return <Car {...iconProps} />;
      case 'Plane':
        return <Plane {...iconProps} />;
      default:
        return <Calculator {...iconProps} />;
    }
  };

  let displayedCalculators = ALL_CALCULATORS;
  if (excludeSlug) {
    displayedCalculators = displayedCalculators.filter((c) => c.id !== excludeSlug);
  }
  if (limit && limit > 0) {
    displayedCalculators = displayedCalculators.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
      {displayedCalculators.map((card) => {
        const isActive = activeSlug === card.id;
        const targetHref = `/calculators/${card.id}`;

        return (
          <Link
            key={card.id}
            href={targetHref}
            onClick={() => {
              if (onSelectCalculator) {
                onSelectCalculator(card.id);
              }
            }}
            className={`bg-white rounded-[24px] p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group cursor-pointer relative text-left ${
              isActive
                ? 'border-amber-500 ring-2 ring-amber-500/20 shadow-lg -translate-y-1'
                : 'border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5'
            }`}
          >
            <div>
              {/* Top Row: Squircle Icon & Badge matching Image 1 */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-13 h-13 p-3 rounded-2xl bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  {getIcon(card.iconName)}
                </div>

                <div className="bg-[#eaf8f0] border border-[#d1fae5] text-[#059669] font-bold text-[0.68rem] sm:text-[0.72rem] px-3 py-1.5 rounded-full tracking-wider uppercase">
                  {card.badgeLabel}
                </div>
              </div>

              {/* Title & Description matching Image 1 */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-[1.3rem] font-bold text-[#ea580c] group-hover:text-amber-700 transition-colors tracking-tight mb-2.5">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed min-h-[44px]">
                  {card.desc}
                </p>
              </div>
            </div>

            {/* Divider and Bottom Action matching Image 1 */}
            <div>
              <div className="border-t border-slate-100 my-4" />

              <div className="flex items-center justify-between text-[#ea580c] group-hover:text-amber-700 font-semibold text-sm sm:text-[0.92rem] transition-colors pt-1">
                <span>Launch Interactive Tool</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
