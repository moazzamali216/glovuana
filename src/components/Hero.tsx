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
        gsap.to('.fa-dollar-sign', {
            x: 80,
            y: 100,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: 'linear',
        });
        gsap.to('.fa-sellsy', {
            x: 55,
            y: -120,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: 'linear',
        });
        gsap.to('.fa-user-tie', {
            x: -130,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: 'linear',
        });
        gsap.from(".hero-btn-2", {
            duration: 1.5,
            y: 10,
            repeat: -1,
            delay: 1,
            yoyo: true,
        });
        gsap.from(".hero-btn-1", {
            duration: 1.5,
            y: 10,
            repeat: -1,
            yoyo: true,
        });

        if (window.innerWidth > 1024) {
            gsap.to('.s-1', {
                x: 220,
                y: 170,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: 'linear',
            });
            gsap.to('.s-2', {
                x: 75,
                y: -220,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: 'linear',
            });
            gsap.to('.s-3', {
                x: -265,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: 'linear',
            });
        } else {
            gsap.to('.s-1', {
                x: 140,
                y: 140,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: 'linear',
            });
            gsap.to('.s-2', {
                x: 95,
                y: -180,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: 'linear',
            });
            gsap.to('.s-3', {
                x: -235,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: 'linear',
            });
        }
    }, [])

    return (
        <>
            <div className="sm:h-screen box1 relative w-full"
                style={{
                    backgroundImage: 'url(/assets/hero-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container  tag-cont sm:flex-row flex-col flex sm:h-screen  w-[100%]">
                    <div className=" w-full sm:w-1/2 relative flex items-start pt-[200px] sm:pt-0 sm:items-center h-[570px] sm:h-screen">
                        {/* <div className="absolute top-[68%] sm:top-[55%] right-[0%] ">
                            <div className="relative xl:block block sm:hidden ">
                                <img className="animate-spin w-[200px]" src={'/assets/roundcircle.png'} />
                                <i className="fa-solid absolute top-0 left-[50%] translate-x-[-50%] text-gray-200 border-2 border-[white] px-[12px] py-2 rounded-full fa-dollar-sign"></i>
                                <i className="fa-brands fa-sellsy absolute top-[60%] left-[18%] translate-x-[-50%] text-gray-200 border-2 border-[white] px-[7px] py-2 rounded-full"></i>
                                <i className="fa-solid fa-user-tie absolute top-[60%] right-[8%] text-gray-200 border-2 border-[white] px-[10px] py-2 rounded-full"></i>
                            </div>
                        </div> */}
                        <div>
                            <h1 className="text-white hero-btn-1 text-shadow:0px_0px_7.2px_#00000030 text-3xl lg:text-4xl xl:text-5xl leading-[40px] lg:leading-[50px] xl:leading-[60px] font-semibold jost">
                                WORLD BEST ONLINE <br /> SELLING PLATFORM
                            </h1>
                            <p className="text-gray-300 jost font-semibold text-xl xl:text-3xl text-shadow:0px_0px_7.2px_#00000030 hero-btn-2 mt-3 xl:mt-5">REASONABLE PRICING & BENEFITS</p>
                            <div className="flex gap-5 md:gap-10 mt-10 ">
                                <button
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(25,147,90,1) 0%, rgba(3,88,48,1) 100%)',
                                    }}
                                    className="bg-[#4fbc89] drop-shadow-md lg:text-base text-sm font-semibold poppins text-white px-6 rounded-md py-2.5"
                                >
                                    CONTACT US
                                </button>
                                <button
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)',
                                    }}
                                    className="bg-[#4fbc89] drop-shadow-md lg:text-base text-sm  font-semibold poppins text-white px-6 rounded-md py-2.5"
                                >
                                    LEARN MORE
                                </button>
                            </div>
                            <p className="text-gray-300 jost font-semibold text-lg lg:text-2xl hero-btn-1 text-shadow:0px_0px_7.2px_#00000030 mt-9 xl:mt-14">Try Free As Long As You Want <br />No Transaction Fees.</p>
                            <p className="text-gray-300 jost border-r-4 border-[red] w-[fit-content] title overflow-hidden font-semibold text-base text-shadow:0px_0px_7.2px_#00000030 mt-4">No Credit Card Required</p>
                        </div>
                    </div>
                    <div className=" w-full pb-10  sm:w-1/2 sm:mt-0 mt- flex sm:flex-row flex-col box-2 relative justify-end items-center h-auto sm:h-screen ">
                        {/* <h1 className="text-[#f9f8f8] sm:absolute top-[25%] left-[-20px] lg:left-[-50px] xl:left-5 text-center hero-btn-1 font-semibold md:block block sm:hidden text-3xl jost">Sign Up <br className="sm:block hidden" /> Now!</h1> */}
                          {/* <div className="tag-e  tag sm:hidden absolute z-[10] right-0 top-[15%] bg-white w-[320px] flex gap-4">
                            <div className="">
                                <img className="w-14" src="/assets/avatar-2.png" alt="" />
                            </div>
                            <div>
                                <h1 className="jost text-base font-semibold">
                                    Lorem, ipsum.
                                </h1>
                                <p className="text-xs poppins">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, excepturi.</p>
                            </div>
                        </div>
                        <div className="tag-o  tag sm:hidden absolute z-[10] left-0 top-[37%] bg-white w-[320px] flex gap-4">
                            <div className="">
                                <img className="w-14" src="/assets/avatar-2.png" alt="" />
                            </div>
                            <div>
                                <h1 className="jost text-base font-semibold">
                                    Lorem, ipsum.
                                </h1>
                                <p className="text-xs poppins">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, excepturi.</p>
                            </div>
                        </div>
                        <div className="tag-e  tag sm:hidden absolute z-[10] right-0 top-[60%] bg-white w-[320px] flex gap-4">
                            <div className="">
                                <img className="w-14" src="/assets/avatar-2.png" alt="" />
                            </div>
                            <div>
                                <h1 className="jost text-base font-semibold">
                                    Lorem, ipsum.
                                </h1>
                                <p className="text-xs poppins">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, excepturi.</p>
                            </div>
                        </div> */}
                        {/* <img className="sm:absolute mt-10 sm:mt-0  sm:translate-x-[-50%] md:translate-x-0 md:translate-y-0 h-[600px] sm:translate-y-[-50%] sm:left-[50%] md:left-[-10px] top-0 sm:top-[50%] xl:block block md:hidden md:top-[40%] sm:z-[10] laptop w-fit sm:w-auto sm:h-[400px] md:max-h-[350px]" src="/assets/mobile.png" />
                <h1 className="mt-10 mb-10 sm:hidden block text-white hero-btn-1 text-shadow:0px_0px_7.2px_#00000030 text-3xl lg:text-4xl xl:text-5xl leading-[40px] lg:leading-[50px] xl:leading-[60px] font-semibold jost text-center">GROW YOU BUSINESS<br /> WITH US</h1> */}
                        {/* <div className="shadow-2xl md:block block rounded-full mt-10 sm:mt-0 relative lg:min-w-[400px] w-[300px] h-[300px] lg:min-h-[400px]">
                            <img src="/assets/roundcircle.png" className="absolute w-full h-full animate-spin" alt="" />
                            <img className="w-[75px] lg:w-[125px] left-[32%] s-1 lg:left-[25%] absolute" src="/assets/store.png" alt="" />
                            <img className="w-[75px] lg:w-[125px] bottom-[15%] s-2 absolute" src="/assets/atm.png" alt="" />
                            <img className="w-[65px] lg:w-[100px] bottom-[12%] s-3 right-0 absolute" src="/assets/trolly.png" alt="" />
                        </div> */}
                        <div>
                         <img className=" md:block block  mt-10 sm:mt-0 relative lg:min-w-[500px] w-[370px]  h-[370px] lg:min-h-[500px]" src="/assets/gifimafe.gif"   />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
