"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

export default function HowWeWorkSection() {
 const sectionRef = useRef<HTMLElement>(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
   const tl = gsap.timeline({
    scrollTrigger: {
     trigger: sectionRef.current,
     start: "top 80%",
     end: "bottom 20%",
     toggleActions: "play none none reverse",
    },
   });

   tl
    .from(".work-badge", {
     duration: 0.6,
     y: 20,
     opacity: 0,
     ease: "power3.out",
    })
    .from(
     ".work-title",
     {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.3"
    )
    .from(
     ".work-description",
     {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.4"
    )
    .from(
     ".work-image",
     {
      duration: 1,
      x: -50,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.6"
    )
    .from(
     ".work-feature",
     {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.1,
     },
     "-=0.4"
    )
    .from(
     ".work-button",
     {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.2"
    );
  }, sectionRef);

  return () => ctx.revert();
 }, []);

 return (
  <section ref={sectionRef} className="md:pt-16 py-10 bg-white">
   <div className="max-w-7xl mx-auto px-4">
    {/* Header */}
    <div className="mb-14">
     <div className="work-badge mb-4">
      <span className="text-sm md:text-base font-semibold text-[#A58E50]">
       How We Work
      </span>
     </div>

     <h2 className="work-title text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 ">
      Simple, Transparent Process to Recover Your Funds
     </h2>

     <p className="work-description text-base sm:text-lg font-[300] text-gray-600 max-w-3xl leading-relaxed">
      {"We've"} done all the heavy lifting so you {"don't"} have to — get all
      the data you need to launch and grow your business faster.
     </p>
    </div>
   </div>

   {/* Content Grid */}
   <div className="grid grid-cols-1 bg-[#FFFBF1] lg:grid-cols-2 gap-12 items-center">
    {/* Left Image */}
    <div className="work-image">
     <div className="relative overflow-hidden">
      <Image
       src="/funds-section-image.jpg"
       alt="Business consultation meeting"
       width={400}
       height={400}
       className="w-full h-[400px] sm:h-[600px] object-cover"
      />
      <div className="bg-[#000000] opacity-30 inset-0 absolute"></div>
      <div className="bg-[#F3F0E8] opacity-20 inset-0 absolute"></div>
     </div>
    </div>

    {/* Right Content */}
    <div className="md:space-y-8 space-y-6 grid grid-cols-1 md:gap-8 md:grid-cols-2 p-4 md:p-16">
     {/* Feature 1 */}
     <div className="work-feature">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
       Free Case Evaluation
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
       Our experts will assess your situation and provide a clear roadmap for
       recovery.
      </p>
     </div>

     {/* Feature 2 */}
     <div className="work-feature">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
       Legal and Financial Expertise
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
       We work with top legal teams to build a solid case and pursue your claim.
      </p>
     </div>

     {/* Feature 3 */}
     <div className="work-feature">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
       No Win, No Fee
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
       You only pay if we successfully recover your lost investment—no hidden
       fees or upfront costs.
      </p>
     </div>

     {/* Feature 4 */}
     <div className="work-feature">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
       Fast & Effective Recovery
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
       We strive to resolve cases quickly, ensuring you get your funds back as
       soon as possible.
      </p>
     </div>

     {/* CTA Button */}
     <div className="work-button pt-4">
      <Button size="lg" className="rounded-full px-10 py-6">
       Schedule Your Consultation
      </Button>
     </div>
    </div>
   </div>
  </section>
 );
}
