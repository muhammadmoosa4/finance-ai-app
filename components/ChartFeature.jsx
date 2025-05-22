import Image from "next/image";
import personImage from "@/public/person.webp";
import greentick from "@/public/ticks.png"

import AnimatedContent from "./ui/fadeContent";
const ChartFeature = () => {
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
              src={personImage}
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
            All-in-One Finance Management: Smart, Simple, and Secure.            </h1>
            <p className="text-lg text-gray-600 font-bold">
            Manage your finances effortlessly with AI-driven tools, secure budgeting, and seamless account integration
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
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={greentick}
                  alt="Tick"
                  width={60}
                  height={60}
                  className="text-[#E5ABF3] border-r-[50%]"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                AI-Powered Financial Insights                </h2>
                <p className="text-gray-600 text-xl">
                Automatically categorize and scan receipts for easy tracking.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={greentick}
                  alt="Tick"
                  width={60}
                  height={60}
                  className="text-[#E5ABF3] border-r-[50%]"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Effortless Expense Tracking                </h2>
                <p className="text-gray-600 text-xl">
                Automatically categorize and scan receipts for easy tracking.

                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={greentick}
                  alt="Tick"
                  width={60}
                  height={60}
                  className="text-[#E5ABF3] border-r-[50%]"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Streamline processes
                </h2>
                <p className="text-gray-600 text-xl">
                  Automate repetitive tasks such as lead nurturing, follow-ups,
                  and order processing with Salesphere.
                </p>
              </div>
            </div>
          </div>
          
        </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default ChartFeature;
