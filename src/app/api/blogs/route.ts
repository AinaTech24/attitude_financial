import { NextResponse } from 'next/server';
import { BLOGS_DATA } from '@/data/blogs';

export const revalidate = 300; // 5 minutes cache

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop"
];

const SOURCES = [
  {
    url: "https://economictimes.indiatimes.com/mf/rssfeeds/359241701.cms",
    name: "ET Mutual Funds",
    accent: "#dc2626"
  },
  {
    url: "https://www.livemint.com/rss/money",
    name: "Mint Money",
    accent: "#0284c7"
  },
  {
    url: "https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms",
    name: "ET Markets",
    accent: "#ea580c"
  },
  {
    url: "https://www.moneycontrol.com/rss/MCtopnews.xml",
    name: "MoneyControl",
    accent: "#1d4ed8"
  }
];

function stripHtml(html: string = ""): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function excerptOf(text: string, title: string = "", max: number = 150): string {
  const clean = stripHtml(text);
  if (!clean || clean.length < 30) {
    return `Stay informed with the latest developments on ${title.toLowerCase()} — trends, insights, and perspectives for mutual fund investors.`;
  }
  return clean.length > max ? clean.slice(0, max) + "…" : clean;
}

function readTimeOf(text: string = ""): string {
  const words = stripHtml(text).split(/\s+/).filter(Boolean).length;
  return `${Math.max(3, Math.ceil(words / 150))} min read`;
}

function categorize(text: string = ""): string {
  const t = text.toLowerCase();
  if (t.includes("sip") || t.includes("systematic") || t.includes("compounding") || t.includes("monthly")) {
    return "SIP & Investing";
  }
  if (t.includes("mutual fund") || t.includes("amc") || t.includes("nfo") || t.includes("elss") || t.includes("nav")) {
    return "Mutual Funds";
  }
  if (t.includes("sensex") || t.includes("nifty") || t.includes("stock") || t.includes("market") || t.includes("equity")) {
    return "Markets";
  }
  if (t.includes("rbi") || t.includes("inflation") || t.includes("repo") || t.includes("gdp") || t.includes("economy")) {
    return "Economy";
  }
  return "Personal Finance";
}

function extractImage(itemXml: string, fallbackIdx: number): string {
  const mediaContent = itemXml.match(/<media:content[^>]+url=["']([^"']+)["']/i);
  if (mediaContent?.[1]) return mediaContent[1];

  const mediaThumb = itemXml.match(/<media:thumbnail[^>]+url=["']([^"']+)["']/i);
  if (mediaThumb?.[1]) return mediaThumb[1];

  const enclosure = itemXml.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
  if (enclosure?.[1]) return enclosure[1];

  const imgMatch = itemXml.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch?.[1]) return imgMatch[1];

  const dataSrcMatch = itemXml.match(/data-src=["']([^"']+)["']/i);
  if (dataSrcMatch?.[1]) return dataSrcMatch[1];

  return FALLBACK_IMAGES[fallbackIdx % FALLBACK_IMAGES.length];
}

export interface ParsedArticle {
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

async function fetchRssFeed(source: typeof SOURCES[0], sourceIdx: number): Promise<ParsedArticle[]> {
  // Tier 1: Direct XML fetch with browser User-Agent
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(source.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*'
      },
      next: { revalidate: 300 },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const xml = await res.text();
      const itemMatches = xml.match(/<item[\s\S]*?<\/item>/gi) || [];

      if (itemMatches.length > 0) {
        const parsedItems: ParsedArticle[] = [];

        for (let i = 0; i < Math.min(itemMatches.length, 8); i++) {
          const itemXml = itemMatches[i];

          const titleMatch = itemXml.match(/<title>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/title>/i);
          const rawTitle = titleMatch ? (titleMatch[1] || titleMatch[2]) : '';
          const title = stripHtml(rawTitle);

          if (!title) continue;

          const linkMatch = itemXml.match(/<link>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/link>/i);
          const rawLink = linkMatch ? (linkMatch[1] || linkMatch[2]) : '';
          const url = stripHtml(rawLink);

          const descMatch = itemXml.match(/<(?:description|content:encoded)>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/(?:description|content:encoded)>/i);
          const rawDesc = descMatch ? (descMatch[1] || descMatch[2]) : '';
          const excerpt = excerptOf(rawDesc, title);

          const dateMatch = itemXml.match(/<pubDate>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/pubDate>/i);
          const rawDate = dateMatch ? (dateMatch[1] || dateMatch[2]) : '';
          const pubDate = rawDate ? new Date(rawDate) : new Date();
          const publishTs = isNaN(pubDate.getTime()) ? Date.now() : pubDate.getTime();

          const formattedDate = !isNaN(pubDate.getTime())
            ? pubDate.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
            : "Recent";

          const image = extractImage(itemXml, sourceIdx + i);

          parsedItems.push({
            id: url || `rss-${sourceIdx}-${i}`,
            title,
            excerpt,
            image,
            category: categorize(`${title} ${rawDesc}`),
            readTime: readTimeOf(rawDesc),
            date: formattedDate,
            publishTs,
            url: url || '#',
            source: source.name,
            isLive: true,
            accent: source.accent
          });
        }

        if (parsedItems.length > 0) {
          return parsedItems;
        }
      }
    }
  } catch (err) {
    // Continue to Tier 2 fallback
  }

  // Tier 2: rss2json fallback
  try {
    const controller2 = new AbortController();
    const timeoutId2 = setTimeout(() => controller2.abort(), 3000);
    const feedUrl = encodeURIComponent(source.url);
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`, {
      next: { revalidate: 300 },
      signal: controller2.signal
    });
    clearTimeout(timeoutId2);

    if (res.ok) {
      const data = await res.json();
      if (data.items && Array.isArray(data.items)) {
        return data.items.slice(0, 8).map((item: any, idx: number) => {
          const rawDesc = item.description || item.content || "";
          const pubDate = item.pubDate ? new Date(item.pubDate) : new Date();
          const publishTs = isNaN(pubDate.getTime()) ? Date.now() : pubDate.getTime();

          return {
            id: item.guid || item.link || `rss2json-${sourceIdx}-${idx}`,
            title: stripHtml(item.title),
            excerpt: excerptOf(rawDesc, item.title),
            image: item.thumbnail || item.enclosure?.link || FALLBACK_IMAGES[(sourceIdx + idx) % FALLBACK_IMAGES.length],
            category: categorize(`${item.title} ${rawDesc}`),
            readTime: readTimeOf(rawDesc),
            date: !isNaN(pubDate.getTime())
              ? pubDate.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                })
              : "Recent",
            publishTs,
            url: item.link || '#',
            source: source.name,
            isLive: true,
            accent: source.accent
          };
        });
      }
    }
  } catch (err) {
    // Failed tier 2
  }

  return [];
}

export async function GET() {
  try {
    const feedPromises = SOURCES.map((src, idx) => fetchRssFeed(src, idx));
    const results = (await Promise.all(feedPromises)).flat().filter((a) => Boolean(a.title));

    // Deduplicate by title
    const unique = results.filter(
      (article, index, self) =>
        index === self.findIndex((a) => a.title.toLowerCase() === article.title.toLowerCase())
    );

    unique.sort((a, b) => b.publishTs - a.publishTs);

    // If external feeds are temporarily empty or unreachable, supply high quality curated mutual fund articles
    if (unique.length === 0) {
      const curatedFallback: ParsedArticle[] = BLOGS_DATA.map((blog, idx) => ({
        id: `curated-${blog.slug}`,
        title: blog.title,
        excerpt: blog.excerpt,
        image: FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length],
        category: blog.category,
        readTime: blog.readTime,
        date: blog.publishDate,
        publishTs: Date.now() - idx * 86400000,
        url: `/blogs/${blog.slug}`,
        source: "Attitude Research Desk",
        isLive: false,
        accent: "#8ec61f"
      }));

      return NextResponse.json({
        success: true,
        isLive: false,
        count: curatedFallback.length,
        articles: curatedFallback,
        message: "Served curated investor education articles"
      });
    }

    return NextResponse.json({
      success: true,
      isLive: true,
      count: unique.length,
      articles: unique,
      lastUpdated: new Date().toISOString()
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error?.message || 'Failed to fetch feeds',
      articles: []
    }, { status: 500 });
  }
}
