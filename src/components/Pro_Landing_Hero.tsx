'use client';

import { useState } from 'react';
import { useI18n } from '../app/i18n/client';
import ProfessionalWaitlistModal from './ProfessionalWaitlistModal';

export default function ProfessionalHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useI18n();

  return (
    <div className="relative isolate px-6 lg:min-h-[80vh] py-32 pb-8">
      <div className="mx-auto max-w-7xl py-8 ~pt-24/64 mx-auto">
        <div className="text-left sm:text-center flex flex-col items-start sm:items-center">
          <h1 className="~text-5xl/7xl md:~text-6xl/9xl tracking-tight font-medium text-slate-800 leading-[1.3] sm:leading-[1.25]"> 
            {t('professionals.hero.title')} <span className="bg-gradient-to-r from-[#F04E03]  via-[#0b67a8] to-[#09A4A9] bg-clip-text text-transparent animate-gradient">{t('professionals.hero.titleHighlight')}</span> 
          </h1>
          <p className="~mt-6/20 ~text-base/3xl leading-2 text-gray-500 w-[60%]">
            {t('professionals.hero.description')}
          </p>
          <div className="~mt-10/24 flex flex-col sm:flex-row items-start sm:items-center gap-x-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-black ~px-5/10 ~py-4/8 ~text-base/2xl md:~text-3xl/5xl text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt-orange font-roboto"
            >
              {t('professionals.hero.waitlist')}
            </button>
            <div className="mt-4 sm:mt-0 pl-2 sm:pl-8 sm:border-l border-gray-200">
                  <div className="text-xs text-gray-600">
                    <p className='font-bold text-left'>Launching early 2025</p>
                    <p className="text-left">No sign up fees</p>
                  </div>
            </div>      
          </div>
        </div>
      </div>

      <ProfessionalWaitlistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
