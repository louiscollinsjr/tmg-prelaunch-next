'use client';

import ProfessionalHero from '@/components/Pro_Landing_Hero';
import PrelaunchScheduling from '@/components/Pro_Landing_Scheduling';
import PricingTiers from '@/components/Pro_Landing_PricingTiers';
import Pro_EarlyAccessCTA from '@/components/Pro_Landing_EarlyAccessCTA';

import Pro_Landing_Benefits from './Pro_Landing_Benefits';

export default function ProfessionalsPage() {

  return (
    <main className="flex min-h-screen flex-col  max-screen-w-8xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <ProfessionalHero />
        <PrelaunchScheduling />
        <Pro_Landing_Benefits />
        <PricingTiers />
        <Pro_EarlyAccessCTA />
        </div>
    </main>
  );
}