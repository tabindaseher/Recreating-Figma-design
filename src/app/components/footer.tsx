import Image from "next/image"
import logo from"@/app/assets/Landing page V1/desktop/Logo.png"

const Footer = () =>{
    return(
        <div className="width-[1920px] height-[461px] top-[5195px] left-[1px] pt-[140px] px-[220px] pb-[32px] gap-[200px]
        bg-[#043873] ">
            <div className="w-[1480px] h-[289px] gap-[100px] flex ">
                <div className="w-[1480px] h-[169px] gap-[100px]">
                    <div className="w-[295px] h-[169px] gap-[15px] ">
                        <div className="w-[191px] h-[34px] ">
                            <Image src={logo} alt="" ></Image>
                           
                        </div>
                        <p className="font-inter font-normal text-lg leading-[30px] tracking-[-2%] text-[#F7F7EE] w-[240px] h-[120px] mt-6">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                        </div>
                    </div>
                <div className="w-[295px] h-[127px] gap-[15px] absolute left-1/3 mt-2 pl-10">
                    <p className="w-[68px] h-[22px] text-lg font-bold leading-[21.78px] tracking-[-2%] text-[#FFFFFF] mb-4">Product</p>
                    <p className="w-[70px] h-[20px] text-base font-normal leading-[20px] tracking-[-2%] text-[#FFE492] mb-4">Overview</p>
                    <p className="w-[50px] h-[20px] text-base font-normal leading-[20px] tracking-[-2%] text-[#FFFFFF] mb-4">Pricing</p>
                    <p className="w-[177px] h-[20px] text-base font-normal leading-[20px] tracking-[-2%] text-[#FFFFFF] mt-4">Customer stories</p>

                </div>

                <div className="w-[295px] h-[130px] gap-[16px] absolute left-1/2 mt-2 pl-24">
                    <p className="w-[91px] h-[22px] text-lg font-bold leading-[21.78px] tracking-[-2%] text-[#FFFFFF] mb-4">Resources</p>
                    <p className="w-[33px] h-[22px] text-base font-normal leading-[20px] tracking-[-2%] text-[#FFFFFF] mb-4">Blog</p>
                    <p className="w-[128px] h-[20px] text-base font-normal leading-[20px] tracking-[-2%] text-[#FFFFFF] mb-4">Guides & tutorials</p>
                    <p className="w-[130px] h-[20px] text-base font-normal leading-[20px] tracking-[-2%] text-[#FFFFFF] mt-4">Help center</p>

                </div>

                <div className="w-[295px] h-[130px] gap-[16px] mt-2 pr-96">
                    <p className="w-[83px] h-[22px] text-lg font-bold leading-[21.78px] tracking-[-2%] text-[#FFFFFF] mb-4">Company</p>
                    <p className="w-[66px] h-[20px] text-base font-normal leading-[20px] tracking-[-2%] text-[#FFFFFF]  mb-4">About us</p>
                    <p className="w-[62px] h-[20px] text-base font-normal leading-[20px] tracking-[-2%] text-[#FFFFFF] mb-4">Careers</p>
                    <p className="w-[99px] h-[20px] text-base font-normal leading-[20px] tracking-[-2%] text-[#FFFFFF] mt-4">Media kit</p>

                </div>
               

            </div>
                 <div className="w-[1480px] h-[20px] flex flex-col justify-between items-center ">
                    <div className="w-[169px] h-[20px] gap-[60px]">
                    <p className="w-[169px] h-[20px] text-base font-normal leading-[20px] tracking-[-2%] text-[#FFFFFF]  "> ©2021 Whitepace LLC.</p>
                    </div>
                </div>

        </div>
    )
}
export default Footer