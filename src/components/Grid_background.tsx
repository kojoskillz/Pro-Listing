import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import ShinyButton from "./ui/shiny-button";
import face1 from "../app/assets/face1.jpg";
import face2 from "../app/assets/face2.jpg";
import face3 from "../app/assets/face3.jpg";
import star from "../app/assets/star.png";
import Image from "next/image";

export default function AnimatedGridPatternDemo() {
  return(
    <div className="relative grid place-content-center h-[700px] w-full items-center justify-center overflow-hidden bg-black p-20 md:shadow-xl ">
      <div className="grid place-content-center p-5 m-auto">
             
             <div className="relative flex rounded-full  mx-auto border z-40 border-white/10  bg-gradient-to-r  from-transparent via-slate-900 to-black w-[15rem] place-content-center ">
             <Image 
                  src={star}
                  alt="my_profile_pic"
                  width="100"
                  height="100"
                  sizes="fit-content"
                  className="star "
              />                
                 <h1 className="text-white text-center p-1 font-semibold">
                      Best Crypto Listing Agency
                 </h1>
             </div>
             
            <h1 className="z-10 agdasima whitespace-pre-wrap text-center text-7xl lg:text-[11rem] md:text-6xl font-medium tracking-tighter text-white dark:text-white">
                <span className="text-blue-500 ">Pro </span>Listing Agency
            </h1>
                 <p className="text-slate-200 text-md lg:text-xl md:text-2xl  w-[23rem] lg:w-[50rem] grid place-content-center m-auto mt-5 text-center ">
                    We are a listing agency with transparent pricing and a seamless process, we make your success our priority. 
                    Let&apos;s  take your crypto project to the next level. 
                </p>

        
                <ShinyButton className="w-[10rem] p-4 m-auto grid place-content-center mt-5 ">Get Started</ShinyButton>
                
                <div className="flex place-content-center mt-5">
              <div className=" z-10">
              <Image 
                  src={face1}
                  alt="my_profile_pic"
                  width="900"
                  height="900"
                  sizes="fit-content"
                  className="img1 "
              />
              </div>
              <div className=" z-40 -ml-3   ">
              <Image 
                  src={face2}
                  alt="my_profile_pic"
                  width="900"
                  height="900"
                  sizes="fit-content"
                   className="img1 "
              />
              </div>
              <div className=" z-40 -ml-3   ">
              <Image 
                  src={face3}
                  alt="my_profile_pic"
                  width="900"
                  height="900"
                  sizes="fit-content"
                   className="img1 "
              />
              </div>
             
          </div>
 

      </div>


      
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
