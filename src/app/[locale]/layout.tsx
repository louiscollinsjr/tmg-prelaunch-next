import type { Metadata } from "next";
import "../../app/globals.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { fontVariables } from '@/config/fonts';
import I18nProvider from '@/components/I18nProvider';
import CookieConsent from '@/components/CookieConsent';

const metadataBase = 'https://trymyguys.com';

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: {
    template: '%s | Try My Guys',
    default: 'Try My Guys - Find and Book Trusted Local Service Providers',
  },
  description: 'Find and book trusted local service providers for all your home service needs. Connect with professional contractors and get your home projects done right.',
  keywords: [
    'home services',
    'local services',
    'service providers',
    'home maintenance',
    'professional contractors',
    'handyman services',
    'home repair',
    'local contractors',
    'skilled trades',
    'home improvement'
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'es-ES': '/es'
    }
  },
  verification: {
    google: 'Add-your-google-verification-code',
  },
  authors: [{ name: 'Try My Guys' }],
  creator: 'Try My Guys',
  publisher: 'Try My Guys',
  openGraph: {
    title: 'Try My Guys - Find and Book Trusted Local Service Providers',
    description: 'Find and book trusted local service providers for all your home service needs. Connect with professional contractors and get your home projects done right.',
    url: metadataBase,
    siteName: 'Try My Guys',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/tmg_flags.png',
      width: 1200,
      height: 630,
      alt: 'Try My Guys - Professional Home Services'
    }]
  },
  twitter: {
    card: 'summary_large_image',  // This is correct as is in your code
    title: 'Try My Guys - Find and Book Trusted Local Service Providers',
    description: 'Find and book trusted local service providers for all your home service needs',
    creator: '@trymyguys',
    images: [{
      url: '/twitter-image.jpg',
      alt: 'Try My Guys - Professional Home Services'
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Home Services',
}


export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  // Await the params to get the locale
  const { locale } = await params;
  const lang = locale || 'en';

  return (
    <html lang={lang}>
      <head>
        <link rel="manifest" href={`/${lang}/manifest.json`} />
      </head>
      <body className={`${fontVariables} min-h-screen flex flex-col font-roboto`}>
        <I18nProvider locale={lang}>
          <Navigation />
          <main className="pt-0">{children}</main>
          <Footer />
          <CookieConsent />
        </I18nProvider>
      </body>
    </html>
  );
}