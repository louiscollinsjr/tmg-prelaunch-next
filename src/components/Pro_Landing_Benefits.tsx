"use client";

import { useState } from "react";
import ProfessionalWaitlistModal from "./ProfessionalWaitlistModal";
import BenefitsSlider from "./BenefitsSlider";

export default function Pro_Landing_Benefits() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="~mt-20/30 pt-2 sm:pt-48">
      <div className=" mx-auto md:px-[22px]">
        <div className="bg-gradient-to-br text-black pt-32 pb-24  w-full max-w-7xl mx-auto border-t-2 border-gray-200">
         
          {/* Benefits slider component */ }
          <BenefitsSlider />

        </div>
      </div>
      <ProfessionalWaitlistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
