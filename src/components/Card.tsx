import ShineBorder from "../components/ui/shine-border";
import img7 from "../app/assets/img7.png";
import img2 from "../app/assets/img2.png";
import img3 from "../app/assets/img3.png";
import img5 from "../app/assets/img5.png";
import img6 from "../app/assets/img6.png";
import Image from "next/image";



export default function ShineBorderDemo() {
  return (
<div className="mb-20">

    <div className="grid ">
    <h1 className="text-white agdasima text-5xl -mt-[23rem] lg:-mt-[7rem]  font-bold text-center">
      Our Members <span className="text-blue-500"> Accomplishment</span> 
    </h1>
  </div>

    <div className="gap-20 gap-y-5  lg:gap-y-10 grid -mt-[13rem] lg:-mt-[2rem] lg:m-[16rem] lg:grid-cols-2 md:grid">
      
   
    <ShineBorder
      className="relative mb-32 grid place-content-center border-[1px] border-white/5  h-[300px] w-[350px] lg:h-[350px] lg:w-[500px] flex-col m-auto  items-center justify-center overflow-hidden   bg-black md:shadow-xl"
      color={["#74747439", "#7272724A", "#B8B8B84B"]}
    >

  <div className="bg-white w-44 rounded-full p-1 ml-auto">
            <Image 
                  src={img7}
                  alt="star_image"
                  width="50"
                  height="60"
                  sizes="fit-content"
                  className="img0"
              />  
  </div>


      <span className="pointer-events-none mr-auto  whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text agdasima text-[7rem] lg:text-[9rem] font-semibold leading-none dark:from-white dark:to-slate-100/10">
        100+
      </span>
      <h1 className="text-bold text-left  text-blue-500 text-lg mr-auto">
          Successful Tokens
      </h1>
      <p className="text-gray-200/70 text-[18px] ">
        Over 100 tokens listed on CoinMarketCap,CoinGecko, and leading centralized exchanges.
      </p>
    </ShineBorder>

    
    <ShineBorder
      className="relative mb-32 grid place-content-center  border-[1px] border-white/5 h-[300px] w-[350px] lg:h-[350px] lg:w-[500px]  flex-col m-auto  items-center justify-center overflow-hidden   bg-black md:shadow-xl"
      color={["#74747439", "#7272724A", "#B8B8B8A4"]}
    >
         <div className="bg-white rounded-full p-3 mr-auto">
         <Image 
                  src={img2}
                  alt="star_image"
                  width="50"
                  height="60"
                  sizes="fit-content"
                  className="img0"
              /> 
         </div>
       
      
      <span className="pointer-events-none mr-auto whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text  agdasima text-[7rem] lg:text-[9rem] font-semibold leading-none dark:from-white dark:to-slate-100/10">
        95%
      </span>
      <h1 className="text-bold text-left text-blue-500 text-lg mr-auto">
          Client Satisfaction
      </h1>
      <p className="text-gray-200/70 text-[18px] ">
         Consistentlly delivering high-quality service with a 95% client satisfaction
      </p>
    </ShineBorder>

    <ShineBorder
      className="relative mb-32 grid place-content-center  border-[1px] border-white/5 h-[300px] w-[350px] lg:h-[350px] lg:w-[500px]  flex-col m-auto  items-center justify-center overflow-hidden   bg-black md:shadow-xl"
      color={["#74747439", "#7272724A", "#B8B8B84B"]}
    >
      
  <div className="bg-white w-44 h-[3.5rem] rounded-full p-3 ml-auto">
            <Image 
                  src={img3}
                  alt="star_image"
                  width="50"
                  height="40"
                  sizes="fit-content"
                  className="img0"
              /> 
   </div>
      <span className="pointer-events-none mr-auto whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text  agdasima text-[7rem] lg:text-[9rem] font-semibold leading-none dark:from-white dark:to-slate-100/10">
        50+
      </span>
      <h1 className="text-bold  text-blue-500 text-lg mr-auto">
         Marketing Campaigns Executed
      </h1>
      <p className="text-gray-200/70 text-[18px] ">
        Launched and managed over 50 successful marketing campaigns, driving significant engagement and growth.
      </p>
    </ShineBorder>

    <ShineBorder
      className="relative mb-32 grid place-content-center  border-[1px] border-white/5 h-[300px] w-[350px] lg:h-[350px] lg:w-[500px]  flex-col m-auto  items-center justify-center overflow-hidden   bg-black md:shadow-xl"
      color={["#74747439", "#7272724A", "#B8B8B84B"]}
    >

<div className="bg-white w-44 h-[3.5rem] rounded-full p-1 ml-auto">
              <Image 
                  src={img5}
                  alt="star_image"
                  width="50"
                  height="60"
                  sizes="fit-content"
                  className="img0"
              /> 
</div>
      <span className="pointer-events-none  mr-auto whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text  agdasima text-[7rem] lg:text-[9rem] font-semibold leading-none dark:from-white dark:to-slate-100/10">
        80%
      </span>
      <h1 className="text-bold text-left text-blue-500 text-lg mr-auto">
        Faster Listings
      </h1>
      <p className="text-gray-200/70 text-[18px] ">
        Achieved lisitngs up to 80% faster than industry averages, ensuring your tokens gets to market quickly.
      </p>
    </ShineBorder>

    <ShineBorder
      className="relative mb-32 grid place-content-center  border-[1px] border-white/5 h-[300px] w-[350px] lg:h-[350px] lg:w-[500px]  flex-col m-auto  items-center justify-center overflow-hidden   bg-black md:shadow-xl"
      color={["#74747439", "#7272724A", "#B8B8B84B"]}
    >

<div className="bg-white  rounded-full p-3 ml-auto">
              <Image 
                  src={img6}
                  alt="star_image"
                  width="50"
                  height="60"
                  sizes="fit-content"
                  className="img0"
              /> 
</div>

      <span className="pointer-events-none  mr-auto whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text  agdasima text-[7rem] lg:text-[9rem] font-semibold leading-none dark:from-white dark:to-slate-100/10">
        10x
      </span>
      <h1 className="text-bold text-left text-blue-500 text-lg mr-auto">
          Community Growth
      </h1>
      <p className="text-gray-200/70 text-[18px] ">
         Helped clients grow their communities by up to 10 times within six months.
      </p>
    </ShineBorder>


    </div>
  
    </div>

  );
}
