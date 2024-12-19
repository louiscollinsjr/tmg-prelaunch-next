import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trymyguys.com'
  const locales = ['en', 'es']

  const routes = [
    '',
    '/professionals',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add routes for each locale
  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: route === '' ? 1 : 0.8,
      })
    }
  }

  return sitemap
}
