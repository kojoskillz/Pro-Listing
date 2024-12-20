import React from 'react'
import starX from '../app/assets/starX.png'
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className='bg-white mb-[10rem] -mt-20 pb-[10rem]   '>
         <h1 className="text-black  agdasima text-5xl lg:text-8xl leading-[45px] pt-[5rem] lg:pt-[10rem]  font-bold text-center">
                    What Our Client Have To Say...
         </h1>

{/* Content for Testimonials */}
     <div className='mt-20 flex swipe-container  overflow-hidden gap-4'>
      
        <div className=' flex-shrink-0 swipe-element  transition-all  ease-in-out delay-150 duration-200 group hover:bg-black hover:scale-105 hover:text-white cursor-pointer hover:transition-all hover:duration-75 bg-gray-100 w-[22rem] h-[18rem] p-5 rounded-[25px]  m-auto '>
            <h1 className='text-black group-hover:text-white  text-xl font-semibold '>
               Winner Otuosorochi    
            </h1> 
            <p className='text-black/50 group-hover:text-white/60 '>
                Cybersecurity
            </p>
  
            <div className='flex mt-10 '>
                  <h1 className='agdasima font-extrabold text-8xl '>
                    5.0
                  </h1>  
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
            </div>

            <p className='text-black text-lg font-semibold group-hover:text-white'>
               "Their services was top notch, will recommend them."  
            </p> 
        </div>
        <div className='flex-shrink-0 swipe-element  transition-all ease-in-out delay-150 duration-200 group hover:bg-black hover:scale-105 hover:text-white cursor-pointer hover:transition-all hover:duration-75 bg-gray-100 w-[22rem] h-[18rem] p-5 rounded-[25px]  m-auto '>
            <h1 className='text-black group-hover:text-white  text-xl font-semibold '>
               Mavis Cooke   
            </h1> 
            <p className='text-black/50 group-hover:text-white/60 '>
                CEO, Interl
            </p>
  
            <div className='flex mt-10 '>
                  <h1 className='agdasima font-extrabold text-8xl '>
                    5.0
                  </h1>  
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
            </div>

            <p className='text-black text-lg font-semibold group-hover:text-white'>
               "They made me trust in their services.Was updated at every moment."  
            </p> 
        </div>
        <div className='flex-shrink-0 swipe-element  transition-all ease-in-out delay-150 duration-200 group hover:bg-black hover:scale-105 hover:text-white cursor-pointer hover:transition-all hover:duration-75 bg-gray-100 w-[22rem] h-[18rem] p-5 rounded-[25px]  m-auto '>
            <h1 className='text-black group-hover:text-white  text-xl font-semibold '>
              Henry Roi    
            </h1> 
            <p className='text-black/50 group-hover:text-white/60 '>
               Graphic Designer
            </p>
  
            <div className='flex mt-10 '>
                  <h1 className='agdasima font-extrabold text-8xl '>
                    5.0
                  </h1>  
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
            </div>

            <p className='text-black text-lg font-semibold group-hover:text-white'>
               "They are professionals as they say."  
            </p> 
        </div>
        <div className='flex-shrink-0 swipe-element  transition-all ease-in-out delay-150 duration-200 group hover:bg-black hover:scale-105 hover:text-white cursor-pointer hover:transition-all hover:duration-75 bg-gray-100 w-[22rem] h-[18rem] p-5 rounded-[25px]  m-auto '>
            <h1 className='text-black group-hover:text-white  text-xl font-semibold '>
                Selina Brooke  
            </h1> 
            <p className='text-black/50 group-hover:text-white/60 '>
                Financial Analyst
            </p>
  
            <div className='flex mt-10 '>
                  <h1 className='agdasima font-extrabold text-8xl '>
                    5.0
                  </h1>  
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
            </div>

            <p className='text-black text-lg font-semibold group-hover:text-white'>
               "Simply the best agency in crypto listings."  
            </p> 
        </div>
        <div className='flex-shrink-0 swipe-element  transition-all ease-in-out delay-150 duration-200 group hover:bg-black hover:scale-105 hover:text-white cursor-pointer hover:transition-all hover:duration-75 bg-gray-100 w-[22rem] h-[18rem] p-5 rounded-[25px]  m-auto '>
            <h1 className='text-black group-hover:text-white  text-xl font-semibold '>
             Kwadwo Nyarko
            </h1> 
            <p className='text-black/50 group-hover:text-white/60 '>
                Software Engineer
            </p>
  
            <div className='flex mt-10 '>
                  <h1 className='agdasima font-extrabold text-8xl '>
                    5.0
                  </h1>  
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
            </div>

            <p className='text-black text-lg font-semibold group-hover:text-white'>
               "Need a place to enlist your tokens. Pro-Listing doesnt disappoint."  
            </p> 
        </div>
        <div className='flex-shrink-0 swipe-element  transition-all ease-in-out delay-150 duration-200 group hover:bg-black hover:scale-105 hover:text-white cursor-pointer hover:transition-all hover:duration-75 bg-gray-100 w-[22rem] h-[18rem] p-5 rounded-[25px]  m-auto '>
            <h1 className='text-black group-hover:text-white  text-xl font-semibold '>
              Kwaku Peter   
            </h1> 
            <p className='text-black/50 group-hover:text-white/60 '>
                Project Manager
            </p>
  
            <div className='flex mt-10 '>
                  <h1 className='agdasima font-extrabold text-8xl '>
                    5.0
                  </h1>  
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
                  <Image 
                  src={starX}
                  alt="starX"
                  width="20"
                  height="20"
                  sizes="fit-content"
                    className=" object-contain p mt-10 "
                 />
            </div>

            <p className='text-black text-lg font-semibold group-hover:text-white'>
               "Best crypto listing agency. Impressed with their services.Its a 5 star for me."  
            </p> 
        </div>
     
     </div>


    </div>
 
  )
}

export default Testimonials
