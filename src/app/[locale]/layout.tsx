import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { fontVariables } from '@/config/fonts';
import I18nProvider from '@/components/I18nProvider';

export const metadata: Metadata = {
  title: {
    template: '%s | Try My Guys',
    default: 'Try My Guys - Find and Book Trusted Local Service Providers',
  },
  description: 'Find and book trusted local service providers for all your home service needs',
  keywords: ['home services', 'local services', 'service providers', 'booking platform'],
  openGraph: {
    title: 'Try My Guys - Find and Book Trusted Local Service Providers',
    description: 'Find and book trusted local service providers for all your home service needs',
    url: 'https://trymyguys.com',
    siteName: 'Try My Guys',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Try My Guys - Find and Book Trusted Local Service Providers',
    description: 'Find and book trusted local service providers for all your home service needs',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
      <body className={`${geistSans.variable} ${geistMono.variable} ${fontVariables} bg-zinc-100 min-h-screen flex flex-col font-montserrat`}>
        <I18nProvider locale={lang}>
          <Navigation />
          <main className="pt-0">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}