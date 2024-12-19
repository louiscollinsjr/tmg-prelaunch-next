'use client';

import React, { useState, useEffect } from 'react';
import ProfessionalWaitlistModal from './ProfessionalWaitlistModal';

interface Benefit {
  name: string;
  description: string;
  icon: React.ReactElement;
  image: string;
}

const benefits: Benefit[] = [
  {
    name: "Steady Work",
    description: "Enjoy a steady flow of job opportunities—no client searching needed.",
    image: "/steadywork.png",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    name: "Direct Connections",
    description: "Communicate easily with homeowners to ask questions and build trust.",
    image: "/directconnections.png",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
  {
    name: "Build Your Reputation",
    description: "Earn positive reviews to build credibility and attract more clients.",
    image: "/buildreputation.png",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    name: "Easy Job Matching",
    description: "Get matched with projects that align with your skills and schedule",
    image: "/easyjobmatching.png",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
        />
      </svg>
    ),
  },
  {
    name: "Save on Advertising",
    description: "We promote your services at no extra cost.",
    image: "/advertise.png",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Expand Your Network",
    description: "Connect with homeowners and professionals to unlock new opportunities.",
    image: "/expandwork.png",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
];

export default function BenefitsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle automatic slide transitions
  useEffect(() => {
    const transitionDuration = 700; // milliseconds
    const slideDuration = 8000; // milliseconds

    const advanceSlide = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1;
          return nextIndex >= benefits.length ? 0 : nextIndex;
        });
        setIsTransitioning(false);
      }, transitionDuration);
    };

    const timer = setInterval(advanceSlide, slideDuration);
    return () => clearInterval(timer);
  }, []);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="w-full max-w-8xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-gray-500 uppercase tracking-wider mb-2 text-xs">Benefits</p>
        <h2 className="~text-4xl/6xl md:~text-5xl/7xl tracking-tight font-medium text-slate-800 leading-[1.3] sm:leading-[1.25 font-roboto">
          Free to Join. Easy to use.
        </h2>
        <p className="~mt-6/10 ~text-base/3xl rounded leading-2 text-black text-left w-[90%] sm:w-[80%] sm:text-center mx-auto max-w-5xl md:mb-32">Discover a hassle-free way to grow your business. With free signup and an easy-to-use platform.  <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent  font-medium cursor-pointer"
            >
              Join the waitlist!{" "}
            </button></p>
      </div>

      <div className="relative  overflow-hidden aspect-[16/9]">
        {/* Background Image with Fade Transition */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Blurred background */}
          <div 
            className="absolute inset-0  scale-110"
            style={{
              backgroundImage: `url(${benefits[currentIndex].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/05" />
        </div>

        {/* Icon Display
        <div
          className={`hidden md:flex absolute inset-0 items-center justify-center transition-opacity duration-1000 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-32 h-32 text-white/90 relative z-20 bg-black/30 rounded-lg flex items-center justify-center p-4">
            {benefits[currentIndex].icon}
          </div>
        </div> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full p-8 pb-16 text-center">
          <h3 className="~text-3xl/7xl font-medium text-white mb-4">
            {benefits[currentIndex].name}
          </h3>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            {benefits[currentIndex].description}
          </p>
          <button
            onClick={() => {}} // Add your waitlist modal handler here
            className="rounded-full bg-gray-50 hover:bg-white/90 px-8 py-3 text-black font-normal transition-colors tracking-wide font-roboto"
          >
            Join the waitlist
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1} of ${benefits.length}`}
              />
            ))}
          </div>
        </div>
      </div>
     
      <ProfessionalWaitlistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
