export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  iconName: string;
  category: string;
  badge: string;
  badgeBg: string;
  image: string;
  suitability: string;
  metric: string;
  overview: string;
  keyFeatures: { title: string; desc: string }[];
  regulatoryNote: string;
  calculatorLink?: { label: string; href: string };
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "mutual-funds",
    slug: "mutual-funds",
    title: "Mutual Funds",
    subtitle: "Mutual fund investment solutions",
    shortDesc: "Distribution support across equity, debt, hybrid and other mutual fund categories with transparent, paperless onboarding and disciplined SIP facilitation.",
    iconName: "Landmark",
    category: "Mutual Funds",
    badge: "AMFI Regulated",
    badgeBg: "#2563eb",
    image: "/images/services/mutual-funds.jpg",
    suitability: "All Long-Term & SIP Investors",
    metric: "40+ Registered AMCs",
    overview: "We facilitate seamless access to open-ended and closed-ended mutual fund schemes across leading Asset Management Companies (AMCs) in India. Our distribution services assist investors with scheme documentation, application processing, and purchase/redemption routing through recognized industry transaction platforms.",
    keyFeatures: [
      { title: "Broad Scheme Selection", desc: "Access equity, debt, hybrid, and solution-oriented schemes across leading Indian AMCs." },
      { title: "Paperless Digital e-KYC", desc: "Fast, seamless digital investor onboarding and instant folio allotment." },
      { title: "Automated SIP Setups", desc: "Set up monthly SIPs via convenient NPCI e-NACH bank mandates." },
      { title: "Consolidated Folio Tracking", desc: "Consolidated folio tracking, statements of accounts, and regular updates." }
    ],
    regulatoryNote: "Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing. ARN-362861.",
    calculatorLink: { label: "SIP Growth Calculator", href: "/calculators" }
  },
  {
    id: "life-insurance",
    slug: "life-insurance",
    title: "Life Insurance",
    subtitle: "Life insurance solutions",
    shortDesc: "Protection-first pure term life insurance to help secure your family's financial future against life's unforeseen uncertainties.",
    iconName: "Heart",
    category: "Insurance",
    badge: "Family Protection",
    badgeBg: "#ef4444",
    image: "/images/services/life-insurance.jpg",
    suitability: "Families & Primary Income Earners",
    metric: "Up to 100x Annual Income",
    overview: "Life insurance is the bedrock of disciplined family financial security. We assist clients in evaluating pure term life protection policies with high claim settlement ratios, comprehensive accidental disability riders, and critical illness safeguards.",
    keyFeatures: [
      { title: "Pure Term Protection", desc: "High life coverage at affordable premiums to secure dependents." },
      { title: "Critical Illness Riders", desc: "Lump-sum payouts upon diagnosis of covered critical medical conditions." },
      { title: "Claim Assistance", desc: "Dedicated liaison and paperwork support for prompt nominee claim processing." },
      { title: "Tax Benefits", desc: "Tax exemption under Section 80C and tax-free claim proceeds under Section 10(10D)." }
    ],
    regulatoryNote: "Insurance products are subject to underwriting terms, policy exclusions, and IRDAI regulations. Read policy terms before purchase.",
    calculatorLink: { label: "Connect with Team", href: "/contact" }
  },
  {
    id: "health-insurance",
    slug: "health-insurance",
    title: "Health Insurance",
    subtitle: "Health insurance solutions",
    shortDesc: "Comprehensive medical emergency and hospitalization cover with cashless claims facility across 10,000+ network hospitals nationwide.",
    iconName: "ShieldCheck",
    category: "Healthcare Protection",
    badge: "Cashless Network",
    badgeBg: "#10b981",
    image: "/images/services/health-insurance.jpg",
    suitability: "Individuals & Nuclear / Joint Families",
    metric: "10,000+ Network Hospitals",
    overview: "Medical inflation in India often strains personal finances during unexpected hospitalizations. Our health coverage facilitation includes comprehensive family floater plans, super top-ups, restoration benefits, and cashless hospital admission facilities.",
    keyFeatures: [
      { title: "Cashless Hospitalization", desc: "Immediate pre-authorization across 10,000+ accredited hospitals nationwide." },
      { title: "Zero Room Rent Capping", desc: "Policies with no sub-limits on room rent or ICU charges." },
      { title: "Annual Preventive Checkups", desc: "Complimentary full body health checkups for all covered family members." },
      { title: "Section 80D Tax Relief", desc: "Deductions up to ₹25,000 for family and ₹50,000 for senior citizen parents." }
    ],
    regulatoryNote: "Health insurance policies are underwritten by IRDAI-licensed general and standalone health insurance companies.",
    calculatorLink: { label: "Inquire on Health Cover", href: "/contact" }
  },
  {
    id: "tax-saving-investments",
    slug: "tax-saving-investments",
    title: "Tax-Saving Investments",
    subtitle: "Tax saving & ELSS solutions",
    shortDesc: "Systematic tax awareness through Section 80C, 80D, 80CCD, ELSS mutual funds, and long-term capital gains tax provisions.",
    iconName: "Sparkles",
    category: "Tax Awareness",
    badge: "Section 80C & 80D",
    badgeBg: "#f59e0b",
    image: "/images/services/tax-saving.jpg",
    suitability: "Salaried Professionals & Business Owners",
    metric: "Save up to ₹46,800/yr",
    overview: "Tax efficiency allows investors to retain more of their compound returns. We educate investors on Equity Linked Savings Schemes (ELSS), which offer the shortest statutory lock-in period of 3 years compared to traditional options like PPF or 5-year FDs.",
    keyFeatures: [
      { title: "Shortest 3-Year Lock-in", desc: "Earliest liquidity among all Section 80C instruments." },
      { title: "Dual Advantage", desc: "Tax deduction benefits combined with long-term equity compounding." },
      { title: "SIP into ELSS", desc: "Spread tax investments throughout the year instead of last-minute panic." },
      { title: "Instant Statement Generation", desc: "Download verified tax statement certificates for employer submissions." }
    ],
    regulatoryNote: "Tax deductions depend on the investor's chosen income tax regime (old vs new regime). Consult a chartered accountant for personalized advice.",
    calculatorLink: { label: "Calculate Tax Saving", href: "/calculators" }
  },
  {
    id: "loan-against-mf",
    slug: "loan-against-mf",
    title: "Loan Against MFs",
    subtitle: "Instant liquidity against mutual fund units",
    shortDesc: "Instant digital liquidity in 15 minutes by pledging your mutual funds without selling units or stopping long-term compounding.",
    iconName: "Coins",
    category: "Liquidity Solutions",
    badge: "100% Digital Pledge",
    badgeBg: "#6366f1",
    image: "/images/services/loan-against-mf.jpg",
    suitability: "Investors Seeking Emergency Liquidity",
    metric: "Instant Approval in 15 Mins",
    overview: "When emergency cash needs arise, redeeming equity or debt mutual funds triggers capital gains tax and interrupts compound growth. A digital Loan Against Mutual Funds (LAMF) enables instant overdraft access by lien-marking fund units without liquidating them.",
    keyFeatures: [
      { title: "Zero Unit Liquidation", desc: "Your mutual fund units remain invested in the market, continuing to participate in potential compounding and market movements." },
      { title: "Interest Only on Utilization", desc: "Overdraft facility where you only pay interest on the amount actually drawn." },
      { title: "No Prepayment Penalties", desc: "Repay whenever convenient without foreclosure or prepayment charges." },
      { title: "Fast Digital Sanction", desc: "Complete paperless digital pledging through RTA OTP verification." }
    ],
    regulatoryNote: "Loans against mutual funds are disbursed by authorized RBI-regulated NBFCs and banks subject to credit evaluation and pledge verification.",
    calculatorLink: { label: "Inquire on LAMF", href: "/contact" }
  },
  {
    id: "nps-pension",
    slug: "nps-pension",
    title: "NPS",
    subtitle: "National Pension System solutions",
    shortDesc: "Government-backed voluntary pension engine with lowest industry fees and exclusive Section 80CCD extra tax deduction.",
    iconName: "Building2",
    category: "Retirement & Pension",
    badge: "PFRDA Regulated",
    badgeBg: "#06b6d4",
    image: "/images/services/nps.jpg",
    suitability: "Salaried & Self-Employed for Retirement",
    metric: "Extra ₹50,000 Tax Deduction",
    overview: "The National Pension System (NPS) is a voluntary, contribution-based retirement vehicle governed by the Pension Fund Regulatory and Development Authority (PFRDA). It offers professional pension fund management, dynamic asset choice, and dedicated retirement corpus accumulation.",
    keyFeatures: [
      { title: "Exclusive ₹50,000 Deduction", desc: "Additional tax deduction under Section 80CCD(1B) over and above Section 80C." },
      { title: "Choice of Asset Classes", desc: "Flexible allocation across Equity (E), Corporate Debt (C), and Government Bonds (G)." },
      { title: "Ultra-Low Cost Structure", desc: "Among the world's most cost-effective institutional pension structures." },
      { title: "Structured Monthly Pension", desc: "Structured monthly annuity pension alongside 60% tax-free lump-sum withdrawal at 60." }
    ],
    regulatoryNote: "NPS is regulated by the Pension Fund Regulatory and Development Authority (PFRDA). Annuity returns depend on prevailing market rates.",
    calculatorLink: { label: "Retirement Calculator", href: "/calculators" }
  }
];
