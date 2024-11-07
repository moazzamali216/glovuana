export default function Nav() {
    return (

        <>
            <nav className="w-full  flex justify-center absolute top-4 z-[100]  ">
                <div className="max-w-[1124px] shadow-2xl px-4 py-2 flex items-center  ">
                    <h1 className="jost   font-semibold text-4xl  text-white z-[100]">
                        Storekwil
                    </h1>
                    <div>
                        <a href="#" className="text-white ml-24 poppins font-medium">Sell</a>
                        <a href="#" className="text-white poppins ml-4 font-medium">Simply</a>
                        <a href="#" className="text-white poppins ml-4 font-medium">Contract</a>
                        <a href="#" className="text-white poppins ml-4 font-medium">|</a>
                    </div>
                    <div>
                        <a href="#" className="text-white ml-24 poppins font-medium">Resources</a>
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
                            className="bg-[#4fbc89] drop-shadow-md  font-semibold  poppins text-white px-4 ml-4 rounded-md py-2.5"
                        >
                            GET STARTED
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )


}