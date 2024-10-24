import React from 'react';
import Image from "next/image";
import binance from '../app/assets/binance.png'
import bitmart from '../app/assets/bitmart.png'
import Coinw from '../app/assets/coinw.png'
import Kucoin from '../app/assets/kucoin.png'
import Lbank from '../app/assets/lbank.png'
import Mexc from '../app/assets/mexc.png'
import okx from '../app/assets/okx.png'
import probit from '../app/assets/probit.png'

const Partnership = () => {
  return (
    <div className='bg-white  pb-[10rem] mt-[7rem] lg:mt-[5rem] '>
          <div className='mb-20 lg:mt-4 '>
                <h1 className="text-black  agdasima text-5xl lg:text-8xl leading-[45px] pt-[5rem] lg:pt-[10rem]  font-bold text-center">
                    Partnered with leading companies 
                </h1>
                <p className='text-black max-w-[70rem] lg:max-w-[70rem] m-auto text-center text-xl lg:text-2xl'>
                    We have formed alliances with top industry professionals to drive growth and innovation,
                    fostering a collaborative environment that drives innovation, excellence, and growth.
                </p>
          </div>

          {/* containers containing partners logo */}
        <div className=' gap-4 lg:mx-[12rem] grid place-content-center lg:grid lg:grid-cols-3'>

            {/* binance */}
            <Image 
                  src={binance}
                  alt="bitmart"
                  width="100"
                  height="100"
                  sizes="fit-content"
                   className=" border-[1px] rounded-[25px] border-black/15 h-[20rem] w-[20rem] object-contain "
                 />
            {/* bitmart */}
               <Image 
                  src={bitmart}
                  alt="bitmart"
                  width="100"
                  height="100"
                  sizes="fit-content"
                   className=" border-[1px] rounded-[25px] border-black/15 h-[20rem] w-[20rem] object-contain "
                 />
            {/* Coinw */}
               <Image 
                  src={Coinw}
                  alt="Coinw"
                  width="100"
                  height="100"
                  sizes="fit-content"
                  className=" border-[1px] rounded-[25px] border-black/15 h-[20rem] w-[20rem] object-contain "
                 />
            {/* Kucoin */}
               <Image 
                  src={Kucoin}
                  alt="Kucoin"
                  width="100"
                  height="100"
                  sizes="fit-content"
                    className=" border-[1px] rounded-[25px] border-black/15 h-[20rem] w-[20rem] object-contain  "
                 />
            {/* Lbank */}
               <Image 
                  src={Lbank}
                  alt="Lbank"
                  width="100"
                  height="100"
                  sizes="fit-content"
                   className=" border-[1px] rounded-[25px] border-black/15 h-[20rem] w-[20rem] object-contain  "
                 />
            {/* Mexc */}
               <Image 
                  src={Mexc}
                  alt="Mexc"
                  width="100"
                  height="100"
                  sizes="fit-content"
                   className=" border-[1px] rounded-[25px] border-black/15 h-[20rem] w-[20rem] object-contain  "
                 />
            {/* okx */}
               <Image 
                  src={okx}
                  alt="okx"
                  width="100"
                  height="100"
                  sizes="fit-content"
                   className=" border-[1px] rounded-[25px] border-black/15 h-[20rem] w-[20rem] object-contain "
                 />
            {/* probit */}
               <Image 
                  src={probit}
                  alt="probit"
                  width="100"
                  height="100"
                  sizes="fit-content"
                    className=" border-[1px] rounded-[25px]  border-black/15 h-[20rem] lg:w-[60rem] w-[20rem] object-contain "
                 />


               

        </div>

         <div>
                <h2 className='text-black mt-28 lg:mt-36 font-semibold  max-w-[50rem] lg:max-w-[50rem] lg:m-auto m-5 text-center text-xl lg:text-3xl'>
                   By establishing strategic partnerships with highly respected industry professionals,
                   thought leaders, and innovators, we're creating an ecosystem that cultivates creativity & entrepreneurship, 
                   and drives transformative change. 
                </h2>
         </div>
    </div>
  )
}

export default Partnership
