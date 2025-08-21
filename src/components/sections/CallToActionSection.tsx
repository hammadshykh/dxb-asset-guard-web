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

export default function CallToActionSection() {
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
    .from(".cta-title", {
     duration: 0.8,
     y: 40,
     opacity: 0,
     ease: "power3.out",
    })
    .from(
     ".cta-description",
     {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.4"
    )
    .from(
     ".cta-button",
     {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.3"
    )
    .from(
     ".cta-image",
     {
      duration: 1,
      x: 50,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.6"
    );
  }, sectionRef);

  return () => ctx.revert();
 }, []);

 return (
  <section
   ref={sectionRef}
   className="md:py-20 py-10 px-4 sm:px-6 lg:px-8 bg-primary relative"
  >
   <div className="max-w-7xl mx-auto">
    <div className="md:grid flex flex-col-reverse md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
     {/* Left Content */}
     <div className="space-y-6">
      <h2 className="cta-title text-xl sm:text-2xl lg:text-4xl font-semibold text-white leading-tight">
       Are You a Victim of a Failed Property Investment?
      </h2>

      <p className="cta-description text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
       We specialize in recovering investments lost to fraudulent, canceled, or
       failed property projects in Dubai. With our experienced legal and
       financial team, we offer a streamlined solution to help you get your
       money back with a No Win, No Fee guarantee. We handle the complexities,
       so you can recover your hard-earned funds without stress.
      </p>

      <div className="cta-button pt-2">
       <Button
        size="lg"
        className="bg-white py-6 text-gray-800 hover:bg-gray-50 px-8  text-base font-semibold rounded-full transition-all duration-300  hover:shadow-xl"
       >
        Schedule Your Consultation
       </Button>
      </div>
     </div>

     {/* Right Image */}
     <div className=" md:absolute right-0 top-0">
      <div className="relative a overflow-hidden shadow-2xl">
       <Image
        src="/victim-section-image.jpg"
        alt="Dubai construction and development projects"
        className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
        width={400}
        height={400}
       />
       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
