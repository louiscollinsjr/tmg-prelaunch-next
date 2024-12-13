'use client';

import { useState } from 'react';
import { useI18n } from '../app/i18n/client';
import ProfessionalWaitlistModal from './ProfessionalWaitlistModal';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  key: 'starter' | 'pro' | 'master' | 'elite';
  price: number;
  highlight?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    key: 'starter',
    price: 0,
  },
  {
    key: 'pro',
    price: 600,
    highlight: true,
  },
  {
    key: 'master',
    price: 900,
  },
  {
    key: 'elite',
    price: 1200,
  },
];

const getFeatures = (t: any, tier: string): PricingFeature[] => {
  const features = [
    'profile',
    'description',
    'advertisement',
    'images',
    'website',
    'email',
    'calendar',
  ];

  // Get the included features based on the tier
  const includedFeatures = {
    starter: ['profile', 'description', 'advertisement'],
    pro: ['profile', 'access', 'website', 'description', 'advertisement', 'images'],
    master: ['profile', 'access', 'website', 'description', 'advertisement', 'images', 'email'],
    elite: ['profile', 'access', 'website', 'description', 'advertisement', 'images', 'email', 'calendar'],
  };

  return features.map(feature => ({
    name: t(`professionals.pricing.tiers.${tier}.features.${feature}`),
    included: includedFeatures[tier as keyof typeof includedFeatures].includes(feature),
  }));
};

export default function PricingTiers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useI18n();

  return (
    <>
      <ProfessionalWaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="~pt-24/80 bg-zinc-100">
        <div className="mx-auto max-w-screen-7xl px-6 lg:px-8">
          <div className="mx-auto ~max-w-screen-4xl/7xl text-center">
            <h2 className="~text-5xl/7xl md:~text-6xl/9xl font-bold tracking-tight text-slate-800">
              {t('professionals.pricing.title')}
            </h2>
            <p className="~mt-6/16 ~text-lg/2xl leading-8 text-gray-600">
              {t('professionals.pricing.subtitle')}
            </p>
          </div>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-screen-8xl lg:grid-cols-4 lg:gap-x-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.key}
                className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                  tier.highlight
                    ? 'bg-white shadow-xl ring-2 ring-burnt-orange'
                    : 'bg-white/60'
                }`}
              >
                <h3 className="~text-lg/4xl font-semibold leading-8 text-gray-900">
                  {t(`professionals.pricing.tiers.${tier.key}.name`)}
                </h3>
                <p className="mt-4 ~text-sm/2xl leading-6 text-gray-600">
                  {t(`professionals.pricing.tiers.${tier.key}.description`)}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="~text-4xl/7xl font-bold tracking-tight text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="~text-sm/4xl font-semibold leading-6 text-gray-600">
                    {t('professionals.pricing.perYear')}
                  </span>
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`mt-6 block w-fit rounded-full ~px-5/14 ~py-4/5 ~text-base/2xl md:~text-2xl/3xl font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-roboto ${
                    tier.highlight
                      ? 'bg-burnt-orange text-white hover:bg-opacity-90'
                      : 'bg-zinc-200 text-slate-800 hover:bg-zinc-300'
                  }`}
                >
                  {t('professionals.hero.waitlist')}
                </button>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {getFeatures(t, tier.key).map((feature) => (
                    <li key={feature.name} className="flex gap-x-3">
                      {feature.included ? (
                        <svg
                          className="h-6 w-5 flex-none text-burnt-orange"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-5 flex-none text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
