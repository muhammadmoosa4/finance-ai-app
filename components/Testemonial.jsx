"use client";

import Image from "next/image";
import personImage from "@/public/person.webp";
import four from "@/public/person-4.webp";
import five from "@/public/person-5.jpeg";
import six from "@/public/11.png";
import seven from "@/public/12.jpg";
import I from "@/public/20.webp";

const testimonials = [
    {
        name: "Lisa M.",
        title: "Financial Analyst",
        text: "This platform has completely transformed how I manage my finances. The AI-powered reports and smart categorization make tracking expenses effortless. Highly recommended!",
        rating: 5,
        imageurl: personImage,
    },
    {
        name: "Jason W.",
        title: "Software Engineer",
        text: "The recurring transaction setup and budget management alerts keep me financially disciplined. No more overspending!",
        rating: 5,
        imageurl: four,
    },
    {
        name: "Sophia L.",
        title: "UX Designer",
        text: "The fully responsive interface built with Next.js and ShadCN UI makes it so smooth to use. Everything looks modern and intuitive!",
        rating: 5,
        imageurl: five,
    },
    {
        name: "Mark D.",
        title: "Accountant",
        text: "Analyzing my long-term financial health has never been easier. The visualizations and AI-powered insights provide clarity on where my money goes.",
        rating: 5,
        imageurl: I,
    },
    {
        name: "Rachel P.",
        title: "Freelance Writer",
        text: "I love getting budget alerts before I exceed my limit. It helps me stay ahead and avoid unnecessary expenses!",
        rating: 5,
        imageurl: seven,
    },
    {
        name: "John C.",
        title: "Entrepreneur",
        text: "Receiving personalized financial insights via email every month is so helpful. I now know exactly what areas to cut back on.",
        rating: 5,
        imageurl: four,
    },
];

export default function Testimonials() {
    return (
        <div className="py-12 overflow-visible">
            <div className="flex justify-center mb-4">
                <h2 className="text-center text-4xl uppercase font-bold ml-10">
                    See what our users have to say about it
                </h2>
            </div>

            <div className="mx-auto px-6 sm:px-4 md:px-6 text-center align-center justify-center">
                <div className="mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl shadow-lg"
                            >
                                {/* Stars */}
                                <div className="flex mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="#0C9347"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.1269 16.4371C10.0486 16.3911 9.9515 16.3911 9.87324 16.4371L4.29442 19.7206C4.10932 19.8295 3.88208 19.6698 3.92196 19.4587L5.17506 12.8276C5.19064 12.7451 5.16384 12.6604 5.10369 12.6019L0.373233 8.00224C0.222888 7.85605 0.308496 7.60087 0.516587 7.57492L6.89251 6.78005C6.97991 6.76915 7.05513 6.71306 7.09052 6.6324L9.77111 0.521883C9.85859 0.322458 10.1415 0.32246 10.229 0.521885L12.9095 6.6324C12.9449 6.71306 13.0201 6.76915 13.1075 6.78005L19.4834 7.57492C19.6915 7.60087 19.7771 7.85605 19.6268 8.00224L14.8964 12.6019C14.8362 12.6604 14.8094 12.7451 14.825 12.8276L16.0781 19.4587C16.118 19.6698 15.8907 19.8295 15.7056 19.7206L10.1269 16.4371Z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="md:text-2xl text-md text-gray-600 leading-relaxed">
                                    {testimonial.text}
                                </p>

                                {/* User Info */}
                                <div className="flex items-center md:mt-4 mt-2">
                                    <div className="relative w-12 h-12 mr-4">
                                        <Image
                                            src={testimonial.imageurl}
                                            alt="User avatar"
                                            className="rounded-full object-cover"
                                            fill
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            {testimonial.name}
                                        </h4>
                                        <p className="md:text-md text-sm text-gray-500">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}