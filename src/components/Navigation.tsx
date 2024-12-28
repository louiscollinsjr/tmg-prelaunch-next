"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useI18n } from "../app/i18n/client"; // Ensure this path is correct
import ProfessionalWaitlistModal from "./ProfessionalWaitlistModal"; // Make sure the path is correct

export default function PrelaunchNavigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const isProfessionalsPage = pathname.endsWith("/professionals");
  const t = useI18n(); // Assuming that useI18n returns the translation function

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 max-w-screen-8xl pb-16 ${
          isProfessionalsPage ? "backdrop-blur-sm bg-zinc-100/5" : ""
        }`}
      >
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
              <p className="hidden sm:block text-gray-600 px-4 text-xs">
                {t("nav.rollingOutSoon")}{" "}
                <b className="text-[#09A4A9]">{t("nav.dallasFortWorth")}</b>
              </p>
              {isProfessionalsPage ? (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center  ~px-4/8 ~py-2/4 ~text-base/3xl md:~text-3xl/4xl tracking-wide  rounded-full text-white bg-black transition-all font-roboto font-thin"
                >
                  {t("nav.joinWaitlist")}
                </button>
              ) : (
                <Link
                  href="/professionals"
                  className="inline-flex items-center  ~px-4/8 ~py-2/4 ~text-base/2xl tracking-wide  rounded-full text-white bg-black transition-all font-roboto font-thin"
                >
                  {t("nav.forTradespeople")}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {typeof window !== "undefined" &&
        createPortal(
          <ProfessionalWaitlistModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />,
          document.body
        )}
    </>
  );
}
