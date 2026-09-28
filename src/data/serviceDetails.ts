export interface ServiceDetailMetric {
  label: string;
  value: string;
}

export interface StrategicHighlight {
  num: string;
  title: string;
  desc: string;
}

export interface WorkflowStep {
  num: string;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  badge: string;
  description: string;
  metrics: ServiceDetailMetric[];
  image: string;
  imageBadgeTop: string;
  imageBadgeBottom: string;
  strategicTitle: string;
  strategicSubtitle: string;
  strategicHighlights: StrategicHighlight[];
  workflowTitle: string;
  workflowSubtitle: string;
  workflowSteps: WorkflowStep[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: ServiceFAQ[];
  complianceNotice: string;
  ctaTitle: string;
  ctaSubtitle: string;
  onboardingUrl?: string;
  consultationUrl?: string;
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'mutual-funds': {
    slug: 'mutual-funds',
    badge: 'LONG-TERM COMPOUNDING',
    title: 'Mutual Funds Overview',
    description:
      'Mutual funds are professionally managed collective investment vehicles that pool capital from multiple investors to purchase a diversified basket of equities, debt securities, and money market instruments. As an AMFI-registered Mutual Fund Distributor, Attitude Financial Services facilitates seamless mutual fund transactions, systematic investment plans (SIPs), folio visibility, and statement management.',
    metrics: [
      { label: 'MINIMUM SIP', value: 'From ₹500 / mo' },
      { label: 'LIQUIDITY', value: 'T+1 / T+2 Days' },
      { label: 'ASSET CLASSES', value: 'Equity, Debt, Hybrid' },
      { label: 'REGULATOR', value: 'SEBI Governed' }
    ],
    image: '/images/services/mutual-funds.jpg',
    imageBadgeTop: 'Long-Term Compounding',
    imageBadgeBottom: 'SEBI Regulated Framework',
    strategicTitle: 'Key Advantages & Highlights',
    strategicSubtitle: 'STRATEGIC VALUE',
    strategicHighlights: [
      {
        num: '01',
        title: 'Professional Management & Diversification',
        desc: 'Asset Management Companies (AMCs) deploy dedicated fund managers and research analysts to allocate capital across sectors and market capitalizations, minimizing unsystematic risk.'
      },
      {
        num: '02',
        title: 'Systematic Investment Plan (SIP) Power',
        desc: 'Automate monthly or quarterly investments to benefit from rupee-cost averaging, eliminating the need to time volatile market cycles while harnessing compounding.'
      },
      {
        num: '03',
        title: 'High Transparency & Daily NAV',
        desc: 'Schemes disclose transparent Net Asset Value (NAV) daily, along with monthly fact sheets detailing exact portfolio holdings, sector weights, and expense ratios (TER).'
      },
      {
        num: '04',
        title: 'Strict Regulatory Investor Protections',
        desc: 'Governed under strict SEBI mutual fund regulations ensuring segregated client accounts, transparent custodian holding, and clear nomination mandates.'
      }
    ],
    workflowTitle: 'How It Works in 3 Easy Steps',
    workflowSubtitle: 'EXECUTION WORKFLOW',
    workflowSteps: [
      {
        num: '01',
        title: 'Paperless e-KYC',
        desc: 'Complete 5-minute digital KYC with PAN, Aadhaar & bank verification.'
      },
      {
        num: '02',
        title: 'Explore Schemes',
        desc: 'Review scheme categories, investment horizon, and risk profiles.'
      },
      {
        num: '03',
        title: 'Automate & Track',
        desc: 'Set up automated monthly SIPs and track folios in real time.'
      }
    ],
    faqTitle: 'Mutual Funds FAQs',
    faqSubtitle: 'Common questions, tax implications, and regulatory provisions.',
    faqs: [
      {
        q: 'What is a mutual fund and how does it operate?',
        a: 'A mutual fund pools money from multiple investors to invest in a diversified portfolio of stocks, bonds, or money market instruments managed by SEBI-registered Asset Management Companies (AMCs). Investors are allocated units proportional to their investment value based on the scheme Net Asset Value (NAV).'
      },
      {
        q: 'What is a Systematic Investment Plan (SIP) and why is it beneficial?',
        a: 'A Systematic Investment Plan (SIP) allows you to invest a fixed sum regularly (monthly or quarterly) into a mutual fund scheme. SIP enforces financial discipline, utilizes rupee-cost averaging to buy more units when markets are down, and leverages the power of compound interest over time.'
      },
      {
        q: 'What are the main categories of Mutual Funds available in India?',
        a: 'Under SEBI categorization, mutual funds are broadly classified into Equity Funds (Large-cap, Mid-cap, Small-cap, Flexi-cap, Sectoral), Debt Funds (Liquid, Overnight, Corporate Bond, Gilt), Hybrid Funds (Balanced Advantage, Aggressive Hybrid, Multi-Asset), and Solution/Index Funds.'
      },
      {
        q: 'How does folio nomination work and who can be nominated?',
        a: 'SEBI mandates nomination for mutual fund folios. An investor can nominate up to three individuals and specify the percentage allocation for each. Nominees can be family members, spouses, children, or trusts. Folio nomination ensures smooth transfer of units in the event of an untimely demise.'
      },
      {
        q: 'What are the tax implications on Mutual Fund capital gains?',
        a: 'For Equity Funds held > 12 months, Long-Term Capital Gains (LTCG) above ₹1.25 Lakh per financial year are taxed at 12.5%. Short-Term Capital Gains (STCG, held ≤ 12 months) are taxed at 20%. Debt funds purchased after April 1, 2023, are taxed as per the investor\'s applicable income tax slab rate.'
      },
      {
        q: 'How can an investor track folios and transact digitally with Attitude?',
        a: 'Investors can track consolidated holdings across all AMCs through authorized partner portals, mobile applications, and monthly Consolidated Account Statements (CAS) issued by CAMS and KFintech, facilitated with dedicated support from Attitude Financial Services.'
      }
    ],
    complianceNotice:
      'Disclaimer: Attitude Financial Services is an AMFI-Registered Mutual Fund Distributor (ARN-362861). Information provided here is strictly for investor education and awareness. Mutual fund investments are subject to market risks; please read all scheme related documents carefully before making any investment decision.',
    ctaTitle: 'Have Questions on Mutual Funds?',
    ctaSubtitle:
      'Connect with our AMFI-registered Mutual Fund Distribution team for transaction assistance, scheme details, and folio onboarding support.'
  },

  'life-insurance': {
    slug: 'life-insurance',
    badge: 'PURE FINANCIAL PROTECTION',
    title: 'Life & Term Insurance Overview',
    description:
      'Pure term insurance is the single most vital financial pillar for securing your family\'s lifestyle, home loan liabilities, and children\'s education goals against premature life contingencies. Attitude Financial Services helps families evaluate comprehensive term plans with high Claim Settlement Ratios (CSR) and comprehensive critical illness riders.',
    metrics: [
      { label: 'SUM ASSURED', value: 'Up to 100x Income' },
      { label: 'COVERAGE DURATION', value: 'Up to Age 85' },
      { label: 'CLAIM SETTLEMENT', value: '98%+ Settlement Ratio' },
      { label: 'REGULATOR', value: 'IRDAI Governed' }
    ],
    image: '/images/services/life-insurance.jpg',
    imageBadgeTop: 'Family Financial Security',
    imageBadgeBottom: 'IRDAI Approved Protection',
    strategicTitle: 'Key Advantages & Highlights',
    strategicSubtitle: 'STRATEGIC VALUE',
    strategicHighlights: [
      {
        num: '01',
        title: 'Substantial Cover at Modest Premiums',
        desc: 'Pure risk term policies provide substantial financial coverage (e.g. ₹1–5 Crores) at affordable annual premiums, ensuring your loved ones face zero monetary distress.'
      },
      {
        num: '02',
        title: 'Accelerated Critical Illness Safeguard',
        desc: 'Comprehensive riders provide instant lump-sum payouts upon diagnosis of covered life-threatening conditions like cardiac arrest, stroke, or cancer.'
      },
      {
        num: '03',
        title: 'Zero Claim Dispute Assistance',
        desc: 'Dedicated claim support and documentation assistance ensuring your family faces zero bureaucratic friction when filing a nominee claim.'
      },
      {
        num: '04',
        title: 'Tax-Exempt Proceeds & Premiums',
        desc: 'Premiums are eligible for tax deductions under Section 80C, and claim payouts received by nominees are 100% tax-free under Section 10(10D).'
      }
    ],
    workflowTitle: 'How It Works in 3 Easy Steps',
    workflowSubtitle: 'EXECUTION WORKFLOW',
    workflowSteps: [
      {
        num: '01',
        title: 'Determine Life Cover',
        desc: 'Calculate the human life value (HLV) based on income, loans, and family milestones.'
      },
      {
        num: '02',
        title: 'Evaluate Insurers',
        desc: 'Compare plans by Claim Settlement Ratio, solvency margin, and premium terms.'
      },
      {
        num: '03',
        title: 'Tele-Medical & Issuance',
        desc: 'Complete paperless tele-medical verification and receive your instant digital policy.'
      }
    ],
    faqTitle: 'Life Insurance FAQs',
    faqSubtitle: 'Coverage calculations, medical disclosures, and rider details.',
    faqs: [
      {
        q: 'What is pure term insurance and why is it preferred over endowment plans?',
        a: 'A pure term insurance policy provides high life cover for a specific duration without combining investment returns. Because it separates investment from protection, premiums are much lower, allowing you to secure ₹1-2 Crores cover for a fraction of the cost of endowment or ULIP policies.'
      },
      {
        q: 'How should an individual estimate adequate term life insurance cover?',
        a: 'Standard Human Life Value (HLV) guidelines suggest a sum assured equal to at least 15 to 20 times your current annual gross income, plus any outstanding loan obligations (such as home mortgages) and future milestone expenses (like higher education for children).'
      },
      {
        q: 'Why is accurate medical disclosure crucial when buying term cover?',
        a: 'Under Section 45 of the Insurance Act, accurate disclosure of pre-existing health habits, smoking status, and family medical history ensures that claim payouts cannot be contested or repudiated by the insurer after the initial statutory period.'
      },
      {
        q: 'What happens to the policy if I survive the term?',
        a: 'In a standard pure term insurance plan, no maturity benefit is paid if the policyholder survives the tenure. However, Term Return of Premium (TROP) plans are available if you wish to have all paid premiums refunded upon maturity.'
      },
      {
        q: 'What are accidental disability and critical illness riders?',
        a: 'Riders are add-on protections attached to the base policy. An accidental disability rider waives future premiums and provides income replacement upon permanent disability, while a critical illness rider pays an immediate lump-sum upon medical diagnosis.'
      },
      {
        q: 'Can NRIs buy Indian term insurance policies?',
        a: 'Yes, Non-Resident Indians (NRIs) can purchase term insurance policies in India through tele-medical underwriting or medical tests in their country of residence, paid conveniently via NRE/NRO accounts.'
      }
    ],
    complianceNotice:
      'Disclaimer: Insurance is a subject matter of solicitation. Attitude Financial Services provides facilitation and customer support in coordination with licensed insurance partners. Please read sales brochures and policy terms carefully before concluding a purchase.',
    ctaTitle: 'Have Questions on Term Insurance?',
    ctaSubtitle:
      'Speak with our team to evaluate Human Life Value (HLV) illustrations and explore term insurance coverage options for your family.'
  },

  'health-insurance': {
    slug: 'health-insurance',
    badge: 'COMPREHENSIVE MEDICAL COVER',
    title: 'Health Insurance Overview',
    description:
      'Medical emergencies and escalating healthcare inflation can rapidly erode lifetime savings. A comprehensive family floater health insurance policy ensures immediate cashless admission across empaneled tertiary care hospitals, safeguarding both your health and hard-earned savings.',
    metrics: [
      { label: 'HOSPITAL NETWORK', value: '10,000+ Cashless' },
      { label: 'ROOM RENT CAPPING', value: 'Zero Sub-Limits' },
      { label: 'RESTORATION', value: '100% Unlimited' },
      { label: 'REGULATOR', value: 'IRDAI Governed' }
    ],
    image: '/images/services/health-insurance.jpg',
    imageBadgeTop: 'Cashless Hospitalization',
    imageBadgeBottom: 'Pre & Post Hospitalization',
    strategicTitle: 'Key Advantages & Highlights',
    strategicSubtitle: 'STRATEGIC VALUE',
    strategicHighlights: [
      {
        num: '01',
        title: 'Instant Cashless Hospitalization',
        desc: 'Avail immediate pre-authorized medical treatment across 10,000+ accredited network hospitals with zero out-of-pocket cash deposit requirements.'
      },
      {
        num: '02',
        title: 'No Room Rent or ICU Sub-Limits',
        desc: 'Policies feature zero capping on room rent, allowing you to choose single private AC rooms or suites without proportionate reduction penalties.'
      },
      {
        num: '03',
        title: 'Automatic Sum Insured Restoration',
        desc: 'If your base coverage is exhausted during a medical crisis, the policy automatically restores 100% of the sum insured for subsequent unrelated hospitalizations.'
      },
      {
        num: '04',
        title: 'Section 80D Tax Exemption',
        desc: 'Deduct up to ₹25,000 for self and family, plus up to ₹50,000 for senior citizen parents, saving up to ₹23,400 in annual income taxes.'
      }
    ],
    workflowTitle: 'How It Works in 3 Easy Steps',
    workflowSubtitle: 'EXECUTION WORKFLOW',
    workflowSteps: [
      {
        num: '01',
        title: 'Choose Adequate Sum Insured',
        desc: 'Select a base cover of ₹10–25 Lakhs or pair with a high-deductible super top-up policy.'
      },
      {
        num: '02',
        title: 'Review Waiting Periods',
        desc: 'Check waiting periods for pre-existing diseases, specific ailments, and maternity cover.'
      },
      {
        num: '03',
        title: 'Instant E-Card Generation',
        desc: 'Receive your health card instantly with 24/7 dedicated cashless claim assistance.'
      }
    ],
    faqTitle: 'Health Insurance FAQs',
    faqSubtitle: 'Network hospitals, room rent clauses, and claim procedures.',
    faqs: [
      {
        q: 'What is the difference between an individual policy and a family floater?',
        a: 'An individual health policy allocates a dedicated sum insured to one single person. A family floater pools a single comprehensive sum insured (e.g. ₹20 Lakhs) across the entire family (spouse, children, and parents), reducing overall premium outgo while ensuring high coverage.'
      },
      {
        q: 'What is a Super Top-up health insurance policy?',
        a: 'A Super Top-up policy provides high financial coverage (e.g. ₹50 Lakhs to ₹1 Crore) at extremely economical premiums by kicking in only after your medical bills exceed a specified deductible threshold (e.g. ₹5 Lakhs paid by your base policy or employer cover).'
      },
      {
        q: 'What does "Daycare Procedure" coverage mean?',
        a: 'Medical advancements now allow many surgical procedures (like cataract operations, chemotherapy, or dialyses) to be completed within a few hours without 24-hour hospitalization. Modern policies fully cover these daycare procedures.'
      },
      {
        q: 'How does pre-existing disease (PED) waiting period work?',
        a: 'A pre-existing disease is any health condition diagnosed or treated prior to buying the policy. IRDAI guidelines mandate a waiting period (typically 2 to 3 years) before claims arising from these conditions are payable.'
      },
      {
        q: 'What is the procedure for an emergency cashless hospitalization?',
        a: 'Show your health insurance E-card and photo ID at the hospital\'s insurance desk. The hospital sends a pre-authorization form to the Third Party Administrator (TPA) or insurer, which approves the cashless sanction within 1–2 hours.'
      },
      {
        q: 'Can I port my existing health insurance policy to a new insurer?',
        a: 'Yes, under IRDAI portability regulations, you can port your health insurance policy to another insurer without losing accumulated benefits such as waiting period credits and No Claim Bonus (NCB).'
      }
    ],
    complianceNotice:
      'Disclaimer: Health insurance policies are underwritten by IRDAI-registered general and standalone health insurance companies. Terms, conditions, waiting periods, and exclusions apply. Attitude Financial Services provides investor facilitation support.',
    ctaTitle: 'Have Questions on Health Insurance?',
    ctaSubtitle:
      'Connect with our healthcare coverage desk to compare plans with zero room rent limits, high no-claim bonuses, and wide cashless hospital networks.'
  },

  'loan-against-mf': {
    slug: 'loan-against-mf',
    badge: 'INSTANT DIGITAL LIQUIDITY',
    title: 'Loan Against Mutual Funds (LAMF)',
    description:
      'When emergency capital requirements arise, redeeming mutual funds incurs capital gains tax and permanently interrupts your compounding journey. A digital Loan Against Mutual Funds enables you to unlock an instant overdraft limit in 15 minutes by lien-marking fund units without selling them.',
    metrics: [
      { label: 'DISBURSAL TIME', value: '15 Minutes Digital' },
      { label: 'INTEREST CHARGE', value: 'Only on Used Amount' },
      { label: 'EQUITY LTV', value: 'Up to 50% NAV' },
      { label: 'REGULATOR', value: 'RBI Regulated NBFC' }
    ],
    image: '/images/services/loan-against-mf.jpg',
    imageBadgeTop: 'Zero Unit Liquidation',
    imageBadgeBottom: 'Flexible Overdraft Facility',
    strategicTitle: 'Key Advantages & Highlights',
    strategicSubtitle: 'STRATEGIC VALUE',
    strategicHighlights: [
      {
        num: '01',
        title: 'Zero Disruption of Compounding',
        desc: 'Your mutual fund folios remain invested in the market, continuing to participate in market movements and potential compounding throughout the tenure of your facility.'
      },
      {
        num: '02',
        title: 'Interest Payable Only on Drawn Amount',
        desc: 'Operates as an overdraft limit: if you draw ₹1 Lakh from a ₹5 Lakh sanctioned limit for 10 days, you pay interest strictly on ₹1 Lakh for those 10 days.'
      },
      {
        num: '03',
        title: 'Avoid Capital Gains Tax & Exit Loads',
        desc: 'Because no fund units are redeemed, you trigger zero capital gains tax liabilities and avoid short-term exit loads charged by AMCs.'
      },
      {
        num: '04',
        title: 'Zero Prepayment or Foreclosure Charges',
        desc: 'Repay the borrowed principal whenever surplus liquidity is available with zero prepayment penalties or foreclosure lock-ins.'
      }
    ],
    workflowTitle: 'How It Works in 3 Easy Steps',
    workflowSubtitle: 'EXECUTION WORKFLOW',
    workflowSteps: [
      {
        num: '01',
        title: 'Fetch Lien Borrowing Limit',
        desc: 'Verify eligible equity & debt mutual fund holdings via secure RTA (CAMS / KFintech) OTP.'
      },
      {
        num: '02',
        title: 'Digital Pledge & e-Sign',
        desc: 'Select units to pledge, review approved LTV terms, and e-sign the loan agreement in 5 minutes.'
      },
      {
        num: '03',
        title: 'Instant Bank Credit',
        desc: 'The approved overdraft credit limit is instantly activated in your registered bank account.'
      }
    ],
    faqTitle: 'Loan Against Mutual Funds FAQs',
    faqSubtitle: 'Loan-to-value limits, pledge mechanics, and repayment flexibility.',
    faqs: [
      {
        q: 'What is a Loan Against Mutual Funds (LAMF) and how does it work?',
        a: 'LAMF is a secured credit facility where you pledge your equity or debt mutual fund units with an RBI-regulated lending institution (Bank/NBFC). In return, you receive an overdraft limit or term loan without selling your investments.'
      },
      {
        q: 'What is the Loan-to-Value (LTV) ratio for Equity and Debt funds?',
        a: 'As per RBI guidelines, equity mutual funds typically carry a Loan-to-Value (LTV) ratio of up to 50% of the current market NAV, while liquid and debt mutual funds can be pledged for up to 80% of their market value.'
      },
      {
        q: 'Do I continue receiving dividend and growth benefits while pledged?',
        a: 'Yes! All capital appreciation, market gains, and dividend payouts remain yours. The units remain invested in your folio subject to market movements.'
      },
      {
        q: 'How does repayment work for an overdraft loan against mutual funds?',
        a: 'You only need to service the monthly interest on the specific balance drawn. The principal can be repaid at any time without any prepayment fees or lock-in restrictions.'
      },
      {
        q: 'What happens if the market drops significantly during the loan tenure?',
        a: 'If market corrections cause the pledged unit value to drop below the required margin threshold, the lender may request a margin top-up (by pledging additional units or partially reducing the loan balance).'
      },
      {
        q: 'How are the pledged mutual fund units released after repayment?',
        a: 'Once the borrowed amount and interest are repaid, the lien is automatically revoked through RTA instructions, and the units are freed back to your normal folio status.'
      }
    ],
    complianceNotice:
      'Disclaimer: Loan Against Mutual Funds is disbursed by authorized RBI-regulated NBFCs and Banking partners subject to credit evaluation, pledge verification, and loan agreements. Attitude Financial Services acts as a technology and facilitation partner.',
    ctaTitle: 'Need Emergency Liquidity Without Selling?',
    ctaSubtitle:
      'Check your borrowing limit in 2 minutes. Secure instant bank overdraft access without liquidating your investments.'
  },

  'tax-saving-investments': {
    slug: 'tax-saving-investments',
    badge: 'OPTIMIZED TAX DEDUCTIONS',
    title: 'Tax-Saving Investments & ELSS',
    description:
      'Tax efficiency is the engine of net investment returns. Equity Linked Savings Schemes (ELSS) under Section 80C offer the shortest lock-in period (3 years) across all tax instruments, providing dual benefits of direct tax deduction up to ₹1.5 Lakh and long-term equity compounding.',
    metrics: [
      { label: 'LOCK-IN PERIOD', value: '3 Years (Shortest)' },
      { label: 'SECTION 80C LIMIT', value: 'Up to ₹1,50,000' },
      { label: 'TAX SAVING', value: 'Up to ₹46,800 / yr' },
      { label: 'REGULATOR', value: 'SEBI Governed' }
    ],
    image: '/images/services/tax-saving.jpg',
    imageBadgeTop: 'Section 80C Exemption',
    imageBadgeBottom: 'Shortest 3-Year Lock-In',
    strategicTitle: 'Key Advantages & Highlights',
    strategicSubtitle: 'STRATEGIC VALUE',
    strategicHighlights: [
      {
        num: '01',
        title: 'Shortest Statutory Lock-in (3 Years)',
        desc: 'Compared to PPF (15 years), National Savings Certificate (5 years), or Tax-Saving Bank FDs (5 years), ELSS mutual funds offer the quickest capital liquidity.'
      },
      {
        num: '02',
        title: 'Equity Market Participation & Compounding Potential',
        desc: 'ELSS invests across diversified equity businesses, providing potential long-term capital appreciation, subject to market fluctuations.'
      },
      {
        num: '03',
        title: 'Disciplined Monthly SIP Tax Savings',
        desc: 'Avoid last-minute cash crunches in March by setting up systematic monthly SIPs throughout the financial year, capturing rupee-cost averaging.'
      },
      {
        num: '04',
        title: 'Seamless Digital Tax Statements',
        desc: 'Download consolidated, instant capital-gain and Section 80C investment confirmation certificates for submission to corporate HR desks.'
      }
    ],
    workflowTitle: 'How It Works in 3 Easy Steps',
    workflowSubtitle: 'EXECUTION WORKFLOW',
    workflowSteps: [
      {
        num: '01',
        title: 'Evaluate Tax Regime',
        desc: 'Compare tax outgo between the Old Tax Regime (with 80C/80D deductions) and the New Tax Regime.'
      },
      {
        num: '02',
        title: 'Explore Diversified ELSS Schemes',
        desc: 'Review scheme composition, historical rolling returns, and expense ratios of leading funds.'
      },
      {
        num: '03',
        title: 'Automate Monthly SIP',
        desc: 'Set up an automated monthly deduction to complete your ₹1.5 Lakh tax-saving mandate smoothly.'
      }
    ],
    faqTitle: 'ELSS & Tax-Saving FAQs',
    faqSubtitle: 'Old vs New Tax Regime, lock-in rules, and redemption taxation.',
    faqs: [
      {
        q: 'How does ELSS qualify for tax deduction under Section 80C?',
        a: 'Investments in Equity Linked Savings Schemes (ELSS) up to ₹1,50,000 per financial year are eligible for deduction from your gross total income under Section 80C of the Income Tax Act, 1961 (under the Old Tax Regime).'
      },
      {
        q: 'How does the 3-year lock-in period work for SIP investments in ELSS?',
        a: 'Each individual SIP installment is locked for exactly 3 years from its respective investment date. For example, an installment made on April 10, 2024, becomes eligible for redemption on April 11, 2027.'
      },
      {
        q: 'Is it better to invest lump-sum in March or start an SIP in April?',
        a: 'Starting an SIP early in the financial year is more systematic. It spreads your cash outflow across 12 manageable monthly installments and eliminates the risk of deploying all capital at a single market peak in March.'
      },
      {
        q: 'What are the tax rules when redeeming ELSS units after 3 years?',
        a: 'Long-Term Capital Gains (LTCG) up to ₹1.25 Lakh across all equity mutual funds in a financial year are completely tax-exempt. Gains exceeding ₹1.25 Lakh are taxed at 12.5% without indexation.'
      },
      {
        q: 'Can I continue holding ELSS units after the 3-year lock-in period expires?',
        a: 'Yes, redemption after 3 years is completely optional. You can continue holding the units for 5, 10, or 15+ years to let your money compound as long as the underlying fund performs well.'
      },
      {
        q: 'Does ELSS offer any tax benefits under the New Tax Regime?',
        a: 'Under the New Tax Regime (Section 115BAC), deductions under Section 80C are not available. However, ELSS remains a viable diversified equity mutual fund investment option with a 3-year lock-in that promotes investment discipline.'
      }
    ],
    complianceNotice:
      'Disclaimer: Tax benefits are subject to provisions of the Income Tax Act, 1961 and prevailing tax laws. Investors are advised to consult their tax consultant or chartered accountant before making decisions. ARN-362861.',
    ctaTitle: 'Ready to Explore Tax-Saving Mutual Funds?',
    ctaSubtitle:
      'Connect with our distribution team to understand Section 80C mutual fund categories and explore ELSS scheme options.'
  },

  'nps-pension': {
    slug: 'nps-pension',
    badge: 'PFRDA REGULATED RETIREMENT VEHICLE',
    title: 'National Pension System (NPS)',
    description:
      'The National Pension System (NPS) is India\'s premier government-sponsored voluntary retirement pension framework. Regulated by PFRDA, it offers institutional low-cost fund management, strategic asset allocation between equity and government debt, and an exclusive additional tax deduction of ₹50,000 under Section 80CCD(1B).',
    metrics: [
      { label: 'EXTRA TAX BENEFIT', value: '₹50,000 u/s 80CCD' },
      { label: 'FUND MANAGEMENT', value: '< 0.09% p.a. Lowest' },
      { label: 'CORPUS AT 60', value: '60% Tax-Free Cash' },
      { label: 'REGULATOR', value: 'PFRDA Governed' }
    ],
    image: '/images/services/nps.jpg',
    imageBadgeTop: 'Government Sponsored Pension',
    imageBadgeBottom: 'Exclusive Section 80CCD(1B)',
    strategicTitle: 'Key Advantages & Highlights',
    strategicSubtitle: 'STRATEGIC VALUE',
    strategicHighlights: [
      {
        num: '01',
        title: 'Exclusive ₹50,000 Additional Tax Deduction',
        desc: 'Claim up to ₹50,000 additional deduction under Section 80CCD(1B) exclusively for Tier-1 NPS contributions, over and above the Section 80C ₹1.5 Lakh limit.'
      },
      {
        num: '02',
        title: 'World\'s Lowest Fund Management Costs',
        desc: 'With pension fund management fees capped under 0.09% p.a., NPS minimizes institutional expense deductions, helping preserve accumulated contributions.'
      },
      {
        num: '03',
        title: 'Active & Auto Choice Asset Allocation',
        desc: 'Allocate dynamically between Equity (E), Corporate Debt (C), Government Securities (G), and Alternative Assets (A), or let life-cycle auto allocation handle rebalancing.'
      },
      {
        num: '04',
        title: 'Lifelong Structured Monthly Pension',
        desc: 'At age 60, withdraw up to 60% of your accumulated corpus tax-free, with the remaining 40% converted into a lifelong annuity pension from an authorized annuity service provider.'
      }
    ],
    workflowTitle: 'How It Works in 3 Easy Steps',
    workflowSubtitle: 'EXECUTION WORKFLOW',
    workflowSteps: [
      {
        num: '01',
        title: 'Generate Instant PRAN',
        desc: 'Complete 10-minute digital registration using Aadhaar e-Sign to get your Permanent Retirement Account Number (PRAN).'
      },
      {
        num: '02',
        title: 'Choose Fund Manager & Asset Mix',
        desc: 'Select your preferred Pension Fund Manager (SBI, HDFC, ICICI, etc.) and equity-debt allocation.'
      },
      {
        num: '03',
        title: 'Set Monthly Contributions',
        desc: 'Contribute flexibly via net banking or SIP to build a comfortable, inflation-protected retirement.'
      }
    ],
    faqTitle: 'NPS & Retirement FAQs',
    faqSubtitle: 'PRAN generation, Tier-1 vs Tier-2, tax rules, and annuity choices.',
    faqs: [
      {
        q: 'What is the National Pension System (NPS) and who is eligible?',
        a: 'NPS is a voluntary, long-term retirement savings scheme designed by the Government of India and regulated by PFRDA. Any Indian citizen (resident or non-resident) between 18 and 70 years of age can open an NPS account.'
      },
      {
        q: 'What is the difference between NPS Tier-1 and Tier-2 accounts?',
        a: 'Tier-1 is the primary non-withdrawable retirement account that offers substantial tax deductions under Section 80CCD. Tier-2 is an optional, fully liquid investment facility with zero withdrawal lock-in, functioning like a mutual fund savings account.'
      },
      {
        q: 'How much tax can I save under Section 80CCD(1B)?',
        a: 'An exclusive deduction of up to ₹50,000 is available under Section 80CCD(1B) for Tier-1 contributions. For an individual in the 30% tax bracket, this results in direct tax savings of approximately ₹15,600 annually.'
      },
      {
        q: 'What happens to the accumulated NPS corpus at age 60?',
        a: 'Upon reaching age 60, you can withdraw up to 60% of the accumulated corpus as a tax-free lump sum. The remaining 40% (or more) must be utilized to purchase an annuity from an IRDAI-empanelled life insurer to generate lifelong monthly pension.'
      },
      {
        q: 'What is the difference between "Active Choice" and "Auto Choice"?',
        a: 'In Active Choice, you decide the exact asset mix (up to 75% in equity). In Auto Choice, the system automatically adjusts your equity and debt ratio according to your age profile, reducing risk as you approach retirement.'
      },
      {
        q: 'Are premature partial withdrawals permitted in NPS Tier-1?',
        a: 'Yes, after 3 years of account opening, partial withdrawals up to 25% of your own contributions are permitted for critical life events such as higher education for children, marriage, purchasing a home, or treating specified critical illnesses.'
      }
    ],
    complianceNotice:
      'Disclaimer: National Pension System is regulated by the Pension Fund Regulatory and Development Authority (PFRDA). Annuity returns depend on prevailing market yields offered by Annuity Service Providers. Attitude Financial Services provides facilitation assistance.',
    ctaTitle: 'Start Your Systematic Retirement Savings Today',
    ctaSubtitle:
      'Open your digital PRAN account in 10 minutes and claim up to ₹50,000 in additional tax deductions under Section 80CCD(1B).'
  }
};
