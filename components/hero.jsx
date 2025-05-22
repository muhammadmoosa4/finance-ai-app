"use client";

import React, { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import RotatingText from '@/components/ui/rotatingText'
import Image from "next/image";
import EmailInput from "./email";
import heroaddon from "@/public/hero-adder.webp"
import AnimatedContent from '@/components/ui/fadeContent'
import SplitText from "./ui/splitText";
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section className="pt-36 pb-20 px-4 overflow-hidden">
      {/* <div className="bg-video">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div> */}

      <div className="container mx-auto text-center">
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
          <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 font-bold leading-tight">
          Ai powered Finance management system 
          <br />
  <span className="inline-flex mt-6 max-w-full">

    <RotatingText
      texts={['Automation', 'Accuracy', 'Transparency']}
      mainClassName="px-2 sm:px-3 md:px-4 bg-[#E5ABF3] text-black inline-flex overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-3"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
  </span>
</h1>

        </AnimatedContent>

        <h3 className="text-xl  text-gray-600 mb-8 max-w-2xl mx-auto">
          
          <SplitText
  text="An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights."
  className="text-2xl font-semibold text-center"
  delay={10}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>
        </h3>
        





        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/Aboutus">
            <Button size="lg" variant="outline" className="px-8">
              About Us
            </Button>
          </Link>
        </div>

       
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
           <EmailInput />
        </AnimatedContent>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
      <div className=" top-[12%] right-[3%] hidden md:block absolute">
        <Image src={heroaddon} height={200} width={200} alt="image" />
      </div>
      
    </section>
  );
};

export default HeroSection;
