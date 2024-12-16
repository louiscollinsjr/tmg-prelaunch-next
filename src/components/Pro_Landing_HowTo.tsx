"use client";

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    number: 1,
    title: "Tell Us About Your Business",
    description: "What type of services do you offer? What kind of jobs are you looking for? Share details about your expertise, certifications, and availability. This helps us match you with the right homeowners seeking your specific skill and ensures you get the most relevant jobs."
  },
  {
    number: 2,
    title: "Find Jobs Tailored to Your Expertise",
    description: "Create a comprehensive profile in our professional community. Our advanced matching system will connect your unique service offerings with ideal homeowner jobs, using sophisticated data points to ensure the perfect partnership."
  },
  {
    number: 3,
    title: "Pick the Perfect Job with Confidence",
    description: "Homeowners submit detailed job requests, outlining the scope, requirements, and specific needs for their homes. With clear descriptions, you can confidently select jobs that best fit your business."
  },
  {
    number: 4,
    title: "Connect Directly with Homeowners",
    description: "Our platform makes it simple to communicate with homeowners who have shared detailed job requests. Use our built-in messaging tools to ask questions, clarify job details, and build strong connections. This direct communication ensures transparency and helps you determine if the job is the right fit for your expertise."
  },
  {
    number: 5,
    title: "Receive and Manage Jobs Efficiently",
    description: "Jobs start arriving quickly. We can send them directly to your system email, or you can log into our platform to review and manage jobs."
  },
  {
    number: 6,
    title: "Submit Your Job Interest",
    description: "When you're ready to submit your interest in a job, handle all the details seamlessly within our platform."
  }
];

export default function Pro_Landing_HowTo() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-24 md:py-64">
      <div className="~px-8/56 ~mt-20/30">
      <div className=" mx-auto md:px-[22px]">
        <div className="bg-gradient-to-br from-gray-200 to-gray-200 text-white py-20 rounded-3xl w-full max-w-screen-8xl">
          <div className="px-4 sm:px-6 lg:px-">
            <div className="text-center mb-12 text-black">
        <h2 className="~text-5xl/7xl font-bold text-center mb-16  font-tiro-bangla">How It Works</h2>
        
        <div className="relative">
          {/* Carousel Navigation */}
          <button
            onClick={prevStep}
            className="absolute left-20 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextStep}
            className="absolute right-20 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          {/* Step Content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side - Image placeholder */}
              <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Right side - Content */}
              <div>
                <div className="text-gray-500 font-medium mb-2">
                  How it works: Step {steps[currentStep].number}
                </div>
                
                <h3 className="~text-3xl/5xl font-bold mb-6">
                  {steps[currentStep].title}
                </h3>
                
                <p className="~text-base/4xl text-gray-600">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStep ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </section>
  );
}
