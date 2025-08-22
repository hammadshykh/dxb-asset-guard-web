import React from "react";
import { Zap, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
 title: string;
 description: string;
 className?: string;
}

export function ServiceCard({
 title,
 description,
 className = "",
}: ServiceCardProps) {
 return (
  <div className={`transition-shadow duration-300 ${className}`}>
   {/* Lightning Icon */}
   <div className="mb-4">
    <div className="bg-[#FFFAED] w-14 h-14 flex items-center rounded-full justify-center">
     <div className="w-10 h-10 bg-[#FFF5DA] rounded-full flex items-center justify-center">
      <Image src={"/zap.svg"} width={20} height={18} alt="zap svg" />
     </div>
    </div>
   </div>

   {/* Title */}
   <h3 className="font-medium text-[#1E1E1E] mb-3 leading-tight">{title}</h3>

   {/* Description */}
   <p className="mb-4 text-[#1E1E1E] font-[300] leading-relaxed">
    {description}
   </p>

   {/* Arrow Icon */}
   <div className="flex justify-start cursor-pointer">
    <ChevronRight className="w-6 h-6 hover:text-gray-600 transition-colors duration-200" />
   </div>
  </div>
 );
}
