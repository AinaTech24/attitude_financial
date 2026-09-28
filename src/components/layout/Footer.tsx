import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, AlertCircle, ChevronRight, Shield } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { COMPANY_INFO } from '@/data/company';
import styles from './Footer.module.css';

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
                <Link href="/disclosure" className={styles.footerLink}>
                  <ChevronRight size={13} />
                  <span>Commission Disclosure</span>
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

        {/* Regulatory & Risk Disclosure Section */}
        <div className={styles.disclosureSection}>
          <div className={styles.riskHeader}>
            <AlertCircle size={18} />
            <span>Statutory Market Risk Disclosure</span>
          </div>

          <p className={styles.riskFactorParagraph}>
            <strong className={styles.riskFactorHighlight}>Risk Factors – </strong>
            Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be sustained in future. There is no guarantee that the investment objective of any selected scheme shall be achieved. All existing and prospective investors are advised to check and evaluate the Exit loads and other exit structure and TER applicable at the time of making the investment before finalizing on any investment decision for Mutual Funds schemes. We deal in Regular Solutions only for Mutual Fund Schemes and earn a Trailing Commission on client investments. Disclosure For Commission earnings is made to clients at the time of investments. Option of Direct Solution for every Mutual Fund Scheme is available to investors offering advantage of lower expense ratio. We are not entitled to earn any commission on Direct Solutions. Hence we do not deal in Direct Solutions.
          </p>

          <p className={styles.disclosureText}>
            {COMPANY_INFO.disclosures.generalDisclosure}
          </p>

          {/* Separate Dedicated Commission & Regulatory Disclosure Block */}
          <div style={{
            marginTop: 20,
            paddingTop: 18,
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Shield size={16} style={{ color: '#0f172a' }} />
                <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0f172a' }}>
                  Distributor Commission Disclosures &amp; Regulatory Directives
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <Link
                  href="/disclosure"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: '#15803d',
                    backgroundColor: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    padding: '6px 14px',
                    borderRadius: 9999,
                    textDecoration: 'none'
                  }}
                >
                  <span>% Trail Commission Rates Table</span>
                  <ChevronRight size={13} />
                </Link>
                <Link
                  href="/disclaimer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    padding: '6px 14px',
                    borderRadius: 9999,
                    textDecoration: 'none'
                  }}
                >
                  <span>Statutory Disclaimer</span>
                  <ChevronRight size={13} />
                </Link>
              </div>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
              In accordance with SEBI circulars (SEBI/IMD/CIR No. 4/168230/09) and AMFI code of conduct, trail commission schedules across scheme categories (Liquid, Income, Gilt, Hybrid, ELSS, and Equity) are fully disclosed. Investors can evaluate regular vs direct plans anytime.
            </p>
          </div>
        </div>

        {/* Bottom Legal Bar matching Image 5 */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomBarInner}>
            <div className={styles.copyright}>
              <span>&copy; 2026 {COMPANY_INFO.legalName.replace(/\.+$/, '')}. All Rights Reserved | Designed by</span>
              <a
                href="https://ainatechservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.designedByLink}
              >
                AinaTech Services LLP
              </a>
            </div>

            <div className={styles.legalLinks}>
              <Link href="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <Link href="/disclaimer#terms" className={styles.legalLink}>
                Terms of Service
              </Link>
              <Link href="/disclaimer" className={styles.legalLink}>
                Disclaimer
              </Link>
              <Link href="/disclosure" className={styles.legalLink}>
                Commission Disclosure
              </Link>
              <a
                href="https://www.sebi.gov.in/filings/mutual-funds.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.legalLink}
              >
                SID/SAI/KIM
              </a>
              <a
                href="/AMFI_Code-of-Conduct.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.legalLink}
              >
                Code of Conduct
              </a>
              <a
                href="https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1&ssid=7&smid=0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.legalLink}
              >
                SEBI Circulars
              </a>
              <Link href="/amfi-risk-factors" className={styles.legalLink}>
                AMFI Risk Factors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
