import Image from 'next/image'; // Import Image from next/image
import icon1 from '@/public/icon1.webp';
import icon2 from '@/public/icon2.webp';
import icon3 from '@/public/icon3.webp';
import Link from 'next/link';
import { Button } from './ui/button';
import { Ghost } from 'lucide-react';
import AnimatedContent from './ui/fadeContent';
import multiple_account from "@/public/multiple_account.webp"
import multiple_currency from "@/public/multi-curreny.webp"

import advanced_insights from "@/public/money-management-app.png"

const SolutionComponent = () => {
    return (
        <div className="  bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                
                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 leading-tight mb-8 md:mb-0">
                    Everything you need <br className="hidden md:block" /> to manage your finance 
                    </h1>
                    
                    <Link href={"/Feature"} >
                    <Button
                    className="mt-10"
                        variant={Link}
                        size={"md"}
                    >
                        More details →
                    </Button>
                    </Link>
                </div>
                    </AnimatedContent>
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1: Workflow Automation */}



                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                            <Image
                                src={icon1}
                                alt="Workflow Automation"
                                className="mb-4"
                                width={80} // Set a fixed width
                                height={80} // Set a fixed height
                            />
                            <h2 className="text-3   xl font-bold text-gray-900 mb-4">Advanced Analytics</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                            Gain deep insights into your financial trends with powerful data analysis.                            </p>
                            <Link href={"/Feature"} >
                                <Button
                                    variant={Ghost}
                                    size={"md"}
                                >
                                    More details →
                                </Button>
                            </Link>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                            <Image
                                src={icon2}
                                alt="Lead Management"
                                className="mb-4"
                                width={80} // Set a fixed width
                                height={80} // Set a fixed height
                            />
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Receipt Scanner</h2>
                            <p className="text-gray-600 mb-6 text-lg">
Scan and categorize receipts effortlessly to stay organized.                            </p>
                            <Link href={"/Feature"} >
                                <Button
                                    variant={Ghost}
                                    size={"md"}
                                >
                                    More details →
                                </Button>
                            </Link>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                            <Image
                                src={icon3}
                                alt="Sales Forecasting"
                                className="mb-4"
                                width={80} // Set a fixed width
                                height={80} // Set a fixed height
                            />
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Budget Planning</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                            Plan, track, and manage your budget with ease.                            </p>
                            <Link href={"/Feature"} >
                                <Button
                                    variant={Ghost}
                                    size={"md"}
                                >
                                    More details →
                                </Button>
                            </Link>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                            <Image
                                src={multiple_account}
                                alt="Sales Forecasting"
                                className="mb-4"
                                width={80} // Set a fixed width
                                height={80} // Set a fixed height
                            />
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-Account Support</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                            Manage all your accounts in one place for better control                          </p>
                            <Link href={"/Feature"} >
                                <Button
                                    variant={Ghost}
                                    size={"md"}
                                >
                                    More details →
                                </Button>
                            </Link>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                            <Image
                                src={multiple_currency}
                                alt="Sales Forecasting"
                                className="mb-4"
                                width={80} // Set a fixed width
                                height={80} // Set a fixed height
                            />
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-Currency</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                            Track finances in multiple currencies without any hassle.
                            </p>
                            <Link href={"/Feature"} >
                                <Button
                                    variant={Ghost}
                                    size={"md"}
                                >
                                    More details →
                                </Button>
                            </Link>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                            <Image
                                src={advanced_insights}
                                alt="Sales Forecasting"
                                className="mb-4"
                                width={80} // Set a fixed width
                                height={80} // Set a fixed height
                            />
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Insights</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                            Receive personalized, AI-powered insights to improve your financial health.
                         </p>
                            <Link href={"/Feature"} >
                                <Button
                                    variant={Ghost}
                                    size={"md"}
                                >
                                    More details →
                                </Button>
                            </Link>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </div>
    );
};

export default SolutionComponent;
