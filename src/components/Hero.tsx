"use client";

import Image from 'next/image';
import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { staticData } from '@/data/static-data';

const Hero = () => {
    const { hero } = staticData;
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setText((prev) => {
                if (!isDeleting) {
                    if (prev.length < hero.videoPlayText.length) {
                        return hero.videoPlayText.slice(0, prev.length + 1);
                    } else {
                        setIsDeleting(true);
                        return prev;
                    }
                } else {
                    if (prev.length > 0) {
                        return hero.videoPlayText.slice(0, prev.length - 1);
                    } else {
                        setIsDeleting(false);
                        return "";
                    }
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isDeleting, hero.videoPlayText]);

    return (
        <div className="relative w-full min-h-[1000px] bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/image/EDSA_NorthCoast03_CGI03_05 (2) (1)3107202513245505082025161147.webp1008202515570917082025120447 (1).webp')" }}>

            {/* Video Play Button */}
            <div className="container mx-auto px-12 mt-32 flex items-center gap-4">
                <button className="flex items-center justify-center px-8 py-2 border border-white rounded-full transition-all text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
                    <Play className="fill-white" size={32} />
                </button>
                <h1 className="text-2xl md:text-3xl font-bold text-white block">{text}</h1>
            </div>
            <div className="container mx-auto px-12 py-20 bg-transparent flex flex-col md:flex-row gap-8 items-center h-full">
                {/* Right Side: Text & Button (80% width) */}
                <div className="flex flex-col items-start text-right space-y-10 md:w-[80%]">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                        <span className="text-4xl md:text-6xl font-bold text-white block mb-4">
                            {hero.mainTitle}
                        </span>
                        {hero.description}
                    </p>
                    <button type="button" className="px-20 py-3 bg-white hover:bg-white/90 text-black font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                        {hero.ctaButton}
                        <span className="text-xl">»</span>
                    </button>
                </div>

                {/* Left Side: Two Stacked Images (20% width) */}
                <div className="flex flex-col space-y-4 md:w-[20%]">
                    <div className="w-full h-40 shadow-lg shadow-white/50 flex items-center justify-center text-gray-500">
                        <Image src="/images/vector-3.svg" width={100} height={100}
                            alt="Image 1"
                            className="w-full h-full object-cover  rounded-lg"
                        />
                    </div>
                    <div className="w-full h-40 shadow-lg shadow-white/50 flex items-center justify-center text-gray-500">
                        <Image src="/images/vector-3.svg" width={100} height={100}
                            alt="Image 2"
                            className="w-full h-full object-cover  rounded-lg"
                        />
                    </div>
                </div>
            </div>
            {/* Stats Section */}
            <div className="w-full  px-12 grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
                {hero.stats.map((stat: any, index: number) => (
                    <div key={index} className="flex flex-col items-center md:items-start text-white">
                        <span className="text-lg text-gray-300 mb-1">{stat.label}</span>
                        <span className="text-4xl md:text-5xl font-bold">{stat.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
