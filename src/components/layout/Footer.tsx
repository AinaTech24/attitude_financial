import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, AlertCircle, ChevronRight, Shield } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { COMPANY_INFO } from '@/data/company';
import styles from './Footer.module.css';

const REGULATORY_PORTALS = [
  { name: 'NSE', url: 'https://www.nseindia.com/' },
  { name: 'BSE', url: 'https://www.bseindia.com/' },
  { name: 'SEBI', url: 'https://www.sebi.gov.in/' },
  { name: 'RBI', url: 'https://www.rbi.org.in/' },
  { name: 'CDSL', url: 'https://www.cdslindia.com/' },
  { name: 'NCDEX', url: 'https://www.ncdex.com/' },
  { name: 'MCX', url: 'https://www.mcxindia.com/' }
];

const COMPLIANCE_LINKS = [
  { label: 'AMFI Risk Factors', href: '/risk-factors', isExternal: false },
  { label: 'Terms & Conditions', href: '/terms-of-service', isExternal: false },
  { label: 'Disclaimer', href: '/disclaimer', isExternal: false },
  { label: 'Investor Charter', href: '/investor-charter', isExternal: false },
  { label: 'Fund Selection & Suitability Policy', href: '/fund-selection-policy', isExternal: false },
  { label: 'Client Onboarding & KYC Policy', href: '/client-onboarding', isExternal: false },
  { label: 'Rights & Obligations Of Investors', href: '/rights-and-obligations', isExternal: false },
  { label: "Do's and Don'ts for Investors", href: '/dos-and-donts', isExternal: false },
  { label: 'Privacy Policy', href: '/privacy-policy', isExternal: false },
  { label: 'AMFI Code of Conduct', href: '/AMFI_Code-of-Conduct.pdf', isExternal: true },
  { label: 'SEBI Circulars', href: 'https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1&ssid=7&smid=0', isExternal: true },
  { label: 'KIM / SID / SAI', href: 'https://www.sebi.gov.in/filings/mutual-funds.html', isExternal: true },
  { label: 'Factsheet', href: 'https://www.amfiindia.com/online-center/download-factsheets', isExternal: true },
  { label: 'Scheme-Wise Commission Disclosure', href: '/scheme-wise-commission', isExternal: false },
  { label: 'Registration Disclosure', href: '/registration-disclosure', isExternal: false }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main Footer Columns */}
        <div className={styles.footerGrid}>
          {/* Column 1: Company Info */}
          <div className={styles.companyCol}>
            <BrandLogo variant="footer" />
            <p className={styles.companyDesc}>
              ATTITUDE FINANCIAL SERVICES PVT. LTD. operates as an AMFI-Registered Mutual Fund Distributor, providing mutual fund distribution, investor information, category education, and transaction processing assistance.
            </p>
            <div className={styles.arnTag}>
              <Shield size={14} />
              <span>AMFI ARN-362861</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/mission-vision-values" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Mission, Vision &amp; Values</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/calculators" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Calculators</span>
                </Link>
              </li>
              <li>
                <Link href="/blogs" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/registration-disclosure" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Disclosures</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Overview */}
          <div>
            <h3 className={styles.footerHeading}>Services</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services#mutual-fund-distribution" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Mutual Fund Distribution</span>
                </Link>
              </li>
              <li>
                <Link href="/services#systematic-investment-facilities" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Systematic Facilities (SIP)</span>
                </Link>
              </li>
              <li>
                <Link href="/services#equity-scheme-awareness" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Equity Schemes Awareness</span>
                </Link>
              </li>
              <li>
                <Link href="/services#debt-liquidity-awareness" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Debt & Liquidity Schemes</span>
                </Link>
              </li>
              <li>
                <Link href="/services#tax-awareness-elss" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Tax Awareness via ELSS</span>
                </Link>
              </li>
              <li>
                <Link href="/services#retirement-concepts" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Retirement Concepts</span>
                </Link>
              </li>
              <li>
                <Link href="/services#folio-assistance-support" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Folio & KYC Assistance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Calculators */}
          <div>
            <h3 className={styles.footerHeading}>Calculators</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/calculators/sip" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>SIP Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/calculators/lumpsum" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Lumpsum Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/calculators/swp" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>SWP Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/calculators/retirement" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Retirement Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/calculators/emi" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>EMI Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/calculators" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>All 14 Calculators</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Section */}
          <div>
            <h3 className={styles.footerHeading}>Contact Us</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <div>
                  <a href={`tel:${COMPANY_INFO.mobile}`} className={styles.contactLink}>
                    {COMPANY_INFO.displayPhone}
                  </a>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Mon - Sat: 9:30 AM - 6:30 PM</div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <a href={`mailto:${COMPANY_INFO.email}`} className={styles.contactLink}>
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Compliance Disclosures Section matching User Requirements */}
        <div className={styles.complianceSection}>
          {/* 1. Important Regulatory & Exchange Portals (Top Capsules Row) */}
          <div className={styles.portalTitle}>
            IMPORTANT REGULATORY &amp; EXCHANGE PORTALS
          </div>
          <div className={styles.portalCapsules}>
            {REGULATORY_PORTALS.map((portal) => (
              <a
                key={portal.name}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.portalCapsule}
              >
                {portal.name}
              </a>
            ))}
          </div>

          {/* 2. Statutory Risk & Market Disclaimers (Centered, 12px text) */}
          <div className={styles.disclaimersBox}>
            <p className={styles.disclaimerParagraph}>
              Investments in securities markets are subject to market risks. Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
            </p>
            <p className={styles.disclaimerParagraph}>
              The value of investments may fluctuate due to various factors including market conditions, interest rate movements, credit quality of underlying securities, and liquidity in the market.
            </p>
            <p className={styles.disclaimerParagraph}>
              Different types of financial products carry different levels of risk. Investors should evaluate their risk appetite and investment objectives before making any investment decision.
            </p>
            <p className={styles.disclaimerParagraph}>
              Please refer to the respective offering documents such as the Scheme Information Document (SID), Key Information Memorandum (KIM), Disclosure Documents, or other product-specific materials for detailed risk factors.
            </p>
          </div>

          {/* Registration & Grievances Credentials */}
          <div className={styles.credentialsBox}>
            <p className={styles.credentialsLine}>
              AMFI Registered Mutual Fund Distributor | ARN: <span className={styles.credentialHighlight}>{COMPANY_INFO.arn}</span> | Date: <span className={styles.credentialHighlight}>20-Feb-2024</span> | Valid Till: <span className={styles.credentialHighlight}>20-Feb-2027</span>
            </p>
            <p className={styles.credentialsLine}>
              For Grievances contact: <a href={`tel:${COMPANY_INFO.mobile}`} className={styles.credentialLink}>{COMPANY_INFO.displayPhone}</a> | Email: <a href={`mailto:${COMPANY_INFO.email}`} className={styles.credentialLink}>{COMPANY_INFO.email}</a>
            </p>
          </div>

          {/* 3. Regulatory & Compliance Navigation Links (Centered, single pipe-separated row) */}
          <div className={styles.complianceNav}>
            {COMPLIANCE_LINKS.map((link, idx) => (
              <React.Fragment key={link.label}>
                {idx > 0 && <span className={styles.navPipe}>|</span>}
                {link.isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.complianceNavLink}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={styles.complianceNavLink}>
                    {link.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 4. Industry Badges (Centered) */}
          <div className={styles.industryBadges}>
            <div className={styles.badgeCard}>
              <img
                src="/images/amfi-logo.webp"
                alt="AMFI Logo"
                className={styles.badgeImg}
                loading="lazy"
              />
            </div>
            <div className={styles.badgeCard}>
              <img
                src="/images/mf-sahi-hai-logo.webp"
                alt="Mutual Funds Sahi Hai"
                className={styles.badgeImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 5. Bottom Copyright & Attribution Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomBarInner}>
            <div className={styles.copyrightLeft}>
              &copy; 2026 {COMPANY_INFO.legalName.replace(/\.+$/, '')}. All rights reserved.
            </div>
            <div className={styles.designedByRight}>
              Designed by{' '}
              <a
                href="https://ainatech.in"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.designedByLink}
              >
                AinaTech Services LLP
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
