"use client"
"use client"
import React, { useState } from "react";
import { useForm } from "@formspree/react"; // Import Formspree hook
import "../app/index2.0.css"

export function Footer() {
    return (<>
        <footer className="mt-10 jost pt-5 border-t border-gray-200 ">
            <div className="container  ">
                <div className="bg-white  pt-6  px-4 w-full rounded-t-2xl">
                    <div className="w-full gap-4 sm:h-[375px]  items-center  sm:flex-row flex-col flex">
                        <div className="w-full sm:w-1/3 flex justify-center items-center">
                            <div style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)' }} className="border flex-col shadow-2xl sm:py-0 py-5  w-[320px] h-[240px] lg:h-[320px] rounded-xl flex items-center justify-center  border-[green]">
                                <h1 className="jost text-white text-3xl   font-semibold">StoreWil</h1>
                                <p className="poppins text-base lg:text-xl  text-center font-medium mt-4     text-white">One Suit, Infinite possibilites</p>
                                <p className="text-white text-sm lg:text-base mt-3 lg:mt-7 w-[100%] mt:w-[66%]  text-center leading-0">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <p className="text-white text-sm lg:text-base mt-5 lg:mt-10">
                                    +44(0)20 3723 6703</p>
                            </div>
                        </div>
                        <div className="w-full bordersm:w-2/3 flex-col sm:gap-0 gap-5 sm:flex-row flex">
                            <div className=" h-full xl:text-start text-start w-full sm:w-1/3">
                                <h1 className="poppins text-xl xl:text-2xl pb-10 font-semibold">Links</h1>
                                <div className="flex flex-col">
                                    <a href="#" className="text-gray-500 text-lg">Home</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">About Us</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Contact Us</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Pricing</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Feature</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Blog</a>
                                </div>
                            </div>

                            <div className=" h-full xl:text-start text-start w-full sm:w-1/3">
                                <h1 className="poppins text-xl xl:text-2xl pb-10 text font-semibold">Products</h1>
                                <div className="flex flex-col">
                                    <a href="#" className="text-gray-500 text-lg">Take the Tour</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Live Chat</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Self Service</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Social</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Mobile</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Reviews</a>
                                </div>
                            </div>

                            <div className=" h-full xl:text-start text-start w-full sm:w-1/3">
                                <h1 className="poppins text-xl xl:text-2xl pb-10 font-semibold">Legal</h1>
                                <div className="flex flex-col">
                                    <a href="#" className="text-gray-500 text-lg">Terms of Use</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Terms & Conditions</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Contact Us</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Privacy Policy</a>
                                    <a href="#" className="text-gray-500 text-lg mt-2">Cookie Policy</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="flex sm:mt-0 mt-16 flex-wrap gap-y-4 pb-4 justify-between">
                            <div className="w-fit">
                                <h1 className="font-light">Copyright @StoreWil 2024 inc.</h1>
                                </div>
                            <div className="flex gap-4 w-fit">
                                <a href="#">Privacy & Terms</a>
                                <a href="#">Cookies</a>
                                <a href="#">Contact Us</a>
                            </div>
                            <div className="flex gap-3">
                            <i className="fa-brands text-2xl fa-facebook"></i>
                            <i className="fa-brands text-2xl fa-instagram"></i>
                            <i className="fa-brands text-2xl fa-twitter"></i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}