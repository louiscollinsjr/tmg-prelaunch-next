import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = ["/Step0203.png","/Step0201.png","/Step0202.png"];
const background = "/gradient09.png";

export default function StepTwo() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((current) => (current + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-top bg-white/0 rounded-xl mb-8">
      {/* Left side - Content */}
      <div className="order-2 md:order-1 px-8">
        <h3 className="text-xl/2xl md:text-2xl mb-4">
          Step 2: Browse Opportunities
        </h3>
        <p className="text-base/xl text-gray-600">
          Our system connects you with tailored opportunities based on your profile. Browse detailed requests and choose projects that fit your business.
        </p>
      </div>

      {/* Right side - Image */}
      <div className="relative aspect-video rounded overflow-hidden order-1 md:order-2 p-0">
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
        <div className="relative z-10 h-full w-full p-8 md:p-4">
          <div className="relative h-full w-full md:w-[70%] mx-auto">
            <Image
              src={images[currentImage]}
              alt="Browse and select projects"
              fill
              className={`object-contain transition-opacity duration-1000 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
