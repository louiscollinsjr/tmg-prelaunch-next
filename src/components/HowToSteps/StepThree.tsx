// StepThree Component
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useI18n } from '../../app/i18n/client';

// Step 3
const images = ["/step0301.png"]; 
const background = "/gradient09.png";

export default function StepThree() {
  const [currentImage, setCurrentImage] = useState(0);
    const t = useI18n();

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-top bg-white/0 rounded-xl">
      {/* Left side - Content */}
      <div className="order-2 md:order-1 px-8">
        <h3 className="text-xl/2xl md:text-2xl mb-4">
           {t("stepThree.title")}
        </h3>
        <p className="text-base/xl text-gray-600">
          {t("stepThree.description")}
        </p>
      </div>

      {/* Right side - Image */}
      <div className="relative aspect-video rounded overflow-hidden order-1 md:order-2">
        {/* Background with blur */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
            transform: 'scale(1.1)',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#09A4A9]/10 backdrop-blur-sm" />
        
        {/* Content container */}
        <div className="relative z-10 h-full w-full p-4">
          <div className="relative h-full w-full md:w-[80%] mx-auto">
            <Image
              src={images[currentImage]}
              alt="Connect with clients and grow your business!"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}