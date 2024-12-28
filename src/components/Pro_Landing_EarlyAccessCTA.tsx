'use client';

import { useState } from 'react';
import AppStoreButtons from '@/components/AppStoreButtons';
import ProfessionalWaitlistModal from './ProfessionalWaitlistModal';
import Image from 'next/image';
import { useI18n } from '../app/i18n/client';

export default function Pro_EarlyAccessCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useI18n();

    return (
      <>
<div className="py-24 md:py-80 md:mt-16 w-full">
<div className="container max-w-screen-8xl p-[22px] ">
  <div className="flex flex-col md:flex-row justify-between gap-12 mx-auto min-h-[600px]">
    <div className="flex-1 max-w-[50%] p-8">
      <div className="flex items-center gap-2 mb-4">
      <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008H16.5v-.008Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Zm0 2.25h.008v.008h-.008v-.008Z"
    />
  </svg>
        <span className="text-gray-600">
           {t('earlyAccessCTA.launchingSoon')}
           </span>
      </div>
      
      <h2 className="~text-4xl/6xl md:~text-5xl/7xl  tracking-tight font-medium text-slate-800 leading-[1.6] sm:leading-[1.5] mb-40 text-left md:text-left" dangerouslySetInnerHTML={{__html: t('earlyAccessCTA.title')}}>
       
      </h2>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-black ~px-5/10 ~py-4/8 ~text-base/3xl md:~text-3xl/5xl font-medium text-white  rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 font-roboto"
      >
        {t('earlyAccessCTA.joinWaitlist')}
       
      </button>

      <AppStoreButtons />
    </div>

    <div className="flex-1 flex">
      <div className="relative w-full h-full">
        <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <Image
          src="/iPhone 14 Pro Max Crop34.png"
          alt="TMG Pro App on iPhone"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
    </div>

    <ProfessionalWaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
  </div>
</div>
</div>

</>
    );
  }