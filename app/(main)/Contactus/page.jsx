
import Form from "@/components/Form"
import Image from "next/image";
import shape1 from "@/public/shape1.webp"
import shape2 from "@/public/shape2.webp"
const ContactUs = () => {
    return (
        <>
        <div className="flex flex-col items-center w-full justify-center text-black bg-white flex justify-center pb-6  ">

            <h1 className="text-6xl md:8xl  font-tight font-bold mb-4 my-32">Contact Us</h1>
            <div className="flex space-x-2 text-lg">
                <span>Home</span>
                <span>&gt;&gt;</span>
                <span className="font-semibold text-[#E2A9F0]">Contact Us</span>
            </div>
            <div className="absolute left-[10%] top-[15%] hidden md:flex">
                <Image  src={shape1} width={150} height={100} alt="shape"/>
            </div>
            <div className="absolute right-[10%] top-[20%] hidden md:flex animate-spin ">
                <Image  src={shape2} width={100} height={100} alt="shape"/>
            </div>
        </div>
        <div>
            <Form />
        </div>
        </>
    );
};

export default ContactUs;
