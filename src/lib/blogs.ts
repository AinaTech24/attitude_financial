import { slugify } from '@/lib/slugify';

export interface LiveArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  publishTs: number;
  url: string;
  source: string;
  isLive: boolean;
  accent: string;
}

export const INITIAL_LIVE_ARTICLES: LiveArticle[] = [
  {
    id: 'et-mf-value-plays',
    slug: 'market-veterans-favour-value-plays-over-crowded-expensive-themes',
    title: 'Market veterans favour value plays over crowded, expensive themes',
    excerpt: 'Market experts project cautious optimism for Indian equities as valuations become less demanding and earnings growth aligns. Large-cap stock...',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    category: 'Mutual Funds',
    readTime: '4 min read',
    date: '29 Sept 2026',
    publishTs: Date.now() - 1800000,
    url: 'https://economictimes.indiatimes.com/mf',
    source: 'ET Mutual Funds',
    isLive: true,
    accent: '#dc2626'
  },
  {
    id: 'et-mf-hdfc-reits',
    slug: 'hdfc-mutual-fund-announces-reopening-of-hdfc-bse-reits-and-commercial-real-estate-index-fund-for-ongoing-subscription',
    title: 'HDFC Mutual Fund announces reopening of HDFC BSE REITS and Commercial Real Estate Index Fund for ongoing subscription',
    excerpt: 'HDFC Mutual Fund has reopened its HDFC BSE REITS and Commercial Real Estate Index Fund after its September 15–17 NFO period. The passive fun...',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    category: 'Mutual Funds',
    readTime: '4 min read',
    date: '28 Sept 2026',
    publishTs: Date.now() - 3600000,
    url: 'https://economictimes.indiatimes.com/mf',
    source: 'ET Mutual Funds',
    isLive: true,
    accent: '#dc2626'
  },
  {
    id: 'et-mf-education-goal',
    slug: 'when-should-an-investor-with-rs-12-crore-in-mutual-funds-90-in-equity-de-risk-for-a-rs-30-lakh-education-goal',
    title: 'When should an investor with Rs 1.2 crore in mutual funds, 90% in equity, de-risk for a Rs 30 lakh education goal?',
    excerpt: 'Financial planners recommend phased Systematic Transfer Plans (STP) into conservative liquid and short-duration debt funds 2-3 years prior to college fee disbursements...',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
    category: 'Mutual Funds',
    readTime: '4 min read',
    date: '28 Sept 2026',
    publishTs: Date.now() - 7200000,
    url: 'https://economictimes.indiatimes.com/mf',
    source: 'ET Mutual Funds',
    isLive: true,
    accent: '#dc2626'
  },
  {
    id: 'et-mf-1',
    slug: 'equity-mutual-funds-register-steady-inflows-as-sip-folio-counts-surge',
    title: 'Equity Mutual Funds Register Steady Inflows as SIP Folio Counts Surge',
    excerpt: 'Systematic Investment Plan contributions touched record figures as retail investors maintained consistent multi-year discipline across large and flexi-cap schemes.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    category: 'Mutual Funds',
    readTime: '4 min read',
    date: '27 Sept 2026',
    publishTs: Date.now() - 10800000,
    url: 'https://economictimes.indiatimes.com/mf',
    source: 'ET Mutual Funds',
    isLive: true,
    accent: '#dc2626'
  },
  {
    id: 'mint-money-2',
    slug: 'why-disciplined-rupee-cost-averaging-beats-market-timing-over-long-horizons',
    title: 'Why Disciplined Rupee-Cost Averaging Beats Market Timing Over Long Horizons',
    excerpt: 'Historical market cycle evaluations illustrate why consistent monthly SIP allocations help minimize emotional market biases and smoothen out equity volatility.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop',
    category: 'SIP & Investing',
    readTime: '5 min read',
    date: '26 Sept 2026',
    publishTs: Date.now() - 14400000,
    url: 'https://www.livemint.com/money',
    source: 'Mint Money',
    isLive: true,
    accent: '#0284c7'
  },
  {
    id: 'mc-biz-3',
    slug: 'sebi-categorization-guide-navigating-large-cap-mid-cap-flexi-cap-schemes',
    title: 'SEBI Categorization Guide: Navigating Large Cap, Mid Cap & Flexi Cap Schemes',
    excerpt: 'A comprehensive review of SEBI scheme definitions and portfolio allocation constraints designed to safeguard transparency and portfolio comparability.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop',
    category: 'Mutual Funds',
    readTime: '6 min read',
    date: '25 Sept 2026',
    publishTs: Date.now() - 18000000,
    url: 'https://www.moneycontrol.com/news/business/mutual-funds/',
    source: 'MoneyControl',
    isLive: true,
    accent: '#16a34a'
  },
  {
    id: 'et-mf-4',
    slug: 'debt-mutual-funds-liquid-schemes-maintaining-liquidity-and-capital-preservation',
    title: 'Debt Mutual Funds & Liquid Schemes: Maintaining Liquidity and Capital Preservation',
    excerpt: 'Understanding the role of low-duration and liquid funds for operational contingency reserves and systematic STP feeder strategies.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    category: 'Markets',
    readTime: '4 min read',
    date: '24 Sept 2026',
    publishTs: Date.now() - 21600000,
    url: 'https://economictimes.indiatimes.com/mf',
    source: 'ET Mutual Funds',
    isLive: true,
    accent: '#dc2626'
  },
  {
    id: 'mint-money-5',
    slug: 'hybrid-balanced-advantage-funds-dynamic-equity-allocation-during-volatility',
    title: 'Hybrid & Balanced Advantage Funds: Dynamic Equity Allocation During Volatility',
    excerpt: 'How rule-based valuation models adjust equity and fixed income allocations to manage downside market fluctuations automatically.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    category: 'Mutual Funds',
    readTime: '5 min read',
    date: '23 Sept 2026',
    publishTs: Date.now() - 25200000,
    url: 'https://www.livemint.com/money',
    source: 'Mint Money',
    isLive: true,
    accent: '#0284c7'
  },
  {
    id: 'mc-biz-6',
    slug: 'key-operational-milestones-e-kyc-verification-bank-mandates-and-folio-mapping',
    title: 'Key Operational Milestones: e-KYC Verification, Bank Mandates, and Folio Mapping',
    excerpt: 'Essential checklist for investors initiating mutual fund transactions under AMFI and SEBI Central KYC framework guidelines.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop',
    category: 'Personal Finance',
    readTime: '5 min read',
    date: '22 Sept 2026',
    publishTs: Date.now() - 28800000,
    url: 'https://www.moneycontrol.com/news/business/personal-finance/',
    source: 'MoneyControl',
    isLive: true,
    accent: '#16a34a'
  }
];

export async function fetchLiveBlogs(): Promise<LiveArticle[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch('/api/blogs', {
      cache: 'no-store',
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.articles && Array.isArray(data.articles) && data.articles.length > 0) {
        return data.articles.map((item: any) => ({
          ...item,
          slug: item.slug || slugify(item.title)
        }));
      }
    }
  } catch (err) {
    // Graceful fallback to initial articles
  }

  // Fallback: direct client fetch from rss2json
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const fallbackSource = 'https://economictimes.indiatimes.com/mf/rssfeeds/359241701.cms';
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(fallbackSource)}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.items && data.items.length > 0) {
        const parsed = data.items.map((item: any) => ({
          id: item.guid || item.link,
          slug: slugify(item.title),
          title: item.title,
          excerpt: item.description ? item.description.replace(/<[^>]*>/g, ' ').slice(0, 140) + '…' : '',
          image: item.thumbnail || 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop',
          category: 'Mutual Funds',
          readTime: '4 min read',
          date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '',
          publishTs: item.pubDate ? new Date(item.pubDate).getTime() : Date.now(),
          url: item.link,
          source: 'ET Mutual Funds',
          isLive: true,
          accent: '#dc2626'
        }));
        return [...INITIAL_LIVE_ARTICLES.slice(0, 3), ...parsed];
      }
    }
  } catch (e) {
    // Graceful fallback
  }

  return INITIAL_LIVE_ARTICLES;
}
