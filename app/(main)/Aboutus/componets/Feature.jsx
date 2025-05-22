import Image from "next/image";
import personImage from "@/public/person.webp";
import greentick from "@/public/ticks.png"
import personabout from "@/public/personabout.webp"


import AnimatedContent from "@/components/ui/fadeContent";
import Form from "@/components/Form";
const Feature = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Section with Images */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.2}
          threshold={0.4}
        >
           <Image
              src={personabout}
              width={250}
              height={250}
              alt="Sales Analytics"
              className="rounded-xl shadow-lg h-auto w-full"
              placeholder="blur"
            />

        </AnimatedContent>
          {/* Main Image with Animation */}
          <div className="relative animate-moveY">
           
        

           
          </div>
        </div>

        {/* Right Section with Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Top Section */}
       
          <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.2}
          threshold={0.4}
        >
            <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
            Why Choose Us?           </h1>
            <p className="text-lg text-gray-600 font-bold">
            AI-Powered Insights: Smart categorization and analysis to help you make informed financial decisions.

            </p>
            <p className="text-lg text-gray-600 font-bold">
            User-Friendly Interface: A seamless and responsive design that ensures an effortless experience.

            </p>
            <p className="text-lg text-gray-600 font-bold">
            Comprehensive Financial Tools: From expense tracking to budget planning, we offer everything you need in one platform.

            </p>
          </div>

        </AnimatedContent>
          {/* Bottom Features */}
      
          <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.2}
          threshold={0.4}
        >
                <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-7 ">
                <div >
                    <h2 className="text-6xl text-[#E5ABF3] font-bold">50k</h2>
                    <p className="text-sm ">Happy Clients</p>
                </div>
                <div >
                    <h2 className="text-6xl text-[#E5ABF3] font-bold">+78K</h2>
                    <p className="text-sm ">Completed Projects</p>
                </div>
                <div >
                    <h2 className="text-6xl text-[#E5ABF3] font-bold">100%</h2>
                    <p className="text-sm ">Client Satisfaction</p>
                </div>
            </div>
          </div>
          
        </AnimatedContent>
        </div>
      </div>

      <Form />
    </div>
  );
};

export default Feature;
