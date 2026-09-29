'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, Clock, Calendar, ArrowRight, BookOpen, ExternalLink, RefreshCw, Radio, Sparkles } from 'lucide-react';
import { BLOGS_DATA } from '@/data/blogs';
import { fetchLiveBlogs, LiveArticle, INITIAL_LIVE_ARTICLES } from '@/lib/blogs';
import { slugify } from '@/lib/slugify';

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState<'live' | 'guides'>('live');
  const [liveArticles, setLiveArticles] = useState<LiveArticle[]>(INITIAL_LIVE_ARTICLES);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const loadBlogs = async () => {
    setIsLoading(true);
    try {
      const articles = await fetchLiveBlogs();
      if (articles && articles.length > 0) {
        setLiveArticles(articles);
      }
    } catch (e) {
      console.error('Failed to load live blogs:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Silent background fetch to check for updates without blocking initial render
    loadBlogs();
  }, []);

  // Filter categories for live tab
  const liveCategories = useMemo(() => {
    const cats = ['All', 'Mutual Funds', 'SIP & Investing', 'Markets', 'Economy', 'Personal Finance'];
    return cats;
  }, []);

  // Filter categories for guides tab
  const guideCategories = useMemo(() => {
    return ['All', ...Array.from(new Set(BLOGS_DATA.map((b) => b.category)))];
  }, []);

  // Filtered live articles
  const filteredLiveArticles = useMemo(() => {
    return liveArticles.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.source.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [liveArticles, selectedCategory, searchTerm]);

  // Filtered guides
  const filteredGuides = useMemo(() => {
    return BLOGS_DATA.filter((blog) => {
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const featuredGuide = BLOGS_DATA.find((b) => b.featured) || BLOGS_DATA[0];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      {/* Clean Page Header */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 bg-lime-100/80 border border-lime-300 text-lime-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <Radio size={13} className="text-lime-600 animate-pulse" />
          <span>INVESTOR INSIGHTS & REAL-TIME FEEDS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
          Mutual Fund News, <span className="font-serif italic font-normal text-lime-700">Markets</span> & <span className="font-serif italic font-normal text-amber-600">Education</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Real-time industry feeds from MoneyControl, The Economic Times, and Mint Money alongside comprehensive investor literacy guides from Attitude Financial Services.
        </p>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          {/* Controls Bar: Categories & Search */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 18,
            marginBottom: 36
          }}>
            {/* Category Pills */}
            <div
              className="custom-scrollbar"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                overflowX: 'auto',
                paddingBottom: 6,
                maxWidth: '100%'
              }}
            >
              {(activeTab === 'live' ? liveCategories : guideCategories).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? 'var(--navy-900)' : 'var(--border-subtle)',
                    background: selectedCategory === cat ? 'var(--navy-900)' : '#ffffff',
                    color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search & Refresh Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', maxWidth: 360 }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search
                  size={16}
                  style={{
                    position: 'absolute',
                    left: 14,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)'
                  }}
                />
                <input
                  type="text"
                  placeholder={activeTab === 'live' ? 'Search live articles...' : 'Search investor guides...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px 10px 38px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    backgroundColor: '#ffffff'
                  }}
                />
              </div>

              {activeTab === 'live' && (
                <button
                  type="button"
                  onClick={loadBlogs}
                  disabled={isLoading}
                  title="Refresh latest feeds"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-medium)',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    color: 'var(--navy-900)',
                    flexShrink: 0
                  }}
                >
                  <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} style={{ animation: isLoading ? 'spin 1s linear infinite' : 'none' }} />
                </button>
              )}
            </div>
          </div>

          {/* TAB 1: LIVE MARKET & FUND FEEDS */}
          {activeTab === 'live' && (
            <>
              {filteredLiveArticles.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', background: '#ffffff', borderRadius: 'var(--radius-lg)' }}>
                  <BookOpen size={36} style={{ color: 'var(--text-muted)', margin: '0 auto 16px auto' }} />
                  <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>No Live Articles Found</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Try adjusting your search keywords or switching category filters.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredLiveArticles.map((article) => (
                    <article
                      key={article.id}
                      className="card"
                      style={{
                        padding: 0,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-lg)',
                        background: '#ffffff',
                        transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
                      }}
                    >
                      <div>
                        {/* Article Thumbnail */}
                        <Link
                          href={`/blogs/${article.slug || slugify(article.title)}`}
                          style={{
                            position: 'relative',
                            width: '100%',
                            height: 190,
                            backgroundColor: 'var(--navy-900)',
                            overflow: 'hidden',
                            display: 'block'
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={article.image}
                            alt={article.title}
                            loading="lazy"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.4s ease'
                            }}
                          />
                          {/* Source Badge on Image */}
                          <div style={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            background: 'rgba(10, 17, 26, 0.85)',
                            backdropFilter: 'blur(6px)',
                            color: '#ffffff',
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            border: '1px solid rgba(255, 255, 255, 0.15)'
                          }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: article.accent || 'var(--primary)' }} />
                            <span>{article.source}</span>
                          </div>

                          {/* Category Tag */}
                          <div style={{
                            position: 'absolute',
                            bottom: 12,
                            left: 12,
                            background: 'var(--primary)',
                            color: 'var(--navy-950)',
                            padding: '3px 9px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.03em'
                          }}>
                            {article.category}
                          </div>
                        </Link>

                        {/* Card Body */}
                        <div style={{ padding: '20px 22px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                              <span>{article.date}</span>
                              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <Clock size={12} />
                                {article.readTime}
                              </span>
                            </div>

                            <h3 style={{
                              fontSize: '1.15rem',
                              fontWeight: 700,
                              lineHeight: 1.35,
                              marginBottom: 10,
                              color: 'var(--navy-950)'
                            }}>
                              <Link
                                href={`/blogs/${article.slug || slugify(article.title)}`}
                                style={{ color: 'inherit', textDecoration: 'none' }}
                              >
                                {article.title}
                              </Link>
                            </h3>

                            <p style={{
                              fontSize: '0.86rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.6,
                              marginBottom: 16
                            }}>
                              {article.excerpt}
                            </p>
                          </div>
                        </div>

                        {/* Card Footer Link */}
                        <div style={{
                          padding: '14px 22px',
                          borderTop: '1px solid var(--border-subtle)',
                          background: 'var(--bg-alt)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                            Source: {article.source}
                          </span>
                          <Link
                            href={`/blogs/${article.slug || slugify(article.title)}`}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 6,
                              fontSize: '0.82rem',
                              fontWeight: 700,
                              color: 'var(--navy-900)'
                            }}
                          >
                            <span>Read Full Story</span>
                            <ArrowRight size={13} style={{ color: 'var(--primary-dark)' }} />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* TAB 2: INVESTOR KNOWLEDGE GUIDES */}
            {activeTab === 'guides' && (
              <>
                {/* Featured Guide */}
                {featuredGuide && selectedCategory === 'All' && !searchTerm && (
                  <div
                    className="card"
                    style={{
                      marginBottom: 44,
                      padding: '36px 40px',
                      background: 'linear-gradient(135deg, #0d1726 0%, #142338 100%)',
                      color: '#ffffff',
                      border: '1px solid rgba(142, 198, 31, 0.3)',
                      borderRadius: 'var(--radius-xl)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <span style={{
                        background: 'var(--primary)',
                        color: 'var(--navy-950)',
                        fontWeight: 800,
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)'
                      }}>
                        Featured Investor Guide
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Clock size={13} />
                        {featuredGuide.readTime}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: 14, lineHeight: 1.3 }}>
                      <Link href={`/blogs/${featuredGuide.slug}`} style={{ color: '#ffffff' }}>
                        {featuredGuide.title}
                      </Link>
                    </h2>

                    <p style={{ color: '#cbd5e1', fontSize: '0.975rem', lineHeight: 1.68, marginBottom: 24, maxWidth: 840 }}>
                      {featuredGuide.excerpt}
                    </p>

                    <Link href={`/blogs/${featuredGuide.slug}`} className="btn btn-primary">
                      <span>Read Complete Guide</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                )}

                {/* Guides Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                  {filteredGuides.map((post) => (
                    <article
                      key={post.slug}
                      style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        border: '1px solid var(--border-subtle)',
                        boxShadow: '0 4px 20px -2px rgba(10, 17, 26, 0.06)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                      }}
                    >
                      <div>
                        {/* Top Image with Pinned Dark Navy Category Badge */}
                        <Link
                          href={`/blogs/${post.slug}`}
                          style={{
                            position: 'relative',
                            width: '100%',
                            height: 220,
                            backgroundColor: '#0a111a',
                            overflow: 'hidden',
                            display: 'block'
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={post.image}
                            alt={post.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />

                          {/* Pinned Category Pill Badge */}
                          <div style={{
                            position: 'absolute',
                            top: 14,
                            left: 14,
                            backgroundColor: '#0a1728',
                            color: '#ffffff',
                            padding: '5px 14px',
                            borderRadius: '9999px',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)'
                          }}>
                            {post.category}
                          </div>
                        </Link>

                        {/* Body Content */}
                        <div style={{ padding: '24px 24px 16px 24px' }}>
                          {/* Date & Read Time */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: '#64748b',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            marginBottom: 12
                          }}>
                            <Calendar size={13} style={{ color: '#64748b' }} />
                            <span>{post.publishDate}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>

                          {/* Title */}
                          <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            lineHeight: 1.35,
                            marginBottom: 12,
                            color: 'var(--navy-950)',
                            fontFamily: 'var(--font-heading)'
                          }}>
                            <Link
                              href={`/blogs/${post.slug}`}
                              style={{ color: 'inherit', textDecoration: 'none' }}
                            >
                              {post.title}
                            </Link>
                          </h3>

                          {/* Excerpt */}
                          <p style={{
                            fontSize: '0.88rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            margin: 0,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer Link */}
                      <div style={{
                        padding: '16px 24px 24px 24px',
                        borderTop: '1px solid var(--border-subtle)'
                      }}>
                        <Link
                          href={`/blogs/${post.slug}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: '#1d4ed8',
                            textDecoration: 'none'
                          }}
                        >
                          <span>Read Guide</span>
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}

            {/* Statutory Compliance Notice */}
            <div className="compliance-box" style={{ marginTop: 52 }}>
              <p>
                <strong>Investor Awareness Notice:</strong> In accordance with SEBI guidelines and AMFI code of conduct, all articles and news aggregations on this portal are published exclusively for general investor awareness and financial literacy. None of the content constitutes personalized financial or investment advice. Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }