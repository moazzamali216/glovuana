"use client"


export const OurServices = () => {
  return (
    <section className="py-16 mt-10 px-4 sm:px-8 relative overflow-hidden bg-white">
      <div className="container flex flex-col md:flex-row justify-center py-16 gap-10 md:gap-10 bg-[#eeeeee] rounded-2xl">
        <div className="w-full md:w-[50%] " >
          <h1 className="text-5xl md:text-5xl md:text-start text-center  inter-jost font-bold  md:leading-[3rem] text-gray-700 bg-clip-text mt-6">
            Our Services
          </h1>
          <p className="text-md poppins md:text-start text-center tracking-wide text-[#3e3e3e] text-[15px]  mt-6">
            Whether you’re looking to buy or sell, we connect entrepreneurs and companies to opportunities that drive growth and success. Our platform is designed to make business transactions seamless, secure, and accessible from anywhere, at any time. From small startups to established enterprises, StoreWil offers a space where your business can thrive. With an easy-to-use interface, advanced tools, and a community of engaged buyers and sellers, we’re here to help you unlock the full potential of your business—faster and smarter.</p>

          {/* Feature Section */}
          <div className="mt-6 grid grid-rows-1 items-center">

            {/* Feature 1: Cell Phone Plans */}
            <div className="flex flex-row items-center">
              <div style={{
                backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)',
              }} className="p-4 rounded-lg w-20 h-18">
                {/* <Image src={mobile} alt="Cell Phone Icon" width={75} height={60} /> */}
              </div>
              <div className="flex flex-col pl-5">
                <h3 className="mt-4 text-2xl inter font-bold text-gray-700">Cell Phone Plans</h3>
                <p className="mt-2 text-[14px] poppins text-gray-600">
                  We offer a range of affordable cell phone plans tailored to meet your needs without compromising on quality or coverage.
                </p>
              </div>
            </div>

            {/* Feature 2: Internet Plans */}
            <div className="flex flex-row items-center">
              <div style={{
                backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)',
              }} className=" p-4 rounded-lg w-16 h-18">
                {/* <Image src={mobileplus} alt="Internet Icon" width={30} height={30} /> */}
              </div>
              <div className="flex flex-col  pl-5">
                <h3 className="mt-4 text-2xl inter font-bold text-gray-700">Internet Plans</h3>
                <p className="mt-2 text-[14px] text-gray-600">Get high-speed internet at a fraction of the cost you’re paying now.</p>
              </div>
            </div>

          </div>

          {/* Call to Action Button */}
          <button
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)',
            }}
            className="bg-[#4fbc89] mt-7 drop-shadow-md lg:text-base text-sm  font-semibold poppins text-white px-6 rounded-md py-2.5"
          >
            LEARN MORE
          </button>
        </div>

        <div className="relative w-full ] md:w-[50%] flex justify-center items-center ">
          <img src='/assets/women.png' alt="Mobile Display" className="md:w-[450px] w-full md:h-[450px] rounded-full object-cover  md:ml-10 l " />

        </div>
      </div>
    </section>
  );
};
