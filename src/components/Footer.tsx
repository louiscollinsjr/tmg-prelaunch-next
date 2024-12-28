"use client";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "../app/i18n/client"; // Import your translation hook

export default function PrelaunchFooter() {
  const t = useI18n(); // Use your translation hook
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = 'mailto:hello@trymyguys.com';
  };
  return (
    <footer className=" text-gray-800 py-12 max-w-screen-8xl">
      <div className="mx-auto ~px-6/56 ~pt-6/8">
        {/* Row 1 - Logo, Social Icons, and Contact */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 pb-8 border-b-2 border-[#e1ddc9]">
          {/* Logo and Social Icons */}
          <div>
            <div className="~text-xl/3xl font-bebas-neue font-bold tracking-wide text-burnt-orange mb-4">
              <Image
                src="/tmg_flags.png"
                alt="TryMyGuys"
                width={96}
                height={96}
                className="w-auto ~h-20/32 select-none"
                priority
              />
            </div>
            <div className="flex space-x-4 ~pl-8/32">
              <a
                href="https://instagram.com/trymyguys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://bsky.app/profile/trymyguys.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <SiBluesky className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/trymyguys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-right">
            <h3 className=" mb-2 ~text-sm/2xl">{t("footer.anyQuestions")}</h3>
            <a
              href="mailto:hello@trymyguys.com"
              onClick={handleEmailClick}
              className="text-gray-600 font-semibold ~text-base/3xl hover:text-gray-800 transition-colors"
            >
              {t("footer.contactUs")}
            </a>
          </div>
        </div>

        {/* Row 2 - Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 ~text-xs/2xl">
          <div className="text-gray-500 mb-4 md:mb-0">
            {t("footer.copyright").replace(
              "{year}",
              new Date().getFullYear().toString()
            )}
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {t("footer.privacyPolicy")}
            </Link>
            <p>|</p>
            <Link
              href="/legal"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {t("footer.termsOfUse")}
            </Link>
            <p>|</p>
            <Link
              href="/legal"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {t("footer.legal")}
            </Link>
            <p>|</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
