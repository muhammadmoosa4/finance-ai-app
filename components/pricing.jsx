import Link from 'next/link';
import React from 'react';

const PricingTable = () => {
  const featuresList = [
    "Fingerstache disrupt",
    "Franzen hashtag",
    "Tilde art party",
    "Banh mi cornhole",
    "Waistcoat squid hexagon",
    "Pinterest occupy authentic",
    "Brooklyn helvetica",
    "Long Feature Two",
    "Feature One",
  ];

  const tiers = [
    {
      name: "START",
      price: "Free",
      duration: "Next 3 months",
      isPopular: false,
      borderColor: "border-gray-300",
      cardClasses: "lg:w-1/3 mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none",
      buttonDivClasses: "border-t border-gray-300 p-6 text-center rounded-bl-lg",
      features: [
        { type: "check", align: "start" },
        { type: "check", align: "start" },
        { type: "text", content: "Feature" },
        { type: "check", align: "start" },
        { type: "cross" },
        { type: "cross" },
        { type: "cross" },
        { type: "cross" },
      ],
    },
    {
      name: "PRO",
      price: "$38",
      duration: "Charging $456 per year",
      isPopular: true,
      borderColor: "border-indigo-500",
      cardClasses: "lg:w-1/3 -mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-[#E5ABF3] relative",
      buttonDivClasses: "p-6 text-center border-t border-gray-300",
      features: [
        { type: "check" },
        { type: "check" },
        { type: "text", content: "Feature" },
        { type: "check" },
        { type: "check" },
        { type: "cross" },
        { type: "cross" },
        { type: "cross" },
      ],
    },
    {
      name: "BUSINESS",
      price: "$54",
      duration: "Charging $648 per year",
      isPopular: false,
      borderColor: "border-gray-300",
      cardClasses: "lg:w-1/3 w-full mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none",
      buttonDivClasses: "p-6 text-center border-t border-gray-300",
      features: [
        { type: "check" },
        { type: "check" },
        { type: "text", content: "Feature" },
        { type: "check" },
        { type: "cross" },
        { type: "cross" },
        { type: "cross" },
        { type: "cross" },
      ],
    },
  ];

  const CheckIcon = () => (
    <svg
      fill="none"
      stroke="green" // Changed to green
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      className="w-3 h-3"
      viewBox="0 0 24 24"
    >
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
  );
  
  const CrossIcon = () => (
    <svg
      fill="none"
      stroke="red" // Changed to red
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  );

  return (
    <section className="text-gray-700 body-font overflow-hidden border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* Features List */}
        <div className="lg:w-1/4 mt-48 hidden lg:block">
          <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
            {featuresList.map((feature, index) => (
              <p key={index} className={`text-gray-900 h-12 text-center px-4 flex items-center justify-start ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                {feature}
              </p>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
          {tiers.map((tier, index) => (
            <div key={index} className={`${tier.cardClasses}`}>
              {tier.isPopular && (
                <span className="bg-black text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
              )}
              
              {/* Tier Header */}
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="tracking-widest">{tier.name}</h3>
                <h2 className="text-7xl font-tighter font-bold text-gray-900 font-medium leading-none mb-4 mt-2">
                  {tier.price}
                  {tier.name !== "START" && <span className="text-gray-600 text-base ml-1">/mo</span>}
                </h2>
                <span className="text-sm text-gray-600">{tier.duration}</span>
              </div>

              {/* Features */}
              <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                Schlitz single-origin
              </p>
              
              {tier.features.map((feature, i) => (
                feature.type === "text" ? (
                  <p key={i} className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
                    {feature.content}
                  </p>
                ) : (
                  <div key={i} className={`text-gray-600 h-12 text-center px-4 flex justify-center items-center ${
                    tier.name === "START" && (i === 0 || i === 1) ? "justify-start" : "justify-center"
                  } ${i % 2 === 1 ? "bg-gray-100" : ""}`}>
                    {feature.type === "check" && (
                      <span className="w-8 h-8 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                        <CheckIcon />
                      </span>
                    )}
                    {feature.type === "cross" && <CrossIcon />}
                  </div>
                )
              ))}

              {/* Button Section */}
              <div className={tier.buttonDivClasses}>
                <Link href={"/Pricing"}>
                <button className="flex items-center mt-auto text-white bg-[#E5ABF3] border-0 py-2 px-4 w-full focus:outline-none hover:bg-black rounded">
                  Button
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                </Link>
                <p className="text-xs text-gray-500 text-bold mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;