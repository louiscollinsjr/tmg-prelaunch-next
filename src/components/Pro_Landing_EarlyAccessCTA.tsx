'use client';

import { useState } from 'react';
import AppStoreButtons from '@/components/AppStoreButtons';
import ProfessionalWaitlistModal from './ProfessionalWaitlistModal';

export default function Pro_EarlyAccessCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
      <>
<div className="py-24 md:mt-16 w-full">
<div className="container max-w-5xl p-[22px]">
  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="flex-1">
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
        <span className="text-gray-600">Launching early 2025</span>
      </div>
      
      <h2 className="~text-4xl/6xl md:~text-5xl/7xl  tracking-tight font-medium text-slate-800 leading-[1.3] sm:leading-[1.25] mb-40 text-left md:text-left">
        Sign up today to get early access to <span className="text-burnt-orange">local jobs</span>
      </h2>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-black ~px-5/10 ~py-4/8 ~text-base/3xl md:~text-3xl/5xl font-medium text-white  rounded-2xl hover:bg-opacity-90 transition-all flex items-center gap-2 font-roboto"
      >
        Join waitlist
       
      </button>

      <AppStoreButtons />
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