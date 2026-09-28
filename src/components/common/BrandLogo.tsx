'use client';

import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'square' | 'compact';
  showSubtitle?: boolean;
  className?: string;
}

export default function BrandLogo({
  variant = 'header',
  showSubtitle = true,
  className = ''
}: BrandLogoProps) {
  if (variant === 'square') {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Attitude Financial Services Home">
        <div style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f7f8f9',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/attitude_logo.jpeg"
            alt="Attitude Logo Icon"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Link>
    );
  }

  if (variant === 'footer') {
    return (
      <Link href="/" className={`brand-logo-footer ${className}`} aria-label="Attitude Financial Services Home">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            padding: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(10,17,26,0.08)',
            border: '1px solid rgba(142, 198, 31, 0.4)'
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/attitude_logo.jpeg"
              alt="Attitude Financial Services Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '0.04em',
              lineHeight: 1.15
            }}>
              ATTITUDE
            </div>
            <div style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: 'var(--primary-dark)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              lineHeight: 1.2
            }}>
              FINANCIAL SERVICES PVT. LTD.
            </div>
            {showSubtitle && (
              <div style={{
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                marginTop: 3,
                letterSpacing: '0.02em'
              }}>
                Mutual Fund Distributor • ARN: 362861
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={`brand-logo-main ${className}`} aria-label="Attitude Financial Services Home">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(10,17,26,0.08)',
          border: '1px solid rgba(142, 198, 31, 0.35)',
          flexShrink: 0
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/attitude_logo.jpeg"
            alt="Attitude Logo"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '0.05em',
            lineHeight: 1.1
          }}>
            ATTITUDE
          </div>
          <div style={{
            fontSize: '0.6875rem',
            fontWeight: 700,
            color: 'var(--primary-dark)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            lineHeight: 1.2
          }}>
            FINANCIAL SERVICES PVT. LTD.
          </div>
          {showSubtitle && (
            <div style={{
              fontSize: '0.66rem',
              color: 'var(--text-muted)',
              fontWeight: 500,
              lineHeight: 1
            }}>
              Mutual Fund Distributor • ARN: 362861
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
