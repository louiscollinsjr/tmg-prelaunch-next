"use client";

import { useState } from "react";
import ProfessionalWaitlistModal from "./ProfessionalWaitlistModal";

const benefits = [
  {
    name: "Steady Work",
    description:
      "Enjoy a steady flow of job opportunities—no client searching needed.",
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
    description:
      "Communicate easily with homeowners to ask questions and build trust.",
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
    description:
      "Earn positive reviews to build credibility and attract more clients.",
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
    description:
      "Get matched with projects that align with your skills and schedule",
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
    description:
      "We promote your services at no extra cost.",
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
];

export default function Pro_Landing_Benefits() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="~mt-20/30 pt-32">
      <div className=" mx-auto md:px-[22px]">
        <div className="bg-gradient-to-br text-black py-20 rounded-3xl w-full max-w-7xl mx-auto">
          <div className="px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="~text-4xl/6xl md:~text-5xl/7xl  tracking-tight font-medium text-slate-800 leading-[1.3] sm:leading-[1.25] mb-10 text-left md:text-center">
                Free to join. Easy to use.
              </h2>
              <p className="~mt-6/20 ~text-base/2xl leading-2 text-gray-500 w-[80%] text-center mx-auto md:mb-40">Discover a hassle-free way to grow your business. With free signup and an easy-to-use platform, <button onClick={() => setIsModalOpen(true)} className="text-teal-600 hover:text-teal-700 font-medium cursor-pointer">Join the waitlist!</button></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 items-center justify-center mx-auto md:~mt-24/28 max-w-9xl">
              {benefits.map((benefit) => (
                <div key={benefit.name} className="text-left bg-white p-10 py-12 rounded-3xl min-h-80 ">
                  {/* <div className="~w-10/40 ~h-10/40 mx-auto mb-2 flex items-center justify-center">
                    {benefit.icon}
                  </div>  */}
                  <div className="~text-xl/2xl md:text-2xl mb-2">
                    <div className="~w-12/16 ~h-12/16 flex-shrink-0 bg-teal-600 rounded-full p-2 text-teal-100 mb-4">
                      {benefit.icon}
                    </div>
                    <span>{benefit.name}</span>
                  </div>
                  <p className="text-black/50 ~text-base/xl max-w-96">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
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
