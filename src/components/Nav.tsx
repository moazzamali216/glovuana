"use client"
import { useState } from 'react';

const Nav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Control the sliding menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the sliding menu
    };

    return (
        <>
            {/* Main Navbar (Visible above 1024px) */}
            <nav className="w-full  justify-center absolute top-4 z-[1] hidden lg:flex">
                <div className="container shadow-2xl px-4 py-2 flex justify-between items-center">
                    <div>
                        <h1 className="jost font-semibold text-4xl text-white">Storekwil</h1>
                    </div>
                    <div className="w-fit">
                        <a href="#" className="text-white poppins font-medium">Sell</a>
                        <a href="#" className="text-white poppins ml-4 font-medium">Simply</a>
                        <a href="#" className="text-white poppins ml-4 font-medium">Contract</a>
                        <a href="#" className="text-white poppins ml-4 font-medium">|</a>
                    </div>
                    <div className="w-fit">
                        <a href="#" className="text-white poppins font-medium">Resources</a>
                        <a href="#" className="text-white poppins ml-4 font-medium">Planning</a>
                        <a href="#" className="text-white poppins ml-4 font-medium">Contract</a>
                        <a href="#" className="text-white poppins ml-4 font-medium">Login</a>
                        <a href="#" className="text-white poppins ml-4 font-medium">|</a>
                    </div>
                    <div>
                        <button
                            style={{
                                backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)',
                            }}
                            className="bg-[#4fbc89] drop-shadow-md font-semibold poppins text-white px-4 ml-4 rounded-md py-2.5"
                        >
                            GET STARTED
                        </button>
                    </div>
                </div>
            </nav>

            {/* Secondary Navbar (Visible below 1024px) */}
            <nav className="lg:hidden w-full absolute top-4 z-[1]">
                <div className="container flex justify-between items-center px-4 py-2">
                    <h1 className="jost font-semibold text-4xl text-white">Storekwil</h1>
                    {/* Hamburger Menu Icon */}
                    <button
                        onClick={toggleMenu}
                        className="text-white p-2 rounded-md bg-transparent"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Sliding Menu (Visible when the menu is open) */}
            <div
                className={`fixed z-[100]  top-0 right-0 h-full bg-gray-800 text-white w-full sm:w-1/2 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300 z-50`}
            >
                <div className="flex pt-10 justify-end p-4">
                    <button
                        onClick={toggleMenu}
                        className="text-white p-4  rounded-md bg-transparent"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex rounded-xl border border-red flex-col items-start mt-16 sm:mt-0 gap-4 p-4 bg-gray-700 mx-4">
                    <a href="#" className="text-black jost font-semibold w-full px-4 rounded-xl drop-shadow-2xl bg-gray-400 py-2">Sell</a>
                    <a href="#" className="text-black jost font-semibold w-full px-4 rounded-xl drop-shadow-2xl bg-gray-400 py-2">Simply</a>
                    <a href="#" className="text-black jost font-semibold w-full px-4 rounded-xl drop-shadow-2xl bg-gray-400 py-2">Resseller</a>
                    <a href="#" className="text-black jost font-semibold w-full px-4 rounded-xl drop-shadow-2xl bg-gray-400 py-2">CashFlow</a>
                    <a href="#" className="text-black jost font-semibold w-full px-4 rounded-xl drop-shadow-2xl bg-gray-400 py-2">About Us</a>
                </div>
                <div className='mt-6 flex flex-col gap-3 mx-4'>
                    <button
                        style={{
                            backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)',
                        }}
                        className="bg-[#4fbc89] w-full drop-shadow-md font-semibold poppins text-white px-4  rounded-md py-2.5"
                    >
                        GET STARTED
                    </button>
                    <button
                        style={{
                            backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(25,147,90,1) 0%, rgba(3,88,48,1) 100%)',
                        }}
                        className="bg-[#4fbc89] drop-shadow-md font-semibold  poppins text-white px-6 rounded-md py-2.5"
                    >
                        CONTACT US
                    </button>
                </div>

            </div>
        </>
    );
};

export default Nav;
