import React from 'react';

export type CalculatorSlug =
  | 'sip'
  | 'lumpsum'
  | 'swp'
  | 'stp'
  | 'retirement'
  | 'delay'
  | 'insurance'
  | 'emi'
  | 'tax'
  | 'marriage'
  | 'education'
  | 'home-loan'
  | 'car-loan'
  | 'vacation';

export type CalculatorCategory = 'INVESTMENT' | 'SOLUTION' | 'LOAN' | 'TAX';

export interface CalculatorCardDef {
  id: CalculatorSlug;
  title: string;
  category: CalculatorCategory;
  isCoreTool: boolean;
  desc: string;
  badgeLabel: string;
  iconBg: string;
  badgeColor?: string;
  iconName: string;
}

export const ALL_CALCULATORS: CalculatorCardDef[] = [
  {
    id: 'sip',
    title: 'SIP Calculator',
    category: 'INVESTMENT',
    isCoreTool: true,
    badgeLabel: 'LONG-TERM COMPOUNDING',
    desc: 'Simulate regular monthly mutual fund compounding returns over extended horizons.',
    iconBg: '#10b981', // emerald green
    iconName: 'TrendingUp'
  },
  {
    id: 'lumpsum',
    title: 'Lumpsum Calculator',
    category: 'INVESTMENT',
    isCoreTool: true,
    badgeLabel: 'ONE-TIME GROWTH',
    desc: 'Estimate prospective compounding growth for one-time lump sum mutual fund investments.',
    iconBg: '#10b981',
    iconName: 'PiggyBank'
  },
  {
    id: 'swp',
    title: 'SWP Calculator',
    category: 'INVESTMENT',
    isCoreTool: false,
    badgeLabel: 'REGULAR CASHFLOW',
    desc: 'Calculate periodic post-retirement cash withdrawals while keeping remaining corpus invested.',
    iconBg: '#2563eb',
    iconName: 'ArrowLeftRight'
  },
  {
    id: 'stp',
    title: 'STP Calculator',
    category: 'INVESTMENT',
    isCoreTool: false,
    badgeLabel: 'SYSTEMATIC TRANSFER',
    desc: 'Simulate periodic transfers from liquid funds into equity funds for rupee-cost averaging.',
    iconBg: '#db2777',
    iconName: 'Repeat'
  },
  {
    id: 'retirement',
    title: 'Retirement Calculator',
    category: 'SOLUTION',
    isCoreTool: true,
    badgeLabel: 'POST-WORK CORPUS',
    desc: 'Determine your required retirement nest egg adjusted for projected inflation and longevity.',
    iconBg: '#ea580c',
    iconName: 'ShieldCheck'
  },
  {
    id: 'delay',
    title: 'Delay Cost Calculator',
    category: 'INVESTMENT',
    isCoreTool: false,
    badgeLabel: 'OPPORTUNITY COST',
    desc: 'Analyze the mathematical cost of delaying your investment start date by months or years.',
    iconBg: '#1e293b',
    iconName: 'Clock'
  },
  {
    id: 'insurance',
    title: 'Insurance Calculator',
    category: 'SOLUTION',
    isCoreTool: false,
    badgeLabel: 'PROTECTION SHIELD',
    desc: 'Assess realistic family term life insurance cover needs based on human life value concepts.',
    iconBg: '#0d9488',
    iconName: 'Umbrella'
  },
  {
    id: 'emi',
    title: 'Loan EMI Calculator',
    category: 'LOAN',
    isCoreTool: true,
    badgeLabel: 'LOAN REPAYMENT',
    desc: 'Compute exact monthly loan repayments, aggregate interest costs, and amortization schedules.',
    iconBg: '#7c3aed',
    iconName: 'Calculator'
  },
  {
    id: 'tax',
    title: 'Tax Estimator',
    category: 'TAX',
    isCoreTool: false,
    badgeLabel: 'TAX LIABILITY',
    desc: 'Approximate taxable income and comparative tax liability under the new income tax regimes.',
    iconBg: '#059669',
    iconName: 'FileText'
  },
  {
    id: 'marriage',
    title: 'Marriage Goal Calculator',
    category: 'SOLUTION',
    isCoreTool: false,
    badgeLabel: 'LIFE MILESTONE',
    desc: 'Forecast milestone wedding costs adjusted for lifestyle inflation and compute targeted SIPs.',
    iconBg: '#f43f5e',
    iconName: 'Heart'
  },
  {
    id: 'education',
    title: 'Education Calculator',
    category: 'SOLUTION',
    isCoreTool: false,
    badgeLabel: 'HIGHER LEARNING',
    desc: 'Compute future higher education expenditure adjusted for higher education inflation indices.',
    iconBg: '#2563eb',
    iconName: 'GraduationCap'
  },
  {
    id: 'home-loan',
    title: 'Home Loan Calculator',
    category: 'LOAN',
    isCoreTool: false,
    badgeLabel: 'PROPERTY FINANCE',
    desc: 'Estimate housing loan installments, total interest burden, and loan payoff horizons.',
    iconBg: '#dc2626',
    iconName: 'Home'
  },
  {
    id: 'car-loan',
    title: 'Car Loan Calculator',
    category: 'LOAN',
    isCoreTool: false,
    badgeLabel: 'AUTO FINANCING',
    desc: 'Estimate vehicle loan installments and understand the true cost of automobile debt.',
    iconBg: '#334155',
    iconName: 'Car'
  },
  {
    id: 'vacation',
    title: 'Vacation Goal Calculator',
    category: 'SOLUTION',
    isCoreTool: false,
    badgeLabel: 'LEISURE GOAL',
    desc: 'Estimate savings needed for family international or domestic vacations without breaking into core investments.',
    iconBg: '#0ea5e9',
    iconName: 'Plane'
  }
];

// Number formatting helpers
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
