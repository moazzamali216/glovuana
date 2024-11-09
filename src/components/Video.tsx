"use client"
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Video = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.video', {
        scale:1.33,
        duration:1,
       scrollTrigger:{
        scrub:true,
        start:"top center",
        trigger:'.v-cont',
       },
       
        });


    }, [])
    return (
<>
<section className="container v-cont flex justify-center items-center sm:py-0  ">
<video className="video"

        src="/assets/file.mp4"
        width={900}
        height={900}
        autoPlay
        loop
        muted
        playsInline
      />
</section>
</>
    );
  };
  
  export default Video;
  