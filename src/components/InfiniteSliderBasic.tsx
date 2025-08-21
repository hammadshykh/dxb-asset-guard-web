import Image from "next/image";
import { InfiniteSlider } from "./ui/InfiniteSlider";

export function InfiniteSliderBasic() {
 return (
  <div className="md:h-32 bg-[#F4F4F4] ">
   <div className=" flex md:flex-row flex-col items-center justify-between md:ps-40">
    <div className="md:w-[400px] md:pe-16 p-4 ">
     <p className="text-[#1E1E1E]">
      Helping investors reclaim funds from failed or fraudulent real estate
      projects across Dubai.
     </p>
    </div>
    <InfiniteSlider
     gap={60}
     reverse
     className="bg-[#FBFBFB] h-32 w-full flex items-center justify-start"
    >
     <Image
      width={100}
      height={100}
      src="/brands/logo.svg"
      alt="Apple Music logo"
      className="h-[60px] w-[160px]"
     />
     <Image
      src="/brands/logo.svg"
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
