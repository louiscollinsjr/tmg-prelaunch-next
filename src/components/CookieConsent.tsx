'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 max-w-64 p-6 bg-black rounded-2xl shadow-lg text-white z-50 font-roboto">
      <p className="text-xs mb-4">
        TryMyGuys.com doesn&apos;t use third party cookies - only a single in-house cookie.
        <span className="block mt-2 text-gray-300">No data is sent to a third party.</span>
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleAccept}
          className="w-full sm:w-auto px-6 py-2.5 bg-[#F04E03] hover:bg-orange-600 rounded-lg font-medium transition-colors"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-gray-100 text-black rounded-lg font-medium transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
