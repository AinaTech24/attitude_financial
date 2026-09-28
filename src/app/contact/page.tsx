'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Navigation, ExternalLink,
  ChevronDown, Check, TrendingUp, Calendar, ShieldCheck, Landmark, HelpCircle, Calculator 
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

const ENQUIRY_OPTIONS = [
  {
    value: 'Mutual Fund Distribution',
    label: 'Mutual Fund Distribution',
    icon: Landmark,
    badgeColor: '#eff6ff',
    iconColor: '#2563eb'
  },
  {
    value: 'Mutual Funds & SIPs',
    label: 'Mutual Funds & SIPs',
    icon: TrendingUp,
    badgeColor: '#ecfdf5',
    iconColor: '#16a34a'
  },
  {
    value: 'Life & Health Insurance',
    label: 'Life & Health Insurance',
    icon: ShieldCheck,
    badgeColor: '#fef2f2',
    iconColor: '#dc2626'
  },
  {
    value: 'Tax Saving Strategies',
    label: 'Tax Saving Strategies',
    icon: Calculator,
    badgeColor: '#fef3c7',
    iconColor: '#d97706'
  },
  {
    value: 'General Inquiry',
    label: 'General Inquiry',
    icon: HelpCircle,
    badgeColor: '#f1f5f9',
    iconColor: '#475569'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    category: 'Mutual Fund Distribution',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission handling
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-28 pb-16">
      {/* Clean Page Header */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <span>LET&apos;S CONNECT</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
          Get in Touch with Our{' '}
          <span className="font-serif italic font-normal text-lime-700">AMFI-Registered</span>{' '}
          <span className="font-serif italic font-normal text-amber-600">Distribution Team</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Whether you&apos;re starting your first SIP, tracking your family folio, or exploring retirement corpus calculations — we&apos;re here to assist.
        </p>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Contact Form Column */}
            <div>
              <div className="card p-5 sm:p-8 lg:p-10">
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--navy-950)', marginBottom: 8 }}>
                  Send an Enquiry
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 28 }}>
                  Fill out the form below to connect with our distribution desk. We will respond promptly.
                </p>

                {submitted ? (
                  <div style={{
                    padding: '36px 24px',
                    textAlign: 'center',
                    background: 'var(--primary-light)',
                    border: '1px solid rgba(142, 198, 31, 0.4)',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <CheckCircle2 size={48} style={{ color: 'var(--primary-dark)', margin: '0 auto 16px auto' }} />
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--navy-950)', marginBottom: 8 }}>
                      Enquiry Received
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: 420, margin: '0 auto 20px auto' }}>
                      Thank you for contacting ATTITUDE FINANCIAL SERVICES PVT. LTD. Our team will get in touch with you.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          mobile: '',
                          category: 'Mutual Fund Distribution',
                          message: ''
                        });
                      }}
                      className="btn btn-outline btn-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* Full Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: 8 }}>
                        Full Name <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patil"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-medium)',
                          fontSize: '0.9375rem',
                          outline: 'none',
                          backgroundColor: '#ffffff'
                        }}
                      />
                    </div>

                    {/* Email Address & Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: 8 }}>
                          Email Address <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. ramesh@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-medium)',
                            fontSize: '0.9375rem',
                            outline: 'none',
                            backgroundColor: '#ffffff'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: 8 }}>
                          Mobile Number <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-medium)',
                            fontSize: '0.9375rem',
                            outline: 'none',
                            backgroundColor: '#ffffff'
                          }}
                        />
                      </div>
                    </div>

                    {/* Service Selection - Sleek Service Cards without heavy descriptions */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#64748b' }}>
                        Select Service <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {ENQUIRY_OPTIONS.map((opt) => {
                          const IconComponent = opt.icon;
                          const isSelected = formData.category === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setFormData({ ...formData, category: opt.value })}
                              className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                                isSelected
                                  ? 'bg-lime-50/90 border-lime-500 shadow-sm ring-2 ring-lime-500/20'
                                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform"
                                style={{ backgroundColor: opt.badgeColor }}
                              >
                                <IconComponent size={16} style={{ color: opt.iconColor }} />
                              </div>
                              <span className={`text-[0.88rem] flex-1 truncate ${
                                isSelected ? 'text-slate-950 font-bold' : 'text-slate-700 font-semibold'
                              }`}>
                                {opt.label}
                              </span>
                              {isSelected && (
                                <div className="w-5 h-5 rounded-full bg-lime-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                  <Check size={12} strokeWidth={3} />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                      <input type="hidden" name="category" value={formData.category} />
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: 8 }}>
                        Message / Query Details
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please specify your query regarding mutual fund documentation or transaction assistance..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-medium)',
                          fontSize: '0.9375rem',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary"
                      style={{ width: '100%', marginTop: 8 }}
                    >
                      <Send size={16} />
                      <span>{loading ? 'Submitting...' : 'Send Enquiry'}</span>
                    </button>
                  </form>
                )}

                <div className="compliance-box" style={{ marginTop: 24 }}>
                  <p>
                    <strong>Privacy Notice:</strong> We do not collect confidential financial information, income details, or asset portfolios through this enquiry form. All communications remain confidential and adhere to AMFI distributor conduct standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Office & Company Details Column */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Office Card */}
                <div className="card">
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--navy-950)', marginBottom: 18 }}>
                    Sangli Office Information
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 18, fontSize: '0.9375rem' }}>
                    <div style={{ display: 'flex', gap: 14 }}>
                      <MapPin size={22} style={{ color: 'var(--primary-dark)', flexShrink: 0, marginTop: 3 }} />
                      <div>
                        <strong>Address:</strong>
                        <p style={{ marginTop: 4, color: 'var(--text-secondary)' }}>
                          {COMPANY_INFO.address.full}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 14 }}>
                      <Phone size={22} style={{ color: 'var(--primary-dark)', flexShrink: 0, marginTop: 3 }} />
                      <div>
                        <strong>Phone / Mobile:</strong>
                        <p style={{ marginTop: 4 }}>
                          <a href={`tel:${COMPANY_INFO.mobile}`} style={{ color: 'var(--navy-950)', fontWeight: 600 }}>
                            {COMPANY_INFO.displayPhone}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 14 }}>
                      <Mail size={22} style={{ color: 'var(--primary-dark)', flexShrink: 0, marginTop: 3 }} />
                      <div>
                        <strong>Official Email:</strong>
                        <p style={{ marginTop: 4 }}>
                          <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'var(--navy-950)', fontWeight: 600 }}>
                            {COMPANY_INFO.email}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 14 }}>
                      <Clock size={22} style={{ color: 'var(--primary-dark)', flexShrink: 0, marginTop: 3 }} />
                      <div>
                        <strong>Working Hours:</strong>
                        <p style={{ marginTop: 4, color: 'var(--text-secondary)' }}>
                          Monday to Saturday: 9:30 AM – 6:30 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Contacts Card */}
                <div className="card">
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--navy-950)', marginBottom: 14 }}>
                    Key Personnel
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: '0.9rem' }}>
                    <div>
                      <strong>{COMPANY_INFO.owner}</strong>
                      <div style={{ color: 'var(--primary-dark)', fontSize: '0.8rem', fontWeight: 600 }}>
                        Owner & Principal Distributor
                      </div>
                    </div>
                    <div style={{ paddingTop: 10, borderTop: '1px solid var(--border-subtle)' }}>
                      <strong>FIROJ SUTAR</strong>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Manager</div>
                    </div>
                    <div style={{ paddingTop: 10, borderTop: '1px solid var(--border-subtle)' }}>
                      <strong>CHIDANAND SHIRASHYAD</strong>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Assistant</div>
                    </div>
                  </div>
                </div>

                {/* Statutory Registration Banner */}
                <div style={{
                  padding: '20px 24px',
                  background: 'var(--navy-900)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-dark)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, color: 'var(--primary)' }}>
                    <AlertCircle size={18} />
                    <strong style={{ fontSize: '0.9rem' }}>Official Distributor Registration</strong>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                    Firm: {COMPANY_INFO.legalName}<br />
                    AMFI Registration Number (ARN): <strong>{COMPANY_INFO.arn}</strong><br />
                    {COMPANY_INFO.disclosures.marketRiskNotice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Section on top of Footer */}
      <section className="pb-12">
        <div className="container">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-2">
                  <MapPin size={13} />
                  <span>OFFICE LOCATION</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Locate Our Sangli Office on Google Maps
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  {COMPANY_INFO.address.full}
                </p>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-full transition-colors self-start md:self-auto shrink-0 shadow-sm"
              >
                <Navigation size={15} />
                <span>Get Driving Directions</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
              <iframe
                title="Attitude Financial Services Location Map"
                src="https://maps.google.com/maps?q=Adityasai+Landmark+Near+Ram-Mandir+Sangli+Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

