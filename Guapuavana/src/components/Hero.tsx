"use client"
import "../app/index2.0.css";
export default function Hero() {
    return (
      <>
<div className="relative w-full h-screen ">
<video autoPlay loop  muted  src="/assets/home-video.mp4"></video>
     <div className=" absolute w-full container   top-[50%] translate-y-[-50%]">
        <h1 className="text-5xl jakarta text-[3.5rem] md:text-[4.5rem] leading-[1.25] font-extrabold  text-center sm:text-start text-[#262626]">THE GLOBAL <br /> PAYMENTS <br className="md:hidden hidden sm:block" /> ENABLER</h1>
        <h4 className="text-[#525252] text-[1.5rem] font-[550]  text-center sm:text-start mt-[2.5rem]">The engine that drives your <br className="md:hidden hidden sm:block" />  payments forward</h4>
        <button className="relative bg-[#0b8565] font-[550] tracking-wider mx-auto  sm:mx-0 mt-[2.5rem] flex items-center justify-center min-w-max whitespace-nowrap overflow-hidden duration-300 h-10 gap-x-2.5 px-5 text-sm [&_svg]:size-5 rounded-xl text-white outline-none bg-primary w-fit">Contact us</button>
     </div>
</div>
      </>
    );
  }
  