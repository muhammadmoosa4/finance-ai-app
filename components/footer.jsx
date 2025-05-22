import Link from 'next/link';
import Themelogo from "@/components/theme_logo";
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';  // Import icons

const Footer = () => {
    return (
        <>
            <footer className="bg-white text-black py-16 px-4 sm:px-6 lg:px-8 md:ml-0 ml-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4">
                    {/* First Column (Double width) */}
                    <div className="md:col-span-2 space-y-8">
                        <Themelogo />
                        <p className="max-w-sm text-lg">
                            Transforming ideas into digital reality through innovative solutions and creative design.
                        </p>

                        {/* Social Media Links */}
                        <div className="flex space-x-6">
                            <Link href="https://www.linkedin.com" passHref>
                                <p target="_blank" className='text-2xl hover:text-gray-800 transition-colors'>
                                    <FaLinkedin />
                                </p>
                            </Link>
                            <Link href="https://www.facebook.com" passHref>
                                <p target="_blank" className='text-2xl hover:text-gray-800 transition-colors'>
                                    <FaFacebook />
                                </p>
                            </Link>
                            <Link href="https://www.instagram.com" passHref>
                                <p target="_blank" className='text-2xl hover:text-gray-800 transition-colors'>
                                    <FaInstagram />
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Second Column - Main Links */}
                    <div className="space-y-6 sm:mt-8">
                        <h3 className="text-xl font-semibold text-black mt-6 md:mt-0">Quick Links</h3>
                        <nav className="flex flex-col space-y-3">
                        <Link href="/">
                                <p className='hover:text-gray-800 transition-colors text-lg'>Home</p>
                            </Link>
                            <Link href="/dashboard">
                                <p className='hover:text-gray-800 transition-colors text-lg'>Dashboard</p>
                            </Link>
                            <Link href="/transaction">
                                <p className='hover:text-gray-800 transition-colors text-lg'>Transaction</p>
                            </Link>
                            <Link href="/Pricing">
                                <p className='hover:text-gray-800 transition-colors text-lg'>Pricing</p>
                            </Link>
                        </nav>
                    </div>

                    {/* Third Column - Resources */}
                    <div className="space-y-6 sm:mt-8">
                        <h3 className="text-xl font-semibold text-black mt-6 md:mt-0">Resources</h3>
                        <nav className="flex flex-col space-y-3">
                            <Link href="/Contactus">
                                <p className='hover:text-gray-800 transition-colors text-lg'>Contact</p>
                            </Link>
                            <Link href="/Aboutus">
                                <p className='hover:text-gray-800 transition-colors text-lg'>About</p>
                            </Link>
                            <Link href="/privacypolicy">
                                <p className='hover:text-gray-800 transition-colors text-lg'>Privacy Policy</p>
                            </Link>
                            <Link href="/termsandconditions">
                                <p className='hover:text-gray-800 transition-colors text-lg'>Terms & Conditions</p>
                            </Link>
                            
                        </nav>
                    </div>
                </div>

                {/* Copyright Bottom */}
                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-300 text-center md:text-left">
                    <p className="text-lg">&copy; {new Date().getFullYear()} SharpTechItSolution All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
