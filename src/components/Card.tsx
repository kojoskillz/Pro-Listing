import ShineBorder from "../components/ui/shine-border";

export default function ShineBorderDemo() {
  return (
<div className="mb-20">

    <div className="grid ">
    <h1 className="text-white text-2xl -mt-[14rem] lg:-mt-[7rem]  font-bold text-center">
      Our Members <span className="text-blue-500"> Accomplishment</span> 
    </h1>
  </div>

    <div className="gap-5 grid -mt-[8rem] lg:-mt-[3rem] lg:m-[26rem] lg:grid-cols-2 md:grid">
      
   
    <ShineBorder
      className="relative mb-32 grid place-content-center  h-[200px] w-[200px] flex-col m-auto  items-center justify-center overflow-hidden   bg-black md:shadow-xl"
      color={["#74747439", "#7272724A", "#B8B8B84B"]}
    >
      <span className="pointer-events-none  whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text  text-7xl font-semibold leading-none dark:from-white dark:to-slate-100/10">
        100+
      </span>
      <h1 className="text-bold text-left text-blue-500 ">
          Successful Tokens
      </h1>
      <p className="text-gray-200/70 text-[13px] ">
        Over 100 tokens listed on CoinMarketCap,CoinGecko, and leading centralized exchanges.
      </p>
    </ShineBorder>

    
    <ShineBorder
      className="relative mb-32 grid place-content-center h-[200px] w-[200px] flex-col m-auto  items-center justify-center overflow-hidden   bg-black md:shadow-xl"
      color={["#74747439", "#7272724A", "#B8B8B84B"]}
    >
      <span className="pointer-events-none text-left whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text  text-7xl font-semibold leading-none dark:from-white dark:to-slate-100/10">
        95%
      </span>
      <h1 className="text-bold text-left text-blue-500 ">
          Client Satisfaction
      </h1>
      <p className="text-gray-200/70 text-[13px] ">
         Consistentlly delivering high-quality service with a 95% cient satisfaction
      </p>
    </ShineBorder>

    <ShineBorder
      className="relative mb-32 grid place-content-center h-[200px] w-[200px] flex-col m-auto  items-center justify-center overflow-hidden   bg-black md:shadow-xl"
      color={["#74747439", "#7272724A", "#B8B8B84B"]}
    >
      <span className="pointer-events-none text-left whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text  text-7xl font-semibold leading-none dark:from-white dark:to-slate-100/10">
        50+
      </span>
      <h1 className="text-bold text-left text-blue-500 ">
         Marketing Campaigns Executed
      </h1>
      <p className="text-gray-200/70 text-[13px] ">
        Launched and managed over 50 successful marketing campaigns, driving significant engagement and growth.
      </p>
    </ShineBorder>

    <ShineBorder
      className="relative mb-32 grid place-content-center h-[200px] w-[200px] flex-col m-auto  items-center justify-center overflow-hidden   bg-black md:shadow-xl"
      color={["#74747439", "#7272724A", "#B8B8B84B"]}
    >
      <span className="pointer-events-none text-left whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text  text-7xl font-semibold leading-none dark:from-white dark:to-slate-100/10">
        80%
      </span>
      <h1 className="text-bold text-left text-blue-500 ">
        Faster Listings
      </h1>
      <p className="text-gray-200/70 text-[13px] ">
        Achieved lisitngs up to 80% faster than industry averages, ensuring your tokens gets to market quickly.
      </p>
    </ShineBorder>

    <ShineBorder
      className="relative mb-32 grid place-content-center h-[200px] w-[200px] flex-col m-auto  items-center justify-center overflow-hidden   bg-black md:shadow-xl"
      color={["#74747439", "#7272724A", "#B8B8B84B"]}
    >
      <span className="pointer-events-none text-left whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text  text-7xl font-semibold leading-none dark:from-white dark:to-slate-100/10">
        10x
      </span>
      <h1 className="text-bold text-left text-blue-500 ">
          Community Growth
      </h1>
      <p className="text-gray-200/70 text-[13px] ">
         Helped clients grow their communities by up to 10 times within six months.
      </p>
    </ShineBorder>


    </div>
  
    </div>

  );
}
