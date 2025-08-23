"use client";

import React, { useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EvaluationSection = () => {
 const sectionRef = useRef(null);

 useGSAP(() => {
  const ctx = gsap.context(() => {
   gsap.from(".evaluation-container", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
     trigger: sectionRef.current,
     start: "top 80%", // when 80% of viewport reached
     toggleActions: "play none none reverse",
    },
   });

   gsap.from(".evaluation-text", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.2,
    scrollTrigger: {
     trigger: sectionRef.current,
     start: "top 80%",
    },
   });

   gsap.from(".evaluation-btn", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.4,
    scrollTrigger: {
     trigger: sectionRef.current,
     start: "top 80%",
    },
   });
  }, sectionRef);

  return () => ctx.revert();
 }, []);

 return (
  <section ref={sectionRef} className="py-10">
   <div className="evaluation-container max-w-7xl mx-auto px-4 md:px-0 py-5 md:py-10 md:pb-20 bg-[#201F20] relative rounded-2xl">
    <Image
     src={"Vector.svg"}
     alt="verctor"
     className="w-[452.80865755619953px]  absolute left-0 top-[-500px] rotate-[-50.89 deg]"
     fill
    />
    <div className="flex md:flex-row flex-col justify-between md:px-8 w-full relative z-50">
     <div className="md:w-1/2 evaluation-text">
      <h1 className="text-white lg:text-4xl font-inter font-semibold leading-tight italic md:text-3xl text-xl mb-4 md:mb-0">
       Get Started with a <span className="text-primary"> Free Case </span>
       <span className="text-primary"> Evaluation </span> Today!
      </h1>
     </div>
     <div className="flex items-start flex-col space-y-8 md:w-[40%] !ms-auto evaluation-btn">
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
