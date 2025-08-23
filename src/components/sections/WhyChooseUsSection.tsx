"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUsSection() {
 const sectionRef = useRef<HTMLElement>(null);

 useGSAP(
  () => {
   const tl = gsap.timeline({
    scrollTrigger: {
     trigger: sectionRef.current,
     start: "top 80%",
     end: "bottom 20%",
     toggleActions: "play none none reverse",
    },
   });

   tl
    .from(".why-badge", {
     duration: 0.9,
     y: 20,
     opacity: 0,
     ease: "power3.out",
    })
    .from(
     ".why-title",
     {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.3"
    )
    .from(
     ".why-description",
     {
      duration: 0.3,
      y: 20,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.4"
    )
    // 🔥 Left side cards (1 & 2)
    .from(
     ".why-feature.left",
     {
      x: -40,
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.2,
     },
     "-=0.2"
    )
    // 🔥 Right side cards (3 & 4)
    .from(
     ".why-feature.right",
     {
      x: 40,
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      stagger: 0.2,
     },
     "-=0.9"
    );
  },
  { scope: sectionRef }
 );

 return (
  <section ref={sectionRef} className="relative py-10 md:pt-28 overflow-hidden">
   {/* Background Dubai Tower Image */}
   <Image
    src="/why-choose-us.jpg"
    alt="Dubai Tower"
    fill
    className="w-full h-full object-cover absolute inset-0"
   />

   <div className="relative z-40">
    {/* Header Content */}
    <div className="max-w-7xl mx-auto md:px-0 px-4">
     <div className="max-w-xl">
      <div className="why-badge mb-4">
       <span className="text-sm font-medium text-yellow-600">
        Why Choose Us?
       </span>
      </div>

      <h2 className="why-title text-2xl font-inter md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
       Your Trusted Partner for Property Investment Recovery
      </h2>

      <p className="why-description max-w-[400px] text-base sm:text-lg text-gray-700 mb-12 leading-relaxed">
       Choose us for peace of mind and a partner committed to getting your
       investment back where it belongs—your pocket.
      </p>
     </div>

     {/* Features Grid */}
     <div className="grid grid-cols-1 !text-[#1E1E1E] md:grid-cols-2 lg:grid-cols-4 gap-4 md:pt-5">
      <div className="why-feature left bg-primary/15 backdrop-blur-sm p-6 rounded-lg md:h-[224px]">
       <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Specialized Legal Expertise
       </h3>
       <p className="text-sm md:text-base leading-relaxed font-[300]">
        Our team of property law specialists has a proven track record of
        recovering lost investments in Dubai&apos;s real estate market.
       </p>
      </div>

      <div className="why-feature left bg-primary/15 backdrop-blur-sm p-6 rounded-lg">
       <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Risk-Free Service
       </h3>
       <p className="text-sm md:text-base leading-relaxed font-[300]">
        We operate on a No Win, No Fee basis, meaning you pay nothing unless we
        succeed.
       </p>
      </div>

      <div className="why-feature right bg-primary/15 backdrop-blur-sm p-6 rounded-lg">
       <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Tailored Solutions for Every Client
       </h3>
       <p className="text-sm md:text-base leading-relaxed font-[300]">
        Each case is unique, and we provide personalized strategies to ensure
        the best possible outcome for your claim.
       </p>
      </div>

      <div className="why-feature right bg-primary/15 backdrop-blur-sm p-6 rounded-lg">
       <h3 className="text-lg font-semibold text-gray-900  mb-3">
        International Investor Support
       </h3>
       <p className="text-sm md:text-base leading-relaxed font-[300]">
        Whether {"you're"} local or an international investor, we handle
        everything—from legal filings to negotiations—on your behalf.
       </p>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
