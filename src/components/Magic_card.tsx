"use client"
import { useTheme } from "next-themes";

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
        Magic
      </MagicCard>
      <MagicCard
        className="cursor-pointer lg:h-[25rem] lg:mt-[-.5px] flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Card
      </MagicCard>
      <MagicCard
        className="cursor-pointer lg:h-[25rem] flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Card
      </MagicCard>
      <MagicCard
        className="cursor-pointer lg:h-[35rem] lg:mt-[-160px] flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Card
      </MagicCard>
    </div>
    </div>
  );
}
