

import Image from "next/image";
import shape1 from "@/public/shape1.webp"
import shape2 from "@/public/shape2.webp"
import personabout from "@/public/personabout.webp"
import { Button } from "../../../components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import ChartFeature from "@/components/ChartFeature";
import Feature from "./componets/Feature";
import AccordionApp from "@/components/accordian";

  
const aboutUs = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full justify-center text-black bg-white flex justify-center pb-6  ">

            <div className="flex flex-col align-center">
              <h1 className="text-6xl md:8xl  font-tight font-bold mb-4 my-32">About Us</h1>
                <div className="flex space-x-2 text-lg ml-8">
                    <span>Home</span>
                    <span>&gt;&gt;</span>
                    <span className="font-semibold text-[#E2A9F0] ">About Us</span>
                </div>
                <div className="absolute left-[10%] top-[15%] hidden md:flex">
                    <Image src={shape1} width={150} height={100} alt="shape" />
                </div>
                <div className="absolute right-[10%] top-[20%] hidden md:flex animate-spin ">
                    <Image src={shape2} width={100} height={100} alt="shape" />
                </div>
            </div>


            <Feature />

            <div className="flex justify-center mt-8">
                    <h1 className="text-6xl md:text-4xl ml-4  font-bold">
                    If you want to know anything asked us
                    </h1>
            </div >
        
            <div>
                <AccordionApp />
            </div>




                </div>
        </> 
    )
}


export default aboutUs