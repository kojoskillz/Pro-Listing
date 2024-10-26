import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"
  
  export default function AccordionDemo() {
    return (

      
      <Accordion type="single" collapsible className="mb-20 w-[22rem] md:w-[50rem] lg:w-[60rem] m-auto ">
         <div>
            <h1 className="text-white agdasima font-bold leading-[45px] lg:mb-8 text-center text-[45px] lg:text-[90px]">
               Frequently Asked Questions
            </h1>
            <p className="text-gray-500  text-center text-[20px] lg:text-[30px] mb-10 ">
                Your Most Pressing Queries Answered
            </p>
        </div>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[16px] lg:text-3xl md:text-[18.5px]  ">What services does your agency provide?</AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[17px] md:text-[14px] font-normal text-wrap text-gray-300  ">
             We offer a range of services including token listings on CoinMarketCap and CoinGecko, marketing, shilling, trending, community management, and growth strategies.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[16px] lg:text-3xl md:text-[18.5px]  ">How long does the token listing process take?</AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[17px] md:text-[14px] font-normal text-wrap text-gray-300  ">
              We expedite listings by up to 80%.. within 24 - 72hrs.  The exact timeframe depends on the platform and specific requirements of your token.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[16px] lg:text-3xl md:text-[18.5px]  ">Do you list tokens with low volume?</AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[17px] md:text-[14px] font-normal text-wrap text-gray-300  ">
          Yes, we do list tokens with low volume. Our focus is on helping projects of all sizes gain visibility and traction. We work with you to develop strategies that can enhance your token’s market presence and drive growth.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-[16px] lg:text-3xl md:text-[18.5px]  "> What are your pricing structures?</AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[17px] md:text-[14px] font-normal text-wrap text-gray-300  ">
          Our pricing is transparent and varies based on the services you choose. We offer detailed quotes tailored to your project’s needs, with no hidden fees.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-[16px] lg:text-3xl md:text-[18.5px]  "> Will I receive a detailed breakdown of costs?</AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[17px] md:text-[14px] font-normal text-wrap text-gray-300  ">
          Yes, we provide detailed quotes tailored to your project's unique needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-[16px] lg:text-3xl md:text-[18.5px]  ">How do you communicate with clients?</AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[17px] md:text-[14px] font-normal text-wrap text-gray-300  ">
            Get in touch with our team.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-[16px] lg:text-3xl md:text-[18.5px]  ">Are there any hidden fees?</AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[17px] md:text-[14px] font-normal text-wrap text-gray-300  ">
          No, we pride ourselves on transparent pricing with no additional hidden fees.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-[16px] lg:text-3xl md:text-[18.5px]  "> What factors influence the cost of my project?</AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[17px] md:text-[14px] font-normal text-wrap text-gray-300  ">
          The cost will depend on the specific services, scope, complexity, and duration of your project.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="text-[16px] lg:text-3xl md:text-[18.5px]  ">Do you offer package deals or discounts?</AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[17px] md:text-[14px] font-normal text-wrap text-gray-300  ">
          Contact us to inquire about potential promotions, packages, or discounts that may apply to your project.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  
