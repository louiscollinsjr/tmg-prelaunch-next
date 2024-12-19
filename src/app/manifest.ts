import { MetadataRoute } from 'next'
import { getCurrentLocale } from './i18n'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = await getCurrentLocale()
  
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
  }

  return {
    ...manifestContent[locale],
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
    screenshots: [
      {
        src: '/screenshots/home.png',
        sizes: '1280x720',
        type: 'image/png',
        platform: 'wide',
        label: 'Home Screen of Try My Guys'
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
  }
}
