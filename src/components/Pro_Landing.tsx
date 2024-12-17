'use client';

import ProfessionalHero from './Pro_Landing_Hero';
import Pro_Landing_Benefits from './Pro_Landing_Benefits';
import Pro_Landing_HowTo from './Pro_Landing_HowTo';
import PricingTiers from './Pro_Landing_PricingTiers';
import Pro_EarlyAccessCTA from './Pro_Landing_EarlyAccessCTA';

export default function ProfessionalsPage() {

  return (
    <main className="flex min-h-screen flex-col  max-screen-w-8xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <ProfessionalHero />
        <Pro_Landing_HowTo />
        {/* <PrelaunchScheduling /> */}
        <Pro_Landing_Benefits />
        <PricingTiers />
        <Pro_EarlyAccessCTA />
        </div>
    </main>
  );
}