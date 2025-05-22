 "use client"
 
 
 import BlurText from "./ui/fadeText";
import Image from "next/image";
import logo1 from "@/public/waverio.webp";
import logo2 from "@/public/carbonia.webp";
import logo3 from "@/public/logoipsum.webp";
import logo4 from "@/public/carbonia.webp";

const TrustComponent = () => {
  const logos = [logo1, logo2, logo3, logo4];

  return (
    <div className="text-center mt-10 flex flex-col items-center overflow-hidden">
      <div className="mb-8 max-w-4xl mx-auto px-4">
        <BlurText
          text="Trusted by 1600+ of the world's most popular companies"
          delay={40}
          animateBy="words"
          direction="top"
          className="text-3xl font-bold mb-8"
        />
      </div>
    </div>
  );
};

export default TrustComponent;
