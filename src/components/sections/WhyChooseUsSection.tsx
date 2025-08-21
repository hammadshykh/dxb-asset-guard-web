"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

export default function WhyChooseUsSection() {
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
    .from(".why-badge", {
     duration: 0.6,
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
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.4"
    )
    .from(
     ".why-feature",
     {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.15,
     },
     "-=0.2"
    );
  }, sectionRef);

  return () => ctx.revert();
 }, []);

 return (
  <section ref={sectionRef} className="relative py-20 px-4  overflow-hidden">
   {/* Background Dubai Tower Image */}
   <Image
    src="/why-choose-us.jpg"
    alt="Dubai Tower"
    fill
    className="w-full h-full object-cover absolute inset-0"
   />

   <div className="relative ">
    {/* Header Content */}
    <div className="max-w-2xl sm:px-6 lg:px-14">
     <div className="why-badge mb-4">
      <span className="text-sm font-medium text-yellow-600">
       Why Choose Us?
      </span>
     </div>

     <h2 className="why-title text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
      Your Trusted Partner for Property Investment Recovery
     </h2>

     <p className="why-description text-base sm:text-lg text-gray-700 mb-12 leading-relaxed">
      Choose us for peace of mind and a partner committed to getting your
      investment back where it belongs—your pocket.
     </p>
    </div>
   </div>

   {/* Features Grid */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-12 gap-4 md:pt-10">
    {/* Feature 1 */}
    <div className="why-feature bg-primary/15 backdrop-blur-sm p-6 rounded-lg md:h-[224px]">
     <h3 className="text-lg font-semibold text-gray-900 mb-3">
      Specialized Legal Expertise
     </h3>
     <p className="text-sm md:text-base text-gray-600 leading-relaxed font-[300]">
      Our team of property law specialists has a proven track record of
      recovering lost investments in {"Dubai's"} real estate market.
     </p>
    </div>

    {/* Feature 2 */}
    <div className="why-feature bg-primary/15 backdrop-blur-sm p-6 rounded-lg">
     <h3 className="text-lg font-semibold text-gray-900 mb-3">
      Risk-Free Service
     </h3>
     <p className="text-sm md:text-base text-gray-600 leading-relaxed font-[300]">
      We operate on a No Win, No Fee basis, meaning you pay nothing unless we
      succeed.
     </p>
    </div>

    {/* Feature 3 */}
    <div className="why-feature bg-primary/15 backdrop-blur-sm p-6 rounded-lg">
     <h3 className="text-lg font-semibold text-gray-900 mb-3">
      Tailored Solutions for Every Client
     </h3>
     <p className="text-sm md:text-base text-gray-600 leading-relaxed font-[300]">
      Each case is unique, and we provide personalized strategies to ensure the
      best possible outcome for your claim.
     </p>
    </div>

    {/* Feature 4 */}
    <div className="why-feature bg-primary/15 backdrop-blur-sm p-6 rounded-lg">
     <h3 className="text-lg font-semibold text-gray-900  mb-3">
      International Investor Support
     </h3>
     <p className="text-sm md:text-base text-gray-600 leading-relaxed font-[300]">
      {
       "Whether you're local or an international investor, we handle everything—from legal filings to negotiations—on your behalf."
      }
     </p>
    </div>
   </div>
  </section>
 );
}
