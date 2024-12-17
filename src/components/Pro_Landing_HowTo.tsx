"use client";

import { useState } from 'react';
import ProfessionalWaitlistModal from './ProfessionalWaitlistModal';

const steps = [
  {
    number: 1,
    title: "Share Your Expertise",
    description: "Tell us about your services, certifications, and availability. This helps us match you with homeowners seeking your skills.",
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
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    )
  },
  {
    number: 2,
    title: "Get Matched with Projects",
    description: "Our system connects you with tailored opportunities based on your profile. Browse detailed requests and choose projects that fit your business.",
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
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    )
  },
  {
    number: 3,
    title: "Connect and Grow",
    description: "Communicate directly with homeowners, manage projects, and build your business with confidence—all through our platform.",
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
    )
  }
];

export default function Pro_Landing_HowTo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section className="py-24 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="~text-5xl/7xl md:~text-6xl/9xl tracking-tight font-medium text-slate-800 leading-[1.3] sm:leading-[1.25] text-center mb-16 md:mb-8 border-t-2 border-gray-200 pt-32">
            How it works
          </h2>
          <p className="~mt-6/20 ~text-base/3xl leading-2 text-gray-500 w-full md:w-[60%] text-center mx-auto mb-12 md:mb-40 leading-[1.3] sm:leading-[1.25] ">Getting started is easy! In just three simple steps, you&apos;ll connect with homeowners, find projects that match your skills, and grow your business—all while staying in control. <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent  font-medium cursor-pointer">Join the waitlist! {' '} </button></p>
          
          <div className="grid grid-cols-1 gap-24">
            {steps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-top">
                {/* Left side - Content */}
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="~w-10/14 ~h-10/14">
                      {step.icon}
                    </div>
                    <div className="text-gray-500 font-medium">
                      {/* Step {step.number} */}
                    </div>
                  </div>
                  
                  <h3 className="~text-3xl/4xl mb-4">
                  Step {step.number} : {step.title}
                  </h3>
                  
                  <p className="~text-base/3xl text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                {/* Right side - Image placeholder */}
                <div className="order-1 md:order-2 aspect-video bg-gray-100 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ProfessionalWaitlistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      </div>
    </section>
  );
}
