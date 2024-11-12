  import Image from "next/image"
  import logo from "@/app/assets/Landing page V1/desktop/Logo.png"

  const Navbar =()=>{
    return(
        <div className="w-[1920px] h-[92px] py-4 px-[220px] justify-between bg-[#043873]  left-[1px] flex items-center">
            <div className="w-[191px] h-[34px]">
                
             <Image src={logo} alt="logo"/>
               
            </div>

            <div className="w-[737.5px] h-10 gap-[60px] flex justify-between items-center ">
                <div className="w-[549px] h-[23px] ">
                    <ul className=" flex flex-row justify-between text-white ">
                        <li className="hover:text-cyan-400">Products</li>
                        <li className="hover:text-cyan-400">Solutions</li>
                        <li className="hover:text-cyan-400">Resources</li>
                        <li className="hover:text-cyan-400">Pricing</li>
                    </ul>
                </div> 
                
                <div className="w-[126px] h-[60px] py-4 px-10 gap-[10px] bg-[#FFE492] rounded-lg ">
                        <button className=" w-[46px] h-[23px] font-inter text-lg font-medium leading-[23px] tracking-[-0.2%] text-[#043873] ">Login </button>
                </div>
              

            </div>
            

        </div>
    )

}
export default Navbar