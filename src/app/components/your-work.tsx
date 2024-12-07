/*eslint-disable @typescript-eslint/no-unused-vars*/
import Image from "next/image"
import icon from "@/app/assets/Landing page V1/desktop/Icon.png"

const YourWork = () => {
    return(
        <div className="w-[1921px] h-[574px] top-[4080px] left-[1px] py-[140px] px-[220px] bg-[#043873] ">
            <div className="w-[1481px] sm: h-full md:h-[294px] gap-[60px] text-center ">
                <div className="w-[1064px] h-[171px] gap-6 ml-28 ">
                    <h1 className="w-[1064px] h-[87px] font-bold text-7xl text-[#ffffff] leading-[87.14px] tracking-[-2%]  ">Your work, everywhere you are</h1>
                    <p className="w-[1064px] h-[60px] leading-[30px] tracking-[-2%] font-normal text-lg text-center text-[#ffffff] mt-4">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                </div>

                <div className="w-[195px] h-[63px] rounded-lg py-5 px-10 gap-[10px] bg-[#4F9CF9] mt-10 absolute left-1/2 flex justify-center items-center sm:flex-col md:flex-row">
                    <button className="w-[91px] h-[23px] font-medium text-lg leading-[23px] tracking-[-2%] text-[#FFFFFF] ">Try Taskey</button>

                    <Image  src={icon} alt=""/>
                </div>

            </div>

        </div>
    )
}
export default YourWork