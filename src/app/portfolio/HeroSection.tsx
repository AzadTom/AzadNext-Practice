import React from "react";
import GradientOverlay from "./GradientOverlay";
import DecorativeSvgElement from "./DecorativeSvgElement";
import DecorativeCircle from "./DecorativeCircle";
import LogoTicker from "./LogoTicker";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import Navigation from "./Navigation";

type HeroBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function HeroBackground({className = "" }: HeroBackgroundProps) {

  return (
    <div className={`relative w-full min-h-screen overflow-hidden bg-[#081822] ${className}`}>
      <Navigation/>
      <div className="absolute top-0 w-full h-full flex justify-center items-center" style={{ left: '-5%', width: '110%', opacity: 0.5, mixBlendMode: 'plus-lighter' }}>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/64760e2918e242feb9230fe34e3e410131fc1eae?width=4224"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <DecorativeCircle />
      <GradientOverlay />
      <DecorativeSvgElement />
    
      <div className="absolute inset-0 z-10 flex justify-center items-center ">
       <div>
        <h1 className="text-white text-8xl font-bold text-center capitalize poppins-medium mx-4">My digital <br /> humble abode</h1>
        <p className="poppins-light text-center text-white opacity-50 text-xl mx-4 mt-4">I'm an independent designer. <br /> My interest lies in brand experience, and user experience.</p>
         <div className="min-w-[300px] sm:max-w-[320px] mx-auto  flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 px-6 poppins-medium">
          <Button className="bg-white text-black rounded-[12px] h-[48px] w-full sm:px-[30px] px-[20px] py-[12px] text-[16px]">👋Let's Talk </Button>
          <Button className="bg-[#081822] text-white rounded-[12px] h-[48px] w-full border border-white px-[20px] py-[12px] text-[16px]">Get Resume <GetRedirectIcon/></Button>
         </div>
       </div>
      </div>

      <LogoTicker />
    </div>
  );
}






function GetRedirectIcon(props:any) {
  return (
    <svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_1272_1073)"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.693 13.16l7.5-7.5M5.693 5.66h7.5v7.5" />
      </g>
      <defs>
        <clipPath id="clip0_1272_1073">
          <path fill="#fff" transform="translate(.443 .41)" d="M0 0H18V18H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}


