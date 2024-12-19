'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ProfessionalWaitlistModal from './ProfessionalWaitlistModal';
import Image from 'next/image';
import { createPortal } from 'react-dom';

export default function PrelaunchNavigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const isProfessionalsPage = pathname.endsWith('/professionals');
  

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 max-w-screen-8xl pb-16 ${isProfessionalsPage ? 'backdrop-blur-sm bg-zinc-100/50' : ''}`}>
        <div className="mx-auto ~px-6/56 ~pt-6/8">
          <div className="flex h-24 justify-between ~pt-2/12">
            {/* Left side */}
            <div className="flex items-center">
            <Link href="/" className="relative z-[100] block">
                <Image 
                  src="/tmg_flags.png"
                  alt="TryMyGuys"
                  width={240}
                  height={96}
                  className="w-auto ~h-20/32 select-none"
                  priority
                />
              </Link>
            </div>

            {/* Right side */}
            <div className="flex items-center pr-2">
              <p className='hidden sm:block text-gray-600 px-4 text-xs'>Rolling out soon in <b className='text-[#09A4A9]'>Dallas Fort Worth Texas</b> </p>
              {isProfessionalsPage ? (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center  ~px-4/8 ~py-2/4 ~text-base/3xl md:~text-3xl/4xl tracking-wide  rounded-full text-white bg-black transition-all font-roboto font-thin"
                >
                  Join waitlist
                </button>
              ) : (
                <Link
                  href="/professionals"
                  className="inline-flex items-center  ~px-4/8 ~py-2/4 ~text-base/2xl tracking-wide  rounded-full text-white bg-black transition-all font-roboto font-thin"
                >
                  For Tradespeople
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {typeof window !== 'undefined' && createPortal(
        <ProfessionalWaitlistModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />,
        document.body
      )}
    </>
  );
}
