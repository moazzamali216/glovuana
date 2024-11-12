"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Discount = () => {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animation for '.tag-e'
    gsap.from('.tag-e', {
      opacity: 0,
      x: 400,
      duration: 2.25,
      scrollTrigger: {
        scrub: true,         // Animation scrubs based on scroll position
        trigger: '.tag-cont2', // The element that triggers the animation
        start: 'top bottom',  // Animation starts when top of '.tag-cont' reaches center of viewport
        end: 'top top',    // Animation ends when the bottom of '.tag-cont' reaches the top of the viewport
        // markers: true,        // Enable markers for debugging
      },
    });
    gsap.from('.laptop', {
      opacity: 0.5,
      x: 400,
      rotate:60,
      duration: 1.25,
      scrollTrigger: {
        scrub:1,
          trigger: ".tag-cont2",
          start: 'top bottom',  // Animation starts when top of '.tag-cont' reaches center of viewport
          end: 'top top',
      },
  });

    // // Animation for '.tag-o'
    gsap.from('.tag-o', {
      opacity: 0,
      x: -400,
      duration: 2.25,
      scrollTrigger: {
        scrub: true,         // Animation scrubs based on scroll position
        trigger: '.tag-cont2', // The element that triggers the animation
        start: 'top bottom',  // Animation starts when top of '.tag-cont' reaches center of viewport
        end: 'top top',    // Animation ends when the bottom of '.tag-cont' reaches the top of the viewport
        // markers: true,       // Enable markers for debugging
      },
    });

  }, []);

  return (
    <section className="xl:max-w-[1335px]  h-full overflow-hidden mx-auto px-0 pt-10 sm:pt-20">
      <div className="w-full pb-6">
        <h1 className="Jost text-center drop-shadow-2xl jost text-4xl font-extrabold text-gray-600 mt-10">
          Lorem, ipsum dolor.
        </h1>
        <p className="poppins text-center mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. br Delectus, cupiditate nihil <br />! Sint quaerat perspiciatis quam?
        </p>
      </div>
      <div className="w-full sm:mx-0">
        <div className="flex relative pt-10 sm:pt-0 tag-cont2  items-end gap-3 justify-center sm:ustify-between">
<div className="relative  ">
<div className="tag-e tag  absolute z-[10] right-0 top-[15%] bg-white w-[320px] flex gap-4">
            <div>
              <img className="w-14" src="/assets/avatar-2.png" alt="" />
            </div>
            <div>
              <h1 className="jost text-base font-semibold">Lorem, ipsum.</h1>
              <p className="text-xs poppins">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, excepturi.
              </p>
            </div>
          </div>
          <div className="tag-o tag  absolute z-[10] left-0 top-[37%] bg-white w-[320px] flex gap-4">
            <div>
              <img className="w-14" src="/assets/avatar-2.png" alt="" />
            </div>
            <div>
              <h1 className="jost text-base font-semibold">Lorem, ipsum.</h1>
              <p className="text-xs poppins">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, excepturi.
              </p>
            </div>
          </div>
          <div className="tag-e tag  absolute z-[10] right-0 top-[60%] bg-white w-[320px] flex gap-4">
            <div>
              <img className="w-14" src="/assets/avatar-2.png" alt="" />
            </div>
            <div>
              <h1 className="jost text-base font-semibold">Lorem, ipsum.</h1>
              <p className="text-xs poppins">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, excepturi.
              </p>
            </div>
          </div>
          <img
            src={'/assets/mobile.png'}
            alt="Mobile Display"
            className="xl:ms-8 xl:w-[437px] h-full w-full contain xl:h-[439px] lg:h-[410px] lg:w-[450px] md:w-[300px] sm:w-[250px] md:h-[350px] sm:h-[350px] sm:object-contain items-end object-cover px-7 mt-auto flex -end"
          />
</div>
          <img
            src={'/assets/laptop.png'}
            alt="30% Discount Graphic"
            className=" xl:w-[590px] contain laptop lg:w-[590px] md:w-[400px] w-[319px] xl:h-[514px] lg:h-[auto] md:h-[350px] object-contain h-[320px]  xl:me-12 sm:block hidden lg:object-contain lg:pt-12 xl:pt-0 xl:object-contain"
          />
        </div>
      </div>
    </section>
  );
};
