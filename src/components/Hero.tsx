"use client"
import "../app/index2.0.css";
export default function Hero() {
    return (
      <> 
<div className=" relative z-0 min-h-[1000px] w-full  ">
<video className="pointer-events-none absolute inset-0 -z-10 h-full w-full select-none object-cover object-center max-sm:object-[75%_50%]" autoPlay loop  muted  src="/assets/home-video.mp4"></video>
     <div className=" absolute w-full container  top-[35%]  sm:top-[30%] translate-y-[-50%]">
        <h1 className="text-5xl jakarta text-[2.25rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.25] font-extrabold  text-[#262626]">THE GLOBAL <br /> PAYMENTS <br className="lg:hidden :block" /> ENABLER</h1>
        <h4 className="text-[#525252] text-[1.25rem] sm:text-[1.5rem] font-[550]  mt-[2rem] sm:mt-[2.5rem]">The engine that drives your <br className="md:hidden block" />  payments forward</h4>
        <button className="relative bg-[#0b8565] font-[550] tracking-wider  mt-[2rem] sm:mt-[2.5rem] flex items-center justify-center min-w-max whitespace-nowrap overflow-hidden duration-300 h-10 gap-x-2.5 px-5 text-sm [&_svg]:size-5 rounded-xl text-white outline-none bg-primary w-fit">Contact us</button>
     </div>
</div>
      </>
    );
  }
  