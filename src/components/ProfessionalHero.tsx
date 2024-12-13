'use client';

import { useState } from 'react';
import { useI18n } from '../app/i18n/client';
import ProfessionalWaitlistModal from './ProfessionalWaitlistModal';

export default function ProfessionalHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useI18n();

  return (
    <div className="relative isolate px-6">
      <div className="mx-auto max-w-7xl py-8 ~pt-24/64">
        <div className="text-left sm:text-center flex flex-col items-start sm:items-center">
          <h1 className="~text-5xl/7xl md:~text-6xl/9xl tracking-tight font-bold text-slate-800 leading-[1.15] sm:leading-[1.1]"> 
            {t('professionals.hero.title')} <span className="bg-gradient-to-r from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent">{t('professionals.hero.titleHighlight')}</span> 
          </h1>
          <p className="~mt-6/20 ~text-base/3xl leading-2 text-gray-900 w-[80%]">
            {t('professionals.hero.description')}
          </p>
          <div className="~mt-10/24 flex flex-col sm:flex-row items-start sm:items-center gap-x-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-burnt-orange ~px-5/10 ~py-4/8 ~text-base/3xl md:~text-3xl/5xl font-medium text-white shadow-sm hover:bg-burnt-orange-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt-orange"
            >
              {t('professionals.hero.waitlist')}
            </button>
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