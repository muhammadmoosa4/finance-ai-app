"use client";

import { useState } from "react";
import Themelogo from "../components/theme_logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { IoMenu, IoClose } from "react-icons/io5";
import { Skeleton } from "@/components/ui/skeleton"; // Importing ShadCN Skeleton
import { cn } from "@/lib/utils"; // Utility for conditional classnames

const ThemeHeader = () => {
  const [sidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(false); // For skeleton effect

  const sidebartoggler = () => {
    setLoading(true);
    setTimeout(() => {
      setSidebar((prev) => !prev);
      setLoading(false);
    }, 300); // Simulate loading delay
  };

  return (
    < >
      
      <div className="w-full flex sticky fixed top-0 bg-[#FFFFFF]  border-b-2 h-16 align-items-center z-10 justify-center">
        <div className="sticky flex justify-between items-center  w-[85%]">
          <div className="logo">
            <Themelogo />
          </div>
          <div className="hidden md:flex items-center">
            {[
              {
                name : "home" , path : "/"},
              { name: "Feature", path: "/Feature" },
              { name: "Pricing", path: "/Pricing" },
              { name: "Contact Us", path: "/Contactus" }, 
              {name : "About Us", path:"/Aboutus"},
              
            ].map((link) => (
              <Link key={link.name} href={link.path}>
                <Button variant="ghost" className="text-gray-800 text-lg space-x-2 hover:text-gray-600 transition-colors duration-300">
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-4">
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="outline">
                  <LayoutDashboard size={18} />
                  <span className="hidden lg:inline">Dashboard</span>
                </Button>
              </Link>
              <Link href="/transaction/create">
                <Button className="bg-[#E5ABF3] flex items-center gap-2">
                  <PenBox size={18} />
                  <span className="hidden lg:inline">Add Transaction</span>
                </Button>
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline">Login</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
            </SignedIn>
          </div>

          {/* Mobile Sidebar Toggle */}
          <div className="md:hidden">
            <button onClick={sidebartoggler}>
              <IoMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 w-64 h-full bg-white shadow-xl transition-transform duration-300 z-50",
          sidebar ? "translate-x-0" : "translate-x-full"
        )}
      >
        {loading ? (
          <Skeleton className="w-full h-full bg-gray-200" />
        ) : (
          <div className="flex flex-col h-full p-4">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <Button variant="ghost" size="icon" onClick={sidebartoggler} className="hover:bg-gray-100 rounded-full">
                <IoClose className="w-6 h-6 text-gray-600" />
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 flex-1">
              {[
                { name: "Feature", path: "/Features" },
                { name: "Pricing", path: "/pricing" },
                { name: "Contact Us", path: "/Contactus" },
              ].map((link) => (
                <Link href={link.path} key={link.name}>
                  <Button variant="ghost" size={"md"} className="w-full justify-start px-4 py-6 text-gray-800 hover:bg-gray-50">
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-4 border-t pt-4">
              <SignedIn>
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full gap-2 py-6">
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                  </Button>
                </Link>
                <Link href="/transaction/create">
                  <Button className="w-full gap-2 py-6 bg-[#E5ABF3] hover:bg-[#d79be5]">
                    <PenBox size={18} />
                    <span>Add Transaction</span>
                  </Button>
                </Link>
                <div className="flex justify-center">
                  <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
                </div>
              </SignedIn>
              <SignedOut>
                <SignInButton forceRedirectUrl="/dashboard">
                  <Button variant="outline" className="w-full py-6">Login</Button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {sidebar && <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={sidebartoggler} />}
    </>
  );
};

export default ThemeHeader;
