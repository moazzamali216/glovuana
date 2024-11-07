"use client"
import App from "next/app";
import Image from "next/image";
import { useEffect } from "react";
import "../app/index2.0.css"
import img from "@app/assets/hero-bg.jpg"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';



export default function Hero() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // GSAP animation for .box element
        gsap.to('.fa-dollar-sign', {
            x: 80,
            y: 100,        // Move element 400px on the x-axi // Rotate the element 360 degrees
            duration: 3,
            yoyo: true,
            repeat: -1,
            // Animation duration in seconds
            ease: 'linear', // Easing function for smooth animation
        });
        gsap.to('.fa-sellsy', {
            x: 55,
            y: -120,        // Move element 400px on the x-axi // Rotate the element 360 degrees
            duration: 3,
            yoyo: true,
            repeat: -1,
            // Animation duration in seconds
            ease: 'linear', // Easing function for smooth animation
        });
        gsap.to('.fa-user-tie', {
            x: -130,
            // y:-120,        // Move element 400px on the x-axi // Rotate the element 360 degrees
            duration: 3,
            yoyo: true,
            repeat: -1,
            // Animation duration in seconds
            ease: 'linear', // Easing function for smooth animation
        });
        gsap.from(".hero-btn-2",{

            duration:1.5,
              y:10,
              repeat:-1,
              delay:1,
            
              yoyo:true,
            })
        gsap.from(".hero-btn-1", {


            duration: 1.5,
            y: 10,
            repeat: -1,

            yoyo: true,
        })
        gsap.from('.laptop', {
            opacity: 0.5,
            x: "200px",
            rotate: 20,
            scrollTrigger: {
                scrub: true,
                trigger: ".box1",
                start: "top",
                pin: true,
            },
        });
        
        gsap.to('.tag', {
            x:10,
            opacity:1,
            yoyo:true,
            stagger:0.5,
            scrollTrigger: {
                // scrub:true,
                start:"top",
                end:"center",

                // end:"center center",
                trigger: ".box2",
                toggleActions:"play reverse play reverse",
            
            },
        });
        
    }, [])
    return (
        <>
    
            <div className="h-screen box1 relative w-full"
                style={{
                    backgroundImage: 'url(/assets/hero-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                   <div className="absolute top-[55%] left-[37%] ">
                <div className="relative">
                    <img className=" animate-spin w-[200px]   " src={'/assets/roundcircle.png'} />
                    <i className="fa-solid absolute top-0 left-[50%] translate-x-[-50%] text-gray-200 border-2 border-[white] px-[12px] py-2 rounded-full fa-dollar-sign"></i>
                    <i className="fa-brands fa-sellsy  absolute top-[60%] left-[18%] translate-x-[-50%] text-gray-200 border-2 border-[white] px-[7px] py-2 rounded-full"></i>
                    <i className="fa-solid fa-user-tie  absolute top-[60%] right-[8%]  text-gray-200 border-2 border-[white] px-[10px] py-2 rounded-full"></i>
                </div>
            </div>
                <div className=" container flex h-screen  w-[100%]">
                    <div className="w-1/2    flex items-center h-screen">
                    <div >
                        <h1 className="text-white hero-btn-1 text-shadow:0px_0px_7.2px_#00000030 text-5xl leading-[60px] font-semibold jost">
                            WORLD BEST  ONLINE <br /> SELLING PLATFORM
                        </h1>
                        <p className="text-gray-300 jost font-semibold text-3xl text-shadow:0px_0px_7.2px_#00000030  hero-btn-2 mt-5">REASONABLE PRICING & BENEFITS</p>
                        <div className=" flex gap-10 mt-10 ">
                            <button
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(25,147,90,1) 0%, rgba(3,88,48,1) 100%)',
                                }}
                                className="bg-[#4fbc89] drop-shadow-md font-semibold  poppins text-white px-6 rounded-md py-2.5"
                            >
                                CONTACT US
                            </button>
                            <button
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)',
                                }}
                                className="bg-[#4fbc89] drop-shadow-md  font-semibold  poppins text-white px-6 rounded-md py-2.5"
                            >
                                LEARN MORE
                            </button>

                        </div>
                        <p className="text-gray-300 jost font-semibold text-2xl hero-btn-1 text-shadow:0px_0px_7.2px_#00000030  mt-14">Try Free As Long As You Want <br />No Transaction Fees.</p>
                        <p className="text-gray-300 jost border-r-4 border-[red] w-[fit-content] title overflow-hidden font-semibold text-base text-shadow:0px_0px_7.2px_#00000030  mt-4">No Credit Card Required</p>

                    </div>
                    </div>
                    <div className=" w-1/2 flex box-2 relative  items-center h-screen ">
                    <h1 className="text-[#f9f8f8] text-center hero-btn-1 font-semibold text-3xl jost  	">Sign Up <br /> Now!</h1>
                     <img  className="absolute laptop  " src="/assets/laptop.png" />
                     <div className="tag drop-shadow-2xl flex items-start w-[300px] gap-2 opacity-0 bg-white absolute left-[-47%] top-[20%]">
                        <img className="h-8 w-8 mt-[2px]" src="/assets/avatar-2.png" alt="" />
                      <div>
                      <h4 className="font-semibold text-lg jost">
                        Lorem, ipsum.
                        </h4>
                        <p className="text-xs poppins">Lorem ipsum dolor sit amet consectetur adipisicing
                             elit. Dolorum nostrum commodi maxime null.</p>
                      </div>
                     </div>
                     <div className="tag drop-shadow-2xl flex items-start w-[300px] gap-2 opacity-0 bg-white absolute left-[-47%] top-[40%]">
                        <img className="h-8 w-8 mt-[2px]" src="/assets/avatar-2.png" alt="" />
                      <div>
                      <h4 className="font-semibold text-lg jost">
                        Lorem, ipsum.
                        </h4>
                        <p className="text-xs poppins">Lorem ipsum dolor sit amet consectetur adipisicing
                             elit. Dolorum nostrum commodi maxime null.</p>
                      </div>
                     </div>
                     <div className="tag drop-shadow-2xl flex items-start w-[300px] gap-2 opacity-0 bg-white absolute left-[-47%] top-[60%]">
                        <img className="h-8 w-8 mt-[2px]" src="/assets/avatar-2.png" alt="" />
                      <div>
                      <h4 className="font-semibold text-lg jost">
                        Lorem, ipsum.
                        </h4>
                        <p className="text-xs poppins">Lorem ipsum dolor sit amet consectetur adipisicing
                             elit. Dolorum nostrum commodi maxime null.</p>
                      </div>
                     </div>
                    </div>
                </div>

            </div>
        </>
    )
}