import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";
import CountUp from "@/components/ui/countUp";
import EmailInput from "@/components/email";
import SolutionComponent from "@/components/solution"
import ChartFeature from "@/components/ChartFeature";
import TestimonialSection from "@/components/Testemonial"
import Footer from "@/components/footer";
import AnimatedContent from "@/components/ui/fadeContent";
import TrustComponent from "@/components/trustComponent";
import Pricing from "@/components/pricing";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow:hidden  ">
    
      <HeroSection />
      <TrustComponent />
      {/* <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.2}
          threshold={0.4}
        >
           <section className="py-20 bg-[#F5F3FF]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#E5ABF3] mb-2">
                  <CountUp
                    from={stat.value}
                    to={100}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
        </AnimatedContent> */}
      <SolutionComponent />
      <ChartFeature />
      <Pricing />
          <TestimonialSection />
      
          



    </div>

  );
};

export default LandingPage;
