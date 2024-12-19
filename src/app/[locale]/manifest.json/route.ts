import { NextResponse } from 'next/server';
import { MetadataRoute } from 'next';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> | { locale: string } }
) {
  const { locale } = await Promise.resolve(params);
  
  if (!['en', 'es'].includes(locale)) {
    return new NextResponse(null, { status: 404 });
  }

  const manifestContent = {
    en: {
      name: 'Try My Guys',
      short_name: 'TMG',
      description: 'Connect with homeowners and find projects that match your skills',
      categories: ['home services', 'business', 'productivity'],
      lang: 'en',
    },
    es: {
      name: 'Try My Guys',
      short_name: 'TMG',
      description: 'Conéctate con propietarios y encuentra proyectos que coincidan con tus habilidades',
      categories: ['servicios para el hogar', 'negocios', 'productividad'],
      lang: 'es',
    }
  };

  const manifest: MetadataRoute.Manifest = {
    ...manifestContent[locale as keyof typeof manifestContent],
    start_url: `/${locale}`,
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#09A4A9',
    prefer_related_applications: true,
    related_applications: [
      {
        platform: 'play',
        url: 'https://play.google.com/store/apps/details?id=com.trymyguys.app',
        id: 'com.trymyguys.app'
      },
      {
        platform: 'itunes',
        url: 'https://apps.apple.com/app/trymyguys/id123456789'
      }
    ],
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    orientation: 'portrait',
    scope: '/',
  };

  return NextResponse.json(manifest);
}
