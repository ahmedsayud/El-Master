"use client";

import Image from 'next/image';
import { Play } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { staticData } from '@/data/static-data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './Header';

const Hero = () => {
    const { hero } = staticData;
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

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
        <div ref={containerRef} className=" w-full min-h-[135vh] overflow-hidden " dir="ltr">

            {/* Parallax Background */}
            <motion.div
                style={{ y, backgroundImage: "url('/image/EDSA_NorthCoast03_CGI03_05 (2) (1)3107202513245505082025161147.webp1008202515570917082025120447 (1).webp')" }}
                className="absolute inset-0 w-full h-[135%] bg-cover bg-center bg-no-repeat z-0"
            />
<Header />
            {/* Content Container */}
            <div className="relative z-10 w-full h-full">
                {/* Video Play Button */}
                <div className="container mx-auto px-12 mt-32 flex items-center gap-6">
                    <button className="flex items-center justify-center w-16 h-10 border border-white rounded-full transition-all text-white hover:bg-white hover:text-black hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)] group">
                        <Play className="fill-white group-hover:fill-black transition-colors" size={24} />
                    </button>
                    <span className="text-2xl text-white font-dancing transform ">play video</span>
                </div>

                <div className="container mx-auto px-6 sm:px-12 py-16 md:py-20 bg-transparent flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-16 h-full font-suisse">
                    {/* Left Side: Two images stacked vertically */}
                    <div className="flex flex-col items-start gap-4 lg:gap-6 w-full md:w-[35%] lg:w-[32%] flex-shrink-0 pt-20">
                        {/* First Image (top one) */}
                        <div className="w-[184px] h-[115px] shadow-2xl shadow-black/50 rounded-lg overflow-hidden flex-shrink-0 relative group cursor-pointer">
                            <Image
                                src="/image/ilbosco17082025121406.webp"
                                width={184}
                                height={115}
                                alt="Project View 1"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10">
                                <Image
                                    src="/image/Solare-logo17082025130627.webp"
                                    width={80}
                                    height={40}
                                    alt="Solare Logo"
                                    className="object-contain w-20 h-auto brightness-0 invert"
                                />
                            </div>
                        </div>

                        {/* Second Image (bottom one) */}
                        <div className="w-[184px] h-[115px] shadow-2xl shadow-black/50 rounded-lg overflow-hidden flex-shrink-0 relative group cursor-pointer">
                            <Image
                                src="/image/ilbosco17082025121406.webp"
                                width={184}
                                height={115}
                                alt="Project View 2"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10">
                                <Image
                                    src="/image/il-bosco-city17082025131107.webp"
                                    width={80}
                                    height={40}
                                    alt="Il Bosco City Logo"
                                    className="object-contain w-20 h-auto brightness-0 invert"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Text & Button */}
                    <div className="flex flex-col items-start text-left space-y-8 w-full md:w-[60%] lg:w-[55%] pt-8 md:pt-0 pl-4 md:pl-8 lg:pl-16">
                        <div className="text-lg md:text-xl leading-relaxed font-light text-white">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 leading-tight tracking-tight">
                                {hero.mainTitle}
                            </h2>
                            <p className="max-w-3xl text-base md:text-lg lg:text-xl font-normal opacity-95">
                                {hero.description}
                            </p>
                        </div>
                        <button
                            type="button"
                            className="px-10 py-4 bg-white text-black font-normal text-sm rounded-full"
                        >
                            {hero.ctaButton}
                        </button>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="  w-full "dir="rtl">
                    <div className=" grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/20 pt-8 px-8 w-[60%]">
                        {hero.stats.map((stat: any, index: number) => (
                            <div key={index} className="flex flex-col items-start text-white group cursor-default">
                                <span className="text-sm font-medium tracking-widest text-gray-300/80 uppercase mb-2 group-hover:text-white transition-colors">{stat.label}</span>
                                <span className="text-5xl md:text-6xl font-normal tracking-tighter">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
