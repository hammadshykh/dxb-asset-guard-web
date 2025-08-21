"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Header from "../layout/Header";

export default function HeroSection() {
 const heroRef = useRef<HTMLElement>(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
   const tl = gsap.timeline();

   tl
    .from(".hero-badge", {
     duration: 0.8,
     y: 30,
     opacity: 0,
     ease: "power3.out",
    })
    .from(
     ".hero-title",
     {
      duration: 1,
      y: 60,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.4"
    )
    .from(
     ".hero-description",
     {
      duration: 0.8,
      y: 40,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.5"
    )
    .from(
     ".hero-cta",
     {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.3"
    )
    .from(
     ".hero-cards",
     {
      duration: 0.8,
      y: 40,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.1,
     },
     "-=0.2"
    );
  }, heroRef);

  return () => ctx.revert();
 }, []);

 return (
  <section
   ref={heroRef}
   className="relative md:min-h-screen bg-cover bg-center bg-no-repeat"
   style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero-image.jpg')`,
   }}
  >
   {/* Header Navigation */}
   <Header />
   {/* Hero Content */}
   <div className="relative z-10 px-4 sm:px-6 lg:px-10 pt-8 md:pt-10 pb-8 md:pb-10">
    <div className="max-w-7xl mx-auto">
     <div className="max-w-4xl">
      {/* Badge */}
      <div className="hero-badge inline-block mb-6">
       <span className="bg-transparent text-sm text-primary border-[0.5px] px-8 py-3 rounded-full font-medium">
        No Win, No Fee!
       </span>
      </div>

      {/* Main Headline */}
      <h1
       style={{ fontFamily: "inherit" }}
       className="hero-title text-3xl sm:text-4xl lg:text-6xl font-semibold text-white leading-tight mb-6"
      >
       Recover Your Lost Property
       <br />
       Investments in <span className="italic">UAE</span>
      </h1>

      {/* Description */}
      <p className="hero-description text-base md:text-xl text-gray-200 mb-8 leading-relaxed">
       Helping investors reclaim funds from failed or fraudulent
       <br />
       real estate projects across Dubai.
      </p>

      {/* CTA Button */}
      <div className="hero-cta mb-16">
       <Button size="lg" className="rounded-full md:h-12">
        Schedule Your Consultation
       </Button>
      </div>
     </div>
    </div>

    {/* Bottom Cards */}
    <div className="max-w-3xl ms-auto mt-10">
     <div className="flex md:grid md:grid-cols-3 gap-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide">
      {/* Card 1 */}
      <div className="bg-[#FFFFFF1C] bg-opacity-70 backdrop-blur-sm p-6 rounded-lg max-w-[240px] snap-center shrink-0">
       <h3 className="text-white font-semibold mb-3">Lost Your Investment?</h3>
       <p className="text-gray-300 text-sm leading-relaxed">
        We recover funds from failed property projects in Dubai—hassle-free.
       </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#FFFFFF1C] bg-opacity-70 backdrop-blur-sm p-6 rounded-lg max-w-[240px] snap-center shrink-0">
       <h3 className="text-white font-semibold mb-3">No Win, No Fee</h3>
       <p className="text-gray-300 text-sm leading-relaxed">
        Only pay if we succeed in getting your money back. Risk-free service!
       </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#FFFFFF1C] bg-opacity-70 backdrop-blur-sm p-6 rounded-lg max-w-[240px]   snap-center shrink-0">
       <h3 className="text-white font-semibold mb-3">Expert Legal Help</h3>
       <p className="text-gray-300 text-sm leading-relaxed">
        Our team navigates Dubai&apos;s complex legal system to reclaim your
        lost funds.
       </p>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
