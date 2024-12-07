/*eslint-disable @typescript-eslint/no-unused-vars*/
import Image from "next/image"
import icon2 from "@/app/assets/Landing page V1/desktop/Icon.png"

 const Work = () =>{
    return(
        <div className="w-[1921px] h-[812.09px] px-[220px] py-[140px] top-[3268px] left-[1px] gap-[98px] ">
            <div className="w-[669px] h-[411px] gap-[60px] ml-auto float-right  ">
                <div className="w-[699px] h-[288px] gap-6  ">
                    <div className="w-[670px] h-[171px] gap-6 mt-10 ">
                        <h1 className="w-[669px] h-[174px] font-bold text-7xl leading-[87.14px] tracking-[-2%] text-[#212529]">
                        Customise it
                        to your needs
                        </h1>
                        <p className="w-[699px] h-[90px] font-normal text-lg tracking-[-2%] leading-[30px] font-inter text-[#212529] mt-5">
                           Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                        </p>
                        <div className="w-[191px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] mt-6 flex justify-center ">
                            <p className="w-[67px] h-[23px] font-inter font-medium text-lg leading-[23px] tracking-[-2%]
                            text-[#FFFFFF] ">Let’s Go
                            </p>
                            <Image src={icon2} alt=""/>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
            
            <div className="w-[714px] h-[532.09px] gap-1 bg-[#C4DEFD]"></div>
     
        </div>
    )
 }

 export default Work