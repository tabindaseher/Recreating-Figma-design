import Image from "next/image"
import apple from "@/app/assets/Landing page V1/desktop/Apple.png"
import microsoft from "@/app/assets/Landing page V1/desktop/microsoft 1.png"
import slack from "@/app/assets/Landing page V1/desktop/Slack_Technologies_Logo 1.png"
import google from "@/app/assets/Landing page V1/desktop/Group 246.png"

 
 const Sponser =() =>{
    return(
        <div className="w-[1920px] h-[538px] top-[4564px] py-[140px] px-[220px] gap-[100px] ">
            <h1 className="w-[1482px] h-[87px] font-inter font-bold text-7xl leading-[87.14px] tracking-[-2%] text-center text-[#212529] " > Our sponsors</h1>

            <div className="w-[1482px] h-[71px] flex justify-between items-center mt-20">
                <div className="w-[55.47px] h-[68px] gap-1">
                    <Image src={apple} alt=""/>
                </div>
                <div className="w-[287px] h-[62px] gap-1">
                    <Image src={microsoft} alt=""/>

                </div>
                <div className="w-[281px] h-[71px] gap-1">
                    <Image src={slack} alt=""/>

                </div>
                <div className="w-[211px] h-[69.81px] gap-1">
                    <Image src={google} alt=""/>

                </div>
            </div>
     


        </div>
    )

 }
export default Sponser