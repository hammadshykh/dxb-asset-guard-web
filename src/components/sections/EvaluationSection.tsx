import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const EvaluationSection = () => {
 return (
  <section className="py-10">
   <div className="max-w-7xl mx-auto px-4 md:px-0 py-5 md:py-10 md:pb-20 bg-[#201F20] relative">
    <Image
     src={"Vector.svg"}
     alt="verctor"
     className="w-[452.80865755619953px]  absolute left-0 top-[-500px] rotate-[-50.89 deg]"
     fill
    />
    <div className="flex md:flex-row flex-col justify-between md:px-8 w-full relative z-50">
     <div className="md:w-1/2">
      <h1 className="text-white lg:text-4xl font-inter font-semibold leading-tight italic md:text-3xl text-xl mb-4 md:mb-0">
       Get Started with a <span className="text-primary"> Free Case </span>{" "}
       <span className="text-primary"> Evaluation </span> Today!
      </h1>
     </div>
     <div className="flex items-start flex-col space-y-8 md:w-[40%] !ms-auto">
      <p className="text-white text-sm md:text-base font-medium max-w-md">
       Let us help you recover your lost investments. Contact us today for a
       free, no-obligation case evaluation. We are here to assist you every step
       of the way.
      </p>
      <Button
       className="rounded-full font-semibold md:text-base px-10 py-6"
       size="lg"
      >
       Schedule Your Consultation
      </Button>
     </div>
    </div>
   </div>
  </section>
 );
};

export default EvaluationSection;
