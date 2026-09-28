'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Clock,
  ArrowRight,
  Sparkles,
  RotateCcw,
  Info,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  Lightbulb,
  DollarSign,
  GraduationCap,
  Calculator,
  FileText,
  Heart,
  Home,
  Car,
  Plane,
  Umbrella,
  Repeat,
  Percent,
  Calendar,
  AlertCircle
} from 'lucide-react';
import {
  ALL_CALCULATORS,
  CalculatorSlug,
  formatINR,
  formatINRFull
} from '@/data/calculatorsData';

interface InteractiveCalculatorProps {
  initialSlug?: CalculatorSlug;
  isStandalonePage?: boolean;
}

function CalcSlider({
  min,
  max,
  step = 1,
  value,
  onChange,
  color = '#f59e0b',
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

export default function InteractiveCalculator({
  initialSlug = 'sip',
  isStandalonePage = false
}: InteractiveCalculatorProps) {
  const [activeSlug, setActiveSlug] = useState<CalculatorSlug>(initialSlug);
  const yearlyTableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveSlug(initialSlug);
  }, [initialSlug]);

  // 1. SIP State
  const [sipMonthly, setSipMonthly] = useState<number>(10000);
  const [sipRate, setSipRate] = useState<number>(12);
  const [sipYears, setSipYears] = useState<number>(10);

  // 2. Lumpsum State
  const [lumpPrincipal, setLumpPrincipal] = useState<number>(100000);
  const [lumpRate, setLumpRate] = useState<number>(12);
  const [lumpYears, setLumpYears] = useState<number>(10);

  // 3. SWP State
  const [swpPrincipal, setSwpPrincipal] = useState<number>(2500000);
  const [swpMonthly, setSwpMonthly] = useState<number>(20000);
  const [swpRate, setSwpRate] = useState<number>(8.5);
  const [swpYears, setSwpYears] = useState<number>(10);

  // 4. STP State
  const [stpSource, setStpSource] = useState<number>(1000000);
  const [stpMonthly, setStpMonthly] = useState<number>(15000);
  const [stpSourceRate, setStpSourceRate] = useState<number>(6.5);
  const [stpTargetRate, setStpTargetRate] = useState<number>(12.5);
  const [stpYears, setStpYears] = useState<number>(5);

  // 5. Retirement State
  const [retCurrentAge, setRetCurrentAge] = useState<number>(32);
  const [retRetireAge, setRetRetireAge] = useState<number>(60);
  const [retMonthlyExpense, setRetMonthlyExpense] = useState<number>(45000);
  const [retInflation, setRetInflation] = useState<number>(6);
  const [retPostRate, setRetPostRate] = useState<number>(8);

  // 6. Delay State
  const [delayMonthly, setDelayMonthly] = useState<number>(10000);
  const [delayYears, setDelayYears] = useState<number>(15);
  const [delayYearsLost, setDelayYearsLost] = useState<number>(2);
  const [delayRate, setDelayRate] = useState<number>(12);

  // 7. Insurance State
  const [insIncome, setInsIncome] = useState<number>(1200000);
  const [insAge, setInsAge] = useState<number>(32);
  const [insRetAge, setInsRetAge] = useState<number>(60);
  const [insDebts, setInsDebts] = useState<number>(2500000);
  const [insSavings, setInsSavings] = useState<number>(1000000);

  // 8. EMI State
  const [emiAmount, setEmiAmount] = useState<number>(2500000);
  const [emiRate, setEmiRate] = useState<number>(8.5);
  const [emiYears, setEmiYears] = useState<number>(15);

  // 9. Tax State
  const [taxIncome, setTaxIncome] = useState<number>(1200000);
  const [tax80C, setTax80C] = useState<number>(150000);
  const [tax80D, setTax80D] = useState<number>(25000);
  const [taxOther, setTaxOther] = useState<number>(50000);

  // 10. Marriage State
  const [marrCost, setMarrCost] = useState<number>(1500000);
  const [marrYears, setMarrYears] = useState<number>(5);
  const [marrInflation, setMarrInflation] = useState<number>(8);
  const [marrRate, setMarrRate] = useState<number>(12);

  // 11. Education State
  const [eduCost, setEduCost] = useState<number>(2000000);
  const [eduAge, setEduAge] = useState<number>(6);
  const [eduCollegeAge, setEduCollegeAge] = useState<number>(18);
  const [eduInflation, setEduInflation] = useState<number>(9);
  const [eduRate, setEduRate] = useState<number>(12);

  // 12. Home Loan State
  const [hlPrice, setHlPrice] = useState<number>(6000000);
  const [hlDown, setHlDown] = useState<number>(1200000);
  const [hlRate, setHlRate] = useState<number>(8.4);
  const [hlYears, setHlYears] = useState<number>(20);

  // 13. Car Loan State
  const [carPrice, setCarPrice] = useState<number>(1200000);
  const [carDown, setCarDown] = useState<number>(300000);
  const [carRate, setCarRate] = useState<number>(9.2);
  const [carYears, setCarYears] = useState<number>(5);

  // 14. Vacation State
  const [vacCost, setVacCost] = useState<number>(250000);
  const [vacYears, setVacYears] = useState<number>(2);
  const [vacInflation, setVacInflation] = useState<number>(7);
  const [vacRate, setVacRate] = useState<number>(10);

  // Reset Handler
  const handleReset = () => {
    switch (activeSlug) {
      case 'sip':
        setSipMonthly(10000);
        setSipRate(12);
        setSipYears(10);
        break;
      case 'lumpsum':
        setLumpPrincipal(100000);
        setLumpRate(12);
        setLumpYears(10);
        break;
      case 'swp':
        setSwpPrincipal(2500000);
        setSwpMonthly(20000);
        setSwpRate(8.5);
        setSwpYears(10);
        break;
      case 'stp':
        setStpSource(1000000);
        setStpMonthly(15000);
        setStpSourceRate(6.5);
        setStpTargetRate(12.5);
        setStpYears(5);
        break;
      case 'retirement':
        setRetCurrentAge(32);
        setRetRetireAge(60);
        setRetMonthlyExpense(45000);
        setRetInflation(6);
        setRetPostRate(8);
        break;
      case 'delay':
        setDelayMonthly(10000);
        setDelayYears(15);
        setDelayYearsLost(2);
        setDelayRate(12);
        break;
      case 'insurance':
        setInsIncome(1200000);
        setInsAge(32);
        setInsRetAge(60);
        setInsDebts(2500000);
        setInsSavings(1000000);
        break;
      case 'emi':
        setEmiAmount(2500000);
        setEmiRate(8.5);
        setEmiYears(15);
        break;
      case 'tax':
        setTaxIncome(1200000);
        setTax80C(150000);
        setTax80D(25000);
        setTaxOther(50000);
        break;
      case 'marriage':
        setMarrCost(1500000);
        setMarrYears(5);
        setMarrInflation(8);
        setMarrRate(12);
        break;
      case 'education':
        setEduCost(2000000);
        setEduAge(6);
        setEduCollegeAge(18);
        setEduInflation(9);
        setEduRate(12);
        break;
      case 'home-loan':
        setHlPrice(6000000);
        setHlDown(1200000);
        setHlRate(8.4);
        setHlYears(20);
        break;
      case 'car-loan':
        setCarPrice(1200000);
        setCarDown(300000);
        setCarRate(9.2);
        setCarYears(5);
        break;
      case 'vacation':
        setVacCost(250000);
        setVacYears(2);
        setVacInflation(7);
        setVacRate(10);
        break;
    }
  };

  // Active definition
  const currentCalc = ALL_CALCULATORS.find((c) => c.id === activeSlug) || ALL_CALCULATORS[0];

  // ================= CALCULATIONS =================

  // 1. SIP Calculation
  const sipResult = useMemo(() => {
    const monthlyRate = sipRate / 100 / 12;
    const months = sipYears * 12;
    const futureValue =
      sipMonthly *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvested = sipMonthly * months;
    const estimatedGain = Math.max(0, futureValue - totalInvested);

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
    return { futureValue, totalInvested, estimatedGain, gainRatio, yearlyBreakdown };
  }, [sipMonthly, sipRate, sipYears]);

  // 2. Lumpsum Calculation
  const lumpResult = useMemo(() => {
    const futureValue = lumpPrincipal * Math.pow(1 + lumpRate / 100, lumpYears);
    const estimatedGain = Math.max(0, futureValue - lumpPrincipal);
    const yearlyBreakdown: { year: number; invested: number; corpus: number }[] = [];
    for (let y = 1; y <= lumpYears; y++) {
      const fv = lumpPrincipal * Math.pow(1 + lumpRate / 100, y);
      yearlyBreakdown.push({
        year: y,
        invested: lumpPrincipal,
        corpus: Math.round(fv)
      });
    }
    const gainRatio = futureValue > 0 ? Math.round((estimatedGain / futureValue) * 100) : 0;
    return { futureValue, totalInvested: lumpPrincipal, estimatedGain, gainRatio, yearlyBreakdown };
  }, [lumpPrincipal, lumpRate, lumpYears]);

  // 3. SWP Calculation
  const swpResult = useMemo(() => {
    const monthlyRate = swpRate / 100 / 12;
    let balance = swpPrincipal;
    const totalMonths = swpYears * 12;
    let totalWithdrawn = 0;
    const yearlyBreakdown: { year: number; withdrawn: number; balance: number }[] = [];

    for (let m = 1; m <= totalMonths; m++) {
      balance = balance * (1 + monthlyRate) - swpMonthly;
      totalWithdrawn += swpMonthly;
      if (balance < 0) balance = 0;
      if (m % 12 === 0) {
        yearlyBreakdown.push({
          year: m / 12,
          withdrawn: totalWithdrawn,
          balance: Math.round(balance)
        });
      }
    }
    const netGrowth = Math.max(0, balance + totalWithdrawn - swpPrincipal);
    return { remainingBalance: Math.max(0, balance), totalWithdrawn, netGrowth, yearlyBreakdown };
  }, [swpPrincipal, swpMonthly, swpRate, swpYears]);

  // 4. STP Calculation
  const stpResult = useMemo(() => {
    const srcMonthlyRate = stpSourceRate / 100 / 12;
    const tgtMonthlyRate = stpTargetRate / 100 / 12;
    const months = stpYears * 12;

    let srcBalance = stpSource;
    let tgtBalance = 0;
    let totalTransferred = 0;

    for (let m = 1; m <= months; m++) {
      if (srcBalance >= stpMonthly) {
        srcBalance = (srcBalance - stpMonthly) * (1 + srcMonthlyRate);
        tgtBalance = (tgtBalance + stpMonthly) * (1 + tgtMonthlyRate);
        totalTransferred += stpMonthly;
      } else {
        tgtBalance = tgtBalance * (1 + tgtMonthlyRate);
      }
    }

    const totalCombined = srcBalance + tgtBalance;
    return {
      targetCorpus: Math.round(tgtBalance),
      sourceBalance: Math.round(Math.max(0, srcBalance)),
      totalTransferred,
      totalCombined: Math.round(totalCombined)
    };
  }, [stpSource, stpMonthly, stpSourceRate, stpTargetRate, stpYears]);

  // 5. Retirement Calculation
  const retResult = useMemo(() => {
    const yearsToRetire = Math.max(1, retRetireAge - retCurrentAge);
    const futureMonthlyExpense =
      retMonthlyExpense * Math.pow(1 + retInflation / 100, yearsToRetire);
    const futureAnnualExpense = futureMonthlyExpense * 12;

    // Real rate of return post-retirement
    const realRate = ((1 + retPostRate / 100) / (1 + retInflation / 100) - 1);
    const retirementYears = 25; // standard assumption
    const requiredCorpus =
      realRate > 0
        ? futureAnnualExpense * ((1 - Math.pow(1 + realRate, -retirementYears)) / realRate)
        : futureAnnualExpense * retirementYears;

    // SIP to achieve this corpus
    const preMonthlyRate = 0.12 / 12; // assumed 12% pre-retirement growth
    const months = yearsToRetire * 12;
    const monthlySIP =
      (requiredCorpus * preMonthlyRate) /
      ((Math.pow(1 + preMonthlyRate, months) - 1) * (1 + preMonthlyRate));

    return {
      requiredCorpus: Math.round(requiredCorpus),
      futureMonthlyExpense: Math.round(futureMonthlyExpense),
      monthlySIP: Math.round(monthlySIP),
      yearsToRetire
    };
  }, [retCurrentAge, retRetireAge, retMonthlyExpense, retInflation, retPostRate]);

  // 6. Delay Calculation
  const delayResult = useMemo(() => {
    const monthlyRate = delayRate / 100 / 12;
    const totalMonths = delayYears * 12;
    const delayedMonths = Math.max(1, (delayYears - delayYearsLost) * 12);

    const fvToday =
      delayMonthly *
      (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    const fvDelayed =
      delayMonthly *
      (((Math.pow(1 + monthlyRate, delayedMonths) - 1) / monthlyRate) * (1 + monthlyRate));

    const delayCost = Math.max(0, fvToday - fvDelayed);
    return {
      costOfDelay: Math.round(delayCost),
      corpusToday: Math.round(fvToday),
      corpusDelayed: Math.round(fvDelayed)
    };
  }, [delayMonthly, delayYears, delayYearsLost, delayRate]);

  // 7. Insurance Calculation (HLV)
  const insResult = useMemo(() => {
    const workingYears = Math.max(1, insRetAge - insAge);
    // 10-15x income plus debts minus savings
    const incomeReplacement = insIncome * Math.min(workingYears, 15) * 0.75;
    const totalCover = Math.max(500000, incomeReplacement + insDebts - insSavings);
    return {
      estimatedCoverNeed: Math.round(totalCover),
      incomeReplacement: Math.round(incomeReplacement),
      liabilitiesCover: insDebts
    };
  }, [insIncome, insAge, insRetAge, insDebts, insSavings]);

  // 8. EMI Calculation
  const emiResult = useMemo(() => {
    const monthlyRate = emiRate / 100 / 12;
    const totalMonths = emiYears * 12;
    const emi =
      (emiAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayment = emi * totalMonths;
    const totalInterest = Math.max(0, totalPayment - emiAmount);

    const yearlyBreakdown: { year: number; principalPaid: number; interestPaid: number; balance: number }[] = [];
    let balance = emiAmount;
    for (let y = 1; y <= emiYears; y++) {
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;
      for (let m = 0; m < 12; m++) {
        const intPart = balance * monthlyRate;
        const priPart = emi - intPart;
        yearlyInterest += intPart;
        yearlyPrincipal += priPart;
        balance -= priPart;
      }
      yearlyBreakdown.push({
        year: y,
        principalPaid: Math.round(yearlyPrincipal),
        interestPaid: Math.round(yearlyInterest),
        balance: Math.round(Math.max(0, balance))
      });
    }

    return {
      monthlyEMI: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      yearlyBreakdown
    };
  }, [emiAmount, emiRate, emiYears]);

  // 9. Tax Calculation (Old vs New Regime)
  const taxResult = useMemo(() => {
    // New Regime (FY 2024-25 / 2025-26 with standard deduction 75,000)
    const stdDeduction = 75000;
    const newTaxable = Math.max(0, taxIncome - stdDeduction);
    let newTax = 0;
    if (newTaxable > 1500000) {
      newTax = 150000 + (newTaxable - 1500000) * 0.3;
    } else if (newTaxable > 1200000) {
      newTax = 90000 + (newTaxable - 1200000) * 0.2;
    } else if (newTaxable > 1000000) {
      newTax = 60000 + (newTaxable - 1000000) * 0.15;
    } else if (newTaxable > 700000) {
      newTax = 30000 + (newTaxable - 700000) * 0.1;
    } else if (newTaxable > 300000) {
      newTax = (newTaxable - 300000) * 0.05;
    }
    // Section 87A rebate under New Regime up to 7L
    if (newTaxable <= 700000) newTax = 0;
    newTax = newTax * 1.04; // 4% cess

    // Old Regime
    const totalOldDeductions = 50000 + Math.min(150000, tax80C) + Math.min(100000, tax80D) + taxOther;
    const oldTaxable = Math.max(0, taxIncome - totalOldDeductions);
    let oldTax = 0;
    if (oldTaxable > 1000000) {
      oldTax = 112500 + (oldTaxable - 1000000) * 0.3;
    } else if (oldTaxable > 500000) {
      oldTax = 12500 + (oldTaxable - 500000) * 0.2;
    } else if (oldTaxable > 250000) {
      oldTax = (oldTaxable - 250000) * 0.05;
    }
    if (oldTaxable <= 500000) oldTax = 0;
    oldTax = oldTax * 1.04;

    const elssTaxSaving = Math.round(Math.min(150000, tax80C) * 0.312);

    return {
      taxNewRegime: Math.round(newTax),
      taxOldRegime: Math.round(oldTax),
      elssTaxSaving,
      lowerTaxRegime: newTax <= oldTax ? 'New Tax Regime' : 'Old Tax Regime'
    };
  }, [taxIncome, tax80C, tax80D, taxOther]);

  // 10. Marriage Goal Calculation
  const marrResult = useMemo(() => {
    const futureCost = marrCost * Math.pow(1 + marrInflation / 100, marrYears);
    const monthlyRate = marrRate / 100 / 12;
    const months = marrYears * 12;
    const monthlySIP =
      (futureCost * monthlyRate) /
      ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate));
    return {
      futureCost: Math.round(futureCost),
      monthlySIP: Math.round(monthlySIP),
      totalInvested: Math.round(monthlySIP * months)
    };
  }, [marrCost, marrYears, marrInflation, marrRate]);

  // 11. Education Goal Calculation
  const eduResult = useMemo(() => {
    const years = Math.max(1, eduCollegeAge - eduAge);
    const futureCost = eduCost * Math.pow(1 + eduInflation / 100, years);
    const monthlyRate = eduRate / 100 / 12;
    const months = years * 12;
    const monthlySIP =
      (futureCost * monthlyRate) /
      ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate));
    return {
      futureCost: Math.round(futureCost),
      monthlySIP: Math.round(monthlySIP),
      yearsLeft: years
    };
  }, [eduCost, eduAge, eduCollegeAge, eduInflation, eduRate]);

  // 12. Home Loan Calculation
  const hlResult = useMemo(() => {
    const loanAmount = Math.max(100000, hlPrice - hlDown);
    const monthlyRate = hlRate / 100 / 12;
    const totalMonths = hlYears * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayment = emi * totalMonths;
    const totalInterest = Math.max(0, totalPayment - loanAmount);
    return {
      loanAmount: Math.round(loanAmount),
      monthlyEMI: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalCostOfProperty: Math.round(hlDown + totalPayment)
    };
  }, [hlPrice, hlDown, hlRate, hlYears]);

  // 13. Car Loan Calculation
  const carResult = useMemo(() => {
    const loanAmount = Math.max(50000, carPrice - carDown);
    const monthlyRate = carRate / 100 / 12;
    const totalMonths = carYears * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayment = emi * totalMonths;
    const totalInterest = Math.max(0, totalPayment - loanAmount);
    return {
      loanAmount: Math.round(loanAmount),
      monthlyEMI: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmountPaid: Math.round(carDown + totalPayment)
    };
  }, [carPrice, carDown, carRate, carYears]);

  // 14. Vacation Calculation
  const vacResult = useMemo(() => {
    const futureCost = vacCost * Math.pow(1 + vacInflation / 100, vacYears);
    const monthlyRate = vacRate / 100 / 12;
    const months = vacYears * 12;
    const monthlySIP =
      (futureCost * monthlyRate) /
      ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate));
    return {
      futureCost: Math.round(futureCost),
      monthlySIP: Math.round(monthlySIP),
      totalSaved: Math.round(monthlySIP * months)
    };
  }, [vacCost, vacYears, vacInflation, vacRate]);

  // Dynamic Chart & Breakdown Data for All 14 Calculators (matching Image 2)
  const chartData = useMemo(() => {
    let tableHeaders = ['YEAR', 'TOTAL INVESTED', 'FUTURE VALUE'];
    let tableRows: { col1: string; col2: string; col3: string }[] = [];
    let donutLabel1 = 'Invested Capital';
    let donutVal1 = 1;
    let donutLabel2 = 'Estimated Gain';
    let donutVal2 = 1;
    let donutCenterPercent = 50;
    let donutCenterLabel = 'GAIN RATIO';
    let curveLine1 = 'Future Value';
    let curveLine2 = 'Invested Capital';
    let curvePoints: { xLabel: string; y1: number; y2: number }[] = [];
    let awarenessPoints = [
      'DISCIPLINED SIP APPROACH',
      'LONG-TERM INVESTMENT DISCIPLINE',
      'SYSTEMATIC MUTUAL FUND INVESTING'
    ];

    switch (activeSlug) {
      case 'sip': {
        tableHeaders = ['YEAR', 'TOTAL INVESTED', 'CORPUS'];
        tableRows = sipResult.yearlyBreakdown.map((b) => ({
          col1: `Year ${b.year}`,
          col2: formatINR(b.invested),
          col3: formatINR(b.corpus)
        }));
        donutLabel1 = 'Invested Capital';
        donutVal1 = sipResult.totalInvested;
        donutLabel2 = 'Estimated Gain';
        donutVal2 = sipResult.estimatedGain;
        donutCenterPercent = sipResult.gainRatio;
        donutCenterLabel = 'GAIN RATIO';
        curveLine1 = 'Future Value';
        curveLine2 = 'Invested Capital';
        curvePoints = sipResult.yearlyBreakdown.map((b) => ({
          xLabel: `Y${b.year}`,
          y1: b.corpus,
          y2: b.invested
        }));
        awarenessPoints = [
          'RUPEE-COST AVERAGING ACROSS MARKET CYCLES',
          'POWER OF SYSTEMATIC MONTHLY COMPOUNDING',
          'DISCIPLINED CAPITAL ACCUMULATION STRATEGY'
        ];
        break;
      }
      case 'lumpsum': {
        tableHeaders = ['YEAR', 'INITIAL CAPITAL', 'PROJECTED VALUE'];
        tableRows = lumpResult.yearlyBreakdown.map((b) => ({
          col1: `Year ${b.year}`,
          col2: formatINR(b.invested),
          col3: formatINR(b.corpus)
        }));
        donutLabel1 = 'Initial Investment';
        donutVal1 = lumpResult.totalInvested;
        donutLabel2 = 'Compounded Gain';
        donutVal2 = lumpResult.estimatedGain;
        donutCenterPercent = lumpResult.gainRatio;
        donutCenterLabel = 'GAIN RATIO';
        curveLine1 = 'Future Value';
        curveLine2 = 'Initial Capital';
        curvePoints = lumpResult.yearlyBreakdown.map((b) => ({
          xLabel: `Y${b.year}`,
          y1: b.corpus,
          y2: b.invested
        }));
        awarenessPoints = [
          'PATIENT LONG-TERM CAPITAL COMPOUNDING',
          'AVOIDING TIMING THE STOCK MARKET',
          'DIVERSIFIED EQUITY FUND ALLOCATION'
        ];
        break;
      }
      case 'swp': {
        tableHeaders = ['YEAR', 'TOTAL WITHDRAWN', 'REMAINING CORPUS'];
        tableRows = swpResult.yearlyBreakdown.map((b) => ({
          col1: `Year ${b.year}`,
          col2: formatINR(b.withdrawn),
          col3: formatINR(b.balance)
        }));
        donutLabel1 = 'Total Withdrawn';
        donutVal1 = swpResult.totalWithdrawn;
        donutLabel2 = 'Remaining Corpus';
        donutVal2 = swpResult.remainingBalance;
        const swpTotal = swpResult.totalWithdrawn + swpResult.remainingBalance;
        donutCenterPercent = swpTotal > 0 ? Math.round((swpResult.totalWithdrawn / swpTotal) * 100) : 0;
        donutCenterLabel = 'PAYOUT RATIO';
        curveLine1 = 'Remaining Balance';
        curveLine2 = 'Total Withdrawn';
        curvePoints = swpResult.yearlyBreakdown.map((b) => ({
          xLabel: `Y${b.year}`,
          y1: b.balance,
          y2: b.withdrawn
        }));
        awarenessPoints = [
          'TAX-EFFICIENT SYSTEMATIC WITHDRAWALS',
          'SUSTAINABLE POST-RETIREMENT CASHFLOW',
          'CAPITAL PRESERVATION WITH DEBT & HYBRID'
        ];
        break;
      }
      case 'stp': {
        tableHeaders = ['MONTH / YEAR', 'SOURCE LEFT', 'TARGET VAL'];
        const months = stpYears * 12;
        const srcMonthlyRate = stpSourceRate / 100 / 12;
        const tgtMonthlyRate = stpTargetRate / 100 / 12;
        let sBal = stpSource;
        let tBal = 0;
        let tTrans = 0;
        const rows: { col1: string; col2: string; col3: string }[] = [];
        const pts: { xLabel: string; y1: number; y2: number }[] = [];

        for (let m = 1; m <= months; m++) {
          if (sBal >= stpMonthly) {
            sBal = (sBal - stpMonthly) * (1 + srcMonthlyRate);
            tBal = (tBal + stpMonthly) * (1 + tgtMonthlyRate);
            tTrans += stpMonthly;
          } else {
            tBal = tBal * (1 + tgtMonthlyRate);
          }
          if (m <= 12 || m % 6 === 0 || m === months) {
            const label = m <= 12 ? `Month ${m}` : `Year ${(m / 12).toFixed(1)}`;
            rows.push({
              col1: label,
              col2: formatINR(Math.max(0, sBal)),
              col3: formatINR(tBal)
            });
          }
          if (m % Math.max(1, Math.floor(months / 8)) === 0 || m === months) {
            pts.push({
              xLabel: m <= 12 ? `M${m}` : `Y${Math.round(m / 12)}`,
              y1: Math.round(tBal),
              y2: Math.round(Math.max(0, sBal))
            });
          }
        }
        tableRows = rows;
        donutLabel1 = 'Transferred Capital';
        donutVal1 = tTrans;
        donutLabel2 = 'Estimated Gain';
        donutVal2 = Math.max(0, Math.round(sBal + tBal - stpSource));
        const stpTotal = tTrans + donutVal2;
        donutCenterPercent = stpTotal > 0 ? Math.round((donutVal2 / stpTotal) * 100) : 0;
        donutCenterLabel = 'EQUITY ALPHA';
        curveLine1 = 'Target Fund (Equity)';
        curveLine2 = 'Source Fund (Liquid)';
        curvePoints = pts;
        awarenessPoints = [
          'DISCIPLINED STP VOLATILITY MITIGATION',
          'EARNING LIQUID RETURNS ON PARKED CAPITAL',
          'SYSTEMATIC HIGH-CONVICTION EQUITY ENTRY'
        ];
        break;
      }
      case 'retirement': {
        tableHeaders = ['MILESTONE', 'ANNUAL COST', 'CORPUS TARGET'];
        const years = retResult.yearsToRetire;
        const rows: { col1: string; col2: string; col3: string }[] = [];
        const pts: { xLabel: string; y1: number; y2: number }[] = [];
        const preMonthlyRate = 0.12 / 12;
        for (let y = 1; y <= years; y++) {
          const m = y * 12;
          const currentExp = retMonthlyExpense * Math.pow(1 + retInflation / 100, y) * 12;
          const accumulated = retResult.monthlySIP * (((Math.pow(1 + preMonthlyRate, m) - 1) / preMonthlyRate) * (1 + preMonthlyRate));
          if (y % Math.max(1, Math.floor(years / 8)) === 0 || y === years || y === 1) {
            rows.push({
              col1: `Age ${retCurrentAge + y}`,
              col2: formatINR(currentExp),
              col3: formatINR(accumulated)
            });
            pts.push({
              xLabel: `Age ${retCurrentAge + y}`,
              y1: Math.round(accumulated),
              y2: Math.round(retResult.monthlySIP * m)
            });
          }
        }
        tableRows = rows;
        donutLabel1 = 'Total Savings Invested';
        donutVal1 = retResult.monthlySIP * years * 12;
        donutLabel2 = 'Compounded Corpus';
        donutVal2 = Math.max(0, retResult.requiredCorpus - donutVal1);
        donutCenterPercent = retResult.requiredCorpus > 0 ? Math.round((donutVal2 / retResult.requiredCorpus) * 100) : 0;
        donutCenterLabel = 'GROWTH SHARE';
        curveLine1 = 'Target Nest Egg';
        curveLine2 = 'Invested Contributions';
        curvePoints = pts;
        awarenessPoints = [
          'PROTECTING AGAINST RETIREMENT INFLATION',
          'MAINTAINING LIVING STANDARDS POST-WORK',
          'EARLY STEP-UP ACCUMULATION ADVANTAGE'
        ];
        break;
      }
      case 'delay': {
        tableHeaders = ['YEAR', 'TIMELY START', 'DELAYED START'];
        const monthlyRate = delayRate / 100 / 12;
        const rows: { col1: string; col2: string; col3: string }[] = [];
        const pts: { xLabel: string; y1: number; y2: number }[] = [];
        for (let y = 1; y <= delayYears; y++) {
          const m = y * 12;
          const fvNow = delayMonthly * (((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate) * (1 + monthlyRate));
          const delayedMonths = Math.max(0, (y - delayYearsLost) * 12);
          const fvDelayed = delayedMonths > 0
            ? delayMonthly * (((Math.pow(1 + monthlyRate, delayedMonths) - 1) / monthlyRate) * (1 + monthlyRate))
            : 0;
          if (y % Math.max(1, Math.floor(delayYears / 8)) === 0 || y === delayYears || y === 1) {
            rows.push({
              col1: `Year ${y}`,
              col2: formatINR(fvNow),
              col3: formatINR(fvDelayed)
            });
            pts.push({
              xLabel: `Y${y}`,
              y1: Math.round(fvNow),
              y2: Math.round(fvDelayed)
            });
          }
        }
        tableRows = rows;
        donutLabel1 = 'Delayed Corpus';
        donutVal1 = delayResult.corpusDelayed;
        donutLabel2 = 'Cost of Delay';
        donutVal2 = delayResult.costOfDelay;
        donutCenterPercent = delayResult.corpusToday > 0 ? Math.round((delayResult.costOfDelay / delayResult.corpusToday) * 100) : 0;
        donutCenterLabel = 'LOST SHARE';
        curveLine1 = 'Starting Today';
        curveLine2 = `Delaying by ${delayYearsLost}Y`;
        curvePoints = pts;
        awarenessPoints = [
          'TIME IN THE MARKET BEATS TIMING THE MARKET',
          'COST OF PROCRASTINATING ON COMPOUNDING',
          'STARTING EARLY MAXIMIZES COMPOUNDING POTENTIAL'
        ];
        break;
      }
      case 'insurance': {
        tableHeaders = ['EXPENSE FACTOR', 'BASIS', 'ESTIMATED NEED'];
        tableRows = [
          { col1: 'Income Replacement', col2: '15 Yrs Coverage', col3: formatINR(insResult.incomeReplacement) },
          { col1: 'Outstanding Debts', col2: 'Liabilities', col3: formatINR(insResult.liabilitiesCover) },
          { col1: 'Existing Investments', col2: 'Liquid Cushion', col3: `(-) ${formatINR(insSavings)}` },
          { col1: 'Pure Life Cover', col2: 'Net Protection Need', col3: formatINR(insResult.estimatedCoverNeed) }
        ];
        donutLabel1 = 'Liabilities & Debts';
        donutVal1 = insDebts;
        donutLabel2 = 'Income Replacement';
        donutVal2 = insResult.incomeReplacement;
        const insTotal = donutVal1 + donutVal2;
        donutCenterPercent = insTotal > 0 ? Math.round((donutVal2 / insTotal) * 100) : 0;
        donutCenterLabel = 'INCOME COVER';
        curveLine1 = 'Human Life Value (HLV)';
        curveLine2 = 'Debts & Obligations';
        curvePoints = [
          { xLabel: `Age ${insAge}`, y1: insResult.estimatedCoverNeed, y2: insDebts },
          { xLabel: `Age ${Math.round(insAge + (insRetAge - insAge) * 0.33)}`, y1: Math.round(insResult.estimatedCoverNeed * 0.8), y2: Math.round(insDebts * 0.7) },
          { xLabel: `Age ${Math.round(insAge + (insRetAge - insAge) * 0.66)}`, y1: Math.round(insResult.estimatedCoverNeed * 0.5), y2: Math.round(insDebts * 0.3) },
          { xLabel: `Age ${insRetAge}`, y1: Math.round(insResult.estimatedCoverNeed * 0.2), y2: 0 }
        ];
        awarenessPoints = [
          'PURE RISK PROTECTION VIA TERM INSURANCE',
          'ADEQUATE COVERAGE AGAINST LIABILITIES',
          'SECURING FAMILY LIVING STANDARDS'
        ];
        break;
      }
      case 'emi':
      case 'home-loan':
      case 'car-loan': {
        const isHl = activeSlug === 'home-loan';
        const isCar = activeSlug === 'car-loan';
        const loanP = isHl ? hlResult.loanAmount : isCar ? carResult.loanAmount : emiAmount;
        const totalInt = isHl ? hlResult.totalInterest : isCar ? carResult.totalInterest : emiResult.totalInterest;
        const totalPay = isHl ? hlResult.totalCostOfProperty : isCar ? carResult.totalAmountPaid : emiResult.totalPayment;
        const years = isHl ? hlYears : isCar ? carYears : emiYears;
        const rate = isHl ? hlRate : isCar ? carRate : emiRate;
        const mRate = rate / 100 / 12;
        const emiVal = isHl ? hlResult.monthlyEMI : isCar ? carResult.monthlyEMI : emiResult.monthlyEMI;

        tableHeaders = ['YEAR', 'PRINCIPAL PAID', 'REMAINING BALANCE'];
        const rows: { col1: string; col2: string; col3: string }[] = [];
        const pts: { xLabel: string; y1: number; y2: number }[] = [];
        let bal = loanP;
        let cumulativeInterest = 0;

        for (let y = 1; y <= years; y++) {
          let yrInterest = 0;
          let yrPrincipal = 0;
          for (let m = 0; m < 12; m++) {
            const intP = bal * mRate;
            const priP = emiVal - intP;
            yrInterest += intP;
            yrPrincipal += priP;
            bal -= priP;
          }
          cumulativeInterest += yrInterest;
          if (y % Math.max(1, Math.floor(years / 8)) === 0 || y === years || y === 1) {
            rows.push({
              col1: `Year ${y}`,
              col2: formatINR(Math.round(loanP - Math.max(0, bal))),
              col3: formatINR(Math.max(0, Math.round(bal)))
            });
            pts.push({
              xLabel: `Y${y}`,
              y1: Math.max(0, Math.round(bal)),
              y2: Math.round(cumulativeInterest)
            });
          }
        }
        tableRows = rows;
        donutLabel1 = 'Loan Principal';
        donutVal1 = loanP;
        donutLabel2 = 'Total Interest Payable';
        donutVal2 = totalInt;
        donutCenterPercent = totalPay > 0 ? Math.round((totalInt / totalPay) * 100) : 0;
        donutCenterLabel = 'INTEREST %';
        curveLine1 = 'Outstanding Loan Balance';
        curveLine2 = 'Cumulative Interest Paid';
        curvePoints = pts;
        awarenessPoints = [
          'UNDERSTANDING TRUE COMPOUNDED DEBT BURDEN',
          'BENEFIT OF PREPAYMENTS & EMIs ACCELERATION',
          'BALANCING EMIs WITH PARALLEL SIP INVESTING'
        ];
        break;
      }
      case 'tax': {
        tableHeaders = ['INCOME SLAB', 'NEW REGIME RATE', 'OLD REGIME RATE'];
        tableRows = [
          { col1: '₹0 - ₹3,00,000', col2: 'Nil', col3: 'Nil' },
          { col1: '₹3,00,001 - ₹6,00,000', col2: '5%', col3: '5% (above 2.5L)' },
          { col1: '₹6,00,001 - ₹9,00,000', col2: '10%', col3: '20%' },
          { col1: '₹9,00,001 - ₹12,00,000', col2: '15%', col3: '20%' },
          { col1: '₹12,00,001 - ₹15,00,000', col2: '20%', col3: '30%' },
          { col1: 'Above ₹15,00,000', col2: '30%', col3: '30%' }
        ];
        const netTakeHome = Math.max(0, taxIncome - taxResult.taxNewRegime);
        donutLabel1 = 'Net Take-Home';
        donutVal1 = netTakeHome;
        donutLabel2 = 'Tax Payable (New)';
        donutVal2 = taxResult.taxNewRegime;
        donutCenterPercent = taxIncome > 0 ? Math.round((taxResult.taxNewRegime / taxIncome) * 100) : 0;
        donutCenterLabel = 'EFFECTIVE TAX';
        curveLine1 = 'Tax Payable (New Regime)';
        curveLine2 = 'Tax Payable (Old Regime)';
        curvePoints = [
          { xLabel: '₹7.5L', y1: 0, y2: 30000 },
          { xLabel: '₹10L', y1: 52000, y2: 104000 },
          { xLabel: '₹12.5L', y1: 93600, y2: 182000 },
          { xLabel: '₹15L', y1: 145600, y2: 260000 },
          { xLabel: `₹${(taxIncome / 100000).toFixed(1)}L`, y1: taxResult.taxNewRegime, y2: taxResult.taxOldRegime }
        ];
        awarenessPoints = [
          'EVALUATING TAX DEDUCTIONS UNDER SECTION 80C',
          'EQUITY LINKED SAVINGS SCHEMES (ELSS) OVERVIEW',
          'ANNUAL TAX AWARENESS & REGIME OPTIMIZATION'
        ];
        break;
      }
      case 'marriage':
      case 'education':
      case 'vacation': {
        const isMarr = activeSlug === 'marriage';
        const isEdu = activeSlug === 'education';
        const years = isMarr ? marrYears : isEdu ? eduResult.yearsLeft : vacYears;
        const targetCorpus = isMarr ? marrResult.futureCost : isEdu ? eduResult.futureCost : vacResult.futureCost;
        const monthlySip = isMarr ? marrResult.monthlySIP : isEdu ? eduResult.monthlySIP : vacResult.monthlySIP;
        const totalInvested = monthlySip * years * 12;
        const rate = isMarr ? marrRate : isEdu ? eduRate : vacRate;
        const mRate = rate / 100 / 12;

        tableHeaders = ['YEAR', 'TOTAL INVESTED', 'FUTURE GOAL VALUE'];
        const rows: { col1: string; col2: string; col3: string }[] = [];
        const pts: { xLabel: string; y1: number; y2: number }[] = [];

        for (let y = 1; y <= years; y++) {
          const m = y * 12;
          const fv = monthlySip * (((Math.pow(1 + mRate, m) - 1) / mRate) * (1 + mRate));
          if (y % Math.max(1, Math.floor(years / 8)) === 0 || y === years || y === 1) {
            rows.push({
              col1: `Year ${y}`,
              col2: formatINR(Math.round(monthlySip * m)),
              col3: formatINR(Math.round(fv))
            });
            pts.push({
              xLabel: `Y${y}`,
              y1: Math.round(fv),
              y2: Math.round(monthlySip * m)
            });
          }
        }
        tableRows = rows;
        donutLabel1 = 'Total Savings Deployed';
        donutVal1 = totalInvested;
        donutLabel2 = 'Compounding Returns';
        donutVal2 = Math.max(0, targetCorpus - totalInvested);
        donutCenterPercent = targetCorpus > 0 ? Math.round((donutVal2 / targetCorpus) * 100) : 0;
        donutCenterLabel = 'GROWTH %';
        curveLine1 = 'Projected Corpus';
        curveLine2 = 'Invested Capital';
        curvePoints = pts;
        awarenessPoints = [
          'FACTORING IN REAL LIFESTYLE INFLATION',
          'DEDICATED GOAL-BASED ASSET ALLOCATION',
          'PEACE OF MIND WITH TIMELY SYSTEMATIC EXECUTION'
        ];
        break;
      }
    }

    return {
      tableHeaders,
      tableRows,
      donutLabel1,
      donutVal1,
      donutLabel2,
      donutVal2,
      donutCenterPercent,
      donutCenterLabel,
      curveLine1,
      curveLine2,
      curvePoints,
      awarenessPoints
    };
  }, [
    activeSlug,
    sipResult,
    lumpResult,
    swpResult,
    stpResult,
    retResult,
    delayResult,
    insResult,
    emiResult,
    taxResult,
    marrResult,
    eduResult,
    hlResult,
    carResult,
    vacResult,
    stpSource,
    stpMonthly,
    stpSourceRate,
    stpTargetRate,
    stpYears,
    retMonthlyExpense,
    retInflation,
    retCurrentAge,
    delayMonthly,
    delayYears,
    delayYearsLost,
    delayRate,
    insDebts,
    insSavings,
    insAge,
    insRetAge,
    emiAmount,
    emiYears,
    emiRate,
    hlPrice,
    hlDown,
    hlRate,
    hlYears,
    carPrice,
    carDown,
    carRate,
    carYears,
    taxIncome,
    marrCost,
    marrYears,
    marrInflation,
    marrRate,
    eduCost,
    eduInflation,
    eduRate,
    vacCost,
    vacYears,
    vacInflation,
    vacRate
  ]);

  return (
    <div className="w-full">
      {/* Interactive Workbench Container */}
      <div className="bg-slate-50/50 rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200 shadow-sm">

        {/* Top Bar: Badge, Title, Dropdown & Reset */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-slate-900 text-white text-[0.65rem] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                {currentCalc.category}
              </span>
              {currentCalc.isCoreTool && (
                <span className="bg-[#ffcc00] text-black font-extrabold text-[0.65rem] px-2.5 py-1 rounded uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  ★ CORE TOOL
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              {currentCalc.title}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              {currentCalc.desc}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-center">
            {/* Reset Button */}
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm"
              title="Reset to default values"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Dynamic Inputs & Results Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

          {/* Left Column: Interactive Sliders & Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  Parameters & Inputs
                </h3>
                <span className="bg-slate-900 text-white font-bold text-[0.7rem] px-2.5 py-1 rounded-md">
                  LIVE CALCULATION
                </span>
              </div>

              {/* 1. SIP INPUTS */}
              {activeSlug === 'sip' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Monthly Investment Amount
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(sipMonthly)}
                      </span>
                    </div>
                    <CalcSlider
                      min={500}
                      max={200000}
                      step={500}
                      value={sipMonthly}
                      onChange={setSipMonthly}
                      color="#f59e0b"
                    />
                    <div className="flex justify-between text-[0.7rem] text-slate-400 mt-1.5 font-medium">
                      <span>₹500</span>
                      <span>₹2,00,000</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Expected Return Rate (p.a)
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {sipRate}%
                      </span>
                    </div>
                    <CalcSlider
                      min={1}
                      max={30}
                      step={0.5}
                      value={sipRate}
                      onChange={setSipRate}
                      color="#f59e0b"
                    />
                    <div className="flex justify-between text-[0.7rem] text-slate-400 mt-1.5 font-medium">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Investment Horizon
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {sipYears} Years
                      </span>
                    </div>
                    <CalcSlider
                      min={1}
                      max={40}
                      step={1}
                      value={sipYears}
                      onChange={setSipYears}
                      color="#f59e0b"
                    />
                    <div className="flex justify-between text-[0.7rem] text-slate-400 mt-1.5 font-medium">
                      <span>1 Year</span>
                      <span>40 Years</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. LUMPSUM INPUTS */}
              {activeSlug === 'lumpsum' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Total Investment Amount
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(lumpPrincipal)}
                      </span>
                    </div>
                    <CalcSlider
                      min={5000}
                      max={5000000}
                      step={5000}
                      value={lumpPrincipal}
                      onChange={setLumpPrincipal}
                      color="#10b981"
                    />
                    <div className="flex justify-between text-[0.7rem] text-slate-400 mt-1.5 font-medium">
                      <span>₹5,000</span>
                      <span>₹50,00,000</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Expected Return Rate (p.a)
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {lumpRate}%
                      </span>
                    </div>
                    <CalcSlider
                      min={1}
                      max={30}
                      step={0.5}
                      value={lumpRate}
                      onChange={setLumpRate}
                      color="#10b981"
                    />
                    <div className="flex justify-between text-[0.7rem] text-slate-400 mt-1.5 font-medium">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Time Period
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {lumpYears} Years
                      </span>
                    </div>
                    <CalcSlider
                      min={1}
                      max={40}
                      step={1}
                      value={lumpYears}
                      onChange={setLumpYears}
                      color="#10b981"
                    />
                    <div className="flex justify-between text-[0.7rem] text-slate-400 mt-1.5 font-medium">
                      <span>1 Year</span>
                      <span>40 Years</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. SWP INPUTS */}
              {activeSlug === 'swp' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Initial Capital / Corpus
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(swpPrincipal)}
                      </span>
                    </div>
                    <CalcSlider
                      min={100000}
                      max={20000000}
                      step={50000}
                      value={swpPrincipal}
                      onChange={setSwpPrincipal}
                      color="#2563eb"
                    />
                    <div className="flex justify-between text-[0.7rem] text-slate-400 mt-1.5 font-medium">
                      <span>₹1,00,000</span>
                      <span>₹2,00,00,000</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Monthly Withdrawal Amount
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(swpMonthly)}
                      </span>
                    </div>
                    <CalcSlider
                      min={1000}
                      max={200000}
                      step={1000}
                      value={swpMonthly}
                      onChange={setSwpMonthly}
                      color="#2563eb"
                    />
                    <div className="flex justify-between text-[0.7rem] text-slate-400 mt-1.5 font-medium">
                      <span>₹1,000</span>
                      <span>₹2,00,000</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Expected Return ({swpRate}%)
                      </label>
                      <CalcSlider
                        min={1}
                        max={20}
                        step={0.5}
                        value={swpRate}
                        onChange={setSwpRate}
                        color="#2563eb"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Tenure ({swpYears} Years)
                      </label>
                      <CalcSlider
                        min={1}
                        max={30}
                        step={1}
                        value={swpYears}
                        onChange={setSwpYears}
                        color="#2563eb"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 4. STP INPUTS */}
              {activeSlug === 'stp' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Source Scheme Capital (Liquid / Debt)
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(stpSource)}
                      </span>
                    </div>
                    <CalcSlider
                      min={50000}
                      max={10000000}
                      step={50000}
                      value={stpSource}
                      onChange={setStpSource}
                      color="#db2777"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Monthly Transfer to Target Scheme (Equity)
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(stpMonthly)}
                      </span>
                    </div>
                    <CalcSlider
                      min={1000}
                      max={200000}
                      step={1000}
                      value={stpMonthly}
                      onChange={setStpMonthly}
                      color="#db2777"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Target Growth ({stpTargetRate}%)
                      </label>
                      <CalcSlider
                        min={1}
                        max={25}
                        step={0.5}
                        value={stpTargetRate}
                        onChange={setStpTargetRate}
                        color="#db2777"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Horizon ({stpYears} Years)
                      </label>
                      <CalcSlider
                        min={1}
                        max={20}
                        step={1}
                        value={stpYears}
                        onChange={setStpYears}
                        color="#db2777"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 5. RETIREMENT INPUTS */}
              {activeSlug === 'retirement' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Current Age</label>
                        <span className="font-bold text-xs bg-slate-100 px-2 py-0.5 rounded">{retCurrentAge} Yrs</span>
                      </div>
                      <CalcSlider
                        min={18}
                        max={60}
                        step={1}
                        value={retCurrentAge}
                        onChange={setRetCurrentAge}
                        color="#ea580c"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Retirement Age</label>
                        <span className="font-bold text-xs bg-slate-100 px-2 py-0.5 rounded">{retRetireAge} Yrs</span>
                      </div>
                      <CalcSlider
                        min={45}
                        max={75}
                        step={1}
                        value={retRetireAge}
                        onChange={setRetRetireAge}
                        color="#ea580c"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Current Monthly Living Expenses
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(retMonthlyExpense)}
                      </span>
                    </div>
                    <CalcSlider
                      min={10000}
                      max={500000}
                      step={5000}
                      value={retMonthlyExpense}
                      onChange={setRetMonthlyExpense}
                      color="#ea580c"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Inflation Rate ({retInflation}%)
                      </label>
                      <CalcSlider
                        min={3}
                        max={12}
                        step={0.5}
                        value={retInflation}
                        onChange={setRetInflation}
                        color="#ea580c"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Post-Retirement Return ({retPostRate}%)
                      </label>
                      <CalcSlider
                        min={4}
                        max={15}
                        step={0.5}
                        value={retPostRate}
                        onChange={setRetPostRate}
                        color="#ea580c"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 6. DELAY INPUTS */}
              {activeSlug === 'delay' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Target Monthly SIP Amount
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(delayMonthly)}
                      </span>
                    </div>
                    <CalcSlider
                      min={1000}
                      max={200000}
                      step={1000}
                      value={delayMonthly}
                      onChange={setDelayMonthly}
                      color="#475569"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Delay Period</label>
                        <span className="font-bold text-xs bg-slate-100 px-2 py-0.5 rounded">{delayYearsLost} Years</span>
                      </div>
                      <CalcSlider
                        min={1}
                        max={10}
                        step={1}
                        value={delayYearsLost}
                        onChange={setDelayYearsLost}
                        color="#475569"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Total Horizon</label>
                        <span className="font-bold text-xs bg-slate-100 px-2 py-0.5 rounded">{delayYears} Years</span>
                      </div>
                      <CalcSlider
                        min={3}
                        max={40}
                        step={1}
                        value={delayYears}
                        onChange={setDelayYears}
                        color="#475569"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                      Expected Return Rate ({delayRate}%)
                    </label>
                    <CalcSlider
                      min={1}
                      max={30}
                      step={0.5}
                      value={delayRate}
                      onChange={setDelayRate}
                      color="#475569"
                    />
                  </div>
                </div>
              )}

              {/* 7. INSURANCE INPUTS */}
              {activeSlug === 'insurance' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Annual Gross Income
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(insIncome)}
                      </span>
                    </div>
                    <CalcSlider
                      min={200000}
                      max={10000000}
                      step={50000}
                      value={insIncome}
                      onChange={setInsIncome}
                      color="#0d9488"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Outstanding Loans & Liabilities
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(insDebts)}
                      </span>
                    </div>
                    <CalcSlider
                      min={0}
                      max={20000000}
                      step={100000}
                      value={insDebts}
                      onChange={setInsDebts}
                      color="#0d9488"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Current Age ({insAge} Yrs)
                      </label>
                      <CalcSlider
                        min={20}
                        max={60}
                        step={1}
                        value={insAge}
                        onChange={setInsAge}
                        color="#0d9488"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Retire Age ({insRetAge} Yrs)
                      </label>
                      <CalcSlider
                        min={45}
                        max={70}
                        step={1}
                        value={insRetAge}
                        onChange={setInsRetAge}
                        color="#0d9488"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 8. EMI INPUTS */}
              {activeSlug === 'emi' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Total Loan Amount
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(emiAmount)}
                      </span>
                    </div>
                    <CalcSlider
                      min={50000}
                      max={20000000}
                      step={50000}
                      value={emiAmount}
                      onChange={setEmiAmount}
                      color="#9333ea"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Interest Rate (% p.a)
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {emiRate}%
                      </span>
                    </div>
                    <CalcSlider
                      min={4}
                      max={24}
                      step={0.25}
                      value={emiRate}
                      onChange={setEmiRate}
                      color="#9333ea"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Loan Tenure
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {emiYears} Years
                      </span>
                    </div>
                    <CalcSlider
                      min={1}
                      max={30}
                      step={1}
                      value={emiYears}
                      onChange={setEmiYears}
                      color="#9333ea"
                    />
                  </div>
                </div>
              )}

              {/* 9. TAX INPUTS */}
              {activeSlug === 'tax' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Annual Gross Income
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(taxIncome)}
                      </span>
                    </div>
                    <CalcSlider
                      min={300000}
                      max={10000000}
                      step={50000}
                      value={taxIncome}
                      onChange={setTaxIncome}
                      color="#059669"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        80C Deductions (ELSS, PPF, EPF)
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(tax80C)}
                      </span>
                    </div>
                    <CalcSlider
                      min={0}
                      max={150000}
                      step={5000}
                      value={tax80C}
                      onChange={setTax80C}
                      color="#059669"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        80D Health ({formatINR(tax80D)})
                      </label>
                      <CalcSlider
                        min={0}
                        max={100000}
                        step={5000}
                        value={tax80D}
                        onChange={setTax80D}
                        color="#059669"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Other ({formatINR(taxOther)})
                      </label>
                      <CalcSlider
                        min={0}
                        max={500000}
                        step={10000}
                        value={taxOther}
                        onChange={setTaxOther}
                        color="#059669"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 10. MARRIAGE INPUTS */}
              {activeSlug === 'marriage' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Wedding Budget at Current Costs
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(marrCost)}
                      </span>
                    </div>
                    <CalcSlider
                      min={200000}
                      max={20000000}
                      step={100000}
                      value={marrCost}
                      onChange={setMarrCost}
                      color="#f43f5e"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Years Until Wedding ({marrYears} Yrs)
                      </label>
                      <CalcSlider
                        min={1}
                        max={25}
                        step={1}
                        value={marrYears}
                        onChange={setMarrYears}
                        color="#f43f5e"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Expected Return ({marrRate}%)
                      </label>
                      <CalcSlider
                        min={4}
                        max={24}
                        step={0.5}
                        value={marrRate}
                        onChange={setMarrRate}
                        color="#f43f5e"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 11. EDUCATION INPUTS */}
              {activeSlug === 'education' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Current Cost of Higher Education
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(eduCost)}
                      </span>
                    </div>
                    <CalcSlider
                      min={200000}
                      max={20000000}
                      step={100000}
                      value={eduCost}
                      onChange={setEduCost}
                      color="#2563eb"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Child&apos;s Current Age ({eduAge} Yrs)
                      </label>
                      <CalcSlider
                        min={1}
                        max={17}
                        step={1}
                        value={eduAge}
                        onChange={setEduAge}
                        color="#2563eb"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        College Entry Age ({eduCollegeAge} Yrs)
                      </label>
                      <CalcSlider
                        min={17}
                        max={25}
                        step={1}
                        value={eduCollegeAge}
                        onChange={setEduCollegeAge}
                        color="#2563eb"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 12. HOME LOAN INPUTS */}
              {activeSlug === 'home-loan' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Property Value
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(hlPrice)}
                      </span>
                    </div>
                    <CalcSlider
                      min={1000000}
                      max={50000000}
                      step={500000}
                      value={hlPrice}
                      onChange={setHlPrice}
                      color="#dc2626"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Down Payment
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(hlDown)}
                      </span>
                    </div>
                    <CalcSlider
                      min={200000}
                      max={20000000}
                      step={100000}
                      value={hlDown}
                      onChange={setHlDown}
                      color="#dc2626"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Interest ({hlRate}% p.a)
                      </label>
                      <CalcSlider
                        min={5}
                        max={16}
                        step={0.1}
                        value={hlRate}
                        onChange={setHlRate}
                        color="#dc2626"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Tenure ({hlYears} Years)
                      </label>
                      <CalcSlider
                        min={5}
                        max={30}
                        step={1}
                        value={hlYears}
                        onChange={setHlYears}
                        color="#dc2626"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 13. CAR LOAN INPUTS */}
              {activeSlug === 'car-loan' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Vehicle On-Road Price
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(carPrice)}
                      </span>
                    </div>
                    <CalcSlider
                      min={200000}
                      max={10000000}
                      step={50000}
                      value={carPrice}
                      onChange={setCarPrice}
                      color="#334155"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Down Payment
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(carDown)}
                      </span>
                    </div>
                    <CalcSlider
                      min={50000}
                      max={5000000}
                      step={25000}
                      value={carDown}
                      onChange={setCarDown}
                      color="#334155"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Interest ({carRate}% p.a)
                      </label>
                      <CalcSlider
                        min={6}
                        max={18}
                        step={0.2}
                        value={carRate}
                        onChange={setCarRate}
                        color="#334155"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Tenure ({carYears} Years)
                      </label>
                      <CalcSlider
                        min={1}
                        max={8}
                        step={1}
                        value={carYears}
                        onChange={setCarYears}
                        color="#334155"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 14. VACATION INPUTS */}
              {activeSlug === 'vacation' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Vacation Cost at Current Prices
                      </label>
                      <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        {formatINRFull(vacCost)}
                      </span>
                    </div>
                    <CalcSlider
                      min={30000}
                      max={3000000}
                      step={10000}
                      value={vacCost}
                      onChange={setVacCost}
                      color="#0ea5e9"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Time Horizon ({vacYears} Years)
                      </label>
                      <CalcSlider
                        min={1}
                        max={10}
                        step={1}
                        value={vacYears}
                        onChange={setVacYears}
                        color="#0ea5e9"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                        Expected Return ({vacRate}%)
                      </label>
                      <CalcSlider
                        min={4}
                        max={18}
                        step={0.5}
                        value={vacRate}
                        onChange={setVacRate}
                        color="#0ea5e9"
                      />
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Educational Insight */}
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 sm:p-4 flex items-center gap-3 text-sky-950 text-xs sm:text-sm mt-6">
              <Lightbulb size={18} className="text-sky-600 flex-shrink-0" />
              <span>
                Systematic discipline and regular contributions help counter inflation while working toward your long-term milestones.
              </span>
            </div>
          </div>

          {/* Right Column: 3 Metric Summary Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Card 1: Primary Target (Deep Navy) */}
            <div className="bg-[#071426] text-white rounded-2xl p-6 border border-[#0d223f] shadow-lg flex flex-col justify-between flex-1 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#8ec61f]/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <TrendingUp size={15} className="text-[#8ec61f]" />
                  <span>
                    {activeSlug === 'sip' && 'FUTURE CORPUS'}
                    {activeSlug === 'lumpsum' && 'MATURITY VALUE'}
                    {activeSlug === 'swp' && 'REMAINING BALANCE'}
                    {activeSlug === 'stp' && 'TARGET VALUE'}
                    {activeSlug === 'retirement' && 'REQUIRED CORPUS'}
                    {activeSlug === 'delay' && 'COST OF DELAY'}
                    {activeSlug === 'insurance' && 'INDICATIVE LIFE COVER NEED'}
                    {activeSlug === 'emi' && 'MONTHLY EMI'}
                    {activeSlug === 'tax' && 'NEW REGIME TAX'}
                    {activeSlug === 'marriage' && 'FUTURE WEDDING EXPENSE'}
                    {activeSlug === 'education' && 'FUTURE EDUCATION CORPUS'}
                    {activeSlug === 'home-loan' && 'MONTHLY HOME EMI'}
                    {activeSlug === 'car-loan' && 'MONTHLY CAR EMI'}
                    {activeSlug === 'vacation' && 'FUTURE VACATION BUDGET'}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#8ec61f] tracking-tight">
                  {activeSlug === 'sip' && formatINR(sipResult.futureValue)}
                  {activeSlug === 'lumpsum' && formatINR(lumpResult.futureValue)}
                  {activeSlug === 'swp' && formatINR(swpResult.remainingBalance)}
                  {activeSlug === 'stp' && formatINR(stpResult.targetCorpus)}
                  {activeSlug === 'retirement' && formatINR(retResult.requiredCorpus)}
                  {activeSlug === 'delay' && formatINR(delayResult.costOfDelay)}
                  {activeSlug === 'insurance' && formatINR(insResult.estimatedCoverNeed)}
                  {activeSlug === 'emi' && formatINR(emiResult.monthlyEMI)}
                  {activeSlug === 'tax' && formatINR(taxResult.taxNewRegime)}
                  {activeSlug === 'marriage' && formatINR(marrResult.futureCost)}
                  {activeSlug === 'education' && formatINR(eduResult.futureCost)}
                  {activeSlug === 'home-loan' && formatINR(hlResult.monthlyEMI)}
                  {activeSlug === 'car-loan' && formatINR(carResult.monthlyEMI)}
                  {activeSlug === 'vacation' && formatINR(vacResult.futureCost)}
                </div>
              </div>
              <div className="text-xs text-slate-400 mt-4 font-medium">
                {activeSlug === 'delay' ? 'Potential growth forgone due to delay' : 'Terminal estimated outcome'}
              </div>
            </div>

            {/* Card 2: Secondary Metric */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  <DollarSign size={14} className="text-slate-400" />
                  <span>
                    {activeSlug === 'sip' && 'TOTAL INVESTED'}
                    {activeSlug === 'lumpsum' && 'PRINCIPAL INVESTED'}
                    {activeSlug === 'swp' && 'TOTAL WITHDRAWN'}
                    {activeSlug === 'stp' && 'SOURCE REMAINING'}
                    {activeSlug === 'retirement' && 'MONTHLY SIP NEEDED'}
                    {activeSlug === 'delay' && 'VALUE IF STARTED TODAY'}
                    {activeSlug === 'insurance' && 'INCOME REPLACEMENT'}
                    {activeSlug === 'emi' && 'TOTAL INTEREST PAYABLE'}
                    {activeSlug === 'tax' && 'OLD REGIME TAX'}
                    {activeSlug === 'marriage' && 'REQUIRED MONTHLY SIP'}
                    {activeSlug === 'education' && 'REQUIRED MONTHLY SIP'}
                    {activeSlug === 'home-loan' && 'TOTAL INTEREST'}
                    {activeSlug === 'car-loan' && 'TOTAL INTEREST'}
                    {activeSlug === 'vacation' && 'REQUIRED MONTHLY SIP'}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeSlug === 'sip' && formatINR(sipResult.totalInvested)}
                  {activeSlug === 'lumpsum' && formatINR(lumpResult.totalInvested)}
                  {activeSlug === 'swp' && formatINR(swpResult.totalWithdrawn)}
                  {activeSlug === 'stp' && formatINR(stpResult.sourceBalance)}
                  {activeSlug === 'retirement' && formatINR(retResult.monthlySIP)}
                  {activeSlug === 'delay' && formatINR(delayResult.corpusToday)}
                  {activeSlug === 'insurance' && formatINR(insResult.incomeReplacement)}
                  {activeSlug === 'emi' && formatINR(emiResult.totalInterest)}
                  {activeSlug === 'tax' && formatINR(taxResult.taxOldRegime)}
                  {activeSlug === 'marriage' && formatINR(marrResult.monthlySIP)}
                  {activeSlug === 'education' && formatINR(eduResult.monthlySIP)}
                  {activeSlug === 'home-loan' && formatINR(hlResult.totalInterest)}
                  {activeSlug === 'car-loan' && formatINR(carResult.totalInterest)}
                  {activeSlug === 'vacation' && formatINR(vacResult.monthlySIP)}
                </div>
              </div>
              <div className="text-xs text-slate-500 mt-2 font-medium">
                Baseline Financial Requirement
              </div>
            </div>

            {/* Card 3: Growth / Advantage Metric */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  <Sparkles size={14} className="text-emerald-600" />
                  <span>
                    {activeSlug === 'sip' && 'ESTIMATED GAIN'}
                    {activeSlug === 'lumpsum' && 'ESTIMATED GAIN'}
                    {activeSlug === 'swp' && 'NET GAIN'}
                    {activeSlug === 'stp' && 'COMBINED VALUE'}
                    {activeSlug === 'retirement' && 'MONTHLY EXPENSE AT RETIREMENT'}
                    {activeSlug === 'delay' && 'VALUE IF DELAYED'}
                    {activeSlug === 'insurance' && 'LIABILITIES COVERED'}
                    {activeSlug === 'emi' && 'TOTAL PAYMENT (PRINCIPAL + INT)'}
                    {activeSlug === 'tax' && 'POTENTIAL TAX SAVING (ELSS)'}
                    {activeSlug === 'marriage' && 'SELF-INVESTED CAPITAL'}
                    {activeSlug === 'education' && 'YEARS REMAINING'}
                    {activeSlug === 'home-loan' && 'TOTAL COST OF PROPERTY'}
                    {activeSlug === 'car-loan' && 'TOTAL AMOUNT PAID'}
                    {activeSlug === 'vacation' && 'TOTAL SAVINGS ACCUMULATED'}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
                  {activeSlug === 'sip' && formatINR(sipResult.estimatedGain)}
                  {activeSlug === 'lumpsum' && formatINR(lumpResult.estimatedGain)}
                  {activeSlug === 'swp' && formatINR(swpResult.netGrowth)}
                  {activeSlug === 'stp' && formatINR(stpResult.totalCombined)}
                  {activeSlug === 'retirement' && formatINR(retResult.futureMonthlyExpense)}
                  {activeSlug === 'delay' && formatINR(delayResult.corpusDelayed)}
                  {activeSlug === 'insurance' && formatINR(insResult.liabilitiesCover)}
                  {activeSlug === 'emi' && formatINR(emiResult.totalPayment)}
                  {activeSlug === 'tax' && formatINR(taxResult.elssTaxSaving)}
                  {activeSlug === 'marriage' && formatINR(marrResult.totalInvested)}
                  {activeSlug === 'education' && `${eduResult.yearsLeft} Years`}
                  {activeSlug === 'home-loan' && formatINR(hlResult.totalCostOfProperty)}
                  {activeSlug === 'car-loan' && formatINR(carResult.totalAmountPaid)}
                  {activeSlug === 'vacation' && formatINR(vacResult.totalSaved)}
                </div>
              </div>
              <div className="text-xs text-slate-500 mt-2 font-medium">
                Compounded growth or financial benefit
              </div>
            </div>

          </div>
        </div>

        {/* Middle Row matching Image 2: Year-by-Year Table (~50%) and Donut + Investor Card (~50%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Left: Schedule / Breakdown Table (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-[#071426] text-white px-5 py-3.5 flex items-center justify-between">
              <span className="font-extrabold text-xs tracking-wider uppercase">{chartData.tableHeaders[0]}</span>
              <span className="font-extrabold text-xs tracking-wider uppercase">{chartData.tableHeaders[1]}</span>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs tracking-wider uppercase">{chartData.tableHeaders[2]}</span>
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
              className="divide-y divide-slate-100 max-h-[360px] overflow-y-auto custom-scrollbar scroll-smooth"
            >
              {chartData.tableRows.map((item, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2.5 flex items-center justify-between text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-700">{item.col1}</span>
                  <span className="text-slate-600 font-medium">{item.col2}</span>
                  <span className="font-extrabold text-emerald-600">{item.col3}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Donut Chart & Investor Awareness (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Donut Chart: Yield Breakdown matching Image 2 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col items-center justify-center">
              <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4 self-start">
                YIELD BREAKDOWN
              </div>

              {/* SVG Donut Ring matching Image 2 */}
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#94a3b8"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  {/* Foreground arc */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#8ec61f"
                    strokeWidth="12"
                    strokeDasharray={`${Math.min(251.2, Math.max(0, (chartData.donutCenterPercent * 251.2) / 100))} 251.2`}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-[0.65rem] font-extrabold text-slate-400 uppercase">
                    {chartData.donutCenterLabel}
                  </div>
                  <div className="text-2xl font-black text-slate-900">
                    {chartData.donutCenterPercent}%
                  </div>
                </div>
              </div>

              {/* Donut Legend */}
              <div className="flex items-center gap-6 mt-4 text-xs font-semibold">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-400 inline-block" />
                  <span className="text-slate-600">{chartData.donutLabel1}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#8ec61f] inline-block" />
                  <span className="text-slate-800">{chartData.donutLabel2}</span>
                </div>
              </div>
            </div>

            {/* Investor Awareness Card (Deep Navy) matching Image 2 */}
            <div className="bg-[#071426] text-white rounded-2xl p-5 sm:p-6 border border-[#0d223f] shadow-md flex flex-col justify-between flex-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                <ShieldCheck size={16} className="text-[#8ec61f]" />
                <span>INVESTOR AWARENESS</span>
              </div>

              <div className="space-y-2 mb-5 text-xs sm:text-sm text-slate-200">
                {chartData.awarenessPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#8ec61f] flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
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

        {/* Bottom Row: Compound Growth Curve Line Chart matching Image 2 */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base uppercase tracking-wider">
              COMPOUND GROWTH CURVE
            </h4>
            <div className="flex items-center gap-5 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-0.5 bg-[#2563eb] inline-block" />
                <span className="text-slate-700">{chartData.curveLine1}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-0.5 border-t border-dashed border-slate-400 inline-block" />
                <span className="text-slate-500">{chartData.curveLine2}</span>
              </div>
            </div>
          </div>

          {/* SVG Curve with dynamic scaling */}
          <div className="w-full h-52 sm:h-64">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
              {/* Horizontal Grid lines */}
              <line x1="0" y1="180" x2="500" y2="180" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="120" x2="500" y2="120" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="60" x2="500" y2="60" stroke="#f1f5f9" strokeWidth="1" />

              {(() => {
                const pts = chartData.curvePoints;
                if (!pts || pts.length === 0) return null;
                const maxY = Math.max(1, ...pts.map((p) => Math.max(p.y1, p.y2)));
                const n = pts.length;
                const xStep = 460 / Math.max(1, n - 1);

                const pathD1 = pts
                  .map((p, idx) => {
                    const x = 20 + idx * xStep;
                    const y = 180 - (p.y1 / maxY) * 150;
                    return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
                  })
                  .join(' ');

                const pathD2 = pts
                  .map((p, idx) => {
                    const x = 20 + idx * xStep;
                    const y = 180 - (p.y2 / maxY) * 150;
                    return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
                  })
                  .join(' ');

                return (
                  <>
                    {/* Line 2 (Dashed - Invested/Source) */}
                    <path
                      d={pathD2}
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />

                    {/* Line 1 (Solid - Target/Growth) */}
                    <path
                      d={pathD1}
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="3"
                    />

                    {/* Render data points */}
                    {pts.map((p, idx) => {
                      const x = 20 + idx * xStep;
                      const y1 = 180 - (p.y1 / maxY) * 150;
                      const y2 = 180 - (p.y2 / maxY) * 150;
                      return (
                        <g key={idx}>
                          <circle cx={x} cy={y1} r="4" fill="#2563eb" />
                          <circle cx={x} cy={y2} r="3" fill="#94a3b8" />
                        </g>
                      );
                    })}
                  </>
                );
              })()}
            </svg>
          </div>

          {/* X-Axis Ticks */}
          <div className="flex justify-between text-[0.72rem] text-slate-400 font-bold mt-2 px-3">
            {chartData.curvePoints.map((pt, idx) => (
              <span key={idx}>{pt.xLabel}</span>
            ))}
          </div>
        </div>

        {/* Statutory Disclaimer Footer matching Image 2 */}
        <div className="text-[0.72rem] text-slate-400 leading-relaxed flex items-start gap-2 pt-2 mb-6">
          <Info size={14} className="text-slate-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Disclaimer:</strong> This calculator is an educational illustration using assumed compounding rates. It is not a promise or guarantee of returns. Mutual fund investments are subject to market risks; read all scheme related documents carefully before investing.
          </p>
        </div>

        {/* CTA Banner inside interactive workbench */}
        <div className="bg-[#071426] text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">
                Need assistance with mutual fund transactions or scheme details?
              </h4>
              <p className="text-slate-400 text-xs mt-0.5">
                Connect with our AMFI-registered mutual fund distributor team for transaction support.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition-all flex-shrink-0 shadow-md"
          >
            <span>Contact Our Team</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
}
