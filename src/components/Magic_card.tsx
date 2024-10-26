"use client"
import { useTheme } from "next-themes";
// import img1 from '../app/assets/img1.png'

import { MagicCard } from "../components/ui/magic-card";

export default function MagicCardDemo() {
  const { theme } = useTheme();
  return (
<div>
    <div>
            <h1 className="text-white agdasima text-5xl lg:text-8xl leading-[45px] -mt-[11rem] lg:mt-[7rem] mb-20  font-bold text-center">
                What We Offer
            </h1>
    </div>
    <div className="gap-20 gap-y-5 lg:gap-y-10 grid mt-[2rem] lg:mt-[2rem] lg:m-[12rem] mb-44 lg:grid-cols-2 md:grid">
     
      <MagicCard
        className="cursor-pointer lg:h-[35rem] flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
         <h1 className="text-white  text-center font-semibold text-3xl lg:text-5xl mt-[-9rem] lg:mt-[-13rem] ">
            Token Listings
         </h1>
         <p className="text-white/60 font-normal leading-tight lg:leading-tight p-2 text-[18px] lg:text-[20px] text-wrap text-center ">
           Your enlisted tokens are in safe hands.We go the extra mile to check the performance of your enlisted token.
         </p>

      </MagicCard>
      <MagicCard
        className="cursor-pointer lg:h-[25rem] lg:mt-[-.5px] flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
         <h1 className="text-white font-semibold  text-center text-3xl lg:text-5xl mt-[-9rem] lg:mt-[-10rem] ">
           Get Connected 
         </h1>
         <p className="text-white/60 font-normal leading-tight lg:leading-tight p-2 text-[18px] lg:text-[20px] text-wrap text-center ">
           Get in touch with our experts.We are available 24/7.
         </p>

      </MagicCard>
      <MagicCard
        className="cursor-pointer lg:h-[25rem] flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
         <h1 className="text-white  text-center font-semibold text-3xl lg:text-5xl mt-[-9rem] lg:mt-[-9rem] ">
            Book Appointments
         </h1>
         <p className="text-white/60 font-normal leading-tight lg:leading-tight p-2 text-[18px] lg:text-[20px] text-wrap text-center ">
           Need to speak with us we are available for appointments.
         </p>

      </MagicCard>
      <MagicCard
        className="cursor-pointer lg:h-[35rem] lg:mt-[-160px] flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
          <h1 className="text-white  text-center font-semibold text-3xl lg:text-5xl mt-[-9rem] lg:mt-[-13rem] ">
            Seamless Strategy
         </h1>
         <p className="text-white/60 font-normal leading-tight lg:leading-tight p-2 text-[18px] lg:text-[20px] text-wrap text-center ">
           We plan out on delivering the best strategy,boosting your tokens chance.
         </p>

      </MagicCard>
    </div>
    </div>
  );
}
