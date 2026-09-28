import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  User
} from 'lucide-react';
import { BLOGS_DATA, BlogPost } from '@/data/blogs';
import { COMPANY_INFO } from '@/data/company';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOGS_DATA.map((blog) => ({
    slug: blog.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = BLOGS_DATA.find((b) => b.slug === params.slug);
  if (!blog) return { title: 'Article Not Found' };

  return {
    title: `${blog.title} | Attitude Financial Services`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image]
    }
  };
}

export default function BlogPostPage({ params }: Props) {
  const blog = BLOGS_DATA.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  // Related articles (other blogs)
  const relatedBlogs = BLOGS_DATA.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back Link */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm"
          >
            <ArrowLeft size={16} />
            <span>Back to All Guides</span>
          </Link>

          <div className="text-xs font-semibold text-slate-400 hidden sm:block">
            <Link href="/" className="hover:text-slate-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blogs" className="hover:text-slate-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-600 truncate max-w-[200px] inline-block align-bottom">{blog.title}</span>
          </div>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 bg-[#070d14] text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            <span>{blog.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.18] mb-6">
            {blog.title}
          </h1>

          {/* Author & Meta Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-sm text-slate-600">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-lime-100 text-lime-800 flex items-center justify-center font-bold text-xs">
                  <User size={14} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 leading-tight">{blog.author}</div>
                  <div className="text-xs text-slate-500">Educational Insights</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} className="text-slate-400" />
                <span>{blog.publishDate}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} className="text-slate-400" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs bg-lime-50 text-lime-800 border border-lime-200 px-3 py-1 rounded-full font-semibold">
                AMFI ARN-362861
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-10 shadow-lg border border-slate-200 bg-slate-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lead Excerpt Banner */}
        <div className="bg-white border-l-4 border-amber-500 rounded-r-2xl p-6 mb-10 shadow-sm">
          <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed italic">
            &ldquo;{blog.excerpt}&rdquo;
          </p>
        </div>

        {/* Main Article Content */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-12">
          <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-6">
            {blog.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Takeaways Callout */}
          <div className="mt-10 bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold text-lg">
              <CheckCircle2 size={20} className="text-lime-600" />
              <span>Key Investor Takeaways</span>
            </div>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-lime-600 font-bold">•</span>
                <span>Systematic rupee-cost averaging significantly reduces the need to guess or time short-term market cycles.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-600 font-bold">•</span>
                <span>Matching your investment duration with suitable asset categories is vital for capital preservation and growth.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-600 font-bold">•</span>
                <span>Always review official Scheme Information Documents (SID) and statutory riskometers prior to transaction execution.</span>
              </li>
            </ul>
          </div>

          {/* Author / Distributor Bio Box */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-slate-900 text-base">{COMPANY_INFO.legalName}</div>
              <div className="text-xs text-slate-500">
                AMFI-Registered Mutual Fund Distributor (ARN: {COMPANY_INFO.arn}) • Sangli, Maharashtra
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
            >
              Contact Our Desk
            </Link>
          </div>
        </article>

        {/* Regulatory Risk Notice */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 mb-14 text-xs text-amber-900 leading-relaxed">
          <div className="font-bold mb-1 flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-amber-700" />
            <span>Statutory Regulatory Disclosure</span>
          </div>
          <p>
            Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing. This article is published solely for investor awareness and educational literacy purposes and does not constitute financial or scheme recommendations.
          </p>
        </div>

        {/* Related Educational Guides */}
        {relatedBlogs.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-extrabold text-slate-950">
                Related Educational Guides
              </h2>
              <Link href="/blogs" className="text-sm font-bold text-amber-600 hover:text-amber-700">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blogs/${item.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col group"
                >
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-[#070d14]/90 text-white text-[0.62rem] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="text-[0.7rem] text-slate-400 mb-1.5">{item.publishDate}</div>
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors line-clamp-2 mb-2 flex-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-auto">
                      <span>Read Guide</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
