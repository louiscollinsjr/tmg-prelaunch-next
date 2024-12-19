export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Try My Guys',
    url: 'https://trymyguys.com',
    logo: 'https://trymyguys.com/logo.png',
    sameAs: [
      'https://twitter.com/trymyguys',
      'https://facebook.com/trymyguys',
      'https://linkedin.com/company/trymyguys'
    ],
    description: 'Find and book trusted local service providers for all your home service needs',
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://trymyguys.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
