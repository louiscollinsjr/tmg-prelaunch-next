"use client";

import { useState } from "react";
import StepOne from "./HowToSteps/StepOne";
import StepTwo from "./HowToSteps/StepTwo";
import StepThree from "./HowToSteps/StepThree";
import ProfessionalWaitlistModal from "./ProfessionalWaitlistModal";

export default function Pro_Landing_HowTo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="~text-5xl/7xl md:~text-6xl/9xl tracking-tight font-medium text-slate-800 leading-[1.3] sm:leading-[1.25] text-center mb-16 md:mb-8 border-t-2 border-gray-200 pt-32">
            How it works
          </h2>
          <p className="~mt-6/20 ~text-base/3xl leading-2 text-black w-full md:w-[60%] text-center mx-auto mb-12 md:mb-40 leading-[1.3] sm:leading-[1.25] ">
            Getting started is easy! In just three simple steps, you&apos;ll
            connect with homeowners, find projects that match your skills, and
            grow your business—all while staying in control.{" "}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent  font-medium cursor-pointer"
            >
              Join the waitlist!{" "}
            </button>
          </p>
          {/* steps*/}
          <StepOne />
          <StepTwo />
          <StepThree />
        </div>

        <ProfessionalWaitlistModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
