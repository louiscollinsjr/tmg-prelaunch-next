import { MetadataRoute } from 'next'
import { setStaticParamsLocale } from 'next-international/server'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  // Set default locale for static generation
  setStaticParamsLocale('en')
  
  const manifestContent: MetadataRoute.Manifest = {
    name: 'Try My Guys',
    short_name: 'TMG',
    description: 'Connect with homeowners and find projects that match your skills',
    categories: ['home services', 'business', 'productivity'] as const,
    lang: 'en',
    start_url: '/',
    display: 'standalone' as const,
    background_color: '#ffffff',
    theme_color: '#09A4A9',
    prefer_related_applications: true,
    related_applications: [
      {
        platform: 'play' as const,
        url: 'https://play.google.com/store/apps/details?id=com.trymyguys.app',
        id: 'com.trymyguys.app'
      },
      {
        platform: 'itunes' as const,
        url: 'https://apps.apple.com/app/trymyguys/id123456789'
      }
    ] as const,
    screenshots: [
      {
        src: '/screenshots/home.png',
        sizes: '1280x720',
        type: 'image/png' as const,
        label: 'Home Screen of Try My Guys'
      }
    ] as const,
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png' as const,
        purpose: 'maskable' as const
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png' as const,
        purpose: 'any' as const
      }
    ] as const,
    orientation: 'portrait' as const,
    scope: '/',
  }

  return manifestContent
}
