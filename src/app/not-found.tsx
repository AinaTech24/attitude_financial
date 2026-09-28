import React from 'react';
import Link from 'next/link';
import { Home, ArrowRight, BookOpen, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      backgroundColor: 'var(--bg-page)',
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px'
    }}>
      <div style={{
        maxWidth: 580,
        textAlign: 'center',
        background: '#ffffff',
        borderRadius: 'var(--radius-xl)',
        padding: '48px 36px',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-md)'
      }}>
        <div style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: 'var(--primary-light)',
          color: 'var(--primary-dark)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px auto'
        }}>
          <Compass size={36} />
        </div>

        <div className="section-badge" style={{ marginBottom: 12 }}>
          ERROR 404
        </div>

        <h1 style={{
          fontSize: '2.4rem',
          fontWeight: 800,
          color: 'var(--navy-950)',
          marginBottom: 14,
          lineHeight: 1.2
        }}>
          Page Not Found
        </h1>

        <p style={{
          fontSize: '0.95rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          marginBottom: 32
        }}>
          The page or statutory resource you requested could not be located. It may have been moved, updated, or temporarily archived.
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
          flexWrap: 'wrap',
          marginBottom: 36
        }}>
          <Link href="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>

          <Link href="/services" className="btn btn-outline">
            <span>Explore Services</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{
          paddingTop: 24,
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          Quick Links:{' '}
          <Link href="/about" style={{ color: 'var(--navy-900)', fontWeight: 600, margin: '0 6px' }}>About</Link>•
          <Link href="/calculators" style={{ color: 'var(--navy-900)', fontWeight: 600, margin: '0 6px' }}>Calculators</Link>•
          <Link href="/blogs" style={{ color: 'var(--navy-900)', fontWeight: 600, margin: '0 6px' }}>Blogs</Link>•
          <Link href="/contact" style={{ color: 'var(--navy-900)', fontWeight: 600, margin: '0 6px' }}>Contact</Link>
        </div>
      </div>
    </div>
  );
}

