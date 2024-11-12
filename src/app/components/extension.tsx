import Image from "next/image"
import icon2 from "@/app/assets/Landing page V1/desktop/Icon.png"

 
 const Customise = () => {
    return(
    <div className="w-[1921px] h-[759px] top-[2509px] left-[1px] px-[220px] py-[140px] gap-[98px] bg-[#043873] flex">
        <div className="w-[697px] h-[294px] gap-[60px] ">
            <div className="w-[697px] h-[171px] gap-[24px] ">
                <h1 className="w-[697px] h-[87px] font-inter font-bold text-7xl leading-[87.14px] tracking-[-2%] text-[#FFFFFF]"> Use as Extension</h1>
                <p className="w-[697px] h-[60px] font-inter text-lg font-normal leading-[30px] tracking-[-2%] text-[#FFFFFF] mt-4"> Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
            </div>
            
            <div className="w-[171px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] mt-6 flex justify-center ">
                <p className="w-[67px] h-[23px] font-inter font-medium text-lg leading-[23px] tracking-[-2%]  text-[#FFFFFF]">Lets Go</p>
                <Image src={icon2} alt=""/>
            </div>
          
        </div>

        <div className="w-[686px] h-[479px] gap-1 bg-[#C4DEFD] "></div>

    </div>
    )
 }
 export default Customise

 