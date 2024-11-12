import Image from "next/image"
import icon from "@/app/assets/Landing page V1/desktop/Icon.png"
const Hero =() =>{
    return(
        <div className="w-[1920px] h-[829px] top-[92px] left-[1px] py-[140px] px-[220px] bg-[#043873] text-[#FFFFFF] flex">
            <div className="w-[656px] h-[361px] ">
                <div className="w-[656px] h-[238px] ">
                    <h2 className="text-[64px] leading-[77.45px] tracking-[-2%] font-medium mt-10"> Get More Done with whitepace</h2>
                    <p className="font-inter font-normal text-[18px] leading-[30px] tracking-[-2%] mt-5 ">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                </div>

                <div className="w-[224px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] mt-4 flex justify-between ">
                   <p className="w-[159px] h-[23px] text-lg font-medium font-inter leading-[23px] tracking-[-2%] text-[#FFFFFF] ">Try Whitepace free</p>

                    <Image src={icon} alt=""/>

                </div>

            </div>

                <div className="w-[824px] h-[549px] gap-1  bg-[#C4DEFD]"></div>

        </div>
    )
}
export default Hero