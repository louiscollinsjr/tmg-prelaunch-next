import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = ["/step01.png"];
const background = "/gradient09.png";

export default function StepOne() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-top bg-white/0 rounded-xl mb-8">
      {/* Left side - Content */}
      <div className="order-2 md:order-1 px-8">
        <h3 className="text-xl/2xl md:text-2xl mb-4 ">
          Step 1: Create Your Profile
        </h3>
        <p className="text-base/xl text-gray-600">
          Sign up and create your professional profile. Add your skills, experience, and service areas to showcase your expertise to potential clients.
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
        <div className="relative z-10 h-full w-full p-8">
          <div className="relative h-full w-full">
            <Image
              src={images[currentImage]}
              alt="Create your professional profile"
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
