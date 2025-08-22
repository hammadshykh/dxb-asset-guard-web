import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
 const faqs = [
  {
   question: "How do I know if my claim is eligible?",
   answer:
    "Our team will evaluate your case for free and let you know if you have a valid claim.",
  },
  {
   question: "How long does the recovery process take?",
   answer:
    "The timeline varies depending on the complexity of your case, but we work efficiently to recover your funds as quickly as possible.",
  },
  {
   question: "What is your success rate?",
   answer:
    "We maintain a high success rate through our experienced team and proven methodologies.",
  },
  {
   question: "Do I need to live in Dubai to use your services?",
   answer:
    "No, we provide our investment recovery services to clients worldwide, regardless of location.",
  },
 ];

 return (
  <section className="py-10 md:py-20 px-4 max-w-7xl mx-auto md:px-0">
   <div className="text-center mb-12">
    <p className="text-sm md:text-base   font-inter text-primary font-semibold mb-4 tracking-wider uppercase">
     {"FAQ's"}
    </p>
    <h2 className="text-2xl md:text-4xl font-inter font-semibold text-[#1E1E1E] mb-6">
     Frequently asked questions
    </h2>
    <p className="md:text-xl font-[300] text-muted-foreground max-w-2xl mx-auto">
     Everything you need to know about your investment recovery.
    </p>
   </div>

   <Accordion
    type="single"
    collapsible
    className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:pt-4 md:px-10"
   >
    {faqs.map((faq, index) => (
     <AccordionItem
      key={index}
      value={`item-${index}`}
      className="border border-border px-0 shadow-none border-t border-b-0 border-x-0 rounded-none"
     >
      <AccordionTrigger className="text-left md:text-lg font-medium hover:no-underline pt-4">
       {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground text-sm font-[300] md:text-base pb-6">
       {faq.answer}
      </AccordionContent>
     </AccordionItem>
    ))}
   </Accordion>
  </section>
 );
};

export default FAQSection;
