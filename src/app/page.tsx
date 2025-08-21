import { InfiniteSliderBasic } from "@/components/InfiniteSliderBasic";
import CallToActionSection from "@/components/sections/CallToActionSection";
import EvaluationSection from "@/components/sections/EvaluationSection";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

export default function Home() {
 return (
  <main className="bg-white">
   <HeroSection />
   <InfiniteSliderBasic />
   <FeaturesSection />
   <CallToActionSection />
   <HowWeWorkSection />
   <WhyChooseUsSection />
   <FAQSection />
   <EvaluationSection />
  </main>
 );
}
