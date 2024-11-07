export default function Nav() {
    return(
     
  <>
  <nav className="w-full  flex justify-center fixed top-4 z-[100]  ">
    <div  style={{ backdropFilter: "blur(200px)" }} className="max-w-[1024px] shadow-2xl px-4 py-2 flex items-center  ">
        <h1 className="jost   font-semibold text-4xl  text-white z-[100]">
            Storekwil
        </h1>
<div>
<a href="#" className="text-white ml-24 poppins font-medium">Sell</a>
<a href="#" className="text-white poppins font-medium">Simply</a>
</div>
    </div>
  </nav>
  </>
    )


}