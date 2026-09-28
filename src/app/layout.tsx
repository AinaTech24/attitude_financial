import type { Metadata } from 'next';
import { Figtree, Outfit, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import 'aos/dist/aos.css';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientProviders from '@/components/common/ClientProviders';
import { COMPANY_INFO } from '@/data/company';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://attitudefinancialservices.com'),
  title: {
    default: `${COMPANY_INFO.legalName} | Mutual Fund Distributor (ARN: ${COMPANY_INFO.arn})`,
    template: `%s | ${COMPANY_INFO.legalName}`
  },
  description: 'AMFI-Registered Mutual Fund Distributor (ARN: 362861) based in Sangli, Maharashtra. Providing mutual fund distribution, investor education, category awareness, and transaction assistance.',
  keywords: [
    'Mutual Fund Distributor Sangli',
    'Attitude Financial Services',
    'Mutual Funds Maharashtra',
    'SIP Calculator',
    'Lumpsum Calculator',
    'Investor Education',
    'ARN 362861',
    'Mutual Fund Information'
  ],
  authors: [{ name: COMPANY_INFO.legalName }],
  creator: COMPANY_INFO.legalName,
  icons: {
    icon: '/attitude_logo.jpeg',
    apple: '/attitude_logo.jpeg'
  },
  openGraph: {
    title: `${COMPANY_INFO.legalName} - Mutual Fund Distributor`,
    description: 'AMFI-Registered Mutual Fund Distributor (ARN: 362861). Assisting investors with mutual fund information, category awareness, and transaction execution.',
    url: 'https://attitudefinancialservices.com',
    siteName: COMPANY_INFO.legalName,
    images: [
      {
        url: '/attitude_logo.jpeg',
        width: 1200,
        height: 1200,
        alt: 'Attitude Financial Services Logo'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${outfit.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <link rel="icon" href="/attitude_logo.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${figtree.variable} ${outfit.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
        <ClientProviders>
          <Header />
          <main style={{ flex: '1 0 auto' }}>
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}

