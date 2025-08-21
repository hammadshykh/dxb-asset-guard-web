import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const EvaluationSection = () => {
 return (
  <section>
   <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 bg-[#201F20] relative">
    <Image
     src={"Vector.svg"}
     alt="verctor"
     className="w-[452.80865755619953px]  absolute left-0 top-[-500px] rotate-[-50.89 deg]"
     fill
    />
    <div className="flex md:flex-row flex-col justify-between px-4 relative z-50">
     <div className="md:w-1/2">
      <h1 className="text-white lg:text-4xl font-bold md:text-3xl text-xl mb-4 md:mb-0">
       Get Started with a Free Case Evaluation Today!
      </h1>
     </div>
     <div className="flex items-start flex-col space-y-8 md:w-1/2">
      <p className="text-white max-w-xl text-sm md:text-base">
       Let us help you recover your lost investments. Contact us today for a
       free, no-obligation case evaluation. We are here to assist you every step
       of the way.
      </p>
      <Button className="md:px-10 px-5 py-6 rounded-full" size="lg">
       Schedule Your Consultation
      </Button>
     </div>
    </div>
   </div>
  </section>
 );
};

export default EvaluationSection;
