import Image from "next/image";
import { InfiniteSlider } from "./ui/InfiniteSlider";

export function InfiniteSliderBasic() {
 return (
  <div className="md:h-[139px]  bg-[#F4F4F4]">
   <div className=" flex md:flex-row flex-col items-center justify-between md:pl-34">
    <div className="md:w-[550px]  py-4 md:p-4 ">
     <p className="text-[#1E1E1E] max-w-[287px] font-[300]">
      Helping investors reclaim funds from failed or fraudulent real estate
      projects across Dubai.
     </p>
    </div>
    <InfiniteSlider
     gap={100}
     reverse
     className="bg-[#FBFBFB] md:h-[139px] h-24  w-full flex items-center justify-start"
    >
     <Image
      width={100}
      height={100}
      src="/brands/logo-2.svg"
      alt="Apple Music logo"
      className="h-[60px] w-[160px]"
     />
     <Image
      src="/brands/logo-3.svg"
      alt="Apple Music logo"
      className="h-[60px] w-[160px]"
      width={100}
      height={100}
     />
     <Image
      src="/brands/logo.svg"
      alt="Apple Music logo"
      className="h-[60px] w-[160px]"
      width={100}
      height={100}
     />
    </InfiniteSlider>
   </div>
  </div>
 );
}
