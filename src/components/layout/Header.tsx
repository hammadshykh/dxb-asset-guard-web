"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import {
 Drawer,
 DrawerClose,
 DrawerContent,
 DrawerHeader,
 DrawerTitle,
 DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

const navLinks = [
 { label: "Home", href: "/" },
 { label: "About Us", href: "/about" },
 { label: "How It Works", href: "/contact" },
 { label: "Services", href: "/services" },
 { label: "Blogs", href: "/blog" },
];

const Header = () => {
 const [isOpen, setIsOpen] = useState(false);
 const menuItemsRef = useRef<HTMLAnchorElement[]>([]);
 const drawerContentRef = useRef<HTMLDivElement>(null);

 const addToRefs = (el: HTMLAnchorElement) => {
  if (el && !menuItemsRef.current.includes(el)) {
   menuItemsRef.current.push(el);
  }
 };

 useEffect(() => {
  if (isOpen && menuItemsRef.current.length > 0) {
   // Animate menu items when drawer opens
   gsap.fromTo(
    menuItemsRef.current,
    {
     y: -30,
     opacity: 0,
    },
    {
     y: 0,
     opacity: 1,
     duration: 0.6,
     stagger: 0.1,
     ease: "power3.out",
     delay: 0.2,
    }
   );
  }
 }, [isOpen]);

 useEffect(() => {
  // Clear refs array on component mount
  menuItemsRef.current = [];
 }, []);

 return (
  <>
   <header className="relative z-50">
    <div className="max-w-7xl px-4 md:px-0 mx-auto flex items-center justify-between gap-6 md:gap-0">
     {/* Logo */}
     <div className="relative -ms-4">
      <Image src="/logo.svg" alt="Logo" width={200} height={200} />
     </div>

     {/* Desktop Navigation */}
     <div className="backdrop-blur-md  h-[72px] bg-white/5 hidden md:flex items-center max-w-5xl justify-between ps-10 pe-2 rounded-full w-full">
      <nav className="hidden md:flex items-center space-x-10">
       {navLinks.map((link) => (
        <Link
         key={link.label}
         href={link.href}
         className="text-white hover:text-primary transition-colors font-medium duration-200 text-sm"
        >
         {link.label}
        </Link>
       ))}
      </nav>

      {/* Desktop CTA Button */}
      <Button
       size="lg"
       className="rounded-full text-base font-semibold px-10 md:h-[54px]"
      >
       Schedule Your Consultation
      </Button>
     </div>

     {/* Mobile Menu and CTA */}
     <div className="md:hidden flex items-center gap-3">
      {/* <Button className="text-xs rounded-full h-10 px-4">Consultation</Button> */}

      {/* Mobile Drawer */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
       <DrawerTrigger asChild>
        <button
         className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
         aria-label="Toggle mobile menu"
        >
         <Menu className="w-6 h-6" />
        </button>
       </DrawerTrigger>
       <DrawerContent
        ref={drawerContentRef}
        className="bg-slate-900/95 backdrop-blur-lg border-slate-700 text-white"
       >
        <DrawerHeader className="border-b border-slate-700">
         <div className="flex items-center justify-between">
          <DrawerTitle className="text-white text-lg font-semibold">
           Navigation Menu
          </DrawerTitle>
          <DrawerClose asChild>
           <button
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
           >
            <X className="w-5 h-5" />
           </button>
          </DrawerClose>
         </div>
        </DrawerHeader>

        {/* Navigation Links */}
        <div className="px-6 py-8">
         <nav className="space-y-6">
          {navLinks.map((link, index) => (
           <a
            key={link.label}
            ref={addToRefs}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-yellow-400 transition-colors duration-200 text-lg font-medium py-3 border-b border-slate-700/50 last:border-b-0"
           >
            {link.label}
           </a>
          ))}
         </nav>
        </div>

        {/* Mobile CTA Button */}
        <div className="px-6 pb-8 pt-4 border-t border-slate-700">
         <Button
          size="lg"
          className="w-full rounded-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold"
          onClick={() => setIsOpen(false)}
         >
          Schedule Your Consultation
         </Button>
        </div>
       </DrawerContent>
      </Drawer>
     </div>
    </div>
   </header>
  </>
 );
};

export default Header;
