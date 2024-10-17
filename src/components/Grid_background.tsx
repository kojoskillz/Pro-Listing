import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import ShinyButton from "./ui/shiny-button";
import face1 from "../app/assets/face1.jpg";
import face2 from "../app/assets/face2.jpg";
import face3 from "../app/assets/face3.jpg";
import star from "../app/assets/star.png";
import starX from "../app/assets/starX.png";
import logo from "../app/assets/Pro listing logo.png";
import Image from "next/image";

export default function AnimatedGridPatternDemo() {
  return(
    <div className="relative grid place-content-center h-[800px] lg:h-[700px] md:[800px] w-full items-center justify-center overflow-hidden bg-black md:shadow-xl shadow-3xl ">
         {/* logo */}
         <div>
         <Image 
                  src={logo}
                  alt="logo"
                  width="100"
                  height="100"
                  sizes="fit-content"
                  className="logo"
              />    
         </div>

      <div className="grid place-content-center mt-10 p-2 m-auto">
             
             <div className="relative flex rounded-full p-[2px] mx-auto border z-40 border-white/10  bg-gradient-to-r  from-transparent via-slate-900 to-black w-[15rem] lg:w-[17rem] place-content-center ">
             <Image 
                  src={star}
                  alt="star_image"
                  width="100"
                  height="100"
                  sizes="fit-content"
                  className="star "
              />                
                 <h1 className="text-white mt-[.5px] text-center text-base lg:text-lg font-semibold">
                      Best Crypto Listing Agency
                 </h1>
             </div>
             
            <h1 className="z-10 agdasima whitespace-pre-wrap text-center text-[4.4rem] lg:text-[11rem] md:text-6xl font-medium tracking-tighter text-white dark:text-white">
                <span className="text-blue-500 ">Pro </span>Listing Agency
            </h1>
                 <p className="text-slate-200 text-lg lg:text-xl md:text-lg  w-[24rem] lg:w-[50rem] grid place-content-center m-auto mt-5 text-center ">
                    We are a listing agency with transparent pricing and a seamless process, we make your success our priority. 
                    Let&apos;s  take your crypto project to the next level. 
                </p>

        
                <ShinyButton className="lg:w-[10rem] w-[11rem] p-4 m-auto grid place-content-center mt-5 ">Get Started</ShinyButton>
                
                <div className="flex place-content-center mt-5">
              <div className=" z-10">
              <Image 
                  src={face1}
                  alt="star_image"
                  width="900"
                  height="900"
                  sizes="fit-content"
                  className="img1 "
              />
              </div>
              <div className=" z-40 -ml-3   ">
              <Image 
                  src={face2}
                  alt="star_image"
                  width="900"
                  height="900"
                  sizes="fit-content"
                   className="img1 "
              />
              </div>
              <div className=" z-40 -ml-3   ">
              <Image 
                  src={face3}
                  alt="star_image"
                  width="900"
                  height="900"
                  sizes="fit-content"
                   className="img1 "
              />
              </div>
    

          </div>
 
                    {/* starX_image */}
           <div className="flex place-content-center">
               <Image 
                  src={starX}
                  alt="star_image"
                  width="900"
                  height="900"
                  sizes="fit-content"
                   className="starX"
                 />
               <Image 
                  src={starX}
                  alt="star_image"
                  width="900"
                  height="900"
                  sizes="fit-content"
                   className="starX"
                 />
               <Image 
                  src={starX}
                  alt="star_image"
                  width="900"
                  height="900"
                  sizes="fit-content"
                   className="starX"
                 />
               <Image 
                  src={starX}
                  alt="star_image"
                  width="900"
                  height="900"
                  sizes="fit-content"
                   className="starX"
                 />
               <Image 
                  src={starX}
                  alt="star_image"
                  width="900"
                  height="900"
                  sizes="fit-content"
                   className="starX"
                 />

               
                </div>    
            {/* star_image_ends */}
                 <p className="text-white text-xl md:text-2xl lg:text-xl text-center mt-4 ">
                     Chosen by 150+ customers daily
                 </p>

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
