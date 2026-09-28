'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Heart,
  Sparkles,
  RotateCcw,
  Info,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  DollarSign,
  Award,
  GraduationCap
} from 'lucide-react';

export type CalculatorTab =
  | 'sip'
  | 'delay'
  | 'stepup'
  | 'swp'
  | 'child'
  | 'retirement';

export interface CalculatorCardItem {
  id: CalculatorTab;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const CALCULATOR_CARDS: CalculatorCardItem[] = [
  {
    id: 'sip',
    badge: 'LONG-TERM COMPOUNDING',
    badgeBg: '#ecfdf5',
    badgeColor: '#16a34a',
    title: 'SIP Calculator',
    desc: 'Simulate regular monthly mutual fund compounding returns over extended horizons.',
    icon: <TrendingUp size={22} className="text-emerald-600" />
  },
  {
    id: 'delay',
    badge: 'OPPORTUNITY COST',
    badgeBg: '#fef2f2',
    badgeColor: '#dc2626',
    title: 'SIP Delay Cost',
    desc: 'See the severe financial compounding cost of delaying your investment by 1 to 5 years.',
    icon: <Clock size={22} className="text-rose-600" />
  },
  {
    id: 'stepup',
    badge: 'SALARY STEP-UP',
    badgeBg: '#eff6ff',
    badgeColor: '#2563eb',
    title: 'SIP Step-Up',
    desc: 'Model boosting your monthly SIP with annual salary hikes to reach milestones significantly faster.',
    icon: <ArrowUpRight size={22} className="text-blue-600" />
  },
  {
    id: 'swp',
    badge: 'MONTHLY CASHFLOW',
    badgeBg: '#fffbeb',
    badgeColor: '#d97706',
    title: 'SWP Monthly Cashflow',
    desc: 'Simulate regular monthly withdrawals from capital while remaining assets stay invested.',
    icon: <ArrowDownRight size={22} className="text-amber-600" />
  },
  {
    id: 'child',
    badge: 'FUTURE GOALS',
    badgeBg: '#faf5ff',
    badgeColor: '#9333ea',
    title: 'Child Education & Marriage',
    desc: 'Estimate future inflation-adjusted costs for higher education and milestone celebrations.',
    icon: <GraduationCap size={22} className="text-purple-600" />
  },
  {
    id: 'retirement',
    badge: 'INDEPENDENCE CORPUS',
    badgeBg: '#ecfeff',
    badgeColor: '#0891b2',
    title: 'Retirement Calculator',
    desc: 'Calculate the total inflation-adjusted corpus required to maintain living standards post-retirement.',
    icon: <Sparkles size={22} className="text-cyan-600" />
  }
];

// Currency formatter for Indian system
export function formatINR(val: number): string {
  if (isNaN(val) || val === 0) return '₹0';
  if (val >= 10000000) {
    return `₹${(val / 10000000).toFixed(2)} Cr`;
  }
  if (val >= 100000) {
    return `₹${(val / 100000).toFixed(2)} L`;
  }
  return `₹${Math.round(val).toLocaleString('en-IN')}`;
}

export function formatINRFull(val: number): string {
  if (isNaN(val)) return '₹0';
  return `₹${Math.round(val).toLocaleString('en-IN')}`;
}

function CalcSlider({
  min,
  max,
  step = 1,
  value,
  onChange,
  color = '#8ec61f',
  className = ''
}: {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (val: number) => void;
  color?: string;
  className?: string;
}) {
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{
        background: `linear-gradient(to right, ${color} 0%, ${color} ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`,
        accentColor: color,
        // @ts-ignore
        '--thumb-color': color
      }}
      className={`calc-range-slider ${className}`}
    />
  );
}

interface Props {
  initialTab?: CalculatorTab;
  showTabs?: boolean;
  showWorkbench?: boolean;
  showCards?: boolean;
}

export default function CalculatorModule({
  initialTab = 'sip',
  showTabs = true,
  showWorkbench = true
}: Props) {
  const [activeTab, setActiveTab] = useState<CalculatorTab>(initialTab);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const yearlyTableRef = useRef<HTMLDivElement>(null);

  const handleTableMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = yearlyTableRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const h = rect.height;

    // When cursor is near top edge (upper 20%), auto-slide upward
    if (y < h * 0.22) {
      const factor = (h * 0.22 - y) / (h * 0.22);
      el.scrollTop -= Math.max(3, factor * 14);
    }
    // When cursor is near bottom edge (lower 20%), auto-slide downward
    else if (y > h * 0.78) {
      const factor = (y - h * 0.78) / (h * 0.22);
      el.scrollTop += Math.max(3, factor * 14);
    }
  };

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 1. SIP Calculator States
  const [sipMonthly, setSipMonthly] = useState<number>(5000);
  const [sipRate, setSipRate] = useState<number>(12);
  const [sipYears, setSipYears] = useState<number>(10);

  // 2. Delay States
  const [delayMonthly, setDelayMonthly] = useState<number>(5000);
  const [delayMonths, setDelayMonths] = useState<number>(12);
  const [delayRate, setDelayRate] = useState<number>(12);
  const [delayYears, setDelayYears] = useState<number>(15);

  // 3. Step-Up States
  const [stepupMonthly, setStepupMonthly] = useState<number>(10000);
  const [stepupPercent, setStepupPercent] = useState<number>(10);
  const [stepupRate, setStepupRate] = useState<number>(12);
  const [stepupYears, setStepupYears] = useState<number>(15);

  // 4. SWP States
  const [swpPrincipal, setSwpPrincipal] = useState<number>(5000000);
  const [swpMonthly, setSwpMonthly] = useState<number>(35000);
  const [swpRate, setSwpRate] = useState<number>(8.5);
  const [swpYears, setSwpYears] = useState<number>(15);

  // 5. Child States
  const [childCurrentCost, setChildCurrentCost] = useState<number>(1500000);
  const [childCurrentAge, setChildCurrentAge] = useState<number>(5);
  const [childGoalAge, setChildGoalAge] = useState<number>(18);
  const [childInflation, setChildInflation] = useState<number>(8);
  const [childRate, setChildRate] = useState<number>(12);

  // 6. Retirement States
  const [retCurrentAge, setRetCurrentAge] = useState<number>(32);
  const [retRetireAge, setRetRetireAge] = useState<number>(60);
  const [retMonthlyExpense, setRetMonthlyExpense] = useState<number>(45000);
  const [retInflation, setRetInflation] = useState<number>(6);
  const [retPostRate, setRetPostRate] = useState<number>(8);

  // Reset Handler
  const handleReset = () => {
    if (activeTab === 'sip') {
      setSipMonthly(5000);
      setSipRate(12);
      setSipYears(10);
    } else if (activeTab === 'delay') {
      setDelayMonthly(5000);
      setDelayMonths(12);
      setDelayRate(12);
      setDelayYears(15);
    } else if (activeTab === 'stepup') {
      setStepupMonthly(10000);
      setStepupPercent(10);
      setStepupRate(12);
      setStepupYears(15);
    } else if (activeTab === 'swp') {
      setSwpPrincipal(5000000);
      setSwpMonthly(35000);
      setSwpRate(8.5);
      setSwpYears(15);
    } else if (activeTab === 'child') {
      setChildCurrentCost(1500000);
      setChildCurrentAge(5);
      setChildGoalAge(18);
      setChildInflation(8);
      setChildRate(12);
    } else if (activeTab === 'retirement') {
      setRetCurrentAge(32);
      setRetRetireAge(60);
      setRetMonthlyExpense(45000);
      setRetInflation(6);
      setRetPostRate(8);
    }
  };

  // Calculations for SIP
  const sipResults = useMemo(() => {
    const monthlyRate = sipRate / 100 / 12;
    const months = sipYears * 12;
    const futureValue =
      sipMonthly *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate));
    const totalInvested = sipMonthly * months;
    const estimatedGain = Math.max(0, futureValue - totalInvested);

    // Year-by-year accumulation
    const yearlyBreakdown: { year: number; invested: number; corpus: number }[] = [];
    for (let y = 1; y <= sipYears; y++) {
      const m = y * 12;
      const fv =
        sipMonthly *
        (((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate) * (1 + monthlyRate));
      yearlyBreakdown.push({
        year: y,
        invested: sipMonthly * m,
        corpus: Math.round(fv)
      });
    }

    const gainRatio = futureValue > 0 ? Math.round((estimatedGain / futureValue) * 100) : 0;

    return {
      futureValue,
      totalInvested,
      estimatedGain,
      gainRatio,
      yearlyBreakdown
    };
  }, [sipMonthly, sipRate, sipYears]);

  // Current Card Metadata
  const currentCard = CALCULATOR_CARDS.find((c) => c.id === activeTab) || CALCULATOR_CARDS[0];

  return (
    <div className="w-full">
      {/* If showWorkbench is false (used on homepage): show 6 modern cards linking to /calculators?tab=... */}
      {!showWorkbench ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CALCULATOR_CARDS.map((card) => (
            <Link
              key={card.id}
              href={`/calculators?tab=${card.id}`}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <span
                  className="text-[0.68rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                  style={{ background: card.badgeBg, color: card.badgeColor }}
                >
                  {card.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                {card.title}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                {card.desc}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                <span>Launch Interactive Tool</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Full Interactive Suite matching Reference Image 5 */
        <div className="bg-slate-50/50 rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200 shadow-sm">
          
          {/* Header Row with Badge, Title, Dropdown Selector & Reset */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-lime-100 text-lime-800 text-[0.7rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                <span>{currentCard.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {currentCard.title}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                {currentCard.desc}
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-center">
              {/* Dropdown to switch calculators */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-sm transition-all"
                >
                  <span>Select Calculator</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 flex flex-col gap-1">
                    {CALCULATOR_CARDS.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(item.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors ${
                          activeTab === item.id
                            ? 'bg-slate-900 text-white font-bold'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="truncate">{item.title}</span>
                        {activeTab === item.id && <CheckCircle2 size={15} className="text-lime-400 flex-shrink-0" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Reset Button */}
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 px-3.5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Top Row: Left Inputs (~60%) & Right Summary Cards (~40%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            
            {/* Left Box: Investment Inputs (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    Investment Inputs
                  </h3>
                  <span className="bg-slate-900 text-white font-bold text-[0.7rem] px-2.5 py-1 rounded-md">
                    INR (₹)
                  </span>
                </div>

                {/* Input 1: Monthly SIP Amount */}
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Monthly Investment
                    </label>
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                      <input
                        type="text"
                        readOnly
                        value={formatINRFull(sipMonthly)}
                        className="w-28 sm:w-36 py-1.5 px-3 text-right font-bold text-sm text-slate-900 bg-transparent outline-none"
                      />
                      <div className="flex border-l border-slate-200">
                        <button
                          type="button"
                          onClick={() => setSipMonthly(Math.max(500, sipMonthly - 500))}
                          className="px-2 py-1 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => setSipMonthly(Math.min(200000, sipMonthly + 500))}
                          className="px-2 py-1 hover:bg-slate-200 text-slate-700 font-bold text-xs border-l border-slate-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <CalcSlider
                    min={500}
                    max={200000}
                    step={500}
                    value={sipMonthly}
                    onChange={setSipMonthly}
                    color="#8ec61f"
                  />
                  <div className="flex justify-between text-[0.7rem] text-slate-400 mt-1.5 font-medium">
                    <span>₹500</span>
                    <span>₹2,00,000</span>
                  </div>
                </div>

                {/* Input 2: Expected Return */}
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Expected Annual Return Rate (p.a)
                    </label>
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                      <input
                        type="text"
                        readOnly
                        value={`${sipRate}%`}
                        className="w-20 sm:w-24 py-1.5 px-3 text-right font-bold text-sm text-slate-900 bg-transparent outline-none"
                      />
                      <div className="flex border-l border-slate-200">
                        <button
                          type="button"
                          onClick={() => setSipRate(Math.max(1, sipRate - 0.5))}
                          className="px-2 py-1 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => setSipRate(Math.min(30, sipRate + 0.5))}
                          className="px-2 py-1 hover:bg-slate-200 text-slate-700 font-bold text-xs border-l border-slate-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <CalcSlider
                    min={1}
                    max={30}
                    step={0.5}
                    value={sipRate}
                    onChange={setSipRate}
                    color="#8ec61f"
                  />
                  <div className="flex justify-between text-[0.7rem] text-slate-400 mt-1.5 font-medium">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Input 3: Investment Horizon */}
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Investment Duration
                    </label>
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                      <input
                        type="text"
                        readOnly
                        value={`${sipYears} Years`}
                        className="w-24 sm:w-28 py-1.5 px-3 text-right font-bold text-sm text-slate-900 bg-transparent outline-none"
                      />
                      <div className="flex border-l border-slate-200">
                        <button
                          type="button"
                          onClick={() => setSipYears(Math.max(1, sipYears - 1))}
                          className="px-2 py-1 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => setSipYears(Math.min(40, sipYears + 1))}
                          className="px-2 py-1 hover:bg-slate-200 text-slate-700 font-bold text-xs border-l border-slate-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <CalcSlider
                    min={1}
                    max={40}
                    step={1}
                    value={sipYears}
                    onChange={setSipYears}
                    color="#8ec61f"
                  />
                  <div className="flex justify-between text-[0.7rem] text-slate-400 mt-1.5 font-medium">
                    <span>1 Year</span>
                    <span>40 Years</span>
                  </div>
                </div>
              </div>

              {/* Callout Tip at Bottom of Inputs */}
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 sm:p-4 flex items-center gap-3 text-sky-950 text-xs sm:text-sm">
                <Lightbulb size={18} className="text-sky-600 flex-shrink-0" />
                <span>
                  Increase your SIP amount each year to beat inflation and reach your financial goals significantly faster.
                </span>
              </div>
            </div>

            {/* Right Column: 3 Stacked Metric Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Card 1: Future Corpus (Deep Navy) */}
              <div className="bg-[#071426] text-white rounded-2xl p-6 border border-[#0d223f] shadow-lg flex flex-col justify-between flex-1 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#8ec61f]/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <TrendingUp size={15} className="text-[#8ec61f]" />
                    <span>FUTURE CORPUS</span>
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#8ec61f] tracking-tight">
                    {formatINR(sipResults.futureValue)}
                  </div>
                </div>
                <div className="text-xs text-slate-400 mt-4 font-medium">
                  Terminal Value ({sipYears} Years Horizon)
                </div>
              </div>

              {/* Card 2: Total Invested (White) */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    <DollarSign size={14} className="text-slate-400" />
                    <span>TOTAL INVESTED</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {formatINR(sipResults.totalInvested)}
                  </div>
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium">
                  Capital Deployed
                </div>
              </div>

              {/* Card 3: Estimated Gain (White with Green Highlight) */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    <Sparkles size={14} className="text-emerald-600" />
                    <span>ESTIMATED GAIN</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
                    {formatINR(sipResults.estimatedGain)}
                  </div>
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium">
                  Compounding Growth
                </div>
              </div>

            </div>
          </div>

          {/* Middle Row: Year-by-Year Table (~48%) and Donut + Investor Card (~52%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            
            {/* Left: Year-by-Year Table (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-[#071426] text-white px-5 py-3.5 flex items-center justify-between">
                <span className="font-extrabold text-xs tracking-wider uppercase">YEAR</span>
                <span className="font-extrabold text-xs tracking-wider uppercase">TOTAL INVESTED</span>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xs tracking-wider uppercase">CORPUS</span>
                  <div className="flex items-center gap-1 ml-1.5">
                    <button
                      type="button"
                      onClick={() => yearlyTableRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-[0.68rem] font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-1.5 py-0.5 rounded transition-colors cursor-pointer"
                      title="Scroll to Top"
                    >
                      Top ↑
                    </button>
                    <button
                      type="button"
                      onClick={() => yearlyTableRef.current?.scrollTo({ top: yearlyTableRef.current.scrollHeight, behavior: 'smooth' })}
                      className="text-[0.68rem] font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-1.5 py-0.5 rounded transition-colors cursor-pointer"
                      title="Scroll to End"
                    >
                      End ↓
                    </button>
                  </div>
                </div>
              </div>

              <div
                ref={yearlyTableRef}
                onMouseMove={handleTableMouseMove}
                className="divide-y divide-slate-100 max-h-[360px] overflow-y-auto custom-scrollbar scroll-smooth"
              >
                {sipResults.yearlyBreakdown.map((item) => (
                  <div
                    key={item.year}
                    className="px-5 py-2.5 flex items-center justify-between text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-700">Year {item.year}</span>
                    <span className="text-slate-600 font-medium">{formatINR(item.invested)}</span>
                    <span className="font-extrabold text-emerald-600">{formatINR(item.corpus)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Donut Chart & Investor Awareness (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* Donut Chart: Yield Breakdown */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col items-center justify-center">
                <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4 self-start">
                  YIELD BREAKDOWN
                </div>

                {/* SVG Donut Ring */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle (Invested) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#94a3b8"
                      strokeWidth="12"
                      fill="transparent"
                    />
                    {/* Foreground arc (Gain) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#8ec61f"
                      strokeWidth="12"
                      strokeDasharray={`${(sipResults.gainRatio * 251.2) / 100} 251.2`}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <div className="text-[0.65rem] font-extrabold text-slate-400 uppercase">
                      GAIN RATIO
                    </div>
                    <div className="text-2xl font-black text-slate-900">
                      {sipResults.gainRatio}%
                    </div>
                  </div>
                </div>

                {/* Donut Legend */}
                <div className="flex items-center gap-6 mt-4 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-slate-400 inline-block" />
                    <span className="text-slate-600">Invested Capital</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#8ec61f] inline-block" />
                    <span className="text-slate-800">Estimated Gain</span>
                  </div>
                </div>
              </div>

              {/* Investor Awareness Card (Deep Navy) */}
              <div className="bg-[#071426] text-white rounded-2xl p-5 sm:p-6 border border-[#0d223f] shadow-md flex flex-col justify-between flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  <ShieldCheck size={16} className="text-[#8ec61f]" />
                  <span>INVESTOR AWARENESS</span>
                </div>

                <div className="space-y-2 mb-5 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#8ec61f] flex-shrink-0" />
                    <span>DISCIPLINED SIP APPROACH</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#8ec61f] flex-shrink-0" />
                    <span>LONG-TERM INVESTMENT DISCIPLINE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#8ec61f] flex-shrink-0" />
                    <span>SYSTEMATIC MUTUAL FUND INVESTING</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-center py-2.5 rounded-xl transition-all shadow-md text-xs sm:text-sm flex items-center justify-center gap-1.5"
                >
                  <span>Enquire with Our Team</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>
          </div>

          {/* Bottom Row: Compound Growth Curve Line Chart */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base uppercase tracking-wider">
                COMPOUND GROWTH CURVE
              </h4>
              <div className="flex items-center gap-5 text-xs font-semibold">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-0.5 bg-[#2563eb] inline-block" />
                  <span className="text-slate-700">Future Value</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-0.5 border-t border-dashed border-slate-400 inline-block" />
                  <span className="text-slate-500">Invested Capital</span>
                </div>
              </div>
            </div>

            {/* SVG Interactive Curve */}
            <div className="w-full h-48 sm:h-64">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
                {/* Horizontal Grid lines */}
                <line x1="0" y1="180" x2="500" y2="180" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="60" x2="500" y2="60" stroke="#f1f5f9" strokeWidth="1" />

                {/* Linear Investment Line (dotted) */}
                <line
                  x1="20"
                  y1="180"
                  x2="480"
                  y2={180 - (sipResults.totalInvested / (sipResults.futureValue || 1)) * 140}
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Exponential Compounding Path (Future Value) */}
                <path
                  d={`M 20 180 Q 260 160 480 30`}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3"
                />

                {/* Start and End Dots */}
                <circle cx="20" cy="180" r="4" fill="#2563eb" />
                <circle cx="480" cy="30" r="5" fill="#2563eb" />
                <circle cx="480" cy={180 - (sipResults.totalInvested / (sipResults.futureValue || 1)) * 140} r="4" fill="#94a3b8" />
              </svg>
            </div>

            {/* X-Axis Ticks */}
            <div className="flex justify-between text-[0.72rem] text-slate-400 font-bold mt-2 px-3">
              <span>Y0</span>
              <span>Y{Math.round(sipYears * 0.25)}</span>
              <span>Y{Math.round(sipYears * 0.5)}</span>
              <span>Y{Math.round(sipYears * 0.75)}</span>
              <span>Y{sipYears}</span>
            </div>
          </div>

          {/* Statutory Disclaimer Footer */}
          <div className="text-[0.72rem] text-slate-400 leading-relaxed flex items-start gap-2 pt-2">
            <Info size={14} className="text-slate-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> This calculator is an educational illustration using assumed compounding rates. It is not a promise or guarantee of returns. Mutual fund investments are subject to market risks; read all scheme related documents carefully before investing.
            </p>
          </div>

        </div>
      )}
    </div>
  );
}
