export interface LiveArticle {
  id: string;
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
    id: 'et-mf-1',
    title: 'Equity Mutual Funds Register Steady Inflows as SIP Folio Counts Surge',
    excerpt: 'Systematic Investment Plan contributions touched record figures as retail investors maintained consistent multi-year discipline across large and flexi-cap schemes.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    category: 'Mutual Funds',
    readTime: '4 min read',
    date: 'Today',
    publishTs: Date.now() - 3600000,
    url: 'https://economictimes.indiatimes.com/mf',
    source: 'ET Mutual Funds',
    isLive: true,
    accent: '#dc2626'
  },
  {
    id: 'mint-money-2',
    title: 'Why Disciplined Rupee-Cost Averaging Beats Market Timing Over Long Horizons',
    excerpt: 'Historical market cycle evaluations illustrate why consistent monthly SIP allocations help minimize emotional market biases and smoothen out equity volatility.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop',
    category: 'SIP & Investing',
    readTime: '5 min read',
    date: 'Today',
    publishTs: Date.now() - 7200000,
    url: 'https://www.livemint.com/money',
    source: 'Mint Money',
    isLive: true,
    accent: '#0284c7'
  },
  {
    id: 'mc-biz-3',
    title: 'SEBI Categorization Guide: Navigating Large Cap, Mid Cap & Flexi Cap Schemes',
    excerpt: 'A comprehensive review of SEBI scheme definitions and portfolio allocation constraints designed to safeguard transparency and portfolio comparability.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop',
    category: 'Mutual Funds',
    readTime: '6 min read',
    date: 'Yesterday',
    publishTs: Date.now() - 86400000,
    url: 'https://www.moneycontrol.com/news/business/mutual-funds/',
    source: 'MoneyControl',
    isLive: true,
    accent: '#16a34a'
  },
  {
    id: 'et-mf-4',
    title: 'Debt Mutual Funds & Liquid Schemes: Maintaining Liquidity and Capital Preservation',
    excerpt: 'Understanding the role of low-duration and liquid funds for operational contingency reserves and systematic STP feeder strategies.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    category: 'Markets',
    readTime: '4 min read',
    date: 'Yesterday',
    publishTs: Date.now() - 100000000,
    url: 'https://economictimes.indiatimes.com/mf',
    source: 'ET Mutual Funds',
    isLive: true,
    accent: '#dc2626'
  },
  {
    id: 'mint-money-5',
    title: 'Hybrid & Balanced Advantage Funds: Dynamic Equity Allocation During Volatility',
    excerpt: 'How rule-based valuation models adjust equity and fixed income allocations to manage downside market fluctuations automatically.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    category: 'Mutual Funds',
    readTime: '5 min read',
    date: '2 days ago',
    publishTs: Date.now() - 172800000,
    url: 'https://www.livemint.com/money',
    source: 'Mint Money',
    isLive: true,
    accent: '#0284c7'
  },
  {
    id: 'mc-biz-6',
    title: 'Key Operational Milestones: e-KYC Verification, Bank Mandates, and Folio Mapping',
    excerpt: 'Essential checklist for investors initiating mutual fund transactions under AMFI and SEBI Central KYC framework guidelines.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop',
    category: 'Personal Finance',
    readTime: '5 min read',
    date: '3 days ago',
    publishTs: Date.now() - 259200000,
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
        return data.articles;
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
        return data.items.map((item: any) => ({
          id: item.guid || item.link,
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
      }
    }
  } catch (e) {
    // Graceful fallback
  }

  return INITIAL_LIVE_ARTICLES;
}
