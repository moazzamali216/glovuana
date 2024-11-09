"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const HoriztonalSection = () => {
    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Horizontal scroll animation
        gsap.to('.horizontal-content', {
            x: '-66.67%',    // Move the content to the left
            ease: 'none',  // Keep the scroll linear
            scrollTrigger: {
                trigger: '.section',        // The section that triggers the scroll
                start: 'top top',            // Start when the top of the section hits the top of the viewport
                end: 'bottom top',           // End when the bottom of the section hits the top of the viewport
                scrub: 1,                    // Smoothly scrub the animation (feel free to adjust the value)
                pin: true,                   // Pin the section in place while scrolling
                markers: true,              // Disable markers (for debugging purposes)
            },
        });
    }, []);
    return (
        <>
            <div className=" section  h-screen overflow-hidden">
                <div className="horizontal-content  flex h-full w-[300%]">
                    <div className="w-[100%] ">
                        <div className="container h-full w-full flex sm:flex-row flex-col justify-center items-center">
                            <div className="w-full sm:w-2/3 px-8 rounded-t-xl sm:rounded-none py-4 bg-white ]">
                                <h1 className="poppins font-medium text-gray-700 text-3xl lg:text-4xl xl:text-6xl leading-[36px] lg:leading-[49px] xl:leading-[80px]">ECOMMERCE FOR <br /> ANY  KIND OF <br /> YOUR  BUSINESS</h1>
                                <h6 className="text-gray-500 mt-10 text-base lg:text-xl font-semibold"><i className="fa-solid text-gray-400 fa-circle-dot"></i><span className="ml-4">GET READY WITH US</span></h6>
                                <h6 className="text-gray-500 mt-2 text-base lg:text-xl font-semibold"><i className="fa-solid text-gray-400 fa-circle-dot"></i><span className="ml-4">BUILD SALES WITH US</span></h6>
                                <h6 className="text-gray-500 mt-2 text-base lg:text-xl font-semibold"><i className="fa-solid text-gray-400 fa-circle-dot"></i><span className="ml-4">SCALE LONG - TERM</span></h6>
                            </div>
                            <div className="w-full sm:w-1/3 flex justify-center bg-white sm:rounded-r-full">
                                <img className="h-auto sm:h-[270px] md:h-auto" src="/assets/store.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] ">
                        <div className="container h-full w-full flex sm:flex-row flex-col justify-center items-center">
                            <div className="w-full sm:w-2/3 px-8 rounded-t-xl sm:rounded-none py-4 bg-white ]">
                                <h1 className="poppins font-medium text-gray-700 text-3xl lg:text-4xl xl:text-6xl leading-[36px] lg:leading-[49px] xl:leading-[80px]">ECOMMERCE FOR <br /> ANY  KIND OF <br /> YOUR  BUSINESS</h1>
                                <h6 className="text-gray-500 mt-10 text-base lg:text-xl font-semibold"><i className="fa-solid text-gray-400 fa-circle-dot"></i><span className="ml-4">GET READY WITH US</span></h6>
                                <h6 className="text-gray-500 mt-2 text-base lg:text-xl font-semibold"><i className="fa-solid text-gray-400 fa-circle-dot"></i><span className="ml-4">BUILD SALES WITH US</span></h6>
                                <h6 className="text-gray-500 mt-2 text-base lg:text-xl font-semibold"><i className="fa-solid text-gray-400 fa-circle-dot"></i><span className="ml-4">SCALE LONG - TERM</span></h6>
                            </div>
                            <div className="w-full sm:w-1/3 flex justify-center bg-white sm:rounded-r-full">
                                <img className="h-auto sm:h-[270px] md:h-auto" src="/assets/store.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] ">
                        <div className="container h-full w-full flex sm:flex-row flex-col justify-center items-center">
                            <div className="w-full sm:w-2/3 px-8 rounded-t-xl sm:rounded-none py-4 bg-white ]">
                                <h1 className="poppins font-medium text-gray-700 text-3xl lg:text-4xl xl:text-6xl leading-[36px] lg:leading-[49px] xl:leading-[80px]">ECOMMERCE FOR <br /> ANY  KIND OF <br /> YOUR  BUSINESS</h1>
                                <h6 className="text-gray-500 mt-10 text-base lg:text-xl font-semibold"><i className="fa-solid text-gray-400 fa-circle-dot"></i><span className="ml-4">GET READY WITH US</span></h6>
                                <h6 className="text-gray-500 mt-2 text-base lg:text-xl font-semibold"><i className="fa-solid text-gray-400 fa-circle-dot"></i><span className="ml-4">BUILD SALES WITH US</span></h6>
                                <h6 className="text-gray-500 mt-2 text-base lg:text-xl font-semibold"><i className="fa-solid text-gray-400 fa-circle-dot"></i><span className="ml-4">SCALE LONG - TERM</span></h6>
                            </div>
                            <div className="w-full sm:w-1/3 flex justify-center bg-white sm:rounded-r-full">
                                <img className="h-auto sm:h-[270px] md:h-auto" src="/assets/store.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>


    );

}