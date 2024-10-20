"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import img1 from "../app/assets/face2.jpg"
import img2 from "../app/assets/face3.jpg"
import img3 from "../app/assets/face1.jpg"

const content = [
  {
    title: "CMC Listing",
    description:
      "CMC listing is essential for any cryptocurrency seeking to establish credibility, increase visibility, and attract investors. Meeting the requirements and following the application process carefully can help successful projects achieve a listing on CoinMarketCap.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to bottom right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={img1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "CG Listing",
    description:
      "CoinGecko is a leading cryptocurrency data platform providing real-time prices, market capitalization, trading volume, and other valuable insights.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
       
        <Image
          src={img2}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Top Tier Cex",
    description:
      "Top-tier Centralized Exchanges (CEXs), such as Binance, Coinbase, and Kraken, offer a secure, reliable, and compliant platform for cryptocurrency trading, providing high liquidity, robust security, and user-friendly interfaces.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src={img3}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Marketing",
    description:
      "Through strategic social media engagement, influential collaborations, and robust community development, we boost cryptocurrency adoption, fuel trading activity, and amplify project visibility in the dynamic crypto landscape.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <Image
          src={img1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Shilling",
    description:
      "Our expert team helps protect your investments by identifying and exposing misleading promotions, exaggerated claims, and manipulative tactics in the cryptocurrency space.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <Image
          src={img1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Trending",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={img3}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
         
          <h1 className="text-white agdasima text-5xl lg:text-9xl leading-[45px] -mt-[3rem] lg:-mt-[7rem] font-bold text-center">
              Our Services
          </h1>
      <StickyScroll content={content} />    
    </div>
  );
}
