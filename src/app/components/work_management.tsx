 /*eslint-disable @typescript-eslint/no-unused-vars*/
 import Image from "next/image"
 import work from "@/app/assets/Landing page V1/Landing page V1/desktop/Work Together Image.png"
 import icon2 from "@/app/assets/Landing page V1/desktop/Icon.png"
 const Management = () => {
    return(
        <div className="w-[1920px] h-[1588px]  py-[140px] px-[220px] top-[921px] left-[1px] ">
            <div className=" content1 w-[1480px] sm:h-full md:h-[547px] gap-[60px] flex sm:flex-col md:flex-row"> 
                <div className="w-[672px] h-[411px] gap-[60px] ">
                    <div className="w-[672px] h-[288px] gap-6 ">
                        <h1 className="w-[672px] h-[174px] text-7xl font-bold font- inter leading-[87.14px] tracking-[-2%] text-[#212529] mt-10 ">Project Management</h1>
                        <p className="w-[672px] h-[90px] font-inter font-normal text-[#212529] text-lg leading-[30px] tracking-[-2%] pt-2">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>

                    <div className="w-[201px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] mt-10 flex justify-center items-center">
                           <p className="w-[97px] h-[23px] font-inter text-lg font-medium leading-[23px] tracking-[-2%] text-[#ffffff] ">Get Started</p>

                            <Image src={icon2} alt=""/>
                    </div> 
                   </div>
                </div>

                <div className="w-[748px] h-[547px] bg-[#C4DEFD] "></div>

            </div>

            <div className="content2 w-[1480px] h-[661px] gap-[100px]   ">
                <div className="w-[670px] h-294px] gap-[60px] ml-auto ">
                    <div className="w-[670px] h-[171px] gap-6 mt-52 ">
                        <h1 className="w-[670px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-2%] text-[#212529]"> Work together</h1>
                        <p className="w-[670px] h-[60px] font-normal text-lg tracking-[-2%] leading-[30px] font-inter text-[#212529] mt-5">With whitepace, share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others.</p>

                        <div className="w-[201px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] mt-6 flex justify-center items-center">
                            <p className="w-[87px] h-[23px] font-inter font-medium text-lg leading-[23px] tracking-[-2%] text-[#FFFFFF] ">Try it now</p>
                            <Image src={icon2} alt=""/>
                        </div>
                    </div>
                  
                    
                    </div>
                         <div className="w-[710px] h-[661px] translate-y-[-300px] ">
                         <Image src={work} alt=""></Image>
                         </div>

                    </div>
            </div>

    
    )
 } 

 export default Management