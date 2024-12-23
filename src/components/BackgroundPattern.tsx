'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface BackgroundPatternProps {
  opacity?: string;
  className?: string;
}

const backgroundIcons = [
    'broom', 'bug', 'couch', 'fan', 'lightning',
    'paint-brush-broad', 'pipe', 'screwdriver', 'toolbox',
    'tree', 'wrench'
  ];
  

export default function BackgroundPattern({ opacity = "0.03", className = "" }: BackgroundPatternProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0 z-20"
        style={{
          background: 'radial-gradient(circle at center, rgb(244 244 245) 0%, transparent 50%)'
        }}
      />
      
      {/* Icons grid */}
      <div 
        className="absolute inset-0 grid grid-cols-6 md:grid-cols-6 lg:grid-cols-12 gap-2 mx-auto"
        style={{ opacity }}
      >
        {Array.from({ length: 72 }).map((_, index) => {
          const iconName = backgroundIcons[index % backgroundIcons.length];
          return (
            <div
              key={index}
              className="~w-8/24 ~h-8/24"
              style={{
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              <Image
                src={`/filterSVGs/${iconName}.svg`}
                alt="Background Icon"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}